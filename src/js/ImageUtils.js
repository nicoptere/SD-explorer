// https://momane.com/how-to-copy-image-and-text-to-clipboard-with-javascript#:~:text=it%E2%80%99s%20very%20simple%2C%20you%20just%20append%20an%20invisible,copy%20the%20image%20to%20your%20clipboard%20with%20JavaScript
// https://www.educative.io/answers/how-to-read-from-and-write-to-the-clipboard-in-javascript

import saveAs from "file-saver";
const JPG_QUALITY = 0.95; //TODO move to config

// tmp vars for cropping
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
export function crop(imageOrCanvas, rect) {
  const x = ~~rect.x;
  const y = ~~rect.y;
  const w = ~~rect.width;
  const h = ~~rect.height;
  ctx.canvas.width = w;
  ctx.canvas.height = h;
  ctx.drawImage(imageOrCanvas, x, y, w, h, 0, 0, w, h);
  return canvas;
}

function imageUrlToBlob(imageURL, callback) {
  const img = new Image();
  img.crossOrigin = "";
  img.src = imageURL;
  img.onload = function () {
    imageToBlob(img, callback);
  };
}

function imageToBlob(imageOrCanvas, callback) {
  const c = document.createElement("canvas");
  const ctx = c.getContext("2d");
  c.width = imageOrCanvas.naturalWidth;
  c.height = imageOrCanvas.naturalHeight;
  ctx.drawImage(imageOrCanvas, 0, 0);
  c.toBlob(
    (blob) => {
      // here the image is a blob
      callback(blob);
    },
    "image/png",
    JPG_QUALITY
  );
}

export function copyImage(imageOrimageURL) {
  const onComplete = (blob) => {
    const item = new ClipboardItem({
      [blob.type]: blob, //storing in clipboard
    });
    navigator.clipboard.write([item]);
  };
  if (typeof imageOrimageURL === "string") {
    imageUrlToBlob(imageOrimageURL, onComplete);
  } else {
    imageToBlob(imageOrimageURL, onComplete);
  }
}

export async function pasteImage(e, onComplete) {
  if (e.clipboardData) {
    const item = e.clipboardData.items[0];
    if (item.type.indexOf("image") === 0) {
      const blob = item.getAsFile();
      const reader = new FileReader();
      reader.onload = function (event) {
        onComplete(event.target.result);
      };
      reader.readAsDataURL(blob);
    }
  } else {
    const clipboardItems = await navigator.clipboard.read();
    for (const clipboardItem of clipboardItems) {
      for (const type of clipboardItem.types) {
        const blob = await clipboardItem.getType(type);
        onComplete(URL.createObjectURL(blob));
      }
    }
  }
}

export function saveCanvas(canvas, name = "composition") {
  canvas.toBlob(function (blob) {
    saveAs(blob, name + "-" + Date.now() + ".png");
  });
}
export function saveImage(image, name = "image") {
  imageToBlob(image, (blob) => {
    saveAs(blob, name + "-" + Date.now() + ".png");
  });
}

/*
// usage

let source = document.getElementById("paster");
let dest = document.querySelector(".upscale-preview");
copyImage(
    source
    // "upscale/inf-Lilith,-ada-Lovelace-portrait,-Deadpool,-gothic,-artstation,-oil-on-canvas_54_12.77_1_512_512-gfp.jpg"
);
source.style = "visibility:hidden";
const onPaste = (e) => {
    pasteImage(e, (src) => {
    dest.src = src;
    });
    console.log("yop");
};
window.addEventListener("paste", onPaste);
window.addEventListener("pointerdown", onPaste);

*/
