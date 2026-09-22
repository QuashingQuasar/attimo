// Copy for /polyphenol-methods and its five localised variants.
//
// Same shape as highPolyphenolHubContent: one record keyed by locale, a
// translated slug per market so each ranks its own keyword cluster, and an
// hreflang cluster emitted from every variant.
//
// Numbers, product names, compound names, lab names and the citation list are
// deliberately NOT translated — they are the same facts in every market, and
// the whole argument of the page is that a figure means the same thing
// wherever it is printed.

export type MethodCard = {
  name: string;
  verdict: string;
  reading: string;
  how: string;
  reports: string;
  blind: string;
  ioc: string;
};

export type MethodsContent = {
  lang: string;
  meta: { title: string; description: string; headline: string; imageCaption: string };
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    hplcSub: string;
    nmrSub: string;
    totalLabel: string;
  };
  strip: { testedBy: string; accreditation: string; method: string };
  tests: {
    eyebrow: string;
    h2: string;
    lead: string;
    cards: MethodCard[];
    rows: { how: string; reports: string; blind: string; ioc: string };
    iocLabel: string;
    iocBody: string;
  };
  caseStudy: {
    eyebrow: string;
    h2: string;
    lead: string;
    mineName: string;
    rivalName: string;
    mineMethod: string;
    rivalMethod: string;
    totalLabel: string;
    notComparable: string;
    oleocanthal: string;
    oleacein: string;
    comparable: string;
  };
  compounds: {
    eyebrow: string;
    h2Lead: string;
    h2Rest: string;
    lead: string;
    oleocanthalBody: string;
    oleaceinBody: string;
    inLabel: string;
    sumLabel: string;
    glassesCaption: string;
    glassesAlt: string;
    doseH3: string;
    doseLead: string;
    doseAxis: string;
    doseRows: { supermarket: string; eu: string; blueprint: string; attimo: string };
    disclaimerPre: string;
    disclaimerLink: string;
    disclaimerPost: string;
  };
  whyHplc: {
    eyebrow: string;
    h2: string;
    lead: string;
    cards: [string, string][];
    millCaption: string;
    millAlt: string;
  };
  checklist: {
    eyebrow: string;
    h2: string;
    lead: string;
    items: [string, string][];
    certCaption: string;
    certLink: string;
    certAlt: string;
  };
  certificates: {
    eyebrow: string;
    h2: string;
    lead: string;
    cols: { oil: string; total: string; oleocanthal: string; oleacein: string; report: string };
    footnote: string;
  };
  faq: { heading: string; items: { question: string; answer: string }[] };
  details: {
    methodsSummary: string;
    sourcesSummary: string;
    rows: { does: string; reports: string; status: string; limitation: string };
    table: {
      does: [string, string, string];
      reports: [string, string, string];
      status: [string, string, string];
      limitation: [string, string, string];
    };
  };
  cta: { h2: string; body: string; button: string; imageAlt: string };
  heroAlt: string;
};

const en: MethodsContent = {
  lang: "en",
  meta: {
    title: "How to Compare Olive Oil Polyphenol Numbers | HPLC, NMR and Folin | ATTIMO",
    description:
      "Polyphenol totals from HPLC, NMR and Folin-Ciocalteu cannot be compared with each other. Oleocanthal plus oleacein can. How each test counts, how to read any certificate, and the full figures for our oils.",
    headline:
      "How to compare olive oil polyphenol numbers across HPLC, NMR and Folin-Ciocalteu",
    imageCaption:
      "One Coratina olive oil on two methods: {{coratina.total}} mg/kg by HPLC and 1,215 mg/kg by NMR.",
  },
  heroAlt: "Olive grove at dawn in warm morning mist",
  hero: {
    eyebrow: "Polyphenol analysis methods explained",
    h1: "The same olive oil can have {{coratina.total}} or 1,215 polyphenols, depending on how it's measured",
    lead: "Different methods result in different polyphenol totals for the exact same oil sample.",
    hplcSub: "The method we publish",
    nmrSub: "The method most rivals publish",
    totalLabel: "Total polyphenols",
  },
  strip: { testedBy: "Tested by", accreditation: "Accreditation", method: "Method" },
  tests: {
    eyebrow: "How polyphenols are measured",
    h2: "HPLC vs NMR vs Folin-Ciocalteu",
    lead: "Olive oil carries dozens of different polyphenols. These three tests each count a different selection of them, in different units.",
    cards: [
      {
        name: "HPLC",
        verdict: "Measures each bioactive polyphenol on its own",
        reading: "Reads lowest",
        how: "Pushes the oil through a tube packed so tightly that the polyphenols leave one at a time. Each is measured on the way out.",
        reports: "Every compound separately, plus a total",
        blind: "Its total is stated in tyrosol equivalents, which the IOC says can read low",
        ioc: "Official IOC method — Doc. No 29",
      },
      {
        name: "NMR",
        verdict: "Measures polyphenols in aggregate, as one total",
        reading: "Reads higher",
        how: "Puts the sample in a strong magnet and reads the pattern that comes back, then works out which structures must be there to produce it.",
        reports: "Selected compounds, plus a total built from a different set",
        blind: "Its totals are not built like HPLC totals, so they land higher on the same oil",
        ioc: "Widely used, no IOC method",
      },
      {
        name: "Folin-Ciocalteu",
        verdict: "Estimates one total from a colour reaction",
        reading: "Reads highest",
        how: "Adds a reagent the polyphenols turn blue. The darker the blue, the higher the number — so the oil is never separated into anything.",
        reports: "One number, no compounds named",
        blind: "Anything in the oil that reduces the reagent is counted as polyphenols",
        ioc: "Widely used, no IOC method",
      },
    ],
    rows: {
      how: "How it works",
      reports: "What it reports",
      blind: "Blind spot",
      ioc: "Official status",
    },
    iocLabel: "What is the IOC?",
    iocBody:
      "The International Olive Council is the United Nations-backed body that writes the rules for olive oil — the grades, the tasting standards and the laboratory methods. It has published an official procedure for measuring polyphenols. Only HPLC follows it.",
  },
  caseStudy: {
    eyebrow: "Case study: Coratina 25/26 harvest",
    h2: "Two Coratinas: phenolically weaker oil reads higher because of the NMR method",
    lead: "HPLC measures each bioactive polyphenol individually. NMR reads them in aggregate. That difference alone hands the weaker oil the higher headline number, while it carries less of the two phenols with the strongest evidence behind them: oleocanthal and oleacein.",
    mineName: "ATTIMO Coratina 25/26",
    rivalName: "Competitor Coratina",
    mineMethod: "IOC Doc. No 29",
    rivalMethod: "No IOC method",
    totalLabel: "Total polyphenols, as published",
    notComparable: "Not comparable across methods",
    oleocanthal: "Oleocanthal",
    oleacein: "Oleacein",
    comparable: "The comparable figure",
  },
  compounds: {
    eyebrow: "The number to compare",
    h2Lead: "Oleocanthal & oleacein",
    h2Rest: "the main numbers to compare across tests",
    lead: "Polyphenols are a wide family and most types don't carry strong evidence behind them. Oleocanthal and oleacein do. Both are single molecules, so every laboratory reports them in the same milligrams and their sum survives a change of method.",
    oleocanthalBody:
      "The peppery catch at the back of your throat in a fresh oil. It blocks the COX-1 and COX-2 enzymes the same way ibuprofen does, at about a tenth of the strength by weight.",
    oleaceinBody:
      "One of the most powerful antioxidants found in any food, with its own cardiovascular evidence behind it. Most oils carry very little, so it separates them sharply.",
    inLabel: "In ATTIMO Coratina 25/26",
    sumLabel: "Oleocanthal + oleacein · ATTIMO Coratina 25/26",
    glassesCaption:
      "Oleocanthal is the one compound here you can find without a laboratory: it is the cough at the back of the throat in a fresh oil.",
    glassesAlt:
      "Six cobalt blue olive oil tasting glasses with lids, filled with green oil, on a dark green table",
    doseH3:
      "52 calories of ATTIMO Coratina 25/26 carry the same polyphenols as 245 calories of supermarket oil",
    doseLead: "A higher-quality oil gets you more polyphenols for fewer calories.",
    doseAxis: "Olive oil calories needed for 5 mg of polyphenols",
    doseRows: {
      supermarket: "Supermarket oil",
      eu: "EU reference oil",
      blueprint: "Blueprint",
      attimo: "ATTIMO Coratina 25/26",
    },
    disclaimerPre: "The oleocanthal mechanism was",
    disclaimerLink: "first reported in Nature in 2005",
    disclaimerPost:
      ". These are research findings on isolated compounds; olive oil is a food, and nothing here is a claim to treat or prevent disease.",
  },
  whyHplc: {
    eyebrow: "Our choice",
    h2: "HPLC is the only test that shows what the total is made of",
    lead: "Only a few of the dozens of polyphenols in olive oil have a proven mechanism in the body. A total counts them all the same, so a big number can be padded with compounds that do nothing for you. HPLC lists them one by one.",
    cards: [
      [
        "It itemises the total",
        "Doc. No 29 puts a figure against each compound it finds. You see what the number is made of instead of trusting that it is made of the right things.",
      ],
      [
        "Anyone can make us repeat it",
        "It is the International Olive Council's published protocol. Send ATTIMO Coratina 25/26 to another accredited lab, ask for the same method, and the number should come back.",
      ],
      [
        "It prints its margin of error",
        "Our certificate reads {{coratina.total}} ±{{coratina.total_u}} mg/kg, and names the range the method is validated across. A number with no margin is a number nobody has checked.",
      ],
    ],
    millCaption:
      "The sample that produced report {{coratina.report}} was drawn at the mill in November, within days of pressing.",
    millAlt: "Fresh green olive oil flowing from a steel spout into a vat at the mill",
  },
  checklist: {
    eyebrow: "Your checklist",
    h2: "How to assess olive oil polyphenol claims",
    lead: "Most bottles fail on the first one. A producer who can answer all six has given you something you can verify.",
    items: [
      ["Which test?", "HPLC, NMR or Folin. Without it the number has no units you can read."],
      ["Which lab?", "A result with no laboratory behind it cannot be queried."],
      ["Accredited?", "ISO/IEC 17025 covers testing competence. ISO 9001 does not."],
      ["Which harvest?", "Polyphenols peak at early harvest and fall from there."],
      ["Sampled when?", "The gap between pressing and testing is part of the number."],
      [
        "Compounds listed?",
        "Oleocanthal and oleacein on their own lines, not folded into a total.",
      ],
    ],
    certCaption: "Our own certificate, annotated against the six questions.",
    certLink: "Open the full report →",
    certAlt:
      "ATTIMO Coratina 25/26 harvest certificate of analysis, annotated to show the test method, laboratory, accreditation, sample date and compound results",
  },
  certificates: {
    eyebrow: "We bring the receipts",
    h2: "Every number we publish, with the report it came from",
    lead: "Both oils, analysed by Chemiservice in Monopoli — an ISO/IEC 17025 laboratory recognised by the International Olive Council for advanced testing. Each report opens in full.",
    cols: {
      oil: "Oil",
      total: "Total",
      oleocanthal: "Oleocanthal",
      oleacein: "Oleacein",
      report: "Report",
    },
    footnote:
      "All values mg/kg, 2025/26 harvest, HPLC by IOC Doc. 29 with oleocanthal and oleacein from a dedicated assay. Coratina sampled 18 November 2025, Nocellara 17 November 2025. Doc. 29 states a measuring range of 30–800 mg/kg, so our {{coratina.total}} sits just above it and should be read as approximate at that boundary.",
  },
  faq: {
    heading: "Questions about polyphenol testing",
    items: [
      {
        question: "Why do two labs report different polyphenol numbers for the same olive oil?",
        answer:
          "Because the tests count different compounds and report them in different units. The IOC's HPLC method (COI/T.20/Doc. No 29) quantifies everything against tyrosol and reports the total in tyrosol equivalents. NMR totals as published in this category are usually the hydroxytyrosol-and-derivatives figure re-expressed per kilogram, which is a narrower set of compounds on a different mass basis. Folin-Ciocalteu returns a single reducing-capacity figure in gallic or caffeic acid equivalents. A study across 50 oils found that summing individually measured compounds gave totals 1.9 to 3.0 times higher than single-number methods run on the same oils.",
      },
      {
        question: "Does NMR really read higher than HPLC?",
        answer:
          "Not as an instrument. When both techniques quantify the same compound against real standards they agree closely: a 2021 study measuring oleocanthal by NMR and by HPLC on the same oils reported 768 against 789, 724 against 739, and 283 against 259 mg/kg. The differences you see between published totals come from what is being counted and in what units, not from one machine inflating results. Treat any claim that NMR is inherently generous, or that HPLC is inherently accurate, as marketing.",
      },
      {
        question: "Why is your total {{coratina.total}} when the IOC method is validated to 800 mg/kg?",
        answer:
          "COI/T.20/Doc. No 29 states its range of measurement as 30 to 800 mg/kg, so our {{coratina.total}} sits just above the top of that validated range and should be read as an approximate figure at the boundary rather than a precise one. The certificate also states an expanded uncertainty of ±{{coratina.total_u}} mg/kg. We would rather point this out ourselves than have it found. It is one of the reasons we report oleocanthal and oleacein separately, from a dedicated assay, instead of relying on a total.",
      },
      {
        question: "What is the Folin-Ciocalteu test, and is it accurate for olive oil?",
        answer:
          "It is a colour-change reaction: the reagent is reduced by phenols and the resulting colour is read on a spectrophotometer, giving one number. It responds to reducing capacity rather than to phenols specifically, so proteins, thiols, ascorbic acid and some metal ions register too — which is why EFSA considers it unsuitable for foods in general. For olive oil the same panel reached a different conclusion in 2025, judging it appropriate because the olive oil matrix lacks significant amounts of those interfering compounds. Its real limitation is scope: one number, no compounds named.",
      },
      {
        question: "Can you compare polyphenol numbers from different labs or different tests?",
        answer:
          "Totals, no — including ours against anyone else's. Individual compounds travel much better: oleocanthal measured in absolute mass by one laboratory can reasonably be set beside oleocanthal measured in absolute mass by another, because a molecule has one molecular weight whichever instrument counts it. Compare like assays, or compare named compounds, and treat any cross-method total comparison as meaningless even when it flatters us.",
      },
      {
        question: "What are oleocanthal and oleacein?",
        answer:
          "Two phenolic compounds specific to olive oil. Oleocanthal produces the peppery catch at the back of the throat and inhibits the COX-1 and COX-2 enzymes — the same mechanism as ibuprofen, at roughly a tenth of the potency by weight. It was identified precisely because a researcher noticed fresh olive oil irritated the throat the way liquid ibuprofen does. Oleacein is its close relative, built on hydroxytyrosol rather than tyrosol, and is among the most potent antioxidants identified in food. Both are specific molecules with molecular weights and reference standards, which is what makes them portable between laboratories in a way a total is not.",
      },
      {
        question: "How fast do polyphenols degrade in olive oil?",
        answer:
          "Continuously from the press onward, and faster with heat, light, oxygen and time. An opened bottle loses them more quickly than a sealed one. This is why a polyphenol figure without a harvest year and a sample date is incomplete: it describes the oil at the moment it was tested, which may be a long way behind the bottle in your kitchen.",
      },
      {
        question: "What should an olive oil lab certificate include?",
        answer:
          "The test method with its document reference, the laboratory's name, its accreditation (ISO/IEC 17025 covers testing competence and IOC recognition covers olive oil specifically; ISO 9001 is a management standard and says nothing about the assay), the sample date, and results with their units. A good certificate also states the measurement uncertainty and the limits of quantification, and reports oleocanthal and oleacein separately rather than only a total.",
      },
      {
        question: "What about LC-MS/MS?",
        answer:
          "Liquid chromatography with tandem mass spectrometry identifies compounds with the highest specificity of any of these techniques and is the benchmark the others are judged against. It appears mainly in research rather than on commercial certificates, where cost keeps it rare.",
      },
    ],
  },
  details: {
    methodsSummary: "Full comparison of the three methods",
    sourcesSummary: "Sources and full references",
    rows: {
      does: "What it does",
      reports: "What it reports",
      status: "IOC status",
      limitation: "Known limitation",
    },
    table: {
      does: [
        "Separates the phenolic fraction and quantifies compounds one at a time",
        "Reads a magnetic resonance spectrum and assigns signals to structures",
        "A colour-change reaction read on a spectrophotometer",
      ],
      reports: [
        "Compound-by-compound breakdown plus a total in tyrosol equivalents",
        "A total plus selected named compounds, in absolute mass",
        "One total, in gallic or caffeic acid equivalents",
      ],
      status: ["Recognised — Doc. No 29", "Not recognised", "Not recognised"],
      limitation: [
        "Tyrosol-equivalent totals run low; the IOC states this itself",
        "Counts a narrower compound set on a different mass basis",
        "Responds to reducing capacity rather than to phenols specifically",
      ],
    },
  },
  cta: {
    h2: "Buy an olive oil whose numbers you can check",
    body: "Every ATTIMO bottle carries its harvest, its sample date and a certificate you can open before you order — oleocanthal and oleacein on their own lines.",
    button: "See the oils and their certificates",
    imageAlt: "ATTIMO Coratina bottle on a wooden crate in a sunlit olive grove, beside freshly picked olives",
  },
};

const de: MethodsContent = {
  lang: "de",
  meta: {
    title: "Polyphenolwerte vergleichen: HPLC, NMR, Folin | ATTIMO",
    description:
      "Polyphenol-Gesamtwerte aus HPLC, NMR und Folin sind nicht vergleichbar. Oleocanthal plus Oleacein schon. Wie jeder Test zählt und was im Zertifikat steht.",
    headline:
      "So vergleichst du Polyphenolwerte von Olivenöl über HPLC, NMR und Folin-Ciocalteu hinweg",
    imageCaption:
      "Ein Coratina-Olivenöl, zwei Methoden: {{coratina.total}} mg/kg per HPLC und 1.215 mg/kg per NMR.",
  },
  heroAlt: "Olivenhain im Morgengrauen in warmem Frühnebel",
  hero: {
    eyebrow: "Polyphenol-Analysemethoden erklärt",
    h1: "Dasselbe Olivenöl kann {{coratina.total}} oder 1.215 Polyphenole haben, je nachdem, wie gemessen wird",
    lead: "Verschiedene Methoden ergeben für genau dieselbe Ölprobe verschiedene Polyphenol-Gesamtwerte.",
    hplcSub: "Die Methode, die wir veröffentlichen",
    nmrSub: "Die Methode, die die meisten Wettbewerber veröffentlichen",
    totalLabel: "Polyphenole gesamt",
  },
  strip: { testedBy: "Getestet von", accreditation: "Akkreditierung", method: "Methode" },
  tests: {
    eyebrow: "Wie Polyphenole gemessen werden",
    h2: "HPLC vs. NMR vs. Folin-Ciocalteu",
    lead: "Olivenöl enthält Dutzende verschiedener Polyphenole. Diese drei Tests zählen jeweils eine andere Auswahl davon, in anderen Einheiten.",
    cards: [
      {
        name: "HPLC",
        verdict: "Misst jedes bioaktive Polyphenol einzeln",
        reading: "Zeigt die niedrigsten Werte",
        how: "Drückt das Öl durch ein Rohr, das so dicht gepackt ist, dass die Polyphenole einzeln nacheinander austreten. Jedes wird beim Austritt gemessen.",
        reports: "Jede Verbindung einzeln, dazu einen Gesamtwert",
        blind: "Der Gesamtwert wird in Tyrosol-Äquivalenten angegeben, was laut IOC zu niedrig ausfallen kann",
        ioc: "Offizielle IOC-Methode: Doc. No 29",
      },
      {
        name: "NMR",
        verdict: "Misst Polyphenole gebündelt, als einen Gesamtwert",
        reading: "Zeigt höhere Werte",
        how: "Bringt die Probe in einen starken Magneten und liest das Muster, das zurückkommt. Daraus wird abgeleitet, welche Strukturen vorhanden sein müssen, um es zu erzeugen.",
        reports: "Ausgewählte Verbindungen, dazu einen Gesamtwert aus einem anderen Satz",
        blind: "Die Gesamtwerte sind anders aufgebaut als bei HPLC und fallen beim selben Öl höher aus",
        ioc: "Weit verbreitet, keine IOC-Methode",
      },
      {
        name: "Folin-Ciocalteu",
        verdict: "Schätzt einen Gesamtwert aus einer Farbreaktion",
        reading: "Zeigt die höchsten Werte",
        how: "Gibt ein Reagenz zu, das die Polyphenole blau färben. Je dunkler das Blau, desto höher der Wert. Das Öl wird dabei in nichts aufgetrennt.",
        reports: "Eine Zahl, keine benannten Verbindungen",
        blind: "Alles im Öl, was das Reagenz reduziert, wird als Polyphenol mitgezählt",
        ioc: "Weit verbreitet, keine IOC-Methode",
      },
    ],
    rows: {
      how: "Wie es funktioniert",
      reports: "Was angegeben wird",
      blind: "Blinder Fleck",
      ioc: "Offizieller Status",
    },
    iocLabel: "Was ist der IOC?",
    iocBody:
      "Der International Olive Council ist die von den Vereinten Nationen getragene Organisation, die die Regeln für Olivenöl schreibt: die Güteklassen, die Verkostungsstandards und die Labormethoden. Sie hat ein offizielles Verfahren zur Messung von Polyphenolen veröffentlicht. Nur HPLC folgt ihm.",
  },
  caseStudy: {
    eyebrow: "Fallstudie: Coratina, Ernte 2025",
    h2: "Zwei Coratina: Das phenolisch schwächere Öl zeigt wegen der NMR-Methode den höheren Wert",
    lead: "HPLC misst jedes bioaktive Polyphenol einzeln. NMR erfasst sie gebündelt. Allein dieser Unterschied verschafft dem schwächeren Öl die höhere Schlagzeile, obwohl es weniger von den beiden Phenolen enthält, für die die Evidenz am stärksten ist: Oleocanthal und Oleacein.",
    mineName: "ATTIMO Coratina 25/26",
    rivalName: "Coratina eines Wettbewerbers",
    mineMethod: "IOC Doc. No 29",
    rivalMethod: "Keine IOC-Methode",
    totalLabel: "Polyphenole gesamt, wie veröffentlicht",
    notComparable: "Über Methoden hinweg nicht vergleichbar",
    oleocanthal: "Oleocanthal",
    oleacein: "Oleacein",
    comparable: "Der vergleichbare Wert",
  },
  compounds: {
    eyebrow: "Der Wert für den Vergleich",
    h2Lead: "Oleocanthal & Oleacein",
    h2Rest: "die wichtigsten Werte für den Vergleich über Tests hinweg",
    lead: "Polyphenole sind eine weite Familie, und die meisten Arten haben keine starke Evidenz hinter sich. Oleocanthal und Oleacein schon. Beide sind einzelne Moleküle, deshalb gibt jedes Labor sie in denselben Milligramm an und ihre Summe übersteht einen Methodenwechsel.",
    oleocanthalBody:
      "Das pfeffrige Kratzen hinten im Hals bei einem frischen Öl. Es hemmt die Enzyme COX-1 und COX-2 auf dieselbe Weise wie Ibuprofen, bei etwa einem Zehntel der Stärke pro Gewicht.",
    oleaceinBody:
      "Eines der stärksten Antioxidantien, die in einem Lebensmittel vorkommen, mit eigener kardiovaskulärer Evidenz. Die meisten Öle enthalten sehr wenig davon, deshalb trennt es sie deutlich voneinander.",
    inLabel: "In ATTIMO Coratina 25/26",
    sumLabel: "Oleocanthal + Oleacein · ATTIMO Coratina 25/26",
    glassesCaption:
      "Oleocanthal ist die eine Verbindung hier, die du ohne Labor finden kannst: Es ist das Kratzen hinten im Hals bei einem frischen Öl.",
    glassesAlt:
      "Sechs kobaltblaue Olivenöl-Verkostungsgläser mit Deckel, gefüllt mit grünem Öl, auf einem dunkelgrünen Tisch",
    doseH3:
      "52 Kalorien ATTIMO Coratina 25/26 enthalten so viele Polyphenole wie 245 Kalorien Supermarktöl",
    doseLead: "Ein hochwertigeres Öl liefert dir mehr Polyphenole bei weniger Kalorien.",
    doseAxis: "Olivenöl-Kalorien für 5 mg Polyphenole",
    doseRows: {
      supermarket: "Supermarktöl",
      eu: "EU-Referenzöl",
      blueprint: "Blueprint",
      attimo: "ATTIMO Coratina 25/26",
    },
    disclaimerPre: "Der Oleocanthal-Mechanismus wurde",
    disclaimerLink: "2005 erstmals in Nature beschrieben",
    disclaimerPost:
      ". Das sind Forschungsergebnisse zu isolierten Verbindungen; Olivenöl ist ein Lebensmittel, und nichts hier ist eine Aussage über die Behandlung oder Vorbeugung von Krankheiten.",
  },
  whyHplc: {
    eyebrow: "Unsere Wahl",
    h2: "HPLC ist der einzige Test, der zeigt, woraus der Gesamtwert besteht",
    lead: "Nur wenige der Dutzenden Polyphenole im Olivenöl haben einen nachgewiesenen Mechanismus im Körper. Ein Gesamtwert zählt sie alle gleich, deshalb kann eine große Zahl mit Verbindungen aufgefüllt sein, die dir nichts bringen. HPLC führt sie einzeln auf.",
    cards: [
      [
        "Er schlüsselt den Gesamtwert auf",
        "Doc. No 29 weist jeder gefundenen Verbindung einen Wert zu. Du siehst, woraus die Zahl besteht, statt darauf zu vertrauen, dass sie aus den richtigen Dingen besteht.",
      ],
      [
        "Jeder kann uns zur Wiederholung zwingen",
        "Es ist das veröffentlichte Protokoll des International Olive Council. Schick ATTIMO Coratina 25/26 an ein anderes akkreditiertes Labor, verlang dieselbe Methode, und der Wert sollte zurückkommen.",
      ],
      [
        "Er nennt seine Fehlerspanne",
        "Unser Zertifikat weist {{coratina.total}} ±{{coratina.total_u}} mg/kg aus und nennt den Bereich, für den die Methode validiert ist. Eine Zahl ohne Spanne ist eine Zahl, die niemand geprüft hat.",
      ],
    ],
    millCaption:
      "Die Probe, aus der Bericht {{coratina.report}} entstand, wurde im November in der Mühle gezogen, wenige Tage nach der Pressung.",
    millAlt: "Frisches grünes Olivenöl fließt in der Mühle aus einem Stahlauslauf in einen Behälter",
  },
  checklist: {
    eyebrow: "Deine Checkliste",
    h2: "So prüfst du Polyphenol-Angaben bei Olivenöl",
    lead: "Die meisten Flaschen scheitern schon an der ersten Frage. Ein Produzent, der alle sechs beantworten kann, hat dir etwas Nachprüfbares gegeben.",
    items: [
      ["Welcher Test?", "HPLC, NMR oder Folin. Ohne diese Angabe hat die Zahl keine lesbare Einheit."],
      ["Welches Labor?", "Ein Ergebnis ohne Labor dahinter kann niemand hinterfragen."],
      ["Akkreditiert?", "ISO/IEC 17025 deckt die Prüfkompetenz ab. ISO 9001 tut das nicht."],
      ["Welche Ernte?", "Polyphenole erreichen ihr Maximum bei früher Ernte und sinken von da an."],
      ["Wann beprobt?", "Der Abstand zwischen Pressung und Test gehört zur Zahl dazu."],
      [
        "Verbindungen aufgeführt?",
        "Oleocanthal und Oleacein in eigenen Zeilen, ohne sie in einem Gesamtwert zu verstecken.",
      ],
    ],
    certCaption: "Unser eigenes Zertifikat, mit Anmerkungen zu den sechs Fragen.",
    certLink: "Vollständigen Bericht öffnen →",
    certAlt:
      "Analysezertifikat der ATTIMO Coratina Ernte 2025, mit Anmerkungen zu Testmethode, Labor, Akkreditierung, Probendatum und Ergebnissen der einzelnen Verbindungen",
  },
  certificates: {
    eyebrow: "Wir liefern die Belege",
    h2: "Jeder Wert, den wir veröffentlichen, mit dem Bericht dazu",
    lead: "Beide Öle, analysiert von Chemiservice in Monopoli, einem nach ISO/IEC 17025 akkreditierten Labor, das vom International Olive Council für erweiterte Analysen anerkannt ist. Jeder Bericht lässt sich vollständig öffnen.",
    cols: {
      oil: "Öl",
      total: "Gesamt",
      oleocanthal: "Oleocanthal",
      oleacein: "Oleacein",
      report: "Bericht",
    },
    footnote:
      "Alle Werte in mg/kg, Ernte 2025/26, HPLC nach IOC Doc. 29, Oleocanthal und Oleacein aus einem eigenen Assay. Coratina beprobt am 18. November 2025, Nocellara am 17. November 2025. Doc. 29 gibt einen Messbereich von 30–800 mg/kg an, unsere {{coratina.total}} liegen also knapp darüber und sind an dieser Grenze als ungefährer Wert zu lesen.",
  },
  faq: {
    heading: "Fragen zur Polyphenol-Analytik",
    items: [
      {
        question: "Warum geben zwei Labore für dasselbe Olivenöl verschiedene Polyphenolwerte an?",
        answer:
          "Weil die Tests verschiedene Verbindungen zählen und sie in verschiedenen Einheiten angeben. Die HPLC-Methode des IOC (COI/T.20/Doc. No 29) quantifiziert alles gegen Tyrosol und gibt den Gesamtwert in Tyrosol-Äquivalenten an. NMR-Gesamtwerte, wie sie in dieser Kategorie veröffentlicht werden, sind meist der Wert für Hydroxytyrosol und seine Derivate, umgerechnet pro Kilogramm, also ein engerer Satz an Verbindungen auf einer anderen Massenbasis. Folin-Ciocalteu liefert einen einzigen Wert für die Reduktionskapazität, in Gallussäure- oder Kaffeesäure-Äquivalenten. Eine Studie an 50 Ölen ergab, dass die Summe einzeln gemessener Verbindungen 1,9- bis 3,0-mal höhere Gesamtwerte lieferte als Einzelwert-Methoden an denselben Ölen.",
      },
      {
        question: "Zeigt NMR wirklich höhere Werte als HPLC?",
        answer:
          "Nicht als Gerät. Wenn beide Techniken dieselbe Verbindung gegen echte Standards quantifizieren, stimmen sie eng überein: Eine Studie von 2021, die Oleocanthal per NMR und per HPLC an denselben Ölen gemessen hat, berichtete 768 gegen 789, 724 gegen 739 und 283 gegen 259 mg/kg. Die Unterschiede zwischen veröffentlichten Gesamtwerten entstehen daraus, was gezählt wird und in welchen Einheiten. Kein Gerät bläht die Ergebnisse auf. Behandle jede Behauptung, NMR sei von Natur aus großzügig oder HPLC von Natur aus genau, als Marketing.",
      },
      {
        question: "Warum liegt euer Gesamtwert bei {{coratina.total}}, wenn die IOC-Methode bis 800 mg/kg validiert ist?",
        answer:
          "COI/T.20/Doc. No 29 gibt seinen Messbereich mit 30 bis 800 mg/kg an. Unsere {{coratina.total}} liegen damit knapp über dem oberen Ende dieses validierten Bereichs und sind an dieser Grenze als ungefährer Wert zu lesen, ohne den Anspruch auf Präzision. Das Zertifikat nennt außerdem eine erweiterte Messunsicherheit von ±{{coratina.total_u}} mg/kg. Wir weisen lieber selbst darauf hin, als dass es jemand findet. Das ist einer der Gründe, warum wir Oleocanthal und Oleacein getrennt angeben, aus einem eigenen Assay, statt uns auf einen Gesamtwert zu verlassen.",
      },
      {
        question: "Was ist der Folin-Ciocalteu-Test, und ist er für Olivenöl genau?",
        answer:
          "Es ist eine Farbreaktion: Das Reagenz wird von Phenolen reduziert, und die entstehende Farbe wird am Spektrophotometer abgelesen, was eine einzige Zahl ergibt. Er reagiert auf die Reduktionskapazität und nicht gezielt auf Phenole, deshalb schlagen auch Proteine, Thiole, Ascorbinsäure und einige Metallionen an. Darum hält die EFSA ihn für Lebensmittel allgemein für ungeeignet. Für Olivenöl kam dasselbe Gremium 2025 zu einem anderen Schluss und hielt ihn für angemessen, weil die Olivenöl-Matrix keine nennenswerten Mengen dieser störenden Verbindungen enthält. Seine eigentliche Grenze ist der Umfang: eine Zahl, keine benannten Verbindungen.",
      },
      {
        question: "Kann man Polyphenolwerte aus verschiedenen Laboren oder verschiedenen Tests vergleichen?",
        answer:
          "Gesamtwerte nein, auch unsere nicht gegen die von anderen. Einzelne Verbindungen lassen sich deutlich besser übertragen: Oleocanthal, das ein Labor in absoluter Masse gemessen hat, kann man sinnvoll neben Oleocanthal stellen, das ein anderes Labor in absoluter Masse gemessen hat, denn ein Molekül hat ein Molekulargewicht, egal welches Gerät es zählt. Vergleiche gleichartige Assays oder benannte Verbindungen, und halte jeden methodenübergreifenden Vergleich von Gesamtwerten für bedeutungslos, auch wenn er uns schmeichelt.",
      },
      {
        question: "Was sind Oleocanthal und Oleacein?",
        answer:
          "Zwei phenolische Verbindungen, die es nur im Olivenöl gibt. Oleocanthal erzeugt das pfeffrige Kratzen hinten im Hals und hemmt die Enzyme COX-1 und COX-2, derselbe Mechanismus wie bei Ibuprofen, bei etwa einem Zehntel der Wirkstärke pro Gewicht. Entdeckt wurde es genau deshalb, weil einem Forscher auffiel, dass frisches Olivenöl den Hals so reizt wie flüssiges Ibuprofen. Oleacein ist sein naher Verwandter, aufgebaut auf Hydroxytyrosol statt auf Tyrosol, und gehört zu den stärksten Antioxidantien, die in Lebensmitteln bekannt sind. Beide sind konkrete Moleküle mit Molekulargewicht und Referenzstandards, und genau das macht sie zwischen Laboren übertragbar, wie es ein Gesamtwert nicht ist.",
      },
      {
        question: "Wie schnell bauen sich Polyphenole in Olivenöl ab?",
        answer:
          "Laufend ab der Pressung, und schneller mit Hitze, Licht, Sauerstoff und Zeit. Eine geöffnete Flasche verliert sie schneller als eine verschlossene. Deshalb ist ein Polyphenolwert ohne Erntejahr und Probendatum unvollständig: Er beschreibt das Öl in dem Moment, in dem es getestet wurde, und dieser Moment kann weit hinter der Flasche in deiner Küche liegen.",
      },
      {
        question: "Was sollte ein Laborzertifikat für Olivenöl enthalten?",
        answer:
          "Die Testmethode mit ihrer Dokumentennummer, den Namen des Labors, seine Akkreditierung (ISO/IEC 17025 deckt die Prüfkompetenz ab, die IOC-Anerkennung deckt speziell Olivenöl ab; ISO 9001 ist eine Managementnorm und sagt nichts über die Analyse aus), das Probendatum und die Ergebnisse mit ihren Einheiten. Ein gutes Zertifikat nennt außerdem die Messunsicherheit und die Bestimmungsgrenzen und gibt Oleocanthal und Oleacein getrennt an, statt nur einen Gesamtwert.",
      },
      {
        question: "Was ist mit LC-MS/MS?",
        answer:
          "Flüssigchromatographie mit Tandem-Massenspektrometrie identifiziert Verbindungen mit der höchsten Spezifität unter diesen Techniken und ist der Maßstab, an dem die anderen gemessen werden. Sie taucht vor allem in der Forschung auf und kaum auf kommerziellen Zertifikaten, weil die Kosten sie selten machen.",
      },
    ],
  },
  details: {
    methodsSummary: "Vollständiger Vergleich der drei Methoden",
    sourcesSummary: "Quellen und vollständige Nachweise",
    rows: {
      does: "Was sie macht",
      reports: "Was sie angibt",
      status: "IOC-Status",
      limitation: "Bekannte Grenze",
    },
    table: {
      does: [
        "Trennt die phenolische Fraktion ab und quantifiziert die Verbindungen einzeln nacheinander",
        "Liest ein Kernresonanzspektrum und ordnet die Signale Strukturen zu",
        "Eine Farbreaktion, abgelesen am Spektrophotometer",
      ],
      reports: [
        "Aufschlüsselung Verbindung für Verbindung, dazu einen Gesamtwert in Tyrosol-Äquivalenten",
        "Einen Gesamtwert, dazu ausgewählte benannte Verbindungen in absoluter Masse",
        "Einen Gesamtwert, in Gallussäure- oder Kaffeesäure-Äquivalenten",
      ],
      status: ["Anerkannt: Doc. No 29", "Nicht anerkannt", "Nicht anerkannt"],
      limitation: [
        "Gesamtwerte in Tyrosol-Äquivalenten fallen niedrig aus; der IOC sagt das selbst",
        "Zählt einen engeren Satz an Verbindungen auf einer anderen Massenbasis",
        "Reagiert auf die Reduktionskapazität und nicht gezielt auf Phenole",
      ],
    },
  },
  cta: {
    h2: "Kauf dir ein Olivenöl, dessen Werte du prüfen kannst",
    body: "Jede ATTIMO-Flasche trägt ihre Ernte, ihr Probendatum und ein Zertifikat, das du vor der Bestellung öffnen kannst, mit Oleocanthal und Oleacein in eigenen Zeilen.",
    button: "Die Öle und ihre Zertifikate ansehen",
    imageAlt: "ATTIMO-Coratina-Flasche auf einer Holzkiste in einem sonnigen Olivenhain, neben frisch gepflückten Oliven",
  },
};

const fr: MethodsContent = {
  lang: "fr",
  meta: {
    title: "Polyphénols de l'huile d'olive : HPLC, NMR, Folin | ATTIMO",
    description:
      "Les totaux de polyphénols en HPLC, NMR et Folin-Ciocalteu ne sont pas comparables. L'oléocanthal et l'oléacéine le sont. Comment lire un certificat.",
    headline:
      "Comparer les chiffres de polyphénols d'une huile d'olive entre HPLC, NMR et Folin-Ciocalteu",
    imageCaption:
      "Une même huile d'olive Coratina sur deux méthodes : {{coratina.total}} mg/kg en HPLC et 1 215 mg/kg en NMR.",
  },
  heroAlt: "Oliveraie à l'aube dans une brume matinale chaude",
  hero: {
    eyebrow: "Les méthodes d'analyse des polyphénols expliquées",
    h1: "La même huile d'olive peut afficher {{coratina.total}} ou 1 215 polyphénols, selon la méthode de mesure",
    lead: "Des méthodes différentes donnent des totaux de polyphénols différents pour exactement le même échantillon d'huile.",
    hplcSub: "La méthode que nous publions",
    nmrSub: "La méthode que publient la plupart de nos concurrents",
    totalLabel: "Polyphénols totaux",
  },
  strip: { testedBy: "Analysée par", accreditation: "Accréditation", method: "Méthode" },
  tests: {
    eyebrow: "Comment les polyphénols sont mesurés",
    h2: "HPLC vs NMR vs Folin-Ciocalteu",
    lead: "Une huile d'olive contient des dizaines de polyphénols différents. Ces trois tests en comptent chacun une sélection différente, dans des unités différentes.",
    cards: [
      {
        name: "HPLC",
        verdict: "Mesure chaque polyphénol bioactif séparément",
        reading: "Donne le chiffre le plus bas",
        how: "Pousse l'huile à travers un tube si dense que les polyphénols en ressortent un par un. Chacun est mesuré à la sortie.",
        reports: "Chaque composé séparément, plus un total",
        blind: "Son total est exprimé en équivalents tyrosol, ce qui peut le tirer vers le bas, comme l'indique le COI (IOC)",
        ioc: "Méthode officielle du COI — Doc. No 29",
      },
      {
        name: "NMR",
        verdict: "Mesure les polyphénols en bloc, en un seul total",
        reading: "Donne un chiffre plus élevé",
        how: "Place l'échantillon dans un aimant puissant et lit le signal qui en revient, puis en déduit quelles structures doivent être présentes pour le produire.",
        reports: "Des composés sélectionnés, plus un total construit à partir d'un autre ensemble",
        blind: "Ses totaux ne sont pas construits comme ceux du HPLC, ils tombent donc plus haut sur la même huile",
        ioc: "Largement utilisée, aucune méthode COI",
      },
      {
        name: "Folin-Ciocalteu",
        verdict: "Estime un total à partir d'une réaction colorée",
        reading: "Donne le chiffre le plus élevé",
        how: "Ajoute un réactif que les polyphénols font virer au bleu. Plus le bleu est foncé, plus le chiffre est élevé — l'huile n'est à aucun moment séparée en composés distincts.",
        reports: "Un seul chiffre, aucun composé nommé",
        blind: "Tout ce qui, dans l'huile, réduit le réactif est compté comme polyphénol",
        ioc: "Largement utilisée, aucune méthode COI",
      },
    ],
    rows: {
      how: "Comment ça marche",
      reports: "Ce qu'elle rapporte",
      blind: "Angle mort",
      ioc: "Statut officiel",
    },
    iocLabel: "Qu'est-ce que le COI ?",
    iocBody:
      "Le Conseil oléicole international est l'organisme adossé aux Nations unies qui écrit les règles de l'huile d'olive — les catégories, les normes de dégustation et les méthodes de laboratoire. Il a publié une procédure officielle pour mesurer les polyphénols. Seul le HPLC la suit.",
  },
  caseStudy: {
    eyebrow: "Étude de cas : Coratina, récolte 2025",
    h2: "Deux Coratina : l'huile la plus pauvre en phénols affiche le chiffre le plus élevé à cause de la méthode NMR",
    lead: "Le HPLC mesure chaque polyphénol bioactif individuellement. La RMN (NMR) les lit en bloc. Cette seule différence donne le chiffre d'affichage le plus élevé à l'huile la plus faible, alors qu'elle contient moins des deux phénols les mieux documentés : l'oléocanthal et l'oléacéine.",
    mineName: "ATTIMO Coratina 25/26",
    rivalName: "Coratina concurrente",
    mineMethod: "IOC Doc. No 29",
    rivalMethod: "Aucune méthode COI",
    totalLabel: "Polyphénols totaux, tels que publiés",
    notComparable: "Non comparable d'une méthode à l'autre",
    oleocanthal: "Oléocanthal",
    oleacein: "Oléacéine",
    comparable: "Le chiffre comparable",
  },
  compounds: {
    eyebrow: "Le chiffre à comparer",
    h2Lead: "Oléocanthal & oléacéine",
    h2Rest: "les principaux chiffres à comparer d'un test à l'autre",
    lead: "Les polyphénols forment une famille très large et la plupart des types ne reposent sur aucune preuve solide. L'oléocanthal et l'oléacéine, si. Ce sont des molécules uniques : chaque laboratoire les rapporte dans les mêmes milligrammes, et leur somme survit à un changement de méthode.",
    oleocanthalBody:
      "Le picotement poivré au fond de la gorge dans une huile fraîche. Il bloque les enzymes COX-1 et COX-2 de la même façon que l'ibuprofène, à environ un dixième de la puissance à poids égal.",
    oleaceinBody:
      "L'un des antioxydants les plus puissants identifiés dans un aliment, avec ses propres données cardiovasculaires derrière lui. La plupart des huiles en contiennent très peu, ce qui les sépare nettement.",
    inLabel: "Dans l'ATTIMO Coratina 25/26",
    sumLabel: "Oléocanthal + oléacéine · ATTIMO Coratina 25/26",
    glassesCaption:
      "L'oléocanthal est le seul composé ici que vous pouvez repérer sans laboratoire : c'est la toux au fond de la gorge dans une huile fraîche.",
    glassesAlt:
      "Six verres de dégustation d'huile d'olive bleu cobalt avec couvercles, remplis d'huile verte, sur une table vert foncé",
    doseH3:
      "52 calories d'ATTIMO Coratina 25/26 apportent autant de polyphénols que 245 calories d'huile de supermarché",
    doseLead: "Une huile de meilleure qualité vous apporte plus de polyphénols pour moins de calories.",
    doseAxis: "Calories d'huile d'olive nécessaires pour 5 mg de polyphénols",
    doseRows: {
      supermarket: "Huile de supermarché",
      eu: "Huile de référence UE",
      blueprint: "Blueprint",
      attimo: "ATTIMO Coratina 25/26",
    },
    disclaimerPre: "Le mécanisme de l'oléocanthal a été",
    disclaimerLink: "décrit pour la première fois dans Nature en 2005",
    disclaimerPost:
      ". Il s'agit de résultats de recherche sur des composés isolés ; l'huile d'olive est un aliment, et rien ici ne prétend traiter ou prévenir une maladie.",
  },
  whyHplc: {
    eyebrow: "Notre choix",
    h2: "Le HPLC est le seul test qui montre de quoi le total est fait",
    lead: "Parmi les dizaines de polyphénols de l'huile d'olive, seuls quelques-uns ont un mécanisme prouvé dans l'organisme. Un total les compte tous de la même façon, donc un gros chiffre peut être gonflé par des composés qui ne vous apportent rien. Le HPLC les liste un par un.",
    cards: [
      [
        "Il détaille le total",
        "Le Doc. No 29 attribue un chiffre à chaque composé qu'il trouve. Vous voyez de quoi le chiffre est fait, au lieu de devoir croire qu'il est fait des bonnes choses.",
      ],
      [
        "N'importe qui peut nous le faire refaire",
        "C'est le protocole publié du Conseil oléicole international. Envoyez l'ATTIMO Coratina 25/26 à un autre laboratoire accrédité, demandez la même méthode, et le chiffre devrait revenir.",
      ],
      [
        "Il imprime sa marge d'erreur",
        "Notre certificat indique {{coratina.total}} ±{{coratina.total_u}} mg/kg et nomme la plage sur laquelle la méthode est validée. Un chiffre sans marge est un chiffre que personne n'a vérifié.",
      ],
    ],
    millCaption:
      "L'échantillon à l'origine du rapport {{coratina.report}} a été prélevé au moulin en novembre, quelques jours après le pressage.",
    millAlt: "Huile d'olive verte fraîche coulant d'un bec en acier dans une cuve au moulin",
  },
  checklist: {
    eyebrow: "Votre liste de contrôle",
    h2: "Comment évaluer une allégation de polyphénols sur une huile d'olive",
    lead: "La plupart des bouteilles échouent dès la première question. Un producteur qui peut répondre aux six vous a donné quelque chose de vérifiable.",
    items: [
      ["Quel test ?", "HPLC, RMN ou Folin. Sans cela, le chiffre n'a aucune unité lisible."],
      ["Quel laboratoire ?", "Un résultat sans laboratoire derrière lui ne peut pas être contesté."],
      ["Accrédité ?", "L'ISO/IEC 17025 couvre la compétence analytique. L'ISO 9001 non."],
      ["Quelle récolte ?", "Les polyphénols culminent à la récolte précoce et baissent ensuite."],
      ["Prélevé quand ?", "L'écart entre le pressage et l'analyse fait partie du chiffre."],
      [
        "Composés listés ?",
        "L'oléocanthal et l'oléacéine sur leurs propres lignes, sans être fondus dans un total.",
      ],
    ],
    certCaption: "Notre propre certificat, annoté selon les six questions.",
    certLink: "Ouvrir le rapport complet →",
    certAlt:
      "Certificat d'analyse de la récolte ATTIMO Coratina 25/26, annoté pour montrer la méthode d'analyse, le laboratoire, l'accréditation, la date de prélèvement et les résultats par composé",
  },
  certificates: {
    eyebrow: "Nous avons les preuves",
    h2: "Chaque chiffre que nous publions, avec le rapport dont il provient",
    lead: "Les deux huiles, analysées par Chemiservice à Monopoli — un laboratoire ISO/IEC 17025 reconnu par le Conseil oléicole international pour les analyses avancées. Chaque rapport s'ouvre en entier.",
    cols: {
      oil: "Huile",
      total: "Total",
      oleocanthal: "Oléocanthal",
      oleacein: "Oléacéine",
      report: "Rapport",
    },
    footnote:
      "Toutes les valeurs en mg/kg, récolte 2025/26, HPLC selon IOC Doc. 29, avec l'oléocanthal et l'oléacéine issus d'un dosage dédié. Coratina prélevée le 18 novembre 2025, Nocellara le 17 novembre 2025. Le Doc. 29 indique une plage de mesure de 30–800 mg/kg : notre {{coratina.total}} se situe juste au-dessus et doit être lu comme approximatif à cette limite.",
  },
  faq: {
    heading: "Questions sur l'analyse des polyphénols",
    items: [
      {
        question:
          "Pourquoi deux laboratoires publient-ils des chiffres de polyphénols différents pour la même huile d'olive ?",
        answer:
          "Parce que les tests comptent des composés différents et les expriment dans des unités différentes. La méthode HPLC du COI (COI/T.20/Doc. No 29) quantifie tout par rapport au tyrosol et donne le total en équivalents tyrosol. Les totaux RMN publiés dans cette catégorie correspondent en général au chiffre « hydroxytyrosol et dérivés » ramené au kilogramme, soit un ensemble de composés plus étroit sur une base massique différente. Le Folin-Ciocalteu renvoie un seul chiffre de capacité réductrice, en équivalents acide gallique ou caféique. Une étude portant sur 50 huiles a montré que la somme des composés mesurés individuellement donnait des totaux 1,9 à 3,0 fois plus élevés que les méthodes à chiffre unique appliquées aux mêmes huiles.",
      },
      {
        question: "La RMN donne-t-elle réellement des chiffres plus élevés que le HPLC ?",
        answer:
          "Pas en tant qu'instrument. Quand les deux techniques quantifient le même composé face à de vrais étalons, elles concordent étroitement : une étude de 2021 mesurant l'oléocanthal par RMN et par HPLC sur les mêmes huiles a rapporté 768 contre 789, 724 contre 739, et 283 contre 259 mg/kg. Les écarts que vous voyez entre les totaux publiés viennent de ce qui est compté et dans quelles unités ; aucune machine ne gonfle les résultats. Considérez comme du marketing toute affirmation selon laquelle la RMN serait intrinsèquement généreuse ou le HPLC intrinsèquement exact.",
      },
      {
        question:
          "Pourquoi votre total est-il de {{coratina.total}} alors que la méthode du COI est validée jusqu'à 800 mg/kg ?",
        answer:
          "Le COI/T.20/Doc. No 29 annonce une plage de mesure de 30 à 800 mg/kg. Notre {{coratina.total}} se situe donc juste au-dessus du haut de cette plage validée et doit être lu comme un chiffre approximatif à la limite plutôt que comme un chiffre précis. Le certificat indique par ailleurs une incertitude élargie de ±{{coratina.total_u}} mg/kg. Nous préférons le signaler nous-mêmes plutôt que de laisser quelqu'un le découvrir. C'est l'une des raisons pour lesquelles nous rapportons l'oléocanthal et l'oléacéine séparément, à partir d'un dosage dédié, au lieu de nous appuyer sur un total.",
      },
      {
        question: "Qu'est-ce que le test Folin-Ciocalteu, et est-il fiable pour l'huile d'olive ?",
        answer:
          "C'est une réaction de changement de couleur : le réactif est réduit par les phénols et la couleur obtenue est lue au spectrophotomètre, ce qui donne un seul chiffre. Il répond à la capacité réductrice plutôt qu'aux phénols en particulier, si bien que les protéines, les thiols, l'acide ascorbique et certains ions métalliques comptent aussi — c'est pourquoi l'EFSA le juge inadapté aux aliments en général. Pour l'huile d'olive, le même panel est arrivé à une conclusion différente en 2025, l'estimant approprié parce que la matrice de l'huile d'olive ne contient pas de quantités significatives de ces composés interférents. Sa vraie limite est son périmètre : un seul chiffre, aucun composé nommé.",
      },
      {
        question:
          "Peut-on comparer des chiffres de polyphénols issus de laboratoires ou de tests différents ?",
        answer:
          "Les totaux, non — y compris les nôtres face à ceux des autres. Les composés individuels voyagent bien mieux : l'oléocanthal mesuré en masse absolue par un laboratoire peut raisonnablement être placé à côté de l'oléocanthal mesuré en masse absolue par un autre, parce qu'une molécule a un seul poids moléculaire, quel que soit l'instrument qui la compte. Comparez des dosages équivalents, ou comparez des composés nommés, et tenez toute comparaison de totaux entre méthodes pour dénuée de sens, même quand elle nous avantage.",
      },
      {
        question: "Que sont l'oléocanthal et l'oléacéine ?",
        answer:
          "Deux composés phénoliques propres à l'huile d'olive. L'oléocanthal produit le picotement poivré au fond de la gorge et inhibe les enzymes COX-1 et COX-2 — le même mécanisme que l'ibuprofène, à environ un dixième de la puissance à poids égal. Il a été identifié précisément parce qu'un chercheur a remarqué que l'huile d'olive fraîche irritait la gorge comme le fait l'ibuprofène liquide. L'oléacéine est son proche parent, construite sur l'hydroxytyrosol plutôt que sur le tyrosol, et figure parmi les antioxydants les plus puissants identifiés dans l'alimentation. Ce sont deux molécules précises, avec un poids moléculaire et des étalons de référence, ce qui les rend transportables d'un laboratoire à l'autre là où un total ne l'est pas.",
      },
      {
        question: "À quelle vitesse les polyphénols se dégradent-ils dans l'huile d'olive ?",
        answer:
          "En continu à partir du pressage, et plus vite avec la chaleur, la lumière, l'oxygène et le temps. Une bouteille ouverte en perd plus vite qu'une bouteille scellée. C'est pourquoi un chiffre de polyphénols sans année de récolte ni date de prélèvement est incomplet : il décrit l'huile au moment où elle a été analysée, ce qui peut être loin derrière la bouteille posée dans votre cuisine.",
      },
      {
        question: "Que doit contenir un certificat de laboratoire pour une huile d'olive ?",
        answer:
          "La méthode d'analyse avec sa référence documentaire, le nom du laboratoire, son accréditation (l'ISO/IEC 17025 couvre la compétence analytique et la reconnaissance COI couvre spécifiquement l'huile d'olive ; l'ISO 9001 est une norme de management et ne dit rien du dosage), la date de prélèvement, et les résultats avec leurs unités. Un bon certificat indique aussi l'incertitude de mesure et les limites de quantification, et rapporte l'oléocanthal et l'oléacéine séparément au lieu d'un seul total.",
      },
      {
        question: "Et la LC-MS/MS ?",
        answer:
          "La chromatographie liquide couplée à la spectrométrie de masse en tandem identifie les composés avec la spécificité la plus élevée de toutes ces techniques, et c'est la référence à laquelle les autres sont comparées. Elle apparaît surtout dans la recherche plutôt que sur les certificats commerciaux, où son coût la rend rare.",
      },
    ],
  },
  details: {
    methodsSummary: "Comparaison complète des trois méthodes",
    sourcesSummary: "Sources et références complètes",
    rows: {
      does: "Ce qu'elle fait",
      reports: "Ce qu'elle rapporte",
      status: "Statut COI",
      limitation: "Limite connue",
    },
    table: {
      does: [
        "Sépare la fraction phénolique et quantifie les composés un par un",
        "Lit un spectre de résonance magnétique et attribue les signaux à des structures",
        "Une réaction de changement de couleur lue au spectrophotomètre",
      ],
      reports: [
        "Détail composé par composé, plus un total en équivalents tyrosol",
        "Un total plus des composés nommés sélectionnés, en masse absolue",
        "Un seul total, en équivalents acide gallique ou caféique",
      ],
      status: ["Reconnue — Doc. No 29", "Non reconnue", "Non reconnue"],
      limitation: [
        "Les totaux en équivalents tyrosol sont bas ; le COI le dit lui-même",
        "Compte un ensemble de composés plus étroit sur une base massique différente",
        "Répond à la capacité réductrice plutôt qu'aux phénols en particulier",
      ],
    },
  },
  cta: {
    h2: "Achetez une huile d'olive dont vous pouvez vérifier les chiffres",
    body: "Chaque bouteille ATTIMO porte sa récolte, sa date de prélèvement et un certificat que vous pouvez ouvrir avant de commander — l'oléocanthal et l'oléacéine sur leurs propres lignes.",
    button: "Voir les huiles et leurs certificats",
    imageAlt: "Bouteille d'ATTIMO Coratina sur une caisse en bois dans une oliveraie ensoleillée, à côté d'olives fraîchement cueillies",
  },
};

const sv: MethodsContent = {
  lang: "sv",
  meta: {
    title: "Polyfenolsiffror i olivolja: HPLC, NMR, Folin | ATTIMO",
    description:
      "Totalsiffror från HPLC, NMR och Folin-Ciocalteu går inte att jämföra med varandra. Oleocanthal plus oleacein går. Så läser du ett labbcertifikat.",
    headline:
      "Så jämför du polyfenolsiffror i olivolja mellan HPLC, NMR och Folin-Ciocalteu",
    imageCaption:
      "En och samma Coratina-olivolja på två metoder: {{coratina.total}} mg/kg med HPLC och 1 215 mg/kg med NMR.",
  },
  heroAlt: "Olivlund i gryningen i varm morgondimma",
  hero: {
    eyebrow: "Analysmetoder för polyfenoler, förklarade",
    h1: "Samma olivolja kan ha {{coratina.total}} eller 1 215 polyfenoler, beroende på hur den mäts",
    lead: "Olika metoder ger olika totalsiffror för exakt samma oljeprov.",
    hplcSub: "Metoden vi publicerar",
    nmrSub: "Metoden de flesta konkurrenter publicerar",
    totalLabel: "Totala polyfenoler",
  },
  strip: { testedBy: "Testad av", accreditation: "Ackreditering", method: "Metod" },
  tests: {
    eyebrow: "Så mäts polyfenoler",
    h2: "HPLC vs NMR vs Folin-Ciocalteu",
    lead: "Olivolja innehåller dussintals olika polyfenoler. De tre testerna räknar var sitt urval av dem, i olika enheter.",
    cards: [
      {
        name: "HPLC",
        verdict: "Mäter varje bioaktiv polyfenol för sig",
        reading: "Ger lägst siffra",
        how: "Pressar oljan genom ett rör som är så tätt packat att polyfenolerna lämnar det en i taget. Var och en mäts på vägen ut.",
        reports: "Varje ämne separat, plus en totalsiffra",
        blind: "Totalsiffran anges i tyrosolekvivalenter, som enligt IOC kan hamna lågt",
        ioc: "Officiell IOC-metod — Doc. No 29",
      },
      {
        name: "NMR",
        verdict: "Mäter polyfenolerna samlat, som en totalsiffra",
        reading: "Ger högre siffra",
        how: "Placerar provet i en stark magnet och läser mönstret som kommer tillbaka, och räknar sedan ut vilka strukturer som måste finnas där för att ge det mönstret.",
        reports: "Utvalda ämnen, plus en totalsiffra byggd på ett annat urval",
        blind: "Totalsiffrorna byggs inte som HPLC-totaler, så de hamnar högre på samma olja",
        ioc: "Används brett, ingen IOC-metod",
      },
      {
        name: "Folin-Ciocalteu",
        verdict: "Uppskattar en totalsiffra ur en färgreaktion",
        reading: "Ger högst siffra",
        how: "Tillsätter ett reagens som polyfenolerna färgar blått. Ju mörkare blått, desto högre siffra — oljan delas alltså aldrig upp i något.",
        reports: "En enda siffra, inga ämnen namngivna",
        blind: "Allt i oljan som reducerar reagenset räknas som polyfenoler",
        ioc: "Används brett, ingen IOC-metod",
      },
    ],
    rows: {
      how: "Så fungerar det",
      reports: "Vad den rapporterar",
      blind: "Blind fläck",
      ioc: "Officiell status",
    },
    iocLabel: "Vad är IOC?",
    iocBody:
      "Internationella olivrådet är det FN-stödda organ som skriver reglerna för olivolja — kvalitetsklasserna, provsmakningsstandarderna och laboratoriemetoderna. Det har publicerat en officiell metod för att mäta polyfenoler. Bara HPLC följer den.",
  },
  caseStudy: {
    eyebrow: "Fallstudie: Coratina, skörd 2025",
    h2: "Två Coratina: den fenoliskt svagare oljan får högre siffra på grund av NMR-metoden",
    lead: "HPLC mäter varje bioaktiv polyfenol för sig. NMR läser dem samlat. Den skillnaden ensam ger den svagare oljan den högre rubriksiffran, samtidigt som den innehåller mindre av de två fenoler som har starkast belägg bakom sig: oleocanthal och oleacein.",
    mineName: "ATTIMO Coratina 25/26",
    rivalName: "Konkurrentens Coratina",
    mineMethod: "IOC Doc. No 29",
    rivalMethod: "Ingen IOC-metod",
    totalLabel: "Totala polyfenoler, som publicerat",
    notComparable: "Inte jämförbart mellan metoder",
    oleocanthal: "Oleocanthal",
    oleacein: "Oleacein",
    comparable: "Den jämförbara siffran",
  },
  compounds: {
    eyebrow: "Siffran att jämföra",
    h2Lead: "Oleocanthal & oleacein",
    h2Rest: "de viktigaste siffrorna att jämföra mellan tester",
    lead: "Polyfenoler är en bred familj och de flesta typer har inga starka belägg bakom sig. Oleocanthal och oleacein har det. Båda är enskilda molekyler, så varje laboratorium rapporterar dem i samma milligram och deras summa överlever ett metodbyte.",
    oleocanthalBody:
      "Det peppriga sticket längst bak i halsen i en färsk olja. Den blockerar enzymerna COX-1 och COX-2 på samma sätt som ibuprofen, med ungefär en tiondel av styrkan per vikt.",
    oleaceinBody:
      "En av de kraftfullaste antioxidanterna som hittats i något livsmedel, med egna belägg för hjärt-kärlhälsa bakom sig. De flesta oljor innehåller mycket lite, så den skiljer dem skarpt åt.",
    inLabel: "I ATTIMO Coratina 25/26",
    sumLabel: "Oleocanthal + oleacein · ATTIMO Coratina 25/26",
    glassesCaption:
      "Oleocanthal är det enda ämnet här som du kan hitta utan laboratorium: det är hostkänslan längst bak i halsen i en färsk olja.",
    glassesAlt:
      "Sex koboltblå provsmakningsglas för olivolja med lock, fyllda med grön olja, på ett mörkgrönt bord",
    doseH3:
      "52 kalorier ATTIMO Coratina 25/26 innehåller lika mycket polyfenoler som 245 kalorier snabbköpsolja",
    doseLead: "En olja av högre kvalitet ger dig fler polyfenoler på färre kalorier.",
    doseAxis: "Olivoljekalorier som krävs för 5 mg polyfenoler",
    doseRows: {
      supermarket: "Snabbköpsolja",
      eu: "EU:s referensolja",
      blueprint: "Blueprint",
      attimo: "ATTIMO Coratina 25/26",
    },
    disclaimerPre: "Oleocanthals mekanism",
    disclaimerLink: "rapporterades först i Nature 2005",
    disclaimerPost:
      ". Det här är forskningsresultat på isolerade ämnen; olivolja är ett livsmedel, och ingenting här är ett påstående om att behandla eller förebygga sjukdom.",
  },
  whyHplc: {
    eyebrow: "Vårt val",
    h2: "HPLC är det enda testet som visar vad totalsiffran består av",
    lead: "Bara ett fåtal av de dussintals polyfenolerna i olivolja har en bevisad mekanism i kroppen. En totalsiffra räknar dem alla lika, så en stor siffra kan vara utfylld med ämnen som inte gör något för dig. HPLC listar dem en och en.",
    cards: [
      [
        "Den specificerar totalsiffran",
        "Doc. No 29 sätter en siffra på varje ämne den hittar. Du ser vad siffran består av i stället för att lita på att den består av rätt saker.",
      ],
      [
        "Vem som helst kan få oss att göra om det",
        "Det är Internationella olivrådets publicerade protokoll. Skicka ATTIMO Coratina 25/26 till ett annat ackrediterat laboratorium, be om samma metod, och siffran bör komma tillbaka.",
      ],
      [
        "Den trycker sin felmarginal",
        "Vårt certifikat visar {{coratina.total}} ±{{coratina.total_u}} mg/kg och namnger det intervall som metoden är validerad över. En siffra utan felmarginal är en siffra ingen har kontrollerat.",
      ],
    ],
    millCaption:
      "Provet som gav rapport {{coratina.report}} togs vid kvarnen i november, inom några dagar efter pressningen.",
    millAlt: "Färsk grön olivolja som rinner från en stålpip ner i ett kar i oljekvarnen",
  },
  checklist: {
    eyebrow: "Din checklista",
    h2: "Så bedömer du påståenden om polyfenoler i olivolja",
    lead: "De flesta flaskor faller redan på den första. En producent som kan svara på alla sex har gett dig något du kan verifiera.",
    items: [
      ["Vilket test?", "HPLC, NMR eller Folin. Utan det har siffran inga enheter du kan läsa."],
      ["Vilket laboratorium?", "Ett resultat utan ett laboratorium bakom sig går inte att ifrågasätta."],
      ["Ackrediterat?", "ISO/IEC 17025 täcker kompetens i provning. ISO 9001 gör det inte."],
      ["Vilken skörd?", "Polyfenolerna toppar vid tidig skörd och sjunker därifrån."],
      ["Provtaget när?", "Tiden mellan pressning och analys är en del av siffran."],
      [
        "Ämnena listade?",
        "Oleocanthal och oleacein på egna rader, utanför totalsiffran.",
      ],
    ],
    certCaption: "Vårt eget certifikat, kommenterat mot de sex frågorna.",
    certLink: "Öppna hela rapporten →",
    certAlt:
      "Analyscertifikat för ATTIMO Coratina, skörd 2025, kommenterat för att visa testmetod, laboratorium, ackreditering, provtagningsdatum och resultat per ämne",
  },
  certificates: {
    eyebrow: "Vi visar bevisen",
    h2: "Varje siffra vi publicerar, med rapporten den kommer från",
    lead: "Båda oljorna är analyserade av Chemiservice, Monopoli — ett ISO/IEC 17025-laboratorium som Internationella olivrådet erkänner för avancerad analys. Varje rapport öppnas i sin helhet.",
    cols: {
      oil: "Olja",
      total: "Totalt",
      oleocanthal: "Oleocanthal",
      oleacein: "Oleacein",
      report: "Rapport",
    },
    footnote:
      "Alla värden i mg/kg, skörd 2025/26, HPLC enligt IOC Doc. 29 med oleocanthal och oleacein från en särskild analys. Coratina provtagen 18 november 2025, Nocellara 17 november 2025. Doc. 29 anger ett mätområde på 30–800 mg/kg, så våra {{coratina.total}} ligger strax över det och bör läsas som ungefärligt vid den gränsen.",
  },
  faq: {
    heading: "Frågor om polyfenolanalys",
    items: [
      {
        question: "Varför rapporterar två laboratorier olika polyfenolsiffror för samma olivolja?",
        answer:
          "Därför att testerna räknar olika ämnen och rapporterar dem i olika enheter. IOC:s HPLC-metod (COI/T.20/Doc. No 29) kvantifierar allt mot tyrosol och anger totalsiffran i tyrosolekvivalenter. NMR-totaler som publiceras i den här kategorin är oftast siffran för hydroxityrosol och dess derivat omräknad per kilo, vilket är ett smalare urval av ämnen på en annan massbas. Folin-Ciocalteu ger en enda siffra för reducerande förmåga, i gallus- eller kaffesyraekvivalenter. En studie av 50 oljor fann att summan av individuellt mätta ämnen gav totalsiffror 1,9 till 3,0 gånger högre än enkelsiffriga metoder på samma oljor.",
      },
      {
        question: "Läser NMR verkligen högre än HPLC?",
        answer:
          "Inte som instrument. När båda teknikerna kvantifierar samma ämne mot verkliga standarder stämmer de väl överens: en studie från 2021 som mätte oleocanthal med NMR och med HPLC på samma oljor rapporterade 768 mot 789, 724 mot 739 och 283 mot 259 mg/kg. Skillnaderna du ser mellan publicerade totalsiffror kommer från vad som räknas och i vilka enheter. Ingen maskin blåser upp resultaten. Behandla varje påstående om att NMR är generös av naturen, eller att HPLC är exakt av naturen, som marknadsföring.",
      },
      {
        question: "Varför är er totalsiffra {{coratina.total}} när IOC-metoden är validerad upp till 800 mg/kg?",
        answer:
          "COI/T.20/Doc. No 29 anger sitt mätområde som 30 till 800 mg/kg, så våra {{coratina.total}} ligger strax över toppen av det validerade området och bör läsas som en ungefärlig siffra vid gränsen snarare än en exakt. Certifikatet anger också en utvidgad mätosäkerhet på ±{{coratina.total_u}} mg/kg. Vi påpekar det hellre själva än låter någon annan hitta det. Det är ett av skälen till att vi rapporterar oleocanthal och oleacein separat, från en särskild analys, i stället för att luta oss mot en totalsiffra.",
      },
      {
        question: "Vad är Folin-Ciocalteu-testet, och håller det för olivolja?",
        answer:
          "Det är en färgomslagsreaktion: reagenset reduceras av fenoler och den färg som uppstår läses av i en spektrofotometer, vilket ger en siffra. Den svarar på reducerande förmåga snarare än på fenoler specifikt, så proteiner, tioler, askorbinsyra och vissa metalljoner registreras också — därför anser EFSA den olämplig för livsmedel i allmänhet. För olivolja kom samma panel till en annan slutsats 2025, och bedömde den som lämplig eftersom olivoljans matris saknar betydande mängder av de störande ämnena. Dess verkliga begränsning är omfattningen: en siffra, inga ämnen namngivna.",
      },
      {
        question: "Går det att jämföra polyfenolsiffror från olika laboratorier eller olika tester?",
        answer:
          "Totalsiffror, nej — inklusive våra mot någon annans. Enskilda ämnen reser mycket bättre: oleocanthal mätt i absolut massa av ett laboratorium kan rimligen ställas bredvid oleocanthal mätt i absolut massa av ett annat, eftersom en molekyl har en molekylvikt oavsett vilket instrument som räknar den. Jämför likadana analyser, eller jämför namngivna ämnen, och behandla varje jämförelse av totalsiffror mellan metoder som meningslös även när den smickrar oss.",
      },
      {
        question: "Vad är oleocanthal och oleacein?",
        answer:
          "Två fenoliska ämnen som är specifika för olivolja. Oleocanthal ger det peppriga sticket längst bak i halsen och hämmar enzymerna COX-1 och COX-2 — samma mekanism som ibuprofen, med ungefär en tiondel av styrkan per vikt. Det identifierades just för att en forskare märkte att färsk olivolja retade halsen på samma sätt som flytande ibuprofen. Oleacein är dess nära släkting, byggd på hydroxityrosol i stället för tyrosol, och hör till de kraftfullaste antioxidanter som identifierats i livsmedel. Båda är bestämda molekyler med molekylvikter och referensstandarder, och det är det som gör dem flyttbara mellan laboratorier på ett sätt som en totalsiffra aldrig blir.",
      },
      {
        question: "Hur snabbt bryts polyfenoler ner i olivolja?",
        answer:
          "Kontinuerligt från pressen och framåt, och snabbare med värme, ljus, syre och tid. En öppnad flaska förlorar dem snabbare än en förseglad. Därför är en polyfenolsiffra utan skördeår och provtagningsdatum ofullständig: den beskriver oljan i det ögonblick den testades, vilket kan ligga långt bakom flaskan i ditt kök.",
      },
      {
        question: "Vad bör ett labbcertifikat för olivolja innehålla?",
        answer:
          "Testmetoden med sin dokumentreferens, laboratoriets namn, dess ackreditering (ISO/IEC 17025 täcker kompetens i provning och IOC-erkännande täcker olivolja specifikt; ISO 9001 är en ledningsstandard och säger ingenting om analysen), provtagningsdatumet, och resultaten med sina enheter. Ett bra certifikat anger också mätosäkerheten och kvantifieringsgränserna, och rapporterar oleocanthal och oleacein separat i stället för bara en totalsiffra.",
      },
      {
        question: "Hur är det med LC-MS/MS?",
        answer:
          "Vätskekromatografi med tandem-masspektrometri identifierar ämnen med högst specificitet av alla dessa tekniker och är det riktmärke de andra bedöms mot. Den förekommer främst i forskning snarare än på kommersiella certifikat, där kostnaden håller den ovanlig.",
      },
    ],
  },
  details: {
    methodsSummary: "Fullständig jämförelse av de tre metoderna",
    sourcesSummary: "Källor och fullständiga referenser",
    rows: {
      does: "Vad den gör",
      reports: "Vad den rapporterar",
      status: "IOC-status",
      limitation: "Känd begränsning",
    },
    table: {
      does: [
        "Separerar den fenoliska fraktionen och kvantifierar ämnena ett i taget",
        "Läser ett magnetiskt resonansspektrum och tilldelar signalerna strukturer",
        "En färgomslagsreaktion som läses av i en spektrofotometer",
      ],
      reports: [
        "Uppdelning ämne för ämne plus en totalsiffra i tyrosolekvivalenter",
        "En totalsiffra plus utvalda namngivna ämnen, i absolut massa",
        "En totalsiffra, i gallus- eller kaffesyraekvivalenter",
      ],
      status: ["Erkänd — Doc. No 29", "Inte erkänd", "Inte erkänd"],
      limitation: [
        "Totalsiffror i tyrosolekvivalenter hamnar lågt; IOC anger det själva",
        "Räknar ett smalare urval av ämnen på en annan massbas",
        "Svarar på reducerande förmåga snarare än på fenoler specifikt",
      ],
    },
  },
  cta: {
    h2: "Köp en olivolja vars siffror du kan kontrollera",
    body: "Varje ATTIMO-flaska bär sin skörd, sitt provtagningsdatum och ett certifikat du kan öppna innan du beställer — oleocanthal och oleacein på egna rader.",
    button: "Se oljorna och deras certifikat",
    imageAlt: "ATTIMO Coratina-flaska på en trälåda i en solig olivlund, bredvid nyplockade oliver",
  },
};

const da: MethodsContent = {
  lang: "da",
  meta: {
    title: "Polyfenol-analysemetoder: HPLC, NMR, Folin | ATTIMO",
    description:
      "Samlede polyfenoltal fra HPLC, NMR og Folin-Ciocalteu kan ikke sammenlignes. Oleocanthal plus oleacein kan. Sådan læser du en analyserapport.",
    headline:
      "Sådan sammenligner du polyfenoltal i olivenolie på tværs af HPLC, NMR og Folin-Ciocalteu",
    imageCaption:
      "Én Coratina-olivenolie målt med to metoder: {{coratina.total}} mg/kg med HPLC og 1.215 mg/kg med NMR.",
  },
  heroAlt: "Olivenlund ved daggry i varm morgendis",
  hero: {
    eyebrow: "Metoderne til polyfenolanalyse forklaret",
    h1: "Den samme olivenolie kan have {{coratina.total}} eller 1.215 polyfenoler, alt efter hvordan den måles",
    lead: "Forskellige metoder giver forskellige samlede polyfenoltal for præcis den samme olieprøve.",
    hplcSub: "Metoden, vi offentliggør",
    nmrSub: "Metoden, de fleste konkurrenter offentliggør",
    totalLabel: "Polyfenoler i alt",
  },
  strip: { testedBy: "Testet af", accreditation: "Akkreditering", method: "Metode" },
  tests: {
    eyebrow: "Sådan måles polyfenoler",
    h2: "HPLC vs. NMR vs. Folin-Ciocalteu",
    lead: "Olivenolie indeholder snesevis af forskellige polyfenoler. De tre test tæller hver sin udvalgte del af dem, i hver sin enhed.",
    cards: [
      {
        name: "HPLC",
        verdict: "Måler hvert bioaktivt polyfenol for sig",
        reading: "Giver det laveste tal",
        how: "Presser olien gennem et rør, der er pakket så tæt, at polyfenolerne kommer ud ét ad gangen. Hvert af dem måles på vejen ud.",
        reports: "Hvert stof for sig, plus et samlet tal",
        blind: "Det samlede tal angives i tyrosolækvivalenter, som ifølge IOC kan ligge for lavt",
        ioc: "Officiel IOC-metode — Doc. No 29",
      },
      {
        name: "NMR",
        verdict: "Måler polyfenolerne samlet, som ét tal",
        reading: "Giver et højere tal",
        how: "Placerer prøven i en kraftig magnet og aflæser det mønster, der kommer retur, og udleder derefter, hvilke strukturer der må være til stede for at danne det.",
        reports: "Udvalgte stoffer, plus et samlet tal bygget på et andet udvalg",
        blind: "Dens samlede tal er bygget anderledes end HPLC's, så de lander højere på den samme olie",
        ioc: "Udbredt, ingen IOC-metode",
      },
      {
        name: "Folin-Ciocalteu",
        verdict: "Estimerer ét samlet tal ud fra en farvereaktion",
        reading: "Giver det højeste tal",
        how: "Tilsætter et reagens, som polyfenolerne farver blåt. Jo mørkere blå, jo højere tal — olien bliver altså aldrig skilt ad i enkeltdele.",
        reports: "Ét tal, ingen stoffer nævnt ved navn",
        blind: "Alt i olien, der reducerer reagenset, tælles med som polyfenoler",
        ioc: "Udbredt, ingen IOC-metode",
      },
    ],
    rows: {
      how: "Sådan virker den",
      reports: "Hvad den rapporterer",
      blind: "Blind vinkel",
      ioc: "Officiel status",
    },
    iocLabel: "Hvad er IOC?",
    iocBody:
      "Det Internationale Olivenråd er det FN-støttede organ, der skriver reglerne for olivenolie — kvalitetsklasserne, smagsstandarderne og laboratoriemetoderne. Det har udgivet en officiel procedure for måling af polyfenoler. Kun HPLC følger den.",
  },
  caseStudy: {
    eyebrow: "Case: Coratina, høst 2025",
    h2: "To Coratinaer: den fenolisk svagere olie får det højeste tal på grund af NMR-metoden",
    lead: "HPLC måler hvert bioaktivt polyfenol enkeltvis. NMR aflæser dem samlet. Den forskel alene giver den svagere olie det højeste overskriftstal, samtidig med at den indeholder mindre af de to fenoler med den stærkeste dokumentation bag sig: oleocanthal og oleacein.",
    mineName: "ATTIMO Coratina 25/26",
    rivalName: "Konkurrentens Coratina",
    mineMethod: "IOC Doc. No 29",
    rivalMethod: "Ingen IOC-metode",
    totalLabel: "Polyfenoler i alt, som offentliggjort",
    notComparable: "Kan ikke sammenlignes på tværs af metoder",
    oleocanthal: "Oleocanthal",
    oleacein: "Oleacein",
    comparable: "Det sammenlignelige tal",
  },
  compounds: {
    eyebrow: "Tallet, du skal sammenligne",
    h2Lead: "Oleocanthal & oleacein",
    h2Rest: "de vigtigste tal at sammenligne på tværs af test",
    lead: "Polyfenoler er en bred familie, og de fleste typer har ikke stærk evidens bag sig. Det har oleocanthal og oleacein. Begge er enkeltmolekyler, så hvert laboratorium rapporterer dem i de samme milligram, og deres sum overlever et metodeskift.",
    oleocanthalBody:
      "Det peberagtige stik bagest i halsen i en frisk olie. Det hæmmer COX-1- og COX-2-enzymerne på samme måde som ibuprofen, med omkring en tiendedel af styrken pr. vægt.",
    oleaceinBody:
      "En af de kraftigste antioxidanter, man kender fra fødevarer, med sin egen dokumentation for hjerte-kar-effekt. De fleste olier indeholder meget lidt af den, så den skiller dem skarpt ad.",
    inLabel: "I ATTIMO Coratina 25/26",
    sumLabel: "Oleocanthal + oleacein · ATTIMO Coratina 25/26",
    glassesCaption:
      "Oleocanthal er det eneste stof her, du kan finde uden et laboratorium: det er hosten bagest i halsen i en frisk olie.",
    glassesAlt:
      "Seks koboltblå smageglas med låg til olivenolie, fyldt med grøn olie, på et mørkegrønt bord",
    doseH3:
      "52 kalorier ATTIMO Coratina 25/26 indeholder lige så mange polyfenoler som 245 kalorier supermarkedsolie",
    doseLead: "En olie af højere kvalitet giver dig flere polyfenoler for færre kalorier.",
    doseAxis: "Olivenoliekalorier der skal til for 5 mg polyfenoler",
    doseRows: {
      supermarket: "Supermarkedsolie",
      eu: "EU-referenceolie",
      blueprint: "Blueprint",
      attimo: "ATTIMO Coratina 25/26",
    },
    disclaimerPre: "Oleocanthal-mekanismen blev",
    disclaimerLink: "første gang beskrevet i Nature i 2005",
    disclaimerPost:
      ". Det er forskningsresultater på isolerede stoffer; olivenolie er en fødevare, og intet her er en påstand om at behandle eller forebygge sygdom.",
  },
  whyHplc: {
    eyebrow: "Vores valg",
    h2: "HPLC er den eneste test, der viser, hvad det samlede tal består af",
    lead: "Kun få af de snesevis af polyfenoler i olivenolie har en påvist mekanisme i kroppen. Et samlet tal tæller dem alle ens, så et stort tal kan være polstret med stoffer, der ikke gør noget for dig. HPLC lister dem ét for ét.",
    cards: [
      [
        "Den specificerer det samlede tal",
        "Doc. No 29 sætter et tal på hvert stof, den finder. Du ser, hvad tallet består af, i stedet for at skulle stole på, at det består af de rigtige ting.",
      ],
      [
        "Alle kan få os til at gentage den",
        "Det er Det Internationale Olivenråds offentliggjorte protokol. Send ATTIMO Coratina 25/26 til et andet akkrediteret laboratorium, bed om den samme metode, og tallet bør komme tilbage.",
      ],
      [
        "Den trykker sin egen måleusikkerhed",
        "Vores analysebevis viser {{coratina.total}} ±{{coratina.total_u}} mg/kg og angiver det interval, metoden er valideret inden for. Et tal uden usikkerhed er et tal, ingen har kontrolleret.",
      ],
    ],
    millCaption:
      "Prøven bag rapport {{coratina.report}} blev udtaget på møllen i november, få dage efter presningen.",
    millAlt: "Frisk grøn olivenolie, der løber fra en stålhane ned i et kar på møllen",
  },
  checklist: {
    eyebrow: "Din tjekliste",
    h2: "Sådan vurderer du polyfenolpåstande på olivenolie",
    lead: "De fleste flasker falder allerede på den første. En producent, der kan svare på alle seks, har givet dig noget, du kan verificere.",
    items: [
      ["Hvilken test?", "HPLC, NMR eller Folin. Uden den har tallet ingen enhed, du kan læse."],
      ["Hvilket laboratorium?", "Et resultat uden et laboratorium bag sig kan ikke efterprøves."],
      ["Akkrediteret?", "ISO/IEC 17025 dækker kompetence til at teste. ISO 9001 gør ikke."],
      ["Hvilken høst?", "Polyfenoler topper ved tidlig høst og falder derfra."],
      ["Hvornår udtaget?", "Tiden mellem presning og test er en del af tallet."],
      [
        "Stoffer opgjort?",
        "Oleocanthal og oleacein på hver sin linje, i stedet for lagt ind i et samlet tal.",
      ],
    ],
    certCaption: "Vores eget analysebevis, kommenteret ud fra de seks spørgsmål.",
    certLink: "Åbn den fulde rapport →",
    certAlt:
      "Analysebevis for ATTIMO Coratina høst 2025, kommenteret så testmetode, laboratorium, akkreditering, prøvedato og stofresultater fremgår",
  },
  certificates: {
    eyebrow: "Vi har papir på det",
    h2: "Hvert tal vi offentliggør, med rapporten det kommer fra",
    lead: "Begge olier er analyseret af Chemiservice i Monopoli — et ISO/IEC 17025-laboratorium, som Det Internationale Olivenråd anerkender til avanceret analyse. Hver rapport kan åbnes i fuld længde.",
    cols: {
      oil: "Olie",
      total: "I alt",
      oleocanthal: "Oleocanthal",
      oleacein: "Oleacein",
      report: "Rapport",
    },
    footnote:
      "Alle værdier i mg/kg, høst 2025/26, HPLC efter IOC Doc. 29 med oleocanthal og oleacein fra en dedikeret analyse. Coratina udtaget 18. november 2025, Nocellara 17. november 2025. Doc. 29 angiver et måleområde på 30–800 mg/kg, så vores {{coratina.total}} ligger lige over det og bør læses som omtrentligt ved den grænse.",
  },
  faq: {
    heading: "Spørgsmål om polyfenoltest",
    items: [
      {
        question: "Hvorfor rapporterer to laboratorier forskellige polyfenoltal for den samme olivenolie?",
        answer:
          "Fordi testene tæller forskellige stoffer og rapporterer dem i forskellige enheder. IOC's HPLC-metode (COI/T.20/Doc. No 29) kvantificerer alt op mod tyrosol og angiver det samlede tal i tyrosolækvivalenter. De NMR-tal, der offentliggøres i denne kategori, er som regel tallet for hydroxytyrosol og derivater omregnet pr. kilo, hvilket er et snævrere udvalg af stoffer på et andet vægtgrundlag. Folin-Ciocalteu giver ét tal for reduktionsevne i gallussyre- eller kaffesyreækvivalenter. En undersøgelse af 50 olier fandt, at summen af enkeltmålte stoffer gav samlede tal, der var 1,9 til 3,0 gange højere end enkelttalsmetoder kørt på de samme olier.",
      },
      {
        question: "Giver NMR virkelig højere tal end HPLC?",
        answer:
          "Ikke som instrument. Når begge teknikker kvantificerer det samme stof op mod ægte standarder, stemmer de tæt overens: en undersøgelse fra 2021, der målte oleocanthal med både NMR og HPLC på de samme olier, rapporterede 768 mod 789, 724 mod 739 og 283 mod 259 mg/kg. Forskellene mellem offentliggjorte samlede tal skyldes, hvad der tælles med, og i hvilke enheder. Ingen af maskinerne puster resultaterne op. Betragt enhver påstand om, at NMR i sig selv er gavmild, eller at HPLC i sig selv er præcis, som markedsføring.",
      },
      {
        question: "Hvorfor er jeres samlede tal {{coratina.total}}, når IOC-metoden er valideret til 800 mg/kg?",
        answer:
          "COI/T.20/Doc. No 29 angiver sit måleområde som 30 til 800 mg/kg, så vores {{coratina.total}} ligger lige over toppen af det validerede område og bør læses som et omtrentligt tal ved grænsen frem for et præcist. Analysebeviset angiver også en udvidet måleusikkerhed på ±{{coratina.total_u}} mg/kg. Vi gør hellere selv opmærksom på det, end at andre finder det. Det er en af grundene til, at vi rapporterer oleocanthal og oleacein hver for sig, fra en dedikeret analyse, i stedet for at læne os op ad et samlet tal.",
      },
      {
        question: "Hvad er Folin-Ciocalteu-testen, og er den præcis for olivenolie?",
        answer:
          "Det er en farvereaktion: reagenset reduceres af fenoler, og den resulterende farve aflæses på et spektrofotometer, hvilket giver ét tal. Den reagerer på reduktionsevne frem for på fenoler specifikt, så proteiner, thioler, ascorbinsyre og visse metalioner tæller også med — derfor anser EFSA den for uegnet til fødevarer generelt. For olivenolie nåede det samme panel en anden konklusion i 2025 og vurderede den som egnet, fordi olivenoliens matrix ikke indeholder betydelige mængder af de forstyrrende stoffer. Dens reelle begrænsning er rækkevidden: ét tal, ingen stoffer nævnt ved navn.",
      },
      {
        question: "Kan man sammenligne polyfenoltal fra forskellige laboratorier eller forskellige test?",
        answer:
          "Samlede tal, nej — heller ikke vores op mod andres. Enkeltstoffer flytter sig langt bedre: oleocanthal målt i absolut masse af ét laboratorium kan med rimelighed stilles ved siden af oleocanthal målt i absolut masse af et andet, fordi et molekyle har én molekylvægt, uanset hvilket instrument der tæller det. Sammenlign ens analyser, eller sammenlign navngivne stoffer, og betragt enhver sammenligning af samlede tal på tværs af metoder som meningsløs — også når den klæder os.",
      },
      {
        question: "Hvad er oleocanthal og oleacein?",
        answer:
          "To fenoliske stoffer, der er specifikke for olivenolie. Oleocanthal giver det peberagtige stik bagest i halsen og hæmmer COX-1- og COX-2-enzymerne — samme mekanisme som ibuprofen, med omkring en tiendedel af styrken pr. vægt. Det blev netop identificeret, fordi en forsker bemærkede, at frisk olivenolie irriterede halsen på samme måde som flydende ibuprofen. Oleacein er dets nære slægtning, bygget på hydroxytyrosol frem for tyrosol, og er blandt de kraftigste antioxidanter, man har identificeret i fødevarer. Begge er specifikke molekyler med molekylvægte og referencestandarder, og det er det, der gør dem flytbare mellem laboratorier på en måde, et samlet tal aldrig bliver.",
      },
      {
        question: "Hvor hurtigt nedbrydes polyfenoler i olivenolie?",
        answer:
          "Løbende fra presningen og frem, og hurtigere med varme, lys, ilt og tid. En åbnet flaske mister dem hurtigere end en forseglet. Derfor er et polyfenoltal uden høstår og prøvedato ufuldstændigt: det beskriver olien i det øjeblik, den blev testet, hvilket kan ligge langt bag flasken i dit køkken.",
      },
      {
        question: "Hvad bør et analysebevis for olivenolie indeholde?",
        answer:
          "Testmetoden med dens dokumentreference, laboratoriets navn, dets akkreditering (ISO/IEC 17025 dækker kompetence til at teste, og IOC-anerkendelse dækker olivenolie specifikt; ISO 9001 er en ledelsesstandard og siger intet om selve analysen), prøvedatoen og resultaterne med deres enheder. Et godt analysebevis angiver også måleusikkerheden og kvantificeringsgrænserne og rapporterer oleocanthal og oleacein hver for sig frem for kun et samlet tal.",
      },
      {
        question: "Hvad med LC-MS/MS?",
        answer:
          "Væskekromatografi med tandem-massespektrometri identificerer stoffer med den højeste specificitet af alle disse teknikker og er den målestok, de øvrige vurderes op mod. Den optræder mest i forskning frem for på kommercielle analysebeviser, hvor omkostningen holder den sjælden.",
      },
    ],
  },
  details: {
    methodsSummary: "Fuld sammenligning af de tre metoder",
    sourcesSummary: "Kilder og fulde referencer",
    rows: {
      does: "Hvad den gør",
      reports: "Hvad den rapporterer",
      status: "IOC-status",
      limitation: "Kendt begrænsning",
    },
    table: {
      does: [
        "Adskiller den fenoliske fraktion og kvantificerer stofferne ét ad gangen",
        "Aflæser et magnetisk resonansspektrum og tilskriver signalerne strukturer",
        "En farvereaktion aflæst på et spektrofotometer",
      ],
      reports: [
        "Opdeling stof for stof plus et samlet tal i tyrosolækvivalenter",
        "Et samlet tal plus udvalgte navngivne stoffer, i absolut masse",
        "Ét samlet tal, i gallussyre- eller kaffesyreækvivalenter",
      ],
      status: ["Anerkendt — Doc. No 29", "Ikke anerkendt", "Ikke anerkendt"],
      limitation: [
        "Tal i tyrosolækvivalenter ligger lavt; det oplyser IOC selv",
        "Tæller et snævrere udvalg af stoffer på et andet vægtgrundlag",
        "Reagerer på reduktionsevne frem for på fenoler specifikt",
      ],
    },
  },
  cta: {
    h2: "Køb en olivenolie, hvis tal du kan kontrollere",
    body: "Hver ATTIMO-flaske bærer sin høst, sin prøvedato og et analysebevis, du kan åbne, før du bestiller — oleocanthal og oleacein på hver sin linje.",
    button: "Se olierne og deres analysebeviser",
    imageAlt: "ATTIMO Coratina-flaske på en trækasse i en solbeskinnet olivenlund ved siden af nyplukkede oliven",
  },
};

const nl: MethodsContent = {
  lang: "nl",
  meta: {
    title: "Polyfenolcijfers vergelijken: HPLC, NMR, Folin | ATTIMO",
    description:
      "Totalen van HPLC, NMR en Folin-Ciocalteu zijn onderling niet vergelijkbaar. Oleocanthal plus oleaceïne wel. Zo lees je elk polyfenolcertificaat.",
    headline:
      "Polyfenolcijfers van olijfolie vergelijken tussen HPLC, NMR en Folin-Ciocalteu",
    imageCaption:
      "Eén Coratina-olijfolie op twee methoden: {{coratina.total}} mg/kg met HPLC en 1.215 mg/kg met NMR.",
  },
  heroAlt: "Olijfgaard bij dageraad in warme ochtendnevel",
  hero: {
    eyebrow: "Analysemethoden voor polyfenolen uitgelegd",
    h1: "Dezelfde olijfolie kan {{coratina.total}} of 1.215 polyfenolen bevatten, afhankelijk van hoe er gemeten wordt",
    lead: "Verschillende methoden leveren verschillende polyfenoltotalen op voor exact hetzelfde oliemonster.",
    hplcSub: "De methode die wij publiceren",
    nmrSub: "De methode die de meeste concurrenten publiceren",
    totalLabel: "Totaal polyfenolen",
  },
  strip: { testedBy: "Getest door", accreditation: "Accreditatie", method: "Methode" },
  tests: {
    eyebrow: "Hoe polyfenolen gemeten worden",
    h2: "HPLC vs NMR vs Folin-Ciocalteu",
    lead: "Olijfolie bevat tientallen verschillende polyfenolen. Deze drie tests tellen elk een andere selectie daarvan, in andere eenheden.",
    cards: [
      {
        name: "HPLC",
        verdict: "Meet elke bioactieve polyfenol afzonderlijk",
        reading: "Geeft het laagste cijfer",
        how: "Duwt de olie door een buis die zo dicht gepakt is dat de polyfenolen er één voor één uit komen. Elk daarvan wordt bij het verlaten gemeten.",
        reports: "Elke verbinding apart, plus een totaal",
        blind: "Het totaal staat in tyrosolequivalenten, waarvan de IOC zegt dat het laag kan uitvallen",
        ioc: "Officiële IOC-methode — Doc. No 29",
      },
      {
        name: "NMR",
        verdict: "Meet polyfenolen gebundeld, als één totaal",
        reading: "Geeft een hoger cijfer",
        how: "Plaatst het monster in een sterke magneet en leest het patroon dat terugkomt, en leidt daaruit af welke structuren aanwezig moeten zijn om dat patroon te geven.",
        reports: "Geselecteerde verbindingen, plus een totaal dat uit een andere set is opgebouwd",
        blind: "De totalen zijn anders opgebouwd dan die van HPLC, dus ze vallen hoger uit op dezelfde olie",
        ioc: "Breed gebruikt, geen IOC-methode",
      },
      {
        name: "Folin-Ciocalteu",
        verdict: "Schat één totaal uit een kleurreactie",
        reading: "Geeft het hoogste cijfer",
        how: "Voegt een reagens toe dat de polyfenolen blauw kleuren. Hoe donkerder het blauw, hoe hoger het getal — de olie wordt dus nooit in afzonderlijke stoffen gescheiden.",
        reports: "Eén getal, geen verbindingen benoemd",
        blind: "Alles in de olie dat het reagens reduceert, wordt als polyfenolen meegeteld",
        ioc: "Breed gebruikt, geen IOC-methode",
      },
    ],
    rows: {
      how: "Hoe het werkt",
      reports: "Wat het rapporteert",
      blind: "Blinde vlek",
      ioc: "Officiële status",
    },
    iocLabel: "Wat is de IOC?",
    iocBody:
      "De International Olive Council is het door de Verenigde Naties gesteunde orgaan dat de regels voor olijfolie schrijft — de kwaliteitsklassen, de proefnormen en de labmethoden. Het heeft een officiële procedure gepubliceerd voor het meten van polyfenolen. Alleen HPLC volgt die.",
  },
  caseStudy: {
    eyebrow: "Casus: Coratina, oogst 2025",
    h2: "Twee Coratina's: de fenolisch zwakkere olie scoort hoger door de NMR-methode",
    lead: "HPLC meet elke bioactieve polyfenol afzonderlijk. NMR leest ze gebundeld. Alleen dat verschil geeft de zwakkere olie het hoogste getal op het etiket, terwijl die minder bevat van de twee fenolen met de sterkste onderbouwing: oleocanthal en oleaceïne.",
    mineName: "ATTIMO Coratina 25/26",
    rivalName: "Coratina van een concurrent",
    mineMethod: "IOC Doc. No 29",
    rivalMethod: "Geen IOC-methode",
    totalLabel: "Totaal polyfenolen, zoals gepubliceerd",
    notComparable: "Niet vergelijkbaar tussen methoden",
    oleocanthal: "Oleocanthal",
    oleacein: "Oleaceïne",
    comparable: "Het vergelijkbare cijfer",
  },
  compounds: {
    eyebrow: "Het cijfer om te vergelijken",
    h2Lead: "Oleocanthal & oleaceïne",
    h2Rest: "de belangrijkste cijfers om over tests heen te vergelijken",
    lead: "Polyfenolen zijn een brede familie en de meeste types hebben geen sterk bewijs achter zich. Oleocanthal en oleaceïne wel. Beide zijn één molecuul, dus elk lab rapporteert ze in dezelfde milligrammen en hun som blijft overeind bij een wissel van methode.",
    oleocanthalBody:
      "De peperige prikkel achter in je keel bij een verse olie. Het remt de COX-1- en COX-2-enzymen op dezelfde manier als ibuprofen, op ongeveer een tiende van de sterkte per gewicht.",
    oleaceinBody:
      "Een van de krachtigste antioxidanten die in voeding zijn gevonden, met eigen cardiovasculair onderzoek erachter. De meeste oliën bevatten er heel weinig van, dus het onderscheidt ze scherp.",
    inLabel: "In ATTIMO Coratina 25/26",
    sumLabel: "Oleocanthal + oleaceïne · ATTIMO Coratina 25/26",
    glassesCaption:
      "Oleocanthal is de enige stof hier die je zonder lab kunt vinden: het is het kuchje achter in je keel bij een verse olie.",
    glassesAlt:
      "Zes kobaltblauwe olijfolie-proefglazen met deksel, gevuld met groene olie, op een donkergroene tafel",
    doseH3:
      "52 calorieën ATTIMO Coratina 25/26 bevatten evenveel polyfenolen als 245 calorieën supermarktolie",
    doseLead: "Een olie van hogere kwaliteit levert je meer polyfenolen voor minder calorieën.",
    doseAxis: "Olijfoliecalorieën nodig voor 5 mg polyfenolen",
    doseRows: {
      supermarket: "Supermarktolie",
      eu: "EU-referentieolie",
      blueprint: "Blueprint",
      attimo: "ATTIMO Coratina 25/26",
    },
    disclaimerPre: "Het mechanisme van oleocanthal werd",
    disclaimerLink: "in 2005 voor het eerst beschreven in Nature",
    disclaimerPost:
      ". Dit zijn onderzoeksresultaten op geïsoleerde stoffen; olijfolie is een levensmiddel, en niets hier is een claim om ziekte te behandelen of te voorkomen.",
  },
  whyHplc: {
    eyebrow: "Onze keuze",
    h2: "HPLC is de enige test die laat zien waaruit het totaal bestaat",
    lead: "Van de tientallen polyfenolen in olijfolie heeft er maar een handvol een bewezen werking in het lichaam. Een totaal telt ze allemaal even zwaar, dus een groot getal kan opgevuld zijn met stoffen die niets voor je doen. HPLC somt ze één voor één op.",
    cards: [
      [
        "Het splitst het totaal uit",
        "Doc. No 29 zet een cijfer naast elke verbinding die het vindt. Je ziet waaruit het getal bestaat in plaats van erop te moeten vertrouwen dat het uit de juiste dingen bestaat.",
      ],
      [
        "Iedereen kan ons het laten overdoen",
        "Het is het gepubliceerde protocol van de International Olive Council. Stuur ATTIMO Coratina 25/26 naar een ander geaccrediteerd lab, vraag om dezelfde methode, en het getal hoort terug te komen.",
      ],
      [
        "Het drukt zijn foutmarge af",
        "Ons certificaat vermeldt {{coratina.total}} ±{{coratina.total_u}} mg/kg, en noemt het bereik waarvoor de methode gevalideerd is. Een getal zonder marge is een getal dat niemand heeft gecontroleerd.",
      ],
    ],
    millCaption:
      "Het monster dat rapport {{coratina.report}} opleverde, werd in november in de oliemolen genomen, binnen enkele dagen na het persen.",
    millAlt: "Verse groene olijfolie die uit een stalen tuit in een vat stroomt in de oliemolen",
  },
  checklist: {
    eyebrow: "Jouw checklist",
    h2: "Hoe je polyfenolclaims van olijfolie beoordeelt",
    lead: "De meeste flessen zakken al op de eerste vraag. Een producent die alle zes kan beantwoorden, geeft je iets dat je kunt verifiëren.",
    items: [
      ["Welke test?", "HPLC, NMR of Folin. Zonder die vermelding heeft het getal geen eenheid die je kunt lezen."],
      ["Welk lab?", "Een resultaat zonder lab erachter kun je nergens navragen."],
      ["Geaccrediteerd?", "ISO/IEC 17025 dekt de competentie om te testen. ISO 9001 doet dat niet."],
      ["Welke oogst?", "Polyfenolen pieken bij een vroege oogst en dalen daarna."],
      ["Wanneer bemonsterd?", "De tijd tussen persen en testen is onderdeel van het getal."],
      [
        "Verbindingen vermeld?",
        "Oleocanthal en oleaceïne apart vermeld, met een eigen cijfer per stof.",
      ],
    ],
    certCaption: "Ons eigen certificaat, geannoteerd bij de zes vragen.",
    certLink: "Open het volledige rapport →",
    certAlt:
      "Analysecertificaat van ATTIMO Coratina, oogst 2025, geannoteerd met de testmethode, het lab, de accreditatie, de monsterdatum en de resultaten per verbinding",
  },
  certificates: {
    eyebrow: "Wij tonen de bewijzen",
    h2: "Elk cijfer dat we publiceren, met het rapport waar het uit komt",
    lead: "Beide oliën zijn geanalyseerd door Chemiservice in Monopoli — een ISO/IEC 17025-lab dat door de International Olive Council erkend is voor geavanceerde analyses. Elk rapport opent volledig.",
    cols: {
      oil: "Olie",
      total: "Totaal",
      oleocanthal: "Oleocanthal",
      oleacein: "Oleaceïne",
      report: "Rapport",
    },
    footnote:
      "Alle waarden in mg/kg, oogst 2025/26, HPLC volgens IOC Doc. 29 met oleocanthal en oleaceïne uit een aparte bepaling. Coratina bemonsterd op 18 november 2025, Nocellara op 17 november 2025. Doc. 29 geeft een meetbereik van 30–800 mg/kg op, dus onze {{coratina.total}} ligt daar net boven en moet op die grens als benaderend gelezen worden.",
  },
  faq: {
    heading: "Vragen over polyfenolanalyse",
    items: [
      {
        question: "Waarom rapporteren twee labs verschillende polyfenolcijfers voor dezelfde olijfolie?",
        answer:
          "Omdat de tests andere verbindingen tellen en die in andere eenheden rapporteren. De HPLC-methode van de IOC (COI/T.20/Doc. No 29) kwantificeert alles tegen tyrosol en rapporteert het totaal in tyrosolequivalenten. NMR-totalen zoals ze in deze categorie gepubliceerd worden, zijn meestal het cijfer voor hydroxytyrosol en derivaten, omgerekend per kilogram — een smallere set verbindingen op een andere massabasis. Folin-Ciocalteu geeft één cijfer voor reducerend vermogen, in galluszuur- of cafeïnezuurequivalenten. Een studie over 50 oliën vond dat het optellen van afzonderlijk gemeten verbindingen totalen opleverde die 1,9 tot 3,0 keer hoger lagen dan methoden met één getal op dezelfde oliën.",
      },
      {
        question: "Leest NMR echt hoger dan HPLC?",
        answer:
          "Als instrument niet. Wanneer beide technieken dezelfde verbinding kwantificeren tegen echte standaarden, komen ze dicht bij elkaar: een studie uit 2021 die oleocanthal met NMR en met HPLC op dezelfde oliën mat, rapporteerde 768 tegenover 789, 724 tegenover 739, en 283 tegenover 259 mg/kg. De verschillen die je tussen gepubliceerde totalen ziet, komen voort uit wat er geteld wordt en in welke eenheden. Geen enkele machine blaast hier resultaten op. Behandel elke bewering dat NMR van nature gul is, of dat HPLC van nature accuraat is, als marketing.",
      },
      {
        question: "Waarom is jullie totaal {{coratina.total}} terwijl de IOC-methode tot 800 mg/kg gevalideerd is?",
        answer:
          "COI/T.20/Doc. No 29 geeft zijn meetbereik op als 30 tot 800 mg/kg, dus onze {{coratina.total}} ligt net boven de bovengrens van dat gevalideerde bereik en moet op die grens als een benaderend cijfer gelezen worden in plaats van als een precies cijfer. Het certificaat vermeldt daarnaast een uitgebreide meetonzekerheid van ±{{coratina.total_u}} mg/kg. We wijzen daar liever zelf op dan dat iemand anders het vindt. Het is een van de redenen waarom we oleocanthal en oleaceïne apart rapporteren, uit een aparte bepaling, in plaats van op een totaal te steunen.",
      },
      {
        question: "Wat is de Folin-Ciocalteu-test, en is die accuraat voor olijfolie?",
        answer:
          "Het is een kleurreactie: het reagens wordt gereduceerd door fenolen en de resulterende kleur wordt op een spectrofotometer afgelezen, wat één getal oplevert. Het reageert op reducerend vermogen in plaats van specifiek op fenolen, dus ook eiwitten, thiolen, ascorbinezuur en sommige metaalionen tellen mee — daarom vindt EFSA het ongeschikt voor levensmiddelen in het algemeen. Voor olijfolie kwam hetzelfde panel in 2025 tot een andere conclusie en noemde het wel geschikt, omdat de matrix van olijfolie geen noemenswaardige hoeveelheden van die storende stoffen bevat. De echte beperking is de reikwijdte: één getal, geen verbindingen benoemd.",
      },
      {
        question: "Kun je polyfenolcijfers van verschillende labs of verschillende tests vergelijken?",
        answer:
          "Totalen niet — ook de onze niet tegenover die van iemand anders. Afzonderlijke verbindingen reizen veel beter: oleocanthal dat door het ene lab in absolute massa is gemeten, kun je redelijkerwijs naast oleocanthal in absolute massa van een ander lab leggen, want een molecuul heeft één molecuulmassa, welk instrument het ook telt. Vergelijk gelijke bepalingen, of vergelijk benoemde verbindingen, en beschouw elke vergelijking van totalen over methoden heen als betekenisloos, ook wanneer die in ons voordeel uitvalt.",
      },
      {
        question: "Wat zijn oleocanthal en oleaceïne?",
        answer:
          "Twee fenolische verbindingen die specifiek zijn voor olijfolie. Oleocanthal veroorzaakt de peperige prikkel achter in de keel en remt de COX-1- en COX-2-enzymen — hetzelfde mechanisme als ibuprofen, op ruwweg een tiende van de sterkte per gewicht. Het werd juist ontdekt doordat een onderzoeker opmerkte dat verse olijfolie de keel prikkelde zoals vloeibare ibuprofen dat doet. Oleaceïne is de naaste verwant ervan, opgebouwd op hydroxytyrosol in plaats van op tyrosol, en behoort tot de krachtigste antioxidanten die in voeding zijn geïdentificeerd. Beide zijn specifieke moleculen met een molecuulmassa en referentiestandaarden, en juist daardoor zijn ze overdraagbaar tussen labs op een manier die een totaal nooit is.",
      },
      {
        question: "Hoe snel breken polyfenolen af in olijfolie?",
        answer:
          "Continu vanaf de persing, en sneller bij warmte, licht, zuurstof en tijd. Een geopende fles verliest ze sneller dan een gesloten fles. Daarom is een polyfenolcijfer zonder oogstjaar en monsterdatum onvolledig: het beschrijft de olie op het moment dat ze getest werd, en dat kan ver achterliggen op de fles in je keuken.",
      },
      {
        question: "Wat hoort er op een labcertificaat voor olijfolie te staan?",
        answer:
          "De testmethode met haar documentreferentie, de naam van het lab, de accreditatie (ISO/IEC 17025 dekt de competentie om te testen en erkenning door de IOC dekt specifiek olijfolie; ISO 9001 is een managementnorm en zegt niets over de bepaling), de monsterdatum, en de resultaten met hun eenheden. Een goed certificaat vermeldt ook de meetonzekerheid en de kwantificeringsgrenzen, en rapporteert oleocanthal en oleaceïne apart in plaats van enkel een totaal.",
      },
      {
        question: "En LC-MS/MS?",
        answer:
          "Vloeistofchromatografie met tandem-massaspectrometrie identificeert verbindingen met de hoogste specificiteit van al deze technieken en is de maatstaf waaraan de andere worden afgemeten. Ze duikt vooral op in onderzoek en zelden op commerciële certificaten, omdat de kosten ze daar zeldzaam houden.",
      },
    ],
  },
  details: {
    methodsSummary: "Volledige vergelijking van de drie methoden",
    sourcesSummary: "Bronnen en volledige referenties",
    rows: {
      does: "Wat het doet",
      reports: "Wat het rapporteert",
      status: "IOC-status",
      limitation: "Bekende beperking",
    },
    table: {
      does: [
        "Scheidt de fenolfractie en kwantificeert verbindingen één voor één",
        "Leest een magnetisch resonantiespectrum en koppelt signalen aan structuren",
        "Een kleurreactie die op een spectrofotometer wordt afgelezen",
      ],
      reports: [
        "Uitsplitsing per verbinding plus een totaal in tyrosolequivalenten",
        "Een totaal plus geselecteerde benoemde verbindingen, in absolute massa",
        "Eén totaal, in galluszuur- of cafeïnezuurequivalenten",
      ],
      status: ["Erkend — Doc. No 29", "Niet erkend", "Niet erkend"],
      limitation: [
        "Totalen in tyrosolequivalenten vallen laag uit; de IOC stelt dat zelf",
        "Telt een smallere set verbindingen op een andere massabasis",
        "Reageert op reducerend vermogen in plaats van specifiek op fenolen",
      ],
    },
  },
  cta: {
    h2: "Koop een olijfolie waarvan je de cijfers kunt controleren",
    body: "Elke fles van ATTIMO draagt zijn oogst, zijn monsterdatum en een certificaat dat je kunt openen voordat je bestelt — met oleocanthal en oleaceïne op hun eigen regel.",
    button: "Bekijk de oliën en hun certificaten",
    imageAlt: "Fles ATTIMO Coratina op een houten kist in een zonnige olijfgaard, naast pas geplukte olijven",
  },
};

export const METHODS_SLUGS = {
  en: "/polyphenol-methods",
  de: "/de/polyphenol-analysemethoden",
  fr: "/fr/methodes-analyse-polyphenols",
  sv: "/se/polyfenol-analysmetoder",
  da: "/dk/polyfenol-analysemetoder",
  nl: "/nl/polyfenol-analysemethoden",
} as const;

const ORIGIN = "https://attimo-oil.com";

export const METHODS_HREFLANGS = [
  { hreflang: "en", href: ORIGIN + METHODS_SLUGS.en },
  { hreflang: "de", href: ORIGIN + METHODS_SLUGS.de },
  { hreflang: "fr", href: ORIGIN + METHODS_SLUGS.fr },
  { hreflang: "sv", href: ORIGIN + METHODS_SLUGS.sv },
  { hreflang: "da", href: ORIGIN + METHODS_SLUGS.da },
  { hreflang: "nl", href: ORIGIN + METHODS_SLUGS.nl },
  { hreflang: "x-default", href: ORIGIN + METHODS_SLUGS.en },
];

export const METHODS_CONTENT: Record<
  "en" | "de" | "fr" | "sv" | "da" | "nl",
  MethodsContent
> = { en, de, fr, sv, da, nl };
