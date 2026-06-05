import { AutoplayVideo } from "@/components/AutoplayVideo";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";

interface KleiaWayProps {
  locale?: Locale;
}

export const KleiaWay = ({ locale = DEFAULT_LOCALE }: KleiaWayProps = {}) => {
  const t = getDict(locale);
  const icons = ["/icons/mortar.svg", "/icons/olive.svg", "/icons/branch-2.svg", "/icons/basket-2.svg", "/icons/flask.svg"];
  const tiles = t.kleiaWay.tiles.map((tile, i) => ({ ...tile, icon: icons[i] }));

  const videos = [
    "/videos/content-video-1.mp4",
    "/videos/kleia-way-video-3.mp4",
    "/videos/kleia-way-video.mp4",
    "/videos/harvest-2024-1.mp4",
  ];

  const renderTile = (index: number) => (
    <div className="rounded-xl p-5 h-[180px] lg:h-[165px] xl:h-[190px] 3xl:h-[248px]" style={{ backgroundColor: '#1B4229' }}>
      <div className="h-full flex flex-col justify-center items-center text-center gap-2">
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
        <h4 className="font-bold" style={{
          fontFamily: 'UDC Working Man Sans, sans-serif',
          color: '#B3E58C',
          fontSize: 'clamp(1rem, 1.33vw, 1.41rem)'
        }}>{tiles[index].title}</h4>
        <p className="leading-relaxed max-w-[270px]" style={{
          fontFamily: 'Space Grotesk, sans-serif',
          color: '#B3E58C',
          fontSize: 'clamp(0.81rem, 0.95vw, 0.96rem)'
        }}>{tiles[index].text}</p>
      </div>
    </div>
  );

  const renderVideo = (index: number) => (
    <div className="rounded-xl relative overflow-hidden h-[180px] lg:h-[165px] xl:h-[190px] 3xl:h-[248px]">
      <AutoplayVideo
        src={videos[index]}
        className="w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden"
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
            {t.kleiaWay.headingLine1}<br />
            <span className="font-medium italic">{t.kleiaWay.headingLine2}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-3 max-w-[90vw] lg:max-w-[88vw] xl:max-w-[75vw] mx-auto">
          {renderTile(0)}
          {renderVideo(0)}
          {renderTile(1)}
          {renderVideo(1)}
          {renderTile(2)}
          {renderVideo(2)}
          <div className="md:hidden lg:block">{renderTile(3)}</div>
          <div className="md:order-9 lg:order-none">{renderVideo(3)}</div>
          <div className="md:order-8 lg:order-none">{renderTile(4)}</div>
        </div>
      </div>
    </section>
  );
};
