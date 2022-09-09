import argparse
import cv2
import glob
import requests
import os
from basicsr.archs.rrdbnet_arch import RRDBNet
from realesrgan import RealESRGANer
from realesrgan.archs.srvgg_arch import SRVGGNetCompact

# import shared settings
from python.common import DEVICE, ROOT_FOLDER, TMP_FOLDER, DEBUG, sanitize


@pytalk_method('upscale')
def upscale(name, face_enhance=True, outscale=4, model_name='RealESRGAN_x4plus'):

    face_enhance = bool(face_enhance)
    outscale = int(outscale)
    input = TMP_FOLDER + "upscale-tmp.jpg"

    output = ROOT_FOLDER + "upscale/"
    suffix = ""
    if face_enhance == True:
        suffix = '-gfp'
    tile = 0
    tile_pad = 10
    pre_pad = 0
    fp32 = True
    alpha_upsampler = 'realesrgan'
    ext = 'jpg'

    # determine models according to model names
    model_name = model_name.split('.')[0]

    if model_name in ['RealESRGAN_x4plus', 'RealESRNet_x4plus', 'hr-paintings_g']:  # x4 RRDBNet model
        model = RRDBNet(num_in_ch=3, num_out_ch=3, num_feat=64,
                        num_block=23, num_grow_ch=32, scale=4)
        netscale = 4
    # x4 RRDBNet model with 6 blocks
    elif model_name in ['RealESRGAN_x4plus_anime_6B']:
        model = RRDBNet(num_in_ch=3, num_out_ch=3, num_feat=64,
                        num_block=6, num_grow_ch=32, scale=4)
        netscale = 4
    elif model_name in ['RealESRGAN_x2plus']:  # x2 RRDBNet model
        model = RRDBNet(num_in_ch=3, num_out_ch=3, num_feat=64,
                        num_block=23, num_grow_ch=32, scale=2)
        netscale = 2
    # x4 VGG-style model (XS size)
    elif model_name in ['realesr-animevideov3']:
        model = SRVGGNetCompact(
            num_in_ch=3, num_out_ch=3, num_feat=64, num_conv=16, upscale=4, act_type='prelu')
        netscale = 4

    # determine model paths

    model_path = os.path.join(
        'python/models', model_name + '.pth')
    if not os.path.isfile(model_path):

        # model_path = os.path.join(
        #     'python/realesrgan/weights', model_name + '.pth')

        # download the X4 model
        print("download model")
        url = 'https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth'
        r = requests.get(url, stream=True)
        if r.status_code == 200:
            with open(model_path, 'wb') as f:
                for chunk in r:
                    f.write(chunk)
        else:
            print("download failed:", str(r.status_code), url)

    if not os.path.isfile(model_path):
        raise ValueError(f'Model {model_name} does not exist.')

    # restorer
    upsampler = RealESRGANer(
        scale=netscale,
        model_path=model_path,
        model=model,
        tile=tile,
        tile_pad=tile_pad,
        pre_pad=pre_pad,
        half=not fp32)

    if face_enhance:  # Use GFPGAN for face enhancement
        from gfpgan import GFPGANer
        face_enhancer = GFPGANer(
            model_path='https://github.com/TencentARC/GFPGAN/releases/download/v1.3.0/GFPGANv1.3.pth',
            upscale=outscale,
            arch='clean',
            channel_multiplier=2,
            bg_upsampler=upsampler)
    os.makedirs(output, exist_ok=True)

    if os.path.isfile(input):
        paths = [input]
    else:
        paths = sorted(glob.glob(os.path.join(input, '*')))

    for idx, path in enumerate(paths):
        imgname, extension = os.path.splitext(os.path.basename(path))
        print('Testing', idx, imgname)

        img = cv2.imread(path, cv2.IMREAD_UNCHANGED)
        if len(img.shape) == 3 and img.shape[2] == 4:
            img_mode = 'RGBA'
        else:
            img_mode = None

        image = None
        # try:
        if face_enhance:
            _, _, image = face_enhancer.enhance(
                img, has_aligned=False, only_center_face=False, paste_back=True)
        else:
            image, _ = upsampler.enhance(img, outscale=outscale)

        # except RuntimeError as error:
        #     print('Error', error)
        #     print(
        #         'If you encounter CUDA out of memory, try to set --tile with a smaller number.')
        # else:
        if ext == 'auto':
            extension = extension[1:]
        else:
            extension = ext
        if img_mode == 'RGBA':  # RGBA images should be saved in png format
            extension = 'png'
        save_path = os.path.join(
            output, '%s%s.%s' % (name, suffix, extension))

        cv2.imwrite(save_path, image)
        return save_path


"""Inference demo for Real-ESRGAN.
parser = argparse.ArgumentParser()
parser.add_argument('-i', '--input', type=str,
                    default='inputs', help='Input image or folder')
parser.add_argument(
    '-n',
    '--model_name',
    type=str,
    default='RealESRGAN_x4plus',
    help=('Model names: RealESRGAN_x4plus | RealESRNet_x4plus | RealESRGAN_x4plus_anime_6B | RealESRGAN_x2plus | '
            'realesr-animevideov3'))
parser.add_argument('-o', '--output', type=str,
                    default='results', help='Output folder')
parser.add_argument('-s', '--outscale', type=float, default=4,
                    help='The final upsampling scale of the image')
parser.add_argument('--suffix', type=str, default='out',
                    help='Suffix of the restored image')
parser.add_argument('-t', '--tile', type=int, default=0,
                    help='Tile size, 0 for no tile during testing')
parser.add_argument('--tile_pad', type=int,
                    default=10, help='Tile padding')
parser.add_argument('--pre_pad', type=int, default=0,
                    help='Pre padding size at each border')
parser.add_argument('--face_enhance', action='store_true',
                    help='Use GFPGAN to enhance face')
parser.add_argument(
    '--fp32', action='store_true', help='Use fp32 precision during inference. Default: fp16 (half precision).')
parser.add_argument(
    '--alpha_upsampler',
    type=str,
    default='realesrgan',
    help='The upsampler for the alpha channels. Options: realesrgan | bicubic')
parser.add_argument(
    '--ext',
    type=str,
    default='auto',
    help='Image extension. Options: auto | jpg | png, auto means using the same extension as inputs')
parser.add_argument(
    '-g', '--gpu-id', type=int, default=None, help='gpu device to use (default=None) can be 0,1,2 for multi-gpu')

args = parser.parse_args()

if __name__ == "__main__":
    url = "inference/inf-beautiful-cyberpunk-portrait-by-Liam-Wong-and-Ross-Tran,-artstation,-dark,-contrasting,-noir_40_7.34_3260_384_512.png"
    url = "inference/inf-Lilith,-ada-Lovelace-portrait,-Deadpool,-gothic,-artstation,-oil-on-canvas_54_12.77_1_512_512.png"
    upscale(url, False)
    upscale(url, True)
    """
