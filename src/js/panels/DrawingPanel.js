import { CONFIG } from "../Config";
import Panel from "./Panel";

export default class DrawingPanel extends Panel {
  constructor(style) {
    super(style, "brush", "brush settings");

    const brush_size = CONFIG.settings.options.brush_size;
    const unit = CONFIG.settings.options.unit;

    this.color = "rgba(214,214,214,1)";
    this.addInput(this, "color");
    this.size = brush_size;
    this.addInput(this, "size");
    this.softness = unit;
    this.addInput(this, "softness");
    this.alpha = unit;
    this.addInput(this, "alpha");
    this.delete = () => {
      this.emit("clear_drawpad");
    };
    this.addInput(this, "delete");
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
