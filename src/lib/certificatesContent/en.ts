// English copy and the content type for /certificates and /certificates/{id}.
// The locale files (de, fr, sv, da, nl) implement the same type. Lab values,
// method names, lab names, report numbers, units and citations are never
// translated. Strings with {…} tokens are filled at render time.
export type CertContent = {
  lang: string;
  /** BCP 47 tag for date formatting, e.g. "en-GB", "de-DE". */
  dateLocale: string;
  breadcrumb: string;
  index: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    lead: string;
    harvest: string; // "Harvest {h}"
    totalPhenols: string;
    asPrefix: string; // "as" → "Total phenols · as tyrosol"
    sum: string; // "Oleocanthal + oleacein"
    noCompounds: string;
    sampled: string; // "sampled {d}"
    received: string; // "sample received {d}"
    read: string; // "Read the certificate →"
    howEyebrow: string;
    howBody: string;
    methodsLink: string;
    machine: string; // "Machine-readable:"
  };
  detail: {
    metaTitle: string; // "{title} lab certificate: {total} {unit} polyphenols by {method} | ATTIMO"
    metaTitleNoTotal: string; // "{title} lab certificate: {method} report | ATTIMO"
    eyebrow: string; // "Lab certificate · Harvest {h}"
    h1: string; // "{name}, harvest {h}"
    tiles: { total: string; sum: string; method: string; lab: string };
    labBadge: { iso: string; ioc: string; none: string };
    pdf: string;
    buy: string;
    whatsIn: {
      eyebrow: string;
      h2Many: string; // "Every compound the laboratory found, in {unit}"
      h2One: string;
      leadTwo: string;
      leadBars: string;
      leadOne: string;
      colCompound: string;
      colResult: string;
      asPrefix: string;
    };
    tested: {
      eyebrow: string;
      h2: string; // "{method} at {lab}, {place}"
      method: string;
      laboratory: string;
      secondary: string; // "Oleocanthal and oleacein come from a second assay on the same report, {name}{tech}."
      methodsLink: string;
      iso: string;
      isoNotStated: string;
      isoYes: string;
      isoNo: string;
      accreditation: string;
      report: string;
      signed: string;
      commissioned: string;
    };
    timeline: { drawn: string; received: string; began: string; completed: string; issued: string };
    quality: {
      eyebrow: string;
      h2Within: string; // "Inside the extra virgin limit on all {n} parameters"
      h2Printed: string;
      lead: string;
      cols: string[]; // 3
      limitsPre: string; // "Limits read from"
      annex: string; // "Annex I"
      and: string;
      section: string; // "section 4"
      limitsPost: string; // ", both checked on {d}; …"
    };
    series: {
      eyebrow: string; h2: string; lead: string;
      aria: string; // "Total phenols across {n} certificates"
      total: string; // caption "total"
      sum: string; // caption "oleocanthal + oleacein"
      legendTotal: string; legendSum: string; legendThis: string;
    };
    caveats: {
      eyebrow: string; h2: string;
      items: { title: string; text: string }[]; // 3, title[2] has {method}
      notePre: string; noteLink: string;
    };
    efsa: { eyebrow: string; h2: string; body: string }; // body has {v}
    original: {
      eyebrow: string; h2: string; body: string; open: string;
      hashNote: string; machine: string; all: string;
      thumbAlt: string; // "First page of {lab} report {no}"
    };
  };
  summary: {
    drawn: string; // "on a sample drawn on {d}"
    received: string; // "on a sample received on {d}"
    reported: string; // "and reported on {d}"
    head: string; // "{title} was tested by {method} at {lab} {when}"
    basis: string; // ", {x} equivalents"
    including: string; // ", including {parts}"
    and: string; // " and "
    oleocanthal: string; // "{v} mg/kg oleocanthal"
    oleacein: string; // "{v} mg/kg oleacein"
    tail: string; // ": {total}{u} {unit} total phenols{basis}{including}."
  };
  compoundNotes: Record<string, string>;
  methodNotes: Record<string, string>;
  qualityLabels: { free_acidity: string; peroxide_value: string; k232: string; k268: string; delta_k: string }; // k268 has {k}
};

export const en: CertContent = {
  lang: "en",
  dateLocale: "en-GB",
  breadcrumb: "Certificates",
  index: {
    metaTitle: "Every ATTIMO lab result, published | Polyphenol certificates",
    metaDescription: "Every ATTIMO olive oil, every harvest, every test, with the original laboratory documents: total phenols, oleocanthal, oleacein, method, lab and dates.",
    eyebrow: "Lab certificates",
    h1: "Every lab result, published",
    lead: "Every ATTIMO oil, every harvest, every test, with the original documents.",
    harvest: "Harvest {h}",
    totalPhenols: "Total phenols",
    asPrefix: "as",
    sum: "Oleocanthal + oleacein",
    noCompounds: "No individual compounds on this method",
    sampled: "sampled {d}",
    received: "sample received {d}",
    read: "Read the certificate →",
    howEyebrow: "How to read them",
    howBody: "Totals from HPLC, NMR and Folin-Ciocalteu cannot be set beside each other. Oleocanthal and oleacein can.",
    methodsLink: "Polyphenol analysis methods explained →",
    machine: "Machine-readable:",
  },
  detail: {
    metaTitle: "{title} lab certificate: {total} {unit} polyphenols by {method} | ATTIMO",
    metaTitleNoTotal: "{title} lab certificate: {method} report | ATTIMO",
    eyebrow: "Lab certificate · Harvest {h}",
    h1: "{name}, harvest {h}",
    tiles: { total: "Total phenols", sum: "Oleocanthal + oleacein", method: "Method", lab: "Laboratory" },
    labBadge: { iso: "ISO/IEC 17025", ioc: "IOC-recognised", none: "Accreditation not stated" },
    pdf: "Download the original PDF",
    buy: "Buy this oil",
    whatsIn: {
      eyebrow: "What's in it",
      h2Many: "Every compound the laboratory found, in {unit}",
      h2One: "One total, and no compounds named",
      leadTwo: "Bars are drawn against the total. The report carries two assays, so oleocanthal and oleacein appear under both, at the level each one found.",
      leadBars: "Bars are drawn against the total.",
      leadOne: "One number, on one method. This test names no individual compounds.",
      colCompound: "Compound",
      colResult: "Result",
      asPrefix: "as",
    },
    tested: {
      eyebrow: "How it was tested",
      h2: "{method} at {lab}, {place}",
      method: "Method",
      laboratory: "Laboratory",
      secondary: "Oleocanthal and oleacein come from a second assay on the same report, {name}{tech}.",
      methodsLink: "How HPLC, NMR and Folin-Ciocalteu differ →",
      iso: "ISO/IEC 17025",
      isoNotStated: "Not stated on the report",
      isoYes: "Yes, as stated on the report",
      isoNo: "No",
      accreditation: "Accreditation",
      report: "Report",
      signed: "Signed",
      commissioned: "Commissioned by",
    },
    timeline: { drawn: "Sample drawn", received: "Received by the lab", began: "Tests began", completed: "Tests completed", issued: "Report issued" },
    quality: {
      eyebrow: "Quality parameters",
      h2Within: "Inside the extra virgin limit on all {n} parameters",
      h2Printed: "Quality parameters as printed on the report",
      lead: "The same five figures every extra virgin oil in the EU has to meet, with the legal limit beside each one.",
      cols: ["Parameter", "Result", "Limit (EU and IOC)"],
      limitsPre: "Limits read from",
      annex: "Annex I",
      and: "and",
      section: "section 4",
      limitsPost: ", both checked on {d}; the two set identical values. ΔK is read as an absolute value, as the report notes. Uncertainties are the laboratory's expanded uncertainty (k = 2).",
    },
    series: {
      eyebrow: "Over time",
      h2: "The same oil, retested as the season goes on",
      lead: "Polyphenols fade after bottling. This is our own measurement of it.",
      aria: "Total phenols across {n} certificates",
      total: "total",
      sum: "oleocanthal + oleacein",
      legendTotal: "Total phenols",
      legendSum: "Oleocanthal + oleacein",
      legendThis: "This certificate",
    },
    caveats: {
      eyebrow: "Reading this report",
      h2: "What this certificate tells you, and what it does not",
      items: [
        { title: "One sample, one date", text: "The laboratory measured the sample it received, on the day it ran the test. It did not measure every bottle." },
        { title: "Polyphenols fall after bottling", text: "Heat, light, oxygen and time all lower them. Read the number against its date, and expect a lower one in the bottle you open later." },
        { title: "This one is {method}", text: "Totals from different methods count different things in different units. Compare this report only with another run on the same method, or compare named compounds." },
      ],
      notePre: "How each method counts, and how to read any certificate:",
      noteLink: "polyphenol analysis methods explained",
    },
    efsa: {
      eyebrow: "Authorised health claim",
      h2: "Olive oil polyphenols contribute to the protection of blood lipids from oxidative stress",
      body: "This report states {v} mg/kg hydroxytyrosol and its derivatives, above the 250 mg/kg (5 mg per 20 g) the claim requires under Commission Regulation (EU) No 432/2012. The beneficial effect is obtained with a daily intake of 20 g of olive oil.",
    },
    original: {
      eyebrow: "Original document",
      h2: "The report as the laboratory issued it",
      body: "Every figure above was transcribed from this PDF. Open it, and check us.",
      open: "Open the PDF",
      hashNote: "The document has not changed since publication if the file's hash matches this one.",
      machine: "Machine-readable record:",
      all: "all certificates",
      thumbAlt: "First page of {lab} report {no}",
    },
  },
  summary: {
    drawn: "on a sample drawn on {d}",
    received: "on a sample received on {d}",
    reported: "and reported on {d}",
    head: "{title} was tested by {method} at {lab} {when}",
    basis: ", {x} equivalents",
    including: ", including {parts}",
    and: " and ",
    oleocanthal: "{v} mg/kg oleocanthal",
    oleacein: "{v} mg/kg oleacein",
    tail: ": {total}{u} {unit} total phenols{basis}{including}.",
  },
  compoundNotes: {
    total: "Everything the method counts, expressed as the reference compound",
    oleocanthal: "The peppery catch at the back of the throat; inhibits COX-1 and COX-2",
    oleacein: "Oleocanthal's close relative, built on hydroxytyrosol; a strong antioxidant",
    hydroxytyrosol: "The free phenol most of the health evidence is built on",
    tyrosol: "Hydroxytyrosol's simpler sibling, and the compound the IOC total is expressed in",
    "3,4-DHPEA-EDA": "Oleacein under its chemical name, as the IOC method reports it",
    "p-HPEA-EDA": "Oleocanthal under its chemical name, as the IOC method reports it",
    Lignans: "Pinoresinol and acetoxypinoresinol; mild, stable antioxidants",
    "3,4-DHPEA-EA": "Oleuropein aglycone; bitter, and a carrier of hydroxytyrosol",
    "p-HPEA-EA": "Ligstroside aglycone; the tyrosol counterpart of oleuropein aglycone",
  },
  methodNotes: {
    HPLC: "Separates the phenolic compounds and quantifies each one against tyrosol, then sums them",
    qNMR: "Reads each compound's signal directly; usually reported as hydroxytyrosol and derivatives",
    "Folin-Ciocalteu": "A colour reaction that returns one reducing-capacity figure; no compounds named",
    "LC-MS/MS": "Identifies each compound by mass; the research benchmark, rare on commercial reports",
  },
  qualityLabels: {
    free_acidity: "Free acidity",
    peroxide_value: "Peroxide value",
    k232: "K232",
    k268: "{k} (iso-octane)",
    delta_k: "ΔK",
  },
};
