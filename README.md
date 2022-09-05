# SD-explorer

#### foreword

this is a toy project to run the [Stable Diffusion](https://github.com/CompVis/stable-diffusion) model locally.
if you're after something more solid, I'd suggest you use [WebUI](https://github.com/hlky/stable-diffusion-webui) instead.

as of now, this is essentially a bridge between NodeJS and the [huggingface diffusers](https://github.com/huggingface/diffusers).
you'll find all the background information and interactive exampless on the [huggingface diffusers colab](https://colab.research.google.com/github/huggingface/notebooks/blob/main/diffusers/stable_diffusion.ipynb#scrollTo=gd-vX3cavOCt).

#### pre-requisite :

- **first and foremost:**
  **a Nvidia GPU with more than 10Go+ memory RTX 20XX+** (I think...)
  **if you don't have this, no need to install this repo**
- up to date GPU drivers and the matching CUDA + cuDNN drivers
- the model is handled by the _diffusers lib_, [follow the instructions and requirements here](https://github.com/huggingface/diffusers)
- NB the diffuser lib requires user to login to huggingface and accept the license terms of the Stable diffusion model (see [the model card](https://huggingface.co/CompVis/stable-diffusion-v1-4))
- Python 3.X (I use 3.9.5 on Windows) + PIP
- NodeJS and NPM

in other words, if you managed to run the [huggingface diffusers](https://github.com/huggingface/diffusers) locally, from a CLI, you should be good to go. if not, I can't really help as the setup varies immensely between machines, OS, CUDA and Python version.

#### upscaling:

the upscaling option will require you to install RealESRGAN and CFPGAN (for face enhancement)

```
pip install realesrgan==0.2.5.0
pip install gfpgan==0.2.4
```

feel free to install more models from the [REALESRGAN model zoo](https://upscale.wiki/wiki/Model_Database#Paper.2FOfficial_Models), make sure to save them into the `python/models/` folder.

**warning:**

> I removed the **NSFW filter** on the _img2img.py_ because it returns empty images if it considers the content unsafe. this means that if you provide🔞prompts, the model **will deliver🔞contents**.
> consider yourself warned.

#### run!

install the npm dependencies with `npm install`

the JS app is located in src/, you can (must) build it with `rollup --config rollup.config.js`

run the server with `npm start` or `npm run sd `or `node server.js`

open a web browser and got to `http://localhost:8080/ `

to test on another device (mobile, tablet), set your LAN IP in the server.js file.

## overview

the concept is to generate images using using text written in natural language: the **prompts**.

you can write them inside the textareas or press the **randomize** button below to use the built in prompts list from [Prompt Parrot! 🦜](https://colab.research.google.com/drive/1GtyVgVCwnDfRvfsHbeU0AlG-SgQn1p8e?usp=sharing#scrollTo=gbfhp-raJgPH) to quickly check various styles and configs.

the app works with a single 2D canvas and the draggable red rectangle is the "region" that will be processed by Python. this allows for interesting and intuitive edition capabilities: start with an inference, then inptaint a larger area, then use image to image on portions of the resulting composition, rinse and repeat.

#### inference

the **inference** tab creates an image "from scratch" given a number of _steps_ (think of it as a level of detail) and a _guidance rate_ (think of it as the 'fidelity' to the prompt).
higher **steps** count takes longer but provides more qualitative images, lower steps count computes faster but are usually blurry as f.
**guidance** doesn't impact the computation time, lower guidance rate will take more _risks_ (same goes for the img2img)
by default the **seed** is set to -1 which means that for each call, the _generator_ will be randomize, if you set it to a given number, the model will always produce the same image unless you change on of the parameters.

#### image to image

the **img2img** tab _crops_ the rectangle from the main canvas and _drives_ it towards the prompt at a given _strength_ (**guidance** and **seed** work as above)_._
that's where the **undo** button shines, it is very hard to tune...

#### inpainting

the **inpainting** tab works a bit like the image to image. the difference is that you need to draw a mask in the region.
the mask is sent alongt the source image and the model will only _drive_ the painted area towards the prompt.
there are 3 extra params on this tab: **size**, the brush size, **softness**, the _strength_ of the brush gradient and **alpha**, the opacity of the stroke. this is a rather incredible feature when you get used to it (addictive too).

#### region size

it is recommended to keep 512 in width or height, smaller sizes (say 256*256) won't give good results (they'll be oversaturated). I limited the rect to 512*512 as it may become impossible for Node to receive Blobs bigger than that.

feedbacks welcome :)

## UI

all the functionalities are packed in a single GUI, the parameters vary depending on what you want to do.
