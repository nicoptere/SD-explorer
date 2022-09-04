export const CONFIG = {
  settings: {
    // init prompts
    promptKeyword: null,
    randomizePrompts: true,

    // default parameters values
    options: {
      seed: {
        value: -1,
        min: -1,
        max: 10000,
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
      zone_size: {
        value: 512,
        min: 64,
        max: 512,
        step: 64,
      },
      canvas_size: {
        value: 1024,
        min: 64,
        max: 4096,
        step: 1,
      },
      unit: {
        value: 1,
        min: 0,
        max: 1,
        step: 0.01,
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
