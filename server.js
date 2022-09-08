const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const pytalk = require("pytalk-2");
const fs = require("fs");

let debug = true;

// socket server
let SOCKET;
io.on("connection", function (socket) {
  SOCKET = socket;
  SOCKET.emit("init", {
    message: "socket => wohoo! 🐲",
  });
  SOCKET.on("inference", callInference);
  SOCKET.on("image_image", callImage2Image);
  SOCKET.on("inpainting", callInpainting);
  SOCKET.on("save_image", saveImage);
  SOCKET.on("upscale", callUpscale);
});

// server setup
const PORT = 8080;
server.listen(PORT);

//main route
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

//exposes the resource folders
app.use("/assets", express.static("dist/assets"));

//expose the serve rover IP
// change for your IP address to use form device
// (see https://stackoverflow.com/questions/68624631/access-nodejs-express-server-from-android-phone)
const IP = "192.168.1.22";
app.listen(PORT, IP || "localhost", () => {
  console.log(`Listening to requests on http://localhost:${PORT}`); //TODO: allow connection from device
});

//this is where the images will be generated ( see ROOT_FOLDER in python/common.py )
const ROOT_FOLDER = "results";
app.use(express.static("results"));

// this saves the image region sent from the client to disk (used by img2img and inpainting )
function saveImage(name, blob) {
  fs.createWriteStream(name).write(blob);
  SOCKET.emit("on_image_saved");
}

// PYTHON BINDINGS

//not sure why but the callbacks are being called as many times as the functions are globally...
//TODO fix
//this is a workaround
let callBackCount = 0;
let BUSY = false;

// hook the PYTHON methods:

// infernece

let inference_worker = pytalk.worker("python/inference_worker.py");
let init_inference = inference_worker.method("initialize");
let inference = inference_worker.method("inference");
function callInference(data) {
  //lock
  if (BUSY) return SOCKET.emit("busy");
  BUSY = true;
  callBackCount = 0;
  if (debug) console.log("node: inference data", data);

  // call the python method
  inference(
    data.prompt,
    data.steps,
    data.guidance,
    data.seed,
    data.width,
    data.height,
    onDiffusionComplete
  );
}

// image to image

let img2img_worker = pytalk.worker("python/image_to_image_worker.py");
let img2img = img2img_worker.method("img2img");
function callImage2Image(data) {
  //lock
  if (BUSY) return SOCKET.emit("busy");
  BUSY = true;
  callBackCount = 0;
  if (debug) console.log("node: image to image data", data);

  // call image ot image
  img2img(
    data.prompt,
    data.strength,
    data.guidance,
    data.seed,
    data.width,
    data.height,
    onDiffusionComplete
  );
}

// inpainting

let inpainting_worker = pytalk.worker("python/inpainting_worker.py");
let inpainting = inpainting_worker.method("inpainting");
function callInpainting(data) {
  //lock
  if (BUSY) return SOCKET.emit("busy");
  BUSY = true;
  callBackCount = 0;
  if (debug) console.log("node: inpainting data", data);

  // call image ot image
  inpainting(
    data.prompt,
    data.strength,
    data.guidance,
    data.seed,
    data.width,
    data.height,
    onDiffusionComplete
  );
}

function onDiffusionComplete(error, value) {
  if (callBackCount++ == 0) {
    BUSY = false;
    if (error != false) {
      console.log("PYTHON", error);
      return SOCKET.emit("image_error", { error });
    }
    console.log("image ready");
    SOCKET.emit("image_ready", {
      value: value.replace(ROOT_FOLDER, ""),
    });
  }
}

// upscale

let upscale_worker = pytalk.worker("python/upscale_worker.py");
let upscale = upscale_worker.method("upscale");
function callUpscale(data) {
  //lock
  if (BUSY) return SOCKET.emit("busy");
  BUSY = true;
  callBackCount = 0;
  if (debug) console.log("node: upscale data", data);

  // call upscale
  upscale(
    data.name,
    data.enhance_face,
    data.scale,
    data.model,
    onUpscaleComplete
  );
}

function onUpscaleComplete(error, value) {
  if (callBackCount++ == 0) {
    BUSY = false;
    if (error != false) {
      console.log("PYTHON", error);
      return SOCKET.emit("upscale_error", { error });
    }
    SOCKET.emit("upscale_ready", {
      value: value.replace(ROOT_FOLDER, ""),
    });
  }
}

// forces the process to quit (on Windows, it sometimes refuses to DIE!! )
var ON_DEATH = require("death");
ON_DEATH(() => {
  console.log("DIE!!");
  process.exit();
});
