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

import PromptPanel from "./panels/PromptPanel";
import DrawingPanel from "./panels/DrawingPanel";
import TabsPanel from "./panels/TabsPanel";
import ImagePanel from "./panels/ImagePanel";

export default class UI extends EventEmitter {
  constructor() {
    super();
    const image = new ImagePanel("inset: 498px auto auto 32px; width:320px;");
    const draw = new DrawingPanel("inset: 264px auto auto 32px; width:320px;");
    const settings = new TabsPanel("inset: 32px auto auto 32px; width:320px;");
    const prompt = new PromptPanel("inset: 28px auto auto 374px; width:512px;");

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

    CONFIG.methods.forEach((name) => {
      //captures clicks from all tabs
      settings.on(name, () => {
        console.log("tabs call", this[name]);
        this.emit(name, this[name]);
      });

      // captures clicks from prompt panel
      prompt.on(name, () => {
        console.log("prompt", this[name]);
        this.emit(name, this[name]);
      });
    });
    settings.on("undo", () => {
      this.emit("undo");
    });
    settings.on("save", () => {
      console.log("save_upscale");
      this.emit("save_upscale");
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
      this.emit("canvas_color", e.value);
    });
    image.canvas.bindings.grain.on("change", (e) => {
      if (e.last) this.emit("canvas_grain", e.value);
    });
    image.on("clear", () => {
      this.emit("clear");
    });
    image.on("save", () => {
      this.emit("save_canvas");
    });

    //randomize prompts

    //filter & randomizes the prompts
    if (CONFIG.settings.promptKeyword != null) {
      Prompter.filter(CONFIG.settings.promptKeyword); //
    }
    this.prompt.field.value = Prompter.next();
    if (CONFIG.settings.randomizePrompts === true) {
      Prompter.randomize();
      this.prompt.field.value = Prompter.random();
    }
  }

  // return the config object to be passed to Node
  getConfig(object) {
    let cfg = Object.assign({}, object);
    cfg = Object.assign(cfg, this.region);
    cfg.prompt = this.prompt.field.value.trim();
    cfg.width = this.image.region.width;
    cfg.height = this.image.region.height;

    //clean up
    for (let key in cfg) {
      if (typeof cfg[key] === "function" || typeof cfg[key] === "object") {
        delete cfg[key];
      }
    }
    return cfg;
  }
}
