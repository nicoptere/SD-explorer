import torch
from torch import autocast
from PIL import Image

# image 2 image utils
from python.image_to_image import StableDiffusionImg2ImgPipeline, preprocess

# import shared settings
from python.common import DEVICE, ROOT_FOLDER, TMP_FOLDER, DEBUG, sanitize, image_grid

pipe = None
generator = None
SEED = -1


# @pytalk_method('initialize')
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
    pipe = pipe.to(DEVICE.getDevice())
    generator = torch.Generator("cuda").manual_seed(SEED)
    print('IMAGE TO IMAGE initialized')


@pytalk_method('img2img')
def img2img(prompt, strength=50, guidance=7.5, seed=-1, w=512, h=512, row=1, column=1):

    global pipe, generator, SEED
    image = Image.open(TMP_FOLDER + 'i2i-tmp.jpg').convert("RGB")
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
    img_name = ROOT_FOLDER + "img2img/i2i-%s_%s_%s_%s_%s_%s.png" % (sanitize(prompt),
                                                                    strength, guidance, seed, w, h)
    img_name = img_name.replace(' ', '-')

    if DEBUG == True:
        print("compute new image: ")
        print("\t prompt: ", prompt)
        print("\t strength: ", strength)
        print("\t guidance: ", guidance)
        print("\t seed: ", seed)

    # perform image 2 image
    cmd = [prompt] * column
    all_images = []
    for i in range(row):
        with autocast("cuda"):
            images = pipe(  prompt=cmd,
                            init_image=image,
                            strength=strength,
                            guidance_scale=guidance,
                            generator=generator
                            )["sample"]
        all_images.extend(images)

    # save file to disk and return the file name
    grid = image_grid(all_images, w=w, h=h, rows=row, cols=column)
    grid.save(img_name)
    return img_name
