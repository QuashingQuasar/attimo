import { useState, useEffect, useCallback, useMemo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useParams } from "react-router-dom";
import { MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Droplets, Sparkles, UtensilsCrossed, Sprout, Beaker, Link, ShieldCheck, Truck } from "lucide-react";
import { ProductOriginStory } from "@/components/product/ProductOriginStory";
import { ProductOriginRegion } from "@/components/product/ProductOriginRegion";
import { ProductLabTrust } from "@/components/product/ProductLabTrust";
import { OilComparison } from "@/components/OilComparison";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ProductInfoTabs } from "@/components/ProductInfoTabs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { fetchProducts, fetchSellingPlans, ShopifyProduct, SellingPlan } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { getProductContent, resolveShopifyHandle } from "@/lib/productContent";
import { QuantitySelector } from "@/components/QuantitySelector";
import { PurchaseOptions } from "@/components/PurchaseOptions";
import { NotifyMeForm } from "@/components/NotifyMeForm";
import { YouMightAlsoLike } from "@/components/YouMightAlsoLike";
import { detectCountry, getFreeShippingThreshold, isCountrySupported, GeoResult } from "@/lib/shipping";
import { UnsupportedCountryNotice } from "@/components/UnsupportedCountryNotice";

const ProductPage = () => {
  const { handle } = useParams<{handle: string;}>();
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [purchaseType, setPurchaseType] = useState<"one-time" | "subscribe">("one-time");
  const [selectedSellingPlanId, setSelectedSellingPlanId] = useState<string | null>(null);
  const [sellingPlans, setSellingPlans] = useState<SellingPlan[]>([]);
  const addItem = useCartStore((state) => state.addItem);
  const isMobile = useIsMobile();
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [countryName, setCountryName] = useState<string | null>(null);
  const freeShippingThreshold = useMemo(() => getFreeShippingThreshold(countryCode), [countryCode]);
  const countrySupported = useMemo(() => isCountrySupported(countryCode), [countryCode]);

  useEffect(() => {
    detectCountry().then(({ countryCode: cc, countryName: cn }) => {
      setCountryCode(cc);
      setCountryName(cn);
    });
  }, []);

  // Scroll to top when navigating between products
  useEffect(() => {
    const scrollContainer = document.querySelector('.overflow-y-scroll');
    if (scrollContainer) scrollContainer.scrollTop = 0;
    window.scrollTo(0, 0);
  }, [handle]);

  const shopifyHandle = resolveShopifyHandle(handle);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const [fetchedProducts, exactHandleProducts] = await Promise.all([
        fetchProducts(50),
        shopifyHandle ? fetchProducts(1, `handle:${shopifyHandle}`) : Promise.resolve([])]
        );

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

  // Fetch selling plans separately (requires unauthenticated_read_selling_plans scope)
  useEffect(() => {
    if (!shopifyHandle) return;
    fetchSellingPlans(shopifyHandle).then((plans) => {
      setSellingPlans(plans);
      if (plans.length > 0) {
        setSelectedSellingPlanId(plans[0].id);
      }
    });
  }, [shopifyHandle]);

  const product = products.find((p) => p.node.handle === shopifyHandle);
  const content = getProductContent(handle);

  const ONE_TIME_PRICE = 24;
  const SUBSCRIPTION_PRICE = 22;
  const activePrice = purchaseType === "subscribe" ? SUBSCRIPTION_PRICE : ONE_TIME_PRICE;

  const handleAddToCart = () => {
    if (!product) return;
    const variant = product.node.variants.edges[0].node;

    addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: { amount: String(activePrice), currencyCode: 'EUR' },
      quantity: selectedQuantity,
      selectedOptions: variant.selectedOptions || [],
      ...(purchaseType === "subscribe" && selectedSellingPlanId ? { sellingPlanId: selectedSellingPlanId } : {})
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

  const isInStock = product.node.variants.edges.some(v => v.node.availableForSale);

  const totalPrice = selectedQuantity * activePrice;

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
    label: "Flavour",
    value: content.tabs.details.flavor
  }];


  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFAEA' }}>
      <Header onWaitlistClick={() => {}} forceTransparent darkNav />
      
      {/* Product Hero Section */}
      <section className="lg:pt-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 items-start">
            
            {/* Left: Full-bleed sticky image */}
            <div className="lg:sticky lg:top-0 lg:self-start">
              <div className="w-full h-[75vh] md:h-auto md:max-h-[75vh] md:aspect-[3/4] lg:max-h-none lg:aspect-auto lg:h-screen relative overflow-hidden">
                <img
                src={productImages[selectedImageIndex]?.node?.url || productImages[0]?.node?.url}
                alt={productImages[selectedImageIndex]?.node?.altText || product.node.title}
                className="w-full h-full object-cover object-center" />
              

                {/* Overlay Thumbnails — bottom-right inside image */}
                {productImages.length > 1 &&
              <div className="absolute bottom-6 right-6 lg:right-1/2 lg:translate-x-1/2 flex gap-2">
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
            <div className="px-6 md:px-10 lg:px-12 pt-8 md:pt-6 lg:pt-28 pb-8 md:pb-12 space-y-8">
              
              {/* Harvest Badge + Title Block */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-5 py-2 rounded-full bg-olive-dark font-bold uppercase tracking-wider" style={{ color: content.buttonColor || '#CDDB2D', fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.75rem, 0.85vw, 0.85rem)' }}>
                    New Harvest
                  </span>
                  {(() => {
                  const inStock = product.node.variants.edges.some((v) => v.node.availableForSale);
                  return (
                    <span className={`font-bold uppercase tracking-wider ${inStock ? 'text-olive-dark' : handle === 'picual' ? 'text-olive-dark' : 'text-red-600'}`} style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.75rem, 0.85vw, 0.85rem)' }}>
                        {inStock ? 'In Stock' : handle === 'picual' ? 'Coming Soon' : 'Sold Out'}
                      </span>);

                })()}
                </div>

                {/* Title + Volume */}
                <h1 className="text-olive-dark leading-[1.1]" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(1.96rem, 3.8vw, 3.8rem)', fontWeight: 400 }}>
                  {content.heroTitle}
                  <span className="text-olive-medium ml-3 whitespace-nowrap align-baseline" style={{ fontFamily: 'Beverly Drive, cursive', fontSize: 'clamp(1.07rem, 2.025vw, 2.16rem)', fontStyle: 'italic', fontWeight: 400 }}>
                    {content.tabs.details.volume}
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-olive-medium !-mt-0.5 md:!-mt-1 sm-only-subtitle-size underline-offset-[8px]" style={{ fontFamily: 'Beverly Drive, cursive', fontWeight: 'bold', fontSize: 'clamp(1.07rem, 2.48vw, 2.48rem)', textDecoration: 'underline', textDecorationStyle: 'dashed', textDecorationColor: 'rgba(78, 91, 43, 0.4)', textUnderlineOffset: '8px' }}>
                {content.heroSubtitle}
              </p>

              {/* Description */}
              <p className="text-olive-medium leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.05rem, 1.25vw, 1.3rem)', maxWidth: '38.93rem' }}>
                {content.originStory.headline.split('.').slice(0, 3).filter(Boolean).join('.') + '.'}
              </p>

              {/* Attribute Grid — 2x2 like Arsenio */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-8 pt-2 pb-2">
                {attributes.map((attr) =>
              <div key={attr.label} className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      {attr.icon}
                      <span className="text-olive-dark font-semibold tracking-wide" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(0.95rem, 1.15vw, 1.2rem)' }}>
                        {attr.label}
                      </span>
                    </div>
                    <p className="text-olive-medium" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.95rem, 1.15vw, 1.2rem)' }}>
                      {attr.value}
                    </p>
                  </div>
              )}
              </div>

              {isInStock ? (
                countrySupported === false && countryName && countryCode ? (
                  <UnsupportedCountryNotice
                    countryName={countryName}
                    countryCode={countryCode}
                    productName={content.heroTitle}
                  />
                ) : (
                  <>
                    <QuantitySelector
                      quantity={selectedQuantity}
                      onQuantityChange={setSelectedQuantity}
                      pricePerUnit={activePrice}
                      onAddToCart={handleAddToCart}
                      buttonColor={content.buttonColor}
                      freeShippingThreshold={freeShippingThreshold} />

                    <PurchaseOptions
                      sellingPlans={sellingPlans}
                      oneTimePrice={ONE_TIME_PRICE}
                      subscriptionPrice={SUBSCRIPTION_PRICE}
                      purchaseType={purchaseType}
                      onPurchaseTypeChange={setPurchaseType}
                      selectedSellingPlanId={selectedSellingPlanId}
                      onSellingPlanChange={setSelectedSellingPlanId} />

                    <Button
                      onClick={handleAddToCart}
                      className="w-full hover:bg-accent/90 text-olive-dark font-bold px-4 md:px-6 py-5 md:py-7 h-auto transition-all duration-300 hover:scale-[1.02] text-center whitespace-normal leading-tight"
                      style={{
                        fontFamily: "UDC Working Man Sans, sans-serif",
                        backgroundColor: content.buttonColor,
                        fontSize: "clamp(0.85rem, 1.4vw, 1.45rem)",
                        borderRadius: "0.75rem"
                      }}>
                      <span className="hidden md:inline">
                        ADD TO CART {purchaseType === "subscribe" && <span className="line-through opacity-60 font-normal">€{selectedQuantity * ONE_TIME_PRICE}</span>} €{selectedQuantity * activePrice} <span className="font-normal">{selectedQuantity < freeShippingThreshold ? `(ADD ${freeShippingThreshold - selectedQuantity} BOTTLE${freeShippingThreshold - selectedQuantity > 1 ? 'S' : ''} FOR FREE SHIPPING)` : "(FREE SHIPPING ✓)"}</span>
                      </span>
                      <span className="flex flex-col items-center gap-0.5 md:hidden">
                        <span>ADD TO CART {purchaseType === "subscribe" && <span className="line-through opacity-60 font-normal">€{selectedQuantity * ONE_TIME_PRICE}</span>} €{selectedQuantity * activePrice}</span>
                        <span className="font-normal" style={{ fontSize: 'clamp(0.75rem, 1vw, 1rem)' }}>{selectedQuantity < freeShippingThreshold ? `(ADD ${freeShippingThreshold - selectedQuantity} MORE FOR FREE SHIPPING)` : "(FREE SHIPPING ✓)"}</span>
                      </span>
                    </Button>

                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                      <p className="text-olive-medium flex items-center gap-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.95rem, 1.15vw, 1.15rem)' }}>
                        <ShieldCheck size={20} strokeWidth={1.5} />
                        Third party lab-tested quality
                      </p>
                      <p className="text-olive-medium flex items-center gap-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.95rem, 1.15vw, 1.15rem)' }}>
                        <Truck size={20} strokeWidth={1.5} />
                        Order today, ships tomorrow
                      </p>
                    </div>
                  </>
                )
              ) : (
                <NotifyMeForm productName={content.heroTitle} backgroundColor={content.tileBackground} />
              )}

              {/* Lab Values — minimal cards */}
              <div className="grid grid-cols-2 gap-4">
                {content.labTiles.map((tile) =>
              <div key={tile.key} className="rounded-xl p-4" style={{ backgroundColor: 'rgba(27, 66, 41, 0.05)' }}>
                    <p className="text-olive-medium uppercase tracking-widest mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.75rem, 0.9vw, 0.95rem)' }}>
                      {tile.label}{tile.value === '—' && <span className="italic normal-case tracking-normal text-olive-medium/60 ml-2">(Waiting for results)</span>}
                    </p>
                    <p className="text-olive-dark font-bold md:flex md:items-baseline md:gap-2" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(1.6rem, 2.1vw, 2.3rem)' }}>
                      <span>
                        {tile.value}
                        {tile.value !== '—' && tile.unit && <span className="text-olive-medium font-normal ml-1" style={{ fontSize: 'clamp(0.85rem, 1vw, 1.05rem)' }}>{tile.unit}</span>}
                      </span>
                      <span className="block md:inline text-olive-light font-normal" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.72rem, 0.82vw, 0.88rem)' }}>
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
                  View lab results
                </a>
                

              
              </div>

              {/* Accordion Info */}
              <div className="pt-2">
                <ProductInfoTabs content={content} />
              </div>
            </div>
          </div>
      </section>

      {/* Content sections below product hero */}
      <ProductOriginStory content={content.originStory} tileBackground={content.tileBackground} tileAccent={content.tileAccent} headlineMaxWidth={handle === 'nocellara' || handle === 'picual' ? '70.35rem' : undefined} />
      <Testimonials headingColor={content.buttonColor || "#B3E58C"} />
      <ProductOriginRegion
        backgroundColor={content.tileBackground}
        headingColor={content.tileAccent}
        textColor={content.tileAccent}
        heading={content.originRegion?.heading}
        body={content.originRegion?.body}
        markerLon={content.originRegion?.markerLon}
        markerLat={content.originRegion?.markerLat}
        markerLabel={content.originRegion?.markerLabel}
        centerLon={content.originRegion?.centerLon}
        centerLat={content.originRegion?.centerLat}
        mapZoom={content.originRegion?.mapZoom}
        markerStyle={content.originRegion?.markerStyle} />
      
      <ProductLabTrust content={content.labTrust} labReportUrl={content.labReportUrl} />
      <OilComparison columnHeading={content.polyphenolLabel} polyphenolDisplay={`${content.polyphenolValue} mg/kg`} />
      <FAQ handle={handle} />
      <YouMightAlsoLike currentHandle={handle} accentColor={content.buttonColor} />

      <Footer />
    </div>);

};

export default ProductPage;