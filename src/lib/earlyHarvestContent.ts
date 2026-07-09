// Shared content for the /early-harvest-olive-oil category hub.
// FAQ is rendered on-page AND mirrored into FAQPage JSON-LD — keep in sync.
// (Products for CollectionPage JSON-LD are reused from highPolyphenolContent.)

export interface QnA {
  question: string;
  answer: string;
}

export const EARLY_HARVEST_FAQS: QnA[] = [
  {
    question: "What is early harvest olive oil?",
    answer:
      "Early harvest olive oil is pressed from olives picked while they're still green and unripe — usually in October — rather than left to ripen to purple or black. Green olives give less oil, but a far more intense, fresh and polyphenol-rich one. It's the choice behind terms like 'early harvest', 'green harvest' and 'olio nuovo'.",
  },
  {
    question: "When are olives harvested for early-harvest oil?",
    answer:
      "In the northern hemisphere, early harvest happens in October, at the very start of the season, when the fruit is still green and firm. Late-harvest oil comes from olives left on the tree into November and December, once they've ripened and darkened — which yields more oil but a milder, lower-polyphenol result.",
  },
  {
    question: "Does early harvest olive oil taste different?",
    answer:
      "Distinctly. Early-harvest oil is green, grassy and aromatic, with a bitterness on the tongue and a peppery catch at the back of the throat. That pepper is a sign of freshness and polyphenols, not a fault. Late-harvest oils are milder and more buttery — smoother, but flatter.",
  },
  {
    question: "Why is early harvest olive oil more expensive?",
    answer:
      "Because green olives yield roughly half the oil of ripe ones, so it takes about twice the fruit to fill a bottle — picked in a short window, often by hand. You're paying for lower yield and higher quality. Industrial oil is picked late precisely to maximise volume and lower cost.",
  },
  {
    question: "Is early harvest olive oil healthier?",
    answer:
      "Generally yes — polyphenols peak in green, early-harvested olives, and polyphenols are the compounds behind olive oil's health reputation. That's the direct link between the harvest choice and the health benefit. We cover the science in depth on our high-polyphenol olive oil page.",
  },
  {
    question: "How fresh should early harvest olive oil be?",
    answer:
      "As fresh as possible. Early-harvest oils peak just after pressing and decline over the following months, so you want the current harvest — not a bottle that's spent a year in transit and on a shelf. ATTIMO only ever sells the latest harvest, for exactly this reason.",
  },
  {
    question: "Is early harvest the same as olio nuovo?",
    answer:
      "They overlap. Olio nuovo ('new oil') is the just-pressed, often unfiltered oil enjoyed in the weeks right after an early harvest — intensely green and peppery. Early-harvest oil is the broader category; olio nuovo is its freshest, youngest expression.",
  },
];
