// Tint behind the blog post hero, index tiles and the TL;DR panel.
export const BLOG_TINT = "var(--blog-tint, #EFEEDA)";

// Blog categories: key stored on each Sanity post, label per language.
export const BLOG_CATEGORY_KEYS = ["health", "quality", "kitchen", "stories"] as const;
export const BLOG_CATEGORIES: Record<string, Record<string, string>> = {
  en: { all: "All", health: "Health", quality: "Quality", kitchen: "Kitchen", stories: "Stories" },
  de: { all: "Alle", health: "Gesundheit", quality: "Qualität", kitchen: "Küche", stories: "Geschichten" },
  fr: { all: "Tout", health: "Santé", quality: "Qualité", kitchen: "Cuisine", stories: "Histoires" },
  nl: { all: "Alles", health: "Gezondheid", quality: "Kwaliteit", kitchen: "Keuken", stories: "Verhalen" },
  da: { all: "Alle", health: "Sundhed", quality: "Kvalitet", kitchen: "Køkken", stories: "Historier" },
  sv: { all: "Alla", health: "Hälsa", quality: "Kvalitet", kitchen: "Kök", stories: "Berättelser" },
};
