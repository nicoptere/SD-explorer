
import os
import sys
import torch

ROOT_FOLDER = "results/"
os.makedirs(ROOT_FOLDER, exist_ok=True)

TMP_FOLDER = "results/tmp/"
os.makedirs(TMP_FOLDER, exist_ok=True)

DEBUG = True


def augmentPath():
    sys.path.append('python')
    sys.path.append('python/img2prompt/')
    sys.path.append('python/img2prompt/configs')
    sys.path.append('python/img2prompt/data')
    sys.path.append('python/img2prompt/models')
    sys.path.append('python/img2prompt/transform')


augmentPath()

# distribute over X GPUS


class Device:

    def __init__(self):
        self.GPU_ID = 0
        self.GPU_COUNT = torch.cuda.device_count()

        self.CPU = False
        if self.GPU_COUNT == 0:
            self.CPU = True

    def getDevice(self):
        if self.CPU == True:
            return 'cpu'
        self.GPU_ID += 1
        return 'cuda:%s' % (self.GPU_ID % self.GPU_COUNT)


DEVICE = Device()


# MODEL CONFIG ?
"""
    "CompVis/stable-diffusion-v1-4",
    revision="fp16",
    torch_dtype=torch.float16,
    use_auth_token=True
"""
# creates a folder to store the images

# UTILS

import PIL
def image_grid(imgs, w, h, rows, cols):
    assert len(imgs) == rows * cols
    # grid
    # grid = PIL.Image.new('RGB', size=(cols * w, rows * h))
    # line
    grid = PIL.Image.new('RGB', size=(cols * rows * w,  h))
    for i, img in enumerate(imgs):
        # grid
        # grid.paste(img, box=(i % cols * w, i // cols * h))
        # line
        grid.paste(img, (i * w, 0 ) )
    return grid


def sanitize(text):
    # removes invalid characters from the prompt
    stripped_text = ''
    for c in text:
        stripped_text += c if len(c.encode(encoding='utf_8')) == 1 else ''
    stripped_text = stripped_text.replace('\n', '')
    stripped_text = stripped_text.replace('\r', '')
    stripped_text = stripped_text.replace('\t', '')
    return stripped_text


if __name__ == "__main__":
    print(DEVICE.getDevice())
    print(DEVICE.getDevice())
    print(DEVICE.getDevice())
