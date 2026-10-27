import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Image } from "@/components/ui/image";
import SectionLabel from "@/components/site/SectionLabel";
import { IMAGES } from "@/lib/images";
import { buildStages } from "@/content/site";

export default function BuildSequence() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const reduce = useReducedMotion();
  const [mode, setMode] = useState("loading"); // loading | webgl | images
  const [stage, setStage] = useState(0);

  // Progress of the pinned sequence, read straight from scroll position.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let raf = 0;
    const read = () => {
      raf = 0;
      const rect = container.getBoundingClientRect();
      const total = container.offsetHeight - window.innerHeight;
      const p = total <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / total));
      const next = Math.min(buildStages.length - 1, Math.floor(p * buildStages.length));
      setStage((prev) => (prev === next ? prev : next));
      if (sceneRef.current) sceneRef.current.setProgress(p);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(read); };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Boot the 3D scene where it is supported and motion is welcome.
  useEffect(() => {
    if (reduce) { setMode("images"); return; }
    let disposed = false;
    let api = null;
    import("@/lib/villaScene").then(({ createVillaScene, supportsWebGL }) => {
      if (disposed) return;
      if (!supportsWebGL()) { setMode("images"); return; }
      try {
        const low = window.innerWidth < 768;
        api = createVillaScene(canvasRef.current, { quality: low ? "low" : "high" });
        sceneRef.current = api;
        setMode("webgl");
      } catch {
        setMode("images");
      }
    });
    return () => {
      disposed = true;
      sceneRef.current = null;
      if (api) api.dispose();
    };
  }, [reduce]);

  const current = buildStages[stage];

  return (
    <section id="build" className="relative bg-charcoal text-ivory">
      <div ref={containerRef} className="relative h-[420vh] md:h-[520vh]">
        <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
          <canvas
            ref={canvasRef}
            aria-label="Animated three-dimensional model of a house being built, in six stages"
            className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${mode === "webgl" ? "opacity-100" : "opacity-0"}`}
          />

          {mode !== "webgl" && (
            <div className="absolute inset-0">
              {buildStages.map((s, i) => (
                <div
                  key={s.index}
                  className={`absolute inset-0 transition-opacity duration-[1200ms] ease-editorial ${i === stage ? "opacity-100" : "opacity-0"}`}
                >
                  <Image
                    src={IMAGES.stages[i]}
                    alt={`${s.title} stage of a contemporary home`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/10 to-charcoal/85" />

          <div className="pointer-events-none absolute inset-0 flex flex-col justify-between py-24 md:py-28">
            <div className="container-editorial">
              <SectionLabel index="05" label="The Method" tone="light" />
              <h2 className="display mt-6 max-w-[13ch] text-[clamp(2rem,5vw,4.2rem)]">
                From drawing to handover.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory/60">
                Scroll through the sequence — this is how a home is planned, structured, clad and
                finished before you ever turn a key.
              </p>
            </div>

            <div className="container-editorial flex items-end justify-between gap-8">
              <div className="max-w-md">
                <div className="flex items-baseline gap-4">
                  <span className="display text-[clamp(2rem,4vw,3rem)] text-bronze">
                    {current.index}
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.index}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="text-lg text-ivory md:text-xl">{current.title}</p>
                      <p className="mt-1 text-sm text-ivory/55">{current.caption}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="hidden gap-2 md:flex">
                {buildStages.map((s, i) => (
                  <span
                    key={s.index}
                    className={`block h-px w-10 transition-all duration-700 ${
                      i <= stage ? "bg-bronze" : "bg-ivory/25"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 pl-6 xl:block">
            <div className="flex flex-col gap-4">
              {buildStages.map((s, i) => (
                <div key={s.index} className="flex items-center gap-3">
                  <span
                    className={`block h-px transition-all duration-700 ${
                      i === stage ? "w-8 bg-bronze" : "w-3 bg-ivory/25"
                    }`}
                  />
                  <span
                    className={`eyebrow transition-colors duration-700 ${
                      i === stage ? "text-ivory" : "text-ivory/35"
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}