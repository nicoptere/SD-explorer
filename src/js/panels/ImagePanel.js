import { CONFIG } from "../Config";
import Panel from "./Panel";

const region_size = CONFIG.settings.options.region_size;
const canvas_size = CONFIG.settings.options.canvas_size;
const unit = CONFIG.settings.options.unit;
const scale = CONFIG.settings.options.scale;
export default class ImagePanel extends Panel {
  constructor(style) {
    super(style, "aspect_ratio", "image settings");

    // region
    const region = this.pane.addFolder({ title: "region", expanded: true });
    this.region = {
      pane: region,
      bindings: [],
      width: region_size,
      height: region_size,
      column: scale,
      row: scale,
    };
    this.addInput(this.region, "width");
    this.addInput(this.region, "height");
    this.region.column.value = 3
    this.addInput(this.region, "column");
    this.region.row.value = 1
    this.addInput(this.region, "row");
    this.pane.addSeparator();

    // canvas
    const canvas = this.pane.addFolder({ title: "canvas" });
    this.canvas = {
      pane: canvas,
      bindings: [],
      width: canvas_size,
      height: canvas_size,
      color: "rgba(214,214,214,1)",
      grain: unit,
      actions: {
        type: "grid",
        delete: () => {
          this.emit("clear");
        },
        save: () => {
          this.emit("save_canvas");
        },
      },
    };
    this.canvas.grain.value = 0.1;
    this.addInput(this.canvas, "width");
    this.addInput(this.canvas, "height");
    this.addInput(this.canvas, "color");
    this.addInput(this.canvas, "grain");
    this.buttonGrid(canvas, this.canvas.actions);
    this.grow();
  }
}
