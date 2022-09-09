import Hammer from "hammerjs";
import { CONFIG } from "./Config";
// TODO:
// free drawing on the image => isolate mask blobs => send in bacth to inpainting
export default class DrawingPad {
  constructor(ui) {
    const size = CONFIG.settings.options.canvas_size.value;
    this.ctx = this.getContext(size, size);
    this.canvas = this.ctx.canvas;
    this.canvas.classList.add("drawpad-canvas");
    document.body.appendChild(this.canvas);

    const settings = ui.drawing;
    this.brush = settings;
    this.resetBrush();

    //listen to changes in the params
    settings.bindings.alpha.on("change", this.resetBrush.bind(this));
    settings.bindings.color.on("change", this.resetBrush.bind(this));
    settings.bindings.size.on("change", this.resetBrush.bind(this));
    settings.bindings.softness.on("change", this.resetBrush.bind(this));

    // clear
    settings.on("clear_drawpad", this.clear.bind(this));

    let mc = new Hammer(this.canvas);
    mc.on("panstart pan panend", (e) => {
      this.update(e);
    });
    // this._locked = true;
    this.hide();
  }
  get locked() {
    return this._locked;
  }
  set locked(v) {
    this._locked = v;
  }

  resize(w, h) {
    this.canvas.width = w;
    this.canvas.height = h;
    this.clear();
  }
  clearRect(rect) {
    this.ctx.clearRect(rect.x, rect.y, rect.width, rect.height);
  }
  clear() {
    // this.ctx.fillStyle = "#F00";
    // this.ctx.globalAlpha = 0.25;
    // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  show() {
    this.canvas.classList.remove("hidden");
  }

  hide() {
    this.canvas.classList.add("hidden");
  }

  resetBrush() {
    let soft = 1 - this.brush.softness;
    let size = this.brush.size;
    let color = this.brush.color;
    console.log(color);
    let lastColor = color.split(",");
    lastColor[lastColor.length - 1] = "0)";
    lastColor = lastColor.join(",");

    let alpha = this.brush.alpha;
    let r = size / 2;
    this.brush.pattern = this.ctx.createRadialGradient(r, r, 0, r, r, r);
    this.brush.pattern.addColorStop(0, color);
    this.brush.pattern.addColorStop(soft * 0.5, color);
    this.brush.pattern.addColorStop(1, lastColor);
  }

  update(e) {
    // if (this.locked) return;

    let rect = this.canvas.getBoundingClientRect();
    let size = this.brush.size;
    let x = ~~(e.center.x - size / 2) - rect.x;
    let y = ~~(e.center.y - size / 2) - rect.y;
    if (this.brush.pattern == undefined) {
      this.resetBrush();
    }

    this.ctx.fillStyle = this.brush.pattern;
    this.ctx.globalAlpha = this.brush.alpha;
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.fillRect(0, 0, size, size);
    this.ctx.restore();
  }

  getContext(w, h) {
    const canvas = document.createElement("canvas");
    canvas.width = w || window.innerWidth;
    canvas.height = h || window.innerHeight;
    return canvas.getContext("2d", { willReadFrequently: true });
  }
}
