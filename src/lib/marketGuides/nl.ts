import type { MarketGuideContent, ShipEvidence } from "./types";

// Shipping evidence per Index entry id, Netherlands. Filled from a page-by-page
// check of each producer's own shipping/FAQ page on 2026-10-12; "not stated"
// means the site did not say. `notes` is the Dutch one-liner shown in the table. Entry ids match src/content/polyphenol-index/*.yaml.
export const NL_SHIPPING: Record<string, ShipEvidence> = {
  "blueprint-snake-oil": { ships: "yes", basis: "lists country", route: "retailer", seller: "BONO", cost: "€4,95", free_from: "€35", days: "volgende werkdag", quote: "Voor de Europese markt heeft Blueprint gekozen voor BONO als officiële partner.", source_url: "https://bono.nl/category/merken/blueprint-bryan-johnson", checked: "2026-10-13", notes: "Via BONO, officiële Europese partner, op voorraad" },
  "kyoord-high-phenolic": { ships: "no", basis: "none", route: "none", days: "not stated", quote: "Kyoord is currently shipping to addresses in the United States and Canada.", source_url: "https://kyoord.com/policies/shipping-policy", checked: "2026-10-12", notes: "Alleen VS en Canada" },
  "laconiko-zoi": { ships: "not stated", basis: "none", route: "none", days: "not stated", quote: "", source_url: "https://laconiko.com/", checked: "2026-10-13", notes: "Alleen winkels in de VS en Canada; geen route naar Nederland gevonden" },
  "morocco-gold": { ships: "yes", basis: "EU-wide statement", route: "webshop", cost: "gratis", free_from: "", days: "not stated", quote: "Standard delivery within the USA, Canada, Australia, Europe & UK – Free", source_url: "https://morocco-gold.com/shop/morocco-gold-extra-virgin-olive-oil/", checked: "2026-10-13", notes: "Gratis verzending naar Europa; levertijd niet per land vermeld" },
  "oleum-crete-koroneiki": { ships: "no", basis: "none", route: "none", days: "not stated", quote: "Free delivery on all UAE orders.", source_url: "https://oleumcrete.ae/policies/shipping-policy", checked: "2026-10-12", notes: "Alleen Verenigde Arabische Emiraten" },
  "olio-intini-coratina": { ships: "not stated", basis: "none", route: "request", cost: "not stated", free_from: "", days: "not stated", quote: "Per spedizioni all'estero o richieste particolari compilate il form contatti e cercheremo di soddisfare le vostre esigenze.", source_url: "https://oliointini.it/prodotto/coratina/", checked: "2026-10-13", notes: "Buitenland op aanvraag via het contactformulier" },
  "olivea-ultra-high-phenolic": { ships: "yes", basis: "worldwide statement", route: "webshop", cost: "$10", free_from: "", days: "not stated", quote: "International shipping available for a flat rate of $10", source_url: "https://www.myolivea.com/pages/llms-full-txt", checked: "2026-10-13", notes: "Internationaal vanuit de VS; Europa niet genoemd" },
  "olvlimits-green-machine": { ships: "yes", basis: "lists country", route: "webshop", cost: "not stated", free_from: "€50", days: "1 werkdag", quote: "Orders ship from the Netherlands", source_url: "https://olvlimits.com/en-be/policies/shipping-policy", checked: "2026-10-12", notes: "Verzendt vanuit Nederland" },
  "oro-del-desierto-picual": { ships: "yes", basis: "lists country", route: "retailer", seller: "Oliva Oliva", cost: "€11,50 excl. btw", free_from: "", days: "3–6 werkdagen", quote: "Zone S: Belgium, France, Luxembourg, Monaco, Netherlands", source_url: "https://olivaoliva.com/en/content/9-shipping-costs", checked: "2026-10-13", notes: "Via Spaanse speciaalzaak Oliva Oliva; Nederland staat in hun verzendzones" },
  "pamako-monovarietal": { ships: "yes", basis: "EU-wide statement", route: "webshop", seller: "Pamako UK", cost: "not stated", free_from: "", days: "not stated", quote: "Shipping Across the UK & Europe", source_url: "https://www.pamako.co.uk/policies/shipping-policy", checked: "2026-10-13", notes: "De Griekse site heeft geen webshop; de Britse webshop van Pamako verzendt naar Europa" },
  "pj-kabos-phenolic-shot": { ships: "yes", basis: "EU-wide statement", route: "webshop", cost: "gratis", free_from: "", days: "not stated", quote: "Free EU shipping on all orders!", source_url: "https://www.pjkabos.gr", checked: "2026-10-12", notes: "Gratis verzending in de EU; levertijd niet vermeld" },
  "rapunzel-polyphenolia": { ships: "no", basis: "none", route: "none", days: "not stated", quote: "Lieferung ausschließlich innerhalb Deutschlands und nach Österreich", source_url: "https://shop.rapunzel.de/versand-und-zahlungsbedingungen/", checked: "2026-10-12", notes: "Alleen Duitsland en Oostenrijk" },
  "sakellaropoulos-fyllikon": { ships: "not stated", basis: "none", route: "none", days: "not stated", quote: "", source_url: "https://www.bioarmonia.gr/products", checked: "2026-10-13", notes: "Alleen telefonische bestelling in Griekenland; geen route naar Nederland gevonden" },
  "the-governor-limited": { ships: "no", basis: "none", route: "none", days: "not stated", quote: "We ship to England, Wales, Scotland, Northern Ireland, Guernsey, Jersey, and the Isle of Man.", source_url: "https://thegovernorevoo.co.uk/pages/shipping-policy", checked: "2026-10-12", notes: "Alleen Verenigd Koninkrijk" },
};

export const nl: MarketGuideContent = {
  lang: "nl",
  slug: "/nl/polyfenolrijke-olijfolie-kopen-nederland",
  market: "Nederland",
  country: "Netherlands",
  daysUnit: "werkdagen",
  siblings: [{ href: "/nl/polyfenolrijke-olijfolie-kopen-belgie", label: "Koop je in België? Naar de Belgische gids →" }],
  updated: "13 oktober 2026",
  meta: {
    title: "Polyfenolrijke olijfolie kopen in Nederland | ATTIMO",
    description:
      "Koopgids voor polyfenolrijke olijfolie in Nederland. Welke oliën je er kunt kopen, hoe hoog hun polyfenolgetal is en hoe dat gemeten werd, en wat verzending naar Nederland kost. Bijgewerkt {updated}.",
  },
  nav: { glance: "Oliën", criteria: "Criteria", table: "Vergelijking", oils: "Per olie", number: "Het getal", faq: "FAQ" },
  hero: {
    eyebrow: "Koopgids · Nederland",
    h1: "Polyfenolrijke olijfolie kopen in Nederland",
    lead: "Welke polyfenolrijke olijfoliën je in Nederland kunt kopen, en waar je op let voor je bestelt.",
    cta: "Bekijk de oliën",
    ctaSecondary: "Waar je op let",
    updatedLabel: "Bijgewerkt",
    checkedLine: "Gecontroleerd op de website van elke producent",
  },
  glance: {
    eyebrow: "Wat je kunt kopen",
    h2: "Polyfenolrijke olijfoliën die je in Nederland kunt kopen",
    introPre: "Alleen oliën met een gepubliceerd polyfenolgetal, in de volgorde van de ",
    introLink: "Polyfenolindex",
    introPost: ".",
    labels: { attimoName: "ATTIMO Coratina", attimoSub: "België · ook Nocellara en Picual", price: "Prijs", priceNote: "prijs van de producent, {verified}", method: "Gemeten met", methodLink: "wat betekent dit?", compounds: "Oleocanthal + oleaceïne", total: "Totaal polyfenolen", buy: "Kopen", cost: "Verzendkosten", days: "Levertijd", source: "Bron", notStated: "niet vermeld", attimoAlso: "Ook {nocellara} en {picual}" },
  },
  criteria: {
    eyebrow: "Hoe we beoordelen",
    h2: "Vier dingen die je wilt zien voor je bestelt",
    intro: "Je weet wat olijfolie is en je wilt een goede. Dit is het verschil tussen een goede en een die alleen zo heet.",
    items: [
      { key: "origin", title: "Een echte oogstdatum", text: "Supermarktolie heeft er meestal geen, omdat ze oliën van verschillende jaren mengt. Polyfenolen dalen vanaf de dag van persen, dus je wilt weten hoe oud de olie is en van welke olijf ze komt.", weight: 20, icon: "/icons/basket-2.svg" },
      { key: "report", title: "Een polyfenolgetal met het rapport erbij", text: "Polyfenolen zijn de stoffen die een olijfolie gezond en pittig maken. Een getal op het etiket is een claim; een labrapport dat je kunt openen is een bewijs.", weight: 30, icon: "/icons/flask.svg" },
      { key: "method", title: "Hoe dat getal gemeten is", text: "Er zijn verschillende manieren om polyfenolen te meten, en ze geven voor dezelfde olie verschillende getallen. Een getal zonder methode kun je met niets vergelijken.", weight: 20, icon: "/icons/olive.svg" },
      { key: "delivery", title: "Verzending naar Nederland", text: "Verzendt het merk naar Nederland, in hoeveel dagen, en zegt de website dat zelf? Zo niet, reken er niet op.", weight: 30, icon: "/icons/branch-2.svg" },
    ],
  },
  table: {
    eyebrow: "Vergelijking",
    h2: "Alle beschikbare oliën vergeleken",
    intro: "Dezelfde oliën, met de score op de vier criteria hierboven. Twee kolommen voor het polyfenolgetal: de twee hoofdstoffen apart, en het totaal zoals de producent het publiceert.",
    cols: { oil: "Olie", compounds: "Oleocanthal + oleaceïne", total: "Totaal", method: "Methode", price: "Prijs", buy: "Kopen in Nederland", days: "Levertijd", score: "Score" },
    buy: { webshop: "Webshop, verzendt naar Nederland", webshopEu: "Webshop, verzendt EU-breed", webshopWorld: "Webshop, verzendt internationaal", retailer: "Via winkel", distributor: "Via distributeur", request: "Op aanvraag" },
    footnote: "mg/kg. Verzendinformatie gelezen op de website van elke verkoper op {checked}; de zin staat achter de bron. Polyfenolgetallen komen uit de Polyfenolindex, waar elk cijfer naar het rapport linkt. Prijzen zijn die van de producent, gelezen in {verified}.",
    links: {
      index: { title: "De Polyfenolindex", text: "Elke olijfolie ter wereld die een polyfenolgetal publiceert, op één pagina, gerangschikt op de twee hoofdstoffen." },
      methods: { title: "Waarom methodes verschillen", text: "HPLC, NMR en Folin-Ciocalteu geven voor dezelfde olie andere getallen. Wat elke methode meet, en wat je met elkaar kunt vergelijken." },
    },
  },
  oils: {
    eyebrow: "Per olie",
    h2: "Wat elke olie wel en niet laat zien",
    intro: "Dezelfde vier criteria, nu per olie uitgeschreven. Plus en min komen rechtstreeks uit wat de producent publiceert.",
    labels: { score: "Score", pros: "Plus", cons: "Min", forWho: "Voor wie", standsOut: "Waarom ze opvalt", buy: "Kopen", price: "Prijs", source: "Bron", priceOnSite: "niet vermeld" },
    pros: { report: "Labrapport online in te zien", hplc: "Oleocanthal en oleaceïne apart gerapporteerd", method: "Methode benoemd", origin: "Variëteit en oogst benoemd", shipsNl: "Verzendt naar Nederland, {days}", shipsEu: "Verzendt EU-breed" },
    cons: { nmr: "Totaal gemeten met NMR: telt een lange lijst fenolische stoffen voor hun volle gewicht mee, ook zware afgeleide moleculen, en valt daardoor voor dezelfde olie 20 tot 48% hoger uit dan HPLC. Vergelijk op oleocanthal + oleaceïne.", shipping: "Verzending {cost}", shippingFree: "Verzending {cost}, gratis vanaf {free}", noReport: "Geen rapport te openen", noMethod: "Methode niet vermeld", totalOnly: "Alleen een totaal, geen afzonderlijke stoffen", noDays: "Levertijd naar Nederland niet vermeld", nlNotNamed: "Nederland niet apart genoemd", noOrigin: "Variëteit of oogst niet benoemd" },
    perOil: {
      "attimo-coratina": { cons: ["Nog geen winkels in {market}", "Picual nog met Folin-Ciocalteu gemeten, niet met HPLC"], forWho: "Wie olijfolie als dagelijks shotje neemt, of een krachtige, bittere, peperige olie wil om af te werken.", standsOut: "Het rapport, de methode, de variëteit en de oogstdatum staan allemaal online, en de olie is binnen {daysText} in {market}." },
      "olvlimits-green-machine": { forWho: "Wie morgen al een fles in huis wil: Nederlands merk, verzending binnen één werkdag." },
      "pj-kabos-phenolic-shot": { forWho: "Wie een Griekse olie met een hoog totaal zoekt en de levertijd niet belangrijk vindt." },
    },
  },
  number: {
    eyebrow: "Het getal",
    h2: "Wat een polyfenolgetal betekent, in drie stappen",
    intro: "Elk merk in deze gids drukt een getal in milligram per kilo. Dit is hoe je het leest.",
    steps: [
      { title: "Het is één getal voor een hele familie stoffen", text: "Polyfenolen zijn tientallen verschillende verbindingen. Twee daarvan, oleocanthal en oleaceïne, zijn het best onderzocht en zorgen voor de peperige prikkel achter in je keel." },
      { title: "Verschillende methodes geven verschillende getallen", text: "Een lab kan elke stof apart tellen (HPLC) of de hele familie in één keer schatten (NMR, Folin-Ciocalteu). Dezelfde olie leest dan twee verschillende totalen. Geen van beide is fout; ze meten iets anders." },
      { title: "Vergelijk dus alleen wat vergelijkbaar is", text: "Twee totalen uit dezelfde methode, of beter: oleocanthal plus oleaceïne, want die twee stoffen rapporteert elk lab apart. Daarom staan ze in deze gids in een eigen kolom." },
    ],
    cta: "Uitleg per methode",
  },
  avoid: {
    eyebrow: "Wat je laat staan",
    h2: "Vier signalen om een fles terug te zetten",
    items: [
      { title: "Geen oogstdatum", text: "Alleen een houdbaarheidsdatum betekent dat je niet weet hoe oud de olie is." },
      { title: "\"Rijk aan polyfenolen\" zonder getal", text: "Een claim zonder milligram per kilo is marketing." },
      { title: "Een getal zonder methode of rapport", text: "Je kunt het met niets vergelijken en niet controleren." },
      { title: "Alleen \"extra vierge\" als kwaliteitsclaim", text: "Extra vierge is de instapeis van de categorie, geen keurmerk. Het zegt niets over versheid of polyfenolen." },
    ],
  },
  attimo: {
    eyebrow: "ATTIMO in Nederland",
    h2: "Drie monocultivar-oliën, vroeg geoogst, binnen {daysText} in huis",
    intro: "Vers van de laatste oogst, met het labrapport online. Verzending naar Nederland {standard}, gratis vanaf {freeFrom}, in {days}.",
  },
  faq: {
    heading: "Veelgestelde vragen",
    items: [
      { question: "Verzendt ATTIMO naar Nederland?", answer: "Ja. Verzending kost {standard} en is gratis vanaf {freeFrom}. Bestellingen zijn binnen {daysText} in huis." },
      { question: "Welke olie in Nederland heeft het hoogste polyfenolgetal?", answer: "Dat hangt af van hoe er gemeten is. De tabel toont elk gepubliceerd getal met de methode erbij, en de twee hoofdstoffen in een eigen kolom. ATTIMO Coratina 25/26 meet 847 mg/kg (HPLC), waarvan 807 mg/kg oleocanthal plus oleaceïne." },
      { question: "Hoe vergelijk ik getallen van verschillende merken?", answer: "Alleen getallen uit dezelfde methode zijn vergelijkbaar. De zuiverste vergelijking is oleocanthal plus oleaceïne, twee stoffen die elk lab apart rapporteert." },
      { question: "Kan ik ATTIMO in een winkel in Nederland kopen?", answer: "Op dit moment via de webshop. Winkels die ATTIMO voeren worden hier vermeld zodra ze er zijn." },
      { question: "Wanneer komt de nieuwe oogst?", answer: "De olijven worden in oktober groen geplukt en eind oktober geperst. Laat je e-mailadres achter op de homepage en je hoort het als eerste." },
      { question: "Hoe bewaar ik een polyfenolrijke olijfolie?", answer: "Donker, koel en dicht. Licht, zuurstof en warmte breken polyfenolen af. Gebruik een geopende fles binnen een paar maanden." },
    ],
  },
  verdict: {
    eyebrow: "Ons advies",
    h2: "Kies de olie waarvan je alles kunt controleren",
    body: "Een hoog getal is pas iets waard met een rapport, een methode en een oogstdatum erbij, en met een merk dat zegt dat het naar Nederland verzendt. In deze gids voldoet ATTIMO Coratina aan alle vier; OlvLimits en PJ Kabos aan drie.",
    cta: "Bekijk de ATTIMO-oliën",
  },
};
