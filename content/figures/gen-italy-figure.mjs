// Generates the "Product of Italy" journey figure for the olive oil myths post.
// Render to PNG with headless Chrome afterwards (same flow as gen-myths-figure.mjs).
import { writeFileSync } from "node:fs";

const GREEN = "#1B4229", CREAM = "#FFFAEA", CHART = "#CDDB2D", SAGE = "#9DAE84";
const FONT = `font-family="'Space Grotesk', system-ui, sans-serif"`;

const W = 720, H = 400;

// layout anchors
const srcX = 130, tankX = 356, botX = 576;
const srcYs = [138, 208, 278];
const midY = 208;

const sources = ["Spain", "Greece", "Tunisia"].map((name, i) => {
  const y = srcYs[i];
  return `<circle cx="${srcX}" cy="${y}" r="7" fill="${SAGE}"/>
<circle cx="${srcX}" cy="${y}" r="7" fill="none" stroke="${GREEN}" stroke-width="1.6"/>
<text x="${srcX - 16}" y="${y + 5}" font-size="14" font-weight="700" fill="${GREEN}" text-anchor="end">${name}</text>
<text x="${srcX - 16}" y="${y + 21}" font-size="11" fill="${GREEN}" opacity="0.55" text-anchor="end">bulk oil</text>
<path d="M${srcX + 10},${y} C${srcX + 90},${y} ${tankX - 110},${midY} ${tankX - 44},${midY}" fill="none" stroke="${GREEN}" stroke-width="1.6" opacity="0.65"/>
<path d="M${tankX - 52},${midY - 5} L${tankX - 42},${midY} L${tankX - 52},${midY + 5} Z" fill="${GREEN}" opacity="0.65"/>`;
}).join("\n");

// blending tank: monoline cylinder
const tank = `
<g stroke="${GREEN}" stroke-width="2" fill="${CHART}" fill-opacity="0.35">
<path d="M${tankX - 34},${midY - 44} L${tankX + 34},${midY - 44} L${tankX + 34},${midY + 36} Q${tankX},${midY + 56} ${tankX - 34},${midY + 36} Z"/>
<ellipse cx="${tankX}" cy="${midY - 44}" rx="34" ry="10" fill="${CREAM}"/>
</g>
<text x="${tankX}" y="${midY + 84}" font-size="13" font-weight="700" fill="${GREEN}" text-anchor="middle">Blended in bulk</text>
<text x="${tankX}" y="${midY + 100}" font-size="11" fill="${GREEN}" opacity="0.55" text-anchor="middle">varieties, origins, harvests pooled</text>
<path d="M${tankX + 44},${midY} L${botX - 60},${midY}" fill="none" stroke="${GREEN}" stroke-width="1.6" opacity="0.65"/>
<path d="M${botX - 68},${midY - 5} L${botX - 58},${midY} L${botX - 68},${midY + 5} Z" fill="${GREEN}" opacity="0.65"/>`;

// bottle: monoline
const bottle = `
<g stroke="${GREEN}" stroke-width="2" fill="${CHART}" fill-opacity="0.35">
<path d="M${botX - 5},${midY - 78} L${botX + 5},${midY - 78} L${botX + 5},${midY - 56} Q${botX + 22},${midY - 44} ${botX + 22},${midY - 24} L${botX + 22},${midY + 54} Q${botX + 22},${midY + 60} ${botX + 16},${midY + 60} L${botX - 16},${midY + 60} Q${botX - 22},${midY + 60} ${botX - 22},${midY + 54} L${botX - 22},${midY - 24} Q${botX - 22},${midY - 44} ${botX - 5},${midY - 56} Z"/>
<rect x="${botX - 22}" y="${midY - 12}" width="44" height="36" fill="${CREAM}"/>
</g>
<text x="${botX}" y="${midY + 3}" font-size="8.5" font-weight="700" fill="${GREEN}" text-anchor="middle" letter-spacing="0.5">PRODUCT</text>
<text x="${botX}" y="${midY + 15}" font-size="8.5" font-weight="700" fill="${GREEN}" text-anchor="middle" letter-spacing="0.5">OF ITALY</text>
<text x="${botX}" y="${midY + 84}" font-size="13" font-weight="700" fill="${GREEN}" text-anchor="middle">Bottled in Italy</text>
<text x="${botX}" y="${midY + 100}" font-size="11" fill="${GREEN}" opacity="0.55" text-anchor="middle">the label describes this step</text>`;

// callout bracket over the sources
const callout = `
<text x="${srcX - 16}" y="96" font-size="12" font-weight="600" fill="${GREEN}" opacity="0.75" text-anchor="start">where the olives grew</text>
<text x="${botX + 40}" y="96" font-size="12" font-weight="600" fill="${GREEN}" opacity="0.75" text-anchor="end">what the label says</text>`;

const svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="ttl desc">
<title id="ttl">How "Product of Italy" gets made</title>
<desc id="desc">Flow diagram. Bulk oil from Spain, Greece and Tunisia converges into a blending tank, then moves to a bottling plant in Italy, where the bottle receives a label reading Product of Italy. The label describes the bottling step, not where the olives grew.</desc>
<rect x="0" y="0" width="${W}" height="${H}" fill="${CREAM}"/>
<g ${FONT}>
<text x="28" y="44" font-size="26" font-weight="700" fill="${GREEN}">How "Product of Italy" gets made</text>
<text x="28" y="68" font-size="14" fill="${GREEN}" opacity="0.55">The label describes the bottling plant — the olives can come from anywhere</text>
${callout}
${sources}
${tank}
${bottle}
<text x="28" y="${H - 34}" font-size="11" fill="${GREEN}" opacity="0.45">Legal, and common. If the olives' origin matters to you, look for a single named country or estate on the label.</text>
<text x="28" y="${H - 18}" font-size="11" fill="${GREEN}" opacity="0.45">attimo-oil.com</text>
</g>
</svg>`;
writeFileSync(new URL("./chart-product-of-italy.svg", import.meta.url).pathname, svg);
console.log("written: chart-product-of-italy.svg");
