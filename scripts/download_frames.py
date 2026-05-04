#!/usr/bin/env python3
"""Render and download Figma frames as PNGs."""
import json
import os
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ENV = dict(line.strip().split("=", 1) for line in (ROOT / ".env").read_text().splitlines() if line.strip() and not line.startswith("#"))
TOKEN = ENV["FIGMA_TOKEN"]
FILE_KEY = ENV["FIGMA_FILE_KEY"]


def figma_get(path: str) -> dict:
    req = urllib.request.Request(f"https://api.figma.com/v1{path}", headers={"X-Figma-Token": TOKEN})
    with urllib.request.urlopen(req) as r:
        return json.load(r)


def render(frames: dict[str, str], out_dir: Path, scale: int = 2, fmt: str = "png") -> None:
    out_dir.mkdir(parents=True, exist_ok=True)
    ids = ",".join(frames.values())
    data = figma_get(f"/images/{FILE_KEY}?ids={ids}&format={fmt}&scale={scale}")
    for name, node_id in frames.items():
        url = data["images"][node_id]
        target = out_dir / f"{name}.{fmt}"
        print(f"  -> {target.name}")
        urllib.request.urlretrieve(url, target)


DESKTOP_EN = {
    "01-homepage": "192:1567",
    "02-homepage-promo": "246:4201",
    "03-collaboration": "227:2950",
    "04-index": "252:4403",
    "05-studio": "238:3136",
    "06-about": "239:3834",
    "07-individual-page": "253:5098",
    "08-contact": "240:4050",
}

MOBILE_EN = {
    "01-homepage": "259:6481",
    "02-collaboration": "260:6584",
    "03-studio": "260:6676",
    "04-index": "260:7039",
    "05-individual-page": "262:7404",
    "06-about": "263:7591",
    "07-contact": "262:7504",
    "08-menu-open": "259:6447",
}


if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "desktop-en"
    if target == "desktop-en":
        print("Rendering desktop EN frames...")
        render(DESKTOP_EN, ROOT / "designs/desktop-en")
    elif target == "mobile-en":
        print("Rendering mobile EN frames...")
        render(MOBILE_EN, ROOT / "designs/mobile-en")
    elif target == "all":
        print("Rendering desktop EN frames...")
        render(DESKTOP_EN, ROOT / "designs/desktop-en")
        print("Rendering mobile EN frames...")
        render(MOBILE_EN, ROOT / "designs/mobile-en")
    else:
        sys.exit(f"Unknown target: {target}")
    print("Done.")
