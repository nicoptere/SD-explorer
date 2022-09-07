let id = 0;
export default class UpscaleTab {
  constructor(scope) {
    Object.assign(this, {
      name: "upscale-" + id,
      enhance_face: true,
      model: "RealESRGAN_x4plus", //TODO model choice ?
      scale: {
        value: 4,
        min: 1,
        max: 4,
        step: 1,
      },
      actions: {
        type: "grid",
        play_arrow: () => {
          scope.emit("upscale", scope.upscale);
        },
        save: () => {
          scope.emit("save_upscale");
        },
      },
    });
  }
}
