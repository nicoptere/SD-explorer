// source animation
import Animation from "./three/js/Animation";
import { gui } from "./three/js/utils/utils";
import { CONFIG } from "./three/js/utils/Config";

let explorer, animation;
let firstTime = true;
export default class AnimatedContent {
  constructor(SDexplorerInstance) {
    explorer = SDexplorerInstance;
    animation = new Animation();
    document.body.appendChild(animation.domElement);
    animation.start();

    const DEBUG = true;
    if (DEBUG === true) {
      document.querySelector(".dg.ac").style.zIndex = 1;
      const cfg = CONFIG;
      gui.add(cfg, "radius", 1, 30).onChange((v) => {
        animation.setRadius(v);
      });
      gui.add(cfg, "count", 3, 200, 1).onChange((v) => {
        animation.reset(cfg);
      });
      gui.add(cfg, "turns", 0, 10 * Math.PI, Math.PI / 180).onChange((v) => {
        animation.setTurns(v);
      });
      gui.add(cfg, "axialSpeed", -1, 1, 0.01).onChange((v) => {
        animation.setAxialSpeed(v);
      });

      gui.add(cfg.section, "countPerSide", 1, 10, 1).onChange((v) => {
        animation.reset(cfg);
      });

      gui
        .add(cfg.size, "default", 0.01, 10, 0.01)
        .name("size")
        .onChange((v) => {
          animation.reset(cfg);
        });
      gui.add(cfg, "color").onChange((v) => {
        animation.reset(cfg);
      });

      gui.add(cfg, "roughness", 0, 1, 0.01).onChange((v) => {
        animation.setRoughness(v);
      });
      gui.add(cfg, "metalness", 0, 1, 0.01).onChange((v) => {
        animation.setMetalness(v);
      });
      gui.add(cfg, "envMapIntensity", 0, 1, 0.01).onChange((v) => {
        animation.setEnvMapIntensity(v);
      });

      // non utilisés (utilisables :) )

      // gui.add(cfg, "hollow").onChange((v) => {
      //   animation.reset(cfg);
      // });
      // gui.add(cfg, "speed", -0.25, 0.25, 0.01).onChange((v) => {
      //   animation.setSpeed(v);
      // });
      // gui.add(cfg.size, "min", 0.01, 10, 0.01).onChange((v) => {
      //   animation.reset(cfg);
      // });
      // gui.add(cfg.size, "max", 0.01, 10, 0.01).onChange((v) => {
      //   animation.reset(cfg);
      // });
      // gui.add(cfg.section, "width", 1, 10, 0.01).onChange((v) => {
      //   animation.reset(cfg);
      // });
      // gui.add(cfg.section, "height", 1, 10, 0.01).onChange((v) => {
      //   animation.reset(cfg);
      // });
    }

    explorer.ui.on("inference", () => {
      this.stop();
      animation.domElement.classList.add("hidden");
    });
    explorer.ui.on("img2img", () => {
      this.stop();
      animation.domElement.classList.add("hidden");
    });
    explorer.ui.on("inpainting", () => {
      this.stop();
      animation.domElement.classList.add("hidden");
    });
    explorer.ui.on("clear", () => {
      animation.domElement.classList.remove("hidden");
      this.start();
    });

    this.start();
  }

  start() {
    firstTime = true;
    this.stop();
    animation.start();
    this.update();
  }
  update() {
    this.raf = requestAnimationFrame(this.update.bind(this));
    this.render();
  }
  stop() {
    cancelAnimationFrame(this.raf);
    if (firstTime === true) {
      const rect = {
        x: 0,
        y: 0,
        w: explorer.canvas.width,
        h: explorer.canvas.height,
      };
      explorer.history.pushState(animation.domElement, rect);
      firstTime = false;
    }
  }
  render() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    explorer.context.drawImage(animation.domElement, 0, 0, w, h, 0, 0, w, h);
  }
}
