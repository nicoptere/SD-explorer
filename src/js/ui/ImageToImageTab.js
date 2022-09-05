import Tab from "./Tab";

import { CONFIG } from "../Config";
const seed = CONFIG.settings.options.seed;
const strength = CONFIG.settings.options.strength;
const guidance = CONFIG.settings.options.guidance;

export default class ImageToImageTab extends Tab {
  constructor(scope) {
    super(scope);

    Object.assign(this, {
      prompt: "",
      prompt_actions: {
        type: "grid",
        randomize: () => {
          scope.emit("randomize", scope.img2img);
        },
        copy: () => {
          scope.clipboard = scope.img2img.field.value;
        },
        paste: () => {
          scope.img2img.field.value = scope.clipboard;
        },
      },
      seed,
      strength,
      guidance,
      // brush_size,
      // color: "#ff0055ff",
      actions: {
        type: "grid",
        compute: () => {
          scope.emit("img2img", scope.img2img);
        },
        undo: () => {
          scope.emit("undo");
        },
      },
    });
  }
}
