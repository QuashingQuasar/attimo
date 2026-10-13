import type { MarketGuideContent, ShipEvidence } from "./types";

// ENGLISH MOTHER COPY for the country buying guides. Reviewed by Gilles; every
// other language is translated from this file, with the market facts swapped.
// Rendered as a noindex prototype on the Netherlands data so the copy can be
// judged on a real page.

// Netherlands evidence with English one-liners (same facts as nl.ts).
export const EN_NL_SHIPPING: Record<string, ShipEvidence> = {
  "blueprint-snake-oil": { ships: "yes", basis: "lists country", route: "retailer", seller: "BONO", days: "next business day", cost: "€4.95", free_from: "€35", quote: "Voor de Europese markt heeft Blueprint gekozen voor BONO als officiële partner.", source_url: "https://bono.nl/category/merken/blueprint-bryan-johnson", checked: "2026-10-13", notes: "Through BONO, Blueprint's official European partner, in stock" },
  "kyoord-high-phenolic": { ships: "no", basis: "none", route: "none", days: "not stated", quote: "Kyoord is currently shipping to addresses in the United States and Canada.", source_url: "https://kyoord.com/policies/shipping-policy", checked: "2026-10-12", notes: "United States and Canada only" },
  "laconiko-zoi": { ships: "not stated", basis: "none", route: "none", days: "not stated", quote: "", source_url: "https://laconiko.com/", checked: "2026-10-13", notes: "Stores in the US and Canada only; no route to the Netherlands found" },
  "morocco-gold": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "free", quote: "Standard delivery within the USA, Canada, Australia, Europe & UK – Free", source_url: "https://morocco-gold.com/shop/morocco-gold-extra-virgin-olive-oil/", checked: "2026-10-13", notes: "Free shipping to Europe; delivery time not stated per country" },
  "oleum-crete-koroneiki": { ships: "no", basis: "none", route: "none", days: "not stated", quote: "Free delivery on all UAE orders.", source_url: "https://oleumcrete.ae/policies/shipping-policy", checked: "2026-10-12", notes: "United Arab Emirates only" },
  "olio-intini-coratina": { ships: "not stated", basis: "none", route: "request", days: "not stated", cost: "not stated", quote: "Per spedizioni all'estero o richieste particolari compilate il form contatti e cercheremo di soddisfare le vostre esigenze.", source_url: "https://oliointini.it/prodotto/coratina/", checked: "2026-10-13", notes: "Abroad on request through the contact form" },
  "olivea-ultra-high-phenolic": { ships: "yes", basis: "worldwide statement", route: "webshop", days: "not stated", cost: "$10", quote: "International shipping available for a flat rate of $10", source_url: "https://www.myolivea.com/pages/llms-full-txt", checked: "2026-10-13", notes: "International from the US; Europe not named" },
  "olvlimits-green-machine": { ships: "yes", basis: "lists country", route: "webshop", days: "1 business day", cost: "not stated", free_from: "€50", quote: "Orders ship from the Netherlands", source_url: "https://olvlimits.com/en-be/policies/shipping-policy", checked: "2026-10-12", notes: "Ships from the Netherlands" },
  "oro-del-desierto-picual": { ships: "yes", basis: "lists country", route: "retailer", seller: "Oliva Oliva", days: "3–6 business days", cost: "€11.50 excl. VAT", quote: "Zone S: Belgium, France, Luxembourg, Monaco, Netherlands", source_url: "https://olivaoliva.com/en/content/9-shipping-costs", checked: "2026-10-13", notes: "Through the Spanish specialist Oliva Oliva; the Netherlands is in its shipping zones" },
  "pamako-monovarietal": { ships: "yes", basis: "EU-wide statement", route: "webshop", seller: "Pamako UK", days: "not stated", cost: "not stated", quote: "Shipping Across the UK & Europe", source_url: "https://www.pamako.co.uk/policies/shipping-policy", checked: "2026-10-13", notes: "The Greek site has no shop; Pamako's UK shop ships to Europe" },
  "pj-kabos-phenolic-shot": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "free", quote: "Free EU shipping on all orders!", source_url: "https://www.pjkabos.gr", checked: "2026-10-12", notes: "Free shipping in the EU; delivery time not stated" },
  "rapunzel-polyphenolia": { ships: "no", basis: "none", route: "none", days: "not stated", quote: "Lieferung ausschließlich innerhalb Deutschlands und nach Österreich", source_url: "https://shop.rapunzel.de/versand-und-zahlungsbedingungen/", checked: "2026-10-12", notes: "Germany and Austria only" },
  "sakellaropoulos-fyllikon": { ships: "not stated", basis: "none", route: "none", days: "not stated", quote: "", source_url: "https://www.bioarmonia.gr/products", checked: "2026-10-13", notes: "Telephone orders in Greece only; no route to the Netherlands found" },
  "the-governor-limited": { ships: "no", basis: "none", route: "none", days: "not stated", quote: "We ship to England, Wales, Scotland, Northern Ireland, Guernsey, Jersey, and the Isle of Man.", source_url: "https://thegovernorevoo.co.uk/pages/shipping-policy", checked: "2026-10-12", notes: "United Kingdom only" },
};

export const en: MarketGuideContent = {
  lang: "en",
  slug: "/prototype/buying-guide-netherlands",
  market: "the Netherlands",
  country: "Netherlands",
  daysUnit: "business days",
  siblings: [],
  updated: "13 October 2026",
  meta: {
    title: "Buying high-polyphenol olive oil in the Netherlands | ATTIMO",
    description: "Buying guide for high-polyphenol olive oil in the Netherlands. Which oils you can buy there, how high their polyphenol figure is and how it was measured, and what shipping to the Netherlands costs. Updated {updated}.",
  },
  nav: { glance: "Oils", criteria: "Criteria", table: "Comparison", oils: "Per oil", number: "The figure", faq: "FAQ" },
  hero: {
    eyebrow: "Buying guide · the Netherlands",
    h1: "Buying high-polyphenol olive oil in the Netherlands",
    lead: "Which high-polyphenol olive oils you can buy in the Netherlands, and what to check before you order.",
    cta: "See the oils",
    ctaSecondary: "What to check",
    updatedLabel: "Updated",
    checkedLine: "Checked on every producer's own website",
  },
  glance: {
    eyebrow: "What you can buy",
    h2: "High-polyphenol olive oils you can buy in the Netherlands",
    introPre: "Only oils with a published polyphenol figure, in the order of the ",
    introLink: "Polyphenol Index",
    introPost: ".",
    labels: { attimoName: "ATTIMO Coratina", attimoSub: "Belgian brand · also Nocellara and Picual", price: "Price", priceNote: "producer's price, {verified}", method: "Measured with", methodLink: "what does this mean?", compounds: "Oleocanthal + oleacein", total: "Total polyphenols", buy: "Buy", cost: "Shipping", days: "Delivery", source: "Source", notStated: "not stated", attimoAlso: "Also {nocellara} and {picual}" },
  },
  criteria: {
    eyebrow: "What to check",
    h2: "Four things you want to see before you order",
    intro: "You know what olive oil is and you want a good one. This is the difference between a good one and one that only says so.",
    items: [
      { key: "origin", title: "A real harvest date", text: "Supermarket oil usually has none, because it blends oils from different years. Polyphenols fall from the day of pressing, so you want to know how old the oil is and which olive it comes from.", weight: 20, icon: "/icons/basket-2.svg" },
      { key: "report", title: "A polyphenol figure with the report behind it", text: "Polyphenols are the compounds that make an olive oil healthy and peppery. A figure on the label is a claim; a lab report you can open is proof.", weight: 30, icon: "/icons/flask.svg" },
      { key: "method", title: "How that figure was measured", text: "There are different ways to measure polyphenols, and they give different figures for the same oil. A figure without its method cannot be compared with anything.", weight: 20, icon: "/icons/olive.svg" },
      { key: "delivery", title: "Shipping to the Netherlands", text: "Does the brand ship to the Netherlands, in how many days, and does its website say so itself? If not, do not count on it.", weight: 30, icon: "/icons/branch-2.svg" },
    ],
  },
  table: {
    eyebrow: "Comparison",
    h2: "All available oils compared",
    intro: "The same oils, scored on the four criteria above. Two columns for the polyphenol figure: the two main compounds on their own, and the total as the producer publishes it.",
    cols: { oil: "Oil", compounds: "Oleocanthal + oleacein", total: "Total", method: "Method", price: "Price", buy: "How to buy in the Netherlands", days: "Delivery", score: "Score" },
    buy: { webshop: "Web shop, ships to the Netherlands", webshopEu: "Web shop, ships EU-wide", webshopWorld: "Web shop, ships internationally", retailer: "Through a shop", distributor: "Through a distributor", request: "On request" },
    footnote: "mg/kg. Shipping information read on each seller's website on {checked}; the sentence sits behind the source link. Polyphenol figures come from the Polyphenol Index, where each figure links to its report. Prices are the producer's, read in {verified}.",
    links: {
      index: { title: "The Polyphenol Index", text: "Every olive oil in the world that publishes a polyphenol figure, on one page, ranked on the two main compounds." },
      methods: { title: "Why methods differ", text: "HPLC, NMR and Folin-Ciocalteu give different figures for the same oil. What each method measures, and what you can compare." },
    },
  },
  oils: {
    eyebrow: "Per oil",
    h2: "What each oil does and does not show",
    intro: "The same four criteria, written out per oil. Plus and minus come straight from what the producer publishes.",
    labels: { score: "Score", pros: "Plus", cons: "Minus", forWho: "For whom", standsOut: "Why it stands out", buy: "Buy", price: "Price", source: "Source", priceOnSite: "not stated" },
    pros: { report: "Lab report online", hplc: "Oleocanthal and oleacein reported separately", method: "Method named", origin: "Variety and harvest named", shipsNl: "Ships to the Netherlands, {days}", shipsEu: "Ships EU-wide" },
    cons: { nmr: "Total measured with NMR: counts a long list of phenolic compounds at full weight, heavy derivative molecules included, and comes out 20 to 48% higher than HPLC on the same oil. Compare on oleocanthal + oleacein.", shipping: "Shipping {cost}", shippingFree: "Shipping {cost}, free from {free}", noReport: "No report to open", noMethod: "Method not stated", totalOnly: "Only a total, no separate compounds", noDays: "Delivery time to the Netherlands not stated", nlNotNamed: "The Netherlands not named separately", noOrigin: "Variety or harvest not named" },
    perOil: {
      "attimo-coratina": { cons: ["No shops in {market} yet", "Picual still measured with Folin-Ciocalteu rather than HPLC"], forWho: "Anyone who takes olive oil as a daily shot, or wants a strong, bitter, peppery oil to finish a dish.", standsOut: "The report, the method, the variety and the harvest date are all online, and the oil is in {market} within {daysText}." },
      "olvlimits-green-machine": { forWho: "Anyone who wants the bottle tomorrow: Dutch brand, ships within one business day." },
      "pj-kabos-phenolic-shot": { forWho: "Anyone looking for a Greek oil with a high total who does not mind an unstated delivery time." },
    },
  },
  number: {
    eyebrow: "The figure",
    h2: "What a polyphenol figure means, in three steps",
    intro: "Every brand in this guide prints a figure in milligrams per kilo. This is how to read it.",
    steps: [
      { title: "It is one figure for a whole family of compounds", text: "Polyphenols are dozens of different compounds. Two of them, oleocanthal and oleacein, are the best studied and give the peppery catch at the back of your throat." },
      { title: "Different methods give different figures", text: "A lab can count each compound on its own (HPLC) or estimate the whole family at once (NMR, Folin-Ciocalteu). The same oil then reads two different totals. Neither is wrong; they measure different things." },
      { title: "So compare only what is comparable", text: "Two totals from the same method, or better: oleocanthal plus oleacein, because every lab reports those two compounds separately. That is why they have their own column in this guide." },
    ],
    cta: "Each method explained",
  },
  avoid: {
    eyebrow: "What to leave on the shelf",
    h2: "Four signs to put a bottle back",
    items: [
      { title: "No harvest date", text: "A best-before date alone means you do not know how old the oil is." },
      { title: "\"Rich in polyphenols\" without a figure", text: "A claim without milligrams per kilo is marketing." },
      { title: "A figure without a method or report", text: "You cannot compare it with anything and you cannot check it." },
      { title: "\"Extra virgin\" as the quality claim", text: "Extra virgin is the entry requirement of the category. It says nothing about freshness or polyphenols." },
    ],
  },
  attimo: {
    eyebrow: "ATTIMO in the Netherlands",
    h2: "Three single-variety oils, picked early, at your door within {daysText}",
    intro: "Fresh from the latest harvest, with the lab report online. Shipping to the Netherlands {standard}, free from {freeFrom}, in {days}.",
  },
  faq: {
    heading: "Frequently asked questions",
    items: [
      { question: "Does ATTIMO ship to the Netherlands?", answer: "Yes. Shipping costs {standard} and is free from {freeFrom}. Orders arrive within {daysText}." },
      { question: "Which oil in the Netherlands has the highest polyphenol figure?", answer: "It depends on how it was measured. The table shows every published figure with its method, and the two main compounds in their own column. ATTIMO Coratina 25/26 measures 847 mg/kg (HPLC), of which 807 mg/kg oleocanthal plus oleacein." },
      { question: "How do I compare figures from different brands?", answer: "Only figures from the same method are comparable. The cleanest comparison is oleocanthal plus oleacein, two compounds every lab reports separately." },
      { question: "Can I buy ATTIMO in a shop in the Netherlands?", answer: "For now through the web shop. Shops that stock ATTIMO will be listed here as soon as there are any." },
      { question: "When does the new harvest arrive?", answer: "The olives are picked green in October and pressed at the end of October. Leave your email on the homepage and you hear first." },
      { question: "How do I store a high-polyphenol olive oil?", answer: "Dark, cool and closed. Light, oxygen and heat break polyphenols down. Use an opened bottle within a few months." },
    ],
  },
  verdict: {
    eyebrow: "Our advice",
    h2: "Choose the oil you can check end to end",
    body: "A high figure is only worth something with a report, a method and a harvest date behind it, and with a brand that says it ships to the Netherlands. In this guide ATTIMO Coratina meets all four; OlvLimits and PJ Kabos meet three.",
    cta: "See the ATTIMO oils",
  },
};
