import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";

interface ValuePropMarqueeProps {
  locale?: Locale;
  /**
   * Positioning class. Defaults to the hero treatment (pinned to the bottom of
   * a `relative` parent). Pass `"static"` to render it inline in normal flow.
   */
  variant?: "absolute" | "static";
}

/**
 * The chartreuse scrolling value-prop ticker (LAB-TESTED · EARLY HARVEST ·
 * SINGLE VARIETY …). Extracted from the homepage Hero so the same marquee can
 * be reused on other heroes (e.g. the high-polyphenol category hub) without
 * duplicating the markup. Badge copy comes from the shared dictionary.
 */
export const ValuePropMarquee = ({ locale = DEFAULT_LOCALE, variant = "absolute" }: ValuePropMarqueeProps = {}) => {
  const t = getDict(locale);
  const positionClass =
    variant === "absolute"
      ? "absolute bottom-0 left-0 right-0 z-40 border-t border-olive-dark/10"
      : "relative w-full border-y border-olive-dark/10";

  return (
    <div className={`${positionClass} bg-accent py-3 lg:py-2 overflow-hidden`}>
      <div className="flex hero-ticker-marquee" style={{ width: "max-content" }}>
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="flex items-center whitespace-nowrap">
              {[
                { text: t.hero.badges[0], icon: "/icons/branch-2.svg" },
                { text: t.hero.badges[1], icon: "/icons/lady-2.svg" },
                { text: t.hero.badges[2], icon: "/icons/basket-2.svg" },
                { text: t.hero.badges[3], icon: "/icons/bread-2.svg" },
                { text: t.hero.badges[4], icon: "/icons/mortar.svg" },
                { text: t.hero.badges[5], icon: "/icons/sun-2.svg" },
              ].map((item, idx) => (
                <span key={`${i}-${idx}`} className="inline-flex items-center">
                  <span className="hero-ticker-text font-working-man-light font-bold tracking-[0.15em]" style={{ color: "#1B4229" }}>
                    {item.text}
                  </span>
                  <span
                    className="inline-block mx-4 md:mx-6 lg:mx-4"
                    style={{
                      width: "1.85em",
                      height: "1.85em",
                      backgroundColor: "#1B4229",
                      WebkitMaskImage: `url(${item.icon})`,
                      WebkitMaskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskImage: `url(${item.icon})`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                    }}
                  />
                </span>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};
