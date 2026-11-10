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
  "olive-oil-club-picholine": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "not stated", free_from: "€100", quote: "We ship all over Europe - Free delivery above €100", source_url: "https://oliveoilclub.myshopify.com/", checked: "2026-10-15", notes: "Ships all over Europe, free above €100; cost below that and delivery time not stated; sold out on 15 October 2026" },
  "deliba-ottobratico": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "not stated", quote: "Orders to supported destinations in Europe and the United Kingdom are fulfilled from Italy", source_url: "https://delibaoliveoil.com/policies/shipping-policy", checked: "2026-10-15", notes: "Delivers to Europe from Italy; countries, cost and delivery time only shown at checkout; sold out on 15 October 2026" },
  "oleaphen-high-phenolic": { ships: "not stated", basis: "none", route: "none", days: "not stated", quote: "UK orders go through Oleaphen's UK partner at highphenolic.co.uk.", source_url: "https://www.highphenolic.com/buy-high-phenolic-olive-oil", checked: "2026-10-15", notes: "No shipping information on the site; only a UK partner for the United Kingdom" },
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
    lead: "Every high-polyphenol olive oil you can order in the Netherlands, compared on polyphenols, price and delivery.",
    cta: "See the oils",
    ctaSecondary: "What to check",
    updatedLabel: "Updated",
    checkedLine: "Facts taken from each producer's own website",
  },
  glance: {
    eyebrow: "",
    h2: "{n} oils with a published polyphenol figure",
    introPre: "Richest in oleocanthal and oleacein first, as in the ",
    introLink: "Polyphenol Index",
    introPost: ". These are the two best-studied polyphenols. Labs measure them the same way, whichever method they use. Oils that publish only a total come last.",
    labels: { value: "€ per 100 mg oleocanthal + oleacein", attimoName: "ATTIMO Coratina", attimoSub: "Belgian brand · also Nocellara and Picual", price: "Price", priceNote: "producer's price, {verified}", method: "Measured with", methodLink: "what does this mean?", compounds: "Oleocanthal + oleacein", total: "Total polyphenols", buy: "Buy", cost: "Shipping", days: "Delivery", source: "Source", notStated: "not stated", attimoAlso: "Also {nocellara} and {picual}" },
  },
  criteria: {
    eyebrow: "What to check",
    h2: "A good high-polyphenol oil shows its harvest date, lab report, test method and delivery",
    intro: "",
    items: [
      { key: "report", title: "A lab report you can open", text: "Polyphenols are the compounds that make olive oil bitter and peppery, and they are behind most of its researched health effects. A figure on a label is a claim. A lab report with the lab's name on it lets you check it.", weight: 30, icon: "/icons/flask.svg" },
      { key: "delivery", title: "Shipping to your country", text: "Many high-polyphenol brands sell only in the United States. The seller's own website should name your country, or say it ships across the EU, with the cost and delivery time.", weight: 30, icon: "/icons/branch-2.svg" },
      { key: "method", title: "The test method next to the figure", text: "Labs measure polyphenols in different ways. The same oil can read 20 to 48% higher on one method than on another, so a figure without its method can't be compared.", weight: 20, icon: "/icons/olive.svg" },
      { key: "origin", title: "A harvest date and a named variety", text: "Polyphenols fall from the day the oil is pressed, so the harvest date tells you how much is left. Supermarket oil rarely prints one, because it blends oils from several harvests.", weight: 20, icon: "/icons/basket-2.svg" },
    ],
  },
  table: {
    eyebrow: "Comparison",
    h2: "Compare the oils on polyphenols, price and shipping",
    intro: "Click a column to sort by it. Click an oil to open its card.",
    sortHint: "Sorted by",
    footnotes: [
      "Polyphenols in mg/kg, from each producer's lab report.",
      "Prices are the producer's own, from {verified}. Dollar and pound prices are converted to euros at the European Central Bank rate.",
      "Shipping costs as listed on the seller's website on {checked}.",
    ],
    cols: { oil: "Oil", compounds: "Oleocanthal + oleacein", total: "Total polyphenols", method: "Test method", price: "Price per 500 ml", value: "Price per 100 mg oleocanthal + oleacein", buy: "How to buy in the Netherlands", days: "Delivery", score: "Score" },
    buy: { webshop: "Web shop, ships to the Netherlands", webshopEu: "Web shop, ships EU-wide", webshopWorld: "Web shop, ships internationally", retailer: "Through a shop", distributor: "Through a distributor", request: "On request" },
    footnote: "Polyphenols in milligrams per kilo of oil, from each producer's lab report. Prices are the producer's own, from {verified}; dollar and pound prices are converted to euros at the European Central Bank rate. Shipping costs as listed on {checked}.",
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
    h2: "How to read a polyphenol figure",
    intro: "A polyphenol figure is the milligrams of polyphenols in a kilo of oil. Two things decide what it means: which compounds were counted, and how.",
    steps: [
      { title: "The total adds up dozens of compounds", text: "Two of them, oleocanthal and oleacein, are the best studied. Oleocanthal causes the peppery catch at the back of your throat." },
      { title: "The test method changes the total", text: "NMR counts a longer list of compounds than HPLC, so it reads higher on the same oil. Both figures are correct." },
      { title: "Oleocanthal and oleacein compare across methods", text: "Labs measure these two compounds the same way, within about 10%. That makes them the fairest basis for comparing oils tested with different methods." },
    ],
    cta: "How each test method works",
    visual: { title: "Different methods give different polyphenol results", caption: "Both totals and the oleocanthal + oleacein figure come from the producer's two published certificates for the same oil.", compounds: "Oleocanthal + oleacein, NMR" },
  },
  avoid: {
    eyebrow: "What to leave on the shelf",
    h2: "Four signs to put a bottle back",
    items: [
      { title: "No harvest date", text: "A best-before date alone doesn't tell you how old the oil is." },
      { title: "\"Rich in polyphenols\" without a figure", text: "Without milligrams per kilo, the claim can't be checked or compared." },
      { title: "A figure without a method or report", text: "It can't be compared with other oils, and it can't be checked." },
      { title: "\"Extra virgin\" as the quality claim", text: "Extra virgin is the minimum grade of the category. It says nothing about freshness or polyphenols." },
    ],
  },
  attimo: {
    eyebrow: "ATTIMO in the Netherlands",
    h2: "Three single-variety oils, picked early, at your door within {daysText}",
    intro: "Fresh from the latest harvest, with the lab report online.",
  },
  faq: {
    heading: "Frequently asked questions",
    items: [
      { question: "Does ATTIMO ship to the Netherlands?", answer: "Yes. Shipping costs {standard} and is free from {freeFrom}. Orders arrive within {daysText}." },
      { question: "Which oil in the Netherlands has the highest polyphenol figure?", answer: "It depends on how it was measured. The table shows every published figure with its method, and the two main compounds in their own column. ATTIMO Coratina 25/26 measures 847 mg/kg (HPLC), of which 807 mg/kg oleocanthal plus oleacein." },
      { question: "How do I compare different brands?", answer: "The way this guide does it. First a real harvest date on the bottle, so you know how old the oil is. Then a polyphenol figure with the lab report behind it, and the method it was measured with, because different methods give different figures for the same oil; when methods differ, compare on oleocanthal + oleacein, which every lab reports separately. Then whether the brand ships to {market}, in how many days and at what cost, in its own words." },
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
