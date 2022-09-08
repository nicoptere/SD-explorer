import { EventEmitter } from "eventemitter3";
import Draggable from "draggable";
import { Pane } from "tweakpane";
import * as TextareaPlugin from "@pangenerator/tweakpane-textarea-plugin";
import * as EssentialsPlugin from "@tweakpane/plugin-essentials";
import { CONFIG } from "../Config";

const parser = new DOMParser();
export default class Panel extends EventEmitter {
  constructor(style = "", icon = "settings", label = "settings") {
    super();

    const str = `<div style="${style}" class="panel-draggable">
        <div class="picto">${icon}</div>
        <div class="label">${label}</div>
        <div class="panel-contents"></div>
    </div>`;

    let panel = parser.parseFromString(str, "text/html").body.firstChild;
    // panel = panel.querySelector(".panel-draggable");
    this.element = panel;
    document.body.appendChild(panel);

    new Draggable(panel, {
      filterTarget: (e) => {
        return e == panel;
      },
    });
    panel.style.removeProperty("position");

    const container = panel.querySelector(".panel-contents");
    this.pane = new Pane({ container });
    this.pane.registerPlugin(TextareaPlugin);
    this.pane.registerPlugin(EssentialsPlugin);

    //keeps track of the controls
    this.bindings = {};
  }

  grow(value = 1) {
    // let els = this.element.querySelectorAll(".tp-lblv_l");
    // for (let e of els) {
    //   e.style.flex = "unset";
    // }
    let els = this.element.querySelectorAll(".tp-lblv_v");
    for (let e of els) {
      e.style.flexGrow = value;
    }
  }

  addInput(object, key) {
    if (key === "pane" || key === "bindings") return;
    if (key === "color") {
      let control = object.pane.addInput(object, "color", {
        picker: "inline",
        // expanded: true,
      });
      object.bindings[key] = control;
      return;
    }

    let control;
    const type = typeof object[key];
    switch (type) {
      case "string":
      case "boolean":
        object.pane.addInput(object, key);
        break;
      case "function":
        const btn = object.pane.addButton({
          title: key + this.getShortcut(object.pane, key),
          label: "",
        });
        btn.on("click", () => {
          object[key]();
        });
        break;
      default:
        let props = object[key];
        object[key] = object[key].value;
        control = object.pane.addInput(object, key, props);
        break;
    }

    object.bindings[key] = control;
  }

  addTextArea(
    object,
    key = "prompt",
    lineCount = 6,
    placeholder = "hic sunt dracones..."
  ) {
    object[key] = "";
    const cfg = {
      view: "textarea",
      lineCount,
      placeholder,
    };
    let field = this.pane.addInput(object, key, cfg);
    // store a path to the input textarea Element ( holy shit!!! )
    object.field = field.controller_.valueController.view.inputElement;
    object.field.style.fontSize = 15 + "px";
    object.field.style.lineHeight = 17 + "px";
  }

  buttonGrid(folder, params) {
    delete params.type;
    const names = [];
    const methods = [];
    for (let key in params) {
      let shortcut = this.getShortcut(folder, key);
      names.push(key + shortcut);
      methods.push(params[key]);
    }
    folder
      .addBlade({
        view: "buttongrid",
        size: [names.length, 1],
        cells: (i, j) => ({
          title: names[i],
        }),
        label: "",
      })
      .on("click", (ev) => {
        methods[ev.index[0]]();
      });
  }

  radioButtons(object, key, parent, params) {
    const names = [];
    const values = [];
    let i = 0;
    const methods = [];
    for (let key in params) {
      names.push(key);
      methods.push(params[key]);
      values.push(i++);
    }
    object[key] = 1;
    const group = parent
      .addInput(object, key, {
        view: "radiogrid",
        groupName: key,
        size: [names.length, 1],
        cells: (i, j) => ({
          title: names[i],
          value: values[i],
        }),
        label: key,
      })
      .on("change", (ev) => {
        console.log("click", ev.value);
        methods[ev.value]();
      });
    group.value = 0;
    return group;
  }

  // add shortcut leeter
  getShortcut(folder, key) {
    let shortcut = "";
    if (
      CONFIG.settings.keymap[folder.title] != undefined &&
      CONFIG.settings.keymap[folder.title][key] != undefined
    ) {
      shortcut = " (" + CONFIG.settings.keymap[folder.title][key] + ")";
    }
    return shortcut;
  }
}
