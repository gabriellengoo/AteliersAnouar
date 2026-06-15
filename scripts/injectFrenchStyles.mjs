import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const distDir = new URL("../dist", import.meta.url).pathname;
const frenchDir = join(distDir, "fr");
const frenchRootFile = join(distDir, "fr.html");

function htmlFiles(directory) {
  if (!existsSync(directory)) return [];

  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    return statSync(path).isDirectory()
      ? htmlFiles(path)
      : path.endsWith(".html")
        ? [path]
        : [];
  });
}

function englishPageFor(frenchPage) {
  if (frenchPage === frenchRootFile) return join(distDir, "index.html");

  const frenchRelative = relative(frenchDir, frenchPage);
  if (frenchRelative === "index.html") return join(distDir, "index.html");
  return join(distDir, frenchRelative);
}

function injectStyles(frenchPage) {
  const englishPage = englishPageFor(frenchPage);
  if (!existsSync(englishPage)) {
    throw new Error(`Missing English page for ${relative(distDir, frenchPage)}`);
  }

  const englishHtml = readFileSync(englishPage, "utf8");
  const frenchHtml = readFileSync(frenchPage, "utf8");
  const inlineStyles = englishHtml.match(/<style(?:\s[^>]*)?>[\s\S]*?<\/style>/g) ?? [];
  const localStylesheets =
    englishHtml.match(/<link rel="stylesheet" href="\/assets\/[^"]+\.css">/g) ?? [];
  const missingStyles = [...localStylesheets, ...inlineStyles].filter(
    (style) => !frenchHtml.includes(style),
  );

  if (missingStyles.length === 0) return;

  const output = frenchHtml.replace("</head>", `${missingStyles.join("")}</head>`);
  writeFileSync(frenchPage, output);
}

const frenchPages = [
  ...(existsSync(frenchRootFile) ? [frenchRootFile] : []),
  ...htmlFiles(frenchDir),
];

for (const page of frenchPages) injectStyles(page);

console.log(`Injected scoped styles into ${frenchPages.length} French pages.`);
