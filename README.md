# Ateliers Anouar

Static website for Ateliers Anouar — bridges between Moroccan artisans and international design.

Built with Astro. Deploys to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:4321/ateliers-anouar/

## Build

```bash
npm run build
```

Outputs to `dist/`.

## Source of design

Pages and assets are extracted from a Figma file via the Figma REST API. See `scripts/`:

- `download_frames.py` — render frames as PNGs (`designs/`)
- `extract_design.py` — pull text, fonts, colors, image refs (`extracted/`)
- `download_assets.py` — download all image fills (`assets/raw/`)
- `organize_assets.py` — rename to semantic names (`public/images/`)

Requires `FIGMA_TOKEN` and `FIGMA_FILE_KEY` in `.env`.
