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
    eyebrow: string; h2: string;
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
    chart: { title: string; fresh: string; pressed: string; oneYear: string; caption: string };
  };
  wait: { eyebrow: string };
  // `link.text` must appear verbatim in `answer`; that span becomes the link.
  faq: { heading: string; items: { question: string; answer: string; link?: { text: string; href: string } }[] };
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
    states: { done: "Done", now: "Now", next: "Next" },
    details: [
      "The olives are picked while still green and pressed within hours. Green olives give less oil and more polyphenols.",
      "A sample of each oil goes to an independent lab before bottling. Last season's Coratina was tested by HPLC at an ISO 17025 lab recognised by the International Olive Council.",
      "Everyone on the list gets an email the day pre-orders open.",
      "Each oil is bottled once its lab result is in.",
      "Pre-orders ship first.",
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
      pressed: "Pressed",
      oneYear: "one year on the shelf",
      caption: "Illustrative. How fast polyphenols fall depends on the oil and on how it is stored.",
    },
  },
  wait: { eyebrow: "While you wait" },
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
        question: "Will there be a new Nocellara for the next harvest?",
        answer: "No. Peranzana takes Nocellara's place as the gentle, fruity oil of the 26/27 harvest. The last Nocellara bottles from 25/26 are on sale while stock lasts.",
        link: { text: "The last Nocellara bottles from 25/26", href: "/product/nocellara" },
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


// ── Translations, made from the English above (signed off 2026-10-26). Terms
// follow the homepage harvest section (dict.upcoming) and the certificate
// pages: DE du, FR vous, FR "oléocanthal"/"oléacéine", NL je.

const de: NewHarvestContent = {
  lang: "de",
  meta: {
    title: "Olivenöl aus neuer Ernte 26/27: Status und Versanddatum | ATTIMO",
    description:
      "Wo das Olivenöl aus früher Ernte 26/27 von ATTIMO heute steht: Pressen ab Mitte Oktober, Laboranalyse Anfang November, Versand ab Mitte November. Coratina, Peranzana und Picual.",
  },
  nav: { status: "Status", oils: "Öle", freshness: "Frische", faq: "FAQ" },
  hero: {
    eyebrow: "Ernte 26/27",
    h1: "Olivenöl aus neuer Ernte: gepresst im Oktober, Versand ab Mitte November",
    lead: "Drei Olivenöle mit hohem Polyphenolgehalt, früh geerntet und innerhalb weniger Stunden gepresst. Verfolge jeden Schritt von der Presse bis zu deiner Haustür und hol sie dir zuerst.",
    now: "Jetzt",
    updated: "Aktualisiert am {date}",
  },
  status: {
    eyebrow: "Status",
    h2: "Wo die Ernte 26/27 heute steht",
    states: { done: "Erledigt", now: "Jetzt", next: "Als Nächstes" },
    details: [
      "Die Oliven werden noch grün gepflückt und innerhalb weniger Stunden gepresst. Grüne Oliven geben weniger Öl und mehr Polyphenole.",
      "Eine Probe jedes Öls geht vor der Abfüllung an ein unabhängiges Labor. Die Coratina der letzten Saison wurde per HPLC in einem ISO-17025-Labor getestet, das vom Internationalen Olivenrat anerkannt ist.",
      "Alle auf der Liste bekommen eine E-Mail, sobald die Vorbestellung öffnet.",
      "Jedes Öl wird abgefüllt, sobald sein Laborergebnis vorliegt.",
      "Vorbestellungen werden zuerst verschickt.",
    ],
  },
  oils: {
    eyebrow: "Die Öle",
    h2: "Drei Öle in dieser Ernte, eines davon neu",
    lead: "Coratina und Picual kommen zurück. Peranzana ist neu und übernimmt den milden, fruchtigen Platz, den Nocellara in der letzten Saison hatte.",
    table: {
      caption: "Polyphenole, letzte Saison und diese Saison",
      cols: { oil: "Öl", origin: "Herkunft", taste: "Geschmack", last: "Polyphenole 25/26", method: "Methode 25/26", now: "Polyphenole 26/27" },
      newOil: "Neu in dieser Ernte",
      note: "Gesamtwerte aus unterschiedlichen Methoden lassen sich nicht miteinander vergleichen. Die Coratina der letzten Saison hatte außerdem 807 mg/kg Oleocanthal und Oleacein zusammen.",
      certificates: "Laborzertifikate",
      methods: "So werden Polyphenole gemessen",
    },
  },
  freshness: {
    eyebrow: "Frische",
    h2: "Warum wir auf die neue Ernte warten",
    body1: "Polyphenole beginnen an dem Tag zu sinken, an dem ein Öl gepresst wird. Licht, Wärme und Luft beschleunigen das, und nichts hält es auf.",
    body2: "Deshalb verkaufen wir nur die neueste Ernte. Was von 25/26 übrig ist, gibt es jetzt im Sale, und das Öl der Ernte 26/27 wird ab Mitte November verschickt.",
    saleLink: "Sale der letzten Saison",
    chart: {
      title: "Polyphenole sinken nach dem Pressen",
      fresh: "Frisch gepresst",
      pressed: "Gepresst",
      oneYear: "ein Jahr im Regal",
      caption: "Illustrativ. Wie schnell Polyphenole sinken, hängt vom Öl und von der Lagerung ab.",
    },
  },
  wait: { eyebrow: "Während du wartest" },
  faq: {
    heading: "FAQ zur neuen Ernte",
    items: [
      {
        question: "Wann wird die Ernte 26/27 verschickt?",
        answer: "Ab Mitte November 2026. Gepresst wird seit Mitte Oktober, die Laboranalyse folgt Anfang November und die Vorbestellung öffnet Anfang bis Mitte November. Das sind Schätzungen, und diese Seite wird aktualisiert, während das Öl unterwegs ist.",
      },
      {
        question: "Welche Öle gibt es in der Ernte 26/27?",
        answer: "Drei sortenreine Öle: Coratina aus Apulien (kräftig und intensiv), Peranzana aus Apulien (mild und fruchtig, neu in dieser Ernte) und Picual aus Andalusien (grün und grasig).",
      },
      {
        question: "Kann ich die neue Ernte vorbestellen?",
        answer: "Die Vorbestellung öffnet Anfang bis Mitte November. Trag deine E-Mail-Adresse auf dieser Seite ein, dann bekommst du am Tag der Öffnung eine E-Mail.",
      },
      {
        question: "Gibt es in der nächsten Ernte eine neue Nocellara?",
        answer: "Nein. Peranzana übernimmt in der Ernte 26/27 den Platz von Nocellara als mildes, fruchtiges Öl. Die letzten Nocellara-Flaschen aus 25/26 gibt es im Sale, solange der Vorrat reicht.",
        link: { text: "Die letzten Nocellara-Flaschen aus 25/26", href: "/product/nocellara" },
      },
      {
        question: "Werden die Polyphenolwerte veröffentlicht?",
        answer: "Ja. Jedes Öl wird vor der Abfüllung im Labor getestet, und die Ergebnisse erscheinen auf dieser Seite und auf den Zertifikatsseiten, mit Labor und Methode. Die Coratina der letzten Saison hatte 847 mg/kg Gesamtpolyphenole, gemessen per HPLC.",
      },
      {
        question: "Warum auf die neue Ernte warten, statt jetzt zu kaufen?",
        answer: "Polyphenole sinken ab dem Tag, an dem ein Öl gepresst wird. Ein Öl aus früher Ernte ist in den Monaten nach dem Pressen auf seinem Höhepunkt, deshalb verkauft ATTIMO nur die neueste Ernte.",
      },
    ],
  },
  closing: {
    h2: "Sichere dir die Ernte 26/27 zuerst",
    lead: "Wir schicken dir eine E-Mail, sobald die Vorbestellung öffnet.",
  },
};

const fr: NewHarvestContent = {
  lang: "fr",
  meta: {
    title: "Huile d'olive de nouvelle récolte 26/27 : statut et date d'expédition | ATTIMO",
    description:
      "Où en est l'huile d'olive de récolte précoce 26/27 d'ATTIMO : pressage dès la mi-octobre, analyse en laboratoire début novembre, expédition à partir de la mi-novembre. Coratina, Peranzana et Picual.",
  },
  nav: { status: "Statut", oils: "Huiles", freshness: "Fraîcheur", faq: "FAQ" },
  hero: {
    eyebrow: "Récolte 26/27",
    h1: "Huile d'olive de nouvelle récolte : pressée en octobre, expédiée dès la mi-novembre",
    lead: "Trois huiles d'olive riches en polyphénols, récoltées tôt et pressées en quelques heures. Suivez chaque étape, du pressoir à votre porte, et recevez-les en premier.",
    now: "En cours",
    updated: "Mis à jour le {date}",
  },
  status: {
    eyebrow: "Statut",
    h2: "Où en est la récolte 26/27 aujourd'hui",
    states: { done: "Terminé", now: "En cours", next: "À venir" },
    details: [
      "Les olives sont cueillies encore vertes et pressées en quelques heures. Les olives vertes donnent moins d'huile et plus de polyphénols.",
      "Un échantillon de chaque huile part dans un laboratoire indépendant avant la mise en bouteille. La Coratina de la saison dernière a été analysée par HPLC dans un laboratoire ISO 17025 reconnu par le Conseil oléicole international.",
      "Toutes les personnes inscrites reçoivent un e-mail le jour de l'ouverture des précommandes.",
      "Chaque huile est mise en bouteille dès que son résultat de laboratoire est disponible.",
      "Les précommandes sont expédiées en premier.",
    ],
  },
  oils: {
    eyebrow: "Les huiles",
    h2: "Trois huiles cette récolte, dont une nouvelle",
    lead: "La Coratina et la Picual reviennent. La Peranzana est nouvelle et prend la place douce et fruitée qu'occupait la Nocellara la saison dernière.",
    table: {
      caption: "Polyphénols, saison dernière et cette saison",
      cols: { oil: "Huile", origin: "Origine", taste: "Goût", last: "Polyphénols 25/26", method: "Méthode 25/26", now: "Polyphénols 26/27" },
      newOil: "Nouvelle cette récolte",
      note: "Des totaux mesurés par des méthodes différentes ne sont pas comparables entre eux. La Coratina de la saison dernière affichait aussi 807 mg/kg d'oléocanthal et d'oléacéine combinés.",
      certificates: "Certificats de laboratoire",
      methods: "Comment on mesure les polyphénols",
    },
  },
  freshness: {
    eyebrow: "Fraîcheur",
    h2: "Pourquoi nous attendons la nouvelle récolte",
    body1: "Les polyphénols commencent à baisser le jour où une huile est pressée. La lumière, la chaleur et l'air accélèrent cette baisse, et rien ne l'arrête.",
    body2: "C'est pourquoi nous ne vendons que la dernière récolte. Ce qui reste de 25/26 est en soldes, et l'huile 26/27 est expédiée à partir de la mi-novembre.",
    saleLink: "Soldes de fin de saison",
    chart: {
      title: "Les polyphénols baissent après le pressage",
      fresh: "Tout juste pressée",
      pressed: "Pressage",
      oneYear: "un an en rayon",
      caption: "Illustration. La vitesse de la baisse dépend de l'huile et de sa conservation.",
    },
  },
  wait: { eyebrow: "En attendant" },
  faq: {
    heading: "FAQ nouvelle récolte",
    items: [
      {
        question: "Quand la récolte 26/27 sera-t-elle expédiée ?",
        answer: "À partir de la mi-novembre 2026. Le pressage a commencé mi-octobre, l'analyse en laboratoire suit début novembre et les précommandes ouvrent entre début et mi-novembre. Ce sont des estimations, et cette page est mise à jour au fil du parcours de l'huile.",
      },
      {
        question: "Quelles huiles compte la récolte 26/27 ?",
        answer: "Trois huiles monovariétales : la Coratina des Pouilles (corsée et intense), la Peranzana des Pouilles (douce et fruitée, nouvelle cette récolte) et la Picual d'Andalousie (verte et herbacée).",
      },
      {
        question: "Puis-je précommander la nouvelle récolte ?",
        answer: "Les précommandes ouvrent entre début et mi-novembre. Laissez votre e-mail sur cette page et vous recevrez un e-mail le jour de leur ouverture.",
      },
      {
        question: "Y aura-t-il une nouvelle Nocellara pour la prochaine récolte ?",
        answer: "Non. La Peranzana prend la place de la Nocellara comme huile douce et fruitée de la récolte 26/27. Les dernières bouteilles de Nocellara 25/26 sont en soldes jusqu'à épuisement du stock.",
        link: { text: "Les dernières bouteilles de Nocellara 25/26", href: "/product/nocellara" },
      },
      {
        question: "Les teneurs en polyphénols seront-elles publiées ?",
        answer: "Oui. Chaque huile est analysée en laboratoire avant la mise en bouteille, et les résultats sont publiés sur cette page et sur les pages de certificats, avec le laboratoire et la méthode. La Coratina de la saison dernière affichait 847 mg/kg de polyphénols totaux, mesurés par HPLC.",
      },
      {
        question: "Pourquoi attendre la nouvelle récolte au lieu d'acheter maintenant ?",
        answer: "Les polyphénols baissent dès le jour où une huile est pressée. Une huile de récolte précoce est à son meilleur dans les mois qui suivent le pressage, c'est pourquoi ATTIMO ne vend que la dernière récolte.",
      },
    ],
  },
  closing: {
    h2: "Recevez la récolte 26/27 en premier",
    lead: "Nous vous écrivons le jour de l'ouverture des précommandes.",
  },
};

const nl: NewHarvestContent = {
  lang: "nl",
  meta: {
    title: "Olijfolie van de nieuwe oogst 26/27: status en verzenddatum | ATTIMO",
    description:
      "Waar de olijfolie van vroege oogst 26/27 van ATTIMO vandaag staat: persen vanaf half oktober, labanalyse begin november, verzending vanaf half november. Coratina, Peranzana en Picual.",
  },
  nav: { status: "Status", oils: "Oliën", freshness: "Versheid", faq: "FAQ" },
  hero: {
    eyebrow: "Oogst 26/27",
    h1: "Olijfolie van de nieuwe oogst: geperst in oktober, verzonden vanaf half november",
    lead: "Drie olijfoliën rijk aan polyfenolen, vroeg geoogst en binnen enkele uren geperst. Volg elke stap van de pers tot aan je deur, en krijg ze als eerste.",
    now: "Nu",
    updated: "Bijgewerkt op {date}",
  },
  status: {
    eyebrow: "Status",
    h2: "Waar de oogst 26/27 vandaag staat",
    states: { done: "Klaar", now: "Nu", next: "Straks" },
    details: [
      "De olijven worden nog groen geplukt en binnen enkele uren geperst. Groene olijven geven minder olie en meer polyfenolen.",
      "Een monster van elke olie gaat vóór het bottelen naar een onafhankelijk lab. De Coratina van vorig seizoen werd met HPLC getest in een ISO 17025-lab dat erkend is door de Internationale Olijfraad.",
      "Iedereen op de lijst krijgt een e-mail op de dag dat de voorverkoop opent.",
      "Elke olie wordt gebotteld zodra het labresultaat binnen is.",
      "Voorverkooporders worden als eerste verzonden.",
    ],
  },
  oils: {
    eyebrow: "De oliën",
    h2: "Drie oliën deze oogst, waarvan één nieuw",
    lead: "Coratina en Picual komen terug. Peranzana is nieuw en neemt de zachte, fruitige plaats in die Nocellara vorig seizoen had.",
    table: {
      caption: "Polyfenolen, vorig seizoen en dit seizoen",
      cols: { oil: "Olie", origin: "Herkomst", taste: "Smaak", last: "Polyfenolen 25/26", method: "Methode 25/26", now: "Polyfenolen 26/27" },
      newOil: "Nieuw deze oogst",
      note: "Totalen gemeten met verschillende methoden zijn onderling niet vergelijkbaar. De Coratina van vorig seizoen had daarnaast 807 mg/kg oleocanthal en oleaceïne samen.",
      certificates: "Labcertificaten",
      methods: "Zo worden polyfenolen gemeten",
    },
  },
  freshness: {
    eyebrow: "Versheid",
    h2: "Waarom we op de nieuwe oogst wachten",
    body1: "Polyfenolen beginnen te dalen op de dag dat een olie geperst wordt. Licht, warmte en lucht versnellen dat, en niets houdt het tegen.",
    body2: "Daarom verkopen we alleen de nieuwste oogst. Wat er over is van 25/26 is nu in de uitverkoop, en de olie van 26/27 wordt verzonden vanaf half november.",
    saleLink: "Uitverkoop vorig seizoen",
    chart: {
      title: "Polyfenolen dalen na het persen",
      fresh: "Net geperst",
      pressed: "Geperst",
      oneYear: "een jaar in het schap",
      caption: "Illustratief. Hoe snel polyfenolen dalen, hangt af van de olie en van hoe ze bewaard wordt.",
    },
  },
  wait: { eyebrow: "Terwijl je wacht" },
  faq: {
    heading: "FAQ nieuwe oogst",
    items: [
      {
        question: "Wanneer wordt de oogst 26/27 verzonden?",
        answer: "Vanaf half november 2026. Het persen begon half oktober, de labanalyse volgt begin november en de voorverkoop opent begin tot half november. Dit zijn schattingen, en deze pagina wordt bijgewerkt naarmate de olie vordert.",
      },
      {
        question: "Welke oliën zitten in de oogst 26/27?",
        answer: "Drie oliën van één olijfras: Coratina uit Apulië (krachtig en pittig), Peranzana uit Apulië (zacht en fruitig, nieuw deze oogst) en Picual uit Andalusië (groen en grassig).",
      },
      {
        question: "Kan ik de nieuwe oogst vooraf bestellen?",
        answer: "De voorverkoop opent begin tot half november. Laat je e-mailadres achter op deze pagina, dan krijg je een e-mail op de dag dat ze opent.",
      },
      {
        question: "Komt er een nieuwe Nocellara bij de volgende oogst?",
        answer: "Nee. Peranzana neemt de plaats van Nocellara in als zachte, fruitige olie van de oogst 26/27. De laatste flessen Nocellara van 25/26 zijn in de uitverkoop zolang de voorraad strekt.",
        link: { text: "De laatste flessen Nocellara van 25/26", href: "/product/nocellara" },
      },
      {
        question: "Worden de polyfenolwaarden gepubliceerd?",
        answer: "Ja. Elke olie wordt vóór het bottelen in een lab getest, en de resultaten verschijnen op deze pagina en op de certificaatpagina's, met lab en methode erbij. De Coratina van vorig seizoen had 847 mg/kg totale polyfenolen, gemeten met HPLC.",
      },
      {
        question: "Waarom wachten op de nieuwe oogst in plaats van nu te kopen?",
        answer: "Polyfenolen dalen vanaf de dag dat een olie geperst wordt. Een olie van vroege oogst is op zijn best in de maanden na het persen, daarom verkoopt ATTIMO alleen de nieuwste oogst.",
      },
    ],
  },
  closing: {
    h2: "Krijg de oogst 26/27 als eerste",
    lead: "We mailen je op de dag dat de voorverkoop opent.",
  },
};

const da: NewHarvestContent = {
  lang: "da",
  meta: {
    title: "Olivenolie fra ny høst 26/27: status og afsendelsesdato | ATTIMO",
    description:
      "Hvor ATTIMOs olivenolie fra tidlig høst 26/27 står i dag: presning fra midt i oktober, laboratorieanalyse i starten af november, forsendelse fra midt i november. Coratina, Peranzana og Picual.",
  },
  nav: { status: "Status", oils: "Olier", freshness: "Friskhed", faq: "FAQ" },
  hero: {
    eyebrow: "Høst 26/27",
    h1: "Olivenolie fra ny høst: presset i oktober, afsendes fra midt i november",
    lead: "Tre olivenolier med højt indhold af polyfenoler, høstet tidligt og presset inden for få timer. Følg hvert trin fra pressen til din dør, og få dem først.",
    now: "Nu",
    updated: "Opdateret {date}",
  },
  status: {
    eyebrow: "Status",
    h2: "Hvor høsten 26/27 står i dag",
    states: { done: "Færdig", now: "Nu", next: "Næste" },
    details: [
      "Oliverne plukkes, mens de stadig er grønne, og presses inden for få timer. Grønne oliven giver mindre olie og flere polyfenoler.",
      "En prøve af hver olie sendes til et uafhængigt laboratorium før aftapning. Sidste sæsons Coratina blev testet med HPLC på et ISO 17025-laboratorium, der er anerkendt af Det Internationale Olivenråd.",
      "Alle på listen får en e-mail den dag, forudbestillingen åbner.",
      "Hver olie aftappes, når laboratorieresultatet foreligger.",
      "Forudbestillinger sendes først.",
    ],
  },
  oils: {
    eyebrow: "Olierne",
    h2: "Tre olier i denne høst, én af dem ny",
    lead: "Coratina og Picual vender tilbage. Peranzana er ny og overtager den milde, frugtige plads, som Nocellara havde sidste sæson.",
    table: {
      caption: "Polyfenoler, sidste sæson og denne sæson",
      cols: { oil: "Olie", origin: "Oprindelse", taste: "Smag", last: "Polyfenoler 25/26", method: "Metode 25/26", now: "Polyfenoler 26/27" },
      newOil: "Ny i denne høst",
      note: "Totaler målt med forskellige metoder kan ikke sammenlignes med hinanden. Sidste sæsons Coratina målte desuden 807 mg/kg oleocanthal og oleacein tilsammen.",
      certificates: "Laboratoriecertifikater",
      methods: "Sådan måles polyfenoler",
    },
  },
  freshness: {
    eyebrow: "Friskhed",
    h2: "Hvorfor vi venter på den nye høst",
    body1: "Polyfenoler begynder at falde den dag, en olie presses. Lys, varme og luft får det til at gå hurtigere, og intet stopper det.",
    body2: "Derfor sælger vi kun den nyeste høst. Det, der er tilbage af 25/26, er på udsalg nu, og olien fra 26/27 sendes fra midt i november.",
    saleLink: "Udsalg fra sidste sæson",
    chart: {
      title: "Polyfenoler falder efter presning",
      fresh: "Nypresset",
      pressed: "Presset",
      oneYear: "et år på hylden",
      caption: "Illustrativ. Hvor hurtigt polyfenoler falder, afhænger af olien og af, hvordan den opbevares.",
    },
  },
  wait: { eyebrow: "Mens du venter" },
  faq: {
    heading: "FAQ om den nye høst",
    items: [
      {
        question: "Hvornår sendes høsten 26/27?",
        answer: "Fra midt i november 2026. Presningen begyndte midt i oktober, laboratorieanalysen følger i starten af november, og forudbestillingen åbner i starten til midten af november. Det er estimater, og siden opdateres, efterhånden som olien er på vej.",
      },
      {
        question: "Hvilke olier er med i høsten 26/27?",
        answer: "Tre olier af én sort: Coratina fra Apulien (kraftig og intens), Peranzana fra Apulien (mild og frugtig, ny i denne høst) og Picual fra Andalusien (grøn og græsagtig).",
      },
      {
        question: "Kan jeg forudbestille den nye høst?",
        answer: "Forudbestillingen åbner i starten til midten af november. Skriv din e-mail på denne side, så får du en e-mail den dag, den åbner.",
      },
      {
        question: "Kommer der en ny Nocellara i den næste høst?",
        answer: "Nej. Peranzana overtager Nocellaras plads som den milde, frugtige olie i høsten 26/27. De sidste flasker Nocellara fra 25/26 er på udsalg, så længe lager haves.",
        link: { text: "De sidste flasker Nocellara fra 25/26", href: "/product/nocellara" },
      },
      {
        question: "Bliver polyfenolindholdet offentliggjort?",
        answer: "Ja. Hver olie testes på et laboratorium før aftapning, og resultaterne offentliggøres på denne side og på certifikatsiderne med laboratorium og metode. Sidste sæsons Coratina målte 847 mg/kg samlede polyfenoler med HPLC.",
      },
      {
        question: "Hvorfor vente på den nye høst i stedet for at købe nu?",
        answer: "Polyfenoler falder fra den dag, en olie presses. En olie fra tidlig høst er på sit højeste i månederne efter presningen, og derfor sælger ATTIMO kun den nyeste høst.",
      },
    ],
  },
  closing: {
    h2: "Få høsten 26/27 først",
    lead: "Vi sender dig en e-mail den dag, forudbestillingen åbner.",
  },
};

const sv: NewHarvestContent = {
  lang: "sv",
  meta: {
    title: "Olivolja från ny skörd 26/27: status och leveransdatum | ATTIMO",
    description:
      "Var ATTIMOs olivolja från tidig skörd 26/27 står i dag: pressning från mitten av oktober, labbanalys i början av november, leverans från mitten av november. Coratina, Peranzana och Picual.",
  },
  nav: { status: "Status", oils: "Oljor", freshness: "Färskhet", faq: "FAQ" },
  hero: {
    eyebrow: "Skörd 26/27",
    h1: "Olivolja från ny skörd: pressad i oktober, levereras från mitten av november",
    lead: "Tre olivoljor med hög halt av polyfenoler, skördade tidigt och pressade inom några timmar. Följ varje steg från pressen till din dörr, och få dem först.",
    now: "Nu",
    updated: "Uppdaterad {date}",
  },
  status: {
    eyebrow: "Status",
    h2: "Var skörden 26/27 står i dag",
    states: { done: "Klart", now: "Nu", next: "Nästa" },
    details: [
      "Oliverna plockas medan de fortfarande är gröna och pressas inom några timmar. Gröna oliver ger mindre olja och mer polyfenoler.",
      "Ett prov av varje olja skickas till ett oberoende labb före buteljering. Förra säsongens Coratina testades med HPLC i ett ISO 17025-labb som är erkänt av Internationella olivrådet.",
      "Alla på listan får ett mejl samma dag som förbeställningen öppnar.",
      "Varje olja buteljeras när labbresultatet har kommit.",
      "Förbeställningar skickas först.",
    ],
  },
  oils: {
    eyebrow: "Oljorna",
    h2: "Tre oljor i den här skörden, en av dem ny",
    lead: "Coratina och Picual är tillbaka. Peranzana är ny och tar den milda, fruktiga plats som Nocellara hade förra säsongen.",
    table: {
      caption: "Polyfenoler, förra säsongen och den här säsongen",
      cols: { oil: "Olja", origin: "Ursprung", taste: "Smak", last: "Polyfenoler 25/26", method: "Metod 25/26", now: "Polyfenoler 26/27" },
      newOil: "Ny i den här skörden",
      note: "Totalvärden mätta med olika metoder går inte att jämföra med varandra. Förra säsongens Coratina mätte dessutom 807 mg/kg oleocanthal och oleacein tillsammans.",
      certificates: "Labbcertifikat",
      methods: "Så mäts polyfenoler",
    },
  },
  freshness: {
    eyebrow: "Färskhet",
    h2: "Varför vi väntar på den nya skörden",
    body1: "Polyfenoler börjar minska samma dag som en olja pressas. Ljus, värme och luft gör att det går snabbare, och ingenting stoppar det.",
    body2: "Därför säljer vi bara den senaste skörden. Det som finns kvar av 25/26 är på rea nu, och oljan från 26/27 skickas från mitten av november.",
    saleLink: "Rea på förra säsongen",
    chart: {
      title: "Polyfenoler minskar efter pressning",
      fresh: "Nypressad",
      pressed: "Pressad",
      oneYear: "ett år på hyllan",
      caption: "Illustrativ. Hur snabbt polyfenolerna minskar beror på oljan och på hur den förvaras.",
    },
  },
  wait: { eyebrow: "Medan du väntar" },
  faq: {
    heading: "Vanliga frågor om den nya skörden",
    items: [
      {
        question: "När levereras skörden 26/27?",
        answer: "Från mitten av november 2026. Pressningen började i mitten av oktober, labbanalysen följer i början av november och förbeställningen öppnar i början till mitten av november. Det är uppskattningar, och sidan uppdateras allteftersom oljan är på väg.",
      },
      {
        question: "Vilka oljor ingår i skörden 26/27?",
        answer: "Tre oljor från en enda sort: Coratina från Apulien (kraftig och intensiv), Peranzana från Apulien (mjuk och fruktig, ny i den här skörden) och Picual från Andalusien (grön och gräsig).",
      },
      {
        question: "Kan jag förbeställa den nya skörden?",
        answer: "Förbeställningen öppnar i början till mitten av november. Lämna din mejladress på den här sidan så får du ett mejl samma dag som den öppnar.",
      },
      {
        question: "Kommer det en ny Nocellara i nästa skörd?",
        answer: "Nej. Peranzana tar Nocellaras plats som den milda, fruktiga oljan i skörden 26/27. De sista flaskorna Nocellara från 25/26 är på rea så länge lagret räcker.",
        link: { text: "De sista flaskorna Nocellara från 25/26", href: "/product/nocellara" },
      },
      {
        question: "Kommer polyfenolhalterna att publiceras?",
        answer: "Ja. Varje olja testas i labb före buteljering, och resultaten publiceras på den här sidan och på certifikatsidorna, med labb och metod angivna. Förra säsongens Coratina mätte 847 mg/kg totala polyfenoler med HPLC.",
      },
      {
        question: "Varför vänta på den nya skörden i stället för att köpa nu?",
        answer: "Polyfenoler minskar från den dag en olja pressas. En olja från tidig skörd är som bäst under månaderna efter pressningen, och därför säljer ATTIMO bara den senaste skörden.",
      },
    ],
  },
  closing: {
    h2: "Få skörden 26/27 först",
    lead: "Vi mejlar dig samma dag som förbeställningen öppnar.",
  },
};

export const NH_CONTENT: Record<string, NewHarvestContent> = { en, de, fr, nl, da, sv };

// Per-locale paths. Slugs are ASCII (ø → oe, ö → o), as on the other hubs.
export const NH_SLUGS = {
  en: "/new-harvest",
  de: "/de/neue-ernte-olivenoel",
  fr: "/fr/nouvelle-recolte-huile-olive",
  sv: "/se/ny-skord-olivolja",
  da: "/dk/ny-hoest-olivenolie",
  nl: "/nl/nieuwe-oogst-olijfolie",
} as const;
export const nhHrefFor = (lang: string) => NH_SLUGS[lang as keyof typeof NH_SLUGS] ?? NH_SLUGS.en;

const NH_ORIGIN = "https://attimo-oil.com";
export const NH_HREFLANGS = [
  ...(["en", "de", "fr", "sv", "da", "nl"] as const).map((l) => ({ hreflang: l, href: NH_ORIGIN + NH_SLUGS[l] })),
  { hreflang: "x-default", href: NH_ORIGIN + NH_SLUGS.en },
];
