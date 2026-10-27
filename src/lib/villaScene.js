import * as THREE from "three";

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const smooth = (t) => t * t * (3 - 2 * t);

export function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (canvas.getContext("webgl2") || canvas.getContext("webgl")));
  } catch {
    return false;
  }
}

/**
 * A procedurally built contemporary villa: six architectural stages that
 * assemble in place as the visitor scrolls through the pinned section.
 * Each stage group owns its own materials so fades never fight one another.
 */
export function createVillaScene(canvas, { quality = "high" } = {}) {
  const low = quality === "low";
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !low,
    alpha: false,
    powerPreference: "high-performance",
  });
  renderer.setClearColor(0x121311, 1);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.06;
  if ("outputColorSpace" in renderer) renderer.outputColorSpace = THREE.SRGBColorSpace;
  if (!low) {
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  }

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x121311, 30, 78);
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 300);

  // ---------------------------------------------------------------- materials
  const makeMat = (params, baseOpacity = 1) => {
    const mat = new THREE.MeshStandardMaterial({ transparent: true, ...params });
    mat.userData = { fadable: true, baseOpacity };
    return mat;
  };

  const warmMaterials = [];
  const palette = () => {
    const warm = makeMat({ color: 0xffd7a1, emissive: 0xffab5c, emissiveIntensity: 0.9, roughness: 0.6 }, 1);
    warmMaterials.push(warm);
    return {
      concrete: makeMat({ color: 0x9d9990, roughness: 0.94, metalness: 0.02 }),
      stone: makeMat({ color: 0xcfc7b6, roughness: 0.82 }),
      timber: makeMat({ color: 0x6f4d2f, roughness: 0.72, metalness: 0.04 }),
      dark: makeMat({ color: 0x2b2c29, roughness: 0.55, metalness: 0.35 }),
      glass: makeMat({ color: 0xa9c4cc, roughness: 0.07, metalness: 0.62, side: THREE.DoubleSide }, 0.34),
      lawn: makeMat({ color: 0x40492f, roughness: 1 }),
      water: makeMat({ color: 0x1b282c, roughness: 0.1, metalness: 0.55 }, 0.92),
      paving: makeMat({ color: 0x8d887c, roughness: 0.95 }),
      interior: makeMat({ color: 0xe6dfd1, roughness: 0.9 }),
      wood: makeMat({ color: 0x8a6239, roughness: 0.6 }),
      fabric: makeMat({ color: 0xbab1a1, roughness: 1 }),
      foliage: makeMat({ color: 0x55613f, roughness: 1 }),
      trunk: makeMat({ color: 0x3b332a, roughness: 1 }),
      warm,
    };
  };

  const box = (parent, mat, w, h, d, x, y, z) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = !low;
    mesh.receiveShadow = !low;
    parent.add(mesh);
    return mesh;
  };
  const cyl = (parent, mat, r, h, x, y, z) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 12), mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = !low;
    mesh.receiveShadow = !low;
    parent.add(mesh);
    return mesh;
  };
  const ball = (parent, mat, r, x, y, z, scaleY = 1) => {
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 10, 8), mat);
    mesh.position.set(x, y, z);
    mesh.scale.y = scaleY;
    mesh.castShadow = !low;
    parent.add(mesh);
    return mesh;
  };

  // -------------------------------------------------------------- the ground
  const ground = new THREE.Group();
  const groundPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(140, 140),
    makeMat({ color: 0x1b1c19, roughness: 1 })
  );
  groundPlane.rotation.x = -Math.PI / 2;
  groundPlane.receiveShadow = !low;
  ground.add(groundPlane);
  scene.add(ground);

  // ------------------------------------------------------------ stage: blueprint
  const blueprint = new THREE.Group();
  const grid = new THREE.GridHelper(64, 64, 0xa68a64, 0x363733);
  grid.position.y = 0.015;
  grid.material.transparent = true;
  grid.material.opacity = 0.5;
  grid.material.userData = { fadable: false, baseOpacity: 0.5 };
  blueprint.add(grid);

  const planSource = new THREE.Group();
  const planMat = palette().concrete;
  box(planSource, planMat, 13, 0.42, 8.8, 0, 0.21, 0);
  box(planSource, planMat, 12.4, 0.3, 8.2, 0, 3.25, 0);
  box(planSource, planMat, 7.2, 3, 5.2, -2.1, 4.85, -1.4);
  box(planSource, planMat, 13, 0.34, 8.8, 0, 6.5, 0);
  const edgeMat = new THREE.LineBasicMaterial({ color: 0xa68a64, transparent: true, opacity: 0.55 });
  edgeMat.userData = { fadable: true, baseOpacity: 0.55 };
  planSource.children.forEach((child) => {
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(child.geometry), edgeMat);
    edges.position.copy(child.position);
    blueprint.add(edges);
    child.geometry.dispose();
  });
  scene.add(blueprint);

  // ------------------------------------------------------------ stage: structure
  const structure = new THREE.Group();
  const S = palette();
  box(structure, S.concrete, 13, 0.42, 8.8, 0, 0.21, 0);
  box(structure, S.concrete, 12.4, 0.32, 8.2, 0, 3.25, 0);
  box(structure, S.concrete, 13.4, 0.36, 8.8, 0, 6.5, 0);
  [-5.4, 5.4].forEach((x) => {
    [-3.4, 3.4].forEach((z) => cyl(structure, S.concrete, 0.19, 3.1, x, 1.55, z));
  });
  box(structure, S.concrete, 12.6, 0.26, 0.34, 0, 3.05, 3.5);
  box(structure, S.concrete, 12.6, 0.26, 0.34, 0, 3.05, -3.5);
  [-2, 0, 2].forEach((x) => cyl(structure, S.concrete, 0.17, 3.1, x, 1.55, -0.4));
  [-5.9, 5.9].forEach((x) => box(structure, S.concrete, 0.4, 6.3, 0.4, x, 3.15, -3.9));
  scene.add(structure);

  // -------------------------------------------------------------- stage: facade
  const facade = new THREE.Group();
  const F = palette();
  box(facade, F.stone, 12.4, 3.05, 0.28, 0, 1.55, -4);
  box(facade, F.stone, 0.28, 3.05, 4.6, -6.2, 1.55, 0);
  box(facade, F.stone, 0.28, 3.05, 4.6, 6.2, 1.55, 0);
  box(facade, F.concrete, 1.6, 3.05, 0.3, -5.2, 1.55, 4);
  box(facade, F.timber, 3.4, 3.05, 0.26, 9.9, 1.55, 0);
  box(facade, F.stone, 7.4, 3, 5.4, -2.1, 4.85, -1.4);
  box(facade, F.stone, 0.26, 3, 5.4, -5.7, 4.85, -1.4);
  box(facade, F.stone, 7.4, 0.34, 0.28, -2.1, 3.5, 1.3);
  box(facade, F.concrete, 0.4, 6.9, 0.4, 5.9, 3.45, 4.1);
  box(facade, F.concrete, 0.4, 6.9, 0.4, -6.1, 3.45, 4.1);
  const finCount = low ? 12 : 22;
  for (let i = 0; i < finCount; i += 1) {
    const x = 5.6 + (i / (finCount - 1)) * -3.2;
    box(facade, F.timber, 0.09, 3.02, 0.5, x, 1.55, 4.05);
  }
  box(facade, F.paving, 4.2, 0.18, 3, -8.6, 0.09, 4.2);
  scene.add(facade);

  // -------------------------------------------------- stage: glazing + landscape
  const glazing = new THREE.Group();
  const G = palette();
  box(glazing, G.glass, 6.6, 2.8, 0.06, 0.2, 1.6, 3.98);
  box(glazing, G.glass, 6.4, 2.6, 0.06, -2.1, 4.85, 1.28);
  box(glazing, G.glass, 0.06, 2.6, 4.6, 1.55, 4.85, -1.4);
  box(glazing, G.dark, 0.09, 2.9, 0.12, -2.9, 1.6, 4);
  box(glazing, G.dark, 0.09, 2.9, 0.12, 3.3, 1.6, 4);
  box(glazing, G.dark, 0.14, 0.14, 1.2, 0.2, 2.98, 3.5);
  const lamp1 = new THREE.PointLight(0xffcf97, 0, 16);
  lamp1.position.set(0, 2.4, 1.4);
  const lamp2 = new THREE.PointLight(0xffcf97, 0, 14);
  lamp2.position.set(-2.1, 4.7, -0.6);
  const lamp3 = new THREE.PointLight(0xffd9a8, 0, 14);
  lamp3.position.set(-8.6, 2.2, 4.2);
  glazing.add(lamp1, lamp2, lamp3);
  box(glazing, G.warm, 5.4, 0.12, 0.1, 0.1, 2.9, 2.6);
  box(glazing, G.warm, 4.6, 0.1, 0.1, -2.1, 6.3, 1);
  scene.add(glazing);

  const landscape = new THREE.Group();
  const L = palette();
  box(landscape, L.lawn, 30, 0.12, 22, 0, 0.06, 0);
  box(landscape, L.water, 6.4, 0.34, 3.4, -9.4, 0.17, 5.6);
  box(landscape, L.paving, 9, 0.14, 2.2, 0, 0.07, 6.4);
  box(landscape, L.stone, 3.6, 0.16, 1.2, 0, 0.08, 8.1);
  const treeCount = low ? 5 : 9;
  for (let i = 0; i < treeCount; i += 1) {
    const x = -26 + i * 6.4 + (i % 2 ? 1.6 : -1.4);
    const z = i % 2 ? -11 : -8.2;
    cyl(landscape, L.trunk, 0.16, 3.4, x, 1.7, z);
    ball(landscape, L.foliage, 1.5, x, 3.9, z, 0.8);
    ball(landscape, L.foliage, 1.1, x + 0.7, 3.3, z + 0.3, 0.7);
  }
  if (!low) {
    [-4, -3, -2, 2, 3, 4].forEach((x) => ball(landscape, L.foliage, 0.5, x, 0.5, 7.6, 0.7));
  }
  scene.add(landscape);

  // ------------------------------------------------------------ stage: interior
  const interior = new THREE.Group();
  const I = palette();
  box(interior, I.wood, 11.6, 0.1, 7.6, 0, 0.5, 0);
  box(interior, I.fabric, 3.2, 0.75, 1.5, -3, 0.9, 0.6);
  box(interior, I.fabric, 3.2, 0.5, 0.35, -3, 1.35, -0.1);
  box(interior, I.stone, 1.5, 0.32, 0.9, -3, 0.68, 2);
  box(interior, I.stone, 1.1, 0.72, 1.1, -1.1, 0.88, 2.1);
  box(interior, I.wood, 2.6, 0.1, 1.2, 2.2, 1.3, -1.4);
  box(interior, I.dark, 0.12, 1.25, 1.2, 3.4, 0.75, -1.4);
  [-0.4, 0.4].forEach((o) => {
    box(interior, I.wood, 0.4, 0.9, 0.4, 1.6 + o, 0.95, 1.1);
    box(interior, I.wood, 0.4, 0.9, 0.4, 2.8 + o, 0.95, 1.1);
  });
  box(interior, I.stone, 3.4, 0.9, 0.9, 1.2, 0.95, -3.1);
  box(interior, I.interior, 3.6, 0.3, 2.6, -2.1, 3.45, -1.4);
  box(interior, I.fabric, 2.8, 0.34, 2, -2.1, 3.75, -1.4);
  box(interior, I.warm, 0.14, 0.1, 2.4, -1.2, 6.28, -1.4);
  scene.add(interior);

  // ------------------------------------------------------------- stage: final
  const finishing = new THREE.Group();
  const N = palette();
  box(finishing, N.warm, 0.05, 1.1, 0.05, -8.6, 0.7, 4.2);
  box(finishing, N.warm, 0.05, 1.1, 0.05, -9.6, 0.7, 6.6);
  box(finishing, N.wood, 1.4, 0.06, 1.4, 8.2, 0.06, 5.4);
  ball(finishing, N.foliage, 0.7, 8.2, 0.8, 5.4, 0.9);
  cyl(finishing, N.trunk, 0.1, 1.2, 8.2, 0.6, 5.4);
  scene.add(finishing);

  // -------------------------------------------------------------- lighting
  const hemi = new THREE.HemisphereLight(0xf5f3ee, 0x151614, 0.5);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff1da, 1.35);
  sun.position.set(20, 22, 16);
  if (!low) {
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.left = -30;
    sun.shadow.camera.right = 30;
    sun.shadow.camera.top = 26;
    sun.shadow.camera.bottom = -14;
    sun.shadow.camera.far = 90;
    sun.shadow.bias = -0.0006;
  }
  scene.add(sun);
  const rim = new THREE.DirectionalLight(0x9fb4c4, 0.35);
  rim.position.set(-18, 10, -16);
  scene.add(rim);

  // ------------------------------------------------------------- camera keys
  const KEYS = [
    { pos: [2, 25, 12], target: [0, 0.6, 0] },
    { pos: [-18, 13, 18], target: [0, 3, 0] },
    { pos: [0, 5.2, 24], target: [0, 3.1, 0] },
    { pos: [12, 6.4, 17], target: [-1, 2.8, 0.5] },
    { pos: [3.4, 3.2, 8.4], target: [-1.4, 2.4, -1.2] },
    { pos: [-15, 8.5, 21], target: [0, 2.6, 0] },
  ];

  const members = [
    { group: blueprint, from: 0, to: 1.15, fadeOut: true },
    { group: structure, from: 0.7, to: 1.35 },
    { group: facade, from: 1.7, to: 2.35 },
    { group: glazing, from: 2.7, to: 3.4 },
    { group: landscape, from: 2.9, to: 3.6 },
    { group: interior, from: 3.75, to: 4.45 },
    { group: finishing, from: 4.8, to: 5.4 },
  ];

  const pos = new THREE.Vector3();
  const tgt = new THREE.Vector3();
  let progress = 0;
  let idle = 0;
  let inView = true;
  let pageVisible = true;
  let frame = 0;
  const clock = new THREE.Clock();

  const setGroup = (group, amount) => {
    group.visible = amount > 0.004;
    if (!group.visible) return;
    group.traverse((obj) => {
      const mat = obj.material;
      if (!mat || !mat.userData || mat.userData.fadable !== true) return;
      const base = mat.userData.baseOpacity ?? 1;
      mat.opacity = base * amount;
      mat.depthWrite = amount > 0.55;
    });
    group.position.y = -0.5 * (1 - amount);
  };

  const apply = () => {
    const st = progress * 5;

    members.forEach((m) => {
      let t = smooth(clamp((st - m.from) / (m.to - m.from), 0, 1));
      if (m.fadeOut) t = 1 - smooth(clamp((st - 0.55) / 1.1, 0, 1));
      setGroup(m.group, t);
    });

    // the survey grid reads strongest at the start, then recedes
    grid.material.opacity = 0.5 * (1 - smooth(clamp((st - 3.2) / 2, 0, 1)));

    // interior light comes up with the glazing stage, exterior lighting last
    const glow = smooth(clamp((st - 2.9) / 1.1, 0, 1));
    lamp1.intensity = 26 * glow;
    lamp2.intensity = 22 * glow;
    lamp3.intensity = 18 * smooth(clamp((st - 4.4) / 1, 0, 1));
    warmMaterials.forEach((m) => { m.opacity = 0.9 * glow; });

    // daylight warms as the house completes
    sun.intensity = 1.15 + 0.5 * smooth(clamp((st - 2) / 3, 0, 1));
    hemi.intensity = 0.42 + 0.2 * smooth(clamp((st - 1) / 4, 0, 1));

    // camera travels with the stages
    const s = clamp(st, 0, 5);
    const i = Math.min(4, Math.floor(s));
    const f = smooth(s - i);
    const a = KEYS[i];
    const b = KEYS[i + 1];
    pos.set(
      a.pos[0] + (b.pos[0] - a.pos[0]) * f,
      a.pos[1] + (b.pos[1] - a.pos[1]) * f,
      a.pos[2] + (b.pos[2] - a.pos[2]) * f
    );
    tgt.set(
      a.target[0] + (b.target[0] - a.target[0]) * f,
      a.target[1] + (b.target[1] - a.target[1]) * f,
      a.target[2] + (b.target[2] - a.target[2]) * f
    );
    camera.position.copy(pos);
    camera.lookAt(tgt);
  };

  const renderFrame = () => {
    frame = requestAnimationFrame(renderFrame);
    if (!inView || !pageVisible) return;
    const dt = clock.getDelta();
    idle += dt;
    apply();
    // an almost imperceptible drift, so the scene always feels alive
    if (!low) {
      camera.position.x += Math.sin(idle * 0.22) * 0.05;
      camera.position.y += Math.cos(idle * 0.18) * 0.03;
      camera.lookAt(tgt);
    }
    renderer.render(scene, camera);
  };

  const resize = () => {
    const parent = canvas.parentElement;
    if (!parent) return;
    const w = parent.clientWidth;
    const h = parent.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, low ? 1.25 : 1.75);
    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h, false);
    camera.aspect = w / Math.max(1, h);
    camera.updateProjectionMatrix();
  };

  const observer = new IntersectionObserver(
    ([entry]) => { inView = entry.isIntersecting; },
    { threshold: 0 }
  );
  observer.observe(canvas);
  const onVisibility = () => { pageVisible = !document.hidden; };
  document.addEventListener("visibilitychange", onVisibility);
  window.addEventListener("resize", resize);

  resize();
  apply();
  renderFrame();

  return {
    setProgress(p) { progress = clamp(p, 0, 1); },
    resize,
    dispose() {
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          const list = Array.isArray(obj.material) ? obj.material : [obj.material];
          list.forEach((m) => m.dispose());
        }
      });
      renderer.dispose();
    },
  };
}