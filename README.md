# SD-explorer

#### foreword

this is a toy project to run the [Stable Diffusion](https://github.com/CompVis/stable-diffusion) model locally.
by _toy project_ I mean the UI is not user friendly, the code is terribly messy and it will stay that way.
if you're after something solid, **I'd suggest you use [WebUI](https://github.com/hlky/stable-diffusion-webui) instead**.

this is essentially a bridge between NodeJS and the [huggingface diffusers](https://github.com/huggingface/diffusers).
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

in other words:

if you manage to run the [huggingface diffusers](https://github.com/huggingface/diffusers) locally, from a CLI, you should be good to go.

if not, I can't be of any help as the setup varies immensely between machines.

#### run!

install the npm dependencies with `npm install`

then run the server with `npm run sd`

then open a web browser and got to `http://localhost:8080/`

#### usage

**warning:**

- I removed the **NSFW filter** on the _img2img.py_
  this means that if you provide🔞prompts, the model **will deliver**.
  consider yourself warned.
- after a while the thing blows up and may crash your machine (gently).

The concept is to generate images using using text written in natural language: the **prompts**. you can write them inside the textareas or press the **randomize** button below to use the built in prompts list from [Prompt Parrot! 🦜](https://colab.research.google.com/drive/1GtyVgVCwnDfRvfsHbeU0AlG-SgQn1p8e?usp=sharing#scrollTo=gbfhp-raJgPH) to quickly check various styles and configs.

the thing works on a fullscreen 2D canvas and the draggable red rectangle is the area that will be sent and processed by Python.

#### inference

the **inference** tab creates an image "from scratch" given a number of _steps_ (think of it as a level of detail) and a _guidance rate_ (think of it as the 'fidelity' to the prompt).
higher **steps** count takes longer but provides more qualitative images, lower steps count computes faster but are usually blurry as f.
**guidance** doesn't impact the computation time, lower guidance rate will take more _risks_ (same goes for the img2img)
by default the **seed** is set to -1 which means that for each call, the _generator_ will be randomize, if you set it to a given number, the model will always produce the same image unless you change on of the parameters.

#### image to image

the **img2img** tab _crops_ the rectangle from the main canvas and _drives_ it towards the prompt at a given _strength_ (**guidance** and **seed** work as above)_._
that's where the **undo** button shines, it is very hard to tune...

#### inpainting

the **inpainting** tab works a bit like the image to image. the difference is that you need to draw a mask in the zone.
the mask is sent alongt the source image and the model will only _drive_ the painted area towards the prompt.
there are 3 extra params on this tab: **size**, the brush size, **softness**, the _strength_ of the brush gradient and **alpha**, the opacity of the stroke. this is a rather incredible feature when you get used to it (addictive too).

#### size

it is recommended to keep 512 in width or height, smaller sizes (say 256*256) won't give good results (they'll be oversaturated). I limited the rect to 512*512 as it may become impossible for Node to receive Blobs bigger than that...

#### app

the JS app is located in src/, you can re-build it with `rollup --config rollup.config.js`

feedbacks welcome :)
