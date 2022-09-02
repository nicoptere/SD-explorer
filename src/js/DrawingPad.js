import Hammer from "hammerjs";
function lerp(t, a, b) {
  return a * (1 - t) + b * t;
}

export default class DrawingPad {
  constructor(settings) {
    this.ctx = this.getContext(512, 512);
    this.canvas = this.ctx.canvas;
    this.hide();

    this.brush = settings;
    this.resetBrush();

    //listen to changes in the params
    settings.bindings.brush_size.on("change", this.resetBrush.bind(this));
    settings.bindings.softness.on("change", this.resetBrush.bind(this));

    let mc = new Hammer(this.canvas);
    mc.on("panstart pan panend", (e) => {
      this.update(e);
    });
    this._locked = false;
  }
  get locked() {
    return this._locked;
  }
  set locked(v) {
    this._locked = v;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  resize(w, h) {
    this.canvas.width = w;
    this.canvas.height = h;
  }

  show() {
    this.canvas.classList.remove("fade-out");
    this.canvas.classList.add("fade-in");
    this.locked = false;
  }

  hide() {
    this.canvas.classList.add("fade-out");
    this.canvas.classList.remove("fade-in");
    this.locked = true;
  }

  resetBrush() {
    let soft = this.brush.softness;
    let size = this.brush.brush_size;
    let r = size / 2;
    this.brush.pattern = this.ctx.createRadialGradient(r, r, 0, r, r, r);
    this.brush.pattern.addColorStop(0, `rgba(255,255,255,${soft})`);
    this.brush.pattern.addColorStop(1, `rgba(255,255,255,0)`);
  }

  update(e) {
    if (this.locked) return;

    let rect = this.canvas.getBoundingClientRect();
    let size = this.brush.brush_size;
    let x = ~~(e.center.x - size / 2) - rect.x;
    let y = ~~(e.center.y - size / 2) - rect.y;
    if (this.brush.pattern == undefined) {
      this.resetBrush();
    }
    this.ctx.fillStyle = this.brush.pattern;
    this.ctx.globalAlpha = this.brush.alpha;
    this.ctx.save();
    this.ctx.globalCompositeOperation = "lighten";
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
