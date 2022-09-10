import Viewer from "viewerjs";
import { copyImage, pasteImage, saveImage } from "./ImageUtils";
let upscale, viewer, preview, image, container;
export default class UpscalePreview {
  constructor(ui) {
    upscale = document.querySelector(".upscale");
    preview = upscale.querySelector(".preview");

    const scope = this;
    viewer = new Viewer(upscale, {
      inline: true,
      viewed() {
        viewer.zoomTo(1);
      },
      ready() {
        scope.cleanup();
        viewer.hide(true);
      },
      navbar: false,
      scalable: false,
      rotatable: false,
    });
    console.log(viewer);

    preview.onload = () => {
      this.url = preview.src;
      this.show();
    };

    // TODO hidden on close

    ui.on("show_upscale", this.show.bind(this));
  }

  cleanup() {
    // remove unused viewer buttons
    [".viewer-prev", ".viewer-play", ".viewer-next"].forEach((name) => {
      const els = document.querySelectorAll(name);
      for (let e of els) {
        e.parentNode.removeChild(e);
      }
    });
  }

  save() {
    saveImage(preview, "upscale");
  }

  setSource(src) {
    console.log("set source", src);

    preview.setAttribute("src", null);
    preview.setAttribute("src", src);

    image = document.querySelector(".viewer-canvas").children[0];
    image.setAttribute("src", null);
    image.setAttribute("src", src);
  }
  show() {
    console.log("show");

    container = document.querySelector(".viewer-container");
    if (container != undefined) container.classList.remove("hidden");
    if (image != undefined) image.classList.remove("hidden");
    preview.classList.remove("hidden");
    viewer.show();
    viewer.full();
    preview.classList.add("hidden");
    viewer.zoomTo(1);
  }

  hide() {
    viewer.exit();
    viewer.hide();
    container = document.querySelector(".viewer-container");
    if (container != undefined) container.classList.add("hidden");
    if (image != undefined) image.classList.add("hidden");
    preview.classList.add("hidden");
  }
}

/*
  constructor() {
    upscale = document.querySelector(".upscale");
    const men = upscale.querySelector(".menu");
    const d = new Draggable(upscale, {
      filterTarget: (e) => {
        return e == upscale || e == drag;
      },
    });
    upscale.style.removeProperty("position");
    upscale.style.removeProperty("width");
    upscale.style.removeProperty("height");
    preview = upscale.querySelector(".preview");
    preview.scale = 1;
    preview.onload = () => {
      this.applyScale();
    };

    size = upscale.querySelector(".size");
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

    //*/
