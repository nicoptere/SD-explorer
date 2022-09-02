const history = [];
let _canvas;

export default class History {
  constructor(canvas, ui) {
    _canvas = canvas;
    ui.on("undo", () => {
      this.popState();
    });
    ui.on("redo", () => {}); //TODO
  }

  pushState(rect, canvas) {
    const ctx = document
      .createElement("canvas")
      .getContext("2d", { willReadFrequently: true });
    const x = ~~rect.x;
    const y = ~~rect.y;
    const w = ~~rect.width;
    const h = ~~rect.height;
    ctx.canvas.width = w;
    ctx.canvas.height = h;
    ctx.drawImage(canvas.element, x, y, w, h, 0, 0, w, h);
    const state = { canvas: ctx.canvas, rect: { x, y, w, h } };
    history.push(state);
    return state;
  }

  popState() {
    if (history.length <= 0) return;
    const state = history.pop();
    _canvas.putImage(state.canvas, state.rect.x, state.rect.y);
  }
}
