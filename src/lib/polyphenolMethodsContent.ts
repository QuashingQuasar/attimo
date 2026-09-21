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
      "One Coratina olive oil on two methods: 847 mg/kg by HPLC and 1,215 mg/kg by NMR.",
  },
  heroAlt: "Olive grove at dawn in warm morning mist",
  hero: {
    eyebrow: "Polyphenol analysis methods explained",
    h1: "The same olive oil can have 847 or 1,215 polyphenols, depending on how it's measured",
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
    eyebrow: "Case study: Coratina 2025 harvest",
    h2: "Two Coratinas: phenolically weaker oil reads higher because of the NMR method",
    lead: "HPLC measures each bioactive polyphenol individually. NMR reads them in aggregate. That difference alone hands the weaker oil the higher headline number, while it carries less of the two phenols with the strongest evidence behind them: oleocanthal and oleacein.",
    mineName: "ATTIMO Coratina 2025",
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
    lead: "Polyphenol is a wide, generic family and most of its members carry no real evidence behind them. Two do. Both are single molecules, so every laboratory reports them in the same milligrams and their sum survives a change of method.",
    oleocanthalBody:
      "The peppery catch at the back of your throat in a fresh oil. It blocks the COX-1 and COX-2 enzymes the same way ibuprofen does, at about a tenth of the strength by weight.",
    oleaceinBody:
      "One of the most powerful antioxidants found in any food, with its own cardiovascular evidence behind it. Most oils carry very little, so it separates them sharply.",
    inLabel: "In ATTIMO Coratina 2025",
    sumLabel: "Oleocanthal + oleacein · ATTIMO Coratina 2025",
    glassesCaption:
      "Oleocanthal is the one compound here you can find without a laboratory: it is the cough at the back of the throat in a fresh oil.",
    glassesAlt:
      "Six cobalt blue olive oil tasting glasses with lids, filled with green oil, on a dark green table",
    doseH3:
      "52 calories of ATTIMO Coratina 2025 carry the same polyphenols as 245 calories of supermarket oil",
    doseLead: "A higher-quality oil gets you more polyphenols for fewer calories.",
    doseAxis: "Oil needed for 5 mg of polyphenols",
    doseRows: {
      supermarket: "Supermarket oil",
      eu: "EU reference oil",
      blueprint: "Blueprint",
      attimo: "ATTIMO Coratina 2025",
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
        "It is the International Olive Council's published protocol. Send ATTIMO Coratina 2025 to another accredited lab, ask for the same method, and the number should come back.",
      ],
      [
        "It prints its margin of error",
        "Our certificate reads 847 ±181 mg/kg, and names the range the method is validated across. A number with no margin is a number nobody has checked.",
      ],
    ],
    millCaption:
      "The sample that produced report 2533647 was drawn at the mill in November, within days of pressing.",
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
      "ATTIMO Coratina 2025 harvest certificate of analysis, annotated to show the test method, laboratory, accreditation, sample date and compound results",
  },
  certificates: {
    eyebrow: "Our certificates",
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
      "All values mg/kg, 2025/26 harvest, HPLC by IOC Doc. 29 with oleocanthal and oleacein from a dedicated assay. Coratina sampled 18 November 2025, Nocellara 17 November 2025. Doc. 29 states a measuring range of 30–800 mg/kg, so our 847 sits just above it and should be read as approximate at that boundary.",
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
        question: "Why is your total 847 when the IOC method is validated to 800 mg/kg?",
        answer:
          "COI/T.20/Doc. No 29 states its range of measurement as 30 to 800 mg/kg, so our 847 sits just above the top of that validated range and should be read as an approximate figure at the boundary rather than a precise one. The certificate also states an expanded uncertainty of ±181 mg/kg. We would rather point this out ourselves than have it found. It is one of the reasons we report oleocanthal and oleacein separately, from a dedicated assay, instead of relying on a total.",
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
    imageAlt: "ATTIMO Coratina extra virgin olive oil bottle",
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

// Locale objects are filled in below as each market is translated; `en` is the
// source of truth for structure.
export const METHODS_CONTENT: Record<
  "en" | "de" | "fr" | "sv" | "da" | "nl",
  MethodsContent
> = { en, de: en, fr: en, sv: en, da: en, nl: en };
