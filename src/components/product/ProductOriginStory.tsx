interface ProductOriginStoryProps {
  content: {
    headline: string;
    quickRef: Array<{ label: string; value: string }>;
    features: Array<{ title: string; description: string; icon: string; video?: string }>;
  };
  tileBackground?: string;
  tileAccent?: string;
}

export const ProductOriginStory = ({ content, tileBackground, tileAccent }: ProductOriginStoryProps) => {
  const { headline, quickRef, features } = content;
  const bg = tileBackground || '#1B4229';
  const accent = tileAccent || '#ECA948';

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#FFFAEA' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p
              className="font-beverly font-bold text-olive-dark tracking-tight"
              style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', lineHeight: 1.2 }}
            >
              {headline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-6 lg:h-[1275px]">
            <div className="rounded-2xl p-10 h-[300px] lg:h-auto" style={{ backgroundColor: bg }}>
              <div className="h-full flex flex-col justify-center items-center text-center gap-5">
                <div
                  className="w-[80px] h-[80px]"
                  style={{
                    backgroundColor: accent,
                    WebkitMaskImage: `url(${features[0]?.icon})`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url(${features[0]?.icon})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
                <h3 style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(1.6rem, 2vw, 2.2rem)', color: accent }}>
                  {features[0]?.title}
                </h3>
                <p className="tracking-wide leading-relaxed max-w-[300px]" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.15rem', letterSpacing: '0.06em', textTransform: 'none', color: accent }}>
                  {features[0]?.description}
                </p>
              </div>
            </div>

            <div className="rounded-2xl relative overflow-hidden h-[300px] lg:h-auto">
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src={features[0]?.video || "/videos/content-video-1.mp4"} type="video/mp4" />
              </video>
            </div>

            <div className="rounded-2xl p-10 h-[300px] lg:h-auto" style={{ backgroundColor: bg }}>
              <div className="h-full flex flex-col justify-center items-center text-center gap-5">
                <div
                  className="w-[80px] h-[80px]"
                  style={{
                    backgroundColor: accent,
                    WebkitMaskImage: `url(${features[1]?.icon})`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url(${features[1]?.icon})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
                <h3 style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(1.6rem, 2vw, 2.2rem)', color: accent }}>
                  {features[1]?.title}
                </h3>
                <p className="tracking-wide leading-relaxed max-w-[300px]" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.15rem', letterSpacing: '0.06em', textTransform: 'none', color: accent }}>
                  {features[1]?.description}
                </p>
              </div>
            </div>

            <div className="rounded-2xl relative overflow-hidden h-[300px] lg:h-auto">
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src={features[1]?.video || "/videos/kleia-way-video-3.mp4"} type="video/mp4" />
              </video>
            </div>

            <div className="rounded-2xl p-10 h-[300px] lg:h-auto" style={{ backgroundColor: bg }}>
              <div className="h-full flex flex-col justify-center items-center text-center gap-5">
                <div
                  className="w-[80px] h-[80px]"
                  style={{
                    backgroundColor: accent,
                    WebkitMaskImage: `url(${features[2]?.icon})`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url(${features[2]?.icon})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
                <h3 style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(1.6rem, 2vw, 2.2rem)', color: accent }}>
                  {features[2]?.title}
                </h3>
                <p className="tracking-wide leading-relaxed max-w-[300px]" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.15rem', letterSpacing: '0.06em', textTransform: 'none', color: accent }}>
                  {features[2]?.description}
                </p>
              </div>
            </div>

            <div className="rounded-2xl relative overflow-hidden h-[300px] lg:h-auto">
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src={features[2]?.video || "/videos/kleia-way-video.mp4"} type="video/mp4" />
              </video>
            </div>

            {/* Third row: content - video - content */}
            <div className="rounded-2xl p-10 h-[300px] lg:h-auto" style={{ backgroundColor: bg }}>
              <div className="h-full flex flex-col justify-center items-center text-center gap-5">
                <div
                  className="w-[80px] h-[80px]"
                  style={{
                    backgroundColor: accent,
                    WebkitMaskImage: `url(${features[3]?.icon})`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url(${features[3]?.icon})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
                <h3 style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(1.6rem, 2vw, 2.2rem)', color: accent }}>
                  {features[3]?.title}
                </h3>
                <p className="tracking-wide leading-relaxed max-w-[300px]" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.15rem', letterSpacing: '0.06em', textTransform: 'none', color: accent }}>
                  {features[3]?.description}
                </p>
              </div>
            </div>

            <div className="rounded-2xl relative overflow-hidden h-[300px] lg:h-auto">
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src={features[3]?.video || "/videos/harvest-2024-1.mp4"} type="video/mp4" />
              </video>
            </div>

            <div className="rounded-2xl p-10 h-[300px] lg:h-auto" style={{ backgroundColor: bg }}>
              <div className="h-full flex flex-col justify-center items-center text-center gap-5">
                <div
                  className="w-[80px] h-[80px]"
                  style={{
                    backgroundColor: accent,
                    WebkitMaskImage: `url(${features[4]?.icon})`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url(${features[4]?.icon})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
                <h3 style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(1.6rem, 2vw, 2.2rem)', color: accent }}>
                  {features[4]?.title}
                </h3>
                <p className="tracking-wide leading-relaxed max-w-[300px]" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.15rem', letterSpacing: '0.06em', textTransform: 'none', color: accent }}>
                  {features[4]?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
