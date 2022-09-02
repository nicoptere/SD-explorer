import Draggable from "draggable";
let throbber, drag, zone;
export default class Zone {
  constructor(ui) {
    throbber = document.getElementById("throbber");
    drag = document.getElementById("drag");
    new Draggable(drag, {
      // TODO update limits on resize
      limit: {
        x: [256, window.innerWidth - 24],
        y: [256 + 12, window.innerHeight - 24],
      },
      filterTarget: (e) => {
        return e == drag || ui.tabIndex != 2;
      },
    });
    zone = document.getElementById("zone");
    this.element = zone;
  }

  get rect() {
    return zone.getBoundingClientRect();
  }

  showThrobber() {
    throbber.classList.remove("hidden");
  }

  hideThrobber() {
    throbber.classList.add("hidden");
  }
  set width(v) {
    drag.style.width = v + "px";
    zone.style.width = v + "px";
  }
  set height(v) {
    drag.style.height = v + "px";
    zone.style.height = v + "px";
  }
  resize(w, h) {
    this.width = w;
    this.height = h;
  }
}