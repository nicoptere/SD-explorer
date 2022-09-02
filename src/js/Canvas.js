let canvas;
let ctx;
export default class Canvas {
  constructor() {
    canvas = document.createElement("canvas");
    document.body.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d", { willReadFrequently: true });
    this.clear();
  }

  get element() {
    return canvas;
  }

  clear() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    // ctx.fillStyle = "#222";
    // ctx.fillRect(0, 0, w, h);
    let id = this.getRegion(0, 0, w, h);
    ctx.putImageData(this.grain(id, 24, false), 0, 0);
  }

  putImage(img, x, y) {
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

  getRegion(x, y, w, h) {
    let idata = ctx.getImageData(x, y, w, h);
    return idata;
  }

  grain(imgData, amount, alpha = false) {
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
