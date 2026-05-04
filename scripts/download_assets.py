#!/usr/bin/env python3
"""Download all image fills referenced in the website page."""
import json
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


def main():
    refs = json.loads((ROOT / "extracted/image-refs.json").read_text())
    print(f"Found {len(refs)} unique image refs across pages")

    fills_data = figma_get(f"/files/{FILE_KEY}/images")
    fill_urls = fills_data["meta"]["images"]

    out_dir = ROOT / "assets/raw"
    out_dir.mkdir(parents=True, exist_ok=True)

    manifest = {}
    for ref, locations in refs.items():
        url = fill_urls.get(ref)
        if not url:
            print(f"  no URL for ref {ref}")
            continue
        first_loc = locations[0]
        node_name = (first_loc.get("node") or "asset").replace("/", "-").replace(" ", "_")[:60]
        filename = f"{ref[:8]}-{node_name}"
        target = out_dir / filename
        urllib.request.urlretrieve(url, target)
        ext_data = target.read_bytes()[:12]
        if ext_data.startswith(b"\x89PNG"):
            ext = ".png"
        elif ext_data.startswith(b"\xff\xd8\xff"):
            ext = ".jpg"
        elif ext_data.startswith(b"GIF8"):
            ext = ".gif"
        elif ext_data.startswith(b"RIFF") and b"WEBP" in ext_data:
            ext = ".webp"
        elif ext_data.startswith(b"<?xml") or ext_data.startswith(b"<svg"):
            ext = ".svg"
        else:
            ext = ".bin"
        new_target = target.with_suffix(ext)
        target.rename(new_target)
        manifest[ref] = {
            "file": new_target.name,
            "size_bytes": new_target.stat().st_size,
            "locations": locations,
        }
        print(f"  -> {new_target.name} ({new_target.stat().st_size // 1024} KB)")

    (ROOT / "extracted/asset-manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False))
    print(f"\nDone. {len(manifest)} assets downloaded.")


if __name__ == "__main__":
    main()
