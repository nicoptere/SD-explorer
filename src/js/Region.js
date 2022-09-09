import Draggable from "draggable";
let throbber, drag, rect;
let CTRL = false;
export default class Region {
  constructor(ui) {
    throbber = document.getElementById("throbber");
    drag = document.getElementById("drag");
    rect = document.getElementById("region");
    new Draggable(drag, {
      limit: {
        x: [256],
        y: [256 + 12],
      },
      filterTarget: (e) => {
        return e == drag || ui.tabIndex != 2 || CTRL == false;
      },
    });
    drag.style.removeProperty("position");

    window.addEventListener("keydown", (e) => {
      CTRL = e.ctrlKey;
      if (CTRL === true) drag.style.pointerEvents = "none";
    });
    window.addEventListener("keyup", (e) => {
      CTRL = e.ctrlKey;
      if (CTRL === false) drag.style.pointerEvents = "all";
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
    this.width = w;
    this.height = h;
  }
}
