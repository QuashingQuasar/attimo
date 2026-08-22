// ─────────────────────────────────────────────────────────────────────────
// German dictionary — overlay for the /de/ market (lang: "de"). Mirrors fr.ts
// (and the en.ts shape) exactly. Germany is a EUR market: keep all factual
// claims/numbers identical to English (they live in data, not here); translate
// language only.
//
// Persuasion / brand-voice strings are marked `// REVIEW` so a native German
// reviewer can find and polish them quickly. Plain UI/functional strings are
// left unmarked.
//
// Plural note: ProductPage substitutes `{plural}` with a hard-coded "s"
// (correct for en/fr, wrong for German). The two strings it touches
// (addForFreeShip, toastAdded) therefore avoid `{plural}` and use the German
// "Flasche(n)" form instead. Cart plural strings are dict-level functions, so
// they apply the correct German "-n" plural directly.
// ─────────────────────────────────────────────────────────────────────────
import type { Dict } from "../dictionaries";

export const de: Dict = {
  nav: {
    shop: "Shop",
    blog: "Blog",
    quiz: "Quiz",
    merch: "Merch",
  },

  announce: {
    freeShipping2: "GRATIS VERSAND AB 2 FLASCHEN",
    freeShipping3: "GRATIS VERSAND AB 3 FLASCHEN",
  },

  meta: {
    home: {
      title: "ATTIMO — Sortenreines Olivenöl, reich an Polyphenolen, frühe Ernte", // REVIEW
      description:
        "Sortenreines Olivenöl, reich an Polyphenolen. Frühe Ernte, im Labor getestet. Vom kleinen Familienhain auf Ihren Tisch. Jetzt bestellen.", // REVIEW
    },
    shipping: {
      title: "Versand & Lieferung | ATTIMO", // REVIEW
      description:
        "Versandkosten, Schwellen für Gratisversand und Lieferzeiten für ATTIMO Olivenöl in der gesamten Europäischen Union.", // REVIEW
    },
    quiz: {
      title: "Gaumen-Quiz | ATTIMO", // REVIEW
      description:
        "Finden Sie Ihr perfektes ATTIMO Olivenöl. Machen Sie das 60-Sekunden-Gaumen-Quiz, um Ihren Geschmack mit dem richtigen sortenreinen nativen Olivenöl extra abzustimmen.", // REVIEW
    },
  },

  footer: {
    blog: "Blog",
    ambassadors: "Botschafter",
    privacy: "Datenschutzerklärung",
    terms: "AGB",
    shipping: "Versand",
    contact: "Kontakt",
    manageOrders: "Bestellungen & Abo verwalten",
    rights: "© 2026 ATTIMO. Alle Rechte vorbehalten.",
    changeRegion: "Währung oder Land ändern",
    shop: "Shop", // REVIEW
    learn: "Entdecken", // REVIEW
    company: "Unternehmen", // REVIEW
  },

  cart: {
    ariaLabel: "Warenkorb",
    title: "Warenkorb",
    emptyDescription: "Ihr Warenkorb ist derzeit leer.",
    // "Artikel" is invariant in the plural — no suffix change.
    itemsInCart: (n: number) => `${n} Artikel in Ihrem Warenkorb`,
    emptyHeading:
      "Sieht aus, als hätten Sie noch nichts hinzugefügt. Fangen wir an.", // REVIEW
    freeShipping: "Gratis Versand ✓",
    // German plural of "Flasche" adds "-n".
    freeShippingNudge: (n: number) =>
      `Noch ${n} Flasche${n >= 2 ? "n" : ""} für Gratisversand`, // REVIEW
    youMightAlsoLike: "Das könnte Ihnen auch gefallen",
    add: "+ Hinzufügen",
    viewProduct: (name: string) => `${name} ansehen`,
    subtotal: "Zwischensumme",
    shipping: "Versand",
    free: "Gratis",
    calculatedAtCheckout: "Wird an der Kasse berechnet",
    creatingCheckout: "Kasse wird erstellt...",
    checkout: "Mit Shopify bezahlen",
    separateShipments:
      "Bestellungen mit Olivenöl und Merch werden separat versendet", // REVIEW
  },

  quiz: {
    intro:
      "Beantworten Sie ein paar kurze Fragen, um herauszufinden, welches unserer drei sortenreinen Öle am besten zu Ihnen passt.", // REVIEW
    backToAttimo: "← Zurück zu ATTIMO",
    resultsLabel: "Ergebnisse",
    back: "Zurück",
    next: "Weiter",
    seeResults: "Ergebnisse ansehen",
    yourMatchIs: "Ihr Match ist",
    why: (name: string) => `Warum ${name}?`,
    shop: (name: string) => `${name} kaufen`,
    retake: "Quiz wiederholen",
  },

  products: {
    flavour: {
      coratina: "Kräftig & Intensiv", // REVIEW
      picual: "Grün & Grasig", // REVIEW
      nocellara: "Mild & Fruchtig", // REVIEW
    },
    tagline: {
      coratina: "Ein Schub gesunder Polyphenole", // REVIEW
      picual: "Vielseitig gut", // REVIEW
      nocellara: "Mühelos sympathisch", // REVIEW
    },
  },

  hero: {
    cta: "Die neue Ernte entdecken", // REVIEW
    badges: [
      "IM LABOR GETESTET", // REVIEW
      "FRÜHE ERNTE", // REVIEW
      "SORTENREIN", // REVIEW
      "VOM HAIN AUF DEN TISCH", // REVIEW
      "IMMER FRISCH", // REVIEW
      "KALT GEPRESST", // REVIEW
    ],
  },

  oilCollection: {
    heading: "Natives Olivenöl extra – Spezialität", // REVIEW
    subtitle:
      "Oliven einer einzigen Sorte, früh geerntet und innerhalb von Stunden kalt gepresst – für maximalen Geschmack und gesundheitlichen Nutzen.", // REVIEW
    size: "500ML",
    backSoon: "Bald zurück",
    soldOut: "Vorübergehend ausverkauft",
    quizPrompt: "Sie wissen nicht, welches Öl zu Ihnen passt?",
    quizCta: "Finden Sie Ihren Geschmack →",
  },

  industryProblem: {
    headingPre: "Die", // REVIEW
    headingLie: "„extra nativ“-Lüge", // REVIEW
    intro:
      "Natives Olivenöl extra wird für seine gesundheitlichen Vorteile und Langlebigkeit gefeiert, doch 80 % der Supermarkt-Öle erfüllen nicht einmal die Grundnormen und sind in Wahrheit arm an Polyphenolen – genau jenen, die diese Vorteile und den Geschmack liefern.", // REVIEW
    stat1Value: "~80%",
    stat1Text:
      "der als „extra nativ“ verkauften Supermarktöle erfüllen diese Normen nicht", // REVIEW
    stat2Value: "~90%",
    stat2Text:
      "der „nativen Olivenöle extra“ sind arm an gesundheitsfördernden Polyphenolen", // REVIEW
    arg1Title: "Geschmack und Gesundheit verschwinden im Verschnitt", // REVIEW
    arg1Text:
      "Große Produzenten wachsen, indem sie Öle aus verschiedenen Quellen und Jahren mischen, um einen standardisierten Geschmack zu erzielen. Diese Praxis zerstört, was echtes Olivenöl ausmacht: einen frischen, unverwechselbaren Geschmack und Polyphenole, die es ausgesprochen gesund machen.", // REVIEW
    arg2Title: "Sie haben das Echte noch nie probiert", // REVIEW
    arg2Text:
      "Ein echtes natives Olivenöl extra ist intensiv: bitter, pfeffrig, aromatisch. Jedes Öl hat seine Handschrift: Olivensorte, Hain, Ernte, Handwerk. Es sind zugleich die gesündesten Öle, doch die meisten Menschen probieren sie nie.", // REVIEW
    arg3Title: "Die Industrie zerstört die Familienhaine", // REVIEW
    arg3Text:
      "Finanzieller Druck zwingt kleine Produzenten, an industrielle Akteure zu verkaufen. Ihr großartiges Öl wird mit billiger Ware verschnitten und für einen Spottpreis verkauft. Olivenöl zu machen ist eine Kunst, wie Wein – doch wenn die Künstler nicht bezahlt werden, verschwindet die Kunst.", // REVIEW
  },

  kleiaWay: {
    headingLine1: "Wie wir sicherstellen,", // REVIEW
    headingLine2: "dass Sie das Beste bekommen", // REVIEW
    tiles: [
      {
        title: "IMMER FRISCH", // REVIEW
        text: "Olivenöl immer aus der jüngsten Ernte. Wenige Stunden nach der Lese gepresst, auf dem Höhepunkt der Frische abgefüllt.", // REVIEW
      },
      {
        title: "SORTENREIN", // REVIEW
        text: "Jede Flasche stammt aus einer einzigen Olivensorte. Sie erhalten den reinen Ausdruck der Sorte und ihrer Herkunft.", // REVIEW
      },
      {
        title: "FRÜHE ERNTE", // REVIEW
        text: "Die Oliven werden früh in der Saison geerntet, wenn sie am reichsten an Polyphenolen sind – der Quelle von Geschmack und Gesundheit", // REVIEW
      },
      {
        title: "VOM HAIN AUF DEN TISCH", // REVIEW
        text: "Wir beziehen direkt von denen, die das Öl machen. Keine Zwischenhändler, kein Verschnitt, keine Abkürzungen.", // REVIEW
      },
      {
        title: "IM LABOR GEPRÜFTE QUALITÄT", // REVIEW
        text: "Jede Flasche wird von unabhängigen Laboren auf zentrale Qualitätsmarker geprüft, die Sie selbst nachprüfen können.", // REVIEW
      },
    ],
  },

  oilComparison: {
    vs: "vs",
    others: "die anderen", // REVIEW
    supermarketColumn: "Supermarkt-Öl", // REVIEW
    features: {
      fresh: "FRISCH", // REVIEW
      earlyHarvest: "FRÜHE ERNTE", // REVIEW
      singleSource: "EINZELHERKUNFT", // REVIEW
      traceable: "RÜCKVERFOLGBAR", // REVIEW
      labTested: "IM LABOR GETESTET", // REVIEW
      polyphenols: "POLYPHENOLE", // REVIEW
    },
    themFreshNo: "Nein, mit alten Ölen verschnitten", // REVIEW
    themBlended: "Verschnitt aus über 3 Ländern", // REVIEW
  },

  polyphenol: {
    heading: "der Polyphenol-Unterschied", // REVIEW
    intro:
      "Polyphenole machen den entscheidenden Unterschied für die gesundheitlichen Vorteile und den Geschmack von Olivenöl. ATTIMO-Öle werden aus früh geernteten Oliven gepresst, wenn die Polyphenole am höchsten sind.", // REVIEW
    barAvg: "Supermarkt-Öl (Durchschn.)", // REVIEW
    barEu: "EU-Gesundheitsangabe", // REVIEW
    barBlueprint: "Blueprint Olive Oil",
    tooltips: {
      avgTitle: "Durchschnittliches natives Olivenöl extra", // REVIEW
      avgSub: "~180 mg/kg Polyphenole",
      avgDesc:
        "Die meisten Supermarkt-Öle (nativ extra) liegen zwischen 100 und 250 mg/kg. Verschnitt, Alter und industrielle Verarbeitung senken alle den Polyphenolgehalt.", // REVIEW
      euTitle: "EU-Gesundheitsangabe", // REVIEW
      euSub: "250 mg/kg Polyphenole",
      euDesc:
        "Die Europäische Behörde für Lebensmittelsicherheit (EFSA) erlaubt eine Gesundheitsangabe für Olivenöl mit mindestens 250 mg/kg Polyphenolen.", // REVIEW
      blueprintTitle: "Blueprint Olive Oil",
      blueprintSub: "400 mg/kg Polyphenole",
      blueprintDesc:
        "Bryan Johnson gibt Millionen aus, um seine Gesundheit auf Langlebigkeit zu optimieren. Sein Blueprint-Olivenöl mit 400 mg/kg Polyphenolen ist eines der bekanntesten polyphenolreichen Öle auf dem Markt.", // REVIEW
      attimoTitle: "ATTIMO Olivenöl",
      attimoSub: "400–900 mg/kg Polyphenole",
      attimoDesc:
        "Unsere Olivenöle liegen je nach Sorte zwischen 400 und 900 mg/kg Polyphenolen.", // REVIEW
    },
    cards: [
      {
        content: "Polyphenole sind eine Art Antioxidans, das in Oliven vorkommt.", // REVIEW
        content2:
          "Sie stärken die Abwehr des Körpers gegen die Zellalterung und tragen langfristig zur Stoffwechsel- und Herzgesundheit bei.", // REVIEW
      },
      {
        content:
          "Die höchsten Polyphenolgehalte stammen aus früh geernteten Oliven, die innerhalb von Stunden gepflückt und gepresst werden.", // REVIEW
        content2: "Einmal abgefüllt, sinken die Werte mit der Zeit stetig.", // REVIEW
      },
      {
        content:
          "Kommerzielle Öle kombinieren Chargen aus verschiedenen Ländern und Jahren, um die Versorgung zu sichern.", // REVIEW
        content2:
          "Dieser Prozess verdünnt den Polyphenolgehalt weit unter das Niveau frisch gepressten Öls.", // REVIEW
      },
    ],
  },

  testimonials: {
    heading: "Stimmen von der Straße", // REVIEW
    reviews: [
      { title: "Auf allem gut!", text: "Früher habe ich nur mit Olivenöl gekocht. Jetzt gebe ich es auf alles. Ich wusste nicht, dass es so viel Geschmack haben kann." }, // REVIEW
      { title: "Wie in Spanien", text: "Nachdem ich eine Zeit lang in Spanien gelebt habe, war ich großartiges Olivenöl gewohnt. In Deutschland ist es schwer, gute zu finden; Attimo hat wunderbare Erinnerungen zurückgebracht." }, // REVIEW
      { title: "Endlich", text: "Ich bringe immer tonnenweise Olivenöl aus dem Urlaub mit, aber es ist schnell aufgebraucht. Sehr froh, endlich echtes Olivenöl zu Hause gefunden zu haben." }, // REVIEW
      { title: "Super frisch", text: "Ich habe viele Olivenöle probiert und dieses ist mein Favorit. Der Duft ist absolut unglaublich, so frisch, als würden die Oliven genau in diesem Moment gepresst." }, // REVIEW
      { title: "Schnell süchtig", text: "Ich habe 4 Flaschen gekauft und sie waren in einem Monat weg. Ich kaufe nie wieder im Supermarkt." }, // REVIEW
      { title: "Man schmeckt die Qualität", text: "Ich war skeptisch wegen des Preises, aber jetzt verstehe ich es. Man schmeckt den Qualitätsunterschied wirklich, hier in den Läden gibt es nichts Vergleichbares." }, // REVIEW
      { title: "Frische Ernte in der Flasche", text: "Es schmeckt, als hätte ich die Oliven gerade selbst gepflückt und gepresst. Super frisch und natürlich, ich liebe es!" }, // REVIEW
    ],
  },

  blog: {
    heading: "Die Ölmühle", // REVIEW
    seeMore: "Mehr Artikel ansehen",
    noArticles: "Noch keine Artikel.",
    noImage: "Kein Bild",
    readMore: "Weiterlesen",
    newsletterPrompt: "Erhalten Sie ATTIMO-Geschichten, Tipps und Neuigkeiten in Ihr Postfach", // REVIEW
    emailPlaceholder: "ihre@email.com",
    subscribe: "Abonnieren",
    invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    subscribed: "Sie sind angemeldet!",
    error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
  },

  product: {
    loading: "Produkt wird geladen...",
    notFound: "Produkt nicht gefunden",
    // 3L bag-in-box purchase-option toggle (Coratina PDP).
    formatLabel: "Format",
    formatBottleName: "Flasche",
    formatBottleVolume: "500 ml",
    formatBoxName: "Bag-in-Box",
    formatBoxVolume: "3 L",
    formatBoxBadge: "BESTER PREIS", // Value badge on the 3L box option card
    // {n} = serving count, {price} = per-serving cost (locale currency)
    formatServings: "{n} Portionen ({price} pro Portion)",
    newHarvest: "Neue Ernte", // REVIEW
    inStock: "Auf Lager",
    lastBottles: "Letzte Flaschen",
    lastBoxes: "Letzte Boxen",
    soldOut: "Ausverkauft",
    comingSoon: "Demnächst verfügbar",
    backSoon: "Bald zurück",
    newBatchHeading: "Neue Charge unterwegs", // REVIEW
    newBatchSubtitle:
      "Wir senden Ihnen eine E-Mail, sobald die Coratina d'Italia wieder verfügbar ist (geschätzt 1–2 Wochen).", // REVIEW
    attrVariety: "Sorte",
    attrOrigin: "Herkunft",
    attrHarvest: "Ernte",
    attrFlavour: "Geschmack",
    harvestDate: "Oktober 2025",
    addToCart: "IN DEN WARENKORB", // REVIEW
    freeShipCheck: "GRATIS VERSAND ✓",
    // `{plural}` is omitted on purpose (ProductPage would inject "s"); German
    // uses the "(N)" form. `{more}` → moreWord ("WEITERE ") when cart non-empty.
    addForFreeShip: "FÜGE {n} {more}FLASCHE(N) FÜR GRATIS VERSAND HINZU",
    moreWord: "WEITERE ",
    trustLab: "Im unabhängigen Labor auf Qualität geprüft", // REVIEW
    shipsTomorrow: "Heute bestellt, morgen verschickt", // REVIEW
    viewLabResults: "Laborergebnisse ansehen",
    howToReadLabValues: "So lesen Sie eine Olivenöl-Analyse",
    waitingResults: "(Warten auf Ergebnisse)",
    polyTooltipAria: "Was bedeutet Bioaktive Polyphenole?",
    polyTooltipText:
      "Nicht alle Polyphenole sind gleich. Unsere {value} {unit} werden nach der EU-Standardmethode HPLC in einem ISO-akkreditierten Labor gemessen. Viele Produzenten geben „Gesamtpolyphenole“ nach breiteren Methoden an, die Verbindungen mit weniger belegter gesundheitlicher Wirkung einschließen und so höhere, nicht direkt vergleichbare Werte ergeben.", // REVIEW
    // `{plural}` omitted (German "(n)" form); ProductPage's "s" injection is a no-op.
    toastAdded: "{n} Flasche(n) zum Warenkorb hinzugefügt",
    toastAddedBox: "3-L-Bag-in-Box zum Warenkorb hinzugefügt",
    titleSuffix: "Natives Olivenöl extra – Spezialität", // REVIEW
  },

  faq: {
    heading: "Häufige Fragen",
    origin: {
      coratina: "ATTIMO Coratina stammt direkt aus einem kleinen Familienhain in Apulien, Italien – der größten Olivenöl-Region des Landes, bekannt für ihre jahrhundertealten Bäume und außergewöhnliche Qualität.", // REVIEW
      nocellara: "ATTIMO Nocellara stammt direkt aus einem kleinen Familienhain im Belice-Tal in Sizilien – einer Region, die für ihre mineralreichen Böden und idealen mediterranen Anbaubedingungen bekannt ist.", // REVIEW
      picual: "ATTIMO Picual stammt direkt aus einem kleinen Familienhain in Jaén, Spanien – der größten Olivenöl-Region der Welt, wo Picual seit Jahrhunderten angebaut wird.", // REVIEW
      generic: "ATTIMO bezieht von kleinen Familienhainen in mediterranen Regionen, die für ihr außergewöhnliches Olivenöl bekannt sind. Jede Flasche stammt aus einem einzigen Hain und wird nie verschnitten – so können Sie genau zurückverfolgen, wo Ihr Öl erzeugt wurde.", // REVIEW
    },
    flavour: {
      coratina: "Coratina ist eine der geschmacksintensivsten Olivensorten. Erwarten Sie klare Noten von frischen Kräutern, Artischocke und schwarzem Pfeffer, mit ultrahohem Polyphenolgehalt und einem trockenen, anhaltenden Abgang. Das ist das Olivenöl, das Kenner löffelweise zu sich nehmen.", // REVIEW
      nocellara: "Nocellara ergibt ein mildes, fruchtiges Öl mit Noten von frischer Tomate, Mandel und grünem Apfel. Geschmeidig und zugänglich, mit einem leicht pfeffrigen Abgang – perfekt für alle, die ein milderes Profil bevorzugen.", // REVIEW
      picual: "Picual liefert ein kräftiges, grasiges Öl mit Noten von frisch geschnittenem Gras, Feigenblatt und einem klaren, pfeffrigen Abgang. Der vielseitige Allrounder schlechthin, reich an Polyphenolen und perfekt für den täglichen Gebrauch.", // REVIEW
      generic: "Diese Bitterkeit und pfeffrige Schärfe stammen von den Polyphenolen – den Verbindungen, die Olivenöl gesund machen. Die meisten Menschen sind fade, überverarbeitete Öle gewohnt. Ein echtes natives Olivenöl extra muss Charakter haben: Es ist intensiv, frisch und komplex.", // REVIEW
    },
    use: {
      coratina: "Coratina verwendet man am besten als Finishing-Öl, um ihren kraftvollen Geschmack und ihre Vorteile voll auszuschöpfen. Träufeln Sie sie über ein Steak, gegrilltes Gemüse, kräftige Suppen, Bruschetta oder sogar Eiscreme. Am besten roh genießen oder nach dem Kochen hinzufügen, da starke Hitze die Polyphenole zerstören kann.", // REVIEW
      nocellara: "Nocellara ist ein vielseitiges Alltagsöl. Träufeln Sie sie über Salate, Fisch, Pasta und frisches Brot. Ihr mildes Wesen macht sie ideal für leichte Gerichte, bei denen man Geschmack möchte, ohne die Speisen zu überdecken. Am besten roh oder nach dem Kochen hinzugefügt.", // REVIEW
      picual: "Picual ist ein großartiger Allrounder. Verwenden Sie sie, um geröstetes Gemüse zu vollenden, Hummus zu verfeinern, Getreide und Hülsenfrüchte zu würzen oder knuspriges Brot darin zu tunken. Ihr robustes Wesen hält stand, doch am besten roh genießen oder nach dem Kochen hinzufügen, um die Polyphenole zu bewahren.", // REVIEW
      generic: "Verwenden Sie ATTIMO als Finishing-Öl, um Geschmack und Vorteile voll auszuschöpfen. Träufeln Sie es über Salate, gekochtes Gemüse, Pasta, Brot oder gegrilltes Fleisch. Am besten roh genießen oder nach dem Kochen hinzufügen, da starke Hitze die Polyphenole zerstören kann, die es so besonders machen.", // REVIEW
    },
    q: {
      different: "Was macht ATTIMO Olivenöl anders?",
      origin: "Woher stammt dieses Olivenöl?",
      tasteTemplate: "Wie schmeckt das ATTIMO {variety}?",
      tasteNoHandle: "Wie schmeckt es?",
      polyphenols: "Was sind Polyphenole und warum sind sie wichtig?",
      fresh: "Wie frisch ist das Olivenöl?",
      lab: "Kann ich die Laborergebnisse sehen?",
      use: "Wie verwende ich dieses Olivenöl?",
      store: "Wie bewahre ich mein Olivenöl auf?",
      cancel: "Kann ich meine Bestellung ändern oder stornieren?",
      organic: "Ist Ihr Olivenöl bio?",
      wholesale: "Verkaufen Sie an Großhandel oder Restaurants?",
      shipping: "Wohin liefern Sie und was kostet es?",
    },
    a: {
      different: "ATTIMO bezieht direkt von einzelnen Hainen und stellt so sicher, dass jede Flasche aus der jüngsten Ernte stammt – ohne Verschnitt, ohne Zwischenhändler. Jede Flasche wird im Labor auf Qualitätsmarker wie den Polyphenolgehalt geprüft und liefert Ihnen das echte, gesundheitsfördernde native Olivenöl extra, das die meisten Menschen nie probiert haben.", // REVIEW
      fresh: "Jede Flasche stammt aus der jüngsten Ernte und wird zügig abgefüllt, um ihre Frische zu bewahren. Anders als massenproduzierte Öle, die Monate oder gar Jahre lagern können, liefert ATTIMO ein Öl innerhalb von Monaten nach der Ernte. So profitieren Sie von maximalem Geschmack und Nutzen.", // REVIEW
      store: "Bewahren Sie es kühl und dunkel auf, fern von Hitze und Licht. Nach dem Öffnen innerhalb weniger Monate verbrauchen für optimale Frische. Die Verbindungen, die es gesund machen, bauen sich mit der Zeit ab: je frischer, desto besser.", // REVIEW
      organic: "Unsere Coratina ist bio-zertifiziert. Bei unseren anderen Ölen ist die Bio-Zertifizierung nicht unser Hauptkriterium – uns ist wichtig, wie die Oliven angebaut und verarbeitet werden, mit Fokus auf eine eingriffsarme Landwirtschaft, frühe Ernte und Qualität über allem. Zertifiziert oder nicht, wir legen an jedes Öl dieselben hohen Maßstäbe an.", // REVIEW
      polyphenolsText: "Polyphenole sind natürliche Verbindungen im Olivenöl, die die Vorteile liefern, von denen Sie gehört haben – entzündungshemmende Eigenschaften, Unterstützung der Herzgesundheit und antioxidativer Schutz. Die meisten handelsüblichen Öle haben aufgrund von Verarbeitung und Verschnitt niedrige Polyphenolwerte. ATTIMO-Öle sind reich daran, weil sie frisch, unverschnitten und aus hochwertigen Quellen stammen.", // REVIEW
      polyphenolsLink: "Mehr über Polyphenole erfahren",
      labGeneric: "Absolut. Jede Charge ATTIMO-Öl wird unabhängig von einem Drittlabor geprüft, und die vollständigen Ergebnisse sind auf jeder Produktseite verfügbar. Wir testen Polyphenolgehalt, Säuregrad, Peroxidzahl und vieles mehr. Wir glauben an vollständige Transparenz – Sie sollten jederzeit überprüfen können, welche Qualität Sie auf Ihren Teller bringen.", // REVIEW
      labText: "Ja. Jede Charge wird von einem Drittlabor geprüft, und Sie können die Qualitätsmarker selbst überprüfen. Wir glauben an vollständige Transparenz – Sie sollten genau wissen, was Sie bekommen.", // REVIEW
      labLinkPrefix: "Laborergebnisse ansehen für ",
      useLink: "Mehr über das Kochen mit Olivenöl erfahren",
      cancelPre: "Bestellungen können vor der Bearbeitung geändert oder storniert werden. Sobald Ihre Bestellung versendet wurde, können wir keine Änderungen mehr vornehmen. Um eine Änderung oder Stornierung anzufragen, kontaktieren Sie uns so bald wie möglich unter ", // REVIEW
      cancelPost: ". Sobald Ihre Bestellung versendet wurde, erhalten Sie per E-Mail einen Tracking-Link, um Ihre Lieferung zu verfolgen.", // REVIEW
      wholesalePre: "Ja – wir arbeiten mit Restaurants, Feinkostläden, Spezialgeschäften, Hotels und anderen Unternehmen zusammen, ob Sie es am Tisch servieren, in der Küche verwenden oder in Ihren Regalen anbieten möchten. Kontaktieren Sie uns über unser ", // REVIEW
      wholesaleContactLink: "Kontaktformular",
      wholesaleMid: " oder schreiben Sie direkt an ",
      wholesalePost: " und wir kümmern uns um den Rest.", // REVIEW
      shippingText: "Wir liefern in die gesamte Europäische Union, von Belgien und den Niederlanden bis Finnland und Portugal. Der Versand beginnt bei 7 € für die Kernländer und reicht bis 40 € für weiter entfernte Ziele – doch die meisten Bestellungen erhalten Gratisversand ab 2 bis 3 Flaschen, je nach Standort. Heute aufgegebene Bestellungen werden morgen verschickt, und die Lieferung dauert 2 bis 7 Werktage, je nach Region.", // REVIEW
      shippingLink: "Alle Lieferdetails ansehen",
    },
  },

  productTabs: {
    flavourProfile: "Geschmacksprofil",
    harvestDetails: "Ernte-Details",
    bestUses: "Beste Verwendung",
    shippingDelivery: "Versand & Lieferung",
    shippingBody:
      "Wir liefern in ganz Europa. Bestellungen werden sorgfältig verpackt und am nächsten Werktag versandt. Die Lieferung dauert in der Regel 2 bis 7 Werktage, je nach Standort. Die meisten Mehrflaschen-Bestellungen erhalten Gratisversand.", // REVIEW
    shippingLink: "Alle Versandkosten und Lieferzeiten ansehen →",
  },

  purchase: {
    oneTime: "Einmaliger Kauf",
    perBottle: " / Flasche",
    subscribe: "Abonnieren und sparen",
    deliveryFrequency: "Lieferhäufigkeit",
    everyMonth: "Jeden Monat",
    every2Months: "Alle 2 Monate",
    every3Months: "Alle 3 Monate",
  },

  quantity: {
    bottleSingular: "Flasche",
    bottlePlural: "Flaschen",
    freeShipping: "Gratis Versand",
    onlyInStock: "{label} — nur noch {available} auf Lager",
    percentOff: "{label}, {pct}% Rabatt",
  },

  notify: {
    comingSoon: "Demnächst verfügbar",
    subtitle: "Werden Sie benachrichtigt, sobald {name} wieder auf Lager ist.",
    onList: "✓ Sie stehen auf der Liste",
    emailWhenStock: "Wir senden Ihnen eine E-Mail, sobald {name} auf Lager ist.",
    placeholder: "Ihre E-Mail-Adresse",
    notifyMe: "Benachrichtigen",
    success: "Sie werden benachrichtigt, sobald es wieder auf Lager ist!",
    error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
  },

  moreVarieties: "Weitere Sorten", // REVIEW

  firstOrderPopup: {
    heading: "10% Rabatt auf deine erste Bestellung",
    subtitle: "Wir mailen dir deinen Rabattcode.",
    emailPlaceholder: "Deine E-Mail-Adresse",
    consent: "Ich möchte E-Mails von ATTIMO erhalten",
    submitting: "Wird gesendet…",
    submit: "Code sichern",
    successApply: "Löse deinen Code an der Kasse für 10% Rabatt ein",
    successInbox: "Du findest ihn auch in deinem Posteingang",
    closeAria: "Schließen",
    copyAria: "Code kopieren",
  },

  shippingPage: {
    title: "Versand | ATTIMO Natives Olivenöl extra – Spezialität",
    heading: "Versandinformationen",
    intro:
      "Wir liefern in die gesamte Europäische Union. Je mehr Sie bestellen, desto weniger zahlen Sie für den Versand – oder gar nichts.", // REVIEW
    factShipsTomorrow: "Heute bestellt, morgen verschickt", // REVIEW
    factFreeMulti: "Gratisversand bei Mehrflaschen-Bestellungen", // REVIEW
    factPacked: "Sorgfältig verpackt für eine sichere Lieferung", // REVIEW
    ratesHeading: "Versandkosten & Schwellen für Gratisversand",
    standardLabel: "Standard:",
    freeFromLabel: "GRATIS ab",
    estLabel: "Ca.",
    autoCalcNote:
      "Die Versandkosten werden an der Kasse automatisch nach Ihrem Lieferland berechnet.", // REVIEW
    processingHeading: "Bearbeitung & Lieferung",
    processingP1:
      "Bestellungen, die vor Tagesende aufgegeben werden, werden am nächsten Werktag verpackt und versandt. Sie erhalten per E-Mail einen Tracking-Link, sobald Ihre Bestellung unser Haus verlässt.", // REVIEW
    processingP2:
      "Die Lieferzeiten hängen von Ihrem Standort ab. Die meisten Kernländer (Belgien, Deutschland, Luxemburg, Niederlande) erhalten ihre Bestellung in 2 bis 3 Werktagen. Für andere EU-Ziele rechnen Sie mit 3 bis 7 Werktagen, je nach Versanddienst und Ziel.", // REVIEW
    returnsHeading: "Rückgabe & Schäden",
    returnsP1:
      "Da Olivenöl ein Lebensmittel ist, ist es vom standardmäßigen 14-tägigen EU-Widerrufsrecht gemäß der Verbraucherrechte-Richtlinie ausgenommen. Wir nehmen keine geöffneten oder unbeschädigten Produkte zurück.", // REVIEW
    damagedStrong: "Beim Transport beschädigt?",
    damagedPre: " Wenn Ihre Bestellung beschädigt oder fehlerhaft ankommt, kontaktieren Sie uns innerhalb von 14 Tagen unter ",
    damagedPost: " mit einem Foto des Schadens. Wir veranlassen einen Ersatz oder eine vollständige Erstattung – unkompliziert.", // REVIEW
    contactHeading: "Fragen zu Ihrer Bestellung?",
    contactSub: "Wir helfen Ihnen gerne. Schreiben Sie uns jederzeit.", // REVIEW
    freeFromBottles: "{n} Flaschen",
    tierNames: { core: "Kern", tier1: "Stufe 1", tier2: "Stufe 2", tier3: "Stufe 3", tier4: "Stufe 4", tier5: "Stufe 5" },
    delivery: {
      core: "2–3 Werktage",
      tier1: "3–5 Werktage",
      tier2: "4–6 Werktage",
      tier3: "5–7 Werktage",
      tier4: "6–8 Werktage",
      tier5: "5–8 Werktage",
    },
    countries: {
      Belgium: "Belgien", Germany: "Deutschland", Luxembourg: "Luxemburg", Netherlands: "Niederlande",
      Austria: "Österreich", Bulgaria: "Bulgarien", Croatia: "Kroatien", Czechia: "Tschechien", Denmark: "Dänemark",
      France: "Frankreich", Hungary: "Ungarn", Liechtenstein: "Liechtenstein", Malta: "Malta", Poland: "Polen",
      Slovakia: "Slowakei", Slovenia: "Slowenien", Estonia: "Estland", Ireland: "Irland", Italy: "Italien",
      Latvia: "Lettland", Lithuania: "Litauen", Spain: "Spanien", Sweden: "Schweden", Finland: "Finnland",
      Greece: "Griechenland", Portugal: "Portugal", Romania: "Rumänien", Norway: "Norwegen", Switzerland: "Schweiz",
    },
  },

  productMeta: {
    coratina: {
      title: "Coratina | Sortenreines Olivenöl, reich an Polyphenolen, frühe Ernte", // REVIEW
      description: "Natives Olivenöl extra Coratina mit 847mg/kg Polyphenolen – unser höchster Wert. Bio-zertifiziert, sortenrein, frühe Ernte, kalt gepresst. 500ml.", // REVIEW
      productName: "Attimo Coratina Natives Olivenöl extra 500ml",
    },
    nocellara: {
      title: "Nocellara | Sortenreines Olivenöl, reich an Polyphenolen, frühe Ernte", // REVIEW
      description: "Natives Olivenöl extra Nocellara aus Sizilien. Sortenrein, frühe Ernte, kalt gepresst. 400mg/kg Polyphenole, im Labor getestet. 500ml.", // REVIEW
      productName: "Attimo Nocellara Natives Olivenöl extra 500ml",
    },
    picual: {
      title: "Picual | Sortenreines Olivenöl, reich an Polyphenolen, frühe Ernte", // REVIEW
      description: "Natives Olivenöl extra Picual aus Andalusien. Sortenrein, frühe Ernte, kalt gepresst. 675mg/kg Polyphenole, im Labor getestet. 500ml.", // REVIEW
      productName: "Attimo Picual Natives Olivenöl extra 500ml",
    },
  },

  originRegionFallback: {
    heading: "Vom Hain in die Flasche", // REVIEW
    body: "ATTIMO Nocellara stammt direkt von einem kleinen Hof im Belice-Tal an der Westküste Siziliens, wo schon vor den Römern Olivenöl hergestellt wurde.\n\nHier setzen kalkhaltiger Boden und trockene Sommer die Olivenbäume unter Stress, wodurch die Früchte klein bleiben und ihr Geschmack konzentriert wird. Die Küste hält die Nächte kühl, was die Anreicherung der aggressiveren phenolischen Verbindungen verlangsamt. Früh geerntet, entsteht ein Öl, das reich an Polyphenolen, aber mild im Charakter ist – weicher und runder als alles, was weiter im Landesinneren erzeugt wird.", // REVIEW
  },
};
