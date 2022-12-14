import { CONFIG } from "./Config";

let canvas;
let ctx;
export default class Canvas {
  constructor(width, height) {
    canvas = document.createElement("canvas");
    canvas.classList.add("main-canvas");
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFFFFF";

    this._grain = 0;
    this.resize(width, height);
  }

  get width() {
    return canvas.width;
  }
  set width(v) {
    canvas.width = v;
  }
  get height() {
    return canvas.height;
  }
  set height(v) {
    canvas.height = v;
  }
  get element() {
    return canvas;
  }
  get context() {
    return ctx;
  }
  get grain() {
    return this._grain;
  }
  set grain(v) {
    this._grain = v;
    this.clear();
  }

  setGrain(g) {
    this.grain = g;
  }
  setClearColor(c) {
    this.fillStyle = c;
    this.clear();
  }

  resize(w, h) {
    canvas.width = w || CONFIG.settings.options.canvas_size.value;
    canvas.height = h || CONFIG.settings.options.canvas_size.value;
    this.clear();
  }

  clear() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = this.fillStyle;
    ctx.fillRect(0, 0, w, h);
    if (this.grain > 0) {
      let id = this.imageData(0, 0, w, h);
      ctx.putImageData(this.noise(id, this.grain * 0xff, false), 0, 0);
    }
  }

  drawImageAt(img, x, y) {
    return ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      x,
      y,
      img.width,
      img.height
    );
  }

  imageData(x, y, w, h) {
    let idata = ctx.getImageData(x, y, w, h);
    return idata;
  }

  noise(imgData, amount, alpha = false) {
    let id = imgData.data.length;
    while (id >= 0) {
      var noise = ~~((Math.random() - 0.5) * amount);
      imgData.data[id] += noise;
      imgData.data[id + 1] += noise;
      imgData.data[id + 2] += noise;
      if (alpha) imgData.data[id + 3] += noise;
      id -= 4;
    }
    return imgData;
  }
}
