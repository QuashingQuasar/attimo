// Danish quiz overlay, AI-drafted (pending native review), mirrors quizData.ts
// order exactly. Mirrors the question order and the per-option order in
// quizData.ts EXACTLY — only the language differs. Scores, ids and result math
// live in quizData.ts and are language-independent.
//
// All strings are brand/quiz copy → every value is effectively // REVIEW for a
// native pass. Oil proper names (Coratina d'Italia, …) are NOT translated.
import type { QuizTextQuestion } from "./quizData.fr";

// Keyed by quizData question id.
export const quizQuestionsDa: Record<string, QuizTextQuestion> = {
  intensity: {
    category: "Intensitet",
    question: "Hvordan drikker du din espresso?",
    options: [
      { label: "Ristretto, uden sukker", description: "Det er intensiteten, der tæller" },
      { label: "Dobbelt, måske en sjat mælk", description: "" },
      { label: "Flat white eller cappuccino", description: "" },
      { label: "Jeg drikker ikke kaffe", description: "" },
    ],
  },
  bitterness: {
    category: "Bitterhed",
    question: "Mørk chokolade: hvilken procent griber du efter?",
    options: [
      { label: "85 % eller mere", description: "" },
      { label: "70 % — lidt kant, men stadig en nydelse", description: "" },
      { label: "Mælkechokolade", description: "" },
      { label: "Jeg springer chokoladen over", description: "" },
    ],
  },
  peppery: {
    category: "Peberet afslutning",
    question:
      "Det kløen i halsen til sidst i en olivenolie — den lille svie:",
    options: [
      { label: "Det er lige præcis det, jeg vil have", description: "" },
      { label: "Fint nok, men ikke hovedsagen", description: "" },
      { label: "Jeg mærker den helst ikke", description: "" },
    ],
  },
  use: {
    category: "Anvendelse",
    question: "Hvor ender denne olie oftest?",
    options: [
      { label: "Rå, direkte på maden", description: "Dryppet over ved bordet" },
      { label: "I madlavningen — stegning, ristning, høj varme", description: "" },
      { label: "Til at dyppe, brød, ost", description: "" },
      { label: "Lidt af det hele", description: "" },
    ],
  },
  food: {
    category: "Ret",
    question: "Vælg den ret, du helst vil have en fantastisk olivenolie på:",
    options: [
      { label: "Grillet lam med grillet aubergine", description: "" },
      { label: "Burrata, tomater, havsalt", description: "" },
      { label: "Gazpacho eller pan con tomate", description: "" },
      { label: "Blødkogt æg på ristet brød", description: "" },
    ],
  },
  health: {
    category: "Sundhedsmål",
    question: "Hvad bringer dig herhen?",
    options: [
      { label: "Polyfenoler først, smag bagefter", description: "" },
      { label: "Jeg vil have begge dele — høj kvalitet og sundt for mig", description: "" },
      { label: "Smag over alt, sundhed som bonus", description: "" },
      { label: "Helt ærligt vil jeg bare have noget, der smager godt", description: "" },
    ],
  },
  complexity: {
    category: "Kompleksitet",
    question:
      "Når du spiser, opfanger du de fine nuancer, eller nyder du bare helheden?",
    options: [
      { label: "Jeg lægger mærke til alt", description: "Afslutningen bagest i ganen, eftersmagen" },
      { label: "Jeg sætter pris på kompleksitet, når den er der", description: "" },
      { label: "Jeg spiser for nydelsen, ikke for at analysere", description: "" },
    ],
  },
  provenance: {
    category: "Oprindelse",
    question: "Hvor vigtig er økologisk certificering for dig?",
    options: [
      { label: "Uundværlig — et grundkrav", description: "" },
      { label: "Vigtig, men ikke en dealbreaker", description: "" },
      { label: "Rart at have, men ikke noget, jeg aktivt leder efter", description: "" },
      { label: "Spiller ingen rolle i mine valg", description: "" },
    ],
  },
  pairing: {
    category: "Kombination",
    question: "Hvad ligner dit køkken mest lige nu?",
    options: [
      { label: "Linsesuppe, kraftige gryderetter, bitre grøntsager", description: "" },
      { label: "Fisk, salater, let pasta", description: "" },
      { label: "Tapas, skaldyr, alt det middelhavsagtige", description: "" },
      { label: "Masser af æg, brød, enkle hverdagsretter", description: "" },
    ],
  },
  occasion: {
    category: "Anledning",
    question: "Hvornår finder du en særlig flaske frem?",
    options: [
      { label: "Til hvert måltid", description: "God olie er en daglig selvfølge" },
      { label: "Når jeg vil imponere", description: "En middag, gæster, noget at vise frem" },
      { label: "Når jeg spiser enkelt og vil lade olien være i centrum", description: "" },
      { label: "Sådan tænker jeg egentlig ikke over det", description: "" },
    ],
  },
  memory: {
    category: "Minde",
    question: "Vælg det måltid, der bliver hos dig:",
    options: [
      { label: "Modne tomater, varmt brød, en olie der smagte af høst", description: "Mild, frugtig, gavmild" },
      { label: "Bitre grøntsager, hvide bønner, en olie så grøn at den næsten sved", description: "Intens, peberet, kompromisløs" },
      { label: "Grillet fisk, citron, noget friskt og rent", description: "Græsagtig, frisk, direkte" },
      { label: "Ingen af dem — jeg er ved at skabe mindet", description: "" },
    ],
  },
};

export const oilSummariesDa: Record<string, string> = {
  nocellara:
    "Sart, rund og elegant. En olie, der lader maden ånde og samtidig tilføjer noget stille smukt.",
  picual:
    "Frisk, græsagtig og alsidig. Hjemme både rå og i madlavningen bringer den middelhavskarakter uden at trænge sig på.",
  coratina:
    "Intens, bitter, peberet — skabt til dem, der vil mærke olien. Det højeste indhold af polyfenoler i vores sortiment.",
};
