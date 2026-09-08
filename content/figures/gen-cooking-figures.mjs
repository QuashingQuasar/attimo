// Generates the two cooking-post figures: smoke-point-vs-stability scatter + what-heat-takes decay chart.
// Render to PNG with headless Chrome afterwards (same flow as the other gen-*.mjs files).
import { writeFileSync } from "node:fs";

const GREEN = "#1B4229", CREAM = "#FFFAEA", CHART = "#CDDB2D", SAGE = "#9DAE84";
const FONT = `font-family="'Space Grotesk', system-ui, sans-serif"`;

// ---------- Figure 1: smoke point vs oxidative stability ----------
{
  const W = 720, H = 532;
  const x0 = 96, x1 = 664, y0 = 132, y1 = 402; // plot area
  const X = (sp) => x0 + ((sp - 160) / (265 - 160)) * (x1 - x0);
  const Y = (st) => y1 - ((st - 0.5) / (5 - 0.5)) * (y1 - y0);
  const oils = [
    { n: "Extra virgin olive oil", sp: 195, st: 4.6, hero: true, dx: 15, dy: 0, anchor: "start", sub: "smokes earlier, breaks down later" },
    { n: "Avocado oil", sp: 250, st: 4.0, dx: 0, dy: -12, anchor: "middle" },
    { n: "Coconut oil", sp: 177, st: 5.0, dx: -11, dy: 4, anchor: "end" },
    { n: "Butter", sp: 175, st: 4.0, dx: -10, dy: 4, anchor: "end" },
    { n: "Rapeseed oil", sp: 205, st: 3.0, dx: 10, dy: 4, anchor: "start" },
    { n: "Grapeseed oil", sp: 216, st: 1.1, dx: 0, dy: 18, anchor: "middle" },
    { n: "Sunflower oil", sp: 225, st: 2.0, dx: -10, dy: 4, anchor: "end" },
    { n: "Corn oil", sp: 232, st: 2.15, dx: 0, dy: -12, anchor: "middle" },
    { n: "Soybean oil", sp: 238, st: 1.85, dx: 10, dy: 8, anchor: "start" },
  ];
  const dots = oils.map(o => `<circle cx="${X(o.sp).toFixed(1)}" cy="${Y(o.st).toFixed(1)}" r="${o.hero ? 9 : 6}" fill="${o.hero ? CHART : SAGE}" stroke="${GREEN}" stroke-width="${o.hero ? 2.2 : 1.4}"/>
<text x="${(X(o.sp) + o.dx).toFixed(1)}" y="${(Y(o.st) + o.dy).toFixed(1)}" font-size="12.5" ${o.hero ? 'font-weight="700"' : ''} fill="${GREEN}" ${o.hero ? '' : 'opacity="0.8"'} text-anchor="${o.anchor}">${o.n}</text>${o.sub ? `<text x="${(X(o.sp) + o.dx).toFixed(1)}" y="${(Y(o.st) + o.dy + 15).toFixed(1)}" font-size="11.5" font-weight="600" fill="${GREEN}" opacity="0.65" text-anchor="${o.anchor}">${o.sub}</text>` : ""}`).join("\n");
  const xticks = [175, 200, 225, 250].map(v => `<line x1="${X(v).toFixed(1)}" y1="${y1}" x2="${X(v).toFixed(1)}" y2="${y1 + 5}" stroke="${GREEN}" stroke-width="1" opacity="0.35"/>
<text x="${X(v).toFixed(1)}" y="${y1 + 20}" font-size="11" fill="${GREEN}" opacity="0.5" text-anchor="middle">${v}°C</text>`).join("\n");
  const ybands = [["very low",1],["low",2],["moderate",3],["high",4],["very high",5]].map(([lbl,v]) => `<text x="${x0 - 10}" y="${(Y(v) + 4).toFixed(1)}" font-size="11" fill="${GREEN}" opacity="0.5" text-anchor="end">${lbl}</text>`).join("\n");

  const svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="t1 d1">
<title id="t1">Smoke point does not equal stability</title>
<desc id="d1">Scatter plot of common cooking fats. Horizontal axis: smoke point. Vertical axis: oxidative stability. Extra virgin olive oil sits at a moderate smoke point but high stability. Sunflower, corn, soybean and grapeseed oil combine high smoke points with poor stability, in the lower right of the chart.</desc>
<rect width="${W}" height="${H}" fill="${CREAM}"/>
<g ${FONT}>
<text x="28" y="44" font-size="26" font-weight="700" fill="${GREEN}">Smoke point vs oxidative stability</text>
<text x="28" y="68" font-size="14" fill="${GREEN}" opacity="0.55">Nine common cooking fats, compared on both measures</text>
<text x="28" y="92" font-size="12" fill="${GREEN}" opacity="0.6"><tspan font-weight="700">Smoke point</tspan>: the temperature past which the oil starts breaking down rapidly, visible as smoke.</text>
<text x="28" y="108" font-size="12" fill="${GREEN}" opacity="0.6"><tspan font-weight="700">Oxidative stability</tspan>: how long the fat resists breaking down under sustained heat.</text>


<!-- misleading corner shading -->
<rect x="${X(210).toFixed(1)}" y="${Y(2.6).toFixed(1)}" width="${(x1 - X(210)).toFixed(1)}" height="${(y1 - Y(2.6)).toFixed(1)}" fill="${GREEN}" opacity="0.06"/>
<text x="${(x1 - 10).toFixed(1)}" y="${(Y(2.6) + 18).toFixed(1)}" font-size="12" font-weight="600" fill="${GREEN}" opacity="0.65" text-anchor="end">smoke late, break down early</text>

<line x1="${x0}" y1="${y1}" x2="${x1}" y2="${y1}" stroke="${GREEN}" stroke-width="1" opacity="0.3"/>
<line x1="${x0}" y1="${y0 - 8}" x2="${x0}" y2="${y1}" stroke="${GREEN}" stroke-width="1" opacity="0.3"/>
${xticks}
${ybands}
<text x="${((x0 + x1) / 2).toFixed(1)}" y="${y1 + 44}" font-size="13" font-weight="700" letter-spacing="2" fill="${GREEN}" opacity="0.85" text-anchor="middle">SMOKE POINT</text>
<text x="32" y="${((y0 + y1) / 2).toFixed(1)}" font-size="13" font-weight="700" letter-spacing="2" fill="${GREEN}" opacity="0.85" text-anchor="middle" transform="rotate(-90 32 ${((y0 + y1) / 2).toFixed(1)})">OXIDATIVE STABILITY</text>

${dots}

<text x="28" y="${H - 50}" font-size="11" fill="${GREEN}" opacity="0.45">Typical published values; smoke points vary with refining and free acidity.</text>
<text x="28" y="${H - 34}" font-size="11" fill="${GREEN}" opacity="0.45">Stability reflects fat composition and antioxidant content.</text>
<text x="28" y="${H - 18}" font-size="11" fill="${GREEN}" opacity="0.45">attimo-oil.com</text>
</g>
</svg>`;
  writeFileSync(new URL("./chart-smoke-point-vs-stability.svg", import.meta.url).pathname, svg);
}

// ---------- Figure 2: what heat takes from olive oil ----------
{
  const W = 720, H = 460;
  const x0 = 76, x1 = 656, y0 = 110, y1 = 340;
  const zones = [
    { lbl: "Raw", t: "below 40°C" },
    { lbl: "Gentle", t: "40–120°C" },
    { lbl: "Moderate", t: "120–180°C" },
    { lbl: "High", t: "180–220°C" },
  ];
  const zw = (x1 - x0) / 4;
  const X = (i) => x0 + i * zw + zw / 2; // centre of zone i
  const Y = (pct) => y1 - (pct / 100) * (y1 - y0);
  const line = (pts, opts) => {
    const d = pts.map((p, i) => `${i ? "L" : "M"}${X(i).toFixed(1)},${Y(p).toFixed(1)}`).join(" ");
    return `<path d="${d}" fill="none" stroke="${opts.c}" stroke-width="${opts.w}" ${opts.dash ? `stroke-dasharray="${opts.dash}"` : ""}/>`;
  };
  const fat = [100, 99, 98, 96];
  const poly = [100, 82, 45, 12];
  const arom = [100, 55, 15, 4];
  const zoneCols = zones.map((z, i) => `${i ? `<line x1="${(x0 + i * zw).toFixed(1)}" y1="${y0 - 6}" x2="${(x0 + i * zw).toFixed(1)}" y2="${y1}" stroke="${GREEN}" stroke-width="1" opacity="0.12"/>` : ""}
<text x="${X(i).toFixed(1)}" y="${y1 + 22}" font-size="13" font-weight="700" fill="${GREEN}" text-anchor="middle">${z.lbl}</text>
<text x="${X(i).toFixed(1)}" y="${y1 + 38}" font-size="11" fill="${GREEN}" opacity="0.55" text-anchor="middle">${z.t}</text>`).join("\n");

  const svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="t2 d2">
<title id="t2">What heat takes from olive oil</title>
<desc id="d2">Chart across four cooking heat ranges, raw to high heat. The fat stays close to fully intact. Polyphenols fall from full at raw to almost gone at high heat. Aromatics fall fastest, mostly gone past gentle heat.</desc>
<rect width="${W}" height="${H}" fill="${CREAM}"/>
<g ${FONT}>
<text x="28" y="44" font-size="26" font-weight="700" fill="${GREEN}">Olive oil's components under cooking heat</text>
<text x="28" y="68" font-size="14" fill="${GREEN}" opacity="0.55">Fat, polyphenols and aromatics across the four heat ranges</text>

<line x1="${x0}" y1="${y1}" x2="${x1}" y2="${y1}" stroke="${GREEN}" stroke-width="1" opacity="0.3"/>
<text x="34" y="${((y0 + y1) / 2).toFixed(1)}" font-size="13" font-weight="700" letter-spacing="2" fill="${GREEN}" opacity="0.85" text-anchor="middle" transform="rotate(-90 34 ${((y0 + y1) / 2).toFixed(1)})">WHAT REMAINS</text>
${zoneCols}

${line(fat, { c: GREEN, w: 3 })}
${line(poly, { c: CHART, w: 3 })}
${line(arom, { c: SAGE, w: 2.4, dash: "6 4" })}

<circle cx="${X(3).toFixed(1)}" cy="${Y(fat[3]).toFixed(1)}" r="4.5" fill="${GREEN}"/>
<circle cx="${X(3).toFixed(1)}" cy="${Y(poly[3]).toFixed(1)}" r="4.5" fill="${CHART}" stroke="${GREEN}" stroke-width="1.4"/>
<circle cx="${X(3).toFixed(1)}" cy="${Y(arom[3]).toFixed(1)}" r="4" fill="${SAGE}"/>

<text x="${(X(0) + 14).toFixed(1)}" y="${(Y(100) - 14).toFixed(1)}" font-size="13" font-weight="700" fill="${GREEN}">The fat (oleic acid) — barely touched</text>
<text x="${(X(1) + 12).toFixed(1)}" y="${(Y(poly[1]) + 22).toFixed(1)}" font-size="13" font-weight="700" fill="${GREEN}">Polyphenols — the health value</text>
<text x="${(X(1) - 6).toFixed(1)}" y="${(Y(arom[1]) + 22).toFixed(1)}" font-size="13" font-weight="700" fill="${GREEN}" opacity="0.75">Aromatics — the flavour</text>

<text x="28" y="${H - 34}" font-size="11" fill="${GREEN}" opacity="0.45">Illustrative curves based on published heating studies; exact retention varies with time, temperature and oil.</text>
<text x="28" y="${H - 18}" font-size="11" fill="${GREEN}" opacity="0.45">attimo-oil.com</text>
</g>
</svg>`;
  writeFileSync(new URL("./chart-what-heat-takes.svg", import.meta.url).pathname, svg);
}
console.log("written: chart-smoke-point-vs-stability.svg, chart-what-heat-takes.svg");
