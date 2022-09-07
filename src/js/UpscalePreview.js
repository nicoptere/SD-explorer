import Draggable from "draggable";
import { copyImage, pasteImage, saveImage } from "./ImageUtils";
let upscale, preview, size;
export default class UpscalePreview {
  constructor() {
    upscale = document.querySelector("#upscale");
    const men = upscale.querySelector(".menu");
    const d = new Draggable(upscale, {
      filterTarget: (e) => {
        return e == upscale || e == drag;
      },
    });
    upscale.style.removeProperty("position");
    upscale.style.removeProperty("width");
    upscale.style.removeProperty("height");

    preview = upscale.querySelector(".upscale-preview");
    preview.scale = 1;
    preview.onload = () => {
      this.applyScale();
    };

    size = men.querySelector(".upscale-size");
    const drag = men.querySelector(".drag");
    const copy = men.querySelector(".copy");
    const zoomin = men.querySelector(".zoom-in");
    const zoomout = men.querySelector(".zoom-out");
    const saveBtn = men.querySelector(".save");
    copy.addEventListener("pointerdown", (e) => {
      copyImage(preview);
    });
    zoomin.addEventListener("pointerdown", (e) => {
      preview.scale *= 1.5;
      this.applyScale();
    });
    zoomout.addEventListener("pointerdown", (e) => {
      preview.scale /= 1.5;
      this.applyScale();
    });
    saveBtn.addEventListener("pointerdown", this.save.bind(this));

    // const paste = men.querySelector(".paste");
    // paste.addEventListener("pointerdown", (e) => {
    //   pasteImage(e, this.setSource.bind(this));
    // });
    this.hide();
  }

  save() {
    saveImage(preview, "upscale");
  }

  applyScale = () => {
    const w = Math.max(preview.naturalWidth, 512);
    const h = Math.max(preview.naturalHeight, 512);
    // console.log(w, h);
    preview.scale = Math.min(Math.max(0.25, preview.scale), 1);
    const s = preview.scale;
    preview.style.width = `${s * w}`;
    preview.style.height = `${s * h}`;
    size.innerText =
      w + " * " + h + " (scale:" + preview.scale.toFixed(2) + ")";
  };

  setSource(src) {
    preview.setAttribute("src", null);
    preview.setAttribute("src", src);
  }
  show() {
    upscale.classList.remove("hidden");
  }
  hide() {
    upscale.classList.add("hidden");
  }
}
