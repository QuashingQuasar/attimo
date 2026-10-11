/* ────────────────────────────────────────────────────────────────────────
   SANDBOX — quiz nudge between the selector and the bundle. Mirrors the live
   homepage's "Not sure which olive oil is for you?" prompt + quiz CTA, so the
   flow reads: here are the oils → not sure? take the quiz → or just get all three.
   ──────────────────────────────────────────────────────────────────────── */

const GREEN = "#1B4229";
const ACCENT = "#CDDB2D";
const CREAM = "#FFFAEA";

export default function QuizNudge() {
  return (
    <section className="qn-section">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="qn-inner">
        <p className="qn-prompt" style={{ fontFamily: "UDC Working Man Sans, sans-serif" }}>
          Not sure which olive oil is for you?
        </p>
        <a className="qn-cta" href="/quiz" style={{ fontFamily: "UDC Working Man Sans, sans-serif" }}>
          Find Your Flavour →
        </a>
      </div>
    </section>
  );
}

const CSS = `
.qn-section {
  /* bg + text are synced in JS to the ACTIVE selector theme (so it flows
     seamlessly from the selector above); a hairline keeps them distinct.
     Defaults below are only used before the first sync. */
  background-color: ${GREEN};
  color: ${CREAM};
  padding: clamp(3rem, 7vh, 5rem) 1.5rem;
  position: relative; overflow: hidden;
  zoom: 1 !important;
  transition: background-color 0.45s ease, color 0.45s ease;
}
/* subtle, inset dashed line separating the bar from the selector above */
.qn-section::before {
  content: ""; position: absolute; top: 0; left: 50%; transform: translateX(-50%);
  width: min(100% - 3rem, 1120px); height: 0;
  border-top: 3px dashed currentColor; opacity: 0.3;
}
.qn-inner {
  position: relative; z-index: 1; max-width: 1100px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between; gap: 2rem;
}
.qn-prompt {
  margin: 0; opacity: 0.9; letter-spacing: 0.02em;
  font-size: clamp(1.3rem, 2vw, 2rem); line-height: 1.25;
}
@media (max-width: 700px) {
  .qn-inner { flex-direction: column; text-align: center; gap: 1.5rem; }
}
/* stroke-only (outline) — a secondary action, not a second filled CTA above
   the bundle's "Add to cart" */
.qn-cta {
  display: inline-flex; align-items: center; gap: 0.6rem; text-decoration: none;
  background-color: transparent; color: var(--qn-fg, ${CREAM});
  border: 2px solid var(--qn-fg, ${CREAM});
  padding: 0.85rem 2.5rem; border-radius: 0.5rem;
  letter-spacing: 0.06em; font-size: clamp(1.1rem, 1.5vw, 1.5rem);
  transition: background-color 0.2s ease, color 0.2s ease;
}
.qn-cta:hover { background-color: var(--qn-fg, ${CREAM}); color: var(--qn-bg, ${GREEN}); }
`;
