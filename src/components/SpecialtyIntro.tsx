import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";
import coratina from "@/assets/bottle-2627-coratina.png?url";

// "What is specialty olive oil" band, right after the hero. Brought over from
// the June homepage redesign (lab sandbox _SpecialtyIntro): four value props,
// two each side of a centre lane. The June version's lane held a bottle that
// travelled on scroll; here it holds a static 26/27 bottle.
// "Single Variety" became "High-Polyphenol Varieties" (blends will come).
const GREEN = "#1B4229";
const ACCENT = "#CDDB2D";
const ICONS = {
  fresh: "/icons/basket-2.svg",
  early: "/icons/branch-2.svg",
  varieties: "/icons/olive.svg",
  lab: "/icons/flask.svg",
} as const;

export const SpecialtyIntro = ({ locale = DEFAULT_LOCALE }: { locale?: Locale }) => {
  const s = getDict(locale).specialty;
  const props = (["fresh", "early", "varieties", "lab"] as const).map((k) => ({ key: k, icon: ICONS[k], ...s.props[k] }));
  return (
    <section className="si-section snap-start" aria-labelledby="specialty-title">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="si-inner">
        <header className="si-head">
          <h2 id="specialty-title" className="si-title">{s.title}</h2>
          <p className="si-subtitle">{s.subtitle}</p>
        </header>
        <div className="si-grid">
          {props.map((p) => (
            <div className="si-item" key={p.key}>
              <div className="si-badge">
                <span className="si-icon" role="img" aria-label={p.label} style={{ WebkitMaskImage: `url(${p.icon})`, maskImage: `url(${p.icon})` }} />
              </div>
              <h3 className="si-label">{p.label}</h3>
              <p className="si-body si-body--d">{p.body}</p>
              <p className="si-body si-body--m">{p.mobileBody}</p>
            </div>
          ))}
          <div className="si-lane" aria-hidden="true">
            <img src={coratina} alt="" className="si-bottle" />
          </div>
        </div>
      </div>
    </section>
  );
};

const CSS = `
.si-section { background-color: #FFFAEA; color: ${GREEN}; padding: 0 1.5rem; }
.si-inner { max-width: 1280px; margin: 0 auto; width: 100%; box-sizing: border-box; padding: clamp(4.5rem, 9vw, 7rem) 0 clamp(3rem, 6vw, 5rem); }
.si-head { text-align: center; margin: 0 0 clamp(2.5rem, 5vw, 4rem); }
.si-title {
  margin: 0; font-family: 'UDC Working Man Sans', sans-serif; font-weight: 300;
  font-size: clamp(2.3rem, 4.4vw, 4.4rem); line-height: 1.02; letter-spacing: -.025em; color: inherit;
}
.si-subtitle {
  margin: 1.25rem auto 0; font-family: 'Space Grotesk', sans-serif; color: rgba(27,66,41,.78);
  font-size: clamp(1.05rem, 1.3vw, 1.3rem); line-height: 1.6; text-wrap: balance;
}
.si-grid {
  display: grid;
  grid-template-columns: 1fr 1fr clamp(240px, 24vw, 360px) 1fr 1fr;
  align-items: center; column-gap: 2.5rem; row-gap: 2rem;
}
.si-item { display: flex; flex-direction: column; align-items: center; text-align: center; grid-row: 1; }
.si-item:nth-child(1) { grid-column: 1; }
.si-item:nth-child(2) { grid-column: 2; }
.si-item:nth-child(3) { grid-column: 4; }
.si-item:nth-child(4) { grid-column: 5; }
.si-lane { grid-column: 3; grid-row: 1; display: flex; justify-content: center; align-items: center; }
.si-bottle { height: clamp(300px, 32vw, 460px); width: auto; filter: drop-shadow(0 22px 26px rgba(16,34,27,.22)); }
.si-badge {
  width: 120px; height: 120px; border-radius: 50%;
  background-color: ${ACCENT}; border: 2px solid ${GREEN}; box-shadow: 5px 6px 0 0 ${GREEN};
  display: flex; align-items: center; justify-content: center; margin-bottom: 1.75rem;
}
.si-icon {
  display: block; width: 60px; height: 60px; background-color: ${GREEN};
  -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat;
  -webkit-mask-position: center; mask-position: center;
  -webkit-mask-size: contain; mask-size: contain;
}
.si-label {
  margin: 0 0 .7rem; font-family: 'UDC Working Man Sans', sans-serif; font-weight: 700;
  letter-spacing: .1em; text-transform: uppercase; font-size: 1.2rem; color: inherit;
}
.si-body { margin: 0; font-family: 'Space Grotesk', sans-serif; font-size: 1.05rem; line-height: 1.55; color: rgba(27,66,41,.78); max-width: 18rem; }
.si-body--m { display: none; }

/* Tablet and phone: bottle on the left, the four props stacked on the right. */
@media (max-width: 1100px) {
  .si-body--d { display: none; }
  .si-body--m { display: block; }
  .si-grid {
    grid-template-columns: 40% 1fr; grid-template-rows: repeat(4, auto);
    column-gap: 1rem; row-gap: 1.75rem; max-width: 560px; margin: 0 auto;
  }
  .si-item { align-items: flex-start; text-align: left; }
  .si-item:nth-child(1) { grid-column: 2; grid-row: 1; }
  .si-item:nth-child(2) { grid-column: 2; grid-row: 2; }
  .si-item:nth-child(3) { grid-column: 2; grid-row: 3; }
  .si-item:nth-child(4) { grid-column: 2; grid-row: 4; }
  .si-lane { grid-column: 1; grid-row: 1 / -1; }
  .si-bottle { height: auto; width: 100%; max-width: 150px; }
  .si-badge { width: 60px; height: 60px; box-shadow: 4px 4px 0 0 ${GREEN}; margin-bottom: .6rem; }
  .si-icon { width: 30px; height: 30px; }
  .si-label { font-size: 1rem; margin-bottom: .4rem; }
  .si-body { font-size: .95rem; line-height: 1.45; max-width: none; }
}
`;
