import Draggable from "draggable";
let throbber, drag, region;
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
        return e == drag || ui.tabIndex != 2;
      },
    });
    region = document.getElementById("region");
    this.element = region;
  }

  get rect() {
    const r = region.getBoundingClientRect();
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
    region.style.width = v + "px";
  }
  set height(v) {
    drag.style.height = v + "px";
    region.style.height = v + "px";
  }
  resize(w, h) {
    this.width = w;
    this.height = h;
    // this.draggable.limit = {
    //   x: [0, w - 24],
    //   y: [12, h - 24],
    // };
  }
}
