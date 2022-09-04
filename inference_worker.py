
from ast import Import
import torch
from torch import autocast
import os

# inference
# from diffusers import StableDiffusionPipeline
from inference import StableDiffusionPipeline

# creates a folder to store the images
ROOT_FOLDER = "inference/"
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

    print('initialize INFERENCE')
    global pipe, generator, SEED
    pipe = StableDiffusionPipeline.from_pretrained(
        "CompVis/stable-diffusion-v1-4", revision="fp16", torch_dtype=torch.float16, use_auth_token=True)
    pipe = pipe.to("cuda")
    generator = torch.Generator("cuda").manual_seed(SEED)
    print('INFERENCE initialized')


@pytalk_method('inference')
def inference(prompt, steps=50, guidance=7.5, seed=-1, w=512, h=512):

    global pipe, generator, SEED, DEBUG
    # cast variables to the proper type (they're sent as strings)
    steps = int(steps)
    guidance = float(guidance)
    seed = int(seed)
    w = int(w)
    h = int(h)

    # the pipe was not initialized yet
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
        "inf-%s_%s_%s_%s_%s_%s.png" % (sanitize(prompt),
                                       steps, guidance, seed, w, h)
    img_name = img_name.replace(' ', '-')

    # no need to compute, return image path
    if os.path.exists(img_name) and seed != -1:
        if DEBUG == True:
            print("image already exists")
        return img_name
    else:
        if DEBUG == True:
            print("compute new image: ")
            print("\t prompt: ", prompt)
            print("\t steps: ", steps)
            print("\t guidance: ", guidance)
            print("\t seed: ", seed)
            # print("\t img_name: ", img_name)

    # perform inference
    with autocast("cuda"):
        image = pipe(prompt,
                     num_inference_steps=int(steps),
                     guidance_scale=float(guidance),
                     generator=generator,
                     width=int(w),
                     height=int(h))["sample"][0]

    # save file to disk and return the file name
    image.save(img_name)
    return img_name
