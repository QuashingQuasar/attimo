/**
 * Palate Assessment Quiz — Scoring Engine
 * 
 * Each answer distributes weighted points across three oils.
 * To add questions: push a new entry to `quizQuestions`.
 * To tweak weights: edit the `scores` object on each option.
 */

export interface OilScores {
  coratina: number;
  picual: number;
  nocellara: number;
}

export interface QuizOption {
  label: string;
  description: string;
  scores: OilScores;
}

export interface QuizQuestion {
  id: string;
  category: string;
  question: string;
  options: QuizOption[];
}

export interface OilResult {
  key: keyof OilScores;
  name: string;
  origin: string;
  profile: string;
  percentage: number;
  summary: string;
  handle: string; // for product page link
}

// ── Questions ────────────────────────────────────────────────────────────

export const quizQuestions: QuizQuestion[] = [
  {
    id: "intensity",
    category: "Intensity",
    question: "How do you feel about intense flavors like a ginger shot or strong espresso?",
    options: [
      {
        label: "Love it",
        description: "I enjoy bold, punchy flavors",
        scores: { coratina: 5, picual: 3, nocellara: 1 },
      },
      {
        label: "Balanced",
        description: "I like flavors with character but not overwhelming",
        scores: { coratina: 2, picual: 5, nocellara: 3 },
      },
      {
        label: "Smooth",
        description: "I prefer mellow, easy-going flavors",
        scores: { coratina: 1, picual: 2, nocellara: 5 },
      },
    ],
  },
  {
    id: "routine",
    category: "Routine",
    question: "How will you use the oil most often?",
    options: [
      {
        label: "Health shot or rich meals",
        description: "Drizzled straight or on hearty dishes",
        scores: { coratina: 5, picual: 2, nocellara: 1 },
      },
      {
        label: "Finishing dishes",
        description: "A final drizzle to elevate salads, pasta, fish",
        scores: { coratina: 2, picual: 5, nocellara: 2 },
      },
      {
        label: "Everything",
        description: "Bread, eggs, daily meals — a true all-rounder",
        scores: { coratina: 1, picual: 2, nocellara: 5 },
      },
    ],
  },
  {
    id: "tasting-notes",
    category: "Tasting Notes",
    question: "Which flavors do you prefer?",
    options: [
      {
        label: "Artichoke & black pepper",
        description: "Herbaceous and peppery",
        scores: { coratina: 5, picual: 2, nocellara: 1 },
      },
      {
        label: "Fresh grass & green tomato",
        description: "Bright and grassy",
        scores: { coratina: 2, picual: 5, nocellara: 1 },
      },
      {
        label: "Almond & golden pear",
        description: "Nutty and fruity",
        scores: { coratina: 1, picual: 1, nocellara: 5 },
      },
    ],
  },
  {
    id: "goal",
    category: "The Goal",
    question: "What is your main priority?",
    options: [
      {
        label: "Maximum health benefits",
        description: "Highest polyphenol content possible",
        scores: { coratina: 5, picual: 3, nocellara: 1 },
      },
      {
        label: "A vibrant green finish",
        description: "Beautiful colour and fresh herbaceous notes",
        scores: { coratina: 2, picual: 5, nocellara: 2 },
      },
      {
        label: "Elegant & reliable",
        description: "A refined oil for any occasion",
        scores: { coratina: 1, picual: 2, nocellara: 5 },
      },
    ],
  },
  {
    id: "stove",
    category: "The Stove",
    question: "Will this oil see the heat of a pan?",
    options: [
      {
        label: "Never (Raw only)",
        description: "I want every polyphenol intact",
        scores: { coratina: 5, picual: 3, nocellara: 1 },
      },
      {
        label: "Occasionally",
        description: "Light sauté or roast",
        scores: { coratina: 2, picual: 5, nocellara: 3 },
      },
      {
        label: "Versatile all-rounder",
        description: "From pan to plate",
        scores: { coratina: 1, picual: 2, nocellara: 5 },
      },
    ],
  },
];

// ── Scoring ──────────────────────────────────────────────────────────────

export function calculateResults(answers: Record<string, number>): OilResult[] {
  const totals: OilScores = { coratina: 0, picual: 0, nocellara: 0 };

  for (const question of quizQuestions) {
    const chosenIndex = answers[question.id];
    if (chosenIndex === undefined) continue;
    const option = question.options[chosenIndex];
    if (!option) continue;
    totals.coratina += option.scores.coratina;
    totals.picual += option.scores.picual;
    totals.nocellara += option.scores.nocellara;
  }

  const sum = totals.coratina + totals.picual + totals.nocellara || 1;

  const results: OilResult[] = [
    {
      key: "coratina",
      name: "Coratina",
      origin: "Puglia, Italy",
      profile: "Bold & Peppery",
      percentage: Math.round((totals.coratina / sum) * 100),
      summary:
        "You gravitate toward bold intensity and maximum health benefits. Coratina's high polyphenol count and peppery finish are made for you.",
      handle: "coratina-evoo",
    },
    {
      key: "picual",
      name: "Picual",
      origin: "Andalusia, Spain",
      profile: "Fresh & Herbaceous",
      percentage: Math.round((totals.picual / sum) * 100),
      summary:
        "You love a vibrant, grassy character that elevates any dish. Picual's fresh green notes and balanced bitterness are your perfect match.",
      handle: "picual-evoo",
    },
    {
      key: "nocellara",
      name: "Nocellara",
      origin: "Sicily, Italy",
      profile: "Round & Nutty",
      percentage: Math.round((totals.nocellara / sum) * 100),
      summary:
        "You value elegance and versatility. Nocellara's almond-butter smoothness and golden-pear sweetness make it an everyday essential.",
      handle: "nocellara-evoo",
    },
  ];

  // Sort descending by percentage
  results.sort((a, b) => b.percentage - a.percentage);

  return results;
}
