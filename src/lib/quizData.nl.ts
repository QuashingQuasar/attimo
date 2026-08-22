// Dutch quiz overlay, AI-drafted (pending native review). Mirrors the question
// order and the per-option order in quizData.ts EXACTLY — only the language
// differs. Scores, ids and result math live in quizData.ts and are
// language-independent.
//
// All strings are brand/quiz copy → every value is effectively // REVIEW for a
// native pass. Oil proper names (Coratina d'Italia, …) are NOT translated.
import type { QuizTextQuestion } from "./quizData.fr";

// Keyed by quizData question id.
export const quizQuestionsNl: Record<string, QuizTextQuestion> = {
  intensity: {
    category: "Intensiteit",
    question: "Hoe drink je je espresso?",
    options: [
      { label: "Ristretto, zonder suiker", description: "Het gaat om de punch" },
      { label: "Dubbele shot, misschien een scheutje melk", description: "" },
      { label: "Flat white of cappuccino", description: "" },
      { label: "Ik drink geen koffie", description: "" },
    ],
  },
  bitterness: {
    category: "Bitterheid",
    question: "Pure chocolade: naar welk percentage grijp je?",
    options: [
      { label: "85% of hoger", description: "" },
      { label: "70% — wat scherpte, maar nog steeds genieten", description: "" },
      { label: "Melkchocolade", description: "" },
      { label: "Ik sla chocolade over", description: "" },
    ],
  },
  peppery: {
    category: "Peperige afdronk",
    question:
      "Die kriebel in je keel aan het einde van een olijfolie — die lichte prikkeling:",
    options: [
      { label: "Dat is precies wat ik wil", description: "" },
      { label: "Prima, maar niet de hoofdzaak", description: "" },
      { label: "Ik voel het liever niet", description: "" },
    ],
  },
  use: {
    category: "Gebruik",
    question: "Waar komt deze olie het vaakst terecht?",
    options: [
      { label: "Rauw, direct op het eten", description: "Aan tafel eroverheen gedruppeld" },
      { label: "Bij het koken — bakken, roosteren, hoge temperaturen", description: "" },
      { label: "Om te dippen, brood, kaas", description: "" },
      { label: "Van alles wat", description: "" },
    ],
  },
  food: {
    category: "Gerecht",
    question: "Kies het gerecht waar je het liefst een geweldige olijfolie op wilt:",
    options: [
      { label: "Gegrild lamsvlees met geroosterde aubergine", description: "" },
      { label: "Burrata, tomaten, zeezout", description: "" },
      { label: "Gazpacho of pan con tomate", description: "" },
      { label: "Zachtgekookt ei op toast", description: "" },
    ],
  },
  health: {
    category: "Gezondheidsdoel",
    question: "Wat brengt je hier?",
    options: [
      { label: "Polyfenolen eerst, smaak daarna", description: "" },
      { label: "Ik wil allebei — topkwaliteit én goed voor mij", description: "" },
      { label: "Smaak is alles, gezondheid is mooi meegenomen", description: "" },
      { label: "Eerlijk gezegd wil ik gewoon iets dat lekker smaakt", description: "" },
    ],
  },
  complexity: {
    category: "Complexiteit",
    question:
      "Als je eet, pik je dan de subtiele smaken op of geniet je gewoon van het geheel?",
    options: [
      { label: "Ik merk alles op", description: "De afdronk achter in de keel, de nasmaak" },
      { label: "Ik waardeer complexiteit als die er is", description: "" },
      { label: "Ik eet om te genieten, niet om te analyseren", description: "" },
    ],
  },
  provenance: {
    category: "Herkomst",
    question: "Hoe belangrijk is een biologisch keurmerk voor jou?",
    options: [
      { label: "Onmisbaar — een basisvoorwaarde", description: "" },
      { label: "Belangrijk, maar geen dealbreaker", description: "" },
      { label: "Mooi meegenomen, maar ik zoek er niet actief naar", description: "" },
      { label: "Speelt geen rol in mijn keuzes", description: "" },
    ],
  },
  pairing: {
    category: "Combinatie",
    question: "Wat lijkt op dit moment het meest op jouw keuken?",
    options: [
      { label: "Linzensoep, stevige stoofpotten, bittere groenten", description: "" },
      { label: "Vis, salades, lichte pasta", description: "" },
      { label: "Tapas, zeevruchten, alles mediterraan", description: "" },
      { label: "Veel eieren, brood, simpel doordeweeks eten", description: "" },
    ],
  },
  occasion: {
    category: "Gelegenheid",
    question: "Wanneer pak je een bijzondere fles erbij?",
    options: [
      { label: "Bij elke maaltijd", description: "Goede olie is een dagelijkse vanzelfsprekendheid" },
      { label: "Als ik indruk wil maken", description: "Een etentje, gasten, iets om te laten zien" },
      { label: "Als ik simpel eet en de olie de hoofdrol wil geven", description: "" },
      { label: "Zo denk ik er eigenlijk niet over na", description: "" },
    ],
  },
  memory: {
    category: "Herinnering",
    question: "Kies de maaltijd die je bijblijft:",
    options: [
      { label: "Rijpe tomaten, warm brood, olie die naar de oogst smaakte", description: "Zacht, fruitig, gul" },
      { label: "Bittere groenten, witte bonen, olie zo groen dat die bijna prikte", description: "Intens, peperig, compromisloos" },
      { label: "Gegrilde vis, citroen, iets fris en zuiver", description: "Grassig, fris, direct" },
      { label: "Geen van deze — ik ben de herinnering nog aan het maken", description: "" },
    ],
  },
};

export const oilSummariesNl: Record<string, string> = {
  nocellara:
    "Delicaat, rond en elegant. Een olie die het eten laat ademen en er tegelijk iets stilzwijgend moois aan toevoegt.",
  picual:
    "Fris, grassig en veelzijdig. Even goed rauw als in de keuken, brengt die mediterraan karakter zonder aandacht op te eisen.",
  coratina:
    "Intens, bitter, peperig — gemaakt voor wie de olie wil voelen. Het hoogste polyfenolgehalte in ons assortiment.",
};
