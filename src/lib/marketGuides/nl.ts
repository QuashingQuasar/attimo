import type { MarketGuideContent, ShipEvidence } from "./types";

// Shipping evidence per Index entry id, Netherlands. Filled from a page-by-page
// check of each producer's own shipping/FAQ page on 2026-10-12; "not stated"
// means the site did not say. `notes` is the Dutch one-liner shown in the table. Entry ids match src/content/polyphenol-index/*.yaml.
export const NL_SHIPPING: Record<string, ShipEvidence> = {
  "blueprint-snake-oil": { ships: "yes", basis: "worldwide statement", route: "webshop", days: "not stated", quote: "We ship internationally from multiple fulfillment locations, including warehouses in Hong Kong and Singapore", source_url: "https://blueprint.bryanjohnson.com/policies/shipping-policy", checked: "2026-10-12", notes: "Internationaal; Nederland en EU niet genoemd, geen levertijd voor de EU" },
  "kyoord-high-phenolic": { ships: "no", basis: "none", route: "none", days: "not stated", quote: "Kyoord is currently shipping to addresses in the United States and Canada.", source_url: "https://kyoord.com/policies/shipping-policy", checked: "2026-10-12", notes: "Alleen VS en Canada" },
  "laconiko-zoi": { ships: "not stated", basis: "none", route: "none", days: "not stated", quote: "", source_url: "https://laconiko.com/policies/terms-of-service", checked: "2026-10-12", notes: "Geen verzendpagina gevonden" },
  "morocco-gold": { ships: "not stated", basis: "none", route: "none", days: "not stated", quote: "Morocco Gold is available throughout the world delivered via our global distributor network.", source_url: "https://morocco-gold.com/faq/", checked: "2026-10-12", notes: "Via distributeurs; eigen verzending niet vermeld" },
  "oleum-crete-koroneiki": { ships: "no", basis: "none", route: "none", days: "not stated", quote: "Free delivery on all UAE orders.", source_url: "https://oleumcrete.ae/policies/shipping-policy", checked: "2026-10-12", notes: "Alleen Verenigde Arabische Emiraten" },
  "olio-intini-coratina": { ships: "not stated", basis: "none", route: "none", days: "not stated", quote: "Per spedizioni all'estero o richieste particolari compilate il form contatti e cercheremo di soddisfare le vostre esigenze.", source_url: "https://oliointini.it/prodotto/coratina/", checked: "2026-10-12", notes: "Buitenland op aanvraag via contactformulier" },
  "olivea-ultra-high-phenolic": { ships: "not stated", basis: "none", route: "none", days: "not stated", quote: "", source_url: "https://www.myolivea.com/policies/shipping-policy", checked: "2026-10-12", notes: "Verzendpagina noemt geen landen" },
  "olvlimits-green-machine": { ships: "yes", basis: "lists country", route: "webshop", days: "1 werkdag", quote: "Orders ship from the Netherlands", source_url: "https://olvlimits.com/en-be/policies/shipping-policy", checked: "2026-10-12", notes: "Verzendt vanuit Nederland" },
  "oro-del-desierto-picual": { ships: "not stated", basis: "none", route: "none", days: "not stated", quote: "", source_url: "https://orodeldesierto.com/aviso-legal/", checked: "2026-10-12", notes: "Geen verzendinformatie op de website gevonden" },
  "pamako-monovarietal": { ships: "not stated", basis: "none", route: "none", days: "not stated", quote: "", source_url: "https://www.pamako.gr/contact/", checked: "2026-10-12", notes: "Geen webshop; verkoop via telefoon en verkooppunten" },
  "pj-kabos-phenolic-shot": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", quote: "Free EU shipping on all orders!", source_url: "https://www.pjkabos.gr", checked: "2026-10-12", notes: "Gratis verzending in de EU; levertijd niet vermeld" },
  "rapunzel-polyphenolia": { ships: "no", basis: "none", route: "none", days: "not stated", quote: "Lieferung ausschließlich innerhalb Deutschlands und nach Österreich", source_url: "https://shop.rapunzel.de/versand-und-zahlungsbedingungen/", checked: "2026-10-12", notes: "Alleen Duitsland en Oostenrijk" },
  "sakellaropoulos-fyllikon": { ships: "not stated", basis: "none", route: "none", days: "not stated", quote: "", source_url: "https://www.bioarmonia.gr/products", checked: "2026-10-12", notes: "Geen webshop; telefonische bestelling" },
  "the-governor-limited": { ships: "no", basis: "none", route: "none", days: "not stated", quote: "We ship to England, Wales, Scotland, Northern Ireland, Guernsey, Jersey, and the Isle of Man.", source_url: "https://thegovernorevoo.co.uk/pages/shipping-policy", checked: "2026-10-12", notes: "Alleen Verenigd Koninkrijk" },
};

export const nl: MarketGuideContent = {
  lang: "nl",
  slug: "/nl/polyfenolrijke-olijfolie-kopen-nederland",
  market: "Nederland",
  updated: "13 oktober 2026",
  meta: {
    title: "Polyfenolrijke olijfolie in Nederland: wat je koopt | ATTIMO",
    description:
      "Koopgids voor polyfenolrijke olijfolie in Nederland. Welke oliën je hier kunt kopen, hoe hoog hun polyfenolgetal is en hoe dat gemeten werd, en wat levering naar Nederland kost. Bijgewerkt 13 oktober 2026.",
  },
  nav: { glance: "Keuze", criteria: "Criteria", table: "Vergelijking", oils: "Oliën", number: "Het getal", faq: "FAQ" },
  hero: {
    eyebrow: "Koopgids · Nederland",
    h1: "Polyfenolrijke olijfolie in Nederland: wat je koopt",
    lead: "Welke oliën je hier kunt bestellen, wat hun polyfenolgetal waard is, en wat levering naar Nederland kost.",
    cta: "Naar de keuze",
    ctaSecondary: "Hoe we beoordelen",
    updatedLabel: "Bijgewerkt",
    checkedLine: "Gecontroleerd op de website van elke producent",
  },
  glance: {
    eyebrow: "In één oogopslag",
    h2: "De oliën die je in Nederland kunt kopen, op volgorde",
    intro: "Score op vier criteria die hieronder staan, met het gewicht erbij. ATTIMO staat in de lijst onder dezelfde regels als de rest.",
    scoreLabel: "Score",
    buyLabel: "Kopen",
  },
  criteria: {
    eyebrow: "Hoe we beoordelen",
    h2: "Vier dingen die je wilt zien voor je bestelt",
    intro: "Je weet wat olijfolie is en je wilt een goede. Dit is het verschil tussen een goede en een die alleen zo heet.",
    items: [
      { key: "origin", title: "Een echte oogstdatum", text: "Supermarktolie heeft er meestal geen, omdat ze oliën van verschillende jaren mengt. Polyfenolen dalen vanaf de dag van persen, dus je wilt weten hoe oud de olie is en van welke olijf ze komt.", weight: 20, icon: "/icons/basket-2.svg" },
      { key: "report", title: "Een polyfenolgetal met het rapport erbij", text: "Polyfenolen zijn de stoffen die een olijfolie gezond en pittig maken. Een getal op het etiket is een claim; een labrapport dat je kunt openen is een bewijs.", weight: 30, icon: "/icons/flask.svg" },
      { key: "method", title: "Hoe dat getal gemeten is", text: "Er zijn verschillende manieren om polyfenolen te meten, en ze geven voor dezelfde olie verschillende getallen. Een getal zonder methode kun je met niets vergelijken.", weight: 20, icon: "/icons/olive.svg" },
      { key: "delivery", title: "Levering naar Nederland, zwart op wit", text: "Verzendt het merk naar Nederland, in hoeveel dagen, en zegt de website dat zelf? Zo niet, reken er niet op.", weight: 30, icon: "/icons/branch-2.svg" },
    ],
    weightNote: "Gewichten: oogst en variëteit 20%, rapport 30%, methode 20%, levering 30%. Elke score is uit de feiten in de tabel afgeleid, niet uit smaak.",
  },
  table: {
    eyebrow: "Vergelijking",
    h2: "Alle oliën naast elkaar",
    intro: "Alleen oliën die je in Nederland kunt kopen. Twee kolommen voor het polyfenolgetal: de twee hoofdstoffen apart, en het totaal zoals de producent het publiceert.",
    cols: { oil: "Olie", compounds: "Oleocanthal + oleaceïne", total: "Totaal", method: "Methode", buy: "Kopen in Nederland", days: "Levertijd", score: "Score" },
    buy: { webshop: "Webshop, verzendt naar Nederland", webshopEu: "Webshop, verzendt EU-breed", webshopWorld: "Webshop, verzendt internationaal", retailer: "Via winkel", distributor: "Via distributeur", request: "Op aanvraag" },
    footnote: "mg/kg. Verzendinformatie gelezen op de website van elke producent op {checked}; de zin staat achter de bron. Polyfenolgetallen komen uit de Polyfenolindex, waar elk cijfer naar het rapport linkt. Prijzen van andere merken drukken we niet: die veranderen te vaak.",
    indexLink: "Volledige Polyfenolindex",
    methodsLink: "Waarom methodes verschillen",
  },
  oils: {
    eyebrow: "Per olie",
    h2: "Wat elke olie wel en niet laat zien",
    intro: "Dezelfde vier criteria, nu per olie uitgeschreven. Plus en min komen rechtstreeks uit wat de producent publiceert.",
    labels: { score: "Score", pros: "Plus", cons: "Min", forWho: "Voor wie", standsOut: "Waarom ze opvalt", buy: "Kopen", price: "Prijs", source: "Bron", priceOnSite: "Prijs op de website van het merk" },
    pros: { report: "Labrapport online in te zien", hplc: "Oleocanthal en oleaceïne apart gerapporteerd", method: "Methode benoemd", origin: "Variëteit en oogst benoemd", shipsNl: "Verzendt naar Nederland, {days}", shipsEu: "Verzendt EU-breed" },
    cons: { noReport: "Geen rapport te openen", noMethod: "Methode niet vermeld", totalOnly: "Alleen een totaal, geen afzonderlijke stoffen", noDays: "Levertijd naar Nederland niet vermeld", nlNotNamed: "Nederland niet apart genoemd", noOrigin: "Variëteit of oogst niet benoemd" },
    perOil: {
      "attimo-coratina": { forWho: "Wie olijfolie als dagelijks shotje neemt, of een krachtige, bittere, peperige olie wil om af te werken.", standsOut: "Het rapport, de methode, de variëteit en de oogstdatum staan allemaal online, en de olie wordt binnen 3 tot 5 werkdagen in Nederland geleverd." },
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
      { title: "Een blend van meerdere jaren", text: "De verse olie in de fles wordt verdund door de oude." },
    ],
  },
  attimo: {
    eyebrow: "ATTIMO in Nederland",
    h2: "Drie oliën van één variëteit, vroeg geoogst, binnen 3 tot 5 werkdagen in huis",
    intro: "Verzending naar Nederland kost {standard}, gratis vanaf {freeFrom}. Elke fles komt uit de laatste oogst, met het labrapport online.",
  },
  faq: {
    heading: "Veelgestelde vragen",
    items: [
      { question: "Verzendt ATTIMO naar Nederland?", answer: "Ja. Verzending kost €10 en is gratis vanaf 2 flessen. Bestellingen worden binnen 3 tot 5 werkdagen geleverd." },
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
