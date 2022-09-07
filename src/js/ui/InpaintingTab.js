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
      prompt_actions: {
        type: "grid",
        replay: () => {
          scope.emit("randomize", scope.inpainting);
        },
        content_copy: () => {
          scope.clipboard = scope.inpainting.field.value;
        },
        content_paste: () => {
          scope.inpainting.field.value = scope.clipboard;
        },
      },
      prompt: "",
      seed,
      strength,
      guidance,
      actions: {
        type: "grid",
        play_arrow: () => {
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
        delete: () => {
          scope.emit("clear_drawpad");
        },
        // mode: {
        //   type: "radio",
        //   draw: () => {
        //     scope.emit("draw_mode", "draw");
        //   },
        //   erase: () => {
        //     scope.emit("draw_mode", "erase");
        //   },
        // },
      },
    });
  }
}
