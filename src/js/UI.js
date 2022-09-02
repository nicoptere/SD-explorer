import { Pane } from "tweakpane";
import * as TextareaPlugin from "@pangenerator/tweakpane-textarea-plugin";
import * as EssentialsPlugin from "@tweakpane/plugin-essentials";
import { EventEmitter } from "eventemitter3";
import { Prompter } from "./Prompter";
import Draggable from "draggable";
import { CONFIG } from "./Config";
let pane;
export default class UI extends EventEmitter {
  constructor() {
    super();

    const panel = document.querySelector("#panel");
    new Draggable(panel, {
      filterTarget: (e) => {
        return e == panel;
      },
    });

    const container = document.querySelector("#settings");
    pane = new Pane({ container });
    pane.registerPlugin(TextareaPlugin);
    pane.registerPlugin(EssentialsPlugin);

    const tab = pane.addTab({
      pages: [
        { title: "inference" },
        { title: "img2img" },
        { title: "inpainting" },
      ],
    });
    this.tabIndex = 0;
    tab.on("select", (e) => {
      this.tabIndex = e.index;
      this.emit("tab_change", e.index);
    });

    // tabs common options

    const seed = {
      value: 4096,
      min: -1,
      max: 10000,
      step: 1,
    };
    const steps = {
      value: 40,
      min: 10,
      max: 100,
      step: 1,
    };
    const strength = {
      value: 0.65,
      min: 0,
      max: 1,
      step: 0.01,
    };
    const guidance = {
      value: 7,
      min: 0,
      max: 25,
      step: 0.01,
    };
    const brush_size = {
      value: 96,
      min: 1,
      max: 256,
      step: 1,
    };

    this.inference = {
      prompt: "",
      randomize: () => {
        this.emit("randomize", this.inference);
      },
      seed,
      steps,
      guidance,
      compute: () => {
        this.emit("inference", this.inference);
      },
      undo: () => {
        this.emit("undo");
      },
    };

    this.img2img = {
      prompt: "",
      randomize: () => {
        this.emit("randomize", this.img2img);
      },
      seed,
      strength,
      guidance,
      // brush_size,
      // color: "#ff0055ff",
      compute: () => {
        this.emit("img2img", this.img2img);
      },
      undo: () => {
        this.emit("undo");
      },
    };

    this.inpainting = {
      prompt: "",
      randomize: () => {
        this.emit("randomize", this.inpainting);
      },
      seed,
      strength,
      guidance,
      brush_size,
      softness: strength, // strength is 0->1 so ...
      alpha: strength,
      compute: () => {
        this.emit("inpainting", this.inpainting);
      },
      undo: () => {
        this.emit("undo");
      },
      clear_drawpad: () => {
        this.emit("clear_drawpad");
      },
    };

    this.settings = {
      width: {
        value: 512,
        min: 64,
        max: 512,
        step: 64,
      },
      height: {
        value: 512,
        min: 64,
        max: 512,
        step: 64,
      },
      clear: () => {
        this.emit("clear");
      },
    };

    //   populate panel
    this.addMenu(this.inference, tab.pages[0]);
    this.addMenu(this.img2img, tab.pages[1]);
    this.addMenu(this.inpainting, tab.pages[2]);
    pane.addSeparator();
    this.addMenu(this.settings, pane);

    //randomizes the prompts
    Prompter.filter("portrait"); //
    this.inference.field.value = Prompter.random();
    this.img2img.field.value = Prompter.random();
    this.inpainting.seed = -1;
    this.inpainting.field.value = Prompter.random();
    this.inpainting.alpha = 1;

    pane.refresh();

    //keyboard
    window.addEventListener("keydown", (e) => {
      //prevents shortcuts when editing text
      const f0 = this.inference.field === document.activeElement;
      const f1 = this.img2img.field === document.activeElement;
      const f2 = this.inpainting.field === document.activeElement;
      const focus = f0 || f1 || f2;

      if (focus) return;
      switch (CONFIG.keymap[e.key]) {
        case "z":
          if (e.ctrlKey) this.emit("undo");
          break;

        case "compute-inference":
          this.emit("inference", this.inference);
          break;
        case "compute-img2img":
          this.emit("img2img", this.img2img);
          break;
        case "compute-inpainting":
          this.emit("inpainting", this.inpainting);
          break;

        case "randomize-inference":
          this.emit("randomize", this.inference);
          break;
        case "randomize-img2img":
          this.emit("randomize", this.img2img);
          break;
        case "randomize-inpainting":
          this.emit("randomize", this.inpainting);
          break;
      }
    });
  }

  getConfig(object) {
    let cfg = Object.assign({}, object);
    cfg = Object.assign(cfg, this.settings);
    cfg.prompt = object.field.value.trim();
    //clean up
    for (let key in cfg) {
      if (typeof cfg[key] === "function" || typeof cfg[key] === "object") {
        delete cfg[key];
      }
    }
    return cfg;
  }

  addMenu(object, folder) {
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
        // store a path to the input textarea !!! ( holy shit )
        object.field = field.controller_.valueController.view.inputElement;
        // (grow the textarea width) hacky hacky...
        object.field.parentNode.parentNode.style.flexGrow = "3";
        //
        //
      } else if (typeof object[key] === "function") {
        const btn = folder.addButton({
          title: key,
        });
        btn.on("click", () => {
          object[key]();
        });
      } else if (key === "color") {
        const color = folder.addInput(object, "color", {
          picker: "inline",
          expanded: true,
        });
        bindings[key] = color;
      } else {
        let props = object[key];
        object[key] = object[key].value;
        const field = folder.addInput(object, key, props);
        if (key == "width" || key == "height") {
          field.on("change", (e) => {
            this.emit("resize");
          });
        }
        bindings[key] = field;
      }
    }
    object.bindings = bindings;
    return folder;
  }
}
