//relevant : https://github.com/mahmoudnafifi/Exposure_Correction
import Hammer from "hammerjs";
let mask, src0, src1, result, W, H;
let ready = false;
let brush = { alpha: 0.5, size: 32 };

function lerp(t, a, b) {
  return a * (1 - t) + b * t;
}

export default class Drawing {
  constructor(img0, img1) {
    //create canvases
    mask = this.getContext(1, 1);
    src0 = this.getContext(1, 1);
    src1 = this.getContext(1, 1);
    //   result canvas : shows the combination of the others
    result = this.getContext();
    document.body.appendChild(result.canvas);
    let mc = new Hammer(result.canvas);
    mc.on("panstart pan panend", (e) => {
      this.update(e);
    });

    // preloads images
    this.preload(img0, src0, () => {
      this.preload(img1, src1, () => {
        W = mask.canvas.width = W;
        mask.canvas.height = H;
        result.canvas.width = W * 2;
        result.canvas.height = H;

        //initi with dark image
        result.drawImage(src0.canvas, 0, 0);
        ready = true;
      });
    });

    //controls set brush size
    let size = document.getElementById("size");
    brush.size = size.value;
    if (size != undefined) {
      size.addEventListener("change", (e) => {
        brush.size = e.target.value;
        this.resetBrush();
      });
    }
    let alpha = document.getElementById("alpha");
    if (alpha != undefined) {
      brush.alpha = alpha.value;
      alpha.addEventListener("change", (e) => {
        brush.alpha = e.target.value;
      });
    }
  }

  getContext(w, h) {
    const canvas = document.createElement("canvas");
    canvas.width = w || window.innerWidth;
    canvas.height = h || window.innerHeight;
    return canvas.getContext("2d", { willReadFrequently: true });
  }

  preload(src, ctx, callback = null) {
    let img = new Image();
    img.onload = () => {
      W = ctx.canvas.width = img.width;
      H = ctx.canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      if (callback != null) callback();
    };
    img.src = src;
  }

  resetBrush() {
    let s = brush.size;
    let r = s / 2;
    brush.pattern = mask.createRadialGradient(r, r, 0, r, r, r);
    brush.pattern.addColorStop(0, "rgba(255,255,255,.1)");
    brush.pattern.addColorStop(1, "rgba(255,255,255,0)");
  }

  update(e) {
    if (ready === false) return;

    //draw the mask
    let s = brush.size;
    let r = s / 2;
    let x = ~~(e.center.x - r);
    let y = ~~(e.center.y - r);
    if (brush.pattern == undefined) {
      this.resetBrush();
    }
    mask.fillStyle = brush.pattern;
    mask.globalAlpha = brush.alpha;
    mask.save();
    mask.globalCompositeOperation = "lighten";
    mask.translate(x, y);
    mask.fillRect(0, 0, s, s);
    mask.restore();

    //debug: render the mask
    result.fillRect(W, 0, W, H);
    result.drawImage(mask.canvas, 0, 0, W, H, W, 0, W, H);

    //blend
    //collect the
    let msk = mask.getImageData(x, y, s, s);
    let patch0 = src0.getImageData(x, y, s, s);
    let patch1 = src1.getImageData(x, y, s, s);

    //per pixel loop
    for (let i = 0; i < msk.data.length; i += 4) {
      //sample the alpha value of the stroke
      let t = msk.data[i + 3] / 0xff;
      //mix the colors
      msk.data[i] = ~~lerp(t, patch0.data[i], patch1.data[i]);
      msk.data[i + 1] = ~~lerp(t, patch0.data[i + 1], patch1.data[i + 1]);
      msk.data[i + 2] = ~~lerp(t, patch0.data[i + 2], patch1.data[i + 2]);
      msk.data[i + 3] = 0xff;
    }

    result.putImageData(msk, x, y);
  }
}
