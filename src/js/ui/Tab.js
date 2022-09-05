// tabs default options

import { CONFIG } from "../Config";
const seed = CONFIG.settings.options.seed;
const steps = CONFIG.settings.options.steps;
const strength = CONFIG.settings.options.strength;
const guidance = CONFIG.settings.options.guidance;
const brush_size = CONFIG.settings.options.brush_size;
const zone_size = CONFIG.settings.options.zone_size;
const canvas_size = CONFIG.settings.options.canvas_size;
const unit = CONFIG.settings.options.unit;

export default class Tab {
  constructor(scope) {
    Object.assign(this, {
      init: () => {},
    });
  }
}
