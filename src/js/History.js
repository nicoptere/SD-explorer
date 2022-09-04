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

  pushState(imageOrCanvas, rect) {
    const x = ~~rect.x;
    const y = ~~rect.y;
    const w = ~~rect.width;
    const h = ~~rect.height;
    const state = { imageOrCanvas, rect: { x, y, w, h } };
    history.push(state);
    return state;
  }

  popState() {
    if (history.length <= 0) {
      _canvas.clear();
      return;
    }
    history.pop();
    if (history.length <= 0) return;

    _canvas.clear();
    for (let i = 0; i < history.length; i++) {
      const state = history[i];
      _canvas.drawImageAt(state.imageOrCanvas, state.rect.x, state.rect.y);
    }
  }
}
