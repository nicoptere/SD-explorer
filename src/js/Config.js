export const CONFIG = {
  // tab names
  tab_names: ["inference", "img2img", "inpainting", "upscale"],
  // events / methods names
  methodNames: [
    "inference",
    "img2img",
    "inpainting",
    "upscale",
    "clear",
    "undo",
    "save_canvas",
    "show_upscale",
    "save_upscale",
  ],

  settings: {
    // init prompts
    promptKeyword: null, //"portrait", //
    randomizePrompts: true, //false, //

    icons: {
      inference: "magic_button",
      img2img: "image",
      inpainting: "draw",
      upscale: "zoom_out_map",
    },

    // default parameters values
    options: {
      seed: {
        value: 1,
        min: -1,
        max: 1e10,
        step: 1,
      },
      steps: {
        value: 40,
        min: 10,
        max: 100,
        step: 1,
      },
      strength: {
        value: 0.65,
        min: 0,
        max: 1,
        step: 0.01,
      },
      guidance: {
        value: 7,
        min: 0,
        max: 25,
        step: 0.01,
      },
      brush_size: {
        value: 96,
        min: 1,
        max: 256,
        step: 1,
      },
      region_size: {
        value: 512,
        min: 64,
        max: 768,
        step: 64,
      },
      canvas_size: {
        value: 2048,
        min: 64,
        max: 8192,
        step: 1,
      },
      unit: {
        value: 1,
        min: 0,
        max: 1,
        step: 0.01,
      },
      scale: {
        value: 4,
        min: 1,
        max: 4,
        step: 1,
      },
    },

    keymap: {
      inference: {
        compute: "c",
        randomize: "r",
      },

      img2img: {
        compute: "v",
        randomize: "t",
      },

      inpainting: {
        compute: "b",
        randomize: "y",
      },
    },
  },
};
