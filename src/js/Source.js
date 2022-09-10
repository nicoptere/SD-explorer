import { EventEmitter } from "eventemitter3";
import { CONFIG } from "./Config";

export default class Source extends EventEmitter {
  constructor(ui, options) {
    super();
    this.element = options.element;

    const snapshot = () => {
      this.stop();
      this.element.classList.add("hidden");
    };
    CONFIG.methods.forEach((method) => {});

    explorer.ui.on("inference");
    explorer.ui.on("img2img", () => {
      this.stop();
      this.element.classList.add("hidden");
    });
    explorer.ui.on("inpainting", () => {
      this.stop();
      this.element.classList.add("hidden");
    });
    explorer.ui.on("clear", () => {
      this.element.classList.remove("hidden");
      this.start();
    });

    this.start();
  }

  start() {
    firstTime = true;
    this.stop();
    animation.start();
    this.update();
  }
  update() {
    this.raf = requestAnimationFrame(this.update.bind(this));
    this.render();
  }
  stop() {
    cancelAnimationFrame(this.raf);
    if (firstTime === true) {
      const rect = {
        x: 0,
        y: 0,
        w: explorer.canvas.width,
        h: explorer.canvas.height,
      };
      explorer.history.pushState(this.element, rect);
      firstTime = false;
    }
  }
  render() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    explorer.context.drawImage(this.element, 0, 0, w, h, 0, 0, w, h);
  }
}
