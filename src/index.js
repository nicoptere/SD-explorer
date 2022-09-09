// main app
import App from "./App";

//use three.js animation
// import AnimatedContent from "./AnimatedContent";
import "./css/index.scss";
let explorer, animation;
export default class Index {
  constructor() {
    // const i = new ImagePanel("inset: 32px auto auto 910px; width:320px;");
    // const d = new DrawingPanel("inset: 264px auto auto 32px; width:320px;");
    // const t = new TabsPanel("inset: 32px auto auto 564px; width:320px;");
    // const p = new PromptPanel("inset: 32px auto auto 32px;; width:512px;");
    // simple editor
    explorer = new App();
    // //use an animation as the source
    // animation = new AnimatedContent(explorer);
  }
}
