import trioImg from "./trio.png?url";

/* ────────────────────────────────────────────────────────────────────────
   SANDBOX — bundle highlight shown below the featured-oil selector.
   Light (cream) section pitching all three bottles as a set.
   The trio visual is a PLACEHOLDER composed from the three bottle cut-outs —
   swap `.bn-trio` for the real trio photograph when it's ready.
   Prices are the real per-bottle prices; the bundle price/saving is a
   placeholder (// TODO) to be set once the offer is decided.
   ──────────────────────────────────────────────────────────────────────── */

const GREEN = "#1B4229";
const ACCENT = "#CDDB2D";

const VARIETIES = [
  { name: "Coratina d'Italia", flavour: "Bold & Punchy" },
  { name: "Picual de España", flavour: "Green & Grassy" },
  { name: "Nocellara d'Italia", flavour: "Gentle & Fruity" },
];

function Olive() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <ellipse cx="12" cy="13.5" rx="6.5" ry="8.5" fill={GREEN} />
      <path d="M12 5.5 C 13.5 3, 16 2.5, 17.5 3.5 C 16 5, 13.5 5.5, 12 5.5 Z" fill={GREEN} />
    </svg>
  );
}

export default function BundleSection() {
  return (
    <section className="bn-section">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="bn-inner">
        <div className="bn-visual">
          <img
            src={trioImg}
            alt="The three Attimo single-variety olive oils on a sunlit table"
            className="bn-photo"
          />
        </div>

        <div className="bn-content">
          <p className="bn-kicker" style={{ fontFamily: "UDC Working Man Sans, sans-serif" }}>
            THE FULL COLLECTION
          </p>
          <h2 className="bn-title" style={{ fontFamily: "Beverly Drive, serif" }}>
            Can't pick just one?
          </h2>
          <p className="bn-body" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Take all three. One bottle of each single variety — the whole range
            on your shelf, and the easiest way to find your favourite.
          </p>

          <ul className="bn-list">
            {VARIETIES.map((v) => (
              <li key={v.name} className="bn-list-item">
                <Olive />
                <span style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  <strong>{v.name}</strong> · {v.flavour}
                </span>
              </li>
            ))}
          </ul>

          <div className="bn-buy">
            <div className="bn-price">
              <span className="bn-price-row" style={{ fontFamily: "UDC Working Man Sans, sans-serif" }}>
                <span className="bn-price-amount">€63</span>
                <span className="bn-price-was">€69</span>
              </span>
              <span className="bn-price-note" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                one of each · save €6 with the trio
              </span>
            </div>
            <a className="bn-cta" href="#" style={{ fontFamily: "UDC Working Man Sans, sans-serif" }}>
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const CSS = `
.bn-section {
  background-color: #FFFAEA;
  color: ${GREEN};
  padding: clamp(4rem, 9vh, 7rem) 1.5rem;
  zoom: 1 !important;
}
.bn-inner {
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr; align-items: center;
  gap: clamp(2.5rem, 5vw, 5rem);
}

/* ── trio photo ─────────────────────────────────────────────────────── */
.bn-visual { display: flex; justify-content: center; }
.bn-photo {
  width: 100%; max-width: 540px; display: block;
  aspect-ratio: 4 / 5; object-fit: cover;
  border-radius: 1.25rem;
  box-shadow: 0 22px 44px rgba(27, 66, 41, 0.20);
}

/* ── content ────────────────────────────────────────────────────────── */
.bn-kicker { margin: 0 0 0.6rem; letter-spacing: 0.2em; font-size: 0.85rem; opacity: 0.55; }
.bn-title {
  margin: 0 0 1.1rem; color: inherit; letter-spacing: 0.03em; line-height: 1.02;
  font-size: clamp(2.4rem, 4.8vw, 4rem);
}
.bn-body {
  margin: 0 0 1.75rem; font-size: clamp(1.05rem, 1.4vw, 1.25rem);
  line-height: 1.6; opacity: 0.8; max-width: 34rem;
}
.bn-list { list-style: none; margin: 0 0 2rem; padding: 0; display: flex; flex-direction: column; gap: 0.7rem; }
.bn-list-item { display: flex; align-items: center; gap: 0.7rem; font-size: 1.05rem; }
.bn-list-item strong { font-weight: 600; }

.bn-buy { display: flex; align-items: center; gap: 1.75rem; flex-wrap: wrap; }
.bn-price { display: flex; flex-direction: column; }
.bn-price-row { display: inline-flex; align-items: baseline; gap: 0.6rem; }
.bn-price-amount { font-size: 2rem; letter-spacing: 0.03em; line-height: 1; }
.bn-price-was { font-size: 1.2rem; opacity: 0.45; text-decoration: line-through; }
.bn-price-note { font-size: 0.95rem; opacity: 0.6; margin-top: 0.3rem; }
.bn-cta {
  display: inline-block; text-decoration: none;
  background-color: ${ACCENT}; color: ${GREEN};
  padding: 1rem 2.75rem; border-radius: 0.5rem;
  letter-spacing: 0.08em; font-size: 1.25rem;
  transition: transform 0.2s ease;
}
.bn-cta:hover { transform: scale(1.04); }

/* ── desktop: image left, content right ─────────────────────────────── */
@media (min-width: 768px) {
  .bn-inner { grid-template-columns: 1.05fr 1fr; }
}
`;
