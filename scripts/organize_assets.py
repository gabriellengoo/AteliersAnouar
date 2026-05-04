#!/usr/bin/env python3
"""Rename raw Figma assets to semantic names in public/images/."""
import json
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "assets/raw"
OUT = ROOT / "public/images"
OUT.mkdir(parents=True, exist_ok=True)

# Map raw filename prefix -> semantic name (extension preserved)
RENAMES = {
    "da6d79c1": "logo-black",
    "5bf0f566": "logo-white",
    "f9436351": "hands-mark",
    "e421f8ea": "values-illustration",
    "3eed1a17": "hero-illustration",
    "47a0fe14": "studio-seat",
    "ddf79710": "studio-lantern",
    "1dd8ed1a": "studio-promo",
    "14e5092d": "craft-embroidery",
    "22b0e58b": "craft-ceramic",
    "7fdd7a34": "craft-weaving",
    "1ebe075e": "craft-woodworking",
    "b742a15c": "craft-leather",
    "9c70fa87": "craft-basketry",
    "f213eebc": "craft-metalwork",
    "3229385d": "craft-zellige",
    "eb810567": "craft-calligraphy",
    "b4eb8c27": "craft-felting",
}

for raw_file in RAW.iterdir():
    prefix = raw_file.name.split("-")[0]
    if prefix not in RENAMES:
        print(f"  skip {raw_file.name} (no mapping)")
        continue
    new_name = RENAMES[prefix] + raw_file.suffix
    shutil.copy2(raw_file, OUT / new_name)
    print(f"  {raw_file.name} -> {new_name}")

print(f"\nDone. {len(list(OUT.iterdir()))} assets in public/images/")
