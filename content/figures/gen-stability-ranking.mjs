// Option A for the cooking post: single-axis stability ranking, smoke point demoted to a data label.
import { writeFileSync } from "node:fs";
const GREEN = "#1B4229", CREAM = "#FFFAEA", CHART = "#CDDB2D", SAGE = "#9DAE84";
const FONT = `font-family="'Space Grotesk', system-ui, sans-serif"`;

const W = 720, H = 516;
const nameX = 205, barX = 215, barMax = 390, smokeX = 668;
const rowH = 31, top = 172;
const oils = [
  { n: "Coconut oil", st: 5.0, sp: 177 },
  { n: "Extra virgin olive oil", st: 4.6, sp: 195, hero: true },
  { n: "Avocado oil", st: 4.0, sp: 250 },
  { n: "Butter", st: 3.9, sp: 175 },
  { n: "Rapeseed oil", st: 3.0, sp: 205 },
  { n: "Corn oil", st: 2.15, sp: 232 },
  { n: "Sunflower oil", st: 2.0, sp: 225 },
  { n: "Soybean oil", st: 1.85, sp: 238 },
  { n: "Grapeseed oil", st: 1.1, sp: 216 },
];
const bx = (st) => barX + (st / 5) * barMax;
const rows = oils.map((o, i) => {
  const y = top + i * rowH;
  return `<text x="${nameX}" y="${y + 15}" font-size="13" ${o.hero ? 'font-weight="700"' : ''} fill="${GREEN}" ${o.hero ? '' : 'opacity="0.85"'} text-anchor="end">${o.n}</text>
<rect x="${barX}" y="${y + 4}" width="${(bx(o.st) - barX).toFixed(1)}" height="14" rx="3" fill="${o.hero ? CHART : SAGE}" ${o.hero ? `stroke="${GREEN}" stroke-width="1.4"` : 'fill-opacity="0.75"'}/>
<text x="${smokeX}" y="${y + 15}" font-size="12" fill="${GREEN}" opacity="0.45" text-anchor="end">${o.sp}°C</text>`;
}).join("\n");
const bands = [["very low",1],["low",2],["moderate",3],["high",4],["very high",5]].map(([lbl,v]) => `<line x1="${bx(v).toFixed(1)}" y1="${top - 4}" x2="${bx(v).toFixed(1)}" y2="${top + oils.length * rowH}" stroke="${GREEN}" stroke-width="1" opacity="0.07"/>
<text x="${bx(v).toFixed(1)}" y="${top + oils.length * rowH + 18}" font-size="11" fill="${GREEN}" opacity="0.5" text-anchor="middle">${lbl}</text>`).join("\n");

const svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="t d">
<title id="t">Cooking fats ranked by oxidative stability</title>
<desc id="d">Bar chart ranking nine cooking fats by oxidative stability, most stable at the top. Each row also lists the fat's smoke point in small grey type. Read top to bottom, the smoke points appear in no particular order, showing that smoke point does not follow stability.</desc>
<rect width="${W}" height="${H}" fill="${CREAM}"/>
<g ${FONT}>
<text x="28" y="44" font-size="26" font-weight="700" fill="${GREEN}">Cooking fats ranked by oxidative stability</text>
<text x="28" y="68" font-size="12" fill="${GREEN}" opacity="0.6"><tspan font-weight="700">Oxidative stability</tspan>: how long the fat resists breaking down under sustained heat.</text>
<text x="28" y="84" font-size="12" fill="${GREEN}" opacity="0.6"><tspan font-weight="700">Smoke point</tspan>: the temperature past which the oil starts breaking down rapidly, visible as smoke.</text>
<text x="28" y="110" font-size="14" fill="${GREEN}" opacity="0.55">Fats can start breaking down long before they start smoking. So while smoke point is a signal,</text>
<text x="28" y="128" font-size="14" fill="${GREEN}" opacity="0.55">it doesn't correlate well with actual oxidative stability.</text>

<text x="${barX}" y="${top - 14}" font-size="11" font-weight="700" letter-spacing="2" fill="${GREEN}" opacity="0.85">OXIDATIVE STABILITY</text>
<text x="${smokeX}" y="${top - 14}" font-size="11" font-weight="700" letter-spacing="2" fill="${GREEN}" opacity="0.45" text-anchor="end">SMOKE POINT</text>

${rows}
${bands}

<text x="28" y="${H - 18}" font-size="11" fill="${GREEN}" opacity="0.45">attimo-oil.com</text>
</g>
</svg>`;
writeFileSync("chart-stability-ranking.svg", svg);
console.log("written");
