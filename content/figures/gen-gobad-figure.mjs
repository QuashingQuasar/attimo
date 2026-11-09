// Polyphenol loss in milligrams for a rich and an ordinary oil, at the 42% study average (does-olive-oil-go-bad post).
import { writeFileSync } from "node:fs";
const GREEN = "#1B4229", CREAM = "#FFFAEA", CHART = "#CDDB2D", SAGE = "#9DAE84";
const FONT = `font-family="'Space Grotesk', system-ui, sans-serif"`;
const W = 720, H = 400, x0 = 40, maxW = 600, scale = maxW / 800;
const rows = [
  { label: "Oil tested at 800 mg/kg", start: 800, y: 150 },
  { label: "Oil tested at 200 mg/kg", start: 200, y: 262 },
];
const bars = rows.map(({ label, start, y }) => {
  const left = Math.round(start * 0.58), lost = start - left;
  const wl = left * scale, wt = start * scale;
  return `<text x="${x0}" y="${y - 14}" font-size="15" font-weight="700" fill="${GREEN}">${label}</text>
<rect x="${x0}" y="${y}" width="${wt.toFixed(1)}" height="46" rx="4" fill="${SAGE}" fill-opacity="0.28" stroke="${SAGE}" stroke-width="1.2" stroke-dasharray="4 3"/>
<rect x="${x0}" y="${y}" width="${wl.toFixed(1)}" height="46" rx="4" fill="${CHART}" fill-opacity="0.75"/>
<text x="${x0 + 12}" y="${y + 29}" font-size="14" font-weight="700" fill="${GREEN}">${left} left</text>
<text x="${(x0 + wl + 10).toFixed(1)}" y="${y + 29}" font-size="13" fill="${GREEN}" opacity="0.7">${lost} lost</text>`;
}).join("\n");
const svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="ttl desc">
<title id="ttl">A rich oil loses more polyphenols in a year, and keeps more</title>
<desc id="desc">Two horizontal bars. An oil tested at 800 mg/kg loses 336 mg/kg in 12 months and keeps 464. An oil tested at 200 mg/kg loses 84 and keeps 116. Both use the 42% average loss measured across 160 extra virgin olive oils stored in the dark at 20 °C.</desc>
<rect x="0" y="0" width="${W}" height="${H}" fill="${CREAM}"/>
<g ${FONT}>
<text x="28" y="44" font-size="25" font-weight="700" fill="${GREEN}">A rich oil loses more in a year, and keeps more</text>
<text x="28" y="68" font-size="14" fill="${GREEN}" opacity="0.55">Polyphenols in mg/kg after 12 months in the dark at 20 °C, at the average loss of 42%</text>
${bars}
<text x="28" y="${H - 34}" font-size="11" fill="${GREEN}" opacity="0.45">Illustration on the average of 160 oils (Castillo-Luna et al., 2021). Individual oils varied by about 24 points either way.</text>
<text x="28" y="${H - 18}" font-size="11" fill="${GREEN}" opacity="0.45">attimo-oil.com</text>
</g>
</svg>`;
writeFileSync(new URL("./chart-polyphenol-loss-rich-vs-ordinary.svg", import.meta.url).pathname, svg);
console.log("written");
