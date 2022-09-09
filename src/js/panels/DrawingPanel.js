import { CONFIG } from "../Config";
import Panel from "./Panel";

export default class DrawingPanel extends Panel {
  constructor(style) {
    super(style, "brush", "brush settings");

    const brush_size = CONFIG.settings.options.brush_size;
    const unit = CONFIG.settings.options.unit;

    this.color = "rgba(255,255,255,1)";
    this.addInput(this, "color");

    this.size = brush_size;
    this.addInput(this, "size");

    this.softness = unit;
    this.softness.value = 0.5;
    this.addInput(this, "softness");

    this.alpha = unit;
    this.alpha.value = 1;
    this.addInput(this, "alpha");

    this.delete = () => {
      this.emit("clear_drawpad");
    };
    this.addInput(this, "delete");
    this.grow();
    // mode: {
    //   type: "radio",
    //   draw: () => {
    //     scope.emit("draw_mode", "draw");
    //   },
    //   erase: () => {
    //     scope.emit("draw_mode", "erase");
    //   },
    // },
  }
}
