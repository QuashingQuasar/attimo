
export const KleiaWay = () => {
  return (
    <section className="py-24 bg-[hsl(var(--section-light))]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-olive-dark mb-8 tracking-tight">
            How We Make Sure<br />
            <span className="font-medium italic">You Get The Good Stuff</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-4 grid-rows-2 gap-4 max-w-7xl mx-auto h-[500px]">
          {/* Large tile - Video (spans 2 rows) */}
          <div className="row-span-2 rounded-2xl relative overflow-hidden">
            <video 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/kleia-way-video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Top row, col 2 - Not Blended (text) */}
          <div className="bg-gradient-to-br from-olive-dark to-olive-dark/80 rounded-2xl p-6 text-white">
            <div className="h-full flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-4 text-white">Not Blended</h4>
              <p className="text-white/90 text-base leading-relaxed">
                Every bottle comes from just one region - no blends, no sneaky stuff.
              </p>
            </div>
          </div>

          {/* Top row, col 3 - Video */}
          <div className="rounded-2xl relative overflow-hidden">
            <video 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/third-column-upper-video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Top row, col 4 - Text content (as shown in sketch) */}
          <div className="bg-gradient-to-br from-olive-dark to-olive-dark/80 rounded-2xl p-6 text-white">
            <div className="h-full flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-4 text-white">Premium Quality</h4>
              <p className="text-white/90 text-base leading-relaxed">
                Each bottle represents the finest olive oil craftsmanship.
              </p>
            </div>
          </div>

          {/* Bottom row, col 2 - Video */}
          <div className="rounded-2xl relative overflow-hidden">
            <video 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/kleia-way-video-3.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Bottom row, col 3 - Lab Tested (text according to sketch) */}
          <div className="bg-gradient-to-br from-olive-dark to-olive-dark/80 rounded-2xl p-6 text-white">
            <div className="h-full flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-4 text-white">Lab-Tested</h4>
              <p className="text-white/90 text-base leading-relaxed">
                We lab-test the olive oil to ensure you get the real deal.
              </p>
            </div>
          </div>

          {/* Bottom row, col 4 - Video */}
          <div className="rounded-2xl relative overflow-hidden">
            <video 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/bottom-right-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};