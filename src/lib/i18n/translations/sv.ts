// ─────────────────────────────────────────────────────────────────────────
// Swedish dictionary (sv). Overlay on the English base (en.ts) — must implement
// the exact same shape (missing keys are a compile error).
//
// ⚠️ AI-DRAFTED — PENDING NATIVE SWEDISH REVIEW. Every string in this file needs
// a native pass before it fronts the brand (Gilles doesn't read Swedish). Watch
// especially: count/plural strings (Swedish plural ≠ English "+s"), the promo
// nudge ("{n} flaskor"), and idiom in testimonials/FAQ.
//
// Proper names ("Coratina d'Italia"), numbers, emails and placeholders stay
// verbatim. Product long-form PDP copy is NOT here (productContent.sv.ts, Phase 2).
// ─────────────────────────────────────────────────────────────────────────
import type { Dict } from "../dictionaries";

export const sv: Dict = {
  nav: {
    shop: "Butik",
    blog: "Blogg",
    quiz: "Quiz",
    merch: "Merch",
  },

  announce: {
    freeShipping2: "FRI FRAKT VID 2+ FLASKOR",
    freeShipping3: "FRI FRAKT VID 3+ FLASKOR",
  },

  meta: {
    home: {
      title: "ATTIMO Sortren olivolja med hög polyfenolhalt, tidig skörd",
      description:
        "Sortren olivolja med hög polyfenolhalt. Tidig skörd, labbtestad kvalitet. Från små familjelundar till ditt bord. Handla nu.",
    },
    shipping: {
      title: "Frakt & Leverans | ATTIMO",
      description:
        "Fraktpriser, gränser för fri frakt och leveranstider för ATTIMO olivolja i hela EU.",
    },
    quiz: {
      title: "Smaktest för olivolja | ATTIMO",
      description:
        "Hitta din perfekta ATTIMO-olivolja. Gör det 60 sekunder långa smaktestet för att matcha din smak med rätt sortrena extra jungfruolja.",
    },
  },

  footer: {
    blog: "Blogg",
    ambassadors: "Ambassadörer",
    privacy: "Integritetspolicy",
    terms: "Användarvillkor",
    shipping: "Frakt",
    contact: "Kontakt",
    manageOrders: "Hantera beställningar & prenumeration",
    rights: "© 2026 ATTIMO. Alla rättigheter förbehållna.",
    changeRegion: "Byt valuta eller land",
    shop: "Butik",
    learn: "Lär dig mer",
    company: "Företag",
  },

  cart: {
    ariaLabel: "Varukorg",
    title: "Varukorg",
    emptyDescription: "Din varukorg är för närvarande tom.",
    itemsInCart: (n: number) => `${n} ${n !== 1 ? "varor" : "vara"} i din varukorg`,
    emptyHeading:
      "Det ser ut som att du inte lagt till något än. Nu sätter vi igång.",
    freeShipping: "Fri frakt ✓",
    freeShippingNudge: (n: number) =>
      `Lägg till ${n} ${n > 1 ? "flaskor" : "flaska"} till för fri frakt`,
    youMightAlsoLike: "Du kanske också gillar",
    add: "+ Lägg till",
    viewProduct: (name: string) => `Visa ${name}`,
    subtotal: "Delsumma",
    shipping: "Frakt",
    free: "Gratis",
    calculatedAtCheckout: "Beräknas i kassan",
    creatingCheckout: "Skapar kassa...",
    checkout: "Till kassan med Shopify",
    separateShipments: "Olivolja och merch skickas separat",
  },

  quiz: {
    intro:
      "Svara på några snabba frågor för att ta reda på vilken av våra tre sortrena oljor som passar dig bäst.",
    backToAttimo: "← Tillbaka till ATTIMO",
    resultsLabel: "Resultat",
    back: "Tillbaka",
    next: "Nästa",
    seeResults: "Se resultat",
    yourMatchIs: "Din match är",
    why: (name: string) => `Varför ${name}?`,
    shop: (name: string) => `Köp ${name}`,
    retake: "Gör om testet",
  },

  products: {
    flavour: {
      coratina: "Kraftig & Intensiv",
      picual: "Grön & Gräsig",
      nocellara: "Mjuk & Fruktig",
    },
    tagline: {
      coratina: "En dos nyttiga polyfenoler",
      picual: "Bra på allt",
      nocellara: "Lätt att gilla",
    },
  },

  hero: {
    cta: "Handla 25/26-skörden",
    badges: [
      "LABBTESTAD",
      "TIDIG SKÖRD",
      "SORTREN",
      "FRÅN LUND TILL BORD",
      "ALLTID FÄRSK",
      "KALLPRESSAD",
    ],
  },

  oilCollection: {
    heading: "Extra jungfruolja i specialklass",
    subtitle:
      "Sortrena oliver skördade tidigt och kallpressade inom några timmar för maximal smak och hälsofördelar.",
    size: "500ML",
    backSoon: "Snart åter",
    soldOut: "Tillfälligt slutsåld",
    quizPrompt: "Osäker på vilken olivolja som passar dig?",
    quizCta: "Hitta din smak →",
  },

  industryProblem: {
    headingPre: "Den stora",
    headingLie: '"extra jungfru"-lögnen',
    intro:
      "Extra jungfruolja hyllas för sina hälso- och livslängdsfördelar, men 80 % av oljorna i mataffärerna uppfyller inte ens grundläggande krav och är i själva verket fattiga på de polyfenoler som ger dessa fördelar – och smaken.",
    stat1Value: "~80%",
    stat1Text:
      'olivoljor som säljs som "extra jungfru" i mataffärer uppfyller inte kraven',
    stat2Value: "~90%",
    stat2Text:
      '"extra jungfru"-oljor är fattiga på hälsofrämjande polyfenoler',
    arg1Title: "Smak och hälsa blandas bort",
    arg1Text:
      "Stora producenter skalar upp genom att blanda oljor från flera källor och år till en standardiserad smak. Det förstör det som gör riktig olivolja speciell: färsk, distinkt smak och polyfenoler som gör den supernyttig.",
    arg2Title: "Du har aldrig smakat den äkta varan",
    arg2Text:
      "Äkta extra jungfru är intensiv: bitter, pepprig, aromatisk. Varje olja har ett fingeravtryck: olivsort, lund, skörd, hantverk. Det är också de nyttigaste oljorna, men de flesta får aldrig smaka dem.",
    arg3Title: "Storindustrin dödar familjelundarna",
    arg3Text:
      "Ekonomisk press tvingar små producenter att sälja till industriella aktörer. Deras fantastiska olja blandas ut med billig vara och säljs för en spottstyver. Att göra olivolja är en konst, precis som vin – men när konstnärerna inte får betalt försvinner konsten.",
  },

  kleiaWay: {
    headingLine1: "Så ser vi till",
    headingLine2: "Att du får det goda",
    tiles: [
      {
        title: "ALLTID FÄRSK",
        text: "Olivolja alltid från senaste skörden. Pressad inom några timmar efter plockning, tappad på flaska när den är som färskast.",
      },
      {
        title: "SORTREN",
        text: "Varje flaska kommer från en enda olivsort. Du får det rena uttrycket av sorten och dess ursprung.",
      },
      {
        title: "TIDIG SKÖRD",
        text: "Oliverna skördas tidigt på säsongen när de har som mest polyfenoler som ger smak och hälsa.",
      },
      {
        title: "FRÅN LUND TILL BORD",
        text: "Vi köper direkt från dem som gör oljan. Inga mellanhänder, ingen blandning, inga genvägar.",
      },
      {
        title: "LABBTESTAD KVALITET",
        text: "Varje flaska labbtestas av tredje part på viktiga kvalitetsmarkörer som du själv kan verifiera.",
      },
    ],
  },

  oilComparison: {
    vs: "vs",
    others: "Andra",
    supermarketColumn: "Snabbköpsolja",
    features: {
      fresh: "FÄRSK",
      earlyHarvest: "TIDIG SKÖRD",
      singleSource: "EN KÄLLA",
      traceable: "SPÅRBAR",
      labTested: "LABBTESTAD",
      polyphenols: "POLYFENOLER",
    },
    themFreshNo: "Nej, blandad med gamla oljor",
    themBlended: "Olja blandad från 3+ länder",
  },

  polyphenol: {
    heading: "polyfenolskillnaden",
    intro:
      "Polyfenoler gör hela skillnaden för olivoljans hälsofördelar och smak. ATTIMO-oljor pressas från oliver som skördas tidigt, när polyfenolerna är på topp.",
    barAvg: "Snitt snabbköps-EVOO",
    barEu: "EU:s hälsopåstående",
    barBlueprint: "Blueprint Olive Oil",
    tooltips: {
      avgTitle: "Genomsnittlig extra jungfru",
      avgSub: "~180 mg/kg polyfenoler",
      avgDesc:
        "De flesta snabbköps-EVOO testar mellan 100–250 mg/kg. Blandning, ålder och industriell bearbetning minskar alla polyfenolhalten.",
      euTitle: "EU:s hälsopåstående",
      euSub: "250 mg/kg polyfenoler",
      euDesc:
        "Europeiska myndigheten för livsmedelssäkerhet (EFSA) tillåter ett hälsopåstående för olivolja som innehåller minst 250 mg/kg polyfenoler.",
      blueprintTitle: "Blueprint Olive Oil",
      blueprintSub: "400 mg/kg polyfenoler",
      blueprintDesc:
        "Bryan Johnson lägger miljoner på att optimera sin hälsa för livslängd. Hans Blueprint-olivolja, med 400 mg/kg polyfenoler, är en av de mest kända polyfenolrika oljorna på marknaden.",
      attimoTitle: "ATTIMO Olivolja",
      attimoSub: "400–900 mg/kg polyfenoler",
      attimoDesc:
        "Våra olivoljor ligger mellan 400 och 900 mg/kg polyfenoler beroende på sort.",
    },
    cards: [
      {
        content: "Polyfenoler är en typ av antioxidant som finns i oliver.",
        content2:
          "De stärker kroppens försvar mot cellåldrande och bidrar till långsiktig metabol hälsa och hjärthälsa.",
      },
      {
        content:
          "De högsta polyfenolhalterna kommer från tidigt skördade oliver, plockade och pressade inom några timmar.",
        content2: "När oljan väl är tappad sjunker halterna stadigt med tiden.",
      },
      {
        content:
          "Kommersiella oljor kombinerar partier från olika länder och år för att säkra tillgången.",
        content2:
          "Den processen späder ut polyfenolhalten långt under nivån hos färskpressad olja.",
      },
    ],
  },

  testimonials: {
    heading: "Ord från gatan",
    reviews: [
      { title: "Gott på allt!", text: "Jag brukade bara laga mat med olivolja. Nu häller jag den på allt. Visste inte att den kunde ha så mycket smak." },
      { title: "Som att bo i Spanien igen", text: "Efter att ha bott i Spanien ett tag vande jag mig vid fantastisk olivolja omkring mig. Det är svårt att hitta bra oljor i Tyskland; Attimo väckte underbara minnen till liv." },
      { title: "Äntligen", text: "Jag tar alltid med mig massor av olivolja från semestern, men den tar snabbt slut. Väldigt glad att äntligen ha hittat riktig olivolja hemma." },
      { title: "Superfärsk", text: "Jag har provat många olivoljor och den här är min favorit. Doften är helt overklig, så färsk att det känns som att oliverna pressas just då och där." },
      { title: "Jag fastnade snabbt", text: "Jag köpte 4 flaskor och de var slut på en månad. Köper aldrig i snabbköpet igen." },
      { title: "Man smakar kvaliteten", text: "Jag var skeptisk till priset men nu förstår jag. Man känner verkligen skillnaden i kvalitet, det finns inget liknande i de lokala butikerna här." },
      { title: "Färsk skörd på flaska", text: "Det smakar som att jag precis plockat oliverna och pressat dem själv. Superfärskt och naturligt, jag älskar det!" },
    ],
  },

  blog: {
    heading: "The Olive Press",
    seeMore: "Se fler inlägg",
    noArticles: "Inga artiklar hittades än.",
    noImage: "Ingen bild",
    readMore: "Läs mer",
    newsletterPrompt: "Få ATTIMO-berättelser, insikter och nyheter i din inkorg",
    emailPlaceholder: "din@email.com",
    subscribe: "Prenumerera",
    invalidEmail: "Ange en giltig e-postadress.",
    subscribed: "Du är med på listan!",
    error: "Något gick fel. Försök igen.",
  },

  product: {
    loading: "Laddar produkt...",
    notFound: "Produkten hittades inte",
    formatLabel: "Format",
    formatBottleName: "Flaska",
    formatBottleVolume: "500 ml",
    formatBoxName: "Bag-in-Box",
    formatBoxVolume: "3 L",
    formatBoxBadge: "BÄST VÄRDE",
    formatServings: "{n} portioner ({price} per portion)",
    newHarvest: "Ny skörd",
    inStock: "I lager",
    lastBottles: "Sista flaskorna",
    lastBoxes: "Sista boxarna",
    soldOut: "Slutsåld",
    comingSoon: "Kommer snart",
    backSoon: "Snart åter",
    newBatchHeading: "Nytt parti på väg",
    newBatchSubtitle:
      "Vi mejlar dig när Coratina d'Italia finns tillgänglig igen (uppskattningsvis 1–2 veckor).",
    attrVariety: "Sort",
    attrOrigin: "Ursprung",
    attrHarvest: "Skörd",
    attrFlavour: "Smak",
    harvestDate: "Oktober 2025",
    addToCart: "LÄGG I VARUKORG",
    freeShipCheck: "FRI FRAKT ✓",
    addForFreeShip: "LÄGG TILL {n} {more}FLASKOR FÖR FRI FRAKT",
    moreWord: "FLER ",
    trustLab: "Tredjepartslabbtestad kvalitet",
    shipsTomorrow: "Beställ idag, skickas imorgon",
    viewLabResults: "Se labbresultat",
    howToReadLabValues: "Så läser du labbvärden för olivolja",
    waitingResults: "(Väntar på resultat)",
    polyTooltipAria: "Vad betyder bioaktiva polyfenoler?",
    polyTooltipText:
      'Alla polyfenoler är inte lika. Våra {value} {unit} mäts med EU:s standardmetod HPLC på ett ISO-ackrediterat labb. Många producenter anger "totala polyfenoler" med bredare metoder som inkluderar ämnen med mindre dokumenterad hälsoeffekt, vilket ger högre siffror som inte är direkt jämförbara.',
    toastAdded: "La till {n} flaskor i varukorgen",
    toastAddedBox: "La till 3L Bag-in-Box i varukorgen",
    titleSuffix: "Extra jungfruolja i specialklass",
  },

  faq: {
    heading: "Vanliga frågor",
    origin: {
      coratina: "ATTIMO Coratina kommer direkt från en liten familjelund i Puglia, Italien – landets största olivoljeproducerande region, känd för sina hundraåriga träd och exceptionella kvalitet.",
      nocellara: "ATTIMO Nocellara kommer direkt från en liten familjelund i Belice-dalen på Sicilien – en region känd för sin mineralrika jord och idealiska medelhavsförhållanden.",
      picual: "ATTIMO Picual kommer direkt från en liten familjelund i Jaén, Spanien – världens största olivoljeproducerande region, där Picual odlats i århundraden.",
      generic: "ATTIMO köper från små, familjeägda lundar i medelhavsregioner kända för exceptionell olivolja. Varje flaska kommer från en enda lund och blandas aldrig, så du kan spåra exakt var din olja producerats.",
    },
    flavour: {
      coratina: "Coratina är en av de mest intensivt smakrika olivsorterna. Förvänta dig kraftfulla toner av färska örter, kronärtskocka och svartpeppar, med en extremt hög polyfenolkick och en torr, långvarig eftersmak. Det är olivoljan kännare tar med sked.",
      nocellara: "Nocellara ger en mjuk, fruktig olja med toner av färsk tomat, mandel och grönt äpple. Den är len och lättillgänglig med en mild pepprig eftersmak – perfekt för dem som föredrar en mjukare smakprofil.",
      picual: "Picual bjuder på en robust, gräsig olja med toner av nyklippta örter, fikonblad och en ren pepprig eftersmak. En mångsidig allroundolja, fullproppad med polyfenoler och perfekt för vardagsbruk.",
      generic: "Den där beskan och pepprigheten kommer från polyfenoler – ämnena som gör olivolja nyttig. De flesta är vana vid smaklösa, överbearbetade oljor. Riktig extra jungfru ska ha karaktär: intensiv, färsk och komplex.",
    },
    use: {
      coratina: "Coratina används bäst som finisholja för att få ut mest av dess kraftfulla smak och hälsofördelar. Ringla den över biff, grillade grönsaker, matiga soppor, bruschetta eller till och med glass. Den njuts bäst rå eller tillsatt efter tillagning, eftersom hög värme kan bryta ner polyfenolerna.",
      nocellara: "Nocellara är en mångsidig vardagsolja. Ringla den över sallader, fisk, pasta och färskt bröd. Dess milda karaktär gör den utmärkt för lättare rätter där du vill ha smak utan att överrösta maten. Njuts bäst rå eller tillsatt efter tillagning.",
      picual: "Picual är en lysande allroundolja. Använd den för att avsluta rostade grönsaker, ringla över hummus, dressa spannmål och baljväxter eller doppa med rustikt bröd. Dess robusta karaktär håller väl, men den njuts bäst rå eller tillsatt efter tillagning för att bevara polyfenolerna.",
      generic: "Använd ATTIMO som finisholja för att få ut mest av smak och hälsofördelar. Ringla den över sallader, tillagade grönsaker, pasta, bröd eller grillat kött. Den njuts bäst rå eller tillsatt efter tillagning, eftersom hög värme kan bryta ner polyfenolerna som gör den speciell.",
    },
    q: {
      different: "Vad gör ATTIMO olivolja annorlunda?",
      origin: "Var kommer den här olivoljan ifrån?",
      tasteTemplate: "Hur smakar ATTIMO {variety}?",
      tasteNoHandle: "Hur smakar den?",
      polyphenols: "Vad är polyfenoler och varför är de viktiga?",
      fresh: "Hur färsk är olivoljan?",
      lab: "Kan jag se labbresultaten?",
      use: "Hur ska jag använda den här olivoljan?",
      store: "Hur ska jag förvara min olivolja?",
      cancel: "Kan jag ändra eller avboka min beställning?",
      organic: "Är er olivolja ekologisk?",
      wholesale: "Säljer ni till grossist eller restauranger?",
      shipping: "Vart skickar ni och vad kostar det?",
    },
    a: {
      different: "ATTIMO köper direkt från enskilda lundar och ser till att varje flaska kommer från senaste skörden utan blandning eller mellanhänder. Varje flaska labbtestas på kvalitetsmarkörer som polyfenolhalt, vilket ger dig den riktiga, hälsofrämjande extra jungfruolja som de flesta aldrig smakat.",
      fresh: "Varje flaska kommer från senaste skörden och tappas snabbt för att bevara färskheten. Till skillnad från massproducerade oljor som kan stå i månader eller år levererar ATTIMO olja inom månader efter skörd. Så får du maximal smak och hälsofördelar.",
      store: "Förvara den svalt och mörkt, borta från värme och ljus. När den öppnats, använd den inom några månader för optimal färskhet. Ämnena som gör den nyttig bryts ner med tiden, så färskare är alltid bättre.",
      organic: "Vår Coratina är ekologiskt certifierad. För våra andra oljor är ekologisk certifiering inte den främsta linsen vi använder – vi bryr oss djupt om hur oliverna odlas och bearbetas, och prioriterar lågintensivt jordbruk, tidig skörd och kvalitet framför allt. Certifierad eller inte håller vi varje olja till samma höga standard.",
      polyphenolsText: "Polyfenoler är naturliga ämnen i olivolja som ger de hälsofördelar du hört talas om – antiinflammatoriska egenskaper, stöd för hjärthälsan och antioxidantskydd. De flesta butiksköpta oljor har låga polyfenolnivåer på grund av bearbetning och blandning. ATTIMO-oljor är rika på polyfenoler eftersom de är färska, oblandade och från kvalitetskällor.",
      polyphenolsLink: "Läs mer om polyfenoler",
      labGeneric: "Absolut. Varje parti ATTIMO-olja labbtestas oberoende av tredje part, och de fullständiga resultaten finns på varje produktsida. Vi testar polyfenolhalt, syra, peroxidvärden och mer. Vi tror på full transparens – du ska alltid kunna verifiera kvaliteten på det du lägger på tallriken.",
      labText: "Ja. Varje parti labbtestas av tredje part, och du kan själv verifiera kvalitetsmarkörerna. Vi tror på full transparens – du ska veta exakt vad du får.",
      labLinkPrefix: "Se labbresultat för ",
      useLink: "Läs mer om att laga mat med olivolja",
      cancelPre: "Beställningar kan ändras eller avbokas innan de expedieras. När din beställning har skickats kan vi inte göra ändringar. För att begära en ändring eller avbokning, kontakta oss så snart som möjligt på ",
      cancelPost: ". När din beställning skickats får du en spårningslänk via e-post så att du kan följa din leverans.",
      wholesalePre: "Ja – vi samarbetar med restauranger, delikatessbutiker, specialbutiker, hotell och andra företag, oavsett om du vill servera den vid bordet, använda den i köket eller ha den på hyllan. Hör av dig via vårt ",
      wholesaleContactLink: "kontaktformulär",
      wholesaleMid: " eller skriv direkt till ",
      wholesalePost: " så tar vi det därifrån.",
      shippingText: "Vi skickar över hela EU. Frakten börjar på 7 € för kärnländer och går upp till 40 € för mer avlägsna destinationer – men de flesta beställningar kvalificerar för fri frakt när du beställer 2–3 flaskor beroende på var du bor. Beställningar idag skickas imorgon, och leverans tar 2–7 arbetsdagar beroende på var du är.",
      shippingLink: "Se fullständiga fraktdetaljer",
    },
  },

  productTabs: {
    flavourProfile: "Smakprofil",
    harvestDetails: "Skördedetaljer",
    bestUses: "Bästa användning",
    shippingDelivery: "Frakt & Leverans",
    shippingBody:
      "Vi skickar över hela Europa. Beställningar packas noggrant och skickas nästa arbetsdag. Leverans tar vanligtvis 2–7 arbetsdagar beroende på var du bor. De flesta beställningar med flera flaskor kvalificerar för fri frakt.",
    shippingLink: "Se fullständiga fraktpriser & leveranstider →",
  },

  // Machine-translated, needs native review before broad launch.
  bundle: {
    sectionHeading: "Set",
    sectionSubtitle: "Ju fler, desto bättre.",
    stillAvailable: "Finns fortfarande",
    inTheBox: "I lådan",
    save: "Spara",
    polyphenols: "polyfenoler",
    whatsInside: "Innehåll",
    harvestPara:
      "Varje flaska är från den senaste skörden, pressad tidigt i oktober och såld färsk. Vi säljer bara den aktuella säsongen. När den är slut är den borta till nästa år.",
    shippingPara:
      "Fri frakt från två flaskor, så det här paketet skickas alltid gratis. Beställ idag, på väg imorgon.",
    shippingLink: "Frakt och leverans",
    feat: {
      earlyHarvest: { title: "Tidig skörd", desc: "Plockade tidigt, när oliverna är som rikast på de polyfenoler som driver både smak och hälsa." },
      singleVariety: { title: "En sort" },
      coldPressed: { title: "Kallpressad", desc: "Pressad inom några timmar efter skörd vid låg temperatur, för att bevara varje droppe smak och näring." },
      labTested: { title: "Labbtestad", desc: "Varje batch testas oberoende på de markörer som betyder något: polyfenoler, syra, färskhet. Se kvaliteten själv." },
      alwaysFresh: { title: "Alltid färsk", desc: "Olivolja endast från den senaste skörden, för till skillnad från vin blir den inte bättre med åldern." },
    },
  },

  purchase: {
    oneTime: "Engångsköp",
    perBottle: " / flaska",
    subscribe: "Prenumerera & spara",
    deliveryFrequency: "Leveransfrekvens",
    everyMonth: "Varje månad",
    every2Months: "Varannan månad",
    every3Months: "Var tredje månad",
  },

  quantity: {
    bottleSingular: "Flaska",
    bottlePlural: "Flaskor",
    freeShipping: "Fri frakt",
    onlyInStock: "{label} — endast {available} i lager",
    percentOff: "{label}, {pct}% rabatt",
  },

  notify: {
    comingSoon: "Kommer snart",
    subtitle: "Få ett meddelande när {name} finns i lager.",
    onList: "✓ Du är med på listan",
    emailWhenStock: "Vi mejlar dig när {name} finns i lager.",
    placeholder: "Din e-postadress",
    notifyMe: "Meddela mig",
    success: "Du får ett meddelande när den är åter i lager!",
    error: "Något gick fel. Försök igen.",
  },

  moreVarieties: "Fler sorter",

  firstOrderPopup: {
    heading: "10% rabatt på din första beställning",
    subtitle: "Vi mejlar din rabattkod.",
    emailPlaceholder: "Din e-postadress",
    consent: "Jag godkänner att få mejl från ATTIMO",
    submitting: "Skickar…",
    submit: "Hämta min kod",
    successApply: "Använd din kod i kassan för 10% rabatt",
    successInbox: "Du hittar den också i din inkorg",
    closeAria: "Stäng",
    copyAria: "Kopiera kod",
  },

  shippingPage: {
    title: "Frakt | ATTIMO Extra jungfruolja i specialklass",
    heading: "Fraktinformation",
    intro:
      "Vi skickar över hela EU. Ju mer du beställer, desto mindre betalar du för frakt – eller inget alls.",
    factShipsTomorrow: "Beställ idag, skickas imorgon",
    factFreeMulti: "Fri frakt på beställningar med flera flaskor",
    factPacked: "Noggrant packad för säker leverans",
    ratesHeading: "Fraktpriser & gränser för fri frakt",
    standardLabel: "Standard:",
    freeFromLabel: "GRATIS från",
    estLabel: "Ca.",
    autoCalcNote:
      "Fraktkostnader beräknas automatiskt i kassan baserat på ditt leveransland.",
    processingHeading: "Behandling & leverans",
    processingP1:
      "Beställningar som läggs före dagens slut packas och skickas nästa arbetsdag. Du får en spårningslänk via e-post så snart din beställning lämnar vårt lager.",
    processingP2:
      "Leveranstider beror på var du bor. De flesta kärnländer (Belgien, Tyskland, Luxemburg, Nederländerna) får sin beställning inom 2–3 arbetsdagar. För andra EU-destinationer, räkna med 3–7 arbetsdagar beroende på transportör och destination.",
    returnsHeading: "Returer & skador",
    returnsP1:
      "Eftersom olivolja är en livsmedelsprodukt är den undantagen från den vanliga 14-dagars ångerrätten enligt EU:s konsumenträttighetsdirektiv. Vi tar inte emot returer på öppnade eller oskadade produkter.",
    damagedStrong: "Skadad under transport?",
    damagedPre: " Om din beställning kommer skadad eller defekt, kontakta oss inom 14 dagar på ",
    damagedPost: " med ett foto på skadan. Vi ordnar en ersättning eller full återbetalning – utan krångel.",
    contactHeading: "Frågor om din beställning?",
    contactSub: "Vi hjälper gärna till. Hör av dig när som helst.",
    freeFromBottles: "{n} flaskor",
    tierNames: { core: "Kärna", tier1: "Nivå 1", tier2: "Nivå 2", tier3: "Nivå 3", tier4: "Nivå 4", tier5: "Nivå 5" },
    delivery: {
      core: "2–3 arbetsdagar",
      tier1: "3–5 arbetsdagar",
      tier2: "4–6 arbetsdagar",
      tier3: "5–7 arbetsdagar",
      tier4: "6–8 arbetsdagar",
      tier5: "5–8 arbetsdagar",
    },
    countries: {
      Belgium: "Belgien", Germany: "Tyskland", Luxembourg: "Luxemburg", Netherlands: "Nederländerna",
      Austria: "Österrike", Bulgaria: "Bulgarien", Croatia: "Kroatien", Czechia: "Tjeckien", Denmark: "Danmark",
      France: "Frankrike", Hungary: "Ungern", Liechtenstein: "Liechtenstein", Malta: "Malta", Poland: "Polen",
      Slovakia: "Slovakien", Slovenia: "Slovenien", Estonia: "Estland", Ireland: "Irland", Italy: "Italien",
      Latvia: "Lettland", Lithuania: "Litauen", Spain: "Spanien", Sweden: "Sverige", Finland: "Finland",
      Greece: "Grekland", Portugal: "Portugal", Romania: "Rumänien", Cyprus: "Cypern", Norway: "Norge", Switzerland: "Schweiz",
    },
  },

  productMeta: {
    coratina: {
      title: "Coratina | Polyfenolrik, sortren extra jungfruolja från tidig skörd",
      description: "Coratina extra jungfruolja med 847 mg/kg polyfenoler – vår högsta. Ekologiskt certifierad, sortren, tidig skörd, kallpressad. 500ml.",
      productName: "Attimo Coratina Extra Virgin Olive Oil 500ml",
    },
    nocellara: {
      title: "Nocellara | Sortren, polyfenolrik extra jungfruolja från tidig skörd",
      description: "Nocellara extra jungfruolja från Sicilien. Sortren, tidig skörd, kallpressad. 400 mg/kg polyfenoler, labbtestad. 500ml.",
      productName: "Attimo Nocellara Extra Virgin Olive Oil 500ml",
    },
    picual: {
      title: "Picual | Sortren, polyfenolrik extra jungfruolja från tidig skörd",
      description: "Picual extra jungfruolja från Andalusien. Sortren, tidig skörd, kallpressad. 675 mg/kg polyfenoler, labbtestad. 500ml.",
      productName: "Attimo Picual Extra Virgin Olive Oil 500ml",
    },
  },

  originRegionFallback: {
    heading: "Från lund till flaska",
    body: "ATTIMO Nocellara kommer direkt från en liten gård i Belice-dalen på Siciliens västkust, där man gjort olivolja sedan före romarna.\n\nHär stressar kalkrik jord och torra somrar olivträden, vilket gör att frukterna förblir små med koncentrerad smak. Kusten håller nätterna svala, vilket bromsar ansamlingen av de mer aggressiva fenolföreningarna. Tidigt skördad blir resultatet en olja som är rik på polyfenoler men mild i karaktären – mjukare och rundare än något som produceras längre inåt landet.",
  },
};
