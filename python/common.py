
import os
import torch


DEBUG = True


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
TMP_FOLDER = "results/tmp/"
os.makedirs(TMP_FOLDER, exist_ok=True)

ROOT_FOLDER = "results/"
os.makedirs(ROOT_FOLDER, exist_ok=True)


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
    print(DEVICE.getDevice())
