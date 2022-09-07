import Tab from "./Tab";

import { CONFIG } from "../Config";
const seed = CONFIG.settings.options.seed;
const steps = CONFIG.settings.options.steps;
const guidance = CONFIG.settings.options.guidance;

export default class InferenceTab extends Tab {
  constructor(scope) {
    super(scope);

    Object.assign(this, {
      prompt_actions: {
        type: "grid",
        replay: () => {
          scope.emit("randomize", scope.inference);
        },
        content_copy: () => {
          scope.clipboard = scope.inference.field.value;
        },
        content_paste: () => {
          scope.inference.field.value = scope.clipboard;
        },
      },
      prompt: "",
      seed,
      steps,
      guidance,
      actions: {
        type: "grid",
        play_arrow: () => {
          scope.emit("inference", scope.inference);
        },
        undo: () => {
          scope.emit("undo");
        },
      },
    });
  }
}
