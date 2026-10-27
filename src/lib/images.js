/**
 * Central image registry. Every visual on the site resolves through here,
 * so replacing a photograph with the client's own is a one-line change.
 *
 * All URLs below are permanent media URLs. Services reuse the six build-stage
 * renders (which desktop visitors otherwise only see as the 3D sequence), and
 * materials reuse the project interior details.
 */
const MEDIA = "https://media.base44.com/images/public/6ada40fd81f3b245cc59420a/";

const STAGE = {
  blueprint: `${MEDIA}e5b3f17d2_generated_a57fec7c.png`,
  structure: `${MEDIA}c46cabdb3_generated_c0ec7696.png`,
  facade: `${MEDIA}6ee22bd9f_generated_304cdc75.png`,
  glazing: `${MEDIA}c947a00be_generated_3b1aa289.png`,
  interior: `${MEDIA}848a118c0_generated_c04b2a46.png`,
  complete: `${MEDIA}d496312ac_generated_5db6c96a.png`,
};

const DETAIL = {
  one: `${MEDIA}55239d071_generated_9cc9d0ac.png`,
  two: `${MEDIA}4d196dafa_generated_a601eee3.png`,
  three: `${MEDIA}0b9df6fb0_generated_6f5d5d0c.png`,
  four: `${MEDIA}7b2d9d1e8_generated_70fc4f6c.png`,
  five: `${MEDIA}8b8d520ca_generated_cd9df722.png`,
  six: `${MEDIA}6c2bb695b_generated_7617d07f.png`,
};

export const IMAGES = {
  heroVilla: `${MEDIA}114a0e1c8_generated_de431c8e.png`,
  philosophyDetail: `${MEDIA}b09739f48_generated_288f1346.png`,
  contactVilla: `${MEDIA}114a0e1c8_generated_de431c8e.png`,

  // The six stages of the signature build sequence (also the WebGL fallback).
  stages: [
    STAGE.blueprint,
    STAGE.structure,
    STAGE.facade,
    STAGE.glazing,
    STAGE.interior,
    STAGE.complete,
  ],

  projects: {
    cover1: `${MEDIA}6ed33788a_generated_da5313f7.png`,
    cover2: `${MEDIA}fe6775bd4_generated_ada5711d.png`,
    cover3: `${MEDIA}a5978df72_generated_3a4dd7bc.png`,
    cover4: `${MEDIA}a1226252a_generated_dafcc619.png`,
    cover5: `${MEDIA}fdae242db_generated_da03abb0.png`,
    cover6: `${MEDIA}b693b281d_generated_0403b213.png`,
    detail1: DETAIL.one,
    detail2: DETAIL.two,
    detail3: DETAIL.three,
    detail4: DETAIL.four,
    detail5: DETAIL.five,
    detail6: DETAIL.six,
  },

  services: {
    serviceArchitecture: STAGE.blueprint,
    serviceConstruction: STAGE.structure,
    serviceInterior: STAGE.interior,
    serviceRenovation: STAGE.glazing,
    serviceTurnkey: STAGE.complete,
    serviceStructural: STAGE.facade,
  },

  materials: {
    materialStone: DETAIL.six,
    materialTimber: DETAIL.five,
    materialGlass: DETAIL.four,
    materialConcrete: DETAIL.two,
    materialLight: DETAIL.three,
    materialDetail: DETAIL.one,
  },
};

/** Look up a service or material image by the key stored in the content file. */
export const imageByKey = (key) => IMAGES.services[key] || IMAGES.materials[key] || IMAGES[key] || "";