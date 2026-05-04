#!/bin/bash
set -e
cd "$(dirname "$0")/.."
source .env

declare -A FRAMES=(
  ["01-homepage"]="192:1567"
  ["02-homepage-promo"]="246:4201"
  ["03-collaboration"]="227:2950"
  ["04-index"]="252:4403"
  ["05-studio"]="238:3136"
  ["06-about"]="239:3834"
  ["07-individual-page"]="253:5098"
  ["08-contact"]="240:4050"
)

IDS=$(IFS=,; echo "${FRAMES[*]}")
RESPONSE=$(curl -s -H "X-Figma-Token: $FIGMA_TOKEN" "https://api.figma.com/v1/images/$FIGMA_FILE_KEY?ids=$IDS&format=png&scale=2")

mkdir -p designs/desktop-en
for name in "${!FRAMES[@]}"; do
  id="${FRAMES[$name]}"
  url=$(echo "$RESPONSE" | python3 -c "import json,sys; print(json.load(sys.stdin)['images']['$id'])")
  echo "Downloading $name..."
  curl -s -o "designs/desktop-en/$name.png" "$url"
done
echo "Done."
ls -la designs/desktop-en/
