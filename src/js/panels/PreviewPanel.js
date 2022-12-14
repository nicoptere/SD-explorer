import { CONFIG } from "../Config";
import { Prompter } from "../Prompter";
import Panel from "./Panel";

export default class PreviewPanel extends Panel {
  constructor(style) {
    super(style, "manage_search", "prompt");

    // this.addTextArea(this, "prompt", 8);

    const buttons = {};
    buttons.restart_alt = () => {
      this.field.value = Prompter.next();
      this.emit("randomize");
    };

    CONFIG.methods.forEach((name) => {
      const icon = CONFIG.settings.icons[name];
      buttons[icon] = () => {
        this.emit(name);
      };
    });

    this.buttonGrid(this.pane, buttons);
    const els = this.element.querySelectorAll(".tp-lblv_l");
    for (let e of els) {
      e.parentNode.removeChild(e);
    }
    this.grow(1);
  }
}
