// Polyphenols at pressing and after 12 months, at the 42% study average (how-to-read-olive-oil-lab-analysis post).
// Replaces the unsourced chart-polyphenol-lifecycle.svg. Same average as the does-olive-oil-go-bad figure.
import { writeFileSync } from "node:fs";
const GREEN = "#1B4229", CREAM = "#FFFAEA", CHART = "#CDDB2D", SAGE = "#9DAE84";
const FONT = `font-family="'Space Grotesk', system-ui, sans-serif"`;
const W = 720, H = 420, xa = 200, xb = 470;
const y = v => +(320 - v * 220 / 900).toFixed(1);
const keep = v => Math.round(v * 0.58);
const series = [
  { start: 847, name: "early harvest, fresh-pressed", color: GREEN, dash: "" },
  { start: 200, name: "supermarket, late harvest", color: SAGE, dash: ` stroke-dasharray="6 4"` },
];
const ref = (v, label, style) => `<line x1="120" y1="${y(v)}" x2="690" y2="${y(v)}" ${style}/>
<text x="690" y="${y(v) - 6}" text-anchor="end" font-size="11" fill="${GREEN}" opacity="0.6">${label}</text>`;
const lines = series.map(({ start, name, color, dash }) => {
  const end = keep(start);
  return `<line x1="${xa}" y1="${y(start)}" x2="${xb}" y2="${y(end)}" stroke="${color}" stroke-width="3"${dash}/>
<circle cx="${xa}" cy="${y(start)}" r="5" fill="${color}"/><circle cx="${xb}" cy="${y(end)}" r="5" fill="${color}"/>
<text x="${xa - 14}" y="${y(start) + 5}" text-anchor="end" font-size="15" font-weight="700" fill="${GREEN}">${start}</text>
<text x="${xb + 14}" y="${y(end) + 5}" font-size="15" font-weight="700" fill="${GREEN}">${end}<tspan font-weight="400" font-size="13" opacity="0.7" dx="8">${name}</tspan></text>`;
}).join("\n");
const svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="ttl desc">
<title id="ttl">Polyphenols fade after pressing</title>
<desc id="desc">Polyphenols at pressing and after 12 months in the dark at 20 °C, at the 42% average loss measured across 160 extra virgin olive oils. An early-harvest oil tested at 847 mg/kg keeps about 491, still above the 400 high-polyphenol line. A supermarket oil starting near 200 ends near 116, below the 250 mg/kg level of the EU health claim throughout.</desc>
<rect x="0" y="0" width="${W}" height="${H}" fill="${CREAM}"/>
<g ${FONT}>
<text x="28" y="44" font-size="25" font-weight="700" fill="${GREEN}">Polyphenols fade after pressing</text>
<text x="28" y="68" font-size="14" fill="${GREEN}" opacity="0.55">mg/kg at pressing and after 12 months in the dark at 20 °C, at the average loss of 42%</text>
${ref(400, "high-polyphenol (400)", `stroke="${CHART}" stroke-width="2" stroke-dasharray="6 4"`)}
${ref(250, "EU health claim (250)", `stroke="${GREEN}" stroke-width="1.2" stroke-dasharray="2 4" opacity="0.5"`)}
${lines}
<text x="${xa}" y="342" text-anchor="middle" font-size="13" fill="${GREEN}" opacity="0.7">At pressing</text>
<text x="${xb}" y="342" text-anchor="middle" font-size="13" fill="${GREEN}" opacity="0.7">12 months later</text>
<text x="28" y="370" font-size="11" fill="${GREEN}" opacity="0.45">Start values: Attimo Coratina 25/26 lab test (847 mg/kg); the supermarket start of 200 is illustrative.</text>
<text x="28" y="386" font-size="11" fill="${GREEN}" opacity="0.45">Loss: average of 160 oils over 12 months (Castillo-Luna et al., 2021). Individual oils varied by about 24 points.</text>
<text x="28" y="402" font-size="11" fill="${GREEN}" opacity="0.45">attimo-oil.com</text>
</g>
</svg>`;
writeFileSync(new URL("./chart-polyphenol-lifecycle-v2.svg", import.meta.url).pathname, svg);
console.log("written");
