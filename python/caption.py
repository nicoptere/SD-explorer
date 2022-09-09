


# import shared settings
from common import DEVICE, ROOT_FOLDER, DEBUG, sanitize, augmentPath
augmentPath()

import os
import clip
import PIL.Image
import torch
from torchvision import transforms
from torchvision.transforms.functional import InterpolationMode
from models.blip import blip_decoder

device = None
blip_model = None
blip_image_eval_size = 384
model = None
preprocess = None

def init():
    print( 'INITIALIZE image to prompt')
    global device, blip_model, blip_image_eval_size, model, preprocess

    # BLIP
    device = torch.device('cuda:0' if torch.cuda.is_available() else 'cpu')

    blip_model_url = 'python/models/model__base_caption.pth'
    blip_model = blip_decoder(pretrained=blip_model_url,
                            image_size=blip_image_eval_size, vit='base')
    blip_model.eval()
    blip_model = blip_model.to(device)

    # CLIP
    # ['RN50', 'RN101', 'RN50x4', 'RN50x16', 'ViT-B/32', 'ViT-B/16']
    model_name = 'ViT-B/32'
    model, preprocess = clip.load(model_name)
    model.cuda().eval()
    print('image to prompt INITIALIZED')



# prepare captions
def load_list(filename):
    with open(filename, 'r', encoding='utf-8', errors='replace') as f:
        items = [line.strip() for line in f.readlines()]
    return items

data_path = "python/img2prompt/interrogator_data/"
artists = load_list(os.path.join(data_path, 'artists.txt'))
flavors = load_list(os.path.join(data_path, 'flavors.txt'))
mediums = load_list(os.path.join(data_path, 'mediums.txt'))
movements = load_list(os.path.join(data_path, 'movements.txt'))
sites = ['Artstation', 'behance', 'cg society', 'cgsociety', 'deviantart', 'dribble', 'flickr', 'instagram', 'pexels',
         'pinterest', 'pixabay', 'pixiv', 'polycount', 'reddit', 'shutterstock', 'tumblr', 'unsplash', 'zbrush central']
trending_list = [site for site in sites]
trending_list.extend(["trending on "+site for site in sites])
trending_list.extend(["featured on "+site for site in sites])
trending_list.extend([site+" contest winner" for site in sites])
# print( 'trneds', trending_list )


def generate_caption(pil_image):

    global device, blip_model, blip_image_eval_size

    gpu_image = transforms.Compose([
        transforms.Resize((blip_image_eval_size, blip_image_eval_size),
                          interpolation=InterpolationMode.BICUBIC),
        transforms.ToTensor(),
        transforms.Normalize((0.48145466, 0.4578275, 0.40821073),
                             (0.26862954, 0.26130258, 0.27577711))
    ])(pil_image).unsqueeze(0).to(device)

    with torch.no_grad():
        caption = blip_model.generate(
            gpu_image, sample=False, num_beams=3, max_length=20, min_length=5)
    return caption[0]

def rank(model, image_features, text_array, top_count=1):

    top_count = min(top_count, len(text_array))
    text_tokens = clip.tokenize([text for text in text_array]).cuda()

    with torch.no_grad():
        text_features = model.encode_text(text_tokens).float()
    text_features /= text_features.norm(dim=-1, keepdim=True)

    similarity = torch.zeros((1, len(text_array))).to(device)
    for i in range(image_features.shape[0]):
        similarity += (100.0 * image_features[i].unsqueeze(0)
                       @ text_features.T).softmax(dim=-1)
    similarity /= image_features.shape[0]

    top_probs, top_labels = similarity.cpu().topk(top_count, dim=-1)
    return [(text_array[top_labels[0][i].numpy()], (top_probs[0][i].numpy()*100)) for i in range(top_count)]


def compute(file):

    global model, preprocess, blip_model

    if model is None:
        init()
    
    pil_image = PIL.Image.open(file)
    caption = generate_caption(pil_image)
    
    images = preprocess(pil_image).unsqueeze(0).cuda()
    with torch.no_grad():
        image_features = model.encode_image(images).float()
    image_features /= image_features.norm(dim=-1, keepdim=True)
    

    ranks = [
        rank(model, image_features, mediums),
        rank(model, image_features, ["by "+artist for artist in artists]),
        rank(model, image_features, trending_list),
        rank(model, image_features, movements),
        rank(model, image_features, flavors, top_count=3)
        ]

    bests = [[('', 0)]]*5
    for i in range(len(ranks)):
        confidence_sum = 0
        for ci in range(len(ranks[i])):
            confidence_sum += ranks[i][ci][1]
        if confidence_sum > sum(bests[i][t][1] for t in range(len(bests[i]))):
            bests[i] = ranks[i]

    result = [caption]
    for r in ranks:
        # result.append(', '.join([f"{x[0]} ({x[1]:0.1f}%)" for x in r]))
        result.append(', '.join([x[0] for x in r]))
    # print(result)
    fp = open("results/tmp/prompts/caption.txt", "w+", encoding='utf-8')
    fp.writelines(' '.join( result ))
    fp.close()

    return ' '.join( result )


if __name__ == "__main__":

    file = ROOT_FOLDER + "inference/inf-a-beautiful-portrait-of-a-woman-by-Ross-Tran-and-Leonardo-da-Vinci,-rossdraws,-artstation,-piercing-gaze_40_7.0_1_512_512.png"
    file = ROOT_FOLDER + "inference/inf-a-tropical-aquarium-in-a-dimly-lit-abandoned-atrium,-skylights,-trending-on-artstation,-steampunk_40_7.0_7656516546621354_512_512.png"
    compute(file)
