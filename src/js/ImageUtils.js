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
    0.75
  );
}
export function copyImage(imageURL) {
  imageUrlToBlob(imageURL, (blob) => {
    const item = new ClipboardItem({
      [blob.type]: blob, //storing in clipboard
    });
    navigator.clipboard.write([item]);
  });
}
export async function pasteImage(e) {
  if (e.clipboardData) {
    const item = e.clipboardData.items[0];
    if (item.type.indexOf("image") === 0) {
      const blob = item.getAsFile();
      const reader = new FileReader();
      reader.onload = function (event) {
        document.getElementById("paster").src = event.target.result;
      };
      reader.readAsDataURL(blob);
    }
  } else {
    const clipboardItems = await navigator.clipboard.read();
    for (const clipboardItem of clipboardItems) {
      for (const type of clipboardItem.types) {
        const blob = await clipboardItem.getType(type);
        document.getElementById("paster").src = URL.createObjectURL(blob);
      }
    }
  }
}
