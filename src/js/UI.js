import { Pane } from "tweakpane";
import * as TextareaPlugin from "@pangenerator/tweakpane-textarea-plugin";
import * as EssentialsPlugin from "@tweakpane/plugin-essentials";
import { EventEmitter } from "eventemitter3";
import { Prompter } from "./Prompter";
import Draggable from "draggable";
import { CONFIG } from "./Config";
import InferenceTab from "./ui/InferenceTab";
import ImageToImageTab from "./ui/ImageToImageTab";
import InpaintingTab from "./ui/InpaintingTab";
import UpscaleTab from "./ui/UpscaleTab";
import ImageAndRegionPanel from "./ui/ImageAndRegionPanel";
let pane;
export default class UI extends EventEmitter {
  constructor(panelId = "#App") {
    super();

    const panel = document.querySelector(panelId);

    new Draggable(panel, {
      filterTarget: (e) => {
        return e == panel;
      },
    });

    const container = panel.querySelector(".settings-contents");
    pane = new Pane({ container });
    pane.registerPlugin(TextareaPlugin);
    pane.registerPlugin(EssentialsPlugin);

    // tabs
    this.tabIndex = 0;
    const tab = pane
      .addTab({
        pages: [
          { title: "inference" },
          { title: "img2img" },
          { title: "inpainting" },
          { title: "upscale" },
        ],
      })
      .on("select", (e) => {
        this.tabIndex = e.index;
        this.emit("tab_change", e.index);
      });

    //to copy /paste prompts
    this.clipboard = "";
    // params
    this.inference = new InferenceTab(this);
    this.img2img = new ImageToImageTab(this);
    this.inpainting = new InpaintingTab(this);
    this.upscale = new UpscaleTab(this);

    //   populate panel
    this.addTab(tab.pages[0], this.inference);
    this.addTab(tab.pages[1], this.img2img);
    this.addTab(tab.pages[2], this.inpainting);
    this.addTab(tab.pages[3], this.upscale);

    //region and canvas settings
    new ImageAndRegionPanel(this, pane);

    //filter & randomizes the prompts
    if (CONFIG.settings.promptKeyword != null) {
      Prompter.filter(CONFIG.settings.promptKeyword); //
    }
    this.inference.field.value = Prompter.next();
    this.img2img.field.value = Prompter.next();
    this.inpainting.field.value = Prompter.next();
    if (CONFIG.settings.randomizePrompts === true) {
      Prompter.randomize();
      this.inference.field.value = Prompter.random();
      this.img2img.field.value = Prompter.random();
      this.inpainting.field.value = Prompter.random();
    }

    // maximize all controls width ( hacky hacky...)
    let els = document.querySelectorAll(".tp-lblv_v");
    for (let i = 0; i < els.length; i++) {
      els[i].style.flexGrow = 1;
    }
    pane.refresh();
    this.addKeyboardShortcuts();
  }

  addTab(folder, object) {
    // expose the sliders (to the drawingPad for instance)
    const bindings = {};
    for (let key in object) {
      if (object[key] == "") {
        const cfg = {
          view: "textarea",
          lineCount: 6,
          placeholder: "hic sunt dracones...",
        };
        let field = folder.addInput(object, key, cfg);

        //
        // store a path to the input textarea Element ( holy shit!!! )
        object.field = field.controller_.valueController.view.inputElement;
        object.field.style.fontSize = 15 + "px";
        object.field.style.lineHeight = 17 + "px";
        //
        //
      } else if (
        typeof object[key] === "string" ||
        typeof object[key] === "boolean"
      ) {
        bindings[key] = folder.addInput(object, key);
      } else if (typeof object[key] === "function") {
        const btn = folder.addButton({
          title: key + this.getShortcut(folder, key),
          label: "",
        });
        btn.on("click", () => {
          object[key]();
        });
      } else if (key === "color") {
        const color = folder.addInput(object, "color", {
          picker: "inline",
          // expanded: true,
        });
        bindings[key] = color;
      } else {
        switch (object[key].type) {
          case "list":
            delete object[key].type;
            const options = object[key].options;
            object[key] = "123";
            folder.addInput(object, key, options); //TODO list
            break;

          // a sub folder (ie drawing ) // TODO move to another panel
          case "folder":
            let sub = folder.addFolder({ title: key, expanded: true });
            delete object[key].type;
            this.addTab(sub, object[key]);
            break;

          case "grid":
            //buttons list
            delete object[key].type;
            this.buttonGrid(folder, object[key]);
            break;

          case "radio":
            //radio nbuttons
            delete object[key].type;
            this.buttonGrid(folder, object[key]);
            // this.radioButtons(object, key, folder, object[key]);
            break;

          default:
            let props = object[key];
            object[key] = object[key].value;
            const field = folder.addInput(object, key, props);
            bindings[key] = field;
            break;
        }
      }
    }
    object.bindings = bindings;
    return folder;
  }

  buttonGrid(folder, params) {
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

  // return the config object to be passed to Node
  getConfig(object) {
    let cfg = Object.assign({}, object);
    cfg = Object.assign(cfg, this.region);
    if (object.field != undefined) {
      cfg.prompt = object.field.value.trim();
    }
    //clean up
    for (let key in cfg) {
      if (typeof cfg[key] === "function" || typeof cfg[key] === "object") {
        delete cfg[key];
      }
    }
    return cfg;
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

  //keyboard
  addKeyboardShortcuts() {
    window.addEventListener("keydown", (e) => {
      //prevents shortcuts when editing text
      const f0 = this.inference.field === document.activeElement;
      const f1 = this.img2img.field === document.activeElement;
      const f2 = this.inpainting.field === document.activeElement;
      const focus = f0 || f1 || f2;

      if (focus) return;
      switch (e.key) {
        case "z":
          if (e.ctrlKey) this.emit("undo");
          break;

        case CONFIG.settings.keymap.inference.compute:
          this.emit("inference", this.inference);
          break;
        case CONFIG.settings.keymap.inference.randomize:
          this.emit("randomize", this.inference);
          break;

        case CONFIG.settings.keymap.img2img.compute:
          this.emit("img2img", this.img2img);
          break;
        case CONFIG.settings.keymap.img2img.randomize:
          this.emit("randomize", this.img2img);
          break;

        case CONFIG.settings.keymap.inpainting.compute:
          this.emit("inpainting", this.inpainting);
          break;
        case CONFIG.settings.keymap.inpainting.randomize:
          this.emit("randomize", this.inpainting);
          break;
      }
    });
  }
}
