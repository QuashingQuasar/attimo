// ─────────────────────────────────────────────────────────────────────────
// Danish dictionary (da). Overlay on the English base (en.ts) — must implement
// the exact same shape (missing keys are a compile error).
//
// ⚠️ AI-DRAFTED — PENDING NATIVE DANISH REVIEW. Every string needs a native pass
// before it fronts the brand (Gilles doesn't read Danish). Watch especially:
// count/plural strings, the promo nudge ("{n} flasker"), and idiom in
// testimonials/FAQ.
//
// Proper names ("Coratina d'Italia"), numbers, emails and placeholders stay
// verbatim. Product long-form PDP copy is NOT here (productContent.da.ts, Phase 2).
// ─────────────────────────────────────────────────────────────────────────
import type { Dict } from "../dictionaries";

export const da: Dict = {
  nav: {
    shop: "Butik",
    blog: "Blog",
    quiz: "Quiz",
    merch: "Merch",
  },

  announce: {
    freeShipping2: "FRI FRAGT VED 2+ FLASKER",
    freeShipping3: "FRI FRAGT VED 3+ FLASKER",
  },

  meta: {
    home: {
      title: "ATTIMO Enkeltsorts olivenolie med højt polyfenolindhold, tidlig høst",
      description:
        "Enkeltsorts olivenolie med højt polyfenolindhold. Tidlig høst, labtestet kvalitet. Fra små familielunde til dit bord. Køb nu.",
    },
    shipping: {
      title: "Fragt & Levering | ATTIMO",
      description:
        "Fragtpriser, grænser for fri fragt og leveringstider for ATTIMO olivenolie i hele EU.",
    },
    quiz: {
      title: "Smagstest til olivenolie | ATTIMO",
      description:
        "Find din perfekte ATTIMO-olivenolie. Tag den 60 sekunder lange smagstest for at matche din smag med den rette enkeltsorts ekstra jomfruolie.",
    },
  },

  footer: {
    blog: "Blog",
    ambassadors: "Ambassadører",
    privacy: "Privatlivspolitik",
    terms: "Handelsbetingelser",
    shipping: "Fragt",
    contact: "Kontakt",
    manageOrders: "Administrer ordrer & abonnement",
    rights: "© 2026 ATTIMO. Alle rettigheder forbeholdes.",
    changeRegion: "Skift valuta eller land",
    shop: "Butik",
    learn: "Lær mere",
    company: "Virksomhed",
  },

  cart: {
    ariaLabel: "Indkøbskurv",
    title: "Indkøbskurv",
    emptyDescription: "Din indkøbskurv er i øjeblikket tom.",
    itemsInCart: (n: number) => `${n} ${n !== 1 ? "varer" : "vare"} i din kurv`,
    emptyHeading:
      "Det ser ud til, at du ikke har tilføjet noget endnu. Lad os komme i gang.",
    freeShipping: "Fri fragt ✓",
    freeShippingNudge: (n: number) =>
      `Tilføj ${n} ${n > 1 ? "flasker" : "flaske"} mere for fri fragt`,
    youMightAlsoLike: "Du kan også lide",
    add: "+ Tilføj",
    viewProduct: (name: string) => `Se ${name}`,
    subtotal: "Subtotal",
    shipping: "Fragt",
    free: "Gratis",
    calculatedAtCheckout: "Beregnes ved kassen",
    creatingCheckout: "Opretter kasse...",
    checkout: "Til kassen med Shopify",
    separateShipments: "Olivenolie og merch sendes separat",
  },

  quiz: {
    intro:
      "Svar på et par hurtige spørgsmål for at finde ud af, hvilken af vores tre enkeltsorts olier der passer bedst til dig.",
    backToAttimo: "← Tilbage til ATTIMO",
    resultsLabel: "Resultater",
    back: "Tilbage",
    next: "Næste",
    seeResults: "Se resultater",
    yourMatchIs: "Dit match er",
    why: (name: string) => `Hvorfor ${name}?`,
    shop: (name: string) => `Køb ${name}`,
    retake: "Tag testen igen",
  },

  products: {
    flavour: {
      coratina: "Kraftig & Intens",
      picual: "Grøn & Græsagtig",
      nocellara: "Mild & Frugtig",
    },
    tagline: {
      coratina: "Et skud af sunde polyfenoler",
      picual: "God til alt",
      nocellara: "Nem at kunne lide",
    },
  },

  hero: {
    cta: "Køb 25/26-høsten",
    badges: [
      "LABTESTET",
      "TIDLIG HØST",
      "ENKELTSORT",
      "FRA LUND TIL BORD",
      "ALTID FRISK",
      "KOLDPRESSET",
    ],
  },

  oilCollection: {
    heading: "Ekstra jomfru olivenolie i særklasse",
    subtitle:
      "Enkeltsorts oliven høstet tidligt og koldpresset inden for få timer for maksimal smag og sundhedsfordele.",
    size: "500ML",
    backSoon: "Snart igen",
    soldOut: "Midlertidigt udsolgt",
    quizPrompt: "Usikker på, hvilken olivenolie der passer til dig?",
    quizCta: "Find din smag →",
  },

  industryProblem: {
    headingPre: "Den store",
    headingLie: '"ekstra jomfru"-løgnen',
    intro:
      "Ekstra jomfruolie roses for sine sundheds- og livslængdefordele, men 80 % af olierne i supermarkederne lever ikke engang op til de grundlæggende krav og er reelt fattige på de polyfenoler, der giver disse fordele – og smagen.",
    stat1Value: "~80%",
    stat1Text:
      'olivenolier solgt som "ekstra jomfru" i supermarkeder lever ikke op til kravene',
    stat2Value: "~90%",
    stat2Text:
      '"ekstra jomfru"-olier er fattige på sundhedsfremmende polyfenoler',
    arg1Title: "Smag og sundhed blandes væk",
    arg1Text:
      "Store producenter skalerer ved at blande olier fra flere kilder og år til en standardiseret smag. Det ødelægger det, der gør ægte olivenolie speciel: frisk, distinkt smag og polyfenoler, der gør den supersund.",
    arg2Title: "Du har aldrig smagt den ægte vare",
    arg2Text:
      "Ægte ekstra jomfru er intens: bitter, peberagtig, aromatisk. Hver olie har et fingeraftryk: olivensort, lund, høst, håndværk. Det er også de sundeste olier, men de fleste får aldrig lov at smage dem.",
    arg3Title: "Storindustrien dræber familielundene",
    arg3Text:
      "Økonomisk pres tvinger små producenter til at sælge til industrielle aktører. Deres fantastiske olie blandes ud med billig vare og sælges for en slik. At lave olivenolie er en kunst ligesom vin – men når kunstnerne ikke får betaling, forsvinder kunsten.",
  },

  kleiaWay: {
    headingLine1: "Sådan sikrer vi",
    headingLine2: "At du får det gode",
    tiles: [
      {
        title: "ALTID FRISK",
        text: "Olivenolie altid fra seneste høst. Presset inden for få timer efter plukning, tappet på flaske når den er allerfriskest.",
      },
      {
        title: "ENKELTSORT",
        text: "Hver flaske er fra én enkelt olivensort. Du får det rene udtryk af sorten og dens oprindelse.",
      },
      {
        title: "TIDLIG HØST",
        text: "Olivenerne høstes tidligt på sæsonen, når de har flest polyfenoler, der giver smag og sundhed.",
      },
      {
        title: "FRA LUND TIL BORD",
        text: "Vi køber direkte fra dem, der laver olien. Ingen mellemmænd, ingen blanding, ingen genveje.",
      },
      {
        title: "LABTESTET KVALITET",
        text: "Hver flaske labtestes af tredjepart på vigtige kvalitetsmarkører, som du selv kan verificere.",
      },
    ],
  },

  oilComparison: {
    vs: "vs",
    others: "Andre",
    supermarketColumn: "Supermarkedsolie",
    features: {
      fresh: "FRISK",
      earlyHarvest: "TIDLIG HØST",
      singleSource: "ÉN KILDE",
      traceable: "SPORBAR",
      labTested: "LABTESTET",
      polyphenols: "POLYFENOLER",
    },
    themFreshNo: "Nej, blandet med gamle olier",
    themBlended: "Olie blandet fra 3+ lande",
  },

  polyphenol: {
    heading: "polyfenolforskellen",
    intro:
      "Polyfenoler gør hele forskellen for olivenoliens sundhedsfordele og smag. ATTIMO-olier presses af oliven, der høstes tidligt, når polyfenolerne er på deres højeste.",
    barAvg: "Gns. supermarkeds-EVOO",
    barEu: "EU's sundhedsanprisning",
    barBlueprint: "Blueprint Olive Oil",
    tooltips: {
      avgTitle: "Gennemsnitlig ekstra jomfru",
      avgSub: "~180 mg/kg polyfenoler",
      avgDesc:
        "De fleste supermarkeds-EVOO tester mellem 100–250 mg/kg. Blanding, alder og industriel forarbejdning reducerer alle polyfenolindholdet.",
      euTitle: "EU's sundhedsanprisning",
      euSub: "250 mg/kg polyfenoler",
      euDesc:
        "Den Europæiske Fødevaresikkerhedsautoritet (EFSA) tillader en sundhedsanprisning for olivenolie, der indeholder mindst 250 mg/kg polyfenoler.",
      blueprintTitle: "Blueprint Olive Oil",
      blueprintSub: "400 mg/kg polyfenoler",
      blueprintDesc:
        "Bryan Johnson bruger millioner på at optimere sit helbred for livslængde. Hans Blueprint-olivenolie, med 400 mg/kg polyfenoler, er en af de mest kendte polyfenolrige olier på markedet.",
      attimoTitle: "ATTIMO Olivenolie",
      attimoSub: "400–900 mg/kg polyfenoler",
      attimoDesc:
        "Vores olivenolier ligger mellem 400 og 900 mg/kg polyfenoler afhængigt af sorten.",
    },
    cards: [
      {
        content: "Polyfenoler er en type antioxidant, der findes i oliven.",
        content2:
          "De styrker kroppens forsvar mod cellealdring og bidrager til langsigtet stofskifte- og hjertesundhed.",
      },
      {
        content:
          "De højeste polyfenoltal kommer fra tidligt høstede oliven, plukket og presset inden for få timer.",
        content2: "Når olien først er tappet, falder niveauerne støt over tid.",
      },
      {
        content:
          "Kommercielle olier kombinerer partier fra flere lande og år for at sikre forsyningen.",
        content2:
          "Den proces udvander polyfenolindholdet langt under niveauet for friskpresset olie.",
      },
    ],
  },

  testimonials: {
    heading: "Ord fra gaden",
    reviews: [
      { title: "Godt på alt!", text: "Jeg plejede kun at lave mad med olivenolie. Nu kommer jeg den på alt. Vidste ikke, den kunne have så meget smag." },
      { title: "Som at bo i Spanien igen", text: "Efter at have boet i Spanien et stykke tid vænnede jeg mig til fantastisk olivenolie omkring mig. Det er svært at finde gode i Tyskland; Attimo bragte vidunderlige minder tilbage." },
      { title: "Endelig", text: "Jeg tager altid masser af olivenolie med hjem fra ferien, men den slipper hurtigt op. Meget glad for endelig at have fundet ægte olivenolie herhjemme." },
      { title: "Superfrisk", text: "Jeg har prøvet mange olivenolier, og denne er min favorit. Duften er helt uvirkelig, så frisk at det er som om olivenerne bliver presset lige der og da." },
      { title: "Jeg blev hurtigt hooked", text: "Jeg købte 4 flasker, og de var væk på en måned. Køber aldrig i supermarkedet igen." },
      { title: "Man kan smage kvaliteten", text: "Jeg var skeptisk over for prisen, men nu forstår jeg det. Man kan virkelig smage forskellen i kvalitet, der er intet som dette i de lokale butikker her." },
      { title: "Frisk høst på flaske", text: "Det smager, som om jeg lige har plukket olivenerne og presset dem selv. Superfrisk og naturligt, jeg elsker det!" },
    ],
  },

  blog: {
    heading: "The Olive Press",
    seeMore: "Se flere indlæg",
    noArticles: "Ingen artikler fundet endnu.",
    noImage: "Intet billede",
    readMore: "Læs mere",
    newsletterPrompt: "Få ATTIMO-historier, indsigter og nyheder i din indbakke",
    emailPlaceholder: "din@email.com",
    subscribe: "Tilmeld",
    invalidEmail: "Indtast en gyldig e-mailadresse.",
    subscribed: "Du er på listen!",
    error: "Noget gik galt. Prøv igen.",
  },

  product: {
    loading: "Indlæser produkt...",
    notFound: "Produktet blev ikke fundet",
    formatLabel: "Format",
    formatBottleName: "Flaske",
    formatBottleVolume: "500 ml",
    formatBoxName: "Bag-in-Box",
    formatBoxVolume: "3 L",
    formatBoxBadge: "BEDSTE VÆRDI",
    formatServings: "{n} portioner ({price} pr. portion)",
    newHarvest: "Ny høst",
    inStock: "På lager",
    lastBottles: "Sidste flasker",
    lastBoxes: "Sidste kasser",
    soldOut: "Udsolgt",
    comingSoon: "Kommer snart",
    backSoon: "Snart igen",
    newBatchHeading: "Nyt parti på vej",
    newBatchSubtitle:
      "Vi sender dig en e-mail, når Coratina d'Italia er tilgængelig igen (anslået 1–2 uger).",
    attrVariety: "Sort",
    attrOrigin: "Oprindelse",
    attrHarvest: "Høst",
    attrFlavour: "Smag",
    harvestDate: "Oktober 2025",
    addToCart: "LÆG I KURV",
    freeShipCheck: "FRI FRAGT ✓",
    addForFreeShip: "TILFØJ {n} {more}FLASKER FOR FRI FRAGT",
    moreWord: "FLERE ",
    trustLab: "Tredjeparts-labtestet kvalitet",
    shipsTomorrow: "Bestil i dag, sendes i morgen",
    viewLabResults: "Se labresultater",
    howToReadLabValues: "Sådan læser du labværdier for olivenolie",
    waitingResults: "(Afventer resultater)",
    polyTooltipAria: "Hvad betyder bioaktive polyfenoler?",
    polyTooltipText:
      'Ikke alle polyfenoler er ens. Vores {value} {unit} måles med EU\'s standardmetode HPLC på et ISO-akkrediteret laboratorium. Mange producenter angiver "samlede polyfenoler" med bredere metoder, der inkluderer stoffer med mindre dokumenteret sundhedseffekt, hvilket giver højere tal, der ikke er direkte sammenlignelige.',
    toastAdded: "Tilføjede {n} flasker til kurven",
    toastAddedBox: "Tilføjede 3L Bag-in-Box til kurven",
    titleSuffix: "Ekstra jomfru olivenolie i særklasse",
  },

  faq: {
    heading: "Ofte stillede spørgsmål",
    origin: {
      coratina: "ATTIMO Coratina kommer direkte fra en lille familielund i Puglia, Italien – landets største olivenolieproducerende region, kendt for sine hundredårige træer og enestående kvalitet.",
      nocellara: "ATTIMO Nocellara kommer direkte fra en lille familielund i Belice-dalen på Sicilien – en region kendt for sin mineralrige jord og ideelle middelhavsforhold.",
      picual: "ATTIMO Picual kommer direkte fra en lille familielund i Jaén, Spanien – verdens største olivenolieproducerende region, hvor Picual er dyrket i århundreder.",
      generic: "ATTIMO køber fra små, familieejede lunde i middelhavsregioner kendt for enestående olivenolie. Hver flaske kommer fra én enkelt lund og blandes aldrig, så du kan spore præcis, hvor din olie er produceret.",
    },
    flavour: {
      coratina: "Coratina er en af de mest intenst smagfulde olivensorter. Forvent kraftfulde toner af friske urter, artiskok og sort peber, med et ekstremt højt polyfenolspark og en tør, langvarig eftersmag. Det er olivenolien, kendere tager med ske.",
      nocellara: "Nocellara giver en mild, frugtig olie med toner af frisk tomat, mandel og grønt æble. Den er blød og lettilgængelig med en mild peberagtig eftersmag – perfekt til dem, der foretrækker en blødere smagsprofil.",
      picual: "Picual byder på en robust, græsagtig olie med toner af nyklippede urter, figenblad og en ren peberagtig eftersmag. En alsidig allroundolie, fyldt med polyfenoler og perfekt til hverdagsbrug.",
      generic: "Den bitterhed og peberagtige spark kommer fra polyfenoler – stofferne, der gør olivenolie sund. De fleste er vant til smagløse, overforarbejdede olier. Ægte ekstra jomfru bør have karakter: intens, frisk og kompleks.",
    },
    use: {
      coratina: "Coratina bruges bedst som finisholie for at få mest muligt ud af dens kraftfulde smag og sundhedsfordele. Dryp den over bøf, grillede grøntsager, solide supper, bruschetta eller endda is. Den nydes bedst rå eller tilsat efter tilberedning, da høj varme kan nedbryde polyfenolerne.",
      nocellara: "Nocellara er en alsidig hverdagsolie. Dryp den over salater, fisk, pasta og friskt brød. Dens milde karakter gør den fremragende til lettere retter, hvor du vil have smag uden at overdøve maden. Nydes bedst rå eller tilsat efter tilberedning.",
      picual: "Picual er en fremragende allroundolie. Brug den til at afslutte ovnbagte grøntsager, dryppe over hummus, dresse korn og bælgfrugter eller dyppe med sprødt brød. Dens robuste karakter holder godt, men den nydes bedst rå eller tilsat efter tilberedning for at bevare polyfenolerne.",
      generic: "Brug ATTIMO som finisholie for at få mest muligt ud af smag og sundhedsfordele. Dryp den over salater, tilberedte grøntsager, pasta, brød eller grillet kød. Den nydes bedst rå eller tilsat efter tilberedning, da høj varme kan nedbryde polyfenolerne, der gør den speciel.",
    },
    q: {
      different: "Hvad gør ATTIMO olivenolie anderledes?",
      origin: "Hvor kommer denne olivenolie fra?",
      tasteTemplate: "Hvordan smager ATTIMO {variety}?",
      tasteNoHandle: "Hvordan smager den?",
      polyphenols: "Hvad er polyfenoler, og hvorfor er de vigtige?",
      fresh: "Hvor frisk er olivenolien?",
      lab: "Kan jeg se labresultaterne?",
      use: "Hvordan skal jeg bruge denne olivenolie?",
      store: "Hvordan skal jeg opbevare min olivenolie?",
      cancel: "Kan jeg ændre eller annullere min ordre?",
      organic: "Er jeres olivenolie økologisk?",
      wholesale: "Sælger I engros eller til restauranter?",
      shipping: "Hvor sender I til, og hvad koster det?",
    },
    a: {
      different: "ATTIMO køber direkte fra enkelte lunde og sikrer, at hver flaske kommer fra seneste høst uden blanding eller mellemmænd. Hver flaske labtestes på kvalitetsmarkører som polyfenolindhold, hvilket giver dig den ægte, sundhedsfremmende ekstra jomfruolie, som de fleste aldrig har smagt.",
      fresh: "Hver flaske kommer fra seneste høst og tappes hurtigt for at bevare friskheden. I modsætning til masseproducerede olier, der kan stå i måneder eller år, leverer ATTIMO olie inden for måneder efter høst. Sådan får du maksimal smag og sundhedsfordele.",
      store: "Opbevar den køligt og mørkt, væk fra varme og lys. Når den er åbnet, brug den inden for få måneder for optimal friskhed. Stofferne, der gør den sund, nedbrydes over tid, så friskere er altid bedre.",
      organic: "Vores Coratina er økologisk certificeret. For vores andre olier er økologisk certificering ikke den primære linse, vi bruger – vi går dybt op i, hvordan olivenerne dyrkes og forarbejdes, og prioriterer lavintensivt landbrug, tidlig høst og kvalitet frem for alt. Certificeret eller ej holder vi hver olie til samme høje standard.",
      polyphenolsText: "Polyfenoler er naturlige stoffer i olivenolie, der giver de sundhedsfordele, du har hørt om – antiinflammatoriske egenskaber, støtte til hjertesundhed og antioxidantbeskyttelse. De fleste butikskøbte olier har lave polyfenolniveauer på grund af forarbejdning og blanding. ATTIMO-olier er rige på polyfenoler, fordi de er friske, ublandede og fra kvalitetskilder.",
      polyphenolsLink: "Læs mere om polyfenoler",
      labGeneric: "Absolut. Hvert parti ATTIMO-olie labtestes uafhængigt af tredjepart, og de fulde resultater findes på hver produktside. Vi tester polyfenolindhold, syre, peroxidværdier og mere. Vi tror på fuld gennemsigtighed – du skal altid kunne verificere kvaliteten af det, du kommer på tallerkenen.",
      labText: "Ja. Hvert parti labtestes af tredjepart, og du kan selv verificere kvalitetsmarkørerne. Vi tror på fuld gennemsigtighed – du skal vide præcis, hvad du får.",
      labLinkPrefix: "Se labresultater for ",
      useLink: "Læs mere om at lave mad med olivenolie",
      cancelPre: "Ordrer kan ændres eller annulleres, inden de ekspederes. Når din ordre er afsendt, kan vi ikke foretage ændringer. For at anmode om en ændring eller annullering, kontakt os hurtigst muligt på ",
      cancelPost: ". Når din ordre er afsendt, modtager du et sporingslink via e-mail, så du kan følge din levering.",
      wholesalePre: "Ja – vi samarbejder med restauranter, delikatesseforretninger, specialbutikker, hoteller og andre virksomheder, uanset om du vil servere den ved bordet, bruge den i køkkenet eller have den på hylden. Kontakt os via vores ",
      wholesaleContactLink: "kontaktformular",
      wholesaleMid: " eller skriv direkte til ",
      wholesalePost: " så tager vi den derfra.",
      shippingText: "Vi sender i hele EU. Fragten starter ved 7 € for kernelande og går op til 40 € for mere fjerne destinationer – men de fleste ordrer kvalificerer til fri fragt, når du bestiller 2–3 flasker afhængigt af, hvor du bor. Ordrer i dag sendes i morgen, og levering tager 2–7 hverdage afhængigt af, hvor du er.",
      shippingLink: "Se fulde fragtdetaljer",
    },
  },

  productTabs: {
    flavourProfile: "Smagsprofil",
    harvestDetails: "Høstdetaljer",
    bestUses: "Bedste anvendelse",
    shippingDelivery: "Fragt & Levering",
    shippingBody:
      "Vi sender i hele Europa. Ordrer pakkes omhyggeligt og afsendes næste hverdag. Levering tager typisk 2–7 hverdage afhængigt af, hvor du bor. De fleste ordrer med flere flasker kvalificerer til fri fragt.",
    shippingLink: "Se fulde fragtpriser & leveringstider →",
  },

  bundle: {
    sectionHeading: "Sæt",
    sectionSubtitle: "Jo flere, jo bedre.",
    stillAvailable: "Stadig på lager",
    inTheBox: "I æsken",
    save: "Spar",
    polyphenols: "polyfenoler",
    whatsInside: "Indhold",
    harvestPara:
      "Hver flaske er fra den seneste høst, presset tidligt i oktober og solgt frisk. Vi sælger kun den aktuelle sæson. Når den er udsolgt, er den væk indtil næste år.",
    shippingPara:
      "Gratis fragt fra to flasker, så dette sæt altid sendes gratis. Bestil i dag, og det er på vej i morgen.",
    shippingLink: "Fragt og levering",
    feat: {
      earlyHarvest: { title: "Tidlig høst", desc: "Plukket tidligt, når olivenerne er rigest på de polyfenoler, der driver både smag og sundhed." },
      singleVariety: { title: "Enkelt sort" },
      coldPressed: { title: "Koldpresset", desc: "Presset inden for få timer efter høst ved lav temperatur for at bevare hver dråbe smag og næring." },
      labTested: { title: "Labtestet", desc: "Hver batch testes uafhængigt på de markører, der betyder noget: polyfenoler, syre og friskhed. Se kvaliteten selv." },
      alwaysFresh: { title: "Altid frisk", desc: "Olivenolie kun fra den seneste høst, for i modsætning til vin bliver den ikke bedre med alderen." },
    },
  },

  purchase: {
    oneTime: "Engangskøb",
    perBottle: " / flaske",
    subscribe: "Abonnér & spar",
    deliveryFrequency: "Leveringsfrekvens",
    everyMonth: "Hver måned",
    every2Months: "Hver 2. måned",
    every3Months: "Hver 3. måned",
  },

  quantity: {
    bottleSingular: "Flaske",
    bottlePlural: "Flasker",
    freeShipping: "Fri fragt",
    onlyInStock: "{label} — kun {available} på lager",
    percentOff: "{label}, {pct}% rabat",
  },

  notify: {
    comingSoon: "Kommer snart",
    subtitle: "Få besked, når {name} er på lager.",
    onList: "✓ Du er på listen",
    emailWhenStock: "Vi sender dig en e-mail, når {name} er på lager.",
    placeholder: "Din e-mailadresse",
    notifyMe: "Giv mig besked",
    success: "Du får besked, når den er på lager igen!",
    error: "Noget gik galt. Prøv igen.",
  },

  moreVarieties: "Flere sorter",

  firstOrderPopup: {
    heading: "10% rabat på din første ordre",
    subtitle: "Vi sender din rabatkode på e-mail.",
    emailPlaceholder: "Din e-mailadresse",
    consent: "Jeg accepterer at modtage e-mails fra ATTIMO",
    submitting: "Sender…",
    submit: "Hent min kode",
    successApply: "Brug din kode i kassen for 10% rabat",
    successInbox: "Du finder den også i din indbakke",
    closeAria: "Luk",
    copyAria: "Kopiér kode",
  },

  shippingPage: {
    title: "Fragt | ATTIMO Ekstra jomfru olivenolie i særklasse",
    heading: "Fragtinformation",
    intro:
      "Vi sender i hele EU. Jo mere du bestiller, desto mindre betaler du for fragt – eller intet overhovedet.",
    factShipsTomorrow: "Bestil i dag, sendes i morgen",
    factFreeMulti: "Fri fragt på ordrer med flere flasker",
    factPacked: "Omhyggeligt pakket til sikker levering",
    ratesHeading: "Fragtpriser & grænser for fri fragt",
    standardLabel: "Standard:",
    freeFromLabel: "GRATIS fra",
    estLabel: "Ca.",
    autoCalcNote:
      "Fragtomkostninger beregnes automatisk ved kassen baseret på dit leveringsland.",
    processingHeading: "Behandling & levering",
    processingP1:
      "Ordrer afgivet inden dagens slutning pakkes og sendes næste hverdag. Du modtager et sporingslink via e-mail, så snart din ordre forlader vores lager.",
    processingP2:
      "Leveringstider afhænger af, hvor du bor. De fleste kernelande (Belgien, Tyskland, Luxembourg, Holland) modtager deres ordre inden for 2–3 hverdage. For andre EU-destinationer, forvent 3–7 hverdage afhængigt af transportør og destination.",
    returnsHeading: "Returnering & skader",
    returnsP1:
      "Da olivenolie er en fødevare, er den undtaget fra den almindelige 14-dages fortrydelsesret i henhold til EU's forbrugerrettighedsdirektiv. Vi tager ikke imod returneringer på åbnede eller ubeskadigede produkter.",
    damagedStrong: "Beskadiget under transport?",
    damagedPre: " Hvis din ordre ankommer beskadiget eller defekt, kontakt os inden for 14 dage på ",
    damagedPost: " med et foto af skaden. Vi arrangerer en erstatning eller fuld refundering – uden besvær.",
    contactHeading: "Spørgsmål om din ordre?",
    contactSub: "Vi er her for at hjælpe. Kontakt os når som helst.",
    freeFromBottles: "{n} flasker",
    tierNames: { core: "Kerne", tier1: "Niveau 1", tier2: "Niveau 2", tier3: "Niveau 3", tier4: "Niveau 4", tier5: "Niveau 5" },
    delivery: {
      core: "2–3 hverdage",
      tier1: "3–5 hverdage",
      tier2: "4–6 hverdage",
      tier3: "5–7 hverdage",
      tier4: "6–8 hverdage",
      tier5: "5–8 hverdage",
    },
    countries: {
      Belgium: "Belgien", Germany: "Tyskland", Luxembourg: "Luxembourg", Netherlands: "Holland",
      Austria: "Østrig", Bulgaria: "Bulgarien", Croatia: "Kroatien", Czechia: "Tjekkiet", Denmark: "Danmark",
      France: "Frankrig", Hungary: "Ungarn", Liechtenstein: "Liechtenstein", Malta: "Malta", Poland: "Polen",
      Slovakia: "Slovakiet", Slovenia: "Slovenien", Estonia: "Estland", Ireland: "Irland", Italy: "Italien",
      Latvia: "Letland", Lithuania: "Litauen", Spain: "Spanien", Sweden: "Sverige", Finland: "Finland",
      Greece: "Grækenland", Portugal: "Portugal", Romania: "Rumænien", Cyprus: "Cypern", Norway: "Norge", Switzerland: "Schweiz",
    },
  },

  productMeta: {
    coratina: {
      title: "Coratina | Polyfenolrig, enkeltsorts ekstra jomfruolie fra tidlig høst",
      description: "Coratina ekstra jomfruolie med 847 mg/kg polyfenoler – vores højeste. Økologisk certificeret, enkeltsorts, tidlig høst, koldpresset. 500ml.",
      productName: "Attimo Coratina Extra Virgin Olive Oil 500ml",
    },
    nocellara: {
      title: "Nocellara | Enkeltsorts, polyfenolrig ekstra jomfruolie fra tidlig høst",
      description: "Nocellara ekstra jomfruolie fra Sicilien. Enkeltsorts, tidlig høst, koldpresset. 400 mg/kg polyfenoler, labtestet. 500ml.",
      productName: "Attimo Nocellara Extra Virgin Olive Oil 500ml",
    },
    picual: {
      title: "Picual | Enkeltsorts, polyfenolrig ekstra jomfruolie fra tidlig høst",
      description: "Picual ekstra jomfruolie fra Andalusien. Enkeltsorts, tidlig høst, koldpresset. 675 mg/kg polyfenoler, labtestet. 500ml.",
      productName: "Attimo Picual Extra Virgin Olive Oil 500ml",
    },
  },

  originRegionFallback: {
    heading: "Fra lund til flaske",
    body: "ATTIMO Nocellara kommer direkte fra en lille gård i Belice-dalen på Siciliens vestkyst, hvor man har lavet olivenolie siden før romerne.\n\nHer stresser kalkholdig jord og tørre somre oliventræerne, hvilket får frugterne til at forblive små med koncentreret smag. Kysten holder nætterne kølige, hvilket bremser ophobningen af de mere aggressive fenolforbindelser. Tidligt høstet bliver resultatet en olie, der er rig på polyfenoler, men mild i karakteren – blødere og rundere end noget, der produceres længere inde i landet.",
  },
};
