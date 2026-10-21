"""Generate web brand assets from the official logo (public/images/corpolance-logo.png).

The source logo is a 1024x1024 raster on a flat off-white background. This script:
  * removes the flat background by un-multiplying against it (colours are preserved,
    anti-aliased edges become proper alpha), then crops to the artwork;
  * writes a full lockup (mark + wordmark + tagline), a header lockup without the
    tagline (the tagline is illegible at header size), and the mark alone;
  * builds favicons, touch icons and the Open Graph sharing image.

The original file is never modified. Run with: python scripts/make-brand-assets.py
"""

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "public" / "images" / "corpolance-logo.png"
OUT = ROOT / "public" / "images"
PUBLIC = ROOT / "public"

NAVY = (11, 51, 80)
WHITE = (255, 255, 255)


def remove_background(img: Image.Image) -> Image.Image:
    rgb = np.asarray(img.convert("RGB")).astype(np.float64)
    # Background estimate from the image border.
    border = np.concatenate([rgb[:8].reshape(-1, 3), rgb[-8:].reshape(-1, 3)])
    bg = np.median(border, axis=0)
    # Foreground is darker than the background in every channel: alpha is the
    # largest relative darkening across channels.
    alpha = np.max((bg - rgb) / bg, axis=2)
    alpha = np.clip((alpha - 0.02) / 0.98, 0, 1)  # suppress paper noise
    safe = np.where(alpha > 0, alpha, 1)[..., None]
    color = (rgb - (1 - alpha[..., None]) * bg) / safe
    color = np.clip(color, 0, 255)
    out = np.dstack([color, alpha * 255]).astype(np.uint8)
    return Image.fromarray(out, "RGBA")


def trim(img: Image.Image, pad: int = 0) -> Image.Image:
    a = np.asarray(img)[..., 3]
    ys, xs = np.where(a > 8)
    box = (xs.min() - pad, ys.min() - pad, xs.max() + 1 + pad, ys.max() + 1 + pad)
    return img.crop(box)


def fit(img: Image.Image, width: int) -> Image.Image:
    h = round(img.height * width / img.width)
    return img.resize((width, h), Image.LANCZOS)


def main() -> None:
    logo = remove_background(Image.open(SRC))
    full = trim(logo, pad=4)
    fit(full, 960).save(OUT / "logo-full.png", optimize=True)

    # Header lockup: blank out the tagline (below the wordmark, right of the mark).
    header = logo.copy()
    arr = np.asarray(header).copy()
    arr[548:, 320:, 3] = 0
    header = trim(Image.fromarray(arr, "RGBA"), pad=2)
    fit(header, 640).save(OUT / "logo-header.png", optimize=True)
    fit(header, 480).save(OUT / "logo-header.webp", lossless=False, quality=92, method=6)
    fit(full, 640).save(OUT / "logo-full.webp", lossless=False, quality=92, method=6)

    mark = trim(logo.crop((90, 360, 320, 600)), pad=0)
    mark.save(OUT / "logo-mark.png", optimize=True)

    # Favicons: mark on a white rounded tile so it reads on light and dark tabs.
    def tile(size: int, inset: float = 0.12, radius: float = 0.22) -> Image.Image:
        canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        ImageDraw.Draw(canvas).rounded_rectangle(
            (0, 0, size - 1, size - 1), radius=round(size * radius), fill=WHITE + (255,)
        )
        inner = round(size * (1 - 2 * inset))
        m = mark.resize((inner, round(inner * mark.height / mark.width)), Image.LANCZOS)
        canvas.alpha_composite(m, ((size - m.width) // 2, (size - m.height) // 2))
        return canvas

    tile(512).save(PUBLIC / "favicon.png", optimize=True)
    tile(256).save(PUBLIC / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    tile(192).save(PUBLIC / "icon-192.png", optimize=True)
    tile(512).save(PUBLIC / "icon-512.png", optimize=True)
    apple = Image.new("RGBA", (180, 180), WHITE + (255,))
    m = mark.resize((126, round(126 * mark.height / mark.width)), Image.LANCZOS)
    apple.alpha_composite(m, ((180 - m.width) // 2, (180 - m.height) // 2))
    apple.convert("RGB").save(PUBLIC / "apple-touch-icon.png", optimize=True)

    # Open Graph image 1200x630.
    og = Image.new("RGBA", (1200, 630), WHITE + (255,))
    draw = ImageDraw.Draw(og)
    draw.rectangle((0, 520, 1200, 630), fill=NAVY + (255,))
    lockup = fit(full, 760)
    og.alpha_composite(lockup, ((1200 - lockup.width) // 2, 150))
    try:
        font = ImageFont.truetype("C:/Windows/Fonts/seguisb.ttf", 30)
    except OSError:
        font = ImageFont.load_default()
    text = "Technical support & IT resources for professionals, agencies and organizations"
    tw = draw.textlength(text, font=font)
    draw.text(((1200 - tw) / 2, 555), text, font=font, fill=WHITE)
    og.convert("RGB").save(OUT / "og-image.jpg", quality=88, optimize=True)

    print("brand assets written")


if __name__ == "__main__":
    main()
