import Tab from "./Tab";

import { CONFIG } from "../Config";
const seed = CONFIG.settings.options.seed;
const strength = CONFIG.settings.options.strength;
const guidance = CONFIG.settings.options.guidance;
const brush_size = CONFIG.settings.options.brush_size;
const unit = CONFIG.settings.options.unit;

export default class InpaintingTab extends Tab {
  constructor(scope) {
    super(scope);

    Object.assign(this, {
      prompt: "",
      prompt_actions: {
        type: "grid",
        randomize: () => {
          scope.emit("randomize", scope.inpainting);
        },
        copy: () => {
          scope.clipboard = scope.inpainting.field.value;
        },
        paste: () => {
          scope.inpainting.field.value = scope.clipboard;
        },
      },
      seed,
      strength,
      guidance,
      actions: {
        type: "grid",
        compute: () => {
          scope.emit("inpainting", scope.inpainting);
        },
        undo: () => {
          scope.emit("undo");
        },
      },
      //ADD folder + settings (keyboard shortcuts) + source
      drawing: {
        type: "folder",
        brush_size,
        softness: unit,
        alpha: unit,
        clear: () => {
          scope.emit("clear_drawpad");
        },
        mode: {
          type: "radio",
          draw: () => {
            scope.emit("draw_mode", "draw");
          },
          erase: () => {
            scope.emit("draw_mode", "erase");
          },
        },
      },
    });
  }
}
