// ─────────────────────────────────────────────────────────────────────────
// Dutch dictionary — overlay for the /nl/ market (lang: "nl").
//
// Typed as `Dict` (derived from en.ts), so this object MUST cover every key —
// a missing key fails the build. Keep all factual claims/numbers identical to
// English (they live in data, not here); translate language only.
//
// Persuasion / brand-voice strings are marked `// REVIEW` so a native Dutch
// reviewer can find and polish them quickly. Plain UI/functional strings are
// left unmarked. Register is informal ("je"), Netherlands/Flanders neutral.
// ─────────────────────────────────────────────────────────────────────────
import type { Dict } from "../dictionaries";

export const nl: Dict = {
  nav: {
    shop: "Shop",
    blog: "Blog",
    quiz: "Quiz",
    merch: "Merch",
  },

  announce: {
    freeShipping2: "GRATIS VERZENDING VANAF 2 FLESSEN",
    freeShipping3: "GRATIS VERZENDING VANAF 3 FLESSEN",
  },

  meta: {
    home: {
      title: "ATTIMO Monocultivar olijfolie, rijk aan polyfenolen, vroege oogst", // REVIEW
      description:
        "Monocultivar olijfolie, rijk aan polyfenolen. Vroege oogst, in het lab getest op kwaliteit. Van kleine familiegaarden tot op je tafel. Shop nu.", // REVIEW
    },
    shipping: {
      title: "Verzending & levering | ATTIMO", // REVIEW
      description:
        "Verzendtarieven, drempels voor gratis verzending en levertijden voor ATTIMO olijfolie in de hele Europese Unie.", // REVIEW
    },
    quiz: {
      title: "Olijfolie-smaakquiz | ATTIMO", // REVIEW
      description:
        "Vind jouw perfecte ATTIMO olijfolie. Doe de smaakquiz van 60 seconden en ontdek welke monocultivar extra vierge olijfolie bij jouw smaak past.", // REVIEW
    },
  },

  footer: {
    blog: "Blog",
    ambassadors: "Ambassadeurs",
    privacy: "Privacybeleid",
    terms: "Algemene voorwaarden",
    shipping: "Verzending",
    contact: "Contact",
    manageOrders: "Beheer bestellingen & abonnement",
    rights: "© 2026 ATTIMO. Alle rechten voorbehouden.",
    changeRegion: "Wijzig valuta of land",
    shop: "Shop", // REVIEW
    learn: "Ontdek", // REVIEW
    company: "Bedrijf", // REVIEW
  },

  cart: {
    ariaLabel: "Winkelwagen",
    title: "Winkelwagen",
    emptyDescription: "Je winkelwagen is momenteel leeg.",
    itemsInCart: (n: number) => `${n} artikel${n !== 1 ? "en" : ""} in je winkelwagen`,
    emptyHeading:
      "Het lijkt erop dat je nog niets hebt toegevoegd. Laten we beginnen.", // REVIEW
    freeShipping: "Gratis verzending ✓",
    freeShippingNudge: (n: number) =>
      `Voeg nog ${n} fles${n > 1 ? "sen" : ""} toe voor gratis verzending`, // REVIEW
    youMightAlsoLike: "Misschien vind je dit ook leuk",
    add: "+ Toevoegen",
    viewProduct: (name: string) => `Bekijk ${name}`,
    subtotal: "Subtotaal",
    shipping: "Verzending",
    free: "Gratis",
    calculatedAtCheckout: "Berekend bij het afrekenen",
    creatingCheckout: "Checkout aanmaken...",
    checkout: "Afrekenen met Shopify",
    separateShipments:
      "Olijfolie en merch worden apart verzonden", // REVIEW
  },

  quiz: {
    intro:
      "Beantwoord een paar korte vragen en ontdek welke van onze drie monocultivar oliën het best bij je past.", // REVIEW
    backToAttimo: "← Terug naar ATTIMO",
    resultsLabel: "Resultaten",
    back: "Terug",
    next: "Volgende",
    seeResults: "Bekijk resultaten",
    yourMatchIs: "Jouw match is",
    why: (name: string) => `Waarom ${name}?`,
    shop: (name: string) => `Shop ${name}`,
    retake: "Doe de quiz opnieuw",
  },

  products: {
    flavour: {
      coratina: "Krachtig & Pittig", // REVIEW
      picual: "Groen & Grassig", // REVIEW
      nocellara: "Zacht & Fruitig", // REVIEW
    },
    tagline: {
      coratina: "Een shot gezonde polyfenolen", // REVIEW
      picual: "Veelzijdig lekker", // REVIEW
      nocellara: "Moeiteloos geliefd", // REVIEW
    },
  },

  hero: {
    cta: "Shop de nieuwe oogst", // REVIEW
    badges: [
      "LAB-GETEST", // REVIEW
      "VROEGE OOGST", // REVIEW
      "MONOCULTIVAR", // REVIEW
      "VAN OLIJFGAARD TOT TAFEL", // REVIEW
      "ALTIJD VERS", // REVIEW
      "KOUDGEPERST", // REVIEW
    ],
  },

  oilCollection: {
    heading: "Specialty extra vierge olijfolie", // REVIEW
    subtitle:
      "Olijven van één variëteit, vroeg geoogst en binnen enkele uren koudgeperst voor maximale smaak en gezondheidsvoordelen.", // REVIEW
    size: "500ML",
    backSoon: "Binnenkort terug",
    soldOut: "Tijdelijk uitverkocht",
    quizPrompt: "Weet je niet welke olijfolie bij je past?",
    quizCta: "Vind jouw smaak →",
  },

  industryProblem: {
    headingPre: "De", // REVIEW
    headingLie: '"extra vierge"-leugen', // REVIEW
    intro:
      "Extra vierge olijfolie wordt geprezen om haar voordelen voor gezondheid en een lang leven, maar 80% van de EVOO's in supermarkten voldoet niet eens aan de basisnormen en is in werkelijkheid arm aan de polyfenolen die juist die voordelen — en de smaak — leveren.", // REVIEW
    stat1Value: "~80%",
    stat1Text:
      'van de olijfoliën die in supermarkten als "extra vierge" worden verkocht, voldoet niet aan die normen', // REVIEW
    stat2Value: "~90%",
    stat2Text:
      'van de "extra vierge" olijfoliën is arm aan gezondheidsbevorderende polyfenolen', // REVIEW
    arg1Title: "Smaak en gezondheid worden weggemengd", // REVIEW
    arg1Text:
      "Grote producenten schalen op door oliën uit meerdere bronnen en jaren te mengen tot een gestandaardiseerde smaak. Die praktijk doodt wat echte olijfolie bijzonder maakt: frisse, onderscheidende smaak en polyfenolen die haar zo gezond maken.", // REVIEW
    arg2Title: "Je hebt de echte nog nooit geproefd", // REVIEW
    arg2Text:
      "Echte extra vierge is intens: bitter, peperig, geurig. Elke olie heeft een vingerafdruk: olijfvariëteit, gaard, oogst, vakmanschap. Dit zijn ook de gezondste oliën, maar de meeste mensen krijgen ze nooit te proeven.", // REVIEW
    arg3Title: "De grote industrie doodt familiegaarden", // REVIEW
    arg3Text:
      "Financiële druk dwingt kleine producenten te verkopen aan industriële spelers. Hun sublieme olie wordt vermengd met goedkoop spul en verkocht voor een habbekrats. Olijfolie maken is een kunst, net als wijn, maar als de kunstenaars niet betaald worden, verdwijnt de kunst.", // REVIEW
  },

  kleiaWay: {
    headingLine1: "Zo zorgen we ervoor", // REVIEW
    headingLine2: "dat jij het echte werk krijgt", // REVIEW
    tiles: [
      {
        title: "ALTIJD VERS", // REVIEW
        text: "Olijfolie altijd van de laatste oogst. Geperst binnen enkele uren na de pluk, gebotteld op het toppunt van versheid.", // REVIEW
      },
      {
        title: "MONOCULTIVAR", // REVIEW
        text: "Elke fles komt van één olijfvariëteit. Je krijgt de pure expressie van de cultivar en zijn herkomst.", // REVIEW
      },
      {
        title: "VROEGE OOGST", // REVIEW
        text: "De olijven worden vroeg in het seizoen geoogst, wanneer ze het rijkst zijn aan polyfenolen, die smaak en gezondheid geven", // REVIEW
      },
      {
        title: "VAN OLIJFGAARD TOT TAFEL", // REVIEW
        text: "We kopen rechtstreeks in bij de mensen die de olie maken. Geen tussenpersonen, geen menging, geen shortcuts.", // REVIEW
      },
      {
        title: "LAB-GETESTE KWALITEIT", // REVIEW
        text: "Elke fles wordt door onafhankelijke labs getest op belangrijke kwaliteitsmarkers die je zelf kunt controleren.", // REVIEW
      },
    ],
  },

  oilComparison: {
    vs: "vs",
    others: "Supermarkt",
    supermarketColumn: "Supermarkt-EVOO", // REVIEW
    features: {
      fresh: "VERS", // REVIEW
      earlyHarvest: "VROEGE OOGST", // REVIEW
      singleSource: "ÉÉN BRON", // REVIEW
      traceable: "TRACEERBAAR", // REVIEW
      labTested: "LAB-GETEST", // REVIEW
      polyphenols: "POLYFENOLEN", // REVIEW
    },
    themFreshNo: "Nee, gemengd met oude oliën", // REVIEW
    themBlended: "Olie gemengd uit 3+ landen", // REVIEW
  },

  polyphenol: {
    heading: "het polyfenolverschil", // REVIEW
    intro:
      "Polyfenolen maken hét verschil voor de gezondheidsvoordelen en de smaak van olijfolie. ATTIMO-oliën worden geperst uit olijven die vroeg worden geoogst, wanneer de polyfenolen op hun hoogst zijn.", // REVIEW
    barAvg: "Gem. supermarkt-EVOO", // REVIEW
    barEu: "EU-gezondheidsclaim", // REVIEW
    barBlueprint: "Blueprint Olive Oil",
    tooltips: {
      avgTitle: "Gemiddelde extra vierge", // REVIEW
      avgSub: "~180 mg/kg polyfenolen",
      avgDesc:
        "De meeste supermarkt-EVOO's testen tussen 100–250 mg/kg. Menging, veroudering en industriële verwerking verlagen allemaal het polyfenolgehalte.", // REVIEW
      euTitle: "EU-gezondheidsclaim", // REVIEW
      euSub: "250 mg/kg polyfenolen",
      euDesc:
        "De Europese Autoriteit voor Voedselveiligheid (EFSA) staat een gezondheidsclaim toe voor olijfolie die minstens 250 mg/kg polyfenolen bevat.", // REVIEW
      blueprintTitle: "Blueprint Olive Oil",
      blueprintSub: "400 mg/kg polyfenolen",
      blueprintDesc:
        "Bryan Johnson geeft miljoenen uit aan het optimaliseren van zijn gezondheid voor een lang leven. Zijn Blueprint-olijfolie, met 400 mg/kg polyfenolen, is een van de bekendste polyfenolrijke oliën op de markt.", // REVIEW
      attimoTitle: "ATTIMO olijfolie",
      attimoSub: "400–900 mg/kg polyfenolen",
      attimoDesc:
        "Onze olijfoliën bevatten tussen 400 en 900 mg/kg polyfenolen, afhankelijk van de variëteit.", // REVIEW
    },
    cards: [
      {
        content: "Polyfenolen zijn een type antioxidant dat in olijven voorkomt.", // REVIEW
        content2:
          "Ze versterken de afweer van het lichaam tegen celveroudering en dragen bij aan de metabole gezondheid en de gezondheid van het hart op lange termijn.", // REVIEW
      },
      {
        content:
          "De hoogste polyfenolwaarden komen van vroeg geoogste olijven, geplukt en binnen enkele uren geperst.", // REVIEW
        content2: "Eenmaal gebotteld nemen de waarden gestaag af met de tijd.", // REVIEW
      },
      {
        content:
          "Commerciële oliën combineren partijen uit verschillende landen en jaren om de aanvoer op peil te houden.", // REVIEW
        content2:
          "Dat proces verdunt het polyfenolgehalte tot ver onder het niveau van versgeperste olie.", // REVIEW
      },
    ],
  },

  testimonials: {
    heading: "Wat klanten zeggen",
    reviews: [
      { title: "Lekker op alles!", text: "Vroeger kookte ik gewoon met olijfolie. Nu doe ik het overal op. Ik wist niet dat het zoveel smaak kon hebben." }, // REVIEW
      { title: "Alsof ik weer in Spanje woon", text: "Toen ik een tijd in Spanje woonde, raakte ik gewend aan geweldige olijfolie om me heen. In Duitsland is het moeilijk om goede te vinden; Attimo bracht prachtige herinneringen terug." }, // REVIEW
      { title: "Eindelijk", text: "Ik neem altijd bergen olijfolie mee terug van vakantie, maar die is snel op. Heel blij dat ik eindelijk echte olijfolie in eigen land heb gevonden." }, // REVIEW
      { title: "Supervers", text: "Ik heb veel olijfoliën geprobeerd en deze is mijn favoriet. De geur is echt ongelooflijk, zo vers dat het lijkt alsof de olijven ter plekke worden geperst." }, // REVIEW
      { title: "Ik was snel verkocht", text: "Ik kocht 4 flessen en ze waren binnen een maand op. Ik koop nooit meer in de supermarkt." }, // REVIEW
      { title: "Je proeft de kwaliteit", text: "Ik was sceptisch over de prijs, maar nu snap ik het. Je proeft echt het verschil in kwaliteit; zoiets vind je hier in de winkels niet." }, // REVIEW
      { title: "Verse oogst in een fles", text: "Het smaakt alsof ik de olijven net zelf heb geplukt en geperst. Supervers en natuurlijk, ik ben er dol op!" }, // REVIEW
    ],
  },

  blog: {
    heading: "De Oliepers", // REVIEW
    seeMore: "Bekijk meer artikelen",
    noArticles: "Nog geen artikelen gevonden.",
    noImage: "Geen afbeelding",
    readMore: "Lees meer",
    newsletterPrompt: "Ontvang ATTIMO-verhalen, inzichten en updates in je inbox", // REVIEW
    emailPlaceholder: "jouw@email.com",
    subscribe: "Inschrijven",
    invalidEmail: "Vul een geldig e-mailadres in.",
    subscribed: "Je staat op de lijst!",
    error: "Er ging iets mis. Probeer het opnieuw.",
  },

  product: {
    loading: "Product laden...",
    notFound: "Product niet gevonden",
    // 3L bag-in-box purchase-option toggle (Coratina PDP).
    formatLabel: "Formaat",
    formatBottleName: "Fles",
    formatBottleVolume: "500 ml",
    formatBoxName: "Bag-in-Box",
    formatBoxVolume: "3 L",
    formatBoxBadge: "VOORDELIGST", // Value badge on the 3L box option card
    // {n} = serving count, {price} = per-serving cost (locale currency)
    formatServings: "{n} porties ({price} per portie)",
    newHarvest: "Nieuwe oogst", // REVIEW
    inStock: "Op voorraad",
    lastBottles: "Laatste flessen",
    lastBoxes: "Laatste dozen",
    soldOut: "Uitverkocht",
    comingSoon: "Binnenkort beschikbaar",
    backSoon: "Binnenkort terug",
    newBatchHeading: "Nieuwe partij onderweg", // REVIEW
    newBatchSubtitle:
      "We sturen je een e-mail zodra Coratina d'Italia weer beschikbaar is (naar schatting 1–2 weken).", // REVIEW
    attrVariety: "Variëteit",
    attrOrigin: "Herkomst",
    attrHarvest: "Oogst",
    attrFlavour: "Smaak",
    harvestDate: "Oktober 2025",
    addToCart: "IN WINKELWAGEN", // REVIEW
    freeShipCheck: "GRATIS VERZENDING ✓",
    // NOTE: the component appends a literal "S" for {plural}, which cannot
    // build the Dutch plural ("fles" → "flessen"). This phrasing ("voeg er
    // nog {n} toe") sidesteps the noun so no plural token is needed.
    addForFreeShip: "VOEG ER {more}{n} TOE VOOR GRATIS VERZENDING",
    moreWord: "NOG ",
    trustLab: "Kwaliteit getest door onafhankelijk lab", // REVIEW
    shipsTomorrow: "Vandaag besteld, morgen verzonden", // REVIEW
    viewLabResults: "Bekijk labresultaten",
    howToReadLabValues: "Zo lees je de labwaarden van olijfolie",
    waitingResults: "(In afwachting van resultaten)",
    polyTooltipAria: "Wat betekent Bioactieve polyfenolen?",
    polyTooltipText:
      'Niet alle polyfenolen zijn gelijk. Onze {value} {unit} wordt gemeten met de EU-standaard HPLC-methode in een ISO-geaccrediteerd lab. Veel producenten rapporteren "totale polyfenolen" via bredere methodes die ook stoffen meetellen met minder gedocumenteerde gezondheidsactiviteit, wat hoger klinkende cijfers oplevert die niet direct vergelijkbaar zijn.', // REVIEW
    // Same {plural}="s" constraint as above: "stuks" pluralizes with -s.
    toastAdded: "{n} stuk{plural} toegevoegd aan winkelwagen",
    toastAddedBox: "3L Bag-in-Box toegevoegd aan winkelwagen",
    titleSuffix: "Specialty extra vierge olijfolie", // REVIEW
  },

  faq: {
    heading: "Veelgestelde vragen",
    origin: {
      coratina: "ATTIMO Coratina komt rechtstreeks van een kleine familie-olijfgaard in Puglia, Italië — de grootste olijfolieregio van het land, bekend om haar eeuwenoude bomen en uitzonderlijke kwaliteit.", // REVIEW
      nocellara: "ATTIMO Nocellara komt rechtstreeks van een kleine familie-olijfgaard in de Belice-vallei op Sicilië — een regio die bekendstaat om haar mineraalrijke bodems en ideale mediterrane groeiomstandigheden.", // REVIEW
      picual: "ATTIMO Picual komt rechtstreeks van een kleine familie-olijfgaard in Jaén, Spanje — de grootste olijfolieregio ter wereld, waar Picual al eeuwenlang wordt geteeld.", // REVIEW
      generic: "ATTIMO koopt in bij kleine familie-olijfgaarden in mediterrane regio's die bekendstaan om uitzonderlijke olijfolie. Elke fles komt van één gaard en wordt nooit gemengd, dus je kunt precies traceren waar je olie is geproduceerd.", // REVIEW
    },
    flavour: {
      coratina: "Coratina is een van de meest intens smakende olijfvariëteiten. Verwacht uitgesproken tonen van verse kruiden, artisjok en zwarte peper, met een ultrahoge dosis polyfenolen en een droge, lang aanhoudende afdronk. Het is de olijfolie die liefhebbers per lepel nemen.", // REVIEW
      nocellara: "Nocellara geeft een zachte, fruitige olie met tonen van verse tomaat, amandel en groene appel. Soepel en toegankelijk, met een milde peperige afdronk — perfect voor wie een zachter smaakprofiel verkiest.", // REVIEW
      picual: "Picual levert een robuuste, grassige olie met tonen van versgesneden kruiden, vijgenblad en een zuivere peperige afdronk. Een veelzijdige allrounder, boordevol polyfenolen en perfect voor dagelijks gebruik.", // REVIEW
      generic: "Die bitterheid en peperige kick komen van polyfenolen; de stoffen die olijfolie gezond maken. De meeste mensen zijn gewend aan flauwe, oververwerkte oliën. Echte extra vierge hoort karakter te hebben: intens, vers en complex.", // REVIEW
    },
    use: {
      coratina: "Coratina gebruik je het best als afwerkingsolie om het meeste uit de krachtige smaak en gezondheidsvoordelen te halen. Sprenkel de olie over steak, gegrilde groenten, stevige soepen, bruschetta of zelfs ijs. Het lekkerst rauw of toegevoegd na het koken, want hoge hitte kan de polyfenolen afbreken.", // REVIEW
      nocellara: "Nocellara is een veelzijdige olie voor elke dag. Sprenkel de olie over salades, vis, pasta en vers brood. Het zachte karakter maakt deze olie ideaal voor lichtere gerechten waar je smaak wilt zonder het eten te overheersen. Het lekkerst rauw of toegevoegd na het koken.", // REVIEW
      picual: "Picual is een geweldige allrounder. Werk er geroosterde groenten mee af, sprenkel de olie over hummus, breng er granen en peulvruchten mee op smaak, of dip er knapperig brood in. Het robuuste karakter houdt goed stand, maar de olie is het lekkerst rauw of toegevoegd na het koken om de polyfenolen te behouden.", // REVIEW
      generic: "Gebruik ATTIMO als afwerkingsolie om het meeste uit de smaak en gezondheidsvoordelen te halen. Sprenkel de olie over salades, gekookte groenten, pasta, brood of gegrild vlees. Het lekkerst rauw of toegevoegd na het koken, want hoge hitte kan de polyfenolen afbreken die de olie zo bijzonder maken.", // REVIEW
    },
    q: {
      different: "Wat maakt ATTIMO olijfolie anders?",
      origin: "Waar komt deze olijfolie vandaan?",
      tasteTemplate: "Hoe smaakt ATTIMO {variety}?", // {variety} is a proper name, kept verbatim
      tasteNoHandle: "Hoe smaakt het?",
      polyphenols: "Wat zijn polyfenolen en waarom zijn ze belangrijk?",
      fresh: "Hoe vers is de olijfolie?",
      lab: "Kan ik de labresultaten inzien?",
      use: "Hoe gebruik ik deze olijfolie?",
      store: "Hoe bewaar ik mijn olijfolie?",
      cancel: "Kan ik mijn bestelling wijzigen of annuleren?",
      organic: "Is jullie olijfolie biologisch?",
      wholesale: "Verkopen jullie in het groot of aan restaurants?",
      shipping: "Waar leveren jullie en wat kost het?",
    },
    a: {
      different: "ATTIMO koopt rechtstreeks in bij individuele gaarden, zodat elke fles van de laatste oogst komt, zonder menging of tussenpersonen. Elke fles wordt in het lab getest op kwaliteitsmarkers zoals het polyfenolgehalte, zodat je de echte, gezondheidsbevorderende extra vierge olijfolie krijgt die de meeste mensen nooit hebben geproefd.", // REVIEW
      fresh: "Elke fles komt van de laatste oogst en wordt snel gebotteld om de versheid te bewaren. In tegenstelling tot massaproductie-oliën die maanden of jaren kunnen blijven liggen, levert ATTIMO olie binnen enkele maanden na de oogst. Zo krijg je maximale smaak en gezondheidsvoordelen.", // REVIEW
      store: "Bewaar de olie op een koele, donkere plek, weg van hitte en licht. Eenmaal geopend gebruik je de olie het best binnen enkele maanden voor optimale versheid. De stoffen die de olie gezond maken breken af met de tijd, dus verser is altijd beter.", // REVIEW
      organic: "Onze Coratina is biologisch gecertificeerd. Voor onze andere oliën is een biocertificaat niet onze belangrijkste maatstaf — we hechten veel waarde aan hoe olijven worden geteeld en verwerkt, met prioriteit voor landbouw met weinig interventie, vroege oogst en kwaliteit boven alles. Gecertificeerd of niet, we houden elke olie aan dezelfde hoge standaarden.", // REVIEW
      // Q: polyphenols — text, then a link, then a literal period.
      polyphenolsText: "Polyfenolen zijn natuurlijke stoffen in olijfolie die zorgen voor de gezondheidsvoordelen waar je over hebt gehoord — ontstekingsremmende eigenschappen, ondersteuning van de gezondheid van het hart en bescherming door antioxidanten. De meeste oliën uit de winkel hebben lage polyfenolwaarden door verwerking en menging. ATTIMO-oliën zijn rijk aan polyfenolen omdat ze vers en ongemengd zijn en van kwaliteitsbronnen komen.", // REVIEW
      polyphenolsLink: "Lees meer over polyfenolen",
      labGeneric: "Absoluut. Elke partij ATTIMO-olie wordt onafhankelijk getest door een extern laboratorium, en de volledige resultaten staan op elke productpagina. We testen op polyfenolgehalte, zuurgraad, peroxidewaarden en meer. We geloven in volledige transparantie — je moet altijd kunnen controleren wat de kwaliteit is van wat je op je bord legt.", // REVIEW
      labText: "Ja. Elke partij wordt getest door een extern laboratorium, en je kunt de kwaliteitsmarkers zelf controleren. We geloven in volledige transparantie — je hoort precies te weten wat je krijgt.", // REVIEW
      labLinkPrefix: "Bekijk de labresultaten voor ",
      useLink: "Lees meer over koken met olijfolie",
      cancelPre: "Bestellingen kunnen worden gewijzigd of geannuleerd voordat ze zijn verwerkt. Zodra je bestelling is verzonden, kunnen we geen wijzigingen meer doorvoeren. Neem voor een wijziging of annulering zo snel mogelijk contact met ons op via ", // REVIEW
      cancelPost: ". Zodra je bestelling wordt verzonden, ontvang je per e-mail een track & trace-link zodat je je levering kunt volgen.", // REVIEW
      wholesalePre: "Ja — we werken met restaurants, delicatessenzaken, speciaalzaken, hotels en andere bedrijven, of je de olie nu aan tafel wilt serveren, in de keuken wilt gebruiken of in je schappen wilt leggen. Neem contact op via ons ", // REVIEW
      wholesaleContactLink: "contactformulier",
      wholesaleMid: " of schrijf rechtstreeks naar ",
      wholesalePost: " en wij regelen de rest.", // REVIEW
      shippingText: "We verzenden door de hele Europese Unie, van België en Nederland tot Finland en Portugal. Verzending begint bij €7 voor de kernlanden en loopt op tot €22 voor verder gelegen bestemmingen — maar de meeste bestellingen komen in aanmerking voor gratis verzending vanaf 2–4 flessen, afhankelijk van je locatie. Vandaag besteld is morgen verzonden, en de levering duurt 2–7 werkdagen, afhankelijk van waar je woont.", // REVIEW
      shippingLink: "Bekijk alle verzenddetails",
    },
  },

  productTabs: {
    flavourProfile: "Smaakprofiel",
    harvestDetails: "Oogstdetails",
    bestUses: "Beste toepassingen",
    shippingDelivery: "Verzending & levering",
    shippingBody:
      "We verzenden door heel Europa. Bestellingen worden zorgvuldig verpakt en de volgende werkdag verzonden. Levering duurt doorgaans 2–7 werkdagen, afhankelijk van je locatie. De meeste bestellingen van meerdere flessen komen in aanmerking voor gratis verzending.", // REVIEW
    shippingLink: "Bekijk alle verzendtarieven & levertijden →",
  },

  purchase: {
    oneTime: "Eenmalige aankoop",
    perBottle: " / fles",
    subscribe: "Abonneer & bespaar",
    deliveryFrequency: "Leverfrequentie",
    everyMonth: "Elke maand",
    every2Months: "Elke 2 maanden",
    every3Months: "Elke 3 maanden",
  },

  quantity: {
    bottleSingular: "Fles",
    bottlePlural: "Flessen",
    freeShipping: "Gratis verzending",
    onlyInStock: "{label} — nog maar {available} op voorraad",
    percentOff: "{label}, {pct}% korting",
  },

  notify: {
    comingSoon: "Binnenkort beschikbaar",
    subtitle: "Ontvang een melding zodra {name} op voorraad is.",
    onList: "✓ Je staat op de lijst",
    emailWhenStock: "We mailen je zodra {name} op voorraad is.",
    placeholder: "Je e-mailadres",
    notifyMe: "Houd me op de hoogte",
    success: "Je krijgt bericht zodra het weer op voorraad is!",
    error: "Er ging iets mis. Probeer het opnieuw.",
  },

  moreVarieties: "Meer variëteiten", // REVIEW

  firstOrderPopup: {
    heading: "Krijg 10% korting op je eerste bestelling",
    subtitle: "We mailen je je kortingscode.",
    emailPlaceholder: "Je e-mailadres",
    consent: "Ik ga akkoord met e-mails van ATTIMO",
    submitting: "Versturen…",
    submit: "Ontvang mijn code",
    successApply: "Gebruik je code bij het afrekenen voor 10% korting",
    successInbox: "Je vindt hem ook in je inbox",
    closeAria: "Sluiten",
    copyAria: "Code kopiëren",
  },

  shippingPage: {
    title: "Verzending | ATTIMO Specialty extra vierge olijfolie",
    heading: "Verzendinformatie",
    intro:
      "We verzenden door de hele Europese Unie. Hoe meer je bestelt, hoe minder je betaalt voor verzending — of helemaal niets.", // REVIEW
    factShipsTomorrow: "Vandaag besteld, morgen verzonden", // REVIEW
    factFreeMulti: "Gratis verzending bij bestellingen van meerdere flessen", // REVIEW
    factPacked: "Zorgvuldig verpakt voor een veilige levering", // REVIEW
    ratesHeading: "Verzendtarieven & drempels voor gratis verzending",
    standardLabel: "Standaard:",
    freeFromLabel: "GRATIS vanaf",
    estLabel: "Ca.",
    autoCalcNote:
      "Verzendkosten worden bij het afrekenen automatisch berekend op basis van je bezorgland.", // REVIEW
    processingHeading: "Verwerking & levering",
    processingP1:
      "Bestellingen die voor het einde van de dag worden geplaatst, worden de volgende werkdag ingepakt en verzonden. Je ontvangt per e-mail een track & trace-link zodra je bestelling ons pand verlaat.", // REVIEW
    processingP2:
      "Levertijden hangen af van je locatie. De meeste kernlanden (België, Duitsland, Luxemburg, Nederland) ontvangen hun bestelling binnen 2–3 werkdagen. Voor andere EU-bestemmingen reken je op 3–7 werkdagen, afhankelijk van vervoerder en bestemming.", // REVIEW
    returnsHeading: "Retouren & schade",
    returnsP1:
      "Omdat olijfolie een levensmiddel is, valt ze buiten het standaard Europese herroepingsrecht van 14 dagen uit de Richtlijn consumentenrechten. We accepteren geen retouren van geopende of onbeschadigde producten.", // REVIEW
    damagedStrong: "Beschadigd tijdens transport?",
    damagedPre: " Als je bestelling beschadigd of defect aankomt, neem dan binnen 14 dagen contact met ons op via ",
    damagedPost: " met een foto van de schade. We regelen een vervanging of volledige terugbetaling — zonder gedoe.", // REVIEW
    contactHeading: "Vragen over je bestelling?",
    contactSub: "We helpen je graag. Neem gerust contact op.", // REVIEW
    freeFromBottles: "{n} flessen",
    tierNames: { core: "Kern", tier1: "Zone 1", tier2: "Zone 2", tier3: "Zone 3" },
    delivery: {
      core: "2–3 werkdagen",
      tier1: "3–5 werkdagen",
      tier2: "4–6 werkdagen",
      tier3: "5–7 werkdagen",
    },
    countries: {
      Belgium: "België", Germany: "Duitsland", Luxembourg: "Luxemburg", Netherlands: "Nederland",
      Austria: "Oostenrijk", Bulgaria: "Bulgarije", Croatia: "Kroatië", Czechia: "Tsjechië", Denmark: "Denemarken",
      France: "Frankrijk", Hungary: "Hongarije", Liechtenstein: "Liechtenstein", Malta: "Malta", Poland: "Polen",
      Slovakia: "Slowakije", Slovenia: "Slovenië", Estonia: "Estland", Ireland: "Ierland", Italy: "Italië",
      Latvia: "Letland", Lithuania: "Litouwen", Spain: "Spanje", Sweden: "Zweden", Finland: "Finland",
      Greece: "Griekenland", Portugal: "Portugal", Romania: "Roemenië",
    },
  },

  productMeta: {
    coratina: {
      title: "Coratina | Monocultivar olijfolie, rijk aan polyfenolen, vroege oogst", // REVIEW
      description: "Coratina extra vierge olijfolie met 847mg/kg polyfenolen — onze hoogste. Biologisch gecertificeerd, monocultivar, vroege oogst, koudgeperst. 500ml.", // REVIEW
      productName: "Attimo Coratina extra vierge olijfolie 500ml",
    },
    nocellara: {
      title: "Nocellara | Monocultivar olijfolie, rijk aan polyfenolen, vroege oogst", // REVIEW
      description: "Nocellara extra vierge olijfolie uit Sicilië. Monocultivar, vroege oogst, koudgeperst. 400mg/kg polyfenolen, lab-getest. 500ml.", // REVIEW
      productName: "Attimo Nocellara extra vierge olijfolie 500ml",
    },
    picual: {
      title: "Picual | Monocultivar olijfolie, rijk aan polyfenolen, vroege oogst", // REVIEW
      description: "Picual extra vierge olijfolie uit Andalusië. Monocultivar, vroege oogst, koudgeperst. 675mg/kg polyfenolen, lab-getest. 500ml.", // REVIEW
      productName: "Attimo Picual extra vierge olijfolie 500ml",
    },
  },

  originRegionFallback: {
    heading: "Van olijfgaard tot fles", // REVIEW
    body: "ATTIMO Nocellara komt rechtstreeks van een kleine boerderij in de Belice-vallei aan de westkust van Sicilië, waar al sinds vóór de Romeinen olijfolie wordt gemaakt.\n\nHier zetten kalkrijke bodems en droge zomers de olijfbomen onder stress, waardoor de vruchten klein blijven en hun smaak geconcentreerd. De kust houdt de nachten koel, wat de opbouw van de agressievere fenolische verbindingen vertraagt. Vroeg geoogst is het resultaat een olie die rijk is aan polyfenolen maar zacht van karakter — zachter en ronder dan alles wat verder landinwaarts wordt geproduceerd.", // REVIEW
  },
};
