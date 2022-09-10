import { CONFIG } from "../Config";
import Panel from "./Panel";

const seed = CONFIG.settings.options.seed;
const steps = CONFIG.settings.options.steps;
const strength = CONFIG.settings.options.strength;
const guidance = CONFIG.settings.options.guidance;
const scale = CONFIG.settings.options.scale;

export default class TabsPanel extends Panel {
  constructor(style) {
    super(style, "settings", "model settings");

    // params
    this.inference = {
      seed,
      steps,
      guidance,
      actions: {
        type: "grid",
        play_arrow: () => {
          this.emit("inference");
        },
        undo: () => {
          this.emit("undo");
        },
      },
    };
    this.img2img = {
      seed,
      strength,
      guidance,
      actions: {
        type: "grid",
        play_arrow: () => {
          this.emit("img2img");
        },
        undo: () => {
          this.emit("undo");
        },
      },
    };
    this.inpainting = {
      seed,
      strength,
      guidance,
      actions: {
        type: "grid",
        play_arrow: () => {
          this.emit("inpainting");
        },
        undo: () => {
          this.emit("undo");
        },
      },
    };
    this.upscale = {
      enhance_face: true,
      scale,
      model: {
        value: "real",
        options: { real: "RealESRGAN_x4plus", paint: "hr-paintings_g" },
      }, //TODO model choice ? ça va casser
      actions: {
        type: "grid",
        play_arrow: () => {
          this.emit("upscale");
        },
        visibility: () => {
          this.emit("show_upscale");
        },
        save: () => {
          this.emit("save_upscale");
        },
      },
    };

    //list
    const params = [
      this.inference,
      this.img2img,
      this.inpainting,
      this.upscale,
    ];

    // tabs
    this.tabIndex = 0;
    const tab = this.pane
      .addTab({
        pages: [
          { title: CONFIG.settings.icons["inference"] },
          { title: CONFIG.settings.icons["img2img"] },
          { title: CONFIG.settings.icons["inpainting"] },
          { title: CONFIG.settings.icons["upscale"] },
        ],
      })
      .on("select", (e) => {
        this.emit("tab_change", e);
      });

    //   populate the menus
    params.forEach((param, i) => {
      param.pane = tab.pages[i];
      param.bindings = [];
      for (let key in param) {
        if (param[key].type === undefined) {
          this.addInput(param, key);
        } else {
          this.buttonGrid(param.pane, param[key]);
        }
      }
    });
    this.grow(1);
    // this.layout();
  }
}
