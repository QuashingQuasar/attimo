import type { MarketGuideContent, ShipEvidence } from "./types";

// SWEDISH guide, translated from en.ts (the English mother copy) with the
// market facts swapped for Sweden.

export const SV_SHIPPING: Record<string, ShipEvidence> = {
  "oro-del-desierto-picual": { ships: "yes", basis: "lists country", route: "retailer", seller: "Oliva Oliva", days: "not stated", cost: "13,75 € exkl. moms", quote: "Denmark, Finland, Greece, Ireland, Sweden", source_url: "https://olivaoliva.com/en/content/9-shipping-costs", checked: "2026-10-13", notes: "Via den spanska delikatessbutiken Oliva Oliva; Sverige finns i deras fraktzoner" },
  "rapunzel-polyphenolia": { ships: "yes", basis: "lists country", route: "retailer", seller: "Piccantino", days: "not stated", cost: "115 kr", free_from: "1 099 kr", quote: "Sverige: Fri standardfrakt från 1 099 kr", source_url: "https://www.piccantino.se/rapunzel/organic-extra-virgin-polyphenolia-olive-oil", checked: "2026-10-13", notes: "Egen webbshop skickar bara till Tyskland och Österrike; via återförsäljaren Piccantino i Sverige" },
  "olvlimits-green-machine": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "2–6 arbetsdagar", cost: "not stated", free_from: "800 kr", quote: "European Union (EU): 2–6 business days", source_url: "https://olvlimits.com/en-se/", checked: "2026-10-13", notes: "Skickar från Nederländerna; Sverige nämns inte särskilt, EU 2 till 6 arbetsdagar; svensk butiksvy med fri frakt från 800 kr" },
  "pj-kabos-phenolic-shot": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "gratis", quote: "Free EU shipping on all orders!", source_url: "https://www.pjkabos.gr", checked: "2026-10-13", notes: "Fri frakt inom EU; leveranstid anges inte" },
  "morocco-gold": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "230 kr", quote: "Standard delivery within the USA, Canada, Australia, Europe & UK – Free", source_url: "https://morocco-gold.com/shop/morocco-gold-extra-virgin-olive-oil/", checked: "2026-10-13", notes: "Sidan anger både fri frakt till Europa och 230 kr för Skandinavien; leveranstid anges inte per land" },
  "pamako-monovarietal": { ships: "yes", basis: "EU-wide statement", route: "webshop", seller: "Pamako UK", days: "not stated", cost: "not stated", quote: "Shipping Across the UK & Europe", source_url: "https://www.pamako.co.uk/policies/shipping-policy", checked: "2026-10-13", notes: "Den grekiska sidan har ingen webbshop; Pamakos brittiska webbshop skickar till Europa" },
  "blueprint-snake-oil": { ships: "yes", basis: "worldwide statement", route: "webshop", days: "not stated", cost: "not stated", quote: "We ship internationally from multiple fulfillment locations, including warehouses in Hong Kong and Singapore", source_url: "https://blueprint.bryanjohnson.com/policies/shipping-policy", checked: "2026-10-13", notes: "Egen webbshop skickar internationellt; Sverige och EU nämns inte, frakt beräknas i kassan" },
  "olivea-ultra-high-phenolic": { ships: "yes", basis: "worldwide statement", route: "webshop", days: "not stated", cost: "$10", quote: "International shipping available for a flat rate of $10", source_url: "https://www.myolivea.com/pages/llms-full-txt", checked: "2026-10-13", notes: "Internationellt från USA; Europa nämns inte" },
  "olio-intini-coratina": { ships: "not stated", basis: "none", route: "request", days: "not stated", cost: "not stated", quote: "Per spedizioni all'estero o richieste particolari compilate il form contatti e cercheremo di soddisfare le vostre esigenze.", source_url: "https://oliointini.it/prodotto/coratina/", checked: "2026-10-13", notes: "Utlandet på förfrågan via kontaktformulär" },
  "kyoord-high-phenolic": { ships: "no", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "Kyoord is currently shipping to addresses in the United States and Canada.", source_url: "https://kyoord.com/policies/shipping-policy", checked: "2026-10-13", notes: "Endast USA och Kanada" },
  "laconiko-zoi": { ships: "not stated", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "", source_url: "https://laconiko.com/", checked: "2026-10-13", notes: "Ingen väg till Sverige hittad" },
  "oleum-crete-koroneiki": { ships: "no", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "Free delivery on all UAE orders.", source_url: "https://oleumcrete.ae/policies/shipping-policy", checked: "2026-10-13", notes: "Endast Förenade Arabemiraten" },
  "sakellaropoulos-fyllikon": { ships: "not stated", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "", source_url: "https://www.bioarmonia.gr/products", checked: "2026-10-13", notes: "Endast telefonbeställning i Grekland" },
  "the-governor-limited": { ships: "no", basis: "none", route: "none", days: "not stated", cost: "not stated", quote: "We ship to England, Wales, Scotland, Northern Ireland, Guernsey, Jersey, and the Isle of Man.", source_url: "https://thegovernorevoo.co.uk/pages/shipping-policy", checked: "2026-10-13", notes: "Endast Storbritannien" },
  "olive-oil-club-picholine": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "not stated", free_from: "€100", quote: "We ship all over Europe - Free delivery above €100", source_url: "https://oliveoilclub.myshopify.com/", checked: "2026-10-15", notes: "Skickar till hela Europa, fri frakt från 100 €; kostnad under beloppet och leveranstid anges inte; slutsåld den 15 oktober 2026" },
  "deliba-ottobratico": { ships: "yes", basis: "EU-wide statement", route: "webshop", days: "not stated", cost: "not stated", quote: "Orders to supported destinations in Europe and the United Kingdom are fulfilled from Italy", source_url: "https://delibaoliveoil.com/policies/shipping-policy", checked: "2026-10-15", notes: "Levererar till Europa från Italien; länder, kostnad och leveranstid visas först i kassan; slutsåld den 15 oktober 2026" },
  "oleaphen-high-phenolic": { ships: "not stated", basis: "none", route: "none", days: "not stated", quote: "UK orders go through Oleaphen's UK partner at highphenolic.co.uk.", source_url: "https://www.highphenolic.com/buy-high-phenolic-olive-oil", checked: "2026-10-15", notes: "Ingen fraktinformation på webbplatsen; bara en brittisk partner för Storbritannien" },
};

export const sv: MarketGuideContent = {
  lang: "sv",
  slug: "/se/kop-polyfenolrik-olivolja-i-sverige",
  market: "Sverige",
  country: "Sweden",
  daysUnit: "arbetsdagar",
  siblings: [],
  updated: "13 oktober 2026",
  meta: {
    title: "Köp polyfenolrik olivolja i Sverige | ATTIMO",
    description: "Köpguide för polyfenolrik olivolja i Sverige. Vilka oljor du kan köpa i Sverige, hur högt deras polyfenolvärde är och hur det mättes, och vad frakt till Sverige kostar. Uppdaterad {updated}.",
  },
  nav: { glance: "Oljor", criteria: "Kriterier", table: "Jämförelse", oils: "Per olja", number: "Värdet", faq: "Frågor" },
  hero: {
    eyebrow: "Köpguide · Sverige",
    h1: "Köp polyfenolrik olivolja i Sverige",
    lead: "Alla polyfenolrika olivoljor du kan beställa i Sverige, jämförda på polyfenoler, pris och leverans.",
    cta: "Se oljorna",
    ctaSecondary: "Vad du bör kontrollera",
    updatedLabel: "Uppdaterad",
    checkedLine: "Uppgifterna kommer från varje producents egen webbplats",
  },
  glance: {
    eyebrow: "",
    h2: "{n} oljor med publicerat polyfenolvärde",
    introPre: "De rikaste på oleocanthal och oleacein först, som i ",
    introLink: "Polyfenolindex",
    introPost: ". Det är de två mest studerade polyfenolerna. Labb mäter dem på samma sätt, oavsett metod. Oljor som bara publicerar en total står sist.",
    labels: { value: "€ per 100 mg oleocanthal + oleacein", attimoName: "ATTIMO Coratina", attimoSub: "Belgiskt märke · även Nocellara och Picual", price: "Pris", priceNote: "producentens pris, {verified}", method: "Mätt med", methodLink: "vad betyder det?", compounds: "Oleocanthal + oleacein", total: "Totala polyfenoler", buy: "Köp", cost: "Frakt", days: "Leverans", source: "Källa", notStated: "ej angivet", attimoAlso: "Även {nocellara} och {picual}" },
  },
  criteria: {
    eyebrow: "Vad du bör kontrollera",
    h2: "En bra polyfenolrik olja visar skördedatum, labbrapport, testmetod och leverans",
    intro: "",
    items: [
      { key: "report", title: "En labbrapport du kan öppna", text: "Polyfenoler är de ämnen som gör olivolja bitter och pepprig, och de ligger bakom de flesta hälsoeffekter som forskare har studerat. Ett värde på etiketten är ett påstående. En labbrapport med labbets namn på gör att du kan kontrollera det.", weight: 30, icon: "/icons/flask.svg" },
      { key: "delivery", title: "Frakt till ditt land", text: "Många polyfenolrika märken säljer bara i USA. Säljarens egen webbplats bör nämna ditt land, eller säga att den skickar inom hela EU, med kostnad och leveranstid.", weight: 30, icon: "/icons/branch-2.svg" },
      { key: "method", title: "Testmetoden bredvid värdet", text: "Labb mäter polyfenoler på olika sätt. Samma olja kan få 20 till 48 % högre värde med en metod än med en annan, så ett värde utan sin metod går inte att jämföra.", weight: 20, icon: "/icons/olive.svg" },
      { key: "origin", title: "Ett skördedatum och en namngiven sort", text: "Polyfenolerna sjunker från den dag oljan pressas, så skördedatumet visar hur mycket som finns kvar. Olivolja från mataffären anger sällan något skördedatum, eftersom den blandas av oljor från flera skördar.", weight: 20, icon: "/icons/basket-2.svg" },
    ],
  },
  table: {
    eyebrow: "Jämförelse",
    h2: "Jämför oljorna på polyfenoler, pris och frakt",
    intro: "Klicka på en kolumn för att sortera efter den. Klicka på en olja för att öppna dess kort.",
    footnotes: [
      "Polyfenoler i mg/kg, från varje producents labbrapport.",
      "Priserna är producentens egna, från {verified}. Priser i dollar och pund är omräknade till euro efter Europeiska centralbankens kurs.",
      "Fraktkostnader enligt säljarens webbplats den {checked}.",
    ],
    cols: { oil: "Olja", compounds: "Oleocanthal + oleacein", total: "Totala polyfenoler", method: "Testmetod", price: "Pris per 500 ml", value: "Pris per 100 mg oleocanthal + oleacein", buy: "Så köper du i Sverige", days: "Leverans", score: "Poäng" },
    buy: { webshop: "Webbshop, skickar till Sverige", webshopEu: "Webbshop, skickar inom hela EU", webshopWorld: "Webbshop, skickar internationellt", retailer: "Via en butik", distributor: "Via en distributör", request: "På förfrågan" },
    footnote: "mg/kg. Fraktuppgifter lästa på varje säljares webbplats {checked}; meningen finns bakom källänken. Polyfenolvärdena kommer från Polyfenolindex, där varje värde länkar till sin rapport. Priserna är producentens, lästa {verified}.",
    links: {
      index: { title: "Polyfenolindex", text: "Varje olivolja i världen som publicerar ett polyfenolvärde, på en sida, rankad på de två viktigaste ämnena." },
      methods: { title: "Varför metoderna skiljer sig", text: "HPLC, NMR och Folin-Ciocalteu ger olika värden för samma olja. Vad varje metod mäter, och vad du kan jämföra." },
    },
  },
  oils: {
    eyebrow: "Per olja",
    h2: "Vad varje olja visar och vad den inte visar",
    intro: "Samma fyra kriterier, utskrivna per olja. Plus och minus kommer direkt från vad producenten publicerar.",
    labels: { score: "Poäng", pros: "Plus", cons: "Minus", forWho: "För vem", standsOut: "Varför den sticker ut", buy: "Köp", price: "Pris", source: "Källa", priceOnSite: "ej angivet" },
    pros: { report: "Labbrapport online", hplc: "Oleocanthal och oleacein redovisade var för sig", method: "Metod angiven", origin: "Sort och skörd angivna", shipsNl: "Skickar till Sverige, {days}", shipsEu: "Skickar inom hela EU" },
    cons: { nmr: "Totalen mätt med NMR: räknar en lång lista fenoliska ämnen med full vikt, tunga derivatmolekyler inräknade, och landar 20 till 48 % högre än HPLC på samma olja. Jämför på oleocanthal + oleacein.", shipping: "Frakt {cost}", shippingFree: "Frakt {cost}, fri från {free}", noReport: "Ingen rapport att öppna", noMethod: "Metod ej angiven", totalOnly: "Bara en total, inga separata ämnen", noDays: "Leveranstid till Sverige ej angiven", nlNotNamed: "Sverige nämns inte separat", noOrigin: "Sort eller skörd ej angiven" },
    perOil: {
      "attimo-coratina": { cons: ["Inga butiker i {market} ännu", "Picual mäts fortfarande med Folin-Ciocalteu, inte HPLC"], forWho: "För dig som tar olivolja som en daglig shot, eller vill ha en kraftig, bitter och pepprig olja att avsluta en rätt med.", standsOut: "Rapporten, metoden, sorten och skördedatumet finns alla online, och oljan är i {market} inom {daysText}." },
      "olvlimits-green-machine": { forWho: "För dig som vill ha flaskan snabbt: nederländskt märke, skickar till EU på 2 till 6 arbetsdagar" },
      "pj-kabos-phenolic-shot": { forWho: "För dig som söker en grekisk olja med hög total och inte har något emot att leveranstiden inte är angiven." },
    },
  },
  number: {
    eyebrow: "Värdet",
    h2: "Så läser du ett polyfenolvärde",
    intro: "Ett polyfenolvärde anger hur många milligram polyfenoler det finns i ett kilo olja. Två saker avgör vad det betyder: vilka ämnen som räknades, och hur.",
    steps: [
      { title: "Totalen är summan av dussintals ämnen", text: "Två av dem, oleocanthal och oleacein, är de mest studerade. Oleocanthal ger det peppriga stinget längst bak i halsen." },
      { title: "Testmetoden påverkar totalen", text: "NMR räknar en längre lista ämnen än HPLC, så den ger ett högre värde på samma olja. Båda värdena är korrekta." },
      { title: "Oleocanthal och oleacein går att jämföra mellan metoder", text: "Labb mäter de här två ämnena på samma sätt, med högst cirka 10 % skillnad. Därför är de den rättvisaste grunden för att jämföra oljor som testats med olika metoder." },
    ],
    cta: "Så fungerar varje testmetod",
    visual: { title: "Olika metoder ger olika polyfenolvärden", caption: "Båda totalerna och värdet för oleocanthal + oleacein kommer från producentens två publicerade labbrapporter för samma olja.", compounds: "Oleocanthal + oleacein, NMR" },
  },
  avoid: {
    eyebrow: "Vad du bör lämna på hyllan",
    h2: "Fyra tecken på att ställa tillbaka flaskan",
    items: [
      { title: "Inget skördedatum", text: "Ett bäst före-datum ensamt säger inte hur gammal oljan är." },
      { title: "\"Rik på polyfenoler\" utan ett värde", text: "Utan milligram per kilo går påståendet inte att kontrollera eller jämföra." },
      { title: "Ett värde utan metod eller rapport", text: "Det går inte att jämföra med andra oljor, och det går inte att kontrollera." },
      { title: "\"Extra jungfruolja\" som kvalitetsargument", text: "Extra jungfruolja är kategorins lägsta klass. Det säger inget om färskhet eller polyfenoler." },
    ],
  },
  attimo: {
    eyebrow: "ATTIMO i Sverige",
    h2: "Tre sortrena oljor, tidigt skördade, hemma hos dig inom {daysText}",
    intro: "Färsk från den senaste skörden, med labbrapporten online.",
  },
  faq: {
    heading: "Vanliga frågor",
    items: [
      { question: "Skickar ATTIMO till Sverige?", answer: "Ja. Frakten kostar {standard} och är fri från {freeFrom}. Beställningar kommer fram inom {daysText}." },
      { question: "Vilken olja i Sverige har det högsta polyfenolvärdet?", answer: "Det beror på hur det mättes. Tabellen visar varje publicerat värde med sin metod, och de två viktigaste ämnena i en egen kolumn. ATTIMO Coratina 25/26 mäter 847 mg/kg (HPLC), varav 807 mg/kg oleocanthal plus oleacein." },
      { question: "Hur jämför jag olika märken?", answer: "På samma sätt som den här guiden gör. Först ett riktigt skördedatum på flaskan, så att du vet hur gammal oljan är. Sedan ett polyfenolvärde med labbrapporten bakom, och metoden det mättes med, eftersom olika metoder ger olika värden för samma olja. När metoderna skiljer sig åt, jämför på oleocanthal + oleacein, som varje labb redovisar separat. Sedan om märket skickar till {market}, på hur många dagar och till vilken kostnad, med märkets egna ord." },
      { question: "Kan jag köpa ATTIMO i en butik i Sverige?", answer: "Just nu via webbshoppen. Butiker i Sverige listas här så snart de finns." },
      { question: "När kommer den nya skörden?", answer: "Oliverna plockas gröna i oktober och pressas i slutet av oktober. Lämna din e-post på startsidan så får du veta först." },
      { question: "Hur förvarar jag en polyfenolrik olivolja?", answer: "Mörkt, svalt och stängt. Ljus, syre och värme bryter ner polyfenoler. Använd en öppnad flaska inom några månader." },
    ],
  },
  verdict: {
    eyebrow: "Vårt råd",
    h2: "Välj den olja du kan kontrollera hela vägen",
    body: "Ett högt värde är bara värt något med en rapport, en metod och ett skördedatum bakom sig, och med ett märke som säger att det skickar till Sverige. I den här guiden uppfyller ATTIMO Coratina alla fyra; OlvLimits och PJ Kabos uppfyller tre.",
    cta: "Se ATTIMO-oljorna",
  },
};
