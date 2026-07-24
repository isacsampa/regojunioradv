from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

images = [
    ("public/images/logo.png", (512, 512), "Logo", "#ffffff", "#111111"),
    ("public/images/capa-artigo.png", (1600, 900), "Artigo", "#f5f5f5", "#111111"),
    ("public/images/advogado.jpg", (900, 1200), "Advogado", "#f0f0f0", "#111111"),
]

Path("public/images").mkdir(parents=True, exist_ok=True)
font = ImageFont.load_default()
for path, size, text, bg, fg in images:
    img = Image.new("RGB", size, bg)
    draw = ImageDraw.Draw(img)
    bbox = font.getbbox(text)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    draw.text(((size[0] - w) // 2, (size[1] - h) // 2), text, font=font, fill=fg)
    img.save(path)
    print("created", path)
