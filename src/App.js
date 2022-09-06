import { io } from "socket.io-client";
import Canvas from "./js/Canvas";
import Draggable from "draggable";
import DrawingPad from "./js/DrawingPad";
import History from "./js/History";
import { Prompter } from "./js/Prompter";
import UI from "./js/UI";
import Region from "./js/Region";
import { saveCanvas } from "./js/ImageUtils";
import UpscalePreview from "./js/UpscalePreview";

let canvas, socket, region, ui, history, drawPad, upscale;

let locked = false;
const JPG_QUALITY = 0.9;

export default class App {
  constructor(width, height) {
    // socket
    socket = io();

    // control panel
    ui = new UI();

    //background canvas
    canvas = new Canvas(width, height);

    //default source is the working canvas
    this.source = canvas.element;

    //draggable area
    region = new Region(ui);

    // draw area for inpainting
    drawPad = new DrawingPad(ui.inpainting.drawing);
    region.element.appendChild(drawPad.canvas);

    // undo (/redo?)
    history = new History(canvas, ui);

    //upscale preview
    upscale = new UpscalePreview();

    // logic

    // init socket
    socket.connect("http://localhost:8080");
    socket.on("init", function (data) {
      console.log(
        "%c" + data.message,
        "color:pink; font-size:24px; font-family:Comic-Sans;"
      );
    });

    // draws the image to canvas whenever a function is finished
    socket.on("image_ready", (data) => {
      if (data.error == false) {
        const image = new Image();
        image.onload = () => {
          let rect = region.rect;
          //draw to canvas
          canvas.drawImageAt(image, rect.x, rect.y);
          //push to history
          history.pushState(image, rect);
        };
        console.log(data.value);
        image.setAttribute("src", data.value);
      } else {
        // TODO handle errors ( => Console?)
      }
      region.hideThrobber();
      locked = false;
    });

    // upscale
    socket.on("upscale_ready", (data) => {
      if (data.error == false) {
        upscale.setSource(data.value);
      } else {
        // TODO handle errors ( => Console)
      }
      region.hideThrobber();
      locked = false;
    });

    // manage tab change
    ui.on("tab_change", (index) => {
      drawPad.hide();
      upscale.hide();
      switch (index) {
        case 0:
        case 1:
          break;
        case 2:
          drawPad.show();
          break;
        case 3:
          upscale.show();
          break;
        default:
          return;
      }
    });

    // randomizze a prompt
    ui.on("randomize", (object) => {
      const field = object.field;
      field.value = Prompter.next();
    });

    // check if we can proceed
    const isReady = (object) => {
      const config = ui.getConfig(object);
      if (config.prompt != undefined && config.prompt.trim() === "") {
        return false;
      }
      if (locked) return false;
      locked = true;
      return true;
    };

    // call an inference
    ui.on("inference", (object) => {
      if (!isReady(object)) return;
      socket.emit("inference", ui.getConfig(object));
      region.showThrobber();
    });

    // call an image 2 image
    ui.on("img2img", (object) => {
      if (!isReady(object)) return;

      //save the cropped image and call the img2img function:
      // crop and convert to Blob
      const crop = canvas.crop(this.source, region.rect);
      crop.toBlob(
        (blob) => {
          // tell node to save to disk
          socket.emit("save_image", "results/tmp/i2i-tmp.jpg", blob);
          //once it's saved, call the img2img
          socket.once("on_image_saved", () => {
            socket.emit("image_image", ui.getConfig(object));
            region.showThrobber();
          });
        },
        "image/jpeg",
        JPG_QUALITY
      );
    });

    // call an inpainting
    ui.on("inpainting", (object) => {
      if (!isReady(object)) return;

      //save the cropped image and call the img2img function:
      // crop and convert to Blob
      const crop = canvas.crop(this.source, region.rect);
      crop.toBlob(
        (blob) => {
          // tell node to save to disk
          socket.emit("save_image", "results/tmp/inp-tmp.jpg", blob);
          // when the source is saved,
          socket.once("on_image_saved", () => {
            //  save the mask
            drawPad.canvas.toBlob(
              (blob) => {
                // tell node to save to disk
                socket.emit("save_image", "results/tmp/inp-msk.jpg", blob);
                //
                //once the mask is saved, call the inpainting
                socket.once("on_image_saved", () => {
                  // call inpainting
                  socket.emit("inpainting", ui.getConfig(object));
                  region.showThrobber();
                  //clear the mask
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

    //upscale
    //save the cropped image and call the upscale function:
    ui.on("upscale", (object) => {
      if (!isReady(object)) return;
      // crop and convert to Blob
      const crop = canvas.crop(this.source, region.rect);
      crop.toBlob(
        (blob) => {
          // tell node to save to disk
          socket.emit("save_image", "results/tmp/upscale-tmp.jpg", blob);
          //once it's saved, call the img2img
          socket.once("on_image_saved", () => {
            socket.emit("upscale", ui.getConfig(object));
            region.showThrobber();
          });
        },
        "image/jpeg",
        JPG_QUALITY
      );
    });

    //region settings

    //resize
    const resize_zone = () => {
      const w = ui.region.width;
      const h = ui.region.height;
      region.resize(w, h);
      drawPad.resize(w, h);
    };
    ui.region.bindings.width.on("change", resize_zone);
    ui.region.bindings.height.on("change", resize_zone);
    // clear
    ui.on("clear_drawpad", drawPad.clear.bind(drawPad));

    // canvas settings

    //resize
    ui.canvas.width = canvas.width;
    ui.canvas.height = canvas.height;
    ui.canvas.bindings.width.on("change", (e) => {
      if (e.last == false) return;
      canvas.setSize(e.value, canvas.height);
    });
    ui.canvas.bindings.height.on("change", (e) => {
      if (e.last == false) return;
      canvas.setSize(canvas.width, e.value);
    });
    ui.canvas.bindings.color.on("change", (e) => {
      canvas.setClearColor(e.value);
    });
    canvas.setClearColor(ui.canvas.color);
    ui.canvas.bindings.grain.on("change", (e) => {
      if (e.last) canvas.grain = e.value;
    });
    canvas.grain = ui.canvas.grain;

    //clear canvas
    ui.on("clear", () => {
      canvas.clear();
    });

    // save canvas
    ui.on("save", () => {
      saveCanvas(canvas.element);
    });
  }

  //accessors
  //source canvas to process img2img & inpainting
  get source() {
    return this._source;
  }
  set source(v) {
    this._source = v;
  }
  get canvas() {
    return canvas.element;
  }
  get context() {
    return canvas.context;
  }
  get history() {
    return history;
  }
  get ui() {
    return ui;
  }
}
