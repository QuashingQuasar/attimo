import type { MarketGuideContent, ShipEvidence } from "./types";

// Shipping evidence per Index entry id, Belgium (Dutch page). Filled from a page-by-page
// check of each producer's own shipping/FAQ page on 2026-10-12; "not stated"
// means the site did not say. `notes` is the Dutch one-liner shown in the table. Entry ids match src/content/polyphenol-index/*.yaml.
export const BE_NL_SHIPPING: Record<string, ShipEvidence> = {
  "blueprint-snake-oil": { ships: "yes", basis: "lists country", route: "retailer", seller: "BONO", days: "volgende werkdag", cost: "€4,95", free_from: "€35", quote: "Voor België geldt: bestel voor 23:00 uur, en ontvang je producten de volgende dag.", source_url: "https://support.bono.nl/nl/articles/8979368-wat-is-jullie-levertijd", checked: "2026-10-13", notes: "Via BONO, officiële Europese partner; voor 23:00 besteld, volgende dag geleverd" },
  "olvlimits-green-machine": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "2–6 werkdagen", cost: "not stated", free_from: "€50", quote: "European Union (EU): 2–6 business days", source_url: "https://olvlimits.com/en-be/policies/shipping-policy", checked: "2026-10-13", notes: "Verzendt vanuit Nederland; België niet apart genoemd, EU 2 tot 6 werkdagen" },
  "oro-del-desierto-picual": { ships: "yes", basis: "lists country", route: "retailer", seller: "Oliva Oliva", days: "3–6 werkdagen", cost: "€11,50 excl. btw", quote: "Zone S: Belgium, France, Luxembourg, Monaco, Netherlands", source_url: "https://olivaoliva.com/en/content/9-shipping-costs", checked: "2026-10-13", notes: "Via Spaanse speciaalzaak Oliva Oliva; België staat in hun verzendzones" },
  "pamako-monovarietal": { ships: "yes", basis: "EU-wide statement", route: "webshop", seller: "Pamako UK", days: "not stated", cost: "not stated", quote: "Shipping Across the UK & Europe", source_url: "https://www.pamako.co.uk/policies/shipping-policy", checked: "2026-10-13", notes: "De Griekse site heeft geen webshop; de Britse webshop van Pamako verzendt naar Europa" },
  "pj-kabos-phenolic-shot": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "gratis", quote: "Free EU shipping on all orders!", source_url: "https://www.pjkabos.gr", checked: "2026-10-13", notes: "Gratis verzending in de EU; levertijd niet vermeld" },
  "morocco-gold": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "gratis", quote: "Standard delivery within the USA, Canada, Australia, Europe & UK – Free", source_url: "https://morocco-gold.com/shop/morocco-gold-extra-virgin-olive-oil/", checked: "2026-10-13", notes: "Gratis verzending naar Europa; levertijd niet per land vermeld" },
  "olivea-ultra-high-phenolic": { ships: "yes", basis: "worldwide statement", route: "webshop", days: "not stated", cost: "$10", quote: "International shipping available for a flat rate of $10", source_url: "https://www.myolivea.com/pages/llms-full-txt", checked: "2026-10-13", notes: "Internationaal vanuit de VS; Europa niet genoemd" },
  "olio-intini-coratina": { ships: "not stated", basis: "none", route: "request", days: "not stated", cost: "not stated", quote: "Per spedizioni all'estero o richieste particolari compilate il form contatti e cercheremo di soddisfare le vostre esigenze.", source_url: "https://oliointini.it/prodotto/coratina/", checked: "2026-10-13", notes: "Buitenland op aanvraag via het contactformulier" },
  "kyoord-high-phenolic": { ships: "no", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "Kyoord is currently shipping to addresses in the United States and Canada.", source_url: "https://kyoord.com/policies/shipping-policy", checked: "2026-10-13", notes: "Alleen VS en Canada" },
  "laconiko-zoi": { ships: "not stated", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "", source_url: "https://laconiko.com/", checked: "2026-10-13", notes: "Geen route naar België gevonden" },
  "oleum-crete-koroneiki": { ships: "no", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "Free delivery on all UAE orders.", source_url: "https://oleumcrete.ae/policies/shipping-policy", checked: "2026-10-13", notes: "Alleen Verenigde Arabische Emiraten" },
  "rapunzel-polyphenolia": { ships: "no", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "Lieferung ausschließlich innerhalb Deutschlands und nach Österreich", source_url: "https://shop.rapunzel.de/versand-und-zahlungsbedingungen/", checked: "2026-10-13", notes: "Alleen Duitsland en Oostenrijk" },
  "sakellaropoulos-fyllikon": { ships: "not stated", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "", source_url: "https://www.bioarmonia.gr/products", checked: "2026-10-13", notes: "Alleen telefonische bestelling in Griekenland" },
  "the-governor-limited": { ships: "no", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "We ship to England, Wales, Scotland, Northern Ireland, Guernsey, Jersey, and the Isle of Man.", source_url: "https://thegovernorevoo.co.uk/pages/shipping-policy", checked: "2026-10-13", notes: "Alleen Verenigd Koninkrijk" },
  "olive-oil-club-picholine": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "not stated", free_from: "€100", quote: "We ship all over Europe - Free delivery above €100", source_url: "https://oliveoilclub.myshopify.com/", checked: "2026-10-15", notes: "Verzendt door heel Europa, gratis vanaf €100; kosten daaronder en levertijd niet vermeld; uitverkocht op 15 oktober 2026" },
  "deliba-ottobratico": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "not stated", quote: "Orders to supported destinations in Europe and the United Kingdom are fulfilled from Italy", source_url: "https://delibaoliveoil.com/policies/shipping-policy", checked: "2026-10-15", notes: "Levert in Europa vanuit Italië; landen, kosten en levertijd pas zichtbaar bij het afrekenen; uitverkocht op 15 oktober 2026" },
  "oleaphen-high-phenolic": { ships: "not stated", basis: "none", route: "none", days: "not stated", quote: "UK orders go through Oleaphen's UK partner at highphenolic.co.uk.", source_url: "https://www.highphenolic.com/buy-high-phenolic-olive-oil", checked: "2026-10-15", notes: "Geen verzendinformatie op de website; alleen een Britse partner voor het Verenigd Koninkrijk" },
};

export const beNl: MarketGuideContent = {
  lang: "nl",
  slug: "/nl/polyfenolrijke-olijfolie-kopen-belgie",
  market: "België",
  country: "Belgium",
  daysUnit: "werkdagen",
  siblings: [{ href: "/nl/polyfenolrijke-olijfolie-kopen-nederland", label: "Koop je in Nederland? Naar de Nederlandse gids →" }, { href: "/fr/huile-olive-riche-polyphenols-acheter-belgique", label: "En français →" }],
  hreflangs: [{ hreflang: "nl-BE", href: "https://attimo-oil.com/nl/polyfenolrijke-olijfolie-kopen-belgie" }, { hreflang: "fr-BE", href: "https://attimo-oil.com/fr/huile-olive-riche-polyphenols-acheter-belgique" }],
  updated: "13 oktober 2026",
  meta: {
    title: "Polyfenolrijke olijfolie kopen in België | ATTIMO",
    description:
      "Koopgids voor polyfenolrijke olijfolie in België. Welke oliën je er kunt kopen, hoe hoog hun polyfenolgetal is en hoe dat gemeten werd, en wat verzending naar België kost. Bijgewerkt {updated}.",
  },
  nav: { glance: "Oliën", criteria: "Criteria", table: "Vergelijking", oils: "Per olie", number: "Het getal", faq: "FAQ" },
  hero: {
    eyebrow: "Koopgids · België",
    h1: "Polyfenolrijke olijfolie kopen in België",
    lead: "Elke polyfenolrijke olijfolie die je in België kunt bestellen, vergeleken op polyfenolen, prijs en verzending.",
    cta: "Bekijk de oliën",
    ctaSecondary: "Waar je op let",
    updatedLabel: "Bijgewerkt",
    checkedLine: "Gegevens van de eigen website van elke producent",
  },
  glance: {
    eyebrow: "",
    h2: "{n} oliën met een gepubliceerd polyfenolgetal, de rijkste aan oleocanthal en oleaceïne eerst",
    introPre: "Dezelfde volgorde als de ",
    introLink: "Polyfenolindex",
    introPost: ". Oleocanthal en oleaceïne zijn de twee best onderzochte polyfenolen. Labs meten ze op dezelfde manier, met welke methode ook. Oliën die alleen een totaal publiceren, staan achteraan.",
    labels: { value: "€ per 100 mg oleocanthal + oleaceïne", attimoName: "ATTIMO Coratina", attimoSub: "Belgisch merk · ook Nocellara en Picual", price: "Prijs", priceNote: "prijs van de producent, {verified}", method: "Gemeten met", methodLink: "wat betekent dit?", compounds: "Oleocanthal + oleaceïne", total: "Totaal polyfenolen", buy: "Kopen", cost: "Verzendkosten", days: "Levertijd", source: "Bron", notStated: "niet vermeld", attimoAlso: "Ook {nocellara} en {picual}" },
  },
  criteria: {
    eyebrow: "Hoe we beoordelen",
    h2: "Een goede polyfenolrijke olie vermeldt oogstdatum, labrapport, meetmethode en verzending",
    intro: "",
    items: [
      { key: "report", title: "Een labrapport dat je kunt openen", text: "Polyfenolen zijn de stoffen die olijfolie bitter en peperig maken. De meeste onderzochte gezondheidseffecten van olijfolie komen op hun rekening. Een getal op het etiket is een claim. Met een labrapport waarop de naam van het lab staat, kun je die claim nagaan.", weight: 30, icon: "/icons/flask.svg" },
      { key: "delivery", title: "Verzending naar je land", text: "Veel polyfenolrijke merken verkopen alleen in de Verenigde Staten. De website van de verkoper zelf hoort je land te noemen, of te zeggen dat hij in de hele EU levert, met de verzendkosten en de levertijd erbij.", weight: 30, icon: "/icons/branch-2.svg" },
      { key: "method", title: "De meetmethode naast het getal", text: "Labs meten polyfenolen op verschillende manieren. Dezelfde olie kan met de ene methode 20 tot 48% hoger uitkomen dan met de andere. Een getal zonder methode kun je dus niet vergelijken.", weight: 20, icon: "/icons/olive.svg" },
      { key: "origin", title: "Een oogstdatum en de naam van de variëteit", text: "Polyfenolen nemen af vanaf de dag dat de olie geperst wordt. De oogstdatum vertelt je dus hoeveel er nog over is. Supermarktolie vermeldt die zelden, omdat er oliën van verschillende oogsten in gemengd zijn.", weight: 20, icon: "/icons/basket-2.svg" },
    ],
  },
  table: {
    eyebrow: "Vergelijking",
    h2: "Vergelijk de oliën op polyfenolen, prijs en verzending",
    intro: "Klik op een kolom om erop te sorteren. Klik op een olie om de details te openen.",
    footnotes: [
      "Polyfenolen in mg/kg, uit het labrapport van elke producent.",
      "Prijzen zijn die van de producent zelf, nagekeken in {verified}. Prijzen in dollar en pond zijn omgerekend naar euro tegen de koers van de Europese Centrale Bank.",
      "Verzendkosten zoals vermeld op de website van de verkoper op {checked}.",
    ],
    cols: { oil: "Olie", compounds: "Oleocanthal + oleaceïne", total: "Totaal polyfenolen", method: "Meetmethode", price: "Prijs per 500 ml", value: "Prijs per 100 mg oleocanthal + oleaceïne", buy: "Kopen in België", days: "Levertijd", score: "Score" },
    buy: { webshop: "Webshop, verzendt naar België", webshopEu: "Webshop, verzendt EU-breed", webshopWorld: "Webshop, verzendt internationaal", retailer: "Via winkel", distributor: "Via distributeur", request: "Op aanvraag" },
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
    pros: { report: "Labrapport online in te zien", hplc: "Oleocanthal en oleaceïne apart gerapporteerd", method: "Methode benoemd", origin: "Variëteit en oogst benoemd", shipsNl: "Verzendt naar België, {days}", shipsEu: "Verzendt EU-breed" },
    cons: { nmr: "Totaal gemeten met NMR: telt een lange lijst fenolische stoffen voor hun volle gewicht mee, ook zware afgeleide moleculen, en valt daardoor voor dezelfde olie 20 tot 48% hoger uit dan HPLC. Vergelijk op oleocanthal + oleaceïne.", shipping: "Verzending {cost}", shippingFree: "Verzending {cost}, gratis vanaf {free}", noReport: "Geen rapport te openen", noMethod: "Methode niet vermeld", totalOnly: "Alleen een totaal, geen afzonderlijke stoffen", noDays: "Levertijd naar België niet vermeld", nlNotNamed: "België niet apart genoemd", noOrigin: "Variëteit of oogst niet benoemd" },
    perOil: {
      "attimo-coratina": { cons: ["Picual nog met Folin-Ciocalteu gemeten, niet met HPLC"], forWho: "Wie olijfolie als dagelijks shotje neemt, of een krachtige, bittere, peperige olie wil om af te werken.", standsOut: "Het rapport, de methode, de variëteit en de oogstdatum staan allemaal online, en de olie is binnen {daysText} in {market}." },
      "olvlimits-green-machine": { forWho: "Wie de fles snel wil: Nederlands merk, verzending naar België volgens hun verzendpagina." },
      "pj-kabos-phenolic-shot": { forWho: "Wie een Griekse olie met een hoog totaal zoekt en de levertijd niet belangrijk vindt." },
    },
  },
  number: {
    eyebrow: "Het getal",
    h2: "Hoe je een polyfenolgetal leest",
    intro: "Een polyfenolgetal is het aantal milligram polyfenolen in een kilo olie. Wat het betekent, hangt af van twee dingen: welke stoffen er geteld zijn, en hoe.",
    steps: [
      { title: "Het totaal telt tientallen stoffen op", text: "Twee daarvan, oleocanthal en oleaceïne, zijn het best onderzocht. Oleocanthal geeft de peperige prikkel achter in je keel." },
      { title: "De meetmethode verandert het totaal", text: "NMR telt een langere lijst stoffen mee dan HPLC en komt daardoor voor dezelfde olie hoger uit. Beide getallen kloppen." },
      { title: "Oleocanthal en oleaceïne vergelijk je ongeacht de methode", text: "Labs meten deze twee stoffen op dezelfde manier. Hun uitkomsten liggen binnen ongeveer 10% van elkaar. Zo zijn ze de eerlijkste maatstaf om oliën te vergelijken die met verschillende methodes gemeten zijn." },
    ],
    cta: "Hoe elke meetmethode werkt",
    visual: { title: "Verschillende methodes geven verschillende polyfenolgetallen", caption: "Beide totalen en het getal voor oleocanthal + oleaceïne komen uit de twee certificaten die de producent voor dezelfde olie publiceerde.", compounds: "Oleocanthal + oleaceïne, NMR" },
  },
  avoid: {
    eyebrow: "Wat je laat staan",
    h2: "Vier signalen om een fles terug te zetten",
    items: [
      { title: "Geen oogstdatum", text: "Een houdbaarheidsdatum alleen zegt niet hoe oud de olie is." },
      { title: "\"Rijk aan polyfenolen\" zonder getal", text: "Zonder milligram per kilo kun je de claim niet controleren of vergelijken." },
      { title: "Een getal zonder methode of rapport", text: "Je kunt het niet met andere oliën vergelijken, en ook niet controleren." },
      { title: "Alleen \"extra vierge\" als kwaliteitsclaim", text: "Extra vierge is de minimumeis van de categorie. Het zegt niets over versheid of polyfenolen." },
    ],
  },
  attimo: {
    eyebrow: "ATTIMO in België",
    h2: "Drie monocultivar-oliën, vroeg geoogst, binnen {daysText} in huis",
    intro: "Vers van de laatste oogst, met het labrapport online. Verzending in België {standard}, gratis vanaf {freeFrom}, in {days}.",
  },
  faq: {
    heading: "Veelgestelde vragen",
    items: [
      { question: "Levert ATTIMO in België?", answer: "Ja. Verzending kost {standard} en is gratis vanaf {freeFrom}. Bestellingen zijn binnen {daysText} in huis." },
      { question: "Welke olie in België heeft het hoogste polyfenolgetal?", answer: "Dat hangt af van hoe er gemeten is. De tabel toont elk gepubliceerd getal met de methode erbij, en de twee hoofdstoffen in een eigen kolom. ATTIMO Coratina 25/26 meet 847 mg/kg (HPLC), waarvan 807 mg/kg oleocanthal plus oleaceïne." },
      { question: "Hoe vergelijk ik verschillende merken?", answer: "Zoals deze gids het doet. Eerst een echte oogstdatum op de fles, zodat je weet hoe oud de olie is. Dan een polyfenolgetal met het labrapport erachter, en de methode waarmee dat is gemeten, want verschillende methodes geven verschillende getallen voor dezelfde olie. Verschillen de methodes, vergelijk dan op oleocanthal + oleaceïne, want elk lab rapporteert die apart. Dan of het merk naar {market} verzendt, in hoeveel dagen en tegen welke kosten, in eigen woorden." },
      { question: "Kan ik ATTIMO in een winkel in België kopen?", answer: "Via de webshop, en bij een aantal winkels. De lijst met verkooppunten volgt hier." },
      { question: "Wanneer komt de nieuwe oogst?", answer: "De olijven worden in oktober groen geplukt en eind oktober geperst. Laat je e-mailadres achter op de homepage en je hoort het als eerste." },
      { question: "Hoe bewaar ik een polyfenolrijke olijfolie?", answer: "Donker, koel en dicht. Licht, zuurstof en warmte breken polyfenolen af. Gebruik een geopende fles binnen een paar maanden." },
    ],
  },
  verdict: {
    eyebrow: "Ons advies",
    h2: "Kies de olie waarvan je alles kunt controleren",
    body: "Een hoog getal is pas iets waard met een rapport, een methode en een oogstdatum erbij, en met een merk dat zegt dat het naar België verzendt. In deze gids voldoet ATTIMO Coratina aan alle vier; OlvLimits en PJ Kabos aan drie.",
    cta: "Bekijk de ATTIMO-oliën",
  },
};
