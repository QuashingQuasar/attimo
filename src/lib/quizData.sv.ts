// Swedish text overlay for the palate quiz. AI-drafted (pending native review).
// Mirrors the question order and the per-option order in quizData.ts EXACTLY —
// only the language differs. Scores, ids and result math live in quizData.ts
// and are language-independent.
//
// All strings are brand/quiz copy → every value is effectively // REVIEW for a
// native pass. Oil proper names (Coratina d'Italia, …) are NOT translated.
import type { QuizTextQuestion } from "./quizData.fr";

// Keyed by quizData question id.
export const quizQuestionsSv: Record<string, QuizTextQuestion> = {
  intensity: {
    category: "Intensitet",
    question: "Hur tar du din espresso?",
    options: [
      { label: "Ristretto, utan socker", description: "Det är kraften som räknas" },
      { label: "Dubbel, kanske en skvätt mjölk", description: "" },
      { label: "Flat white eller cappuccino", description: "" },
      { label: "Jag dricker inte kaffe", description: "" },
    ],
  },
  bitterness: {
    category: "Beska",
    question: "Mörk choklad: vilken kakaohalt väljer du?",
    options: [
      { label: "85 % eller mer", description: "" },
      { label: "70 % — lite skärpa, men fortfarande njutbar", description: "" },
      { label: "Mjölkchoklad", description: "" },
      { label: "Jag hoppar över chokladen", description: "" },
    ],
  },
  peppery: {
    category: "Pepprig eftersmak",
    question:
      "Den där kittlingen i halsen på slutet av en olivolja — den lätta hettan:",
    options: [
      { label: "Det är precis vad jag är ute efter", description: "" },
      { label: "Okej, men inte huvudsaken", description: "" },
      { label: "Jag känner den helst inte", description: "" },
    ],
  },
  use: {
    category: "Användning",
    question: "Var hamnar den här oljan oftast?",
    options: [
      { label: "Rå, direkt på maten", description: "Ringlad över vid bordet" },
      { label: "I matlagningen — steka, rosta, hög värme", description: "" },
      { label: "Att doppa i, bröd, ost", description: "" },
      { label: "Lite av allt", description: "" },
    ],
  },
  food: {
    category: "Rätt",
    question: "Välj rätten du helst av allt vill ha en riktigt fin olivolja på:",
    options: [
      { label: "Grillat lamm med rostad aubergine", description: "" },
      { label: "Burrata, tomater, havssalt", description: "" },
      { label: "Gazpacho eller pan con tomate", description: "" },
      { label: "Löskokt ägg på rostat bröd", description: "" },
    ],
  },
  health: {
    category: "Hälsomål",
    question: "Vad för dig hit?",
    options: [
      { label: "Polyfenoler först, smak sedan", description: "" },
      { label: "Jag vill ha båda — hög kvalitet och nyttigt för mig", description: "" },
      { label: "Smaken framför allt, hälsan som bonus", description: "" },
      { label: "Ärligt talat vill jag bara ha något som smakar gott", description: "" },
    ],
  },
  complexity: {
    category: "Komplexitet",
    question:
      "När du äter, lägger du märke till de fina nyanserna eller njuter du bara av helheten?",
    options: [
      { label: "Jag märker allt", description: "Eftersmaken längst bak i halsen, kvardröjandet" },
      { label: "Jag uppskattar komplexitet när den finns där", description: "" },
      { label: "Jag äter för njutningens skull, inte för att analysera", description: "" },
    ],
  },
  provenance: {
    category: "Ursprung",
    question: "Hur viktig är den ekologiska certifieringen för dig?",
    options: [
      { label: "Oumbärlig — ett grundkrav", description: "" },
      { label: "Viktig, men inget dealbreaker", description: "" },
      { label: "Trevligt att ha, men inget jag aktivt söker efter", description: "" },
      { label: "Spelar ingen roll för mina val", description: "" },
    ],
  },
  pairing: {
    category: "Kombination",
    question: "Vad liknar ditt kök mest just nu?",
    options: [
      { label: "Linssoppa, mustiga grytor, beska bladgrönsaker", description: "" },
      { label: "Fisk, sallader, lätt pasta", description: "" },
      { label: "Tapas, skaldjur, allt som är medelhavsinspirerat", description: "" },
      { label: "Mycket ägg, bröd, enkel vardagsmat", description: "" },
    ],
  },
  occasion: {
    category: "Tillfälle",
    question: "När tar du fram en extra fin flaska?",
    options: [
      { label: "Vid varje måltid", description: "Bra olja är en daglig självklarhet" },
      { label: "När jag vill imponera", description: "En middag, gäster, något att visa upp" },
      { label: "När jag äter enkelt och vill att oljan ska vara det som gäller", description: "" },
      { label: "Jag tänker inte riktigt på det så", description: "" },
    ],
  },
  memory: {
    category: "Minne",
    question: "Välj måltiden som stannar kvar hos dig:",
    options: [
      { label: "Mogna tomater, varmt bröd, en olja som smakade av skörden", description: "Mjuk, fruktig, generös" },
      { label: "Beska bladgrönsaker, vita bönor, en olja så grön att den nästan stack", description: "Intensiv, pepprig, kompromisslös" },
      { label: "Grillad fisk, citron, något friskt och rent", description: "Grässmakande, frisk, direkt" },
      { label: "Ingen av dem — jag håller på att skapa minnet", description: "" },
    ],
  },
};

export const oilSummariesSv: Record<string, string> = {
  nocellara:
    "Delikat, rund och elegant. En olja som låter maten andas samtidigt som den tillför något stillsamt vackert.",
  picual:
    "Livlig, grässmakande och mångsidig. Lika hemma rå som tillagad, ger den medelhavskaraktär utan att kräva uppmärksamhet.",
  coratina:
    "Intensiv, besk, pepprig — gjord för dig som vill känna oljan. Den högsta polyfenolhalten i vårt sortiment.",
};
