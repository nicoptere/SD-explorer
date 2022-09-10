

import torch
from torch import autocast
import os

# import shared settings
from python.common import DEVICE, ROOT_FOLDER, DEBUG, sanitize, augmentPath, image_grid
augmentPath()

# inference
from python.inference import StableDiffusionPipeline

SEED = -1
pipe = None
generator = None


# @pytalk_method('initialize')
def init():
    print('initialize INFERENCE')
    global pipe, generator, SEED
    pipe = StableDiffusionPipeline.from_pretrained(
        "CompVis/stable-diffusion-v1-4",
        revision="fp16",
        torch_dtype=torch.float16,
        use_auth_token=True
    )
    pipe = pipe.to(DEVICE.getDevice())
    generator = torch.Generator('cuda').manual_seed(SEED)
    print('INFERENCE initialized')
    return True


@pytalk_method('inference')
def inference(prompt, steps=50, guidance=7.5, seed=-1, w=512, h=512, row=1, column=1):

    global pipe, generator, SEED
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
        generator = torch.Generator('cuda').manual_seed(SEED)
        if DEBUG == True:
            print("\t set seed: ", SEED)
    else:
        seed = generator.seed()

    # create the output file name
    img_name = ROOT_FOLDER + "inference/inf-%s_%s_%s_%s_%s_%s.png" % (sanitize(prompt),
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

    # perform inference
    cmd = [prompt] * column
    all_images = []
    for i in range(row):

        with autocast("cuda"):
            images = pipe(cmd,
                          num_inference_steps=steps,
                          guidance_scale=guidance,
                          generator=generator,
                          width=w,
                          height=h)["sample"]
        all_images.extend(images)

    # save file to disk and return the file name
    grid = image_grid(all_images, w=w, h=h, rows=row, cols=column)
    grid.save(img_name)
    return img_name
