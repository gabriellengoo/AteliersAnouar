#!/usr/bin/env python3
"""Walk Figma desktop EN frames and extract text, fonts, colors, and image refs."""
import json
import urllib.request
from pathlib import Path
from collections import Counter, defaultdict

ROOT = Path(__file__).resolve().parent.parent
ENV = dict(line.strip().split("=", 1) for line in (ROOT / ".env").read_text().splitlines() if line.strip() and not line.startswith("#"))
TOKEN = ENV["FIGMA_TOKEN"]
FILE_KEY = ENV["FIGMA_FILE_KEY"]

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


def figma_get(path: str) -> dict:
    req = urllib.request.Request(f"https://api.figma.com/v1{path}", headers={"X-Figma-Token": TOKEN})
    with urllib.request.urlopen(req) as r:
        return json.load(r)


def rgba_to_hex(c: dict) -> str:
    r, g, b = int(c["r"] * 255), int(c["g"] * 255), int(c["b"] * 255)
    a = c.get("a", 1.0)
    if a < 0.999:
        return f"#{r:02x}{g:02x}{b:02x}{int(a*255):02x}"
    return f"#{r:02x}{g:02x}{b:02x}"


def walk(node, page_name, out, font_counter, color_counter, image_refs):
    if node.get("type") == "TEXT":
        chars = node.get("characters", "")
        style = node.get("style", {})
        font = (style.get("fontFamily"), style.get("fontWeight"), style.get("fontSize"), style.get("lineHeightPx"))
        font_counter[font] += 1
        fills = node.get("fills") or []
        color = None
        for f in fills:
            if f.get("type") == "SOLID" and f.get("visible", True):
                color = rgba_to_hex(f["color"])
                color_counter[color] += 1
                break
        out.append({
            "page": page_name,
            "text": chars,
            "font": style.get("fontFamily"),
            "weight": style.get("fontWeight"),
            "size": style.get("fontSize"),
            "lineHeight": style.get("lineHeightPx"),
            "letterSpacing": style.get("letterSpacing"),
            "color": color,
            "name": node.get("name"),
        })
    fills = node.get("fills") or []
    for f in fills:
        if f.get("type") == "SOLID" and f.get("visible", True):
            color_counter[rgba_to_hex(f["color"])] += 1
        if f.get("type") == "IMAGE" and f.get("imageRef"):
            image_refs[f["imageRef"]].append({"page": page_name, "node": node.get("name"), "id": node.get("id")})
    bgs = node.get("backgrounds") or []
    for b in bgs:
        if b.get("type") == "SOLID" and b.get("visible", True):
            color_counter[rgba_to_hex(b["color"])] += 1
    for child in node.get("children") or []:
        walk(child, page_name, out, font_counter, color_counter, image_refs)


def main():
    print(f"Fetching {len(DESKTOP_EN)} frames with full depth...")
    ids = ",".join(DESKTOP_EN.values())
    data = figma_get(f"/files/{FILE_KEY}/nodes?ids={ids}")

    text_entries = []
    font_counter = Counter()
    color_counter = Counter()
    image_refs = defaultdict(list)

    for page_name, node_id in DESKTOP_EN.items():
        page_data = data["nodes"].get(node_id)
        if not page_data:
            print(f"  skip {page_name}: no data")
            continue
        walk(page_data["document"], page_name, text_entries, font_counter, color_counter, image_refs)

    out_dir = ROOT / "extracted"
    out_dir.mkdir(parents=True, exist_ok=True)

    (out_dir / "text.json").write_text(json.dumps(text_entries, indent=2, ensure_ascii=False))
    print(f"  wrote {len(text_entries)} text entries -> extracted/text.json")

    fonts = [
        {"family": k[0], "weight": k[1], "size": k[2], "lineHeight": k[3], "uses": v}
        for k, v in font_counter.most_common()
    ]
    (out_dir / "fonts.json").write_text(json.dumps(fonts, indent=2, ensure_ascii=False))
    print(f"  wrote {len(fonts)} font variants -> extracted/fonts.json")

    colors = [{"hex": k, "uses": v} for k, v in color_counter.most_common()]
    (out_dir / "colors.json").write_text(json.dumps(colors, indent=2, ensure_ascii=False))
    print(f"  wrote {len(colors)} colors -> extracted/colors.json")

    image_refs_dict = {k: v for k, v in image_refs.items()}
    (out_dir / "image-refs.json").write_text(json.dumps(image_refs_dict, indent=2, ensure_ascii=False))
    print(f"  wrote {len(image_refs_dict)} image refs -> extracted/image-refs.json")


if __name__ == "__main__":
    main()
