import Draggable from "draggable";
import DrawingPad from "./DrawingPad";
let throbber, drag, rect;
let SPACE = false;
export default class Region {
  constructor(ui) {
    throbber = document.getElementById("throbber");
    drag = document.getElementById("drag");
    this.draggable = new Draggable(drag, {
      // TODO update limits on resize
      limit: {
        x: [256, 4096],
        y: [256 + 12, 4096],
      },
      filterTarget: (e) => {
        return e == drag || ui.tabIndex != 2 || SPACE == false;
      },
    });
    drag.style.removeProperty("position");

    rect = document.getElementById("region");

    // draw canvas for inpainting
    this.drawPad = new DrawingPad(ui);

    window.addEventListener("keydown", (e) => {
      SPACE = e.key == " ";
      this.drawPad.locked = !SPACE;
    });
    window.addEventListener("keyup", () => {
      SPACE = false;
      this.drawPad.locked = !SPACE;
    });
  }

  get rect() {
    const r = rect.getBoundingClientRect();
    r.x += window.scrollX;
    r.y += window.scrollY;
    return r;
  }

  showThrobber() {
    throbber.classList.remove("hidden");
  }

  hideThrobber() {
    throbber.classList.add("hidden");
  }
  set width(v) {
    drag.style.width = v + "px";
    rect.style.width = v + "px";
  }
  set height(v) {
    drag.style.height = v + "px";
    rect.style.height = v + "px";
  }
  resize(w, h) {
    // console.log("resize", w, h);
    this.width = w;
    this.height = h;
    // this.draggable.limit = {
    //   x: [0, w - 24],
    //   y: [12, h - 24],
    // };
  }
}
