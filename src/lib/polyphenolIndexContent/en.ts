// English copy and the content type for /polyphenol-index. The locale files
// (de, fr, sv, da, nl) implement the same type; index.ts assembles them.
export type IndexContent = {
  lang: string;
  meta: { title: string; description: string };
  nav: { ranking: string; method: string; full: string; totals: string; who: string; submit: string };
  hero: {
    eyebrow: string; // "The Olive Oil Polyphenol Index"
    edition: string; // "2025/26 harvest"
    h1: string;
    lead: string;
    ctaRanking: string;
    ctaSubmit: string;
    living: string;
    updateNote: string;
    lastUpdate: string; // "Last update {verified}"
  };
  strip: {
    producers: string; producersValue: string; // "{n}, from {c} countries"
    rankedBy: string; rankedByValue: string;
    everyFigure: string; everyFigureValue: string;
    edition: string; editionValue: string; // "{edition} · {next} follows the new pressings"
  };
  method: {
    eyebrow: string; h2: string; lead: string;
    rulesLabel: string;
    rules: { title: string; body: string }[];
    chartEyebrow: string; chartTitle: string; chartTotal: string; chartNote: string;
  };
  index: {
    eyebrow: string; h2: string; lead: string; // h2: "{n} oils with …"
    ourOil: string; compounds: string; total: string; // total: "Total, {method}"
    harvest: string; price: string; notListed: string; labReport: string; viewable: string; nonePublished: string;
    byMethod: string; // "{v} by {m}"
    alsoInRange: string;
    hubPre: string; hubLink: string; // hubPre: "The oil at number {rank}, …:"
  };
  unranked: {
    eyebrow: string; h2: string; lead: string; // h2: "{n} producers …"
    harvest: string; labViewable: string; noLab: string; priceNotListed: string;
  };
  table: {
    h2: string; lastUpdated: string; // "Last updated {verified}"
    cols: string[]; // 8
    notPublished: string; viewable: string; none: string; notListed: string;
    footnotePre: string; footnotePost: string; // around the JSON link
  };
  totals: {
    eyebrow: string; h2: string; lead: string;
    methods: { name: string; reading: string; what: string; total: string; who: string }[];
    rows: { how: string; total: string; who: string };
    pairEyebrow: string; pairH3: string; pairBody: string; methodsCta: string;
    apart: string; // "{pct}% apart"
    pairNote: string;
  };
  who: {
    eyebrow: string; h2: string; lead: string;
    cols: string[]; // 5
    elsewhereLabel: string; elsewhereBody: string;
    nothingLabel: string; nothingBody: string; // "As of {verified}: …"
    closing: string;
  };
  submit: { eyebrow: string; h2: string; body: string; cta: string; mailSubject: string; mailBody: string };
  faq: { heading: string; items: { question: string; answer: string }[] };
  sources: { summary: string; introPre: string; introLink: string; introPost: string };
  methodNotStated: string;
  /** Per-entry commentary, keyed by the YAML id. */
  entryNotes: Record<string, string>;
};

export const en: IndexContent = {
  lang: "en",
  meta: {
    title: "The Olive Oil Polyphenol Index: every brand that publishes its numbers, ranked",
    description: "{n} olive oil producers publish polyphenol figures for their current oil. Ranked by documented oleocanthal + oleacein, every number linked to the producer's own page or lab report.",
  },
  nav: { ranking: "Ranking", method: "Method", full: "Full index", totals: "Why totals differ", who: "Who publishes", submit: "Submit an oil" },
  hero: {
    eyebrow: "The Olive Oil Polyphenol Index",
    edition: "2025/26 harvest",
    h1: "Every olive oil brand that publishes its polyphenol numbers, ranked",
    lead: "The producers we found that publish a polyphenol figure for their current oil, ranked by the two documented compounds. Every number links to the producer's own page or lab report.",
    ctaRanking: "See the ranking",
    ctaSubmit: "Submit an oil",
    living: "Living index",
    updateNote: "Updated regularly as new results and harvests come in",
    lastUpdate: "Last update {verified}",
  },
  strip: {
    producers: "Producers listed", producersValue: "{n}, from {c} countries",
    rankedBy: "Ranked by", rankedByValue: "oleocanthal + oleacein, mg/kg",
    everyFigure: "Every figure", everyFigureValue: "copied from the producer's own page or certificate",
    edition: "Edition", editionValue: "{edition} · {next} follows the new pressings",
  },
  method: {
    eyebrow: "How the ranking works",
    h2: "Ranked by two named compounds, never by the total",
    lead: "Totals from different lab methods are different currencies: the same oil tests at 874 on one method and 1,046 on another. A named molecule is the exception. Measured on the same oils, oleocanthal agrees across methods within about 10%. So the index ranks on oleocanthal + oleacein, the D1 figure printed on University of Athens certificates, and an oil can only be ranked when its producer publishes both.",
    rulesLabel: "Three rules decide who is in",
    rules: [
      { title: "Published by the producer", body: "On the producer's own site. Retailer listings and award registries don't count." },
      { title: "Current or previous harvest", body: "Polyphenols decline as oil ages. A 2022 figure describes an oil that no longer exists." },
      { title: "Any accredited method", body: "The method is printed next to every number. Oils with a total and no compounds are listed, unranked." },
    ],
    chartEyebrow: "The ranked index",
    chartTitle: "Oleocanthal + oleacein, mg/kg, as published",
    chartTotal: "total",
    chartNote: "Grey: each brand's own headline total and method. The bars and the totals do not sort the same way, which is the point.",
  },
  index: {
    eyebrow: "The index",
    h2: "{n} oils with documented oleocanthal and oleacein",
    lead: "Each card carries the producer's compound values, the headline total in the producer's own method, and the document behind them. We make olive oil ourselves and our Coratina is here, held to the same format and the same rules as everyone else.",
    ourOil: "our oil", compounds: "Oleocanthal + oleacein", total: "Total, {method}",
    harvest: "Harvest", price: "Price", notListed: "not listed", labReport: "Lab report", viewable: "Viewable", nonePublished: "None published",
    byMethod: "{v} by {m}",
    alsoInRange: "Also in range",
    hubPre: "The oil at number {rank}, with its two sister varieties and every lab report:",
    hubLink: "high-polyphenol olive oil by ATTIMO",
  },
  unranked: {
    eyebrow: "Stated totals only",
    h2: "{n} producers publish a total and no compounds",
    lead: "They cannot be placed on the index. Listed by stated figure, which is a list and not a ranking: these totals come from four different methods, and three of them from no stated method at all.",
    harvest: "harvest", labViewable: "Lab report viewable", noLab: "No lab report", priceNotListed: "price not listed",
  },
  table: {
    h2: "Full index", lastUpdated: "Last updated {verified}",
    cols: ["#", "Brand · oil", "Oleocanthal + oleacein", "Total", "Method", "Harvest", "Lab report", "Price"],
    notPublished: "not published", viewable: "viewable", none: "none", notListed: "not listed",
    footnotePre: "Figures verified on the producers' own pages in {verified}. Machine-readable copy at",
    footnotePost: ", CC BY 4.0.",
  },
  totals: {
    eyebrow: "Why the totals differ",
    h2: "Total polyphenols is at least three measurements",
    lead: "Each method counts a different set of compounds in different units. The gap has structural causes, not sloppy labs, and no fixed conversion exists because it depends on each oil's profile. This index converts nobody's number.",
    methods: [
      { name: "HPLC and the COI method", reading: "Reads lowest", what: "Separates the oil into its compounds and measures each one on the way out. The official IOC method for biophenols, run by most accredited food labs.", total: "Total in tyrosol equivalents, which counts the small core of each molecule and reads low by construction.", who: "ATTIMO, Blueprint, Olivea's second certificate" },
      { name: "NMR", reading: "Reads higher", what: "Reads the magnetic signature of the sample and sums a long list of phenolic compounds, including heavy derivative molecules other methods partly miss.", total: "Total counts the full weight of every listed compound, so it lands structurally higher on the same oil.", who: "World Olive Center and University of Athens certificates: most of the ranked index" },
      { name: "Folin-Ciocalteu", reading: "Own scale", what: "A colour reaction. A reagent turns blue in proportion to total phenolic activity, and the oil is never separated into compounds.", total: "Total in caffeic acid equivalents. Names no compound, so it cannot place an oil in the ranked index.", who: "Oro del Desierto, ATTIMO Picual" },
    ],
    rows: { how: "How it works", total: "What the total means", who: "In this index" },
    pairEyebrow: "Same oil, two methods",
    pairH3: "Two brands publish the same harvest under both families",
    pairBody: "Both numbers legitimate, both from the same bottle. Chromatography rows in the ranking are understated by the same asymmetry, never flattered: Olivea's oleocanthal reads 143 on its COI certificate and 244 on its NMR one.",
    methodsCta: "How polyphenols are measured",
    apart: "{pct}% apart",
    pairNote: "mg/kg, 2025/26 harvest. Olivea: two published certificates. PJ Kabos: figures stated in product copy, no certificate.",
  },
  who: {
    eyebrow: "Why almost nobody publishes",
    h2: "Publishing is itself the signal",
    lead: "Polyphenol content is the closest thing olive oil has to a measurable quality signal. It predicts bitterness and pungency, decides whether an oil qualifies for the EU's only approved olive oil health claim, and declines with age. Most producers publish nothing, and the reason is structural: late-harvest, high-yield production, the economics behind nearly every supermarket bottle, gives oil low in polyphenols. The brands on this page measured, and were willing to show the result.",
    cols: ["Who publishes what", "Total", "Oleocanthal", "Oleacein", "Report"],
    elsewhereLabel: "Numbers that exist, published by someone else",
    elsewhereBody: "Sparta Medicinal Olive Oil, 3,400 mg/kg per the World Olive Center's 2026 awards. Omfakion Plus, 2,006 to 2,101 with oleocanthal up to 1,534, per retailer listings. Evolia, around 2,012 per its Aristoleo award. PhenOLIV, 2,011, retailer listing only. Physis of Crete Korona, 1,477 NMR on a Polish retailer's page. None appears on the producer's own site, so none is in the index until that changes. Tricarico publishes full scans for its Coratina, from 2022, and is retired on the freshness rule.",
    nothingLabel: "The brands that publish nothing",
    nothingBody: "As of {verified}: De Carlo, whose product page praises \"the high value of polyphenols\" without stating one, Guglielmi, Castillo de Canena, Biolea, Filippo Berio and Frantoio Muraglia publish no number for any oil. Terra Creta's traceability tool returns acidity, peroxides and UV absorbance for your exact bottle, and no polyphenols.",
    closing: "No published number does not mean a poor oil. It means an unverifiable one. The producers above operate mills, commission analyses and see these figures every season. Leaving them unpublished is a choice.",
  },
  submit: {
    eyebrow: "Submit an oil",
    h2: "Produce an oil that qualifies, or found one we missed?",
    body: "Send the link to the published figures and the analysis. Entries are verified against the published source and added at the next update. Any accredited lab or university programme qualifies, whichever method it uses. Publishing oleocanthal and oleacein places an oil in the ranked index.",
    cta: "Email the index",
    mailSubject: "Polyphenol Index submission",
    mailBody: "Brand and oil:\nHarvest:\nLink to the published figures (producer's own site):\nLink to the lab report, if public:\n",
  },
  faq: {
    heading: "Questions about the index",
    items: [
      { question: "Which olive oil has the highest polyphenol content?", answer: "No single answer is possible across lab methods, which is why this index ranks by documented compounds instead. Laconiko ZOI leads with 1,196 mg/kg oleocanthal + oleacein (1,000 of it oleocanthal), followed by The Governor Limited (875) and ATTIMO Coratina (807). The largest published totals are Pamako's 2,000 and Sakellaropoulos Fyllikon's 1,825, both NMR figures. Higher totals exist in award registries, up to 3,400 mg/kg, but their producers publish nothing themselves." },
      { question: "What counts as a high polyphenol content?", answer: "The EU's approved health claim requires 5 mg of hydroxytyrosol and derivatives per 20 g of oil, roughly 250 mg/kg total polyphenols. Typical supermarket oil sits at 100 to 250 mg/kg. Everything in this index clears the claim threshold; the top entries carry around ten times a supermarket bottle." },
      { question: "Why do two labs give the same oil different numbers?", answer: "They count different things in different units. NMR sums the full weight of a long list of phenolic compounds; the COI method expresses its total in tyrosol equivalents, which reads low by construction; Folin-Ciocalteu estimates total phenolic activity chemically. Two brands in this index publish the same oil under two methods, 20% and 48% apart. Individual compounds are the exception: measured on the same oils, oleocanthal by NMR and by calibrated HPLC agrees within about 10%." },
      { question: "What are oleocanthal and oleacein?", answer: "The two most-researched individual polyphenols in olive oil. Oleocanthal produces the peppery catch at the back of the throat and has documented anti-inflammatory activity; oleacein is an antioxidant studied for cardiovascular protection. Average oils carry roughly 135 and 105 mg/kg respectively, per the UC Davis study referenced on University of Athens certificates." },
      { question: "Does a higher number mean a better oil?", answer: "It means a more polyphenol-dense oil, which predicts bitterness, pungency and the researched health effects. It says nothing about defects, freshness at the moment you buy, or whether you will enjoy the taste; the top oils here are intense experiences. Quality still needs the basics: extra virgin grade, recent harvest, dark packaging." },
      { question: "Why is my favourite brand missing?", answer: "Either it publishes no polyphenol figure on its own site, which is the industry norm, or we missed it. The second has a fix: hello@attimo-oil.com." },
      { question: "How often is this page updated?", answer: "At every harvest cycle and whenever a producer submits or updates an analysis. Figures shown were verified on producers' own pages in September 2026." },
    ],
  },
  sources: {
    summary: "Method and sources",
    introPre: "Every figure is copied from the producer's own page or certificate, as published, in {verified}. Nothing is converted between methods. ATTIMO's row is read from its",
    introLink: "certificate record",
    introPost: "at build time. Submissions: hello@attimo-oil.com.",
  },
  methodNotStated: "method not stated",
  entryNotes: {
    "laconiko-zoi": "The most striking compound figure in this index, oleocanthal at roughly seven times the average oil, documented, and enough for first place on its own. Greek-grown, US-sold, and regularly sold out.",
    "the-governor-limited": "Corfiot Lianolia with the strongest fully documented compound pair in the index, in both grades.",
    "attimo-coratina": "Our own oil, held to the same format as everyone else's. These values come from the chromatography family, which in the one published same-oil comparison on this page read oleocanthal well below NMR. This row is measured by the conservative method.",
    "kyoord-high-phenolic": "A US brand pressing Corfiot Lianolia, with compound values ahead of oils carrying much larger totals.",
    "pamako-monovarietal": "The largest total in the index, and the clearest demonstration of why this page doesn't rank by totals. The 2,000 rides mostly on other derivative compounds, while the two headline molecules sit mid-field. High-altitude organic Tsounati.",
    "olvlimits-green-machine": "A Dutch brand bottling early-harvest Puglian Coratina. A four-figure total with the two headline compounds at roughly a third of it.",
    "olivea-ultra-high-phenolic": "The most instructive entry on the page. The same oil, analysed by both method families, both documents published. The totals land 20% apart. If you read one entry to understand why cross-method comparison needs care, read this one.",
    "sakellaropoulos-fyllikon": "The deepest publication record in olive oil. Certificates for every product, every year, for sixteen years. The second-largest total in the index, built mostly on compounds other than the headline pair.",
    "pj-kabos-phenolic-shot": "The other dual-method publisher, 48% apart on the same oil, with no document and no compounds behind either figure.",
    "olio-intini-coratina": "A respected Puglian mill, and the thinnest four-figure claim on this page. No method, no document, no compounds.",
    "oro-del-desierto-picual": "The most systematic publisher outside the ranked index. The whole range (Picual 844 down to Lechín 507), every campaign, with the method's limitations stated by the producer itself. Folin measures no individual compounds, so a compound ranking is off the table by construction.",
    "oleum-crete-koroneiki": "The certificates it does show make the missing one more visible.",
    "morocco-gold": "Testing labs are named, the method is not. Both figures are theirs; we list both.",
    "rapunzel-polyphenolia": "The one supermarket-channel entry, from a German organic brand. A published number on a retail shelf is rarer than it sounds.",
    "blueprint-snake-oil": "A modest figure, published with a proper certificate. The document is real; the number is the number.",
  },
};

