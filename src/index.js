import { io } from "socket.io-client";
import Canvas from "./js/Canvas";
import DrawingPad from "./js/DrawingPad";
import History from "./js/History";
import { Prompter } from "./js/Prompter";
import UI from "./js/UI";
import Zone from "./js/Zone";

let canvas, socket, zone, ui, history, drawPad, image;
let locked = false;
const JPG_QUALITY = 0.9;
export default class Index {
  constructor() {
    // return;
    //background canvas
    canvas = new Canvas();

    // socket
    socket = io();

    // control panel
    ui = new UI();

    //draggable area
    zone = new Zone(ui);

    // draw area for inpainting
    drawPad = new DrawingPad(ui.inpainting);
    zone.element.appendChild(drawPad.canvas);

    // undo (/redo?)
    history = new History(canvas, ui);

    // logic
    socket.connect("http://localhost:8080");
    socket.on("init", function (data) {
      console.log(
        "%c" + data.message,
        "color:pink; font-size:24px; font-family:Comic-Sans;"
      );
    });

    // draws the image to canvas whenever a function is finished
    image = new Image();
    socket.on("image_ready", (data) => {
      image.onload = () => {
        let r = zone.rect;
        history.pushState(r, canvas);
        canvas.putImage(image, r.x, r.y);
        locked = false;
      };
      image.setAttribute("src", data.value);
      zone.hideThrobber();
    });

    // randomizze a prompt
    ui.on("randomize", (object) => {
      const field = object.field;
      field.value = Prompter.next();
    });

    // call an inference
    ui.on("inference", (object) => {
      let cfg = ui.getConfig(object);
      if (cfg.prompt === "") return;

      if (locked) return;
      locked = true;

      socket.emit("inference", cfg);
      zone.showThrobber();
    });

    // call an image 2 image
    ui.on("img2img", (object) => {
      let cfg = ui.getConfig(object);
      if (cfg.prompt === "") return;

      if (locked) return;
      locked = true;

      //save the cropped image and call the img2img function:
      const state = history.pushState(zone.rect, canvas);
      state.canvas.toBlob(
        (blob) => {
          socket.emit("save_image", "img2img/i2i-tmp.jpg", blob);
          //once it's saved, call the img2img
          socket.once("on_image_saved", () => {
            socket.emit("image_image", cfg);
            zone.showThrobber();
          });
        },
        "image/jpeg",
        JPG_QUALITY
      );
    });

    // call an inpainting
    ui.on("inpainting", (object) => {
      let cfg = ui.getConfig(object);
      if (cfg.prompt === "") return;

      if (locked) return;
      locked = true;

      //save the cropped image and call the img2img function:
      const state = history.pushState(zone.rect, canvas);
      state.canvas.toBlob(
        (blob) => {
          //send the source image to node
          socket.emit("save_image", "inpainting/inp-tmp.jpg", blob);
          // when the source is saved,
          socket.once("on_image_saved", () => {
            //  save the mask
            drawPad.canvas.toBlob(
              (blob) => {
                //send mask to node
                socket.emit("save_image", "inpainting/inp-msk.jpg", blob);
                //
                //once the mask is saved, call the inpainting
                socket.once("on_image_saved", () => {
                  // call inpainting
                  socket.emit("inpainting", cfg);
                  zone.showThrobber();
                  //clears the mask
                  drawPad.clear();
                });
              },
              "image/jpeg",
              JPG_QUALITY
            );
          });
        },
        "image/jpeg",
        JPG_QUALITY
      );
    });

    // manage tab change
    ui.on("tab_change", (index) => {
      switch (index) {
        case 0:
        case 1:
          drawPad.hide();
          break;
        case 2:
          drawPad.show();
          break;
        default:
          return;
      }
    });

    //other stuff
    ui.on("clear_drawpad", drawPad.clear.bind(drawPad));
    ui.on("clear", canvas.clear.bind(canvas));

    //resize handler
    ui.on("resize", () => {
      // TODO resize main canvas
      const w = ui.settings.width;
      const h = ui.settings.height;
      zone.resize(w, h);
      drawPad.resize(w, h);
    });
    ui.emit("resize");
  }
}
