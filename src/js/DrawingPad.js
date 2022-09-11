import Hammer from "hammerjs";
import { CONFIG } from "./Config";
import { getContext } from "./ImageUtils";
import Brush from "./ui/Brush";
// TODO:
// free drawing on the image => isolate mask blobs => send in bacth to inpainting
export default class DrawingPad {
  constructor(ui) {
    const size = CONFIG.settings.options.canvas_size.value;
    this.ctx = getContext(size, size);
    this.canvas = this.ctx.canvas;
    this.canvas.classList.add("drawpad-canvas");
    document.body.appendChild(this.canvas);

    // const settings = ui.drawing;
    this.brush = new Brush();
    this.brush.on("change", this.resetBrush.bind(this));
    // this.resetBrush();

    //listen to changes in the params
    // settings.bindings.alpha.on("change", this.resetBrush.bind(this));
    // settings.bindings.color.on("change", this.resetBrush.bind(this));
    // settings.bindings.size.on("change", this.resetBrush.bind(this));
    // settings.bindings.softness.on("change", this.resetBrush.bind(this));

    // clear
    this.brush.on("clear", this.clear.bind(this));

    let mc = new Hammer(this.canvas);
    mc.on(
      "tap press pan panstart panmove panend pancancel panleft panright panup pandown",
      (e) => {
        this.update(e);
      }
    );

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
    // let soft = 1 - this.brush.softness;
    let size = this.brush.size;
    let color = this.brush.color;

    console.log(this.brush.mode);
    if (this.brush.mode == "erase") {
      this.ctx.fillStyle = "rgba(0,0,0,1)";
    }
    let lastColor = color.split(",");
    let alpha = parseFloat(
      lastColor[lastColor.length - 1].trim().replace(")", "")
    );
    lastColor[lastColor.length - 1] = "0)";
    lastColor = lastColor.join(",");

    // let alpha = this.brush.alpha;
    this.alpha = alpha;
    let r = size / 2;
    this.brush.pattern = this.ctx.createRadialGradient(r, r, 0, r, r, r);
    this.brush.pattern.addColorStop(0, color);
    this.brush.pattern.addColorStop(0.5, color);
    this.brush.pattern.addColorStop(1, lastColor);
  }

  update(e) {
    // if (this.locked) return;
    this.ctx.save();
    let rect = this.canvas.getBoundingClientRect();
    let size = this.brush.size;
    let x = ~~(e.center.x - size / 2) - rect.x;
    let y = ~~(e.center.y - size / 2) - rect.y;
    if (this.brush.pattern == undefined) {
      this.resetBrush();
    }

    this.ctx.fillStyle = this.brush.pattern;

    if (this.brush.mode == "erase") {
      this.ctx.globalCompositeOperation = "destination-out";
    } else {
      this.ctx.globalCompositeOperation = "source-over";
    }
    this.ctx.globalAlpha = this.alpha;
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.fillRect(0, 0, size, size);
    this.ctx.restore();
    this.ctx.restore();
  }
}
