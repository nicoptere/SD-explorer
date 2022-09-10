import torch
from torch import autocast
import os
from PIL import Image
import numpy as np

# inpainting utils
from python.inpainting import StableDiffusionInpaintingPipeline

# import shared settings
from python.common import DEVICE, ROOT_FOLDER, TMP_FOLDER, DEBUG, sanitize, image_grid

pipe = None
generator = None
SEED = -1


# @pytalk_method('initialize')
def init():
    # TODO separate method call to initializes

    print('initialize: INPAINTING')
    global pipe, generator, SEED

    pipe = StableDiffusionInpaintingPipeline.from_pretrained(
        "CompVis/stable-diffusion-v1-4",
        revision="fp16",
        torch_dtype=torch.float16,
        use_auth_token=True
    )
    pipe = pipe.to(DEVICE.getDevice())
    generator = torch.Generator("cuda").manual_seed(SEED)
    print('INPAINTING initialized')


@pytalk_method('inpainting')
def inpainting(prompt, strength=50, guidance=7.5, seed=-1, w=512, h=512, row=1, column=1):

    global pipe, generator, SEED, DEBUG

    image = Image.open(TMP_FOLDER + 'inp-tmp.jpg')
    mask = Image.open(TMP_FOLDER + 'inp-msk.jpg')

    # cast variables to the proper type (they're sent as strings)
    strength = float(strength)
    guidance = float(guidance)
    seed = int(seed)
    w = int(w)
    h = int(h)

    # the pipe was not initialized
    if pipe is None:
        init()

    # ressed the generator if need be
    if seed != -1 or seed != SEED:
        SEED = seed
        generator = torch.Generator("cuda").manual_seed(SEED)
        if DEBUG == True:
            print("\t set seed: ", SEED)
    else:
        seed = generator.seed()

    # create the output file name
    img_name = ROOT_FOLDER + "inpainting/inp-%s_%s_%s_%s_%s_%s.png" % (sanitize(prompt),
                                                                       strength, guidance, seed, w, h)
    img_name = img_name.replace(' ', '-')

    if DEBUG == True:
        print("compute new image: ")
        print("\t prompt: ", prompt)
        print("\t strength: ", strength)
        print("\t guidance: ", guidance)
        # print("\t img_name: ", img_name)

    # perform image 2 image
    cmd = [prompt] * column
    all_images = []
    for i in range(row):
        with autocast("cuda"):
            images = pipe(  prompt=cmd,
                            init_image=image,
                            mask_image=mask,
                            strength=strength,
                            guidance_scale=guidance,
                            generator=generator
                            )["sample"]
        all_images.extend(images)

    # save file to disk and return the file name
    grid = image_grid(all_images, w=w, h=h, rows=row, cols=column)
    grid.save(img_name)
    return img_name
