#!/usr/bin/env python3
"""Generate a permanent 1200x630 JPG social card from the current homepage artwork."""
from pathlib import Path
import argparse
from PIL import Image, ImageDraw, ImageFont, ImageOps

def font(size, bold=True):
    files = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSansCondensed-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
    ] if bold else [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
    ]
    for file in files:
        if Path(file).exists():
            return ImageFont.truetype(file, size)
    return ImageFont.load_default()

def fit_text(draw, text, max_width, max_size):
    for size in range(max_size, 35, -1):
        f=font(size)
        if draw.textbbox((0, 0), text, font=f)[2] <= max_width:
            return f
    return font(36)

def render(args):
    size=(1200, 630)
    source=Image.open(args.source).convert("RGB")
    cropped=ImageOps.fit(source,size,method=Image.Resampling.LANCZOS,centering=(0.5,0.0)).convert("RGBA")
    # Offset the photograph under the branded header so the subject's face
    # stays inside the visible card rather than hiding under the top strip.
    image=Image.new("RGBA",size,(8,16,19,255))
    image.alpha_composite(cropped,dest=(115,83))
    shade=Image.new("RGBA",size,(0,0,0,0))
    pixels=shade.load()
    for y in range(630):
        for x in range(1200):
            horizontal=max(0.0,1.0-x/1170)
            opacity=0.10 + 0.78*(horizontal**1.9) + (0.10 if y>475 else 0)
            pixels[x,y]=(3,12,14,min(235,int(opacity*255)))
    image=Image.alpha_composite(image,shade)
    draw=ImageDraw.Draw(image)
    draw.rectangle((0,0,1200,85), fill=(7,21,19,242) if args.brand=="shootless" else (7,9,12,242))
    draw.line((0,85,1200,85),fill=(60,105,84,180),width=1)
    brand="SHOOTLESS." if args.brand=="shootless" else "THIRD AXIS CREATIVE //"
    draw.text((64,25),brand,font=font(26),fill="#F2F0EB")
    if args.brand=="shootless":
        draw.text((940,36),"AI IMAGING STUDIO",font=font(14),fill="#F3A12A")
    else:
        draw.text((944,36),"CREATIVE STUDIO",font=font(14),fill="#2FA976")
    accent="#F3A12A" if args.brand=="shootless" else "#2FA976"
    kicker="THE IMAGING VENTURE FROM THIRD AXIS CREATIVE" if args.brand=="shootless" else "IDEAS MADE REAL."
    draw.ellipse((66,157,75,166),fill="#F3A12A")
    draw.text((92,151),kicker,font=font(15),fill="#2FA976",stroke_width=0)
    lines=["CREATIVE CONTROL.","WITHOUT THE SHOOT."] if args.brand=="shootless" else ["CREATIVE THINKING.","TECHNICAL EXECUTION."]
    for index,line in enumerate(lines):
        f=fit_text(draw,line,1080,83)
        draw.text((63,196+index*92),line,font=f,fill="#F2F0EB" if index==0 else accent,stroke_width=0)
    desc="Production-led AI imagery for fashion, ecommerce and campaigns." if args.brand=="shootless" else "Photography. Creative production. 3D. Intelligent systems."
    draw.text((67,432),desc,font=font(19,False),fill="#E4E7E4")
    draw.text((68,578),"SCROLL TO EXPLORE",font=font(13),fill="#F2F0EB")
    draw.text((280,574),"↓",font=font(23,False),fill=accent)
    output=Path(args.out)
    output.parent.mkdir(parents=True,exist_ok=True)
    image.convert("RGB").save(output,format="JPEG",quality=86,optimize=True,progressive=True,subsampling=0)
    check=Image.open(output)
    assert check.size==size
    print(f"Generated {output}: {check.size}, {output.stat().st_size} bytes")

if __name__=="__main__":
    parser=argparse.ArgumentParser()
    parser.add_argument("--brand",choices=("shootless","thirdaxis"),required=True)
    parser.add_argument("--source",required=True)
    parser.add_argument("--out",required=True)
    render(parser.parse_args())
