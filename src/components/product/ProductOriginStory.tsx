import { AutoplayVideo } from "@/components/AutoplayVideo";

interface ProductOriginStoryProps {
  content: {
    headline: string;
    quickRef: Array<{ label: string; value: string }>;
    features: Array<{ title: string; description: string; icon: string; video?: string }>;
  };
  tileBackground?: string;
  tileAccent?: string;
  headlineMaxWidth?: string;
}

export const ProductOriginStory = ({ content, tileBackground, tileAccent, headlineMaxWidth }: ProductOriginStoryProps) => {
  const { headline, quickRef, features } = content;
  const bg = tileBackground || '#1B4229';
  const accent = tileAccent || '#ECA948';

  const renderTile = (index: number, extraClass?: string) => (
    <div className="rounded-2xl p-6 h-[250px] lg:h-auto" style={{ backgroundColor: bg }}>
      <div className={`h-full flex flex-col justify-center items-center text-center gap-3 ${extraClass || ''}`}>
        <div
          className="w-[56px] h-[56px]"
          style={{
            backgroundColor: accent,
            WebkitMaskImage: `url(${features[index]?.icon})`,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskImage: `url(${features[index]?.icon})`,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
          }}
        />
        <h3 style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(1.2rem, 1.6vw, 1.7rem)', color: accent }}>
          {features[index]?.title}
        </h3>
        <p className="tracking-wide leading-relaxed max-w-[280px] whitespace-pre-line" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.85rem, 1vw, 1rem)', letterSpacing: '0.04em', color: accent }}>
          {features[index]?.description}
        </p>
      </div>
    </div>
  );

  const renderVideo = (index: number, fallback: string) => (
    <div className="rounded-2xl relative overflow-hidden h-[250px] lg:h-auto">
      <AutoplayVideo
        src={features[index]?.video || fallback}
        className="w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden"
      />
    </div>
  );

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#FFFAEA' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <p
              className="font-beverly font-bold text-olive-dark tracking-tight mx-auto"
              style={{ maxWidth: headlineMaxWidth || '67rem', fontSize: 'clamp(1.9rem, 3.16vw, 3.16rem)', lineHeight: 1.2 }}
            >
              {headline}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:hidden lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:h-[calc(100vh-10rem)]">
            {/* Desktop + mobile */}
            <div>{renderTile(0)}</div>
            <div>{renderVideo(0, "/videos/content-video-1.mp4")}</div>
            <div>{renderTile(1)}</div>

            <div>{renderVideo(1, "/videos/kleia-way-video-3.mp4")}</div>
            <div>{renderTile(2)}</div>
            <div>{renderVideo(2, "/videos/kleia-way-video.mp4")}</div>

            <div>{renderTile(3)}</div>
            <div>{renderVideo(3, "/videos/harvest-2024-1.mp4")}</div>
            <div>{renderTile(4)}</div>
          </div>

          <div className="hidden gap-4 md:grid md:grid-cols-2 lg:hidden">
            {/* Tablet only: 4x2 alternating layout */}
            <div>{renderTile(0)}</div>
            <div>{renderVideo(0, "/videos/content-video-1.mp4")}</div>

            <div>{renderVideo(1, "/videos/kleia-way-video-3.mp4")}</div>
            <div>{renderTile(1)}</div>

            <div>{renderTile(2)}</div>
            <div>{renderVideo(2, "/videos/kleia-way-video.mp4")}</div>

            <div>{renderVideo(3, "/videos/harvest-2024-1.mp4")}</div>
            <div>{renderTile(4)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};