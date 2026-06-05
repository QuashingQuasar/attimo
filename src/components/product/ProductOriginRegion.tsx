import { SicilyMapbox } from "@/components/SicilyMapbox";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";

interface ProductOriginRegionProps {
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  heading?: string;
  body?: string;
  markerLon?: number;
  markerLat?: number;
  markerLabel?: string;
  centerLon?: number;
  centerLat?: number;
  mapZoom?: number;
  markerStyle?: "dot-line" | "pill-only";
  locale?: Locale;
}

export const ProductOriginRegion = ({
  backgroundColor = '#1B4229',
  headingColor = '#ECA948',
  textColor = '#FFFAEA',
  heading: headingProp,
  body: bodyProp,
  markerLon,
  markerLat,
  markerLabel,
  centerLon,
  centerLat,
  mapZoom,
  markerStyle,
  locale = DEFAULT_LOCALE,
}: ProductOriginRegionProps) => {
  // Products with their own originRegion (Coratina, Picual) pass localized
  // heading/body; products without one (Nocellara) fall back to the
  // locale-aware default so the section is translated too.
  const fallback = getDict(locale).originRegionFallback;
  const heading = headingProp ?? fallback.heading;
  const body = bodyProp ?? fallback.body;
  return (
    <section className="py-14 md:py-20 lg:py-24" style={{ backgroundColor }}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <SicilyMapbox
              className="w-full max-w-[400px] aspect-square"
              bgColor={backgroundColor}
              strokeColor={headingColor}
              labelColor={textColor}
              markerLon={markerLon}
              markerLat={markerLat}
              markerLabel={markerLabel}
              centerLon={centerLon}
              centerLat={centerLat}
              mapZoom={mapZoom}
              markerStyle={markerStyle}
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-bold tracking-tight" style={{ fontFamily: "'UDC Working Man Sans', sans-serif", color: headingColor, fontSize: 'clamp(1.75rem, 3vw, 3rem)' }}>
              {heading}
            </h2>
            {body.split('\n\n').map((paragraph, i) => (
              <p key={i} className="leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', color: textColor, fontSize: 'clamp(1rem, 1.2vw, 1.25rem)' }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
