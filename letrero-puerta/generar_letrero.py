#!/usr/bin/env python3
"""Letrero de puerta — 'Silencio Acuoso' — editorial minimalista, apaisado."""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import math, random

# ---- Lienzo: 30 x 20 cm @ 300 DPI ----
W, H = 3543, 2362
FONTS = "/sessions/magical-quirky-edison/mnt/outputs/fonts"

# ---- Paleta ----
BG        = (244, 239, 231)   # off-white cálido
DEEP      = (31, 58, 95)      # azul emocional profundo
WBLUE     = (63, 111, 140)    # azul acuarela
GREEN     = (94, 143, 126)    # verde orgánico
SGREEN    = (143, 191, 176)   # verde suave
LAV       = (183, 169, 208)   # lavanda
INK_SOFT  = (74, 92, 118)

# ---- Fuentes ----
def serif(size, wght=500, italic=False):
    f = ImageFont.truetype(f"{FONTS}/PlayfairDisplay{'-Italic' if italic else ''}.ttf", size)
    try: f.set_variation_by_axes([wght])
    except Exception: pass
    return f

def sans(size, wght=500):
    f = ImageFont.truetype(f"{FONTS}/Montserrat.ttf", size)
    try: f.set_variation_by_axes([wght])
    except Exception: pass
    return f

img = Image.new("RGB", (W, H), BG)

# ---- Grano de papel muy sutil ----
random.seed(7)
noise = Image.new("L", (W//2, H//2))
noise.putdata([random.randint(118, 138) for _ in range((W//2)*(H//2))])
noise = noise.resize((W, H)).filter(ImageFilter.GaussianBlur(0.6))
grain = Image.new("RGB", (W, H), BG)
img = Image.blend(img, Image.composite(Image.new("RGB",(W,H),(238,232,222)), img, noise), 0.06)

draw = ImageDraw.Draw(img, "RGBA")

# ---- Acuarela: veladura suave centrada detrás del nombre ----
def wash(cx, cy, rx, ry, color, alpha, blur):
    layer = Image.new("RGBA", (W, H), (0,0,0,0))
    ld = ImageDraw.Draw(layer)
    # varias elipses irregulares apiladas para textura orgánica
    for i in range(9):
        a = alpha * (0.5 + 0.5*random.random())
        ox = random.randint(-int(rx*0.18), int(rx*0.18))
        oy = random.randint(-int(ry*0.22), int(ry*0.22))
        r1 = rx * (0.55 + 0.45*random.random())
        r2 = ry * (0.55 + 0.45*random.random())
        ld.ellipse([cx-r1+ox, cy-r2+oy, cx+r1+ox, cy+r2+oy], fill=color+(int(a),))
    layer = layer.filter(ImageFilter.GaussianBlur(blur))
    img.alpha_composite(layer) if img.mode=="RGBA" else img.paste(Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB"),(0,0))

# trabajamos en RGBA para las veladuras
img = img.convert("RGBA")
random.seed(21)
# veladuras separadas para que se lean como color, no como halo gris
wash(int(W*0.30), int(H*0.66), 820, 520, SGREEN, 30, 165)
wash(int(W*0.72), int(H*0.40), 780, 520, LAV,    26, 165)
wash(int(W*0.66), int(H*0.72), 640, 420, WBLUE,  22, 150)
wash(int(W*0.34), int(H*0.34), 560, 400, GREEN,  16, 160)
img = img.convert("RGB")
draw = ImageDraw.Draw(img, "RGBA")

# ---- Marco de filete fino ----
m = 150
draw.rectangle([m, m, W-m, H-m], outline=DEEP+(255,), width=3)
# segundo filete interior aún más fino
mi = m + 26
draw.rectangle([mi, mi, W-mi, H-mi], outline=DEEP+(90,), width=1)

# ---- Utilidades de texto ----
def text_w(font, s, tracking=0):
    w = sum(font.getbbox(ch)[2]-font.getbbox(ch)[0] + tracking for ch in s)
    return w - (tracking if s else 0)

def draw_tracked(cy, s, font, fill, tracking, spaces_extra=0):
    # calcula ancho con tracking y espacios extra
    widths = []
    for ch in s:
        b = font.getbbox(ch)
        widths.append(b[2]-b[0])
    total = 0
    for i,ch in enumerate(s):
        adv = widths[i] + tracking + (spaces_extra if ch==" " else 0)
        total += adv
    total -= tracking
    x = (W - total)/2
    asc, desc = font.getmetrics()
    for i,ch in enumerate(s):
        b = font.getbbox(ch)
        draw.text((x - b[0], cy - asc), ch, font=font, fill=fill)
        x += widths[i] + tracking + (spaces_extra if ch==" " else 0)

def draw_center(cy, s, font, fill):
    b = font.getbbox(s)
    w = b[2]-b[0]
    asc, desc = font.getmetrics()
    draw.text(((W-w)/2 - b[0], cy - asc), s, font=font, fill=fill)

def rule(cy, half=210, dot=True):
    draw.line([(W//2-half, cy),(W//2-55, cy)], fill=DEEP+(150,), width=2)
    draw.line([(W//2+55, cy),(W//2+half, cy)], fill=DEEP+(150,), width=2)
    if dot:
        draw.ellipse([W//2-8, cy-8, W//2+8, cy+8], fill=DEEP+(210,))

# ---- KICKER superior ----
f_kick = sans(56, 600)
draw_tracked(int(H*0.185), "C L A S E S   D E", f_kick, WBLUE+(255,), 8)
rule(int(H*0.228))

# ---- HERO serif ----
f_hero = serif(255, 520)
draw_center(int(H*0.375), "Acuarela", f_hero, DEEP+(255,))
f_amp = serif(140, 500, italic=True)
draw_center(int(H*0.487), "&", f_amp, WBLUE+(255,))
draw_center(int(H*0.605), "Arteterapia", f_hero, DEEP+(255,))

# ---- Firma italic: Josefina ----
f_sig = serif(215, 500, italic=True)
draw_center(int(H*0.760), "Josefina", f_sig, WBLUE+(255,))

rule(int(H*0.838), half=190)

# ---- KICKER inferior ----
f_foot = sans(46, 600)
draw_tracked(int(H*0.888), "S A N T I A G O   ·   C H I L E", f_foot, INK_SOFT+(255,), 6)

# ---- Exportar ----
out_png = "/sessions/magical-quirky-edison/mnt/outputs/letrero_josefina.png"
img.save(out_png, "PNG", dpi=(300,300))
img.save("/sessions/magical-quirky-edison/mnt/outputs/letrero_josefina.pdf", "PDF", resolution=300)
print("done", img.size)
