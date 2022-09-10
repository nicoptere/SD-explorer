import { EventEmitter } from "eventemitter3";
import { Prompter } from "./Prompter";
import { CONFIG } from "./Config";

import PromptPanel from "./panels/PromptPanel";
import DrawingPanel from "./panels/DrawingPanel";
import TabsPanel from "./panels/TabsPanel";
import ImagePanel from "./panels/ImagePanel";
import PreviewPanel from "./panels/PreviewPanel";

export default class UI extends EventEmitter {
  constructor() {
    super();
    const image = new ImagePanel("inset: 246px auto auto 33px; width:320px;");
    const draw = new DrawingPanel("inset: 607px auto auto 32px; width:320px;");
    const settings = new TabsPanel("inset: 32px auto auto 32px; width:320px;");
    const prompt = new PromptPanel(
      "inset: 685px auto auto 492px; width:512px;"
    );
    // const preview = new PreviewPanel(
    //   "inset: 32px auto auto 32px; width:calc( 100% - 64px );"
    // );

    // store references
    this.image = image;
    this.drawing = draw;
    this.settings = settings;
    this.inference = settings.inference;
    this.img2img = settings.img2img;
    this.inpainting = settings.inpainting;
    this.upscale = settings.upscale;
    this.prompt = prompt;

    // listen for events
    settings.on("tab_change", (e) => {
      this.tabIndex = e.index;
      this.emit("tab_change", e.index);
    });

    CONFIG.methodNames.forEach((name) => {
      //captures clicks from all tabs
      settings.on(name, () => {
        // console.log("tabs call", this[name]);
        this.emit(name, this[name]);
      });

      // captures clicks from prompt panel
      prompt.on(name, () => {
        // console.log("prompt call", this[name]);
        this.emit(name, this[name]);
      });
    });

    // region
    const region_reisze = () => {
      this.emit("resize_region", image.region.width, image.region.height);
    };
    image.region.bindings.width.on("change", region_reisze);
    image.region.bindings.height.on("change", region_reisze);

    //image
    image.canvas.bindings.width.on("change", (e) => {
      if (e.last == false) return;
      this.emit("resize_canvas", image.canvas.width, image.canvas.height);
    });
    image.canvas.bindings.height.on("change", (e) => {
      if (e.last == false) return;
      this.emit("resize_canvas", image.canvas.width, image.canvas.height);
    });
    image.canvas.bindings.color.on("change", (e) => {
      if (e.last) this.emit("canvas_color", e.value);
    });
    image.canvas.bindings.grain.on("change", (e) => {
      if (e.last) this.emit("canvas_grain", e.value);
    });
    image.on("clear", () => {
      this.emit("clear");
    });
    image.on("save_canvas", () => {
      this.emit("save_canvas");
    });

    //filter & randomizes the prompts
    if (CONFIG.settings.promptKeyword != null) {
      Prompter.filter(CONFIG.settings.promptKeyword); //
    }
    this.prompt.text = Prompter.next();
    if (CONFIG.settings.randomizePrompts === true) {
      Prompter.randomize();
      this.prompt.text = Prompter.random();
    }

    // keyboard bindings
    this.addKeyboardShortcuts();
  }

  // return the config object to be passed to Node
  getConfig(object) {
    let cfg = Object.assign({}, object);
    cfg = Object.assign(cfg, this.region);
    cfg.prompt = this.prompt.text.trim();
    cfg.width = this.image.region.width;
    cfg.height = this.image.region.height;

    cfg.column = this.image.region.column;
    cfg.row = this.image.region.row

    //clean up
    for (let key in cfg) {
      if (typeof cfg[key] === "function" || typeof cfg[key] === "object") {
        delete cfg[key];
      }
    }
    return cfg;
  }

  //keyboard
  addKeyboardShortcuts() {
    window.addEventListener("keydown", (e) => {
      //prevents shortcuts when editing text
      const focus = this.prompt.field === document.activeElement;
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
