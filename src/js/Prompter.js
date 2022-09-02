// prompts Provider
import { prompts_list } from "./prompts";
let builtin_prompts;
class PrompterExtraOrdinaire {
  constructor(keyword = "") {
    builtin_prompts = prompts_list.concat();
    if (keyword != "") this.filter(keyword);
  }

  reset() {
    builtin_prompts = prompts_list.concat();
  }

  // isolate a keyword
  filter(keyword = "portrait") {
    builtin_prompts = prompts_list.filter((s) => {
      return s.toLowerCase().lastIndexOf(keyword) != -1;
    });
  }

  // get a random entry
  random() {
    return builtin_prompts[~~(Math.random() * builtin_prompts.length)];
  }

  // randomize list
  randomize() {
    builtin_prompts.sort((a, b) => {
      return Math.random() > 0.5 ? -1 : 1;
    });
  }

  // get next entry
  next() {
    let p = builtin_prompts.shift();
    builtin_prompts.push(p);
    return p.trim();
  }
}
export const Prompter = new PrompterExtraOrdinaire();
