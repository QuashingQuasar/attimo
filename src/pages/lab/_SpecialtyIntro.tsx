/* ────────────────────────────────────────────────────────────────────────
   SANDBOX — intro band shown between the hero and the featured-oil selector
   on the homepage-context lab page. Big decorative header + 4 value props
   arranged 2-left / 2-right around a clear CENTER LANE, so the scroll-
   travelling bottle (see _FeaturedOilHome) glides through the middle without
   ever covering the value-prop copy.
   ──────────────────────────────────────────────────────────────────────── */

const GREEN = "#1B4229";
const ACCENT = "#CDDB2D";

// All four value props in one editable array (rendered left,left,right,right).
const VALUE_PROPS = [
  {
    label: "Always Fresh",
    body: "Olive oil only from the latest harvest because, unlike wine, it doesn't get better with age.",
    mobileBody: "Olive oil only ever from the last harvest.",
    icon: "/icons/basket-2.svg",
  },
  {
    label: "Early Harvest",
    body: "Pressed from olives that were picked when they're still green and peaking in polyphenols.",
    mobileBody: "When olives are highest in healthy polyphenols.",
    icon: "/icons/branch-2.svg",
  },
  {
    label: "Single Variety",
    body: "One variety so every bottle is a pure expression of the cultivar and its terroir.",
    mobileBody: "Pure expression of cultivar and terroir.",
    icon: "/icons/olive.svg",
  },
  {
    label: "Lab Tested",
    body: "We publish lab analyses for every batch so you can verify quality yourself.",
    mobileBody: "Verifiable lab analysis for every batch.",
    icon: "/icons/flask.svg",
  },
];

export default function SpecialtyIntro() {
  return (
    <section className="si-section">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="si-inner">
        <header className="si-head">
          <h2 className="si-title" style={{ fontFamily: "Beverly Drive, serif" }}>
            Specialty Olive Oils
          </h2>
          <p className="si-subtitle" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Single-variety olives harvested early and cold-pressed within hours for
            maximum flavour and health benefits.
          </p>
        </header>

        <div className="si-grid">
          {VALUE_PROPS.map((vp) => (
            <div className="si-item" key={vp.label}>
              <div className="si-badge">
                <span
                  className="si-icon"
                  role="img"
                  aria-label={vp.label}
                  style={{
                    WebkitMaskImage: `url(${vp.icon})`,
                    maskImage: `url(${vp.icon})`,
                  }}
                />
              </div>
              <h3
                className="si-label"
                style={{ fontFamily: "UDC Working Man Sans, sans-serif" }}
              >
                {vp.label}
              </h3>
              <p className="si-body si-body--d" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {vp.body}
              </p>
              <p className="si-body si-body--m" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {vp.mobileBody}
              </p>
            </div>
          ))}
          {/* invisible anchor: where the travelling bottle rests between the
              prop pairs before it starts sliding into the selector */}
          <div className="si-lane" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

const CSS = `
.si-section {
  background-color: #FFFAEA;
  color: ${GREEN};
  padding: 0 1.5rem;
  /* trimmed (was 100vh) so the green section sits closer under the bottle */
  min-height: 64vh;
  /* exempt from the global section zoom (global.css) so vh units are true */
  zoom: 1 !important;
}
.si-inner {
  max-width: 1280px; margin: 0 auto; width: 100%;
  min-height: 64vh; box-sizing: border-box;
  display: grid; grid-template-rows: auto 1fr;
  /* a touch more breathing room above the header (from the hero) than below */
  padding: clamp(4.5rem, 9vh, 7rem) 0 clamp(2.25rem, 4.5vh, 4rem);
}

.si-head { text-align: center; margin: 0; }
.si-title {
  margin: 0; letter-spacing: 0.03em; line-height: 1.02; color: inherit;
  font-size: clamp(2.6rem, 6vw, 5rem);
}
/* subtitle matches the homepage product-section subtitle styling */
.si-subtitle {
  margin: 1.25rem auto 0; max-width: 800px; color: inherit; opacity: 0.5;
  font-size: clamp(1.4rem, 1.8vw, 1.8rem); line-height: 1.7;
}

/* value props flank a clear centre lane for the travelling bottle */
.si-grid {
  display: grid;
  grid-template-columns: 1fr 1fr clamp(320px, 30vw, 500px) 1fr 1fr;
  align-content: center; align-items: center; /* centre props against the bottle */
  column-gap: 2.5rem; row-gap: 2rem;
}
.si-item { display: flex; flex-direction: column; align-items: center; text-align: center; }
.si-item:nth-child(1) { grid-column: 1; }
.si-item:nth-child(2) { grid-column: 2; }
.si-item:nth-child(3) { grid-column: 4; }
.si-item:nth-child(4) { grid-column: 5; }
.si-lane {
  grid-column: 3; grid-row: 1; align-self: center; justify-self: center;
  width: clamp(405px, 40.5vw, 620px); aspect-ratio: 1 / 1; pointer-events: none;
}

.si-badge {
  width: 120px; height: 120px; border-radius: 50%;
  background-color: ${ACCENT};
  border: 2px solid ${GREEN};
  box-shadow: 5px 6px 0 0 ${GREEN};
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1.75rem;
}
.si-icon {
  display: block; width: 60px; height: 60px;
  background-color: ${GREEN};
  -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat;
  -webkit-mask-position: center; mask-position: center;
  -webkit-mask-size: contain; mask-size: contain;
}
.si-label {
  margin: 0 0 0.7rem; letter-spacing: 0.1em; text-transform: uppercase;
  font-size: 1.2rem; color: inherit;
}
.si-body {
  margin: 0; font-size: 1.05rem; line-height: 1.55; opacity: 0.75;
  max-width: 18rem;
}

/* desktop shows long copy; mobile shows the short copy */
.si-body--m { display: none; }

/* mobile/tablet: 2×2 value-prop grid; bottle parks mostly off-frame on the
   right (like the reference) so it doesn't sit on the copy. */
@media (max-width: 1100px) {
  /* content-height so there's no dead space below the grid */
  .si-section { position: relative; min-height: auto; }
  .si-inner { min-height: auto; }
  .si-body--d { display: none; }
  .si-body--m { display: block; }
  .si-subtitle { font-size: clamp(1.05rem, 2.6vw, 1.4rem); line-height: 1.5; max-width: 90%; }

  /* mobile: bottle parked on the LEFT, 4 value props stacked on the right
     (4×1). Separate columns → no overlap. The bottle slides from here down
     into the selector as you scroll. */
  .si-grid {
    grid-template-columns: 40% 1fr;
    grid-template-rows: repeat(4, auto);
    column-gap: 1rem; row-gap: 1.75rem;
    align-items: center; max-width: 560px; margin: 2.75rem auto 0;
  }
  .si-item { align-items: flex-start; text-align: left; }
  .si-item:nth-child(1) { grid-column: 2; grid-row: 1; }
  .si-item:nth-child(2) { grid-column: 2; grid-row: 2; }
  .si-item:nth-child(3) { grid-column: 2; grid-row: 3; }
  .si-item:nth-child(4) { grid-column: 2; grid-row: 4; }
  .si-badge { width: 60px; height: 60px; box-shadow: 4px 4px 0 0 ${GREEN}; margin-bottom: 0.6rem; }
  .si-icon { width: 30px; height: 30px; }
  .si-label { font-size: 1rem; margin-bottom: 0.4rem; }
  .si-body { font-size: 0.95rem; line-height: 1.45; max-width: none; }

  .si-lane {
    display: block; position: static; transform: none;
    grid-column: 1; grid-row: 1 / -1;
    justify-self: center; align-self: center;
    width: 100%; max-width: 230px; aspect-ratio: 1 / 1; margin: 0;
  }
}
@media (max-width: 560px) {
  .si-title { font-size: clamp(2.2rem, 9vw, 3rem); }
}
`;
