// main app
import App from "./App";

//use three.js animation
// import AnimatedContent from "./AnimatedContent";
import "./css/index.scss";

let explorer, animation;
export default class Index {
  constructor() {
    // Then, show the image by clicking it, or call `viewer.show()`.
    // simple editor
    explorer = new App();
    // //use an animation as the source
    // animation = new AnimatedContent(explorer);
  }
}
