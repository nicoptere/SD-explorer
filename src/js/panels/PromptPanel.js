import { CONFIG } from "../Config";
import { Prompter } from "../Prompter";
import Panel from "./Panel";

export default class PromptPanel extends Panel {
  constructor(style) {
    super(style, "manage_search", "prompt");

    this.tabIndex = 0;
    this.fields = [];
    const prompts = [{ title: "edit_note" }, { title: "add" }];
    const tab = this.pane
      .addTab({
        pages: prompts,
      })
      .on("select", (e) => {
        this.tabIndex = e.index;

        if (e.index == tab.pages.length - 1) {
          const field = this.addTextArea(tab.pages[e.index], this, "value", 8);
          this.fields.push(field);

          const page = tab.addPage({ title: "edit_note" });
          tab.pages.forEach((p, i, a) => {
            p.title = i == a.length - 1 ? "add" : "edit_note";
          });

          this.layout();
          setTimeout(() => {
            tab.pages[tab.pages.length - 2].selected = true;
          }, 16);
        }
      });

    const field = this.addTextArea(tab.pages[0], this, "value", 8);
    this.fields.push(field);
    tab.pages[0].selected = true;
    field.value = "132";
    const buttons = {};
    buttons.restart_alt = () => {
      this.text = Prompter.next();
      this.emit("randomize");
    };

    CONFIG.tab_names.forEach((name) => {
      const icon = CONFIG.settings.icons[name];
      buttons[icon] = () => {
        this.emit(name);
      };
    });

    this.buttonGrid(this.pane, buttons);
    this.layout();
  }

  get text() {
    return this.fields[this.tabIndex].value;
  }
  set text(v) {
    this.fields[this.tabIndex].value = v;
  }
}
