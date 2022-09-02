import torch
from torch import autocast
import os
from PIL import Image
import numpy as np

# image 2 image utils
from image_to_image import StableDiffusionImg2ImgPipeline, preprocess

# creates a folder to store the images
ROOT_FOLDER = "img2img/"
os.makedirs(ROOT_FOLDER, exist_ok=True)

pipe = None
SEED = -1
generator = None

DEBUG = True


def sanitize(text):
    # removes invalid characters from the prompt
    stripped_text = ''
    for c in text:
        stripped_text += c if len(c.encode(encoding='utf_8')) == 1 else ''
    return stripped_text


def init():
    # TODO separate method call to initializes

    print('initialize IMAGE TO IMAGE')
    global pipe, generator, SEED
    pipe = StableDiffusionImg2ImgPipeline.from_pretrained(
        "CompVis/stable-diffusion-v1-4",
        revision="fp16",
        torch_dtype=torch.float16,
        use_auth_token=True
    )
    pipe = pipe.to("cuda")
    generator = torch.Generator("cuda").manual_seed(SEED)
    print('IMAGE TO IMAGE initialized')


@pytalk_method('img2img')
def img2img(prompt, strength=50, guidance=7.5, seed=-1, w=512, h=512):

    global pipe, generator, SEED, DEBUG

    image = Image.open(ROOT_FOLDER + 'i2i-tmp.jpg').convert("RGB")
    image = preprocess(image)

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
    img_name = ROOT_FOLDER + \
        "i2i-%s_%s_%s_%s_%s_%s.png" % (sanitize(prompt),
                                       strength, guidance, seed, w, h)
    img_name = img_name.replace(' ', '-')

    # no need to compute, return image path
    # if os.path.exists(img_name) and seed != -1:
    #     if DEBUG == True:
    #         print("image already exists")
    #     return img_name
    # else:
    if DEBUG == True:
        print("compute new image: ")
        print("\t prompt: ", prompt)
        print("\t strength: ", strength)
        print("\t guidance: ", guidance)
        # print("\t img_name: ", img_name)

    # perform image 2 image
    with autocast("cuda"):
        image = pipe(
            prompt=prompt,
            init_image=image,
            strength=strength,
            guidance_scale=guidance,
            generator=generator
        )["sample"][0]

    # save file to disk and return the file name
    image.save(img_name)
    return img_name
