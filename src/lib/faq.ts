// Extract question/answer pairs from a post body so blog pages can emit
// FAQPage structured data.
//
// Posts write their FAQ in one of two shapes, and both are in use:
//   1. an `h3` question followed by one or more `normal` answer blocks
//   2. a single `normal` block whose leading `strong` span is the question and
//      whose remaining spans are the answer
// The section is delimited by an `h2` whose text matches FAQ_HEADING (the
// heading is localised per market) and ends at the next `h2`.

type Span = { text: string; marks?: string[] };
type Block = { _type: string; style?: string; children?: Span[] };

export type FaqEntry = { q: string; a: string };

const FAQ_HEADING =
  /^(faq\b|frequently asked|häufig|questions fréquentes|vanliga frågor|ofte stillede|preguntas)/i;

const txt = (b: Block) => (b.children || []).map((s) => s.text).join("").trim();

export function extractFaq(body: unknown): FaqEntry[] {
  if (!Array.isArray(body)) return [];
  const blocks = body as Block[];
  const start = blocks.findIndex(
    (b) => b._type === "block" && b.style === "h2" && FAQ_HEADING.test(txt(b))
  );
  if (start < 0) return [];

  const out: FaqEntry[] = [];
  let cur: FaqEntry | null = null;
  const flush = () => {
    if (cur && cur.q && cur.a) out.push({ q: cur.q, a: cur.a.trim() });
    cur = null;
  };

  for (let i = start + 1; i < blocks.length; i++) {
    const b = blocks[i];
    if (b._type !== "block") continue;
    if (b.style === "h2") break;
    if (b.style === "h3") { flush(); cur = { q: txt(b), a: "" }; continue; }
    if (b.style !== "normal") continue;

    const kids = b.children || [];
    if (kids.length && (kids[0].marks || []).includes("strong")) {
      let q = "", a = "", inQ = true;
      for (const s of kids) {
        const strong = (s.marks || []).includes("strong");
        if (inQ && strong) q += s.text;
        else { inQ = false; a += s.text; }
      }
      flush();
      cur = { q: q.trim().replace(/\s+/g, " "), a: a.trim() };
      continue;
    }
    if (cur) cur.a += (cur.a ? " " : "") + txt(b);
  }
  flush();

  // A question mark is the cheapest guard against picking up a bolded
  // statement that merely opens a paragraph.
  return out.filter((f) => f.q && f.a && /\?|？/.test(f.q));
}

// Google requires at least two entries before it treats a page as an FAQ.
export function faqJsonLd(body: unknown): Record<string, unknown> | null {
  const faq = extractFaq(body);
  if (faq.length < 2) return null;
  return {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
