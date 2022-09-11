import Draggable from "draggable";
import { EventEmitter } from "eventemitter3";
import { Pane } from "tweakpane";
import Picker from "vanilla-picker/csp";
import "vanilla-picker/dist/vanilla-picker.csp.css";
let panel, r, size, size_slider, rect_size, rect_slider, preview, swatch, value;

function lerp(t, a, b) {
  return a * (1 - t) + b * t;
}

function norm(t, a, b) {
  return (t - a) / (b - a);
}
const padding = 4;
export default class Brush extends EventEmitter {
  constructor() {
    super();
    panel = document.querySelector(".brush-settings");
    r = panel.getBoundingClientRect();

    this._size = 128;
    this._color = "#FFCC00FF";
    this._mode = "draw";

    const draw = panel.querySelector(".icon.draw");
    const erase = panel.querySelector(".icon.erase");
    const clear = panel.querySelector(".icon.delete");
    draw.addEventListener("pointerdown", () => {
      this._mode = "draw";
      draw.classList.add("selected");
      erase.classList.remove("selected");
      this.emit("change");
    });
    erase.addEventListener("pointerdown", () => {
      this._mode = "erase";
      draw.classList.remove("selected");
      erase.classList.add("selected");
      this.emit("change");
    });
    clear.addEventListener("pointerdown", () => {
      this.emit("clear");
    });

    //color picker
    const color = panel.querySelector(".color");
    const selected = color.querySelector(".swatch");
    const picker = new Picker({
      parent: color,
      popup: false,
      alpha: true,
      editor: true,
      color: this._color,
      onChange: (c) => {
        selected.style.backgroundColor = c.rgbaString;
        this._color = c.rgbaString;
        this.emit("change");
      },
      onDone: (e) => {
        picker.domElement.classList.add("hidden");
      },
    });
    selected.style.backgroundColor = this._color;
    picker.domElement.style.transform = "translate( 32px, 0)";
    picker.domElement.classList.add("hidden");

    color.addEventListener("pointerup", (e) => {
      picker.domElement.classList.remove("hidden");
    });

    //   sliders

    size = document.querySelector(".size");
    size_slider = size.querySelector(".slider");
    rect_size = size.getBoundingClientRect();
    rect_slider = size_slider.getBoundingClientRect();

    preview = document.querySelector(".brush-preview");
    swatch = preview.querySelector(".swatch");
    value = document.querySelector(".brush-value");

    this.reset();

    size.addEventListener("pointerdown", this.onDown.bind(this));
    size.addEventListener("pointerup", this.onUp.bind(this));

    window.addEventListener("resize", this.reset.bind(this));
  }

  get size() {
    return this._size;
  }
  get color() {
    return this._color;
  }
  get mode() {
    return this._mode;
  }

  onDown(e) {
    const r = panel.getBoundingClientRect();
    if (e.target == size) {
      console.log(this);
      this.size_drag.set(
        e.clientX - r.x,
        e.clientY - r.y - rect_slider.height / 2
      );
    }
    preview.style.opacity = 1;
    swatch.style.transform = this.opacity;
  }

  onUp() {
    preview.style.opacity = 0;
  }

  reset() {
    r = panel.getBoundingClientRect();
    rect_size = size.getBoundingClientRect();
    rect_slider = size_slider.getBoundingClientRect();

    const y_min = padding + rect_size.y - r.y;
    const y_max =
      rect_size.y - r.y + rect_size.height - rect_slider.height - padding;

    let t = 0;
    if (this.size_drag !== undefined) {
      let { x, y } = this.size_drag.get();
      t = norm(y, y_min, y_max);
      this.size_drag.destroy();
    }

    const onDown = () => {
      preview.style.opacity = 1;
      let { x, y } = this.size_drag.get();
      value.style.top = y;
      value.style.opacity = 1;

      let val = 1 - norm(y, y_min, y_max);
      value.innerText = (val * 128).toFixed(0);

      swatch.style.transform = `scale( ${val}, ${val} )`;
      swatch.style.transform = this.opacity;

      this._size = Math.max(2, ~~(val * 128));
      this.emit("change");
    };

    const onUp = () => {
      preview.style.opacity = 0;
      value.style.opacity = 0;
    };

    this.size_drag = new Draggable(size_slider, {
      limit: {
        x: [padding, padding],
        y: [y_min, y_max],
      },
      onDrag: onDown,
      onDragEnd: onUp,
    });

    let { x, y } = this.size_drag.get();
    y = lerp(t, y_min, y_max);
    this.size_drag.set(x, y);
  }
}
