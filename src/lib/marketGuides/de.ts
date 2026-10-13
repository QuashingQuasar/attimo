import type { MarketGuideContent, ShipEvidence } from "./types";

// Shipping evidence per Index entry id, Germany. Filled separately from a
// page-by-page check of each producer's own shipping/FAQ page. Entry ids match
// src/content/polyphenol-index/*.yaml.
export const DE_SHIPPING: Record<string, ShipEvidence> = {
  "blueprint-snake-oil": { ships: "yes", basis: "lists country", route: "retailer", seller: "Shop Apotheke", days: "2–4 Werktage", cost: "kostenlos", quote: "Verkauf und Versand durch Supplementa … Lieferung in 2-4 Werktagen … Standardversand (kostenlos)", source_url: "https://www.shop-apotheke.com/artikel/upmRKUAFC/blueprint-bryan-johnson-extra-virgin-olivenoel.htm", checked: "2026-10-13", notes: "Über Shop Apotheke, Verkauf und Versand durch Supplementa" },
  "olvlimits-green-machine": { ships: "yes", basis: "lists country", route: "webshop", days: "2 Werktage", cost: "not stated", free_from: "50 €", quote: "Germany: 2 business days", source_url: "https://olvlimits.com/en-be/policies/shipping-policy", checked: "2026-10-13", notes: "Versand aus den Niederlanden; Deutschland mit 2 Werktagen genannt" },
  "oro-del-desierto-picual": { ships: "yes", basis: "lists country", route: "retailer", seller: "Oliva Oliva", days: "not stated", cost: "ab 11,50 € zzgl. MwSt.", quote: "Germany, Austria, Vatican City, Italy", source_url: "https://olivaoliva.com/en/content/9-shipping-costs", checked: "2026-10-13", notes: "Über den spanischen Feinkosthändler Oliva Oliva; Deutschland steht in dessen Versandzonen" },
  "rapunzel-polyphenolia": { ships: "yes", basis: "lists country", route: "webshop", days: "not stated", cost: "5,90 €", free_from: "65 €", quote: "Die Versandkosten betragen 5,90 € je Bestellung.", source_url: "https://shop.rapunzel.de/versand-und-zahlungsbedingungen/", checked: "2026-10-13", notes: "Eigener Onlineshop, nur Deutschland und Österreich; auch im Bioladen" },
  "pj-kabos-phenolic-shot": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "kostenlos", quote: "Free EU shipping on all orders!", source_url: "https://www.pjkabos.gr", checked: "2026-10-13", notes: "Kostenloser Versand in der EU; Lieferzeit nicht angegeben" },
  "morocco-gold": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "kostenlos", quote: "Standard delivery within the USA, Canada, Australia, Europe & UK – Free", source_url: "https://morocco-gold.com/shop/morocco-gold-extra-virgin-olive-oil/", checked: "2026-10-13", notes: "Kostenloser Versand nach Europa; Lieferzeit nicht je Land angegeben" },
  "pamako-monovarietal": { ships: "yes", basis: "EU-wide statement", route: "webshop", seller: "Pamako UK", days: "not stated", cost: "not stated", quote: "Shipping Across the UK & Europe", source_url: "https://www.pamako.co.uk/policies/shipping-policy", checked: "2026-10-13", notes: "Die griechische Seite hat keinen Shop; der britische Shop von Pamako versendet nach Europa" },
  "olivea-ultra-high-phenolic": { ships: "yes", basis: "worldwide statement", route: "webshop", days: "not stated", cost: "$10", quote: "International shipping available for a flat rate of $10", source_url: "https://www.myolivea.com/pages/llms-full-txt", checked: "2026-10-13", notes: "International aus den USA; Europa nicht genannt" },
  "olio-intini-coratina": { ships: "not stated", basis: "none", route: "request", days: "not stated", cost: "not stated", quote: "Per spedizioni all'estero o richieste particolari compilate il form contatti e cercheremo di soddisfare le vostre esigenze.", source_url: "https://oliointini.it/prodotto/coratina/", checked: "2026-10-13", notes: "Ausland auf Anfrage über das Kontaktformular" },
  "kyoord-high-phenolic": { ships: "no", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "Kyoord is currently shipping to addresses in the United States and Canada.", source_url: "https://kyoord.com/policies/shipping-policy", checked: "2026-10-13", notes: "Nur USA und Kanada" },
  "laconiko-zoi": { ships: "not stated", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "", source_url: "https://laconiko.com/", checked: "2026-10-13", notes: "Kein Weg nach Deutschland gefunden" },
  "oleum-crete-koroneiki": { ships: "no", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "Free delivery on all UAE orders.", source_url: "https://oleumcrete.ae/policies/shipping-policy", checked: "2026-10-13", notes: "Nur Vereinigte Arabische Emirate" },
  "sakellaropoulos-fyllikon": { ships: "not stated", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "", source_url: "https://www.bioarmonia.gr/products", checked: "2026-10-13", notes: "Nur telefonische Bestellung in Griechenland" },
  "the-governor-limited": { ships: "no", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "We ship to England, Wales, Scotland, Northern Ireland, Guernsey, Jersey, and the Isle of Man.", source_url: "https://thegovernorevoo.co.uk/pages/shipping-policy", checked: "2026-10-13", notes: "Nur Vereinigtes Königreich" },
};

export const de: MarketGuideContent = {
  lang: "de",
  slug: "/de/polyphenolreiches-olivenoel-kaufen-deutschland",
  market: "Deutschland",
  country: "Germany",
  daysUnit: "Werktage",
  siblings: [],
  updated: "13. Oktober 2026",
  meta: {
    title: "Polyphenolreiches Olivenöl kaufen in Deutschland | ATTIMO",
    description:
      "Kaufratgeber für polyphenolreiches Olivenöl in Deutschland. Welche Öle du dort kaufen kannst, wie hoch ihr Polyphenolwert ist und wie er gemessen wurde, und was der Versand nach Deutschland kostet. Aktualisiert {updated}.",
  },
  nav: { glance: "Öle", criteria: "Kriterien", table: "Vergleich", oils: "Pro Öl", number: "Wert", faq: "FAQ" },
  hero: {
    eyebrow: "Kaufratgeber · Deutschland",
    h1: "Polyphenolreiches Olivenöl kaufen in Deutschland",
    lead: "Welche polyphenolreichen Olivenöle du in Deutschland kaufen kannst, und worauf du achtest, bevor du bestellst.",
    cta: "Öle ansehen",
    ctaSecondary: "Worauf du achtest",
    updatedLabel: "Aktualisiert",
    checkedLine: "Geprüft auf der Website jedes Herstellers",
  },
  glance: {
    eyebrow: "Was du kaufen kannst",
    h2: "Polyphenolreiche Olivenöle, die du in Deutschland kaufen kannst",
    introPre: "Nur Öle mit einem veröffentlichten Polyphenolwert, in der Reihenfolge des ",
    introLink: "Polyphenol-Index",
    introPost: ".",
    labels: { attimoName: "ATTIMO Coratina", attimoSub: "Belgien · auch Nocellara und Picual", price: "Preis", priceNote: "Preis des Herstellers, {verified}", method: "Gemessen mit", methodLink: "was bedeutet das?", compounds: "Oleocanthal + Oleacein", total: "Polyphenole gesamt", buy: "Kaufen", cost: "Versandkosten", days: "Lieferzeit", source: "Quelle", notStated: "nicht angegeben", attimoAlso: "Auch {nocellara} und {picual}" },
  },
  criteria: {
    eyebrow: "Wie wir bewerten",
    h2: "Vier Dinge, die du sehen willst, bevor du bestellst",
    intro: "Du weißt, was Olivenöl ist, und du willst ein gutes. Das hier ist der Unterschied zwischen einem guten und einem, das nur so heißt.",
    items: [
      { key: "origin", title: "Ein echtes Erntedatum", text: "Supermarktöl hat meist keins, weil es Öle aus verschiedenen Jahren mischt. Polyphenole nehmen ab dem Tag der Pressung ab, also willst du wissen, wie alt das Öl ist und von welcher Olive es stammt.", weight: 20, icon: "/icons/basket-2.svg" },
      { key: "report", title: "Ein Polyphenolwert mit dem Bericht dazu", text: "Polyphenole sind die Stoffe, die ein Olivenöl gesund und scharf machen. Eine Zahl auf dem Etikett ist eine Behauptung; ein Laborbericht, den du öffnen kannst, ist ein Beleg.", weight: 30, icon: "/icons/flask.svg" },
      { key: "method", title: "Wie dieser Wert gemessen wurde", text: "Es gibt verschiedene Methoden, Polyphenole zu messen, und sie liefern für dasselbe Öl verschiedene Zahlen. Einen Wert ohne Methode kannst du mit nichts vergleichen.", weight: 20, icon: "/icons/olive.svg" },
      { key: "delivery", title: "Versand nach Deutschland", text: "Versendet die Marke nach Deutschland, in wie vielen Tagen, und sagt die Website das selbst? Wenn nicht, verlass dich nicht darauf.", weight: 30, icon: "/icons/branch-2.svg" },
    ],
  },
  table: {
    eyebrow: "Vergleich",
    h2: "Alle verfügbaren Öle im Vergleich",
    intro: "Dieselben Öle, mit der Punktzahl auf den vier Kriterien oben. Zwei Spalten für den Polyphenolwert: die zwei Hauptstoffe getrennt, und der Gesamtwert, wie der Hersteller ihn veröffentlicht.",
    cols: { oil: "Öl", compounds: "Oleocanthal + Oleacein", total: "Gesamt", method: "Methode", price: "Preis", buy: "Kaufen in Deutschland", days: "Lieferzeit", score: "Punkte" },
    buy: { webshop: "Webshop, versendet nach Deutschland", webshopEu: "Webshop, versendet EU-weit", webshopWorld: "Webshop, versendet weltweit", retailer: "Über Händler", distributor: "Über Vertrieb", request: "Auf Anfrage" },
    footnote: "mg/kg. Versandangaben gelesen auf der Website jedes Verkäufers am {checked}; der Satz steht hinter der Quelle. Polyphenolwerte stammen aus dem Polyphenol-Index, wo jede Zahl auf den Bericht verlinkt. Preise sind die des Herstellers, gelesen im {verified}.",
    links: {
      index: { title: "Der Polyphenol-Index", text: "Jedes Olivenöl der Welt, das einen Polyphenolwert veröffentlicht, auf einer Seite, sortiert nach den zwei Hauptstoffen." },
      methods: { title: "Warum Methoden sich unterscheiden", text: "HPLC, NMR und Folin-Ciocalteu liefern für dasselbe Öl andere Zahlen. Was jede Methode misst, und was du miteinander vergleichen kannst." },
    },
  },
  oils: {
    eyebrow: "Pro Öl",
    h2: "Was jedes Öl zeigt und was nicht",
    intro: "Dieselben vier Kriterien, jetzt pro Öl ausgeschrieben. Plus und Minus kommen direkt aus dem, was der Hersteller veröffentlicht.",
    labels: { score: "Punkte", pros: "Plus", cons: "Minus", forWho: "Für wen", standsOut: "Warum es auffällt", buy: "Kaufen", price: "Preis", source: "Quelle", priceOnSite: "nicht angegeben" },
    pros: { report: "Laborbericht online einsehbar", hplc: "Oleocanthal und Oleacein getrennt ausgewiesen", method: "Methode benannt", origin: "Sorte und Ernte benannt", shipsNl: "Versendet nach Deutschland, {days}", shipsEu: "Versendet EU-weit" },
    cons: { nmr: "Gesamtwert mit NMR gemessen: zählt eine lange Liste phenolischer Verbindungen mit vollem Gewicht, auch schwere abgeleitete Moleküle, und fällt dadurch für dasselbe Öl 20 bis 48 % höher aus als HPLC. Vergleiche über Oleocanthal + Oleacein.", shipping: "Versand {cost}", shippingFree: "Versand {cost}, kostenlos ab {free}", noReport: "Kein Bericht zum Öffnen", noMethod: "Methode nicht angegeben", totalOnly: "Nur ein Gesamtwert, keine einzelnen Stoffe", noDays: "Lieferzeit nach Deutschland nicht angegeben", nlNotNamed: "Deutschland nicht eigens genannt", noOrigin: "Sorte oder Ernte nicht benannt" },
    perOil: {
      "attimo-coratina": { cons: ["Noch keine Läden in {market}", "Picual noch mit Folin-Ciocalteu gemessen, nicht mit HPLC"], forWho: "Wer Olivenöl als täglichen Shot nimmt oder ein kräftiges, bitteres, pfeffriges Öl zum Abschmecken will.", standsOut: "Bericht, Methode, Sorte und Erntedatum stehen alle online, und das Öl ist innerhalb von {daysText} in {market}." },
      "olvlimits-green-machine": { forWho: "Wer die Flasche schnell will: niederländische Marke, Lieferung nach Deutschland in zwei Werktagen." },
      "pj-kabos-phenolic-shot": { forWho: "Wer ein griechisches Öl mit hohem Gesamtwert sucht und dem die Lieferzeit egal ist." },
    },
  },
  number: {
    eyebrow: "Der Wert",
    h2: "Was ein Polyphenolwert bedeutet, in drei Schritten",
    intro: "Jede Marke in diesem Ratgeber druckt eine Zahl in Milligramm pro Kilo. So liest du sie.",
    steps: [
      { title: "Es ist eine Zahl für eine ganze Familie von Stoffen", text: "Polyphenole sind Dutzende verschiedene Verbindungen. Zwei davon, Oleocanthal und Oleacein, sind am besten erforscht und sorgen für das pfeffrige Kratzen hinten im Hals." },
      { title: "Verschiedene Methoden liefern verschiedene Zahlen", text: "Ein Labor kann jeden Stoff einzeln zählen (HPLC) oder die ganze Familie auf einmal schätzen (NMR, Folin-Ciocalteu). Dasselbe Öl zeigt dann zwei verschiedene Gesamtwerte. Keiner davon ist falsch; sie messen etwas anderes." },
      { title: "Vergleiche also nur, was vergleichbar ist", text: "Zwei Gesamtwerte aus derselben Methode, oder besser: Oleocanthal plus Oleacein, denn diese zwei Stoffe weist jedes Labor getrennt aus. Darum stehen sie in diesem Ratgeber in einer eigenen Spalte." },
    ],
    cta: "Erklärung pro Methode",
  },
  avoid: {
    eyebrow: "Was du stehen lässt",
    h2: "Vier Signale, eine Flasche zurückzustellen",
    items: [
      { title: "Kein Erntedatum", text: "Nur ein Haltbarkeitsdatum heißt, dass du nicht weißt, wie alt das Öl ist." },
      { title: "\"Reich an Polyphenolen\" ohne Zahl", text: "Eine Behauptung ohne Milligramm pro Kilo ist Marketing." },
      { title: "Eine Zahl ohne Methode oder Bericht", text: "Du kannst sie mit nichts vergleichen und nicht prüfen." },
      { title: "Nur \"extra vergine\" als Qualitätsversprechen", text: "Extra vergine ist die Mindestanforderung der Kategorie. Es sagt nichts über Frische oder Polyphenole." },
    ],
  },
  attimo: {
    eyebrow: "ATTIMO in Deutschland",
    h2: "Drei sortenreine Öle, früh geerntet, innerhalb von {daysText} bei dir",
    intro: "Frisch aus der letzten Ernte, mit dem Laborbericht online. Versand nach Deutschland {standard}, kostenlos ab {freeFrom}, in {days}.",
  },
  faq: {
    heading: "Häufige Fragen",
    items: [
      { question: "Versendet ATTIMO nach Deutschland?", answer: "Ja. Der Versand kostet {standard} und ist ab {freeFrom} kostenlos. Bestellungen sind innerhalb von {daysText} bei dir." },
      { question: "Welches Öl in Deutschland hat den höchsten Polyphenolwert?", answer: "Das hängt davon ab, wie gemessen wurde. Die Tabelle zeigt jeden veröffentlichten Wert mit der Methode dazu, und die zwei Hauptstoffe in einer eigenen Spalte. ATTIMO Coratina 25/26 misst 847 mg/kg (HPLC), davon 807 mg/kg Oleocanthal plus Oleacein." },
      { question: "Wie vergleiche ich Zahlen verschiedener Marken?", answer: "Nur Zahlen aus derselben Methode sind vergleichbar. Der sauberste Vergleich ist Oleocanthal plus Oleacein, zwei Stoffe, die jedes Labor getrennt ausweist." },
      { question: "Kann ich ATTIMO in einem Laden in Deutschland kaufen?", answer: "Derzeit über den Webshop. Läden in Deutschland werden hier genannt, sobald es sie gibt." },
      { question: "Wann kommt die neue Ernte?", answer: "Die Oliven werden im Oktober grün gepflückt und Ende Oktober gepresst. Hinterlass deine E-Mail-Adresse auf der Startseite und du erfährst es zuerst." },
      { question: "Wie bewahre ich ein polyphenolreiches Olivenöl auf?", answer: "Dunkel, kühl und verschlossen. Licht, Sauerstoff und Wärme bauen Polyphenole ab. Eine geöffnete Flasche brauchst du innerhalb weniger Monate auf." },
    ],
  },
  verdict: {
    eyebrow: "Unser Rat",
    h2: "Wähl das Öl, bei dem du alles prüfen kannst",
    body: "Eine hohe Zahl ist erst etwas wert mit einem Bericht, einer Methode und einem Erntedatum dazu, und mit einer Marke, die sagt, dass sie nach Deutschland versendet. In diesem Ratgeber erfüllt ATTIMO Coratina alle vier; OlvLimits und PJ Kabos drei.",
    cta: "ATTIMO-Öle ansehen",
  },
};
