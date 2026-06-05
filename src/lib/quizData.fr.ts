// French text overlay for the palate quiz. Mirrors the question order and the
// per-option order in quizData.ts EXACTLY — only the language differs. Scores,
// ids and result math live in quizData.ts and are language-independent.
//
// All strings are brand/quiz copy → every value is effectively // REVIEW for a
// native pass. Oil proper names (Coratina d'Italia, …) are NOT translated.

export interface QuizTextOption {
  label: string;
  description: string;
}
export interface QuizTextQuestion {
  category: string;
  question: string;
  options: QuizTextOption[];
}

// Keyed by quizData question id.
export const quizQuestionsFr: Record<string, QuizTextQuestion> = {
  intensity: {
    category: "Intensité",
    question: "Comment prenez-vous votre espresso ?",
    options: [
      { label: "Ristretto, sans sucre", description: "L'intensité, c'est le but" },
      { label: "Double, peut-être un nuage de lait", description: "" },
      { label: "Flat white ou cappuccino", description: "" },
      { label: "Je ne bois pas de café", description: "" },
    ],
  },
  bitterness: {
    category: "Amertume",
    question: "Chocolat noir : vous prenez quel pourcentage ?",
    options: [
      { label: "85 % ou plus", description: "" },
      { label: "70 % — du caractère, mais encore gourmand", description: "" },
      { label: "Chocolat au lait", description: "" },
      { label: "Je passe sur le chocolat", description: "" },
    ],
  },
  peppery: {
    category: "Final poivré",
    question:
      "Ce picotement en fin de bouche d'une huile d'olive — cette légère ardeur dans la gorge :",
    options: [
      { label: "C'est exactement ce que je recherche", description: "" },
      { label: "D'accord, mais ce n'est pas l'essentiel", description: "" },
      { label: "Je préfère ne pas le sentir", description: "" },
    ],
  },
  use: {
    category: "Utilisation",
    question: "Où cette huile finit-elle le plus souvent ?",
    options: [
      { label: "Crue, directement sur les plats", description: "En filet à table" },
      { label: "À la cuisson — poêler, rôtir, haute température", description: "" },
      { label: "Pour tremper, pain, fromage", description: "" },
      { label: "Un peu de tout", description: "" },
    ],
  },
  food: {
    category: "Plat",
    question: "Choisissez le plat sur lequel vous rêveriez d'une belle huile d'olive :",
    options: [
      { label: "Agneau grillé et aubergine braisée", description: "" },
      { label: "Burrata, tomates, fleur de sel", description: "" },
      { label: "Gaspacho ou pan con tomate", description: "" },
      { label: "Œuf à la coque sur toast", description: "" },
    ],
  },
  health: {
    category: "Objectif santé",
    question: "Qu'est-ce qui vous amène ?",
    options: [
      { label: "Les polyphénols d'abord, le goût ensuite", description: "" },
      { label: "Je veux les deux — haute qualité et bon pour moi", description: "" },
      { label: "Le goût avant tout, la santé en bonus", description: "" },
      { label: "Honnêtement, je veux juste quelque chose de bon", description: "" },
    ],
  },
  complexity: {
    category: "Complexité",
    question:
      "Quand vous mangez, percevez-vous les saveurs subtiles ou appréciez-vous l'ensemble ?",
    options: [
      { label: "Je remarque tout", description: "Le final en fond de gorge, l'arrière-goût" },
      { label: "J'apprécie la complexité quand elle est là", description: "" },
      { label: "Je mange pour le plaisir, pas pour analyser", description: "" },
    ],
  },
  provenance: {
    category: "Provenance",
    question: "Quelle importance accordez-vous à la certification bio ?",
    options: [
      { label: "Essentielle — c'est une exigence de base", description: "" },
      { label: "Importante, mais pas rédhibitoire", description: "" },
      { label: "Appréciable, sans que je la recherche activement", description: "" },
      { label: "Ça n'entre pas en compte dans mes choix", description: "" },
    ],
  },
  pairing: {
    category: "Accord",
    question: "Qu'est-ce qui ressemble le plus à votre cuisine en ce moment ?",
    options: [
      { label: "Soupe de lentilles, plats mijotés, légumes verts amers", description: "" },
      { label: "Poisson, salades, pâtes légères", description: "" },
      { label: "Tapas, fruits de mer, tout ce qui est méditerranéen", description: "" },
      { label: "Beaucoup d'œufs, du pain, des repas simples en semaine", description: "" },
    ],
  },
  occasion: {
    category: "Occasion",
    question: "Quand sortez-vous une bouteille spéciale ?",
    options: [
      { label: "À chaque repas", description: "Une bonne huile, c'est non négociable au quotidien" },
      { label: "Quand je veux impressionner", description: "Un dîner, des invités, quelque chose à montrer" },
      { label: "Quand je mange simplement et que je veux que l'huile soit la vedette", description: "" },
      { label: "Je ne le vois pas vraiment comme ça", description: "" },
    ],
  },
  memory: {
    category: "Souvenir",
    question: "Choisissez le repas qui vous reste en mémoire :",
    options: [
      { label: "Tomates mûres, pain chaud, une huile au goût de récolte", description: "Douce, fruitée, généreuse" },
      { label: "Légumes verts amers, haricots blancs, une huile si verte qu'elle piquait presque", description: "Intense, poivrée, sans compromis" },
      { label: "Poisson grillé, citron, quelque chose de vif et net", description: "Herbacée, fraîche, directe" },
      { label: "Aucun de ceux-ci — je crée encore le souvenir", description: "" },
    ],
  },
};

export const oilSummariesFr: Record<string, string> = {
  nocellara:
    "Délicate, ronde et élégante. Une huile qui laisse les aliments respirer tout en apportant une touche discrètement belle.",
  picual:
    "Vive, herbacée et polyvalente. À l'aise crue ou cuite, elle apporte du caractère méditerranéen sans s'imposer.",
  coratina:
    "Intense, amère, poivrée — pensée pour celles et ceux qui veulent sentir l'huile. La plus haute teneur en polyphénols de notre gamme.",
};
