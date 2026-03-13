import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import bottleFallback from "@/assets/attimo-bottle-final.jpg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Info, Link, ArrowLeft } from "lucide-react";
import { ProductOriginStory } from "@/components/product/ProductOriginStory";
import { ProductOriginRegion } from "@/components/product/ProductOriginRegion";
import { ProductLabTrust } from "@/components/product/ProductLabTrust";
import { OilComparison } from "@/components/OilComparison";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ProductInfoTabs } from "@/components/ProductInfoTabs";
import { OriginMap } from "@/components/OriginMap";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { getProductContent, resolveShopifyHandle } from "@/lib/productContent";

const ProductPage = () => {
  const { handle } = useParams<{ handle: string }>();
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [customQuantity, setCustomQuantity] = useState(5);
  const [useCustom, setUseCustom] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const addItem = useCartStore(state => state.addItem);

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

  const product = products.find(p => p.node.handle === shopifyHandle);
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
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#FFFAEA' }}>
        <Header onWaitlistClick={() => {}} forceScrolled />
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-olive-medium">Product not found</p>
        </div>
      </div>
    );
  }

  const productImages = product.node.images?.edges || [];
  const currencyCode = product.node.priceRange.minVariantPrice.currencyCode;

  // Map variants to quantity options
  const PRICE_PER_BOTTLE = 24;
  const FREE_SHIPPING_THRESHOLD = 2;
  const totalPrice = selectedQuantity * PRICE_PER_BOTTLE;
  const bottlesNeeded = FREE_SHIPPING_THRESHOLD - selectedQuantity;

  const labTiles = content.labTiles;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFAEA' }}>
      <Header onWaitlistClick={() => {}} forceScrolled />
      
      {/* Product Section - Full-bleed left image, scrolling right info */}
      <section className="pt-20 md:pt-24">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-0 items-start">
          
          {/* Left: Sticky Image Gallery */}
          <div className="lg:sticky lg:top-20 lg:self-start">
            <div className="w-full aspect-[3/4] lg:aspect-auto lg:h-[calc(100vh-5rem)] relative overflow-hidden">
              <img
                src={productImages[selectedImageIndex]?.node?.url || productImages[0]?.node?.url || bottleFallback}
                alt={productImages[selectedImageIndex]?.node?.altText || product.node.title}
                className="w-full h-full object-cover"
              />

              {/* Image thumbnails */}
              {productImages.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {productImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImageIndex(i)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImageIndex === i 
                          ? 'border-[#CDDB2D] shadow-lg' 
                          : 'border-white/50 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Label Preview - Bottom Left */}
              <div className="absolute bottom-4 left-4">
                <HoverCard openDelay={0} closeDelay={0}>
                  <HoverCardTrigger asChild>
                    <button
                      className="flex items-center gap-1.5 backdrop-blur-sm px-3 py-1.5 rounded-md border border-cream/20 cursor-help transition-all hover:opacity-100"
                      style={{ backgroundColor: 'rgba(27, 66, 41, 0.9)' }}
                      onClick={(e) => e.currentTarget.focus()}
                    >
                      <span className="font-semibold uppercase tracking-wide" style={{ color: '#FFFAEA', fontSize: 'clamp(0.7rem, 0.9vw, 0.875rem)' }}>
                        LABEL PREVIEW
                      </span>
                      <Info className="w-3.5 h-3.5" style={{ color: '#FFFAEA' }} />
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent
                    side="right"
                    align="start"
                    className="max-w-xs p-3"
                    style={{ backgroundColor: '#1B4229', color: '#FFFAEA', borderColor: 'rgba(205, 219, 45, 0.3)' }}
                    onPointerDownOutside={(e) => e.preventDefault()}
                  >
                    <p className="text-sm leading-relaxed">
                      This bottle shows our upcoming ATTIMO brand. Your 2024/25 harvest will arrive with the original producer's label, containing the same exceptional quality oil.
                    </p>
                  </HoverCardContent>
                </HoverCard>
              </div>

              {/* Origin Map - Bottom Right */}
              <div className="absolute bottom-4 right-4 w-[80px] h-[80px] md:w-[100px] md:h-[100px]">
                <OriginMap />
              </div>
            </div>
          </div>

          {/* Right: Scrolling Product Info */}
          <div className="px-6 md:px-10 lg:px-12 py-8 md:py-12 space-y-4">
            
            {/* Badges */}
            <div className="flex items-center gap-2">
              <HoverCard openDelay={0} closeDelay={0}>
                <HoverCardTrigger asChild>
                  <button
                    className="inline-flex items-center rounded-full border-transparent px-3 py-1.5 cursor-help transition-all hover:opacity-100"
                    style={{ backgroundColor: '#1B4229', color: '#CDDB2D', fontSize: 'clamp(0.75rem, 0.95vw, 1rem)', fontWeight: 600 }}
                    onClick={(e) => e.currentTarget.focus()}
                  >
                    2024/25 HARVEST
                  </button>
                </HoverCardTrigger>
                <HoverCardContent
                  side="bottom"
                  align="start"
                  className="max-w-xs p-3"
                  style={{ backgroundColor: '#1B4229', color: '#FFFAEA', borderColor: 'rgba(205, 219, 45, 0.3)' }}
                  onPointerDownOutside={(e) => e.preventDefault()}
                >
                  <p className="text-sm leading-relaxed">
                    Oil from the latest harvest 2024/25 season. The new harvest is currently underway, with fresh oil arriving early 2026.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <Badge variant="secondary" className="bg-gold/20 text-gold-dark px-3 py-1.5" style={{ fontSize: 'clamp(0.75rem, 0.95vw, 1rem)' }}>
                LAST BOTTLES
              </Badge>
            </div>

            {/* Title */}
            <h1 className="font-bold text-olive-dark flex items-baseline gap-3" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}>
              {content.heroTitle}
              <span className="font-beverly text-olive-medium" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)' }}>500ml</span>
            </h1>

            {/* Subtitle */}
            <p className="text-olive-medium font-beverly !-mt-1" style={{ textDecoration: 'underline', textDecorationStyle: 'dashed', textDecorationColor: 'currentColor', textUnderlineOffset: '3px', fontSize: 'clamp(1.2rem, 1.8vw, 2rem)' }}>
              {content.heroSubtitle}
            </p>

            {/* Key Benefits */}
            <ul className="space-y-2.5 text-olive-medium pt-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.85rem, 1.05vw, 1.15rem)' }}>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-olive-medium rounded-full mt-2 flex-shrink-0"></div>
                <span className="inline">
                  {content.benefits[0]}
                  {' '}
                  <HoverCard openDelay={0} closeDelay={0}>
                    <HoverCardTrigger asChild>
                      <button
                        className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-olive-medium text-olive-medium hover:bg-olive-medium hover:text-cream transition-colors cursor-help align-middle"
                        style={{ fontSize: '0.65rem', fontWeight: 'bold' }}
                        onClick={(e) => e.currentTarget.focus()}
                      >
                        ?
                      </button>
                    </HoverCardTrigger>
                    <HoverCardContent
                      className="w-80 p-4"
                      style={{ backgroundColor: '#1B4229', color: '#FFFAEA', borderColor: 'rgba(205, 219, 45, 0.3)' }}
                      onPointerDownOutside={(e) => e.preventDefault()}
                    >
                      <p className="text-sm leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {content.benefitTooltip}
                      </p>
                    </HoverCardContent>
                  </HoverCard>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-olive-medium rounded-full mt-2 flex-shrink-0"></div>
                <span className="flex items-center gap-1">
                  {content.benefits[1]}
                  <a href={content.labReportUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center transition-transform hover:scale-110">
                    <Link className="w-4 h-4" style={{ color: '#1B4229' }} strokeWidth={2.5} />
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-olive-medium rounded-full mt-2 flex-shrink-0"></div>
                <span>{content.benefits[2]}</span>
              </li>
            </ul>


            {/* Quantity Selection */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedQuantity(Math.max(1, selectedQuantity - 1))}
                  className="w-10 h-10 rounded-xl border-2 border-olive-dark/20 bg-white/60 text-olive-dark hover:bg-olive-light/10 transition-all flex items-center justify-center font-bold text-lg"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  −
                </button>
                <span className="w-10 text-center font-bold text-olive-dark" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1rem, 1.2vw, 1.25rem)' }}>
                  {selectedQuantity}
                </span>
                <button
                  onClick={() => setSelectedQuantity(selectedQuantity + 1)}
                  className="w-10 h-10 rounded-xl border-2 border-olive-dark/20 bg-white/60 text-olive-dark hover:bg-olive-light/10 transition-all flex items-center justify-center font-bold text-lg"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  +
                </button>
              </div>
              <p className="text-olive-medium" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.8rem, 0.95vw, 1rem)' }}>
                {bottlesNeeded > 0
                  ? `Add ${bottlesNeeded} more bottle${bottlesNeeded > 1 ? 's' : ''} for free shipping`
                  : '✓ Free shipping applied'}
              </p>
            </div>

            {/* Add to Cart */}
            <Button
              onClick={handleAddToCart}
              className="w-full hover:bg-accent/90 text-olive-dark font-bold px-6 py-5 h-auto transition-all duration-300 hover:scale-[1.02]"
              style={{ fontFamily: 'UDC Working Man Sans, sans-serif', backgroundColor: '#CDDB2D', fontSize: 'clamp(1rem, 1.2vw, 1.25rem)', borderRadius: '10px' }}
            >
              Add to Cart — €{totalPrice}
            </Button>

            {/* Lab Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2">
              {labTiles.map(tile => (
                <div key={tile.key} className="rounded-xl border border-olive-dark overflow-hidden bg-transparent">
                  <div className="px-3 py-2" style={{ backgroundColor: '#1B4229' }}>
                    <div className="font-semibold uppercase tracking-wide text-center" style={{ color: '#FFFFFF', fontSize: 'clamp(0.8rem, 1vw, 1.1rem)' }}>
                      {tile.label}
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-baseline gap-1.5 mb-1">
                      <div className="font-bold text-olive-dark leading-none" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(1.2rem, 1.6vw, 1.8rem)' }}>
                        {tile.value}
                        {tile.unit && <span className="ml-1 text-olive-dark/90" style={{ fontSize: 'clamp(0.85rem, 1.1vw, 1.2rem)' }}>{tile.unit}</span>}
                      </div>
                      <div className="text-olive-light" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.7rem, 0.85vw, 0.9rem)' }}>
                        {tile.avg}
                      </div>
                    </div>
                    <p className="text-olive-medium leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.8rem, 1vw, 1.05rem)' }}>
                      {tile.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Product Info Tabs */}
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
    </div>
  );
};

export default ProductPage;
