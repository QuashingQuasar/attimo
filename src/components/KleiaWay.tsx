
export const KleiaWay = () => {
  return (
    <section className="snap-start pt-12 md:pt-16 lg:pt-24 pb-24 md:pb-28 lg:pb-36" style={{ backgroundColor: 'hsl(var(--section-light))' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="font-light mb-8 tracking-tight" style={{
            fontFamily: 'UDC Working Man Sans, sans-serif',
            color: '#1B4229',
            fontSize: 'clamp(2rem, 3.5vw, 3.75rem)'
          }}>
            How We Make Sure<br />
            <span className="font-medium italic">You Get The Good Stuff</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-6 max-w-[90vw] mx-auto lg:h-[1125px]">
          <div className="rounded-2xl p-6 h-[250px] lg:h-auto" style={{ backgroundColor: '#1B4229', color: '#B3E58C' }}>
            <div className="h-full flex flex-col justify-center items-center text-center">
              <h4 className="font-bold mb-6" style={{
                fontFamily: 'UDC Working Man Sans, sans-serif',
                color: '#B3E58C',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.75rem)'
              }}>FROM GROVE TO TABLE</h4>
              <p className="leading-relaxed" style={{
                fontFamily: 'Space Grotesk, sans-serif',
                color: '#B3E58C',
                fontSize: 'clamp(1rem, 1.3vw, 1.5rem)'
              }}>
                We source directly from the people who make the oil. No middlemen, no blending, no shortcuts.
              </p>
            </div>
          </div>

          <div className="rounded-2xl relative overflow-hidden h-[250px] lg:h-auto">
            <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
              <source src="/videos/content-video-1.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="rounded-2xl p-6 h-[250px] lg:h-auto" style={{ backgroundColor: '#1B4229', color: '#B3E58C' }}>
            <div className="h-full flex flex-col justify-center items-center text-center">
              <h4 className="font-bold mb-6" style={{
                fontFamily: 'UDC Working Man Sans, sans-serif',
                color: '#B3E58C',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.75rem)'
              }}>SINGLE VARIETY</h4>
              <p className="leading-relaxed" style={{
                fontFamily: 'Space Grotesk, sans-serif',
                color: '#B3E58C',
                fontSize: 'clamp(1rem, 1.3vw, 1.5rem)'
              }}>
                Each bottle is from a single olive variety, unblended. What you taste is the pure expression of that cultivar and where it comes from.
              </p>
            </div>
          </div>

          <div className="rounded-2xl relative overflow-hidden h-[250px] lg:h-auto">
            <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
              <source src="/videos/kleia-way-video-3.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="rounded-2xl p-6 h-[250px] lg:h-auto" style={{ backgroundColor: '#1B4229', color: '#B3E58C' }}>
            <div className="h-full flex flex-col justify-center items-center text-center">
              <h4 className="font-bold mb-6" style={{
                fontFamily: 'UDC Working Man Sans, sans-serif',
                color: '#B3E58C',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.75rem)'
              }}>Early harvest</h4>
              <p className="leading-relaxed" style={{
                fontFamily: 'Space Grotesk, sans-serif',
                color: '#B3E58C',
                fontSize: 'clamp(1rem, 1.3vw, 1.5rem)'
              }}>Our olives are harvested early in season when they are highest in the polyphenols that give taste and health

              </p>
            </div>
          </div>

          <div className="rounded-2xl relative overflow-hidden h-[250px] lg:h-auto">
            <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
              <source src="/videos/kleia-way-video.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="rounded-2xl p-6 h-[250px] lg:h-auto" style={{ backgroundColor: '#1B4229', color: '#B3E58C' }}>
            <div className="h-full flex flex-col justify-center items-center text-center">
              <h4 className="font-bold mb-6" style={{
                fontFamily: 'UDC Working Man Sans, sans-serif',
                color: '#B3E58C',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.75rem)'
              }}>SINGLE VARIETY</h4>
              <p className="leading-relaxed" style={{
                fontFamily: 'Space Grotesk, sans-serif',
                color: '#B3E58C',
                fontSize: 'clamp(1rem, 1.3vw, 1.5rem)'
              }}>
                Each bottle is from a single olive variety, unblended. What you taste is the pure expression of that cultivar and where it comes from.
              </p>
            </div>
          </div>

          <div className="rounded-2xl relative overflow-hidden h-[250px] lg:h-auto">
            <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
              <source src="/videos/content-video-3.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="rounded-2xl p-6 h-[250px] lg:h-auto" style={{ backgroundColor: '#1B4229', color: '#B3E58C' }}>
            <div className="h-full flex flex-col justify-center items-center text-center">
              <h4 className="font-bold mb-6" style={{
                fontFamily: 'UDC Working Man Sans, sans-serif',
                color: '#B3E58C',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.75rem)'
              }}>ALWAYS FRESH</h4>
              <p className="leading-relaxed" style={{
                fontFamily: 'Space Grotesk, sans-serif',
                color: '#B3E58C',
                fontSize: 'clamp(1rem, 1.3vw, 1.5rem)'
              }}>
                ATTIMO olive oil is always from the latest harvest. Pressed within hours after picking, bottled at peak freshness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};
