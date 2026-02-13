// Product-specific content configuration keyed by Shopify handle

export interface ProductContent {
  // Hero section
  heroTitle: string;
  heroSubtitle: string;
  benefits: string[];
  benefitTooltip: string;
  labReportUrl: string;
  sourceLine: string;
  labelDisclosure: string;

  // Lab tiles in hero
  labTiles: Array<{
    key: string;
    label: string;
    value: string;
    unit: string;
    avg: string;
    description: string;
  }>;

  // Info tabs
  tabs: {
    details: {
      origin: string;
      olive: string;
      flavor: string;
      store: string;
      volume: string;
    };
    flavorProfile: Array<{ label: string; rating: number }>;
    harvest: string;
    uses: string;
    usesExtra?: string;
  };

  // Origin Story section
  originStory: {
    headline: string;
    quickRef: Array<{ label: string; value: string }>;
    features: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };

  // Lab Trust section
  labTrust: {
    heading: string;
    subheading: string;
    values: Array<{
      label: string;
      value: string;
      unit: string;
      standard: string;
      description: string;
    }>;
  };

  // Polyphenol comparison
  polyphenolValue: number;
  polyphenolLabel: string;
}

export const productContentMap: Record<string, ProductContent> = {
  "galega-from-alentejo": {
    heroTitle: "GALEGA FROM ALENTEJO",
    heroSubtitle: "High-Polyphenol Extra Virgin Olive Oil",
    benefits: [
      "5x more antioxidant polyphenols than average EVOO",
      "Third-party lab tested for quality and purity",
      "Directly sourced from a small family farm in Alentejo, Portugal",
    ],
    benefitTooltip:
      "Polyphenols are natural compounds in olive oil that provide the health benefits you've heard about—anti-inflammatory properties, heart health support, and antioxidant protection.",
    labReportUrl: "/lab/Coratina2025.pdf",
    sourceLine: "Directly sourced from a small family farm in Alentejo, Portugal",
    labelDisclosure:
      "The bottle shown features our upcoming ATTIMO brand label. Your 2024/25 harvest oil will arrive under the original producer's label, containing the same superior category olive oil with lab-verified values.",
    labTiles: [
      { key: "polyphenols", label: "POLYPHENOLS", value: "904", unit: "mg/kg", avg: "avg. ~180mg/kg", description: "antioxidants that give EVOO its special health benefits" },
      { key: "oleic-acid", label: "OLEIC ACID", value: "74.9%", unit: "", avg: "avg. ~67%", description: "healthy fats that protect the oil and your health, higher = better" },
      { key: "peroxides", label: "PEROXIDES", value: "6.3", unit: "meq/kg", avg: "avg. ~20meq/kg", description: "lower = fresher oil, less oxidation and longer shelf life" },
      { key: "acidity", label: "ACIDITY", value: "0.16%", unit: "", avg: "avg. ~0.8%", description: "lower = fresher olives and higher quality" },
    ],
    tabs: {
      details: {
        origin: "Alentejo, Portugal",
        olive: "Galega",
        flavor: "green & grassy",
        store: "keep away from light and heat",
        volume: "500ml",
      },
      flavorProfile: [
        { label: "PEPPERY", rating: 4 },
        { label: "FRUITY", rating: 5 },
        { label: "BITTER", rating: 4 },
        { label: "HERBAL", rating: 3 },
      ],
      harvest:
        "Hand-picked in October 2024 during the optimal harvest window. The olives were processed within 4 hours of harvest using traditional stone mills, preserving maximum antioxidants and flavor compounds. This early harvest ensures the highest polyphenol content.",
      uses: "Best used as a finishing touch; drizzle over food to add a vibrant pop of flavor.",
      usesExtra:
        "You can cook with it too — extra virgin olive oil is one of the healthiest oils for cooking — but heat diminishes its special antioxidant properties and so it's best saved for last.",
    },
    originStory: {
      headline:
        "Galega from Alentejo is 100% Extra Virgin, high in polyphenols — crafted with the purpose to bring you olive oil with powerful antioxidants known for their health benefits. Perfect for anyone looking to give their health a boost.",
      quickRef: [
        { label: "VARIETY", value: "100% Galega" },
        { label: "ORIGIN", value: "Alentejo, Portugal" },
        { label: "FLAVOR", value: "Intense & Peppery" },
        { label: "USE", value: "drizzle over fresh foods" },
        { label: "STORE", value: "away from light and heat" },
      ],
      features: [
        {
          title: "Intense & Peppery",
          description: "Its high polyphenol content gives the olive oil an intense, peppery kick — a sign of real, fresh EVOO.",
          icon: "/icons/mortar.svg",
        },
        {
          title: "Early Harvest",
          description: "Harvested in October when the olives are green, hard, and very high in polyphenols.",
          icon: "/icons/branch-2.svg",
        },
        {
          title: "Galega Olives",
          description: "A Portuguese variety known for its delicate, grassy flavour and exceptional polyphenol content.",
          icon: "/icons/olive.svg",
        },
      ],
    },
    labTrust: {
      heading: "You deserve food you can trust — and trace.",
      subheading:
        "That's why we third-party lab-test every batch of our olive oil on key quality markers and share the results with you.",
      values: [
        { label: "Polyphenols", value: "904", unit: "mg/kg", standard: "standard: ≈ 180 mg/kg", description: "Natural antioxidants that give olive oil its health benefits." },
        { label: "Acidity", value: "0.16", unit: "%", standard: "standard: < 0.8%", description: "Lower acidity means fresher olives and higher quality." },
        { label: "Peroxides", value: "6.3", unit: "meq/kg", standard: "standard: < 20 meq/kg", description: "Shows how fresh the oil is. Low peroxide = less oxidation and longer shelf life." },
        { label: "Oleic Acid", value: "74.9", unit: "%", standard: "standard: ~67%", description: "A healthy fat that protects the oil and supports heart health. The higher, the better." },
      ],
    },
    polyphenolValue: 904,
    polyphenolLabel: "Galega",
  },

  nocellara: {
    heroTitle: "NOCELLARA D'ITALIA",
    heroSubtitle: "Specialty Extra Virgin Olive Oil",
    benefits: [
      "100% Nocellara olives harvested early and cold-pressed within hours",
      "Third-party lab tested for quality and purity",
      "Directly sourced from a small family grove in Italy",
    ],
    benefitTooltip:
      "Polyphenols are natural compounds in olive oil that provide the health benefits you've heard about—anti-inflammatory properties, heart health support, and antioxidant protection.",
    labReportUrl: "/lab/Nocellara2025.pdf",
    sourceLine: "Directly sourced from a small family grove in Italy",
    labelDisclosure:
      "The bottle shown features our upcoming ATTIMO brand label. Your 2024/25 harvest oil will arrive under the original producer's label, containing the same superior quality oil.",
    labTiles: [
      { key: "polyphenols", label: "POLYPHENOLS", value: "400", unit: "mg/kg", avg: "avg. ~180mg/kg", description: "antioxidants that give EVOO its special health benefits" },
      { key: "oleocanthal", label: "OLEOCANTHAL", value: "137", unit: "mg/kg", avg: "", description: "a powerful natural anti-inflammatory found in quality EVOO" },
      { key: "oleacin", label: "OLEACIN", value: "209", unit: "mg/kg", avg: "", description: "a potent antioxidant linked to heart health and longevity" },
      { key: "acidity", label: "ACIDITY", value: "0.21%", unit: "", avg: "avg. ~0.8%", description: "lower = fresher olives and higher quality" },
    ],
    tabs: {
      details: {
        origin: "Italy",
        olive: "Nocellara",
        flavor: "gentle & fruity",
        store: "keep away from light and heat",
        volume: "500ml",
      },
      flavorProfile: [
        { label: "FRUITY", rating: 5 },
        { label: "NUTTY", rating: 4 },
        { label: "BUTTERY", rating: 4 },
        { label: "PEPPERY", rating: 2 },
      ],
      harvest:
        "The olives are picked early in October when they're young, green and packed with polyphenols that boost taste and health. Cold-extracted within hours of harvest to preserve the oil's distinctive gentle, fruity character.",
      uses: "Good on everything — drizzle over fresh foods to add a gentle pop of flavor.",
      usesExtra:
        "Perfect for pasta, enrich eggs, finish seafood, dress leafy greens — and try it on ice cream.",
    },
    originStory: {
      headline:
        "Nocellara d'Italia is 100% Extra Virgin, single-variety — a generous olive with notes of fresh almond and green banana. Its oil has a velvety texture and round finish, perfect for all-round use.",
      quickRef: [
        { label: "VARIETY", value: "100% Nocellara" },
        { label: "ORIGIN", value: "Italy" },
        { label: "FLAVOR", value: "Gentle & Fruity" },
        { label: "USE", value: "drizzle over fresh foods" },
        { label: "STORE", value: "away from light and heat" },
      ],
      features: [
        {
          title: "Gentle & Fruity",
          description: "Notes of fresh almond and green banana with a velvety texture and round finish. Perfect for all-round use.",
          icon: "/icons/bread-2.svg",
        },
        {
          title: "Early Harvest",
          description: "Picked early in October when the olives are young, green and packed with polyphenols that boost taste and health.",
          icon: "/icons/branch-2.svg",
        },
        {
          title: "Nocellara Olives",
          description: "A generous Italian olive variety known for its rich oil content and exceptionally smooth, fruity character.",
          icon: "/icons/olive.svg",
        },
      ],
    },
    labTrust: {
      heading: "You deserve food you can trust — and trace.",
      subheading:
        "That's why we third-party lab-test every batch of our olive oil on key quality markers and share the results with you.",
      values: [
        { label: "Polyphenols", value: "400", unit: "mg/kg", standard: "standard: ≈ 180 mg/kg", description: "Natural antioxidants that give olive oil its health benefits." },
        { label: "Oleocanthal", value: "137", unit: "mg/kg", standard: "values at time of production", description: "A powerful natural anti-inflammatory compound found in quality extra virgin olive oil." },
        { label: "Oleacin", value: "209", unit: "mg/kg", standard: "values at time of production", description: "A potent antioxidant linked to heart health and longevity." },
        { label: "Acidity", value: "0.21", unit: "%", standard: "standard: < 0.8%", description: "Lower acidity means fresher olives and higher quality." },
      ],
    },
    polyphenolValue: 400,
    polyphenolLabel: "Nocellara",
  },
};

// Default to galega if handle not found
export function getProductContent(handle: string | undefined): ProductContent {
  if (!handle) return productContentMap["galega-from-alentejo"];
  return productContentMap[handle] || productContentMap["galega-from-alentejo"];
}
