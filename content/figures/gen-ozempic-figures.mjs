// Generates the two Ozempic-post figures as SVG (chart-glp1-signal, chart-natures-ozempic-measured).
// Render to PNG with headless Chrome afterwards (see render step in session).
import { writeFileSync } from "node:fs";

const GREEN = "#1B4229", CREAM = "#FFFAEA", CHART = "#CDDB2D", SAGE = "#9DAE84";
const FONT = `font-family="'Space Grotesk', system-ui, sans-serif"`;

// ---------- Figure A: the fullness signal, meals vs semaglutide ----------
{
  const W = 720, H = 440;
  const x0 = 56, x1 = 664, base = 332, dayW = (x1 - x0) / 7;
  // meal bumps: 3 per day, fast rise, fast decay
  let bumps = `M${x0},${base} `;
  for (let d = 0; d < 7; d++) {
    for (const f of [0.22, 0.48, 0.74]) {
      const mx = x0 + (d + f) * dayW, peak = base - 34;
      bumps += `L${(mx - 2).toFixed(1)},${base} Q${(mx + 3).toFixed(1)},${peak} ${(mx + 8).toFixed(1)},${(peak + 8).toFixed(1)} Q${(mx + 14).toFixed(1)},${(base - 6).toFixed(1)} ${(mx + 20).toFixed(1)},${base} `;
    }
  }
  bumps += `L${x1},${base}`;
  // drug curve: injection day 0, plateau, slow decay to day 7
  const drug = `M${x0},${base} C${x0 + 22},${base - 90} ${x0 + 48},128 ${x0 + 92},122 L${x1},142`;
  const dayTicks = Array.from({ length: 8 }, (_, i) => {
    const x = x0 + i * dayW;
    const lbl = i === 7 ? "day 7" : i === 0 ? "day 0" : String(i);
    return `<line x1="${x.toFixed(1)}" y1="${base}" x2="${x.toFixed(1)}" y2="${base + 5}" stroke="${GREEN}" stroke-width="1" opacity="0.35"/>
<text x="${x.toFixed(1)}" y="${base + 20}" font-size="11" fill="${GREEN}" opacity="0.5" text-anchor="middle">${lbl}</text>`;
  }).join("\n");

  const svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="ttl desc">
<title id="ttl">A fullness signal that never fades</title>
<desc id="desc">Line chart of one week. Along the baseline, small bumps of the body's own GLP-1 rise at every meal and fade within the hour. Far above them, a single line from one semaglutide injection stays elevated all week. The vertical scale is compressed; the real gap is roughly a thousandfold.</desc>
<rect x="0" y="0" width="${W}" height="${H}" fill="${CREAM}"/>
<g ${FONT}>
<text x="28" y="44" font-size="27" font-weight="700" fill="${GREEN}">A fullness signal that never fades</text>
<text x="28" y="68" font-size="14" fill="${GREEN}" opacity="0.55">GLP-1 in the blood across one week — three meals a day against one weekly injection</text>

<line x1="${x0}" y1="${base}" x2="${x1}" y2="${base}" stroke="${GREEN}" stroke-width="1" opacity="0.25"/>
${dayTicks}

<path d="${bumps}" fill="${CHART}" fill-opacity="0.55" stroke="${GREEN}" stroke-width="1.4" stroke-opacity="0.8"/>
<path d="${drug}" fill="none" stroke="${GREEN}" stroke-width="3"/>

<line x1="${x0}" y1="${base - 4}" x2="${x0}" y2="${base - 46}" stroke="${GREEN}" stroke-width="1.4" opacity="0.6" stroke-dasharray="3 3"/>
<text x="${x0 - 2}" y="${base - 52}" font-size="12" font-weight="600" fill="${GREEN}" opacity="0.75">injection</text>

<text x="${x0 + 116}" y="108" font-size="14" font-weight="700" fill="${GREEN}">Semaglutide (Ozempic) — one injection, elevated all week</text>
<text x="${x0 + 130}" y="${base - 46}" font-size="14" font-weight="700" fill="${GREEN}">Your own GLP-1 — a bump at every meal, gone within the hour</text>

<g opacity="0.7">
<line x1="684" y1="152" x2="684" y2="308" stroke="${GREEN}" stroke-width="1.2"/>
<line x1="678" y1="152" x2="684" y2="152" stroke="${GREEN}" stroke-width="1.2"/>
<line x1="678" y1="308" x2="684" y2="308" stroke="${GREEN}" stroke-width="1.2"/>
</g>
<text x="672" y="234" font-size="13" font-weight="700" fill="${GREEN}" opacity="0.8" text-anchor="end">≈ 1,000×</text>

<text x="28" y="${H - 34}" font-size="11" fill="${GREEN}" opacity="0.45">Vertical scale compressed to show both signals — the real gap is roughly a thousandfold.</text>
<text x="28" y="${H - 18}" font-size="11" fill="${GREEN}" opacity="0.45">attimo-oil.com · sources: STEP 1 trial (NEJM 2021); semaglutide pharmacokinetics</text>
</g>
</svg>`;
  writeFileSync("chart-glp1-signal.svg", svg);
}

// ---------- Figure B: "nature's Ozempic", measured ----------
{
  const W = 720, H = 380;
  const bx = 268, bmax = 372; // bar start x, max bar length (15 kg)
  const kg = (v) => (v / 15) * bmax;
  const rows = [
    { y: 104, len: kg(15), fill: GREEN, label: "Semaglutide (Ozempic) · 68 weeks", val: "~15 kg", valFill: GREEN, bold: false },
    { y: 158, len: kg(1.5), fill: SAGE, label: "Berberine · pooled trials", val: "1–2 kg", bold: false },
    { y: 212, len: kg(1), fill: CHART, label: "Olive oil · 9 weeks, dieting women", val: "~1 kg extra", bold: true },
  ];
  const bars = rows.map((r) => `<rect x="${bx}" y="${r.y}" width="${Math.max(r.len, 10).toFixed(1)}" height="26" rx="4" fill="${r.fill}"/>
<text x="${bx - 15}" y="${r.y + 18}" font-size="13" ${r.bold ? 'font-weight="600"' : ""} fill="${GREEN}" opacity="${r.bold ? 1 : 0.75}" text-anchor="end">${r.label}</text>
<text x="${(bx + Math.max(r.len, 10) + 10).toFixed(1)}" y="${r.y + 18}" font-size="13" font-weight="700" fill="${GREEN}" opacity="0.8">${r.val}</text>`).join("\n");
  const ticks = [0, 5, 10, 15].map((v) => `<text x="${(bx + kg(v)).toFixed(1)}" y="278" font-size="11" fill="${GREEN}" opacity="0.5" text-anchor="middle">${v}</text>`).join("\n");

  const svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="ttl desc">
<title id="ttl">"Nature's Ozempic", measured</title>
<desc id="desc">Horizontal bar chart of measured weight loss. Semaglutide over 68 weeks: about 15 kilograms. Berberine across pooled trials: one to two kilograms. Olive oil against soybean oil over nine weeks in dieting women: about one extra kilogram.</desc>
<rect x="0" y="0" width="${W}" height="${H}" fill="${CREAM}"/>
<g ${FONT}>
<text x="28" y="44" font-size="27" font-weight="700" fill="${GREEN}">&#8220;Nature&#8217;s Ozempic&#8221;, measured</text>
<text x="28" y="68" font-size="14" fill="${GREEN}" opacity="0.55">Weight loss in the strongest trial of each — the drug against the foods that carried its name</text>

<line x1="${bx}" y1="260" x2="${bx + bmax}" y2="260" stroke="${GREEN}" stroke-width="1" opacity="0.25"/>
${ticks}
<text x="${bx + bmax / 2}" y="300" font-size="11" fill="${GREEN}" opacity="0.5" text-anchor="middle">kilograms lost</text>

${bars}

<text x="28" y="${H - 34}" font-size="11" fill="${GREEN}" opacity="0.45">Each bar comes from its own trial, with its own duration and design.</text>
<text x="28" y="${H - 18}" font-size="11" fill="${GREEN}" opacity="0.45">attimo-oil.com · sources: STEP 1 (NEJM 2021); Asbaghi 2020; Galv&#227;o C&#226;ndido 2018</text>
</g>
</svg>`;
  writeFileSync("chart-natures-ozempic-measured.svg", svg);
}
console.log("written");
