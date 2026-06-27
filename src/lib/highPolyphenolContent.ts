// Shared content for the /high-polyphenol-olive-oil category hub.
//
// Lives in its own module so the Astro route can emit FAQPage + CollectionPage
// JSON-LD whose text matches what the React island renders, without the route
// having to import the client component tree.

export interface QnA {
  question: string;
  answer: string;
}

// Polyphenol-first FAQ. The plain-text answers are rendered in the on-page FAQ
// accordion (via HighPolyphenolPage) AND mirrored into FAQPage JSON-LD — keep
// both in sync by sourcing both from here.
export const HIGH_POLYPHENOL_FAQS: QnA[] = [
  {
    question: "What is high-polyphenol olive oil?",
    answer:
      "High-polyphenol olive oil is extra virgin olive oil with an unusually high concentration of polyphenols — the natural antioxidant compounds the olive produces. There is no single legal cut-off, but oils above the EU health-claim level of 250 mg/kg are generally considered high-polyphenol. ATTIMO's range runs 400–900 mg/kg, versus roughly 120–210 mg/kg for typical supermarket extra virgin oil.",
  },
  {
    question: "How many polyphenols should olive oil have?",
    answer:
      "Typical supermarket extra virgin oil sits around 100–300 mg/kg. The EU permits a health claim at 250 mg/kg of hydroxytyrosol and its derivatives (5 mg per 20 g of oil). Recognised high-polyphenol oils start around 400 mg/kg. ATTIMO oils are lab-tested at 400–900 mg/kg depending on the variety.",
  },
  {
    question: "Which olive oil has the most polyphenols?",
    answer:
      "Across our range, Coratina d'Italia is highest at 847 mg/kg, followed by Picual de España at 675 mg/kg and Nocellara d'Italia at 400 mg/kg. Coratina is naturally one of the most polyphenol-rich olive varieties in the world, which is why we present it as the peak of the range.",
  },
  {
    question: "Do polyphenols affect taste?",
    answer:
      "Yes, directly. Polyphenols are responsible for the pepper, bitterness and green pungency of fresh olive oil — the peppery catch at the back of your throat largely comes from oleocanthal. A high-polyphenol oil like Coratina tastes bold and bitter; a gentler one like Nocellara is softer but still genuinely high-polyphenol.",
  },
  {
    question: "How are high polyphenols preserved?",
    answer:
      "Three things: early harvest (olives picked young and green, when polyphenols peak), single-variety pressing within hours of picking, and bottling fresh from the latest harvest. Polyphenols degrade with heat, light, oxygen and age, so we press cold and ship soon after harvest. Store the bottle away from light and heat and use it within a few months of opening.",
  },
  {
    question: "Is high-polyphenol olive oil organic?",
    answer:
      "Our Coratina is certified organic. For the others, certification is not our primary lens — we prioritise low-intervention farming, early harvest and lab-verified quality, and hold every oil to the same standard whether or not it carries an organic label.",
  },
];

// The three products, ranked by polyphenol content (descending). Prices are the
// default-locale (EUR) figures; image URLs match the product-page meta.
export interface HubProduct {
  name: string;
  url: string;
  image: string;
  priceEUR: number;
  polyphenols: number;
}

export const HIGH_POLYPHENOL_PRODUCTS: HubProduct[] = [
  {
    name: "ATTIMO Coratina d'Italia Extra Virgin Olive Oil 500ml",
    url: "https://attimo-oil.com/product/coratina",
    image: "https://cdn.shopify.com/s/files/1/0949/7867/0975/files/Coratina-2_1_1.png?v=1773399330",
    priceEUR: 24,
    polyphenols: 847,
  },
  {
    name: "ATTIMO Picual de España Extra Virgin Olive Oil 500ml",
    url: "https://attimo-oil.com/product/picual",
    image: "https://cdn.shopify.com/s/files/1/0949/7867/0975/files/Picual-v21.png?v=1773401549",
    priceEUR: 22,
    polyphenols: 675,
  },
  {
    name: "ATTIMO Nocellara d'Italia Extra Virgin Olive Oil 500ml",
    url: "https://attimo-oil.com/product/nocellara",
    image: "https://cdn.shopify.com/s/files/1/0949/7867/0975/files/NOCELLARA1_1.png?v=1772735243",
    priceEUR: 23,
    polyphenols: 400,
  },
];
