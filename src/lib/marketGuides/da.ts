import type { MarketGuideContent, ShipEvidence } from "./types";

// Shipping evidence per Index entry id, Denmark. Not yet filled in; see nl.ts
// for the format. Entry ids match src/content/polyphenol-index/*.yaml.
export const DA_SHIPPING: Record<string, ShipEvidence> = {
  "oro-del-desierto-picual": { ships: "yes", basis: "lists country", route: "retailer", seller: "Oliva Oliva", days: "not stated", cost: "13,75 € ekskl. moms", quote: "Denmark, Finland, Greece, Ireland, Sweden", source_url: "https://olivaoliva.com/en/content/9-shipping-costs", checked: "2026-10-13", notes: "Via den spanske specialbutik Oliva Oliva; Danmark står i deres fragtzoner" },
  "pj-kabos-phenolic-shot": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "gratis", quote: "Free EU shipping on all orders!", source_url: "https://www.pjkabos.gr", checked: "2026-10-13", notes: "Gratis fragt i EU; leveringstid ikke oplyst" },
  "olvlimits-green-machine": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "2–6 hverdage", cost: "not stated", free_from: "520 DKK", quote: "European Union (EU): 2–6 business days", source_url: "https://olvlimits.com/en-dk/policies/shipping-policy", checked: "2026-10-13", notes: "Sender fra Holland; Danmark ikke nævnt særskilt, EU 2 til 6 hverdage; dansk butiksvisning med fri fragt fra 520 kr." },
  "morocco-gold": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "gratis", quote: "Standard delivery within the USA, Canada, Australia, Europe & UK – Free", source_url: "https://morocco-gold.com/shop/morocco-gold-extra-virgin-olive-oil/", checked: "2026-10-13", notes: "Gratis fragt til Europa; leveringstid ikke oplyst pr. land" },
  "pamako-monovarietal": { ships: "yes", basis: "EU-wide statement", route: "webshop", seller: "Pamako UK", days: "not stated", cost: "not stated", quote: "Shipping Across the UK & Europe", source_url: "https://www.pamako.co.uk/policies/shipping-policy", checked: "2026-10-13", notes: "Den græske side har ingen webshop; Pamakos britiske webshop sender til Europa" },
  "blueprint-snake-oil": { ships: "yes", basis: "worldwide statement", route: "webshop", days: "not stated", cost: "not stated", quote: "We ship internationally from multiple fulfillment locations, including warehouses in Hong Kong and Singapore", source_url: "https://blueprint.bryanjohnson.com/policies/shipping-policy", checked: "2026-10-13", notes: "Egen webshop sender internationalt; Danmark og EU ikke nævnt, fragt beregnes ved kassen" },
  "olivea-ultra-high-phenolic": { ships: "yes", basis: "worldwide statement", route: "webshop", days: "not stated", cost: "$10", quote: "International shipping available for a flat rate of $10", source_url: "https://www.myolivea.com/pages/llms-full-txt", checked: "2026-10-13", notes: "Internationalt fra USA; Europa ikke nævnt" },
  "olio-intini-coratina": { ships: "not stated", basis: "none", route: "request", days: "not stated", cost: "not stated", quote: "Per spedizioni all'estero o richieste particolari compilate il form contatti e cercheremo di soddisfare le vostre esigenze.", source_url: "https://oliointini.it/prodotto/coratina/", checked: "2026-10-13", notes: "Udland på forespørgsel via kontaktformular" },
  "kyoord-high-phenolic": { ships: "no", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "Kyoord is currently shipping to addresses in the United States and Canada.", source_url: "https://kyoord.com/policies/shipping-policy", checked: "2026-10-13", notes: "Kun USA og Canada" },
  "laconiko-zoi": { ships: "not stated", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "", source_url: "https://laconiko.com/", checked: "2026-10-13", notes: "Ingen vej til Danmark fundet" },
  "oleum-crete-koroneiki": { ships: "no", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "Free delivery on all UAE orders.", source_url: "https://oleumcrete.ae/policies/shipping-policy", checked: "2026-10-13", notes: "Kun De Forenede Arabiske Emirater" },
  "rapunzel-polyphenolia": { ships: "no", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "Lieferung ausschließlich innerhalb Deutschlands und nach Österreich", source_url: "https://shop.rapunzel.de/versand-und-zahlungsbedingungen/", checked: "2026-10-13", notes: "Kun Tyskland og Østrig" },
  "sakellaropoulos-fyllikon": { ships: "not stated", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "", source_url: "https://www.bioarmonia.gr/products", checked: "2026-10-13", notes: "Kun telefonbestilling i Grækenland" },
  "the-governor-limited": { ships: "no", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "We ship to England, Wales, Scotland, Northern Ireland, Guernsey, Jersey, and the Isle of Man.", source_url: "https://thegovernorevoo.co.uk/pages/shipping-policy", checked: "2026-10-13", notes: "Kun Storbritannien" },
  "olive-oil-club-picholine": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "not stated", free_from: "€100", quote: "We ship all over Europe - Free delivery above €100", source_url: "https://oliveoilclub.myshopify.com/", checked: "2026-10-15", notes: "Sender til hele Europa, gratis fra 100 €; pris under beløbet og leveringstid ikke oplyst; udsolgt den 15. oktober 2026" },
  "deliba-ottobratico": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "not stated", quote: "Orders to supported destinations in Europe and the United Kingdom are fulfilled from Italy", source_url: "https://delibaoliveoil.com/policies/shipping-policy", checked: "2026-10-15", notes: "Leverer til Europa fra Italien; lande, pris og leveringstid vises først ved betaling; udsolgt den 15. oktober 2026" },
  "oleaphen-high-phenolic": { ships: "not stated", basis: "none", route: "none", days: "not stated", quote: "UK orders go through Oleaphen's UK partner at highphenolic.co.uk.", source_url: "https://www.highphenolic.com/buy-high-phenolic-olive-oil", checked: "2026-10-15", notes: "Ingen fragtoplysninger på hjemmesiden; kun en britisk partner for Storbritannien" },
};

export const da: MarketGuideContent = {
  lang: "da",
  slug: "/dk/polyfenolrig-olivenolie-koeb-i-danmark",
  market: "Danmark",
  country: "Denmark",
  daysUnit: "hverdage",
  siblings: [],
  updated: "13. oktober 2026",
  meta: {
    title: "Køb polyfenolrig olivenolie i Danmark | ATTIMO",
    description: "Købsguide til polyfenolrig olivenolie i Danmark. Hvilke olier du kan købe i Danmark, hvor højt deres polyfenoltal er og hvordan det blev målt, og hvad forsendelse til Danmark koster. Opdateret {updated}.",
  },
  nav: { glance: "Olier", criteria: "Kriterier", table: "Sammenligning", oils: "Pr. olie", number: "Tallet", faq: "FAQ" },
  hero: {
    eyebrow: "Købsguide · Danmark",
    h1: "Køb polyfenolrig olivenolie i Danmark",
    lead: "Hvilke polyfenolrige olivenolier du kan købe i Danmark, og hvad du tjekker, før du bestiller.",
    cta: "Se olierne",
    ctaSecondary: "Hvad du tjekker",
    updatedLabel: "Opdateret",
    checkedLine: "Tjekket på hver producents egen hjemmeside",
  },
  glance: {
    eyebrow: "Hvad du kan købe",
    h2: "Polyfenolrige olivenolier, du kan købe i Danmark",
    introPre: "Kun olier med et offentliggjort polyfenoltal, i samme rækkefølge som ",
    introLink: "Polyfenolindekset",
    introPost: ".",
    labels: { attimoName: "ATTIMO Coratina", attimoSub: "Belgisk mærke · også Nocellara og Picual", price: "Pris", priceNote: "producentens pris, {verified}", method: "Målt med", methodLink: "hvad betyder det?", compounds: "Oleocanthal + oleacein", total: "Polyfenoler i alt", buy: "Køb", cost: "Forsendelse", days: "Levering", source: "Kilde", notStated: "ikke oplyst", attimoAlso: "Også {nocellara} og {picual}" },
  },
  criteria: {
    eyebrow: "Hvad du tjekker",
    h2: "Fire ting, du vil se, før du bestiller",
    intro: "Du ved, hvad olivenolie er, og du vil have en god en. Det her er forskellen på en god olie og en, der bare siger det.",
    items: [
      { key: "origin", title: "En rigtig høstdato", text: "Supermarkedsolie har som regel ingen, fordi den blander olier fra forskellige år. Polyfenoler falder fra den dag, olien presses, så du vil vide, hvor gammel olien er, og hvilken oliven den kommer fra.", weight: 20, icon: "/icons/basket-2.svg" },
      { key: "report", title: "Et polyfenoltal med rapporten bag", text: "Polyfenoler er de stoffer, der gør en olivenolie sund og pebret. Et tal på etiketten er en påstand; en laboratorierapport, du kan åbne, er et bevis.", weight: 30, icon: "/icons/flask.svg" },
      { key: "method", title: "Hvordan tallet er målt", text: "Der findes flere måder at måle polyfenoler på, og de giver forskellige tal for den samme olie. Et tal uden metode kan du ikke sammenligne med noget.", weight: 20, icon: "/icons/olive.svg" },
      { key: "delivery", title: "Forsendelse til Danmark", text: "Sender mærket til Danmark, på hvor mange dage, og siger hjemmesiden det selv? Hvis ikke, så regn ikke med det.", weight: 30, icon: "/icons/branch-2.svg" },
    ],
  },
  table: {
    eyebrow: "Sammenligning",
    h2: "Alle tilgængelige olier sammenlignet",
    intro: "De samme olier, scoret på de fire kriterier ovenfor. To kolonner til polyfenoltallet: de to hovedstoffer for sig, og totalen, som producenten offentliggør den.",
    cols: { oil: "Olie", compounds: "Oleocanthal + oleacein", total: "I alt", method: "Metode", price: "Pris", buy: "Sådan køber du i Danmark", days: "Levering", score: "Score" },
    buy: { webshop: "Webshop, sender til Danmark", webshopEu: "Webshop, sender til hele EU", webshopWorld: "Webshop, sender internationalt", retailer: "Via en butik", distributor: "Via en distributør", request: "På forespørgsel" },
    footnote: "mg/kg. Forsendelsesoplysninger læst på hver sælgers hjemmeside den {checked}; sætningen ligger bag kildelinket. Polyfenoltal kommer fra Polyfenolindekset, hvor hvert tal linker til sin rapport. Priser er producentens, læst i {verified}.",
    links: {
      index: { title: "Polyfenolindekset", text: "Hver olivenolie i verden, der offentliggør et polyfenoltal, på én side, rangeret efter de to hovedstoffer." },
      methods: { title: "Hvorfor metoder giver forskellige tal", text: "HPLC, NMR og Folin-Ciocalteu giver forskellige tal for den samme olie. Hvad hver metode måler, og hvad du kan sammenligne." },
    },
  },
  oils: {
    eyebrow: "Pr. olie",
    h2: "Hvad hver olie viser og ikke viser",
    intro: "De samme fire kriterier, skrevet ud pr. olie. Plus og minus kommer direkte fra det, producenten offentliggør.",
    labels: { score: "Score", pros: "Plus", cons: "Minus", forWho: "Til hvem", standsOut: "Hvorfor den skiller sig ud", buy: "Køb", price: "Pris", source: "Kilde", priceOnSite: "ikke oplyst" },
    pros: { report: "Laboratorierapport online", hplc: "Oleocanthal og oleacein rapporteret hver for sig", method: "Metode oplyst", origin: "Sort og høst oplyst", shipsNl: "Sender til Danmark, {days}", shipsEu: "Sender til hele EU" },
    cons: { nmr: "Total målt med NMR: tæller en lang liste af fenoliske stoffer med fuld vægt, også tunge afledte molekyler, og lander 20 til 48 % højere end HPLC på den samme olie. Sammenlign på oleocanthal + oleacein.", shipping: "Forsendelse {cost}", shippingFree: "Forsendelse {cost}, gratis fra {free}", noReport: "Ingen rapport at åbne", noMethod: "Metode ikke oplyst", totalOnly: "Kun en total, ingen enkeltstoffer", noDays: "Leveringstid til Danmark ikke oplyst", nlNotNamed: "Danmark ikke nævnt særskilt", noOrigin: "Sort eller høst ikke oplyst" },
    perOil: {
      "attimo-coratina": { cons: ["Endnu ingen butikker i {market}", "Picual stadig målt med Folin-Ciocalteu, ikke HPLC"], forWho: "Til dig, der tager olivenolie som et dagligt shot, eller vil have en kraftig, bitter og pebret olie til at afslutte en ret med.", standsOut: "Rapporten, metoden, sorten og høstdatoen ligger alle online, og olien er i {market} inden for {daysText}." },
      "olvlimits-green-machine": { forWho: "Til dig, der vil have flasken hurtigt: hollandsk mærke, sender til EU på 2 til 6 hverdage" },
      "pj-kabos-phenolic-shot": { forWho: "Til dig, der søger en græsk olie med en høj total og ikke har noget imod en uoplyst leveringstid." },
    },
  },
  number: {
    eyebrow: "Tallet",
    h2: "Hvad et polyfenoltal betyder, i tre trin",
    intro: "Hvert mærke i denne guide trykker et tal i milligram pr. kilo. Sådan læser du det.",
    steps: [
      { title: "Det er ét tal for en hel familie af stoffer", text: "Polyfenoler er dusinvis af forskellige stoffer. To af dem, oleocanthal og oleacein, er de bedst undersøgte og giver den pebrede kradsen bagerst i halsen." },
      { title: "Forskellige metoder giver forskellige tal", text: "Et laboratorium kan tælle hvert stof for sig (HPLC) eller anslå hele familien på én gang (NMR, Folin-Ciocalteu). Den samme olie får så to forskellige totaler. Ingen af dem er forkert; de måler noget forskelligt." },
      { title: "Sammenlign derfor kun det, der kan sammenlignes", text: "To totaler fra samme metode, eller bedre: oleocanthal plus oleacein, for de to stoffer rapporterer hvert laboratorium hver for sig. Derfor har de deres egen kolonne i denne guide." },
    ],
    cta: "Hver metode forklaret",
  },
  avoid: {
    eyebrow: "Hvad du lader stå på hylden",
    h2: "Fire tegn på, at flasken skal tilbage",
    items: [
      { title: "Ingen høstdato", text: "Kun en holdbarhedsdato betyder, at du ikke ved, hvor gammel olien er." },
      { title: "\"Rig på polyfenoler\" uden et tal", text: "En påstand uden milligram pr. kilo er markedsføring." },
      { title: "Et tal uden metode eller rapport", text: "Du kan ikke sammenligne det med noget, og du kan ikke tjekke det." },
      { title: "\"Ekstra jomfru\" som kvalitetspåstand", text: "Ekstra jomfru er adgangskravet til kategorien. Det siger intet om friskhed eller polyfenoler." },
    ],
  },
  attimo: {
    eyebrow: "ATTIMO i Danmark",
    h2: "Tre monosort-olier, høstet tidligt, hjemme hos dig inden for {daysText}",
    intro: "Frisk fra den seneste høst, med laboratorierapporten online. Forsendelse til Danmark {standard}, gratis fra {freeFrom}, på {days}.",
  },
  faq: {
    heading: "Ofte stillede spørgsmål",
    items: [
      { question: "Sender ATTIMO til Danmark?", answer: "Ja. Forsendelse koster {standard} og er gratis fra {freeFrom}. Bestillinger er fremme inden for {daysText}." },
      { question: "Hvilken olie i Danmark har det højeste polyfenoltal?", answer: "Det afhænger af, hvordan der er målt. Tabellen viser hvert offentliggjort tal med sin metode, og de to hovedstoffer i deres egen kolonne. ATTIMO Coratina 25/26 måler 847 mg/kg (HPLC), heraf 807 mg/kg oleocanthal plus oleacein." },
      { question: "Hvordan sammenligner jeg forskellige mærker?", answer: "På samme måde som denne guide gør det. Først en rigtig høstdato på flasken, så du ved, hvor gammel olien er. Så et polyfenoltal med laboratorierapporten bag og den metode, det er målt med, fordi forskellige metoder giver forskellige tal for den samme olie. Når metoderne er forskellige, så sammenlign på oleocanthal + oleacein, som alle laboratorier opgiver hver for sig. Så om mærket sender til {market}, på hvor mange dage og til hvilken pris, med mærkets egne ord. Tabellen ovenfor vurderer hver olie på de fire punkter." },
      { question: "Kan jeg købe ATTIMO i en butik i Danmark?", answer: "Lige nu via webshoppen. Butikker i Danmark bliver nævnt her, så snart de findes." },
      { question: "Hvornår kommer den nye høst?", answer: "Olivenerne plukkes grønne i oktober og presses sidst i oktober. Skriv din e-mail på forsiden, så hører du det først." },
      { question: "Hvordan opbevarer jeg en polyfenolrig olivenolie?", answer: "Mørkt, køligt og lukket. Lys, ilt og varme nedbryder polyfenoler. Brug en åbnet flaske inden for et par måneder." },
    ],
  },
  verdict: {
    eyebrow: "Vores råd",
    h2: "Vælg den olie, du kan tjekke fra ende til anden",
    body: "Et højt tal er først noget værd med en rapport, en metode og en høstdato bag sig, og med et mærke, der selv siger, at det sender til Danmark. I denne guide opfylder ATTIMO Coratina alle fire; OlvLimits og PJ Kabos opfylder tre.",
    cta: "Se ATTIMO-olierne",
  },
};
