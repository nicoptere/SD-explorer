// main app
import SDExplorer from "./SDExplorer";

//use three.js animation
// import AnimatedContent from "./AnimatedContent";

let explorer, animation;
export default class Index {
  constructor() {
    // simple editor
    explorer = new SDExplorer();

    // //use an animation as the source
    // animation = new AnimatedContent(explorer);
  }
}
