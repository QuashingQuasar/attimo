import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Droplets, Sparkles, UtensilsCrossed, Sprout, Beaker, Link, ShieldCheck } from "lucide-react";
import { ProductOriginStory } from "@/components/product/ProductOriginStory";
import { ProductOriginRegion } from "@/components/product/ProductOriginRegion";
import { ProductLabTrust } from "@/components/product/ProductLabTrust";
import { OilComparison } from "@/components/OilComparison";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ProductInfoTabs } from "@/components/ProductInfoTabs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { getProductContent, resolveShopifyHandle } from "@/lib/productContent";
import { QuantitySelector } from "@/components/QuantitySelector";

const ProductPage = () => {
  const { handle } = useParams<{handle: string;}>();
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [inputValue, setInputValue] = useState('1');
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateQuantity = useCallback((qty: number) => {
    const clamped = Math.max(1, qty);
    setSelectedQuantity(clamped);
    setInputValue(String(clamped));
  }, []);

  const handleInputChange = (val: string) => {
    setInputValue(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const parsed = parseInt(val, 10);
      if (!isNaN(parsed) && parsed >= 1) setSelectedQuantity(parsed);
    }, 300);
  };

  const handleInputBlur = () => {
    const parsed = parseInt(inputValue, 10);
    if (isNaN(parsed) || parsed < 1) updateQuantity(1);
    else updateQuantity(parsed);
  };
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const addItem = useCartStore((state) => state.addItem);

  const shopifyHandle = resolveShopifyHandle(handle);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const [fetchedProducts, exactHandleProducts] = await Promise.all([
          fetchProducts(50),
          shopifyHandle ? fetchProducts(1, `handle:${shopifyHandle}`) : Promise.resolve([]),
        ]);

        const dedupedProducts = [...fetchedProducts, ...exactHandleProducts].filter(
          (product, index, arr) => arr.findIndex((p) => p.node.id === product.node.id) === index
        );

        setProducts(dedupedProducts);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [shopifyHandle]);

  const product = products.find((p) => p.node.handle === shopifyHandle);
  const content = getProductContent(handle);

  const handleAddToCart = () => {
    if (!product) return;
    const variant = product.node.variants.edges[0].node;

    addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: { amount: '24', currencyCode: 'EUR' },
      quantity: selectedQuantity,
      selectedOptions: variant.selectedOptions || []
    });
    toast.success(`Added ${selectedQuantity} bottle${selectedQuantity > 1 ? 's' : ''} to cart`, {
      position: "top-center"
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#FFFAEA' }}>
        <Header onWaitlistClick={() => {}} forceScrolled />
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-olive-medium">Loading product...</p>
        </div>
      </div>);

  }

  if (!product) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#FFFAEA' }}>
        <Header onWaitlistClick={() => {}} forceScrolled />
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-olive-medium">Product not found</p>
        </div>
      </div>);

  }

  const productImages = product.node.images?.edges || [];
  const currencyCode = product.node.priceRange.minVariantPrice.currencyCode;

  const PRICE_PER_BOTTLE = 24;
  const totalPrice = selectedQuantity * PRICE_PER_BOTTLE;

  // Attribute grid inspired by Arsenio — Composition, Color, Food pairings, Nose
  const attributes = [
  {
    icon: <Droplets size={20} className="text-olive-dark" />,
    label: "Variety",
    value: `100% ${content.tabs.details.olive}`
  },
  {
    icon: <MapPin size={20} className="text-olive-dark" />,
    label: "Origin",
    value: content.tabs.details.origin
  },
  {
    icon: <Sprout size={20} className="text-olive-dark" />,
    label: "Harvest",
    value: "October 2025"
  },
  {
    icon: <Sparkles size={20} className="text-olive-dark" />,
    label: "Flavor",
    value: content.tabs.details.flavor
  }];


  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFAEA' }}>
      <Header onWaitlistClick={() => {}} forceScrolled />
      
      {/* Product Hero Section */}
      <section className="pt-20 md:pt-24">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 items-start">
            
            {/* Left: Full-bleed sticky image */}
            <div className="lg:sticky lg:top-20 lg:self-start">
              <div className="w-full aspect-[3/4] lg:aspect-auto lg:h-[calc(100vh-5rem)] relative overflow-hidden">
                <img
                src={productImages[selectedImageIndex]?.node?.url || productImages[0]?.node?.url}
                alt={productImages[selectedImageIndex]?.node?.altText || product.node.title}
                className="w-full h-full object-cover" />
              

                {/* Overlay Thumbnails — bottom-left inside image */}
                {productImages.length > 1 &&
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {productImages.map((img, i) =>
                <button
                  key={i}
                  onClick={() => setSelectedImageIndex(i)}
                  className={`w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-lg overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
                  selectedImageIndex === i ?
                  'border-white shadow-lg' :
                  'border-white/40 opacity-60 hover:opacity-100'}`
                  }>
                  
                        <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                      </button>
                )}
                  </div>
              }
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="px-6 md:px-10 lg:px-12 py-8 md:py-12 space-y-8">
              
              {/* Harvest Badge + Title Block */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-5 py-2 rounded-full bg-olive-dark font-bold uppercase tracking-wider" style={{ color: '#CDDB2D', fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.75rem, 0.85vw, 0.85rem)' }}>
                    New Harvest
                  </span>
                  

                
                </div>

                {/* Title + Volume */}
                <h1 className="text-olive-dark leading-[1.1]" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 400 }}>
                  {content.heroTitle}
                  <span className="text-olive-medium ml-3 whitespace-nowrap align-baseline" style={{ fontFamily: 'Beverly Drive Right, Georgia, serif', fontSize: 'clamp(1.2rem, 1.5vw, 1.6rem)', fontStyle: 'italic', fontWeight: 400 }}>
                    {content.tabs.details.volume}
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-olive-medium !-mt-1 underline-offset-[8px]" style={{ fontFamily: 'Beverly Drive Right, Georgia, serif', fontStyle: 'italic', fontWeight: 'bold', fontSize: 'clamp(1.5rem, 2.3vw, 2.3rem)', textDecoration: 'underline', textDecorationStyle: 'dashed', textDecorationColor: 'rgba(78, 91, 43, 0.4)', textUnderlineOffset: '8px' }}>
                {content.heroSubtitle}
              </p>

              {/* Description */}
              <p className="text-olive-medium leading-relaxed max-w-2xl" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.05rem, 1.25vw, 1.3rem)' }}>
                {content.originStory.headline.split('.').slice(0, 3).join('.') + '.'}
              </p>

              {/* Attribute Grid — 2x2 like Arsenio */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-8 pt-2 pb-2">
                {attributes.map((attr) =>
              <div key={attr.label} className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      {attr.icon}
                      <span className="text-olive-dark font-semibold tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.95rem, 1.15vw, 1.2rem)' }}>
                        {attr.label}
                      </span>
                    </div>
                    <p className="text-olive-medium" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.95rem, 1.15vw, 1.2rem)' }}>
                      {attr.value}
                    </p>
                  </div>
              )}
              </div>

              {/* Shipping text + Cart row */}
              <div className="space-y-3">
                <p className="text-olive-medium" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.85rem, 1vw, 1.05rem)' }}>
                  {selectedQuantity < 2
                    ? 'Add 1 more bottle for free shipping'
                    : 'Free shipping applied ✓'}
                </p>

                <div className="flex items-stretch gap-2">
                  <Button
                    onClick={handleAddToCart}
                    className="flex-[3] hover:opacity-90 text-olive-dark font-semibold px-8 py-6 h-auto transition-all duration-300"
                    style={{
                      fontFamily: 'UDC Working Man Sans, sans-serif',
                      backgroundColor: '#CDDB2D',
                      fontSize: 'clamp(1.1rem, 1.3vw, 1.35rem)',
                      borderRadius: '0.75rem',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Add to Cart — €{totalPrice}
                  </Button>
                  <div className="flex-1 flex items-center gap-0">
                    <button
                      type="button"
                      onClick={() => updateQuantity(selectedQuantity - 1)}
                      className="flex-1 h-full rounded-l-xl border-2 border-olive-dark/20 text-olive-dark hover:border-olive-dark/50 transition-all flex items-center justify-center font-bold text-lg"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >−</button>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={inputValue}
                      onChange={(e) => handleInputChange(e.target.value)}
                      onBlur={handleInputBlur}
                      className="w-10 h-full border-y-2 border-olive-dark/20 bg-transparent text-center font-bold text-olive-dark outline-none"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1rem, 1.2vw, 1.25rem)' }}
                    />
                    <button
                      type="button"
                      onClick={() => updateQuantity(selectedQuantity + 1)}
                      className="flex-1 h-full rounded-r-xl border-2 border-olive-dark/20 text-olive-dark hover:border-olive-dark/50 transition-all flex items-center justify-center font-bold text-lg"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >+</button>
                  </div>
                </div>
              </div>

              <p className="text-olive-medium text-left flex items-center gap-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.95rem, 1.15vw, 1.15rem)' }}>
                <ShieldCheck size={20} strokeWidth={1.5} />
                Third party lab-tested for quality and purity
              </p>

              {/* Lab Values — minimal cards */}
              <div className="grid grid-cols-2 gap-4">
                {content.labTiles.map((tile) =>
              <div key={tile.key} className="rounded-xl p-4" style={{ backgroundColor: 'rgba(27, 66, 41, 0.05)' }}>
                    <p className="text-olive-medium uppercase tracking-widest mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.75rem, 0.9vw, 0.95rem)' }}>
                      {tile.label}
                    </p>
                    <p className="text-olive-dark font-bold flex items-baseline gap-2" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(1.6rem, 2.1vw, 2.3rem)' }}>
                      <span>
                        {tile.value}
                        {tile.unit && <span className="text-olive-medium font-normal ml-1" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.05rem)' }}>{tile.unit}</span>}
                      </span>
                      <span className="text-olive-light font-normal" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.8rem, 0.9vw, 0.95rem)' }}>
                        {tile.avg}
                      </span>
                    </p>
                    {tile.description &&
                <p className="text-olive-medium mt-1.5" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.8rem, 0.9vw, 0.95rem)' }}>
                        {tile.description}
                      </p>
                }
                  </div>
              )}
              </div>

              {/* Lab Report Link */}
              <div className="flex items-center justify-between gap-3">
                <a
                href={content.labReportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-olive-dark hover:text-olive-medium transition-colors underline underline-offset-4 decoration-olive-dark/30"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.85rem, 1vw, 1.05rem)' }}>
                
                  <Beaker size={18} />
                  View full lab results
                </a>
                <span className="text-olive-light" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.75rem, 0.85vw, 0.9rem)' }}>
                  * Values measured at time of bottling
                </span>
              </div>

              {/* Accordion Info */}
              <div className="pt-2">
                <ProductInfoTabs content={content} />
              </div>
            </div>
          </div>
      </section>

      {/* Content sections below product hero */}
      <ProductOriginStory content={content.originStory} />
      <Testimonials />
      <ProductOriginRegion />
      <ProductLabTrust content={content.labTrust} />
      <OilComparison />
      <FAQ />

      <Footer />
    </div>);

};

export default ProductPage;