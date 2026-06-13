// German text overlay for the palate quiz. Mirrors the question order and the
// per-option order in quizData.ts EXACTLY — only the language differs. Scores,
// ids and result math live in quizData.ts and are language-independent.
//
// All strings are brand/quiz copy → every value is effectively // REVIEW for a
// native pass. Oil proper names (Coratina d'Italia, …) are NOT translated.
import type { QuizTextQuestion } from "./quizData.fr";

// Keyed by quizData question id.
export const quizQuestionsDe: Record<string, QuizTextQuestion> = {
  intensity: {
    category: "Intensität",
    question: "Wie trinken Sie Ihren Espresso?",
    options: [
      { label: "Ristretto, ohne Zucker", description: "Die Intensität ist der Punkt" },
      { label: "Doppelter, vielleicht ein Schuss Milch", description: "" },
      { label: "Flat White oder Cappuccino", description: "" },
      { label: "Ich trinke keinen Kaffee", description: "" },
    ],
  },
  bitterness: {
    category: "Bitterkeit",
    question: "Zartbitterschokolade: zu welchem Anteil greifen Sie?",
    options: [
      { label: "85 % oder mehr", description: "" },
      { label: "70 % — etwas Kante, trotzdem genussvoll", description: "" },
      { label: "Milchschokolade", description: "" },
      { label: "Ich verzichte auf Schokolade", description: "" },
    ],
  },
  peppery: {
    category: "Pfeffriger Abgang",
    question:
      "Das Kratzen im Hals am Ende eines Olivenöls — dieses leichte Brennen:",
    options: [
      { label: "Genau das will ich", description: "" },
      { label: "In Ordnung, aber nicht die Hauptsache", description: "" },
      { label: "Ich spüre es lieber nicht", description: "" },
    ],
  },
  use: {
    category: "Verwendung",
    question: "Wo landet dieses Öl am häufigsten?",
    options: [
      { label: "Roh, direkt auf dem Essen", description: "Am Tisch darübergeträufelt" },
      { label: "Beim Kochen — Anbraten, Rösten, große Hitze", description: "" },
      { label: "Zum Dippen, Brot, Käse", description: "" },
      { label: "Von allem etwas", description: "" },
    ],
  },
  food: {
    category: "Gericht",
    question: "Wählen Sie das Gericht, auf dem Sie sich ein großartiges Olivenöl am meisten wünschen:",
    options: [
      { label: "Gegrilltes Lamm mit gerösteter Aubergine", description: "" },
      { label: "Burrata, Tomaten, Meersalz", description: "" },
      { label: "Gazpacho oder Pan con Tomate", description: "" },
      { label: "Weiches Ei auf Toast", description: "" },
    ],
  },
  health: {
    category: "Gesundheitsziel",
    question: "Was führt Sie her?",
    options: [
      { label: "Polyphenole zuerst, Geschmack danach", description: "" },
      { label: "Ich will beides — hohe Qualität und gesund für mich", description: "" },
      { label: "Geschmack über alles, Gesundheit als Bonus", description: "" },
      { label: "Ehrlich gesagt will ich einfach nur etwas, das gut schmeckt", description: "" },
    ],
  },
  complexity: {
    category: "Komplexität",
    question:
      "Wenn Sie essen, nehmen Sie feine Aromen wahr oder genießen Sie einfach das Ganze?",
    options: [
      { label: "Ich bemerke alles", description: "Den Abgang im hinteren Gaumen, den Nachgeschmack" },
      { label: "Ich schätze Komplexität, wenn sie da ist", description: "" },
      { label: "Ich esse zum Genuss, nicht zum Analysieren", description: "" },
    ],
  },
  provenance: {
    category: "Herkunft",
    question: "Wie wichtig ist Ihnen die Bio-Zertifizierung?",
    options: [
      { label: "Unverzichtbar — eine Grundvoraussetzung", description: "" },
      { label: "Wichtig, aber kein Ausschlusskriterium", description: "" },
      { label: "Schön zu haben, aber nichts, wonach ich aktiv suche", description: "" },
      { label: "Spielt bei meinen Entscheidungen keine Rolle", description: "" },
    ],
  },
  pairing: {
    category: "Kombination",
    question: "Was kommt Ihrer Küche im Moment am nächsten?",
    options: [
      { label: "Linsensuppe, herzhafte Eintöpfe, bittere Blattgemüse", description: "" },
      { label: "Fisch, Salate, leichte Pasta", description: "" },
      { label: "Tapas, Meeresfrüchte, alles Mediterrane", description: "" },
      { label: "Viele Eier, Brot, einfache Gerichte unter der Woche", description: "" },
    ],
  },
  occasion: {
    category: "Anlass",
    question: "Wann greifen Sie zu einer besonderen Flasche?",
    options: [
      { label: "Bei jeder Mahlzeit", description: "Gutes Öl ist täglich nicht verhandelbar" },
      { label: "Wenn ich beeindrucken will", description: "Ein Dinner, Gäste, etwas zum Vorzeigen" },
      { label: "Wenn ich einfach esse und das Öl die Hauptrolle spielen soll", description: "" },
      { label: "So betrachte ich es eigentlich nicht", description: "" },
    ],
  },
  memory: {
    category: "Erinnerung",
    question: "Wählen Sie die Mahlzeit, die Ihnen in Erinnerung bleibt:",
    options: [
      { label: "Reife Tomaten, warmes Brot, ein Öl, das nach Ernte schmeckte", description: "Mild, fruchtig, großzügig" },
      { label: "Bittere Blattgemüse, weiße Bohnen, ein Öl so grün, dass es fast brannte", description: "Intensiv, pfeffrig, kompromisslos" },
      { label: "Gegrillter Fisch, Zitrone, etwas Frisches und Klares", description: "Grasig, frisch, direkt" },
      { label: "Nichts davon — ich schaffe die Erinnerung gerade erst", description: "" },
    ],
  },
};

export const oilSummariesDe: Record<string, string> = {
  nocellara:
    "Zart, rund und elegant. Ein Öl, das die Speisen atmen lässt und zugleich eine still schöne Note hinzufügt.",
  picual:
    "Lebendig, grasig und vielseitig. Roh wie gekocht zu Hause, bringt es mediterranen Charakter, ohne sich aufzudrängen.",
  coratina:
    "Intensiv, bitter, pfeffrig — gemacht für alle, die das Öl spüren wollen. Der höchste Polyphenolgehalt unserer Reihe.",
};
