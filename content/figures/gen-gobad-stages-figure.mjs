// Two-stage ageing timeline from the harvest (does-olive-oil-go-bad post, section "goes past its best long before it goes bad").
import { writeFileSync } from "node:fs";
const GREEN = "#1B4229", CREAM = "#FFFAEA", CHART = "#CDDB2D", SAGE = "#9DAE84";
const FONT = `font-family="'Space Grotesk', system-ui, sans-serif"`;
const W = 720, H = 340, x0 = 40, x1 = 680, months = 36, bandY = 100, bandH = 58;
const x = m => +(x0 + (x1 - x0) * m / months).toFixed(1);
const ticks = [[0, "Harvest"], [6, "6"], [12, "12 months"], [18, "18"], [24, "24 months"], [30, "30"], [36, "36+"]];
const cols = [
  { from: 0, to: 12, title: "At its best", lines: ["Fresh, bitter and peppery", "Polyphenols at their peak"] },
  { from: 12, to: 24, title: "Past its best", lines: ["Safe to eat and cook with", "Flatter, fewer polyphenols"] },
  { from: 24, to: 36, title: "Rancid", lines: ["Smells of crayons or putty", "Better thrown away"] },
];
const svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="ttl desc">
<title id="ttl">Olive oil ages in two stages</title>
<desc id="desc">Timeline from the harvest for unopened olive oil kept cool in dark glass or a tin. Up to about 12 months it is at its best: fresh, bitter and peppery, with polyphenols at their peak. From about 12 to 24 months it is past its best: safe to eat and cook with, but flatter and with fewer polyphenols. Much later it turns rancid, smelling of crayons or putty, and is better thrown away. Rancidity has no fixed date; heat, light and air bring it forward.</desc>
<defs><linearGradient id="rancid" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="${GREEN}" stop-opacity="0.08"/><stop offset="0.55" stop-color="${GREEN}" stop-opacity="0.75"/><stop offset="1" stop-color="${GREEN}" stop-opacity="0.95"/></linearGradient></defs>
<rect x="0" y="0" width="${W}" height="${H}" fill="${CREAM}"/>
<g ${FONT}>
<text x="28" y="44" font-size="25" font-weight="700" fill="${GREEN}">Olive oil ages in two stages</text>
<text x="28" y="68" font-size="14" fill="${GREEN}" opacity="0.55">Unopened, in dark glass or a tin, kept cool. Months counted from the harvest.</text>
<rect x="${x(0)}" y="${bandY}" width="${x(12) - x(0)}" height="${bandH}" rx="4" fill="${CHART}" fill-opacity="0.85"/>
<rect x="${x(12) + 3}" y="${bandY}" width="${x(24) - x(12) - 3}" height="${bandH}" rx="4" fill="${SAGE}" fill-opacity="0.5"/>
<rect x="${x(24) + 3}" y="${bandY}" width="${x(36) - x(24) - 3}" height="${bandH}" rx="4" fill="url(#rancid)"/>
<text x="${x(0) + 14}" y="${bandY + 36}" font-size="17" font-weight="700" fill="${GREEN}">At its best</text>
<text x="${x(12) + 17}" y="${bandY + 36}" font-size="17" font-weight="700" fill="${GREEN}">Past its best</text>
<text x="${x(36) - 14}" y="${bandY + 36}" text-anchor="end" font-size="17" font-weight="700" fill="${CREAM}">Rancid</text>
${ticks.map(([m, l]) => `<line x1="${x(m)}" y1="${bandY + bandH + 4}" x2="${x(m)}" y2="${bandY + bandH + 10}" stroke="${GREEN}" opacity="0.4"/>
<text x="${x(m)}" y="${bandY + bandH + 26}" text-anchor="${m === 0 ? "start" : m === 36 ? "end" : "middle"}" font-size="12" fill="${GREEN}" opacity="0.6">${l}</text>`).join("\n")}
${cols.map(c => c.lines.map((l, i) => `<text x="${x(c.from) + (c.from ? 17 : 14)}" y="${bandY + bandH + 62 + i * 20}" font-size="13" fill="${GREEN}" opacity="${i ? 0.65 : 0.9}">${l}</text>`).join("\n")).join("\n")}
<text x="28" y="${H - 34}" font-size="11" fill="${GREEN}" opacity="0.45">Rancidity has no fixed date: heat, light and air bring it forward. Opened bottles are best within one to two months.</text>
<text x="28" y="${H - 18}" font-size="11" fill="${GREEN}" opacity="0.45">attimo-oil.com</text>
</g>
</svg>`;
writeFileSync(new URL("./chart-olive-oil-two-stages.svg", import.meta.url).pathname, svg);
console.log("written");
