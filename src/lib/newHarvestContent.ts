// Copy for the new-harvest page (/new-harvest). English first; the other
// locales are translated from this file once Gilles has signed it off.
// Dates match the homepage timeline (dict.upcoming.steps); production status
// and new lab values come from harvestStatus.ts. Last season's numbers are
// from the certificates collection (src/content/certificates).

export type NewHarvestContent = {
  lang: string;
  meta: { title: string; description: string };
  nav: { status: string; oils: string; freshness: string; faq: string };
  hero: { eyebrow: string; h1: string; lead: string; now: string; updated: string };
  status: {
    eyebrow: string; h2: string; lead: string;
    states: { done: string; now: string; next: string };
    details: string[]; // one per dict.upcoming.steps entry, same order
  };
  oils: {
    eyebrow: string; h2: string; lead: string;
    table: {
      caption: string;
      cols: { oil: string; origin: string; taste: string; last: string; method: string; now: string };
      newOil: string;
      note: string;
      certificates: string;
      methods: string;
    };
  };
  freshness: {
    eyebrow: string; h2: string; body1: string; body2: string; saleLink: string;
    chart: { title: string; fresh: string; euLine: string; ordinary: string; pressed: string; oneYear: string; caption: string };
  };
  faq: { heading: string; items: { question: string; answer: string }[] };
  closing: { h2: string; lead: string };
};

const en: NewHarvestContent = {
  lang: "en",
  meta: {
    title: "New Harvest Olive Oil 26/27: Status and Shipping Date | ATTIMO",
    description:
      "Where ATTIMO's 26/27 early-harvest olive oil stands today: pressing from mid-October, lab analysis in early November, shipping from mid-November. Coratina, Peranzana and Picual.",
  },
  nav: { status: "Status", oils: "Oils", freshness: "Freshness", faq: "FAQ" },
  hero: {
    eyebrow: "Harvest 26/27",
    h1: "New harvest olive oil: pressed in October, shipping mid-November",
    lead: "Three high-polyphenol olive oils, harvested early and pressed within hours. Follow every step from the press to your door, and be the first to get them.",
    now: "Now",
    updated: "Updated {date}",
  },
  status: {
    eyebrow: "Status",
    h2: "Where the 26/27 harvest stands today",
    lead: "Dates are estimates. This page is updated as the oil moves.",
    states: { done: "Done", now: "Now", next: "Next" },
    details: [
      "The olives are picked while still green and pressed within hours. Green olives give less oil and more polyphenols.",
      "A sample of each oil goes to an independent lab before bottling. Last season's Coratina was tested by HPLC at an ISO 17025 lab recognised by the International Olive Council.",
      "Everyone on the list gets an email the day pre-orders open.",
      "Each oil is bottled once its lab result is in.",
      "Pre-orders ship first. Shipping is free on two bottles or more.",
    ],
  },
  oils: {
    eyebrow: "The oils",
    h2: "Three oils this harvest, one of them new",
    lead: "Coratina and Picual return. Peranzana is new and takes the gentle, fruity place Nocellara held last season.",
    table: {
      caption: "Polyphenols, last season and this season",
      cols: { oil: "Oil", origin: "Origin", taste: "Taste", last: "Polyphenols 25/26", method: "Method 25/26", now: "Polyphenols 26/27" },
      newOil: "New this harvest",
      note: "Totals measured by different methods cannot be compared with each other. Last season's Coratina also measured 807 mg/kg oleocanthal and oleacein combined.",
      certificates: "Lab certificates",
      methods: "How polyphenols are measured",
    },
  },
  freshness: {
    eyebrow: "Freshness",
    h2: "Why we wait for the new harvest",
    body1: "Polyphenols start to fall the day an oil is pressed. Light, heat and air speed it up, and nothing stops it.",
    body2: "So we only sell the latest harvest. What is left of 25/26 is on sale now, and the 26/27 oil ships from mid-November.",
    saleLink: "Last Season Sale",
    chart: {
      title: "Polyphenols fade after pressing",
      fresh: "Just pressed",
      euLine: "EU health-claim level",
      ordinary: "ordinary oil",
      pressed: "Pressed",
      oneYear: "one year on the shelf",
      caption: "Illustrative. The decline steepens with light and heat.",
    },
  },
  faq: {
    heading: "New harvest FAQ",
    items: [
      {
        question: "When does the 26/27 harvest ship?",
        answer: "From mid-November 2026. Pressing started in mid-October, lab analysis follows in early November and pre-orders open in early to mid November. These are estimates, and this page is updated as the oil moves.",
      },
      {
        question: "Which oils are in the 26/27 harvest?",
        answer: "Three single-variety oils: Coratina from Puglia (bold and punchy), Peranzana from Puglia (gentle and fruity, new this harvest) and Picual from Andalusia (green and grassy).",
      },
      {
        question: "Can I pre-order the new harvest?",
        answer: "Pre-orders open in early to mid November. Leave your email on this page and you get an email the day they open.",
      },
      {
        question: "What happened to Nocellara?",
        answer: "Nocellara was last season's gentle oil. Peranzana takes its place this harvest. The last Nocellara bottles from 25/26 are on sale while stock lasts.",
      },
      {
        question: "Will the polyphenol levels be published?",
        answer: "Yes. Each oil is lab-tested before bottling, and the results are published on this page and on the certificate pages, with the lab and method named. Last season's Coratina measured 847 mg/kg total polyphenols by HPLC.",
      },
      {
        question: "Why wait for the new harvest instead of buying now?",
        answer: "Polyphenols fall from the day an oil is pressed. An early-harvest oil is at its peak in the months after pressing, which is why ATTIMO only sells the latest harvest.",
      },
    ],
  },
  closing: {
    h2: "Be the first to get the 26/27 harvest",
    lead: "We email you the day pre-orders open.",
  },
};

export const NH_CONTENT: Record<string, NewHarvestContent> = { en };
export const NH_SLUGS: Record<string, string> = { en: "/new-harvest" };
