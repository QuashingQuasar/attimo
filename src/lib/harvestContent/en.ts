// Copy for /harvest-2026, English. Everything in square brackets is an input
// only Gilles can give (dates, delivery month, prices, Peranzana story) and is
// rendered as-is until he does. No figure here is invented: each one is from
// his own numbers, a supplier email, or the certificates collection.

export type StepState = "done" | "current" | "upcoming";

export type HarvestContent = {
  lang: string;
  meta: { title: string; description: string };
  nav: { status: string; oils: string; freshness: string; evidence: string; waitlist: string; faq: string };
  hero: {
    eyebrow: string; season: string; h1: string; lead: string; cta: string; ctaSecondary: string;
    chipLabel: string; chipNote: string; chipUpdated: string;
  };
  status: {
    eyebrow: string; h2: string; note: string; updated: string;
    steps: { title: string; line: string; when: string; state: StepState }[];
  };
  oils: {
    eyebrow: string; h2: string; intro: string; reportsPre: string; reportsLink: string;
    labels: { variety: string; profile: string; last: string; thisYear: string; status: string; price: string; format: string };
    cards: {
      name: string; image: string; imageNote?: string; variety: string; profile: string; last: string; thisYear: string; status: string; price: string; format?: string; tag?: string;
    }[];
  };
  freshness: {
    eyebrow: string; h2: string; body1: string; body2: string;
    chart: { title: string; fresh: string; euLine: string; ordinary: string; pressed: string; oneYear: string; lastYear: string; thisYear: string; caption: string };
    cards: { title: string; text: string }[];
  };
  evidence: { eyebrow: string; h2: string; tiles: { value: string; label: string; href?: string }[] };
  waitlist: {
    eyebrow: string; h2: string; body: string; emailLabel: string; emailPlaceholder: string; oilsLabel: string;
    oils: { key: string; label: string }[]; consent: string; cta: string; done: string; doneSub: string; error: string;
  };
  faq: { heading: string; items: { question: string; answer: string }[] };
  closing: { h2: string; cta: string };
};

export const en: HarvestContent = {
  lang: "en",
  meta: {
    title: "Harvest 2026/27: new olive oil pressed in late October | ATTIMO",
    description:
      "ATTIMO's 2026/27 harvest: three single-variety early-harvest olive oils, picked green in October, cold-pressed within hours and lab-tested before bottling. Where the harvest stands today, and the list that hears first.",
  },
  nav: { status: "Status", oils: "Oils", freshness: "Freshness", evidence: "Evidence", waitlist: "Waitlist", faq: "FAQ" },
  hero: {
    eyebrow: "Harvest",
    season: "2026/27",
    h1: "This year's olive oil is pressed in late October. Order from the first bottling, [delivery month].",
    lead: "Three single-variety oils, picked green in October in Italy and Andalusia and cold-pressed within hours. Each one is lab-tested before it is bottled, and the numbers go on this page the day they come in.",
    cta: "Put me on the harvest list",
    ctaSecondary: "Last harvest's lab reports",
    chipLabel: "Live",
    chipNote: "Updated as each producer confirms a step",
    chipUpdated: "Last update 10 October 2026",
  },
  status: {
    eyebrow: "Status",
    h2: "Where the harvest stands today",
    note: "Dates are the producers' own estimates. Weather moves them.",
    updated: "Updated 10 October 2026",
    steps: [
      { title: "Picking, Andalusia", line: "Picual. Early harvest targeted mid-October, weather permitting.", when: "Mid-October", state: "current" },
      { title: "Pressing, Italy", line: "Coratina and Peranzana Bio. New oil expected at the end of October.", when: "Late October", state: "upcoming" },
      { title: "Lab tests", line: "HPLC at an ISO 17025 lab. Oleocanthal and oleacein reported for each oil.", when: "After pressing", state: "upcoming" },
      { title: "Bottling", line: "After the lab result. The values print on the label, so no result means no bottling.", when: "After the lab", state: "upcoming" },
      { title: "Shipping", line: "First bottling ships to the list before the shop opens.", when: "[Delivery month]", state: "upcoming" },
    ],
  },
  oils: {
    eyebrow: "The oils",
    h2: "Three oils this season, one of them new",
    intro: "Coratina and Picual return. Peranzana Bio joins, certified organic, and takes the gentle slot Nocellara held last year.",
    reportsPre: "Lab reports for every bottling are published with the lab and method named.",
    reportsLink: "Certificate pages",
    labels: { variety: "Variety", profile: "Taste", last: "Last harvest", thisYear: "This harvest", status: "Status", price: "Price", format: "Formats" },
    cards: [
      {
        name: "ATTIMO Coratina 2026",
        image: "/images/coratina-shopping.png",
        variety: "Coratina, Italy",
        profile: "Bold, bitter, peppery",
        last: "847 mg/kg total polyphenols. 807 mg/kg oleocanthal + oleacein (HPLC)",
        thisYear: "Tested after pressing, published here",
        status: "Returning. Sold out 31 August 2026",
        price: "[€26]",
        format: "500 ml bottle and 3 L bag-in-box",
        tag: "Returning",
      },
      {
        name: "ATTIMO Peranzana Bio 2026",
        image: "/images/nocellara-shopping.png",
        imageNote: "Label in design",
        variety: "Peranzana, Italy. Certified organic",
        profile: "[Your words]",
        last: "New this season",
        thisYear: "Tested after pressing, published here",
        status: "New. Takes Nocellara's place",
        price: "[€20 to 21]",
        format: "500 ml bottle",
        tag: "New",
      },
      {
        name: "ATTIMO Picual 2026",
        image: "/images/picual-shopping.png",
        variety: "Picual, Andalusia",
        profile: "Green, grassy",
        last: "[25/26 figure, with its method named]",
        thisYear: "HPLC, oleocanthal and oleacein [if the sample is arranged]",
        status: "Returning",
        price: "[€23]",
        format: "500 ml bottle",
        tag: "Returning",
      },
    ],
  },
  freshness: {
    eyebrow: "Freshness",
    h2: "An early-harvest oil bottled last November is a different oil by October",
    body1: "Polyphenols fall from the day an oil is pressed. Light and heat speed it up, dark glass slows it down, nothing stops it.",
    body2: "That is why the 25/26 Coratina sold out on 31 August and was not reordered. We sell the latest harvest only, and between harvests we sell nothing.",
    chart: {
      title: "Polyphenols fade after pressing",
      fresh: "Just pressed",
      euLine: "EU health-claim level",
      ordinary: "ordinary oil",
      pressed: "Pressed",
      oneYear: "one year on the shelf",
      lastYear: "25/26, bottled Nov 2025",
      thisYear: "26/27 ships here",
      caption: "Illustrative. The decline steepens with light and heat.",
    },
    cards: [
      { title: "Pressed within hours of picking", text: "Green fruit bruises and oxidises fast. The mill runs the same day." },
      { title: "Bottled after the lab result", text: "Each oil is tested first. The numbers print on the label, then the bottling happens." },
      { title: "Shipped at the start of the curve", text: "The first bottling goes out to the list weeks after pressing, with the harvest date on the bottle." },
    ],
  },
  evidence: {
    eyebrow: "Last season",
    h2: "Last season, in numbers",
    tiles: [
      { value: "847", label: "mg/kg total polyphenols, Coratina 25/26, HPLC", href: "/certificates/coratina-2526-hplc-2025-11" },
      { value: "807", label: "mg/kg oleocanthal + oleacein, the figure the Polyphenol Index ranks on", href: "/polyphenol-index" },
      { value: "[#]", label: "of 15 producers in the Polyphenol Index, same rules as everyone", href: "/polyphenol-index" },
      { value: "2×", label: "Coratina sold out twice: [~2 months] after the March delivery, then again on 31 August" },
    ],
  },
  waitlist: {
    eyebrow: "The list",
    h2: "Join the list and you hear before the shop does",
    body: "One email when the lab numbers are in, one when the first bottling ships. First access before the general sale, and nothing else in between.",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    oilsLabel: "Which oils",
    oils: [
      { key: "Coratina", label: "Coratina" },
      { key: "Peranzana", label: "Peranzana Bio" },
      { key: "Picual", label: "Picual" },
    ],
    consent: "Two emails for this harvest, unsubscribe in one click.",
    cta: "Put me on the harvest list",
    done: "You are on the list",
    doneSub: "First email when the lab numbers are in.",
    error: "That did not go through. Try again, or write to hello@attimo-oil.com.",
  },
  faq: {
    heading: "Harvest 2026/27 FAQ",
    items: [
      { question: "When does the oil arrive?", answer: "[Delivery month]. Picking starts mid-October in Andalusia and the Italian pressing is expected at the end of October. Lab tests and bottling follow, and the list hears first." },
      { question: "Can I buy now?", answer: "[No. The 25/26 harvest is sold out and we do not restock between harvests. / Yes, pre-order opens on this page.]" },
      { question: "Why not sell what is left from last year?", answer: "Polyphenols fall after pressing. An early-harvest oil from November 2025 is an ordinary oil by this autumn, and we would rather sell nothing than sell it as fresh." },
      { question: "What happened to Nocellara?", answer: "It was the gentle oil of the 25/26 lineup. Peranzana Bio takes that place this season, certified organic. [Reason, in your words.]" },
      { question: "Will the lab numbers be published?", answer: "Yes, per oil, with the lab and method named, on the certificate pages. Oleocanthal and oleacein are reported separately, so the oils can be compared with any other producer that publishes them." },
      { question: "Do prices change this season?", answer: "[Yes: Coratina €26, Picual €23, Peranzana Bio €20 to 21. / Prices are announced on launch day.]" },
      { question: "Where do you ship?", answer: "Belgium, the Netherlands, Germany, France, Denmark, Sweden and the UK, among others. The full list and rates are on the shipping page." },
    ],
  },
  closing: { h2: "Pressed late October. Shipped [month]. The list hears first", cta: "Put me on the harvest list" },
};
