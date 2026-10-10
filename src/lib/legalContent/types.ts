// Legal pages (privacy, terms) as data, one document per language. Inline
// text accepts **bold** and [label](href) only; everything else is plain.
export type LegalBlock =
  | { kind: "p"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "address"; lines: string[] };
export type LegalSection = { h2: string; blocks: LegalBlock[] };
export type LegalDoc = {
  lang: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  updated: string; // "Last updated: March 2026"
  sections: LegalSection[];
};
