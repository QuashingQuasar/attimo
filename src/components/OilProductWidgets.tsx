import { Link } from "react-router-dom";
import bottleImage from "@/assets/attimo-bottle-final.jpg";
import { OliveLeaf } from "./OliveLeaf";
const oils = [{
  name: "Coratina d'Italia",
  subtitle: "Intense & Peppery",
  origin: "Umbria, Italy",
  flag: "🇮🇹",
  handle: "galega-from-alentejo",
  image: bottleImage,
  tagline: "For the bold. A peppery kick that lingers.",
  price: 22
}, {
  name: "Picual de España",
  subtitle: "Bold & Herbaceous",
  origin: "Jaén, Spain",
  flag: "🇪🇸",
  handle: "picual",
  image: bottleImage,
  tagline: "Fresh grass and green tomato on the nose.",
  price: 20
}, {
  name: "Nocellara d'Italia",
  subtitle: "Gentle & Fruity",
  origin: "Sicily, Italy",
  flag: "🇮🇹",
  handle: "nocellara",
  image: bottleImage,
  tagline: "Almond and golden pear. Smooth every day.",
  price: 20
}];
export const OilProductWidgets = () => {
  return <section className="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden" style={{
    backgroundColor: '#1B4229'
  }}>
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, #B3E58C 1px, transparent 0)',
      backgroundSize: '32px 32px'
    }} />

      <div className="relative z-10 mx-auto" style={{
      maxWidth: '1400px'
    }}>
        {/* Section header */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="mb-4" style={{
          fontFamily: 'UDC Working Man Sans, sans-serif',
          color: '#FFFAEA',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          letterSpacing: '0.05em'
        }}>
            Three Groves, Three Characters
          </h2>

          <p className="mx-auto text-center" style={{
          fontFamily: 'Space Grotesk, sans-serif',
          color: '#B3E58C',
          opacity: 0.8,
          fontSize: 'clamp(1.4rem, 1.8vw, 1.8rem)',
          lineHeight: 1.7
        }}>Single-variety oils from select groves across the Mediterranean.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {oils.map(oil => <Link key={oil.handle} to={`/product/${oil.handle}`} className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2" style={{
          backgroundColor: '#FFFAEA',
          boxShadow: '0 4px 30px -8px rgba(0,0,0,0.3)'
        }}>
              {/* Image */}
              <div className="w-full aspect-[3/4] overflow-hidden relative">
                <img src={oil.image} alt={`${oil.name} olive oil bottle`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                {/* Gradient overlay at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 h-24" style={{
              background: 'linear-gradient(to top, #FFFAEA 0%, transparent 100%)'
            }} />
              </div>

              {/* Text content */}
              <div className="px-6 pb-7 pt-2 flex flex-col items-center text-center -mt-4 relative z-10">
                <h3 className="mb-1" style={{
              fontFamily: 'Beverly Drive, serif',
              color: '#1B4229',
              fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
              letterSpacing: '0.08em'
            }}>
                  {oil.name}
                </h3>

                <p className="uppercase tracking-[0.15em] mb-3 flex items-center justify-center gap-1.5" style={{
              fontFamily: 'UDC Working Man Sans, sans-serif',
              color: '#1B4229',
              fontSize: 'clamp(0.7rem, 0.85vw, 0.85rem)',
              opacity: 0.5
            }}>
                  {oil.subtitle} · <span className="not-italic">{oil.flag}</span> {oil.origin}
                </p>

                <p className="mb-5 italic" style={{
              fontFamily: 'Cormorant Garamond, serif',
              color: '#1B4229',
              fontSize: 'clamp(0.95rem, 1.15vw, 1.15rem)',
              opacity: 0.7,
              lineHeight: 1.5
            }}>
                  "{oil.tagline}"
                </p>

                <p className="mb-4" style={{
              fontFamily: 'UDC Working Man Sans, sans-serif',
              color: '#1B4229',
              fontSize: 'clamp(1.1rem, 1.4vw, 1.4rem)',
              letterSpacing: '0.03em'
            }}>
                  €{oil.price}
                </p>

                <span className="inline-flex items-center px-7 py-3 rounded-full transition-all duration-300 group-hover:scale-105" style={{
              backgroundColor: '#1B4229',
              color: '#CDDB2D',
              fontFamily: 'UDC Working Man Sans, sans-serif',
              fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)',
              letterSpacing: '0.1em'
            }}>
                  SHOP
                </span>
              </div>
            </Link>)}
        </div>

        {/* Quiz CTA */}
        <div className="text-center mt-14 md:mt-20">
          <p className="mb-5" style={{
          fontFamily: 'Space Grotesk, sans-serif',
          color: '#B3E58C',
          fontSize: 'clamp(0.95rem, 1.2vw, 1.2rem)',
          opacity: 0.85
        }}>
            Not sure which one is for you?
          </p>
          <Link to="/quiz" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 font-semibold" style={{
          fontFamily: 'UDC Working Man Sans, sans-serif',
          backgroundColor: '#CDDB2D',
          color: '#1B4229',
          fontSize: 'clamp(0.875rem, 1.1vw, 1.1rem)',
          letterSpacing: '0.05em'
        }}>
            Find Your Oil →
          </Link>
        </div>
      </div>
    </section>;
};