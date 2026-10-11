import type { MarketGuideContent, ShipEvidence } from "./types";

// Shipping evidence per Index entry id, Netherlands. Filled from a page-by-page
// check of each producer's own shipping/FAQ page on 2026-10-12; "not stated"
// means the site did not say. `notes` is the Dutch one-liner shown in the table. Entry ids match src/content/polyphenol-index/*.yaml.
export const NL_SHIPPING: Record<string, ShipEvidence> = {
  "blueprint-snake-oil": { ships: "yes", basis: "worldwide statement", days: "not stated", quote: "We ship internationally from multiple fulfillment locations, including warehouses in Hong Kong and Singapore", source_url: "https://blueprint.bryanjohnson.com/policies/shipping-policy", checked: "2026-10-12", notes: "Internationaal; Nederland en EU niet genoemd, geen levertijd voor de EU" },
  "kyoord-high-phenolic": { ships: "no", basis: "none", days: "not stated", quote: "Kyoord is currently shipping to addresses in the United States and Canada.", source_url: "https://kyoord.com/policies/shipping-policy", checked: "2026-10-12", notes: "Alleen VS en Canada" },
  "laconiko-zoi": { ships: "not stated", basis: "none", days: "not stated", quote: "", source_url: "https://laconiko.com/policies/terms-of-service", checked: "2026-10-12", notes: "Geen verzendpagina gevonden" },
  "morocco-gold": { ships: "not stated", basis: "none", days: "not stated", quote: "Morocco Gold is available throughout the world delivered via our global distributor network.", source_url: "https://morocco-gold.com/faq/", checked: "2026-10-12", notes: "Via distributeurs; eigen verzending niet vermeld" },
  "oleum-crete-koroneiki": { ships: "no", basis: "none", days: "not stated", quote: "Free delivery on all UAE orders.", source_url: "https://oleumcrete.ae/policies/shipping-policy", checked: "2026-10-12", notes: "Alleen Verenigde Arabische Emiraten" },
  "olio-intini-coratina": { ships: "not stated", basis: "none", days: "not stated", quote: "Per spedizioni all'estero o richieste particolari compilate il form contatti e cercheremo di soddisfare le vostre esigenze.", source_url: "https://oliointini.it/prodotto/coratina/", checked: "2026-10-12", notes: "Buitenland op aanvraag via contactformulier" },
  "olivea-ultra-high-phenolic": { ships: "not stated", basis: "none", days: "not stated", quote: "", source_url: "https://www.myolivea.com/policies/shipping-policy", checked: "2026-10-12", notes: "Verzendpagina noemt geen landen" },
  "olvlimits-green-machine": { ships: "yes", basis: "lists country", days: "1 werkdag", quote: "Orders ship from the Netherlands", source_url: "https://olvlimits.com/en-be/policies/shipping-policy", checked: "2026-10-12", notes: "Verzendt vanuit Nederland" },
  "oro-del-desierto-picual": { ships: "not stated", basis: "none", days: "not stated", quote: "", source_url: "https://orodeldesierto.com/aviso-legal/", checked: "2026-10-12", notes: "Geen verzendinformatie op de website gevonden" },
  "pamako-monovarietal": { ships: "not stated", basis: "none", days: "not stated", quote: "", source_url: "https://www.pamako.gr/contact/", checked: "2026-10-12", notes: "Geen webshop; verkoop via telefoon en verkooppunten" },
  "pj-kabos-phenolic-shot": { ships: "yes", basis: "EU-wide statement", days: "not stated", quote: "Free EU shipping on all orders!", source_url: "https://www.pjkabos.gr", checked: "2026-10-12", notes: "Gratis verzending in de EU; levertijd niet vermeld" },
  "rapunzel-polyphenolia": { ships: "no", basis: "none", days: "not stated", quote: "Lieferung ausschließlich innerhalb Deutschlands und nach Österreich", source_url: "https://shop.rapunzel.de/versand-und-zahlungsbedingungen/", checked: "2026-10-12", notes: "Alleen Duitsland en Oostenrijk" },
  "sakellaropoulos-fyllikon": { ships: "not stated", basis: "none", days: "not stated", quote: "", source_url: "https://www.bioarmonia.gr/products", checked: "2026-10-12", notes: "Geen webshop; telefonische bestelling" },
  "the-governor-limited": { ships: "no", basis: "none", days: "not stated", quote: "We ship to England, Wales, Scotland, Northern Ireland, Guernsey, Jersey, and the Isle of Man.", source_url: "https://thegovernorevoo.co.uk/pages/shipping-policy", checked: "2026-10-12", notes: "Alleen Verenigd Koninkrijk" },
};

export const nl: MarketGuideContent = {
  lang: "nl",
  slug: "/nl/polyfenolrijke-olijfolie-kopen-nederland",
  market: "Nederland",
  meta: {
    title: "Polyfenolrijke olijfolie kopen in Nederland: wat er verkrijgbaar is, met labwaarden | ATTIMO",
    description:
      "Welke polyfenolrijke olijfolie kun je in Nederland kopen? Elke olie in deze gids publiceert een labwaarde met de methode erbij. Per merk staat of het naar Nederland verzendt, met de bron. ATTIMO levert in 3 tot 5 werkdagen, gratis vanaf 2 flessen.",
  },
  nav: { criteria: "Criteria", table: "Verkrijgbaar", attimo: "ATTIMO", faq: "FAQ" },
  hero: {
    eyebrow: "Koopgids · Nederland",
    h1: "Polyfenolrijke olijfolie kopen in Nederland: wat er verkrijgbaar is, met de labwaarden erbij",
    lead: "Elke olie in deze gids publiceert een polyfenolgetal en noemt de methode. Per merk staat of de eigen website verzending naar Nederland vermeldt, met de zin en de bron. Geen schattingen.",
    cta: "Bekijk de tabel",
    ctaSecondary: "ATTIMO in Nederland",
  },
  criteria: {
    eyebrow: "Waar je op let",
    h2: "Vier dingen die een polyfenolrijke olijfolie moet kunnen aantonen",
    intro: "Een hoog getal op het etiket zegt weinig zonder de context erbij. Dit is wat je controleert voor je bestelt.",
    items: [
      { title: "Oogstdatum, geen houdbaarheidsdatum", text: "Polyfenolen dalen vanaf de dag van persen. Een oogstdatum vertelt je hoe oud de olie is; een houdbaarheidsdatum verbergt dat." },
      { title: "Het getal met de methode erbij", text: "HPLC, NMR en Folin-Ciocalteu geven voor dezelfde olie verschillende totalen. Vergelijk alleen getallen uit dezelfde methode, of vergelijk oleocanthal plus oleaceïne." },
      { title: "Eén variëteit, één oogst", text: "Een monocultivar uit één oogst is te herleiden tot een labrapport. Een blend uit meerdere jaren is dat niet." },
      { title: "Levering naar Nederland, zwart op wit", text: "Verzendt het merk naar Nederland, in hoeveel dagen, en tegen welke kosten? Als de website het niet zegt, reken er dan niet op." },
    ],
  },
  table: {
    eyebrow: "Verkrijgbaar in Nederland",
    h2: "Elke olie met een gepubliceerd polyfenolgetal, en of ze naar Nederland verzendt",
    intro: "Dezelfde producenten als in de Polyfenolindex, hier met één kolom extra: wat de eigen website over verzending naar Nederland zegt. Een lege cel betekent dat de website het niet vermeldt.",
    cols: { brand: "Merk en olie", figure: "Oleocanthal + oleaceïne · totaal (mg/kg)", method: "Methode", ships: "Verzendt naar NL", days: "Levertijd", source: "Bron" },
    shipsYes: "Ja",
    shipsNo: "Nee",
    notStated: "Niet vermeld",
    viaEu: "Ja, EU-breed",
    viaWorld: "Ja, wereldwijd",
    attimoShips: "Ja, €10, gratis vanaf 2 flessen",
    footnote: "Verzendinformatie gelezen op de website van elke producent op {checked}; de zin staat achter de bron. Polyfenolgetallen komen uit de Polyfenolindex, waar elk cijfer naar het rapport linkt. Prijzen van andere merken laten we weg: die veranderen te vaak om te drukken.",
    indexLink: "Naar de volledige Polyfenolindex",
  },
  attimo: {
    eyebrow: "ATTIMO in Nederland",
    h2: "Drie oliën van één variëteit, vroeg geoogst, binnen 3 tot 5 werkdagen in huis",
    intro: "Verzending naar Nederland kost {standard}, gratis vanaf {freeFrom}. Elke fles komt uit de laatste oogst, met het labrapport online.",
    shippingLine: "Levering in {days} werkdagen · {standard}, gratis vanaf {freeFrom}",
  },
  stockists: null,
  faq: {
    heading: "Veelgestelde vragen",
    items: [
      { question: "Verzendt ATTIMO naar Nederland?", answer: "Ja. Verzending kost €10 en is gratis vanaf 2 flessen. Bestellingen worden binnen 3 tot 5 werkdagen geleverd." },
      { question: "Hoe vergelijk ik de polyfenolgetallen van verschillende merken?", answer: "Alleen getallen uit dezelfde labmethode zijn vergelijkbaar. HPLC telt de afzonderlijke verbindingen; NMR en Folin-Ciocalteu geven een totaal dat anders is samengesteld. De zuiverste vergelijking is oleocanthal plus oleaceïne, twee benoemde moleculen die elk lab apart rapporteert. De Polyfenolindex rangschikt daarop." },
      { question: "Welke olie heeft de hoogste polyfenolwaarde die je in Nederland kunt kopen?", answer: "Dat hangt af van de methode waarmee gemeten is. De tabel hierboven toont elk gepubliceerd getal met de methode, en de kolom ernaast of het merk naar Nederland verzendt. ATTIMO Coratina 25/26 meet 847 mg/kg (HPLC), waarvan 807 mg/kg oleocanthal plus oleaceïne." },
      { question: "Kan ik ATTIMO in een winkel in Nederland kopen?", answer: "Op dit moment alleen via de webshop. Winkels die ATTIMO voeren, worden hier vermeld zodra ze er zijn." },
      { question: "Wanneer komt de nieuwe oogst?", answer: "De olijven worden in oktober groen geplukt en eind oktober geperst. Laat je e-mailadres achter op de homepage en je hoort het als eerste wanneer de nieuwe olie verzonden wordt." },
      { question: "Hoe bewaar ik een polyfenolrijke olijfolie?", answer: "Donker, koel en dicht. Licht, zuurstof en warmte breken polyfenolen af. Open de fles en gebruik ze binnen een paar maanden; dit is geen olie om te bewaren." },
    ],
  },
  closing: { h2: "Vroege oogst, één variëteit, in 3 tot 5 werkdagen in Nederland", cta: "Bekijk de oliën" },
};
