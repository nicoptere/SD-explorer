import Tab from "./Tab";

import { CONFIG } from "../Config";
const seed = CONFIG.settings.options.seed;
const steps = CONFIG.settings.options.steps;
const guidance = CONFIG.settings.options.guidance;

export default class InferenceTab extends Tab {
  constructor(scope) {
    super(scope);

    Object.assign(this, {
      prompt: "",
      prompt_actions: {
        type: "grid",
        randomize: () => {
          scope.emit("randomize", scope.inference);
        },
        copy: () => {
          scope.clipboard = scope.inference.field.value;
        },
        paste: () => {
          scope.inference.field.value = scope.clipboard;
        },
      },
      seed,
      steps,
      guidance,
      actions: {
        type: "grid",
        compute: () => {
          scope.emit("inference", scope.inference);
        },
        undo: () => {
          scope.emit("undo");
        },
      },
    });
  }
}
