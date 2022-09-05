const express = require("express");
const app = express();
const server = require("http").Server(app);

const io = require("socket.io")(server);
const pytalk = require("pytalk-2");
const fs = require("fs");

let debug = true;

// server setup
const PORT = 8080;
// change for your IP address to use form device
// (see https://stackoverflow.com/questions/68624631/access-nodejs-express-server-from-android-phone)
const IP = "192.168.1.22";

server.listen(PORT);

//main route
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

//exposes the resource folders
app.use("/assets", express.static("dist/assets"));

//expose the serve rover IP
app.listen(PORT, IP || "localhost", () => {
  console.log(`Listening to requests on http://localhost:${PORT}`);
});

// app.use(express.static("public"));
//this is where the images will be generated ( set in "inference.py" )
app.use("/inference", express.static("inference"));

//this is where the image2image will be generated ( set in "img2img.py" )
app.use("/img2img", express.static("img2img"));

//this is where the inpainting will be generated ( set in "inpainting.py" )
app.use("/inpainting", express.static("inpainting"));

// socket server
let SOCKET;
io.on("connection", function (socket) {
  SOCKET = socket;
  SOCKET.emit("init", {
    message: "socket:\n wohoo! 🐲",
  });
  SOCKET.on("inference", callInference);
  SOCKET.on("image_image", callImage2Image);
  SOCKET.on("inpainting", callInpainting);
  // SOCKET.on("upscale", callUpscale);//todo
  SOCKET.on("save_image", saveImage);
});

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
let inference = inference_worker.method("inference");
function callInference(data) {
  if (debug) console.log("node: inference data", data);

  //lock
  if (BUSY) return;
  BUSY = true;
  callBackCount = 0;

  // parse parameters
  const prompt = data.prompt;
  const steps = data.steps;
  const guidance = data.guidance;
  const seed = data.seed;
  const width = data.width;
  const height = data.height;

  // call the python method
  inference(prompt, steps, guidance, seed, width, height, (error, res) => {
    if (callBackCount++ == 0) {
      // TODO improve error handling + unify callback
      if (debug) {
        console.log("node: inference error", error);
        console.log("node: inference callback");
      }
      SOCKET.emit("image_ready", { value: res });
      // unlock
      BUSY = false;
    }
  });
}

// image to image

let img2img_worker = pytalk.worker("python/image_to_image_worker.py");
let img2img = img2img_worker.method("img2img");
function callImage2Image(data) {
  if (debug) console.log("node: image to image data", data);

  //lock
  if (BUSY) return;
  BUSY = true;
  callBackCount = 0;

  // parse parameters
  const prompt = data.prompt;
  const strength = data.strength;
  const guidance = data.guidance;
  const seed = data.seed;
  const width = data.width;
  const height = data.height;

  // call image ot image
  img2img(
    // imageData,
    prompt,
    strength,
    guidance,
    seed,
    width,
    height,
    (err, res) => {
      if (callBackCount++ == 0) {
        if (debug) {
          console.log("node: image to image error", err);
          console.log("node: image to image callback", res);
        }
        SOCKET.emit("image_ready", { value: res });
        // unlock
        BUSY = false;
      }
    }
  );
}

// inpainting

let inpainting_worker = pytalk.worker("python/inpainting_worker.py");
let inpainting = inpainting_worker.method("inpainting");
function callInpainting(data) {
  if (debug) console.log("node: inpainting data", data);

  //lock
  if (BUSY) return;
  BUSY = true;
  callBackCount = 0;

  // parse parameters
  const prompt = data.prompt;
  const strength = data.strength;
  const guidance = data.guidance;
  const seed = data.seed;
  const width = data.width;
  const height = data.height;

  // call image ot image
  inpainting(
    // imageData,
    prompt,
    strength,
    guidance,
    seed,
    width,
    height,
    (err, res) => {
      if (callBackCount++ == 0) {
        if (debug) {
          console.log("node: image to image error", err);
          console.log("node: image to image callback", res);
        }
        SOCKET.emit("image_ready", { value: res });
        // unlock
        BUSY = false;
      }
    }
  );
}

// forces the process to quit (on Windows, it sometimes refuses to DIE!! )
var ON_DEATH = require("death");
ON_DEATH(() => {
  process.exit();
});
