import { useState, useEffect, useCallback, useMemo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useParams } from "@/lib/router-stub";
import { MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Droplets, Sparkles, UtensilsCrossed, Sprout, Beaker, Link, ShieldCheck, Truck, Info, Lightbulb } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
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
import { QuantitySelector, getVolumeDiscountPercent } from "@/components/QuantitySelector";
import { PurchaseOptions } from "@/components/PurchaseOptions";
import { NotifyMeForm } from "@/components/NotifyMeForm";
import { YouMightAlsoLike } from "@/components/YouMightAlsoLike";
import { BlogSection } from "@/components/BlogSection";
import { detectCountry, getFreeShippingThreshold, isCountrySupported, GeoResult } from "@/lib/shipping";
import { UnsupportedCountryNotice } from "@/components/UnsupportedCountryNotice";
import { FirstOrderPopup } from "@/components/FirstOrderPopup";
import { DEFAULT_LOCALE, formatPrice, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  coverImage: any;
}

interface ProductPageProps {
  handle?: string;
  initialProducts?: ShopifyProduct[];
  initialSellingPlans?: SellingPlan[];
  initialBlogPosts?: BlogPost[];
  locale?: Locale;
}

const ProductPage = ({ handle: handleProp, initialProducts, initialSellingPlans, initialBlogPosts, locale = DEFAULT_LOCALE }: ProductPageProps = {}) => {
  const params = useParams<{handle: string;}>();
  const handle = handleProp ?? params.handle;
  const t = getDict(locale).product;
  const [products, setProducts] = useState<ShopifyProduct[]>(initialProducts ?? []);
  const [loading, setLoading] = useState(initialProducts && initialProducts.length > 0 ? false : true);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [purchaseType, setPurchaseType] = useState<"one-time" | "subscribe">("one-time");
  const [selectedSellingPlanId, setSelectedSellingPlanId] = useState<string | null>(
    initialSellingPlans && initialSellingPlans.length > 0 ? initialSellingPlans[0].id : null
  );
  const [sellingPlans, setSellingPlans] = useState<SellingPlan[]>(initialSellingPlans ?? []);
  const addItem = useCartStore((state) => state.addItem);
  const cartItems = useCartStore((state) => state.items);
  const cartBottleCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );
  const isMobile = useIsMobile();
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [countryName, setCountryName] = useState<string | null>(null);
  // Prefer the tier set by middleware (read from cookie) — single source of
  // truth shared with the announce bar. Fall back to ipapi-based detection.
  const freeShippingThreshold = useMemo(() => {
    if (typeof document !== "undefined") {
      const m = document.cookie.match(/(?:^|;\s*)attimo_shipping_tier=(\d+)/);
      if (m) return parseInt(m[1], 10);
    }
    return getFreeShippingThreshold(countryCode);
  }, [countryCode]);
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
    if (initialProducts && initialProducts.length > 0) return;
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
  }, [shopifyHandle, initialProducts]);

  // Fetch selling plans separately (requires unauthenticated_read_selling_plans scope)
  useEffect(() => {
    if (!shopifyHandle) return;
    if (initialSellingPlans !== undefined) return;
    fetchSellingPlans(shopifyHandle).then((plans) => {
      setSellingPlans(plans);
      if (plans.length > 0) {
        setSelectedSellingPlanId(plans[0].id);
      }
    });
  }, [shopifyHandle, initialSellingPlans]);

  const product = products.find((p) => p.node.handle === shopifyHandle);
  const content = getProductContent(handle, locale);

  useEffect(() => {
    if (!content) return;
    const productName = content.heroTitle?.split(" D'")[0]?.split(" DE ")[0] || handle || '';
    document.title = `ATTIMO ${productName.charAt(0) + productName.slice(1).toLowerCase()} | ${t.titleSuffix}`;
    return () => { document.title = `ATTIMO ${t.titleSuffix}`; };
  }, [handle, content]);

  // Meta Pixel: ViewContent
  useEffect(() => {
    if (!handle) return;
    const nameMap: Record<string, string> = {
      nocellara: 'Nocellara del Belice',
      coratina: 'Coratina',
      picual: 'Picual',
    };
    const productName = nameMap[handle];
    if (!productName) return;
    const slug = handle as "coratina" | "nocellara" | "picual";
    (window as any).fbq?.('track', 'ViewContent', {
      content_name: productName,
      content_ids: [handle],
      content_type: 'product',
      value: locale.prices[slug],
      currency: locale.currency.code,
    });
  }, [handle, locale]);

  useEffect(() => {
    const ogMap: Record<string, { title: string; description: string; image: string }> = {
      nocellara: { title: "Attimo Nocellara Extra Virgin Olive Oil | 400mg/kg Polyphenols", description: "Single-variety Nocellara extra virgin olive oil from Sicily. Early harvest, cold-pressed. 400mg/kg polyphenols — lab tested. 500ml.", image: "https://cdn.shopify.com/s/files/1/0949/7867/0975/files/NOCELLARA1_1.png?v=1772735243" },
      coratina: { title: "Attimo Coratina Extra Virgin Olive Oil | 847mg/kg Polyphenols", description: "Single-variety Coratina extra virgin olive oil from Puglia. Early harvest, cold-pressed. 847mg/kg polyphenols — lab tested. Certified organic. 500ml.", image: "https://cdn.shopify.com/s/files/1/0949/7867/0975/files/Coratina-2_1_1.png?v=1773399330" },
      picual: { title: "Attimo Picual Extra Virgin Olive Oil | 675mg/kg Polyphenols", description: "Single-variety Picual extra virgin olive oil from Andalusia. Early harvest, cold-pressed. 675mg/kg polyphenols — lab tested. 500ml.", image: "https://cdn.shopify.com/s/files/1/0949/7867/0975/files/Picual-v21.png?v=1773401549" }
    };
    const og = handle ? ogMap[handle] : undefined;
    if (!og) return;
    const titleEl = document.querySelector('meta[property="og:title"]');
    const descEl = document.querySelector('meta[property="og:description"]');
    const imgEl = document.querySelector('meta[property="og:image"]');
    const origTitle = titleEl?.getAttribute('content');
    const origDesc = descEl?.getAttribute('content');
    const origImg = imgEl?.getAttribute('content');
    if (titleEl) titleEl.setAttribute('content', og.title);
    if (descEl) descEl.setAttribute('content', og.description);
    if (imgEl) imgEl.setAttribute('content', og.image);
    return () => {
      if (titleEl && origTitle) titleEl.setAttribute('content', origTitle);
      if (descEl && origDesc) descEl.setAttribute('content', origDesc);
      if (imgEl && origImg) imgEl.setAttribute('content', origImg);
    };
  }, [handle]);

  const productSlug = (handle ?? "coratina") as "coratina" | "nocellara" | "picual";
  const ONE_TIME_PRICE = locale.prices[productSlug];
  // Subscription is a flat ~8% discount applied to the base price.
  const SUBSCRIPTION_PRICE = Math.round(ONE_TIME_PRICE * (22 / 24) * 100) / 100;
  const activePrice = purchaseType === "subscribe" ? SUBSCRIPTION_PRICE : ONE_TIME_PRICE;

  const handleAddToCart = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: 'add_to_cart_custom' });

    // Meta Pixel: AddToCart + InitiateCheckout
    const nameMap: Record<string, string> = {
      nocellara: 'Nocellara del Belice',
      coratina: 'Coratina',
      picual: 'Picual',
    };
    const pixelName = nameMap[handle || ''] || handle || '';
    const totalValue = activePrice * selectedQuantity;
    (window as any).fbq?.('track', 'AddToCart', {
      content_name: pixelName,
      content_ids: [handle],
      content_type: 'product',
      value: totalValue,
      currency: locale.currency.code,
    });
    (window as any).fbq?.('track', 'InitiateCheckout', {
      value: totalValue,
      currency: locale.currency.code,
      num_items: selectedQuantity,
    });

    if (!product) return;
    const variant = product.node.variants.edges[0].node;

    addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: { amount: String(activePrice), currencyCode: locale.currency.code },
      quantity: selectedQuantity,
      selectedOptions: variant.selectedOptions || [],
      isSubscription: purchaseType === "subscribe",
      ...(purchaseType === "subscribe" && selectedSellingPlanId ? { sellingPlanId: selectedSellingPlanId } : {})
    });
    toast.success(t.toastAdded.replace("{n}", String(selectedQuantity)).replace(/\{plural\}/g, selectedQuantity > 1 ? "s" : ""), {
      position: "top-center"
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#FFFAEA' }}>
        <Header onWaitlistClick={() => {}} forceScrolled locale={locale} />
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-olive-medium">{t.loading}</p>
        </div>
      </div>);

  }

  if (!product) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#FFFAEA' }}>
        <Header onWaitlistClick={() => {}} forceScrolled locale={locale} />
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-olive-medium">{t.notFound}</p>
        </div>
      </div>);

  }

  const productImages = product.node.images?.edges || [];
  const currencyCode = product.node.priceRange.minVariantPrice.currencyCode;

  const isInStock = product.node.variants.edges.some(v => v.node.availableForSale);

  // Per-product out-of-stock copy. Anything not listed falls back to the
  // generic "Sold Out" / default NotifyMeForm copy below.
  // - Picual: launching ("Coming Soon")
  // - Coratina: restocking ("Back Soon" / "New Batch on the Way")
  const OOS_COPY: Record<string, {
    badge: string;
    badgeClass: string;
    formHeading?: string;
    formSubtitle?: string;
  }> = {
    picual: {
      badge: t.comingSoon,
      badgeClass: "text-olive-dark",
      // formHeading / formSubtitle omitted → NotifyMeForm uses its defaults.
    },
    coratina: {
      badge: t.backSoon,
      badgeClass: "text-olive-dark",
      formHeading: t.newBatchHeading,
      formSubtitle: t.newBatchSubtitle,
    },
  };
  const oosCopy = handle ? OOS_COPY[handle] : undefined;

  const totalPrice = selectedQuantity * activePrice;

  // Attribute grid inspired by Arsenio — Composition, Color, Food pairings, Nose
  const attributes = [
  {
    icon: <Droplets size={20} className="text-olive-dark" />,
    label: t.attrVariety,
    value: `100% ${content.tabs.details.olive}`
  },
  {
    icon: <MapPin size={20} className="text-olive-dark" />,
    label: t.attrOrigin,
    value: content.tabs.details.origin
  },
  {
    icon: <Sprout size={20} className="text-olive-dark" />,
    label: t.attrHarvest,
    value: t.harvestDate
  },
  {
    icon: <Sparkles size={20} className="text-olive-dark" />,
    label: t.attrFlavour,
    value: content.tabs.details.flavor
  }];


  return (
    <div className="relative min-h-screen flex flex-col" style={{ backgroundColor: "#FFFAEA" }}>
      <Header onWaitlistClick={() => {}} forceTransparent darkNav locale={locale} />
      
      {/* Product Hero Section */}
      <section className="product-hero lg:pt-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 items-start">
            
            {/* Left: Full-bleed sticky image */}
            <div className="lg:sticky lg:top-0 lg:self-start">
              <div className="w-full h-[50vh] md:h-auto md:max-h-[75vh] md:aspect-[3/4] lg:max-h-none lg:aspect-auto lg:h-screen relative overflow-hidden">
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
            <div className="px-6 md:px-10 lg:px-12 pt-8 md:pt-6 lg:pt-[4.55rem] pb-8 md:pb-12 space-y-4 lg:space-y-6">
              
              {/* Harvest Badge + Title Block */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-5 py-2 rounded-full bg-olive-dark font-bold uppercase tracking-wider" style={{ color: content.buttonColor || '#CDDB2D', fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.75rem, 0.85vw, 0.85rem)' }}>
                    {t.newHarvest}
                  </span>
                  {(() => {
                  // Mirrors the isInStock computation above.
                  const inStock = product.node.variants.edges.some((v) => v.node.availableForSale);
                  const badgeText = inStock ? t.inStock : (oosCopy?.badge ?? t.soldOut);
                  const badgeColor = inStock
                    ? 'text-olive-dark'
                    : (oosCopy?.badgeClass ?? 'text-red-600');
                  return (
                    <span className={`font-bold uppercase tracking-wider ${badgeColor}`} style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.75rem, 0.85vw, 0.85rem)' }}>
                        {badgeText}
                      </span>);

                })()}
                </div>

                {/* Title + Volume */}
                <h1 className="text-olive-dark leading-[1.1] tablet-title-size" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(1.67rem, 3.23vw, 3.23rem)', fontWeight: 400 }}>
                  {content.heroTitle}
                  <span className="text-olive-medium ml-3 whitespace-nowrap align-baseline tablet-volume-size" style={{ fontFamily: 'Beverly Drive, cursive', fontSize: 'clamp(0.91rem, 1.72vw, 1.84rem)', fontStyle: 'italic', fontWeight: 400 }}>
                    {content.tabs.details.volume}
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-olive-medium !-mt-0.5 md:!-mt-1 sm-only-subtitle-size tablet-subtitle-size underline-offset-[8px]" style={{ fontFamily: 'Beverly Drive, cursive', fontWeight: 'bold', fontSize: 'clamp(0.91rem, 2.11vw, 2.11rem)', textDecoration: 'underline', textDecorationStyle: 'dashed', textDecorationColor: 'rgba(78, 91, 43, 0.4)', textUnderlineOffset: '8px' }}>
                {content.heroSubtitle}
              </p>

              {/* Description */}
              <p className="text-olive-medium leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.875rem, 1.05vw, 1.063rem)', maxWidth: '38.93rem' }}>
                {content.originStory.headline.split('.').slice(0, 3).filter(Boolean).join('.') + '.'}
              </p>

              {/* Attribute Grid — 2x2 like Arsenio */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-8 pt-2 pb-2">
                {attributes.map((attr) =>
              <div key={attr.label} className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      {attr.icon}
                      <span className="text-olive-dark font-semibold tracking-wide" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(0.875rem, 1.05vw, 1.063rem)' }}>
                        {attr.label}
                      </span>
                    </div>
                    <p className="text-olive-medium" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.875rem, 1.05vw, 1.063rem)' }}>
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
                      freeShippingThreshold={freeShippingThreshold}
                      variantId={product.node.variants.edges[0]?.node.id}
                      locale={locale} />

                    <PurchaseOptions
                      sellingPlans={sellingPlans}
                      oneTimePrice={ONE_TIME_PRICE}
                      subscriptionPrice={SUBSCRIPTION_PRICE}
                      purchaseType={purchaseType}
                      onPurchaseTypeChange={setPurchaseType}
                      selectedSellingPlanId={selectedSellingPlanId}
                      onSellingPlanChange={setSelectedSellingPlanId}
                      locale={locale} />

                    <Button
                      onClick={handleAddToCart}
                      className="w-full hover:bg-accent/90 text-olive-dark font-bold px-4 md:px-6 py-3 h-auto transition-all duration-300 hover:scale-[1.02] text-center whitespace-normal leading-tight"
                      style={{
                        fontFamily: "UDC Working Man Sans, sans-serif",
                        backgroundColor: content.buttonColor,
                        fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                        borderRadius: "0.75rem"
                      }}>
                      <span className="flex flex-col items-center gap-0.5">
                        {(() => {
                          // Volume discount only applies to one-time orders.
                          // Subscriptions already have their own discounted
                          // per-bottle price baked in (SUBSCRIPTION_PRICE).
                          const volumeDiscount = purchaseType === "subscribe"
                            ? 0
                            : getVolumeDiscountPercent(selectedQuantity);
                          const baseTotal = selectedQuantity * activePrice;
                          const finalTotal = baseTotal * (1 - volumeDiscount);
                          const originalOneTimeTotal = selectedQuantity * ONE_TIME_PRICE;
                          // Show strikethrough when subscribing (vs one-time
                          // total) OR when a volume discount is in effect
                          // (vs un-discounted one-time total).
                          const showStrikethrough =
                            purchaseType === "subscribe" || volumeDiscount > 0;
                          // When a volume discount is in effect, display two
                          // decimals so the UI matches what Shopify will
                          // charge to the cent. Subscription path keeps the
                          // existing locale default (0 decimals for EUR/DKK).
                          const finalDecimals = volumeDiscount > 0 ? 2 : undefined;
                          return (
                            <span className="text-lg">
                              {t.addToCart}{" "}
                              {showStrikethrough && (
                                <span className="line-through opacity-60 font-normal">
                                  {formatPrice(originalOneTimeTotal, locale)}
                                </span>
                              )}{" "}
                              {formatPrice(finalTotal, locale, finalDecimals)}
                            </span>
                          );
                        })()}
                        <span className="font-normal text-xs">{(() => {
                          if (cartBottleCount >= freeShippingThreshold) return t.freeShipCheck;
                          const needed = freeShippingThreshold - cartBottleCount;
                          const plural = needed > 1 ? "S" : "";
                          // Empty cart drops "MORE" — "ADD 2 BOTTLES FOR FREE
                          // SHIPPING" reads as a baseline instruction. Once the
                          // customer has any bottle in cart, switch to the
                          // "MORE" framing so it's clearly incremental.
                          const more = cartBottleCount === 0 ? "" : t.moreWord;
                          return t.addForFreeShip.replace("{n}", String(needed)).replace("{more}", more).replace("{plural}", plural);
                        })()}</span>
                      </span>
                    </Button>

                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                      <p className="text-olive-medium flex items-center gap-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.875rem, 1.05vw, 1.063rem)' }}>
                        <ShieldCheck size={20} strokeWidth={1.5} />
                        {t.trustLab}
                      </p>
                      <p className="text-olive-medium flex items-center gap-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.875rem, 1.05vw, 1.063rem)' }}>
                        <Truck size={20} strokeWidth={1.5} />
                        {content.shippingNotice ?? t.shipsTomorrow}
                      </p>
                    </div>
                  </>
                )
              ) : (
                <NotifyMeForm
                  productName={content.heroTitle}
                  backgroundColor={content.tileBackground}
                  buttonBackgroundColor={content.buttonColor}
                  heading={oosCopy?.formHeading}
                  subtitle={oosCopy?.formSubtitle}
                  restockProductKey={content.polyphenolLabel}
                  locale={locale}
                />
              )}

              {/* Lab Values — minimal cards */}
              <div className="grid grid-cols-2 gap-4">
                {content.labTiles.map((tile) =>
              <div key={tile.key} className="rounded-xl p-4" style={{ backgroundColor: 'rgba(27, 66, 41, 0.05)' }}>
                    <p className="text-olive-medium uppercase tracking-widest mb-1 flex items-center gap-1.5" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.75rem, 0.9vw, 0.95rem)' }}>
                      <span>{tile.label}{tile.value === '—' && <span className="italic normal-case tracking-normal text-olive-medium/60 ml-2">{t.waitingResults}</span>}</span>
                      {tile.key === 'polyphenols' && tile.label === 'BIOACTIVE POLYPHENOLS' && tile.value !== '—' && (
                        <HoverCard openDelay={0} closeDelay={100}>
                          <HoverCardTrigger asChild>
                            <button
                              type="button"
                              aria-label={t.polyTooltipAria}
                              className="inline-flex items-center justify-center rounded-full text-olive-medium hover:text-olive-dark transition-colors cursor-help align-middle"
                              onClick={(e) => e.currentTarget.focus()}
                            >
                              <Info size={14} strokeWidth={2} />
                            </button>
                          </HoverCardTrigger>
                          <HoverCardContent
                            side="top"
                            align="start"
                            className="p-4 normal-case tracking-normal"
                            style={{
                              backgroundColor: '#FFFAEA',
                              color: '#1B4229',
                              borderColor: 'rgba(27, 66, 41, 0.2)',
                              maxWidth: '300px',
                            }}
                            onPointerDownOutside={(e) => e.preventDefault()}
                          >
                            <p className="leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem' }}>
                              {t.polyTooltipText.replace("{value}", tile.value).replace("{unit}", tile.unit)}
                            </p>
                          </HoverCardContent>
                        </HoverCard>
                      )}
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
                <p className="text-olive-medium mt-1.5" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.875rem, 1.05vw, 1.063rem)' }}>
                        {tile.description}
                      </p>
                }
                  </div>
              )}
              </div>

              {/* Lab Report Link */}
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <a
                href={content.labReportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-olive-dark hover:text-olive-medium transition-colors underline underline-offset-4 decoration-olive-dark/30"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.85rem, 1vw, 1.05rem)' }}>
                  <Beaker size={18} />
                  {t.viewLabResults}
                </a>
                <a
                href="/blog/how-to-read-olive-oil-lab-analysis"
                className="inline-flex items-center gap-2 text-olive-dark hover:text-olive-medium transition-colors underline underline-offset-4 decoration-olive-dark/30"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.85rem, 1vw, 1.05rem)' }}>
                  <Lightbulb size={18} />
                  {t.howToReadLabValues}
                </a>
                {/* Internal link into the high-polyphenol category hub (English-only
                    for v1; the localized PDPs link to the same canonical hub). */}
                <a
                href="/high-polyphenol-olive-oil"
                className="inline-flex items-center gap-2 text-olive-dark hover:text-olive-medium transition-colors underline underline-offset-4 decoration-olive-dark/30"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.85rem, 1vw, 1.05rem)' }}>
                  <Sparkles size={18} />
                  Why high polyphenols?
                </a>
              </div>

              {/* Accordion Info */}
              <div className="pt-2">
                <ProductInfoTabs content={content} locale={locale} />
              </div>
            </div>
          </div>
      </section>

      {/* Content sections below product hero */}
      <ProductOriginStory content={content.originStory} tileBackground={content.tileBackground} tileAccent={content.tileAccent} headlineMaxWidth={handle === 'nocellara' || handle === 'picual' ? '70.35rem' : undefined} />
      <Testimonials headingColor={content.buttonColor || "#B3E58C"} locale={locale} />
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
        markerStyle={content.originRegion?.markerStyle}
        locale={locale} />
      
      <ProductLabTrust content={content.labTrust} labReportUrl={content.labReportUrl} locale={locale} />
      <OilComparison columnHeading={content.polyphenolLabel} polyphenolDisplay={`${content.polyphenolValue} mg/kg`} locale={locale} />
      <FAQ handle={handle} locale={locale} />
      <YouMightAlsoLike currentHandle={handle} accentColor={content.buttonColor} locale={locale} />

      <BlogSection initialPosts={initialBlogPosts} locale={locale} />

      <Footer locale={locale} />
      <FirstOrderPopup />
    </div>);

};

export default ProductPage;