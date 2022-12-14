import { CONFIG } from "../Config";
const region_size = CONFIG.settings.options.region_size;
const canvas_size = CONFIG.settings.options.canvas_size;
const unit = CONFIG.settings.options.unit;

export default class ImageAndRegionPanel {
  constructor(scope, pane) {
    scope.region = {
      width: region_size,
      height: region_size,
    };
    pane.addSeparator();
    const region = pane.addFolder({ title: "region", expanded: true });
    scope.addTab(region, scope.region);

    //canvas settings
    scope.canvas = {
      width: canvas_size,
      height: canvas_size,
      color: "rgba(214,214,214,1)",
      grain: unit,
      actions: {
        type: "grid",
        delete: () => {
          scope.emit("clear");
        },
        save: () => {
          scope.emit("save");
        },
      },
    };
    scope.canvas.grain.value = 0.1;
    pane.addSeparator();
    const canvas = pane.addFolder({ title: "canvas" });
    scope.addTab(canvas, scope.canvas);
  }
}
