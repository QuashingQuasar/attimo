import { AutoplayVideo } from "@/components/AutoplayVideo";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";

interface KleiaWayProps {
  locale?: Locale;
  /** Override the two-line dictionary heading with a single-line heading. */
  heading?: string;
  /** Optional intro paragraph under the heading (e.g. reframing the props as causes). */
  intro?: string;
}

export const KleiaWay = ({ locale = DEFAULT_LOCALE, heading, intro }: KleiaWayProps = {}) => {
  const t = getDict(locale);
  const icons = ["/icons/mortar.svg", "/icons/olive.svg", "/icons/branch-2.svg", "/icons/basket-2.svg", "/icons/flask.svg"];
  const tiles = t.kleiaWay.tiles.map((tile, i) => ({ ...tile, icon: icons[i] }));

  const videos = [
    "/videos/content-video-1.mp4",
    "/videos/kleia-way-video-3.mp4",
    "/videos/kleia-way-video.mp4",
    "/videos/harvest-2024-1.mp4",
  ];

  // Tiles: compact rows on phones (icon left, copy right), centred cards from md.
  // Rows take the height of their tallest tile, so longer translations fit.
  const TILE_H = "md:min-h-[215px] xl:min-h-[225px] 3xl:min-h-[248px]";
  const renderTile = (index: number) => (
    <div className={`rounded-xl p-5 h-full ${TILE_H}`} style={{ backgroundColor: '#1B4229' }}>
      <div className="h-full flex flex-row md:flex-col md:justify-center items-center text-left md:text-center gap-4 md:gap-2">
        <div
          className="w-[46px] h-[40px] flex-shrink-0"
          style={{
            backgroundColor: '#B3E58C',
            WebkitMaskImage: `url(${tiles[index].icon})`,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskImage: `url(${tiles[index].icon})`,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
          }}
        />
        <div className="flex flex-col gap-1 md:gap-2 md:items-center">
          <h4 className="font-bold" style={{
            fontFamily: 'UDC Working Man Sans, sans-serif',
            color: '#B3E58C',
            fontSize: 'clamp(1.1rem, 1.33vw, 1.41rem)'
          }}>{tiles[index].title}</h4>
          <p className="leading-normal" style={{
            fontFamily: 'Space Grotesk, sans-serif',
            color: '#B3E58C',
            fontSize: 'clamp(1rem, 1.1vw, 1.1rem)'
          }}>{tiles[index].text}</p>
        </div>
      </div>
    </div>
  );

  const renderVideo = (index: number) => (
    <div className={`rounded-xl relative overflow-hidden h-[170px] md:h-full ${TILE_H}`}>
      <AutoplayVideo
        src={videos[index]}
        className="absolute inset-0 w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden"
      />
    </div>
  );

  return (
    <section className="snap-start pt-10 md:pt-16 lg:pt-10 xl:pt-24 pb-[20px] md:pb-[35px] lg:pb-[20px] xl:pb-[62px]" style={{ backgroundColor: 'hsl(var(--section-light))' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-6 lg:mb-10">
          <h2 className="font-light mb-6 tracking-tight" style={{
            fontFamily: 'UDC Working Man Sans, sans-serif',
            color: '#1B4229',
            fontSize: 'clamp(2rem, 3.5vw, 3.7rem)'
          }}>
            {heading ? heading : <>{t.kleiaWay.headingLine1}<br /><span className="font-medium italic">{t.kleiaWay.headingLine2}</span></>}
          </h2>
          {intro && (
            <p className="max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#1B4229', opacity: 0.7, fontSize: 'clamp(1.05rem, 1.25vw, 1.3rem)' }}>
              {intro}
            </p>
          )}
        </div>

        {/* Phones show two of the four clips, so the five points stay close together. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-[90vw] lg:max-w-[88vw] xl:max-w-[75vw] mx-auto">
          {renderTile(0)}
          {renderVideo(0)}
          {renderTile(1)}
          <div className="hidden md:block">{renderVideo(1)}</div>
          {renderTile(2)}
          {renderVideo(2)}
          <div className="md:hidden lg:block">{renderTile(3)}</div>
          <div className="hidden md:block md:order-9 lg:order-none">{renderVideo(3)}</div>
          <div className="md:order-8 lg:order-none">{renderTile(4)}</div>
        </div>
      </div>
    </section>
  );
};
