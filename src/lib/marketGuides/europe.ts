import type { MarketGuideContent, ShipEvidence } from "./types";
import { en } from "./en";

// EUROPE buying guide, in English. A regional guide: it lists every oil of the
// Polyphenol Index that a buyer in Europe can order, with how each seller
// states (or its checkout shows) that it ships there. Copy follows the English
// mother copy in en.ts; only the market facts and the Europe-specific lines differ.

// Evidence read on the sellers' own pages. Where a seller has no shipping
// policy, the rate its checkout returned on the checked date is given instead.
export const EUROPE_SHIPPING: Record<string, ShipEvidence> = {
  "olvlimits-green-machine": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "2–6 business days", cost: "not stated", free_from: "€50", quote: "Orders ship from the Netherlands, with fast delivery across the EU.", source_url: "https://www.olvlimits.com/en-be/policies/shipping-policy", checked: "2026-11-09", notes: "Ships from the Netherlands: 1 business day there, 2 in Germany, 2 to 6 in the rest of the EU. The 500 ml bottle was sold out on 9 November 2026" },
  "pj-kabos-phenolic-shot": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "free", quote: "Free EU shipping on all orders!", source_url: "https://www.pjkabos.gr/policies/shipping-policy", checked: "2026-11-09", notes: "Free shipping in the EU; delivery time not stated" },
  "pamako-monovarietal": { ships: "yes", basis: "EU-wide statement", route: "webshop", seller: "Pamako UK", days: "not stated", cost: "not stated", quote: "Shipping Across the UK & Europe", source_url: "https://www.pamako.co.uk/policies/shipping-policy", checked: "2026-11-09", notes: "The Greek site has no shop; Pamako's UK shop ships to Europe. The Greek retailer The Olivest stocks it too" },
  "morocco-gold": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "free", quote: "Standard delivery within the USA, Canada, Australia, Europe & UK – Free", source_url: "https://morocco-gold.com/shop/morocco-gold-extra-virgin-olive-oil/", checked: "2026-10-13", notes: "Free standard delivery to Europe; delivery time not stated per country" },
  "olive-oil-club-picholine": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "not stated", free_from: "€100", quote: "We ship all over Europe - Free delivery above €100", source_url: "https://oliveoilclub.myshopify.com/", checked: "2026-10-15", notes: "Ships all over Europe, free above €100; cost below that and delivery time not stated; sold out on 15 October 2026" },
  "deliba-ottobratico": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "not stated", quote: "Orders to supported destinations in Europe and the United Kingdom are fulfilled from Italy", source_url: "https://delibaoliveoil.com/policies/shipping-policy", checked: "2026-10-15", notes: "Delivers to Europe from Italy; countries, cost and delivery time only shown at checkout; sold out on 15 October 2026" },
  "the-governor-limited": { ships: "yes", basis: "EU-wide statement", route: "retailer", seller: "The Olivest", days: "not stated", cost: "not stated", free_from: "€349", quote: "Free shipping for orders in Europe more than €349 EUR (vat included) delivered via DHL Economy shipping method.", source_url: "https://theolivest.com/policies/shipping-policy", checked: "2026-11-09", notes: "The producer's own shop delivers in the United Kingdom only. The Greek retailer The Olivest ships it across Europe; the 2026/27 Limited Edition was a pre-order there on 9 November 2026" },
  "blueprint-snake-oil": { ships: "yes", basis: "lists country", route: "retailer", seller: "BONO, Shop Apotheke", days: "not stated", cost: "€4.95", free_from: "€35", quote: "Voor de Europese markt heeft Blueprint gekozen voor BONO als officiële partner.", source_url: "https://bono.nl/category/merken/blueprint-bryan-johnson", checked: "2026-10-13", notes: "Through BONO, Blueprint's official European partner (the Netherlands and Belgium; rate shown is BONO's), and through Shop Apotheke in Germany" },
  "oro-del-desierto-picual": { ships: "yes", basis: "lists country", route: "retailer", seller: "Oliva Oliva", days: "not stated", cost: "from €11.50 excl. VAT", quote: "Zone S: Belgium, France, Luxembourg, Monaco, Netherlands", source_url: "https://olivaoliva.com/en/content/9-shipping-costs", checked: "2026-10-13", notes: "Through the Spanish specialist Oliva Oliva, which lists its shipping zones per country. The producer's own shop offered delivery in Spain only on 9 November 2026" },
  "rapunzel-polyphenolia": { ships: "yes", basis: "lists country", route: "retailer", seller: "Piccantino", days: "3 business days", cost: "€6.90", free_from: "€54.90", quote: "Belgium: Free standard delivery from € 54,90", source_url: "https://www.piccantino.com/rapunzel/organic-extra-virgin-polyphenolia-olive-oil", checked: "2026-11-09", notes: "Rapunzel's own shop delivers in Germany and Austria only. The Austrian retailer Piccantino ships to other European countries; the rate shown is for Belgium" },
  "olio-intini-coratina": { ships: "yes", basis: "lists country", route: "webshop", days: "not stated", cost: "€9.90", quote: "Tariffa unica", source_url: "https://oliointini.it/prodotto/coratina/", checked: "2026-11-09", notes: "No list of countries on the site. On 9 November 2026 the checkout charged a flat €9.90 to Belgium and France and €15 to Denmark, and offered no rate to Sweden" },
  "laconiko-zoi": { ships: "yes", basis: "lists country", route: "webshop", days: "2–3 business days", cost: "$80.14", quote: "DHL Express Worldwide", source_url: "https://laconiko.com/products/zoi-ultra-high-phenolic-evoo-rich-in-oleocanthal", checked: "2026-11-09", notes: "Ships from the United States. No shipping policy on the site; on 9 November 2026 the checkout quoted DHL Express at $80.14 to Belgium and France and $87.96 to Sweden" },
  "olivea-ultra-high-phenolic": { ships: "yes", basis: "worldwide statement", route: "webshop", days: "not stated", cost: "$10", quote: "International shipping available for a flat rate of $10", source_url: "https://www.myolivea.com/pages/llms-full-txt", checked: "2026-10-13", notes: "The site states international shipping from the United States. On 9 November 2026 its checkout offered no rate to Belgium or Germany" },
  "kyoord-high-phenolic": { ships: "no", basis: "none", route: "none", days: "not stated", quote: "Kyoord is currently shipping to addresses in the United States and Canada.", source_url: "https://kyoord.com/policies/shipping-policy", checked: "2026-11-09", notes: "United States and Canada only" },
  "oleum-crete-koroneiki": { ships: "no", basis: "none", route: "none", days: "not stated", quote: "Free delivery on all UAE orders.", source_url: "https://oleumcrete.ae/policies/shipping-policy", checked: "2026-11-09", notes: "United Arab Emirates only" },
  "sakellaropoulos-fyllikon": { ships: "not stated", basis: "none", route: "none", days: "not stated", quote: "", source_url: "https://www.bioarmonia.gr/products", checked: "2026-11-09", notes: "Telephone orders in Greece only; no route to the rest of Europe found" },
  "oleaphen-high-phenolic": { ships: "not stated", basis: "none", route: "none", days: "not stated", quote: "UK orders go through Oleaphen's UK partner at highphenolic.co.uk.", source_url: "https://www.highphenolic.com/buy-high-phenolic-olive-oil", checked: "2026-10-15", notes: "No shipping information on the site; only a UK partner for the United Kingdom" },
};

export const europe: MarketGuideContent = {
  ...en,
  slug: "/buy-high-polyphenol-olive-oil-europe",
  market: "Europe",
  country: "Europe",
  regional: true,
  // ATTIMO's own range across its shipping tiers (see shippingZones.ts).
  attimoShipping: { cost: "€7 to €40 by country", freeFrom: "2 or 3 bottles in 27 countries", days: "2–8 business days", daysText: "2 to 8 business days", short: "€7 to €40 by country" },
  siblings: [],
  updated: "9 November 2026",
  meta: {
    title: "Buying high-polyphenol olive oil in Europe | ATTIMO",
    description: "Buying guide for high-polyphenol olive oil in Europe. Which oils you can order from a European address, how high their polyphenol figure is and how it was measured, and what shipping costs. Updated {updated}.",
  },
  hero: {
    ...en.hero,
    eyebrow: "Buying guide · Europe",
    h1: "Buying high-polyphenol olive oil in Europe",
    lead: "Every high-polyphenol olive oil you can order in Europe, compared on polyphenols, price and delivery.",
    checkedLine: "Facts taken from each seller's own website",
  },
  glance: en.glance,
  criteria: {
    ...en.criteria,
    items: en.criteria.items,
  },
  table: {
    ...en.table,
    cols: { ...en.table.cols, buy: "How to buy in Europe" },
    buy: { webshop: "Web shop, ships to some European countries", webshopEu: "Web shop, ships EU-wide", webshopWorld: "Web shop, ships internationally", retailer: "Through a shop", distributor: "Through a distributor", request: "On request" },
    footnote: en.table.footnote,
  },
  oils: {
    ...en.oils,
    pros: { ...en.oils.pros, shipsNl: "Ships to some European countries, {days}", shipsEu: "Ships EU-wide" },
    cons: { ...en.oils.cons, noDays: "Delivery time not stated", nlNotNamed: "Europe not named separately" },
    perOil: {
      "attimo-coratina": {
        cons: ["Picual still measured with Folin-Ciocalteu rather than HPLC", "No free shipping to Liechtenstein, Malta, Norway and Switzerland"],
        forWho: "Anyone who takes olive oil as a daily shot, or wants a strong, bitter, peppery oil to finish a dish.",
        standsOut: "The report, the method, the variety and the harvest date are all online.",
      },
      "olvlimits-green-machine": { forWho: "Anyone in or near the Netherlands who wants the bottle fast: Dutch brand, 1 business day there and 2 in Germany." },
      "pj-kabos-phenolic-shot": { forWho: "Anyone looking for a Greek oil with a high total who does not mind an unstated delivery time." },
      "laconiko-zoi": { forWho: "Anyone who wants the highest documented oleocanthal and accepts a shipping cost above the price of the bottle." },
    },
  },
  attimo: {
    eyebrow: "ATTIMO in Europe",
    h2: "Three single-variety oils, picked early",
    intro: "Fresh from the latest harvest, with the lab report online.",
  },
  faq: {
    heading: "Frequently asked questions",
    items: [
      { question: "Where can I buy high-polyphenol olive oil in Europe?", answer: "From the producers' own web shops or from a few specialist retailers. OlvLimits, PJ Kabos, Pamako, Morocco Gold and ATTIMO state on their own sites that they ship across Europe. The Governor, Blueprint, Oro del Desierto and Rapunzel reach European buyers through a retailer. The cards above give the route, the shipping cost and the source for each oil." },
      { question: "Which olive oil in Europe has the highest polyphenol figure?", answer: "It depends on how it was measured. The table shows every published figure with its method, and the two main compounds in their own column. ATTIMO Coratina 25/26 measures 847 mg/kg (HPLC), of which 807 mg/kg oleocanthal plus oleacein." },
      { question: "Can I order American high-polyphenol brands from Europe?", answer: "Some. Laconiko ships from the United States by DHL Express; on 9 November 2026 its checkout quoted $80.14 to Belgium and France. Kyoord ships to the United States and Canada only. Blueprint is sold in Europe through BONO and Shop Apotheke. Olivea states international shipping at $10, but its checkout offered no rate to Belgium or Germany on the same day." },
      { question: "Does ATTIMO ship to my country?", answer: "ATTIMO ships from Belgium to 31 European countries. Shipping costs {standard} and is free from {freeFrom}. Orders arrive within {daysText}. The shipping page lists the rate and delivery time for every country." },
      { question: "How do I compare different brands?", answer: "The way this guide does it. First a real harvest date on the bottle, so you know how old the oil is. Then a polyphenol figure with the lab report behind it, and the method it was measured with, because different methods give different figures for the same oil; when methods differ, compare on oleocanthal + oleacein, which every lab reports separately. Then whether the brand ships to your country, in how many days and at what cost, in its own words." },
      { question: "Do supermarkets sell high-polyphenol olive oil?", answer: "Rarely with a figure. The supermarket brands we checked on their own sites, Gkazas in Belgium and the Netherlands and Zeta in Sweden, publish no polyphenol figure for any oil. Rapunzel Polyphenolia, sold in organic shops, states 500 mg/kg." },
      { question: "When does the new harvest arrive?", answer: "The olives are picked green in October and pressed at the end of October. Leave your email on the homepage and you hear first." },
      { question: "How do I store a high-polyphenol olive oil?", answer: "Dark, cool and closed. Light, oxygen and heat break polyphenols down. Use an opened bottle within a few months." },
    ],
  },
  verdict: {
    eyebrow: "Our advice",
    h2: "Choose the oil you can check end to end",
    body: "A high figure is only worth something with a report, a method and a harvest date behind it, and with a brand that says it ships to your country.",
    cta: "See the ATTIMO oils",
  },
};
