import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, Minus, Plus, Trash2, Loader2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { DEFAULT_LOCALE, formatPrice, localizeHref, shopifyContextForLocale, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";
import { urlSlugForShopifyHandle } from "@/lib/productContent";
import { getVolumeDiscountPercent } from "@/components/QuantitySelector";
import { Link } from "@/lib/router-stub";
import { fetchProducts, buildCartPermalink, type CartItem, type ShopifyProduct } from "@/lib/shopify";
import { CORATINA_3L_HANDLE, CORATINA_3L_BOTTLE_EQUIVALENT } from "@/lib/coratina3L";
import { imageForColor, sizedImage } from "@/lib/merchImages";
import { colorLabel } from "@/lib/merchContent";
import { detectCountry, getFreeShippingThreshold, freeShippingAvailable, readShippingTierCookie } from "@/lib/shipping";

// Subscription items are sold at a fixed ~8% discount across all locales
// (€22 vs €24 in the EUR config). Apply the same ratio to the displayed
// price in any locale so cart totals stay consistent with the product page.
const SUBSCRIPTION_RATIO = 22 / 24;

const PRODUCT_DISPLAY_NAMES: Record<string, string> = {
  coratina: "Coratina",
  picual: "Picual",
  nocellara: "Nocellara",
};

const PRODUCT_ORDER = ["coratina", "picual", "nocellara"];

// Oil vs merch. Oils carry the locale price table + volume discount + count
// toward free shipping; merch (Printful, productType "Merch") does none of
// that and uses its raw Shopify variant price.
function isOilItem(item: CartItem): boolean {
  return item.product?.node?.productType === "Olive Oil";
}

// Bottle-equivalents an oil line contributes toward the free-shipping
// threshold. A 3L bag-in-box counts as its 6-bottle equivalent so a single
// box always clears the threshold (free shipping on its own); regular bottles
// count as their quantity. Non-oil (merch) contributes nothing.
function oilBottleEquivalents(item: CartItem): number {
  if (!isOilItem(item)) return 0;
  if (item.product?.node?.handle === CORATINA_3L_HANDLE) {
    return CORATINA_3L_BOTTLE_EQUIVALENT * item.quantity;
  }
  return item.quantity;
}

// Cart thumbnail for a line item. For merch with a colour option, resolve the
// image for the SELECTED colour by filename (Printful scrambles per-variant
// images, so the first gallery image isn't colour-specific), matching the same
// side — front/back — as the gallery's first image. Falls back to the first
// image for oils or when the colour can't be matched.
function lineItemImage(item: CartItem): string | undefined {
  const urls = item.product?.node?.images?.edges?.map((e) => e.node.url) ?? [];
  const first = urls[0];
  const color = isOilItem(item)
    ? null
    : item.selectedOptions?.find((o) => /colou?r/i.test(o.name))?.value ?? null;
  if (color) {
    const side = /back/i.test(first ?? "") ? "back" : "front";
    const resolved = imageForColor(color, urls, { side });
    if (resolved) return resolved;
  }
  return first;
}

// Variant label for the cart, with the frontend colour rename applied (e.g.
// Maroon -> Burgundy) so it matches the storefront. Built from selectedOptions
// when present (only colour options are renamed); falls back to relabelling
// each "/"-separated token of the raw variant title for legacy cart entries.
function variantLabel(item: CartItem): string {
  const opts = item.selectedOptions ?? [];
  if (opts.length) {
    return opts
      .map((o) => (/colou?r/i.test(o.name) ? colorLabel(o.value) : o.value))
      .join(" / ");
  }
  return (item.variantTitle ?? "")
    .split("/")
    .map((s) => colorLabel(s.trim()))
    .join(" / ");
}

function localizedUnitPrice(item: CartItem, locale: Locale): number {
  const slug = urlSlugForShopifyHandle(item.product?.node?.handle);
  // Merch (and anything without a locale price slug) uses the Shopify variant
  // price stored on the cart line.
  if (!slug) return parseFloat(item.price.amount);
  const base = locale.prices[slug];
  const isSubscription = !!(item.isSubscription || item.sellingPlanId);
  return isSubscription ? base * SUBSCRIPTION_RATIO : base;
}

// Per-line total with volume discount applied. The discount applies to OILS
// only (never merch) and never stacks on top of a subscription.
function localizedLineTotal(item: CartItem, locale: Locale): number {
  const baseTotal = localizedUnitPrice(item, locale) * item.quantity;
  const isSubscription = !!(item.isSubscription || item.sellingPlanId);
  if (isSubscription || !isOilItem(item)) return baseTotal;
  return baseTotal * (1 - getVolumeDiscountPercent(item.quantity));
}

export const CartDrawer = ({ darkIcon = false, locale = DEFAULT_LOCALE }: { darkIcon?: boolean; locale?: Locale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = getDict(locale).cart;
  const {
    items,
    isLoading,
    updateQuantity,
    removeItem,
    addItem,
    createCheckout,
  } = useCartStore();

  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [products, setProducts] = useState<ShopifyProduct[] | null>(null);

  // Toggle a body class while the drawer is open so the geo-targeted
  // shipping announcement bar can hide itself on mobile (where the drawer
  // is full-screen and the bar would overlap the cart title).
  useEffect(() => {
    document.body.classList.toggle('cart-open', isOpen);
    return () => document.body.classList.remove('cart-open');
  }, [isOpen]);

  // Same call shape used on product pages — keeps the threshold consistent
  // between the cart nudge and what was promised on the PDP.
  useEffect(() => {
    detectCountry().then(({ countryCode: cc }) => setCountryCode(cc));
  }, []);

  // Lazy-load product catalog the first time the drawer opens, for the
  // recommendations section. Cached for the rest of the session.
  useEffect(() => {
    if (!isOpen || products !== null) return;
    fetchProducts(50)
      .then((p) => setProducts(p))
      .catch(() => setProducts([]));
  }, [isOpen, products]);

  console.log('[CartDrawer] Rendering, items:', items.length, 'isOpen:', isOpen);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  // Free shipping is an OILS-only promise (we ship oils; merch ships separately
  // via Printful), so only oil bottles count toward the threshold/nudge.
  const oilBottleCount = items.reduce(
    (sum, item) => sum + oilBottleEquivalents(item),
    0
  );
  const hasOil = items.some(isOilItem);
  const hasMerch = items.some((item) => item.product?.node?.productType === "Merch");
  const subtotalBeforeDiscount = items.reduce(
    (sum, item) => sum + localizedUnitPrice(item, locale) * item.quantity,
    0
  );
  const subtotal = items.reduce(
    (sum, item) => sum + localizedLineTotal(item, locale),
    0
  );
  const hasVolumeDiscount = subtotalBeforeDiscount > subtotal + 0.005;
  // Oils are whole-euro/kr (0 decimals); merch has cents (e.g. €36.50). Show 2
  // decimals whenever cents matter — a discount is active or merch is present.
  // Drop decimals for whole amounts but keep real cents (merch can be €38.50,
  // discounts can land on cents). Applied per amount, so €45 shows as €45.
  const autoDecimals = (amount: number) => (Number.isInteger(amount) ? 0 : 2);

  // Prefer the tier set by middleware (read from cookie) — it's the same
  // source as the announce-bar's "FREE SHIPPING ON N+ BOTTLES" message and
  // is set instantly on first paint from Vercel's edge geo. Fall back to the
  // ipapi.co detection only when the cookie is missing.
  // Read in a useEffect (not a render-time useMemo) so the middleware cookie is
  // reliably seen after mount; a render-time read raced hydration and could
  // fall back to the default-2 threshold in threshold-3 markets.
  const [freeShippingThreshold, setFreeShippingThreshold] = useState<number>(
    () => getFreeShippingThreshold(null),
  );
  useEffect(() => {
    const cookieTier = readShippingTierCookie();
    setFreeShippingThreshold(cookieTier ?? getFreeShippingThreshold(countryCode));
  }, [countryCode]);
  const qualifiesForFreeShipping = oilBottleCount >= freeShippingThreshold;
  const bottlesNeeded = Math.max(0, freeShippingThreshold - oilBottleCount);

  const recommendations = useMemo(() => {
    if (!products) return [];
    const inCartHandles = new Set(
      items.map((it) => it.product?.node?.handle).filter(Boolean) as string[]
    );
    return products
      .filter((p) => {
        const slug = urlSlugForShopifyHandle(p.node.handle);
        return slug !== null && !inCartHandles.has(p.node.handle);
      })
      .sort((a, b) => {
        const aSlug = urlSlugForShopifyHandle(a.node.handle) || "";
        const bSlug = urlSlugForShopifyHandle(b.node.handle) || "";
        return PRODUCT_ORDER.indexOf(aSlug) - PRODUCT_ORDER.indexOf(bSlug);
      });
  }, [products, items]);

  const handleAddRecommendation = (product: ShopifyProduct) => {
    const slug = urlSlugForShopifyHandle(product.node.handle);
    if (!slug) return;
    const variant = product.node.variants?.edges?.[0]?.node;
    if (!variant) return;
    const price = locale.prices[slug];
    addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: { amount: String(price), currencyCode: locale.currency.code },
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
      isSubscription: false,
    });
  };

  const handleCheckout = async () => {
    // Pass the active locale's full Shopify context: country pins the
    // checkout market/currency AND language sets the checkout language
    // (France → French/EUR). default/dk/se resolve to undefined → English
    // checkout, unchanged. Resolved from the SSR-provided `locale` prop, so
    // it's correct on first paint without waiting on client state.
    // createCheckout handles its own errors (toast + resets loading), so a
    // failure surfaces to the user AND leaves checkoutUrl null below.
    await createCheckout(shopifyContextForLocale(locale));
    const checkoutUrl = useCartStore.getState().checkoutUrl;
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
      return;
    }
    // Creation failed or timed out (the store already showed an error toast).
    // Rather than strand the customer, fall back to a direct Shopify cart
    // permalink so they can still reach checkout. This is exactly the case
    // that lost us sales: a Storefront hiccup → infinite spinner → giving up.
    const fallbackUrl = buildCartPermalink(items);
    if (fallbackUrl) {
      window.location.href = fallbackUrl;
    }
  };

  // Grid of recommendation cards, shared by both the empty state and the
  // "You might also like" block below the line items. Heading lives at the
  // call site so each view can use its own copy.
  const recommendationsGrid = recommendations.length > 0 ? (
    <div className="grid grid-cols-3 gap-2">
      {recommendations.map((product) => {
        const slug = urlSlugForShopifyHandle(product.node.handle);
        if (!slug) return null;
        const variant = product.node.variants?.edges?.[0]?.node;
        if (!variant) return null;
        const image = product.node.images?.edges?.[0]?.node?.url;
        const name = PRODUCT_DISPLAY_NAMES[slug] ?? slug;
        const price = locale.prices[slug];
        return (
          <div key={product.node.id} className="flex flex-col items-center text-center">
            {image && (
              <Link
                to={localizeHref(`/product/${slug}`, locale)}
                aria-label={t.viewProduct(name)}
                className="block w-full aspect-square rounded-lg overflow-hidden mb-1.5 transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#1B4229' }}
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover object-center"
                />
              </Link>
            )}
            <p
              className="text-xs font-medium leading-tight"
              style={{ color: '#1B4229', fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {name}
            </p>
            <p
              className="text-xs mb-1.5"
              style={{ color: '#1B4229', opacity: 0.75, fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {formatPrice(price, locale)}
            </p>
            <button
              type="button"
              onClick={() => handleAddRecommendation(product)}
              className="px-3 py-1 text-xs font-bold rounded transition-opacity hover:opacity-90"
              style={{
                backgroundColor: 'rgb(205, 219, 45)',
                color: '#1B4229',
                fontFamily: 'UDC Working Man Sans, sans-serif',
              }}
            >
              {t.add}
            </button>
          </div>
        );
      })}
    </div>
  ) : null;

  const recommendationsHeadingStyle = {
    fontFamily: 'UDC Working Man Sans, sans-serif',
    color: '#1B4229',
    letterSpacing: '0.05em',
  } as const;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          onClick={(e) => {
            console.log('[CartDrawer] Cart icon clicked', e);
            e.stopPropagation();
          }}
          className={`${darkIcon ? 'text-olive-dark' : 'text-white'} hover:opacity-80 transition-opacity relative`}
          aria-label={t.ariaLabel}
        >
          <ShoppingCart className="h-7 w-7 md:h-8 md:w-8" />
          {totalItems > 0 && (
            <Badge
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs font-semibold"
              style={{
                backgroundColor: 'rgb(205, 219, 45)',
                color: '#1B4229',
                border: 'none'
              }}
            >
              {totalItems}
            </Badge>
          )}
        </button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg flex flex-col h-full" style={{ backgroundColor: 'rgb(255, 250, 234)' }}>
        <SheetHeader className="flex-shrink-0 text-left">
          <SheetTitle asChild>
            <h1
              className="font-bold uppercase tracking-tight m-0"
              style={{
                fontFamily: 'UDC Working Man Sans, sans-serif',
                color: '#1B4229',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                lineHeight: 1.05,
              }}
            >
              {t.title}
            </h1>
          </SheetTitle>
          <SheetDescription className={totalItems === 0 ? "sr-only" : undefined}>
            {totalItems === 0
              ? t.emptyDescription
              : t.itemsInCart(totalItems)}
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col flex-1 pt-6 min-h-0">
          {items.length === 0 ? (
            <div className="flex flex-col flex-1 min-h-0">
              <h3
                className="text-sm uppercase mb-3 flex-shrink-0"
                style={recommendationsHeadingStyle}
              >
                {t.emptyHeading}
              </h3>
              {recommendationsGrid && (
                <div className="flex-1 overflow-y-auto pr-2 min-h-0">
                  {recommendationsGrid}
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Free-shipping nudge — oils only (we ship oils; merch ships
                  separately via Printful, so it never affects this). Hidden for
                  merch-only carts, and for markets with no free shipping at all
                  (FedEx band), where a "add N bottles" nudge is meaningless. */}
              {oilBottleCount > 0 && freeShippingAvailable(freeShippingThreshold) && (
                <div className="flex-shrink-0 mb-3">
                  {qualifiesForFreeShipping ? (
                    <div
                      className="px-3 py-2 rounded-md text-sm font-semibold text-center"
                      style={{
                        backgroundColor: 'rgba(205, 219, 45, 0.25)',
                        color: '#1B4229',
                        fontFamily: 'Space Grotesk, sans-serif',
                      }}
                    >
                      {t.freeShipping}
                    </div>
                  ) : (
                    <div
                      className="px-3 py-2 rounded-md text-sm text-center"
                      style={{
                        backgroundColor: 'rgba(27, 66, 41, 0.06)',
                        color: '#1B4229',
                        fontFamily: 'Space Grotesk, sans-serif',
                      }}
                    >
                      {t.freeShippingNudge(bottlesNeeded)}
                    </div>
                  )}
                </div>
              )}

              {/* Items + recommendations scroll together. */}
              <div className="flex-1 overflow-y-auto pr-2 min-h-0">
                <div className="divide-y divide-olive-dark/10">
                  {items.map((item) => (
                    <div key={item.variantId} className="flex items-center gap-5 py-3">
                      <div className="w-28 h-28 rounded-lg overflow-hidden flex-shrink-0">
                        {lineItemImage(item) && (
                          <img
                            src={sizedImage(lineItemImage(item), 224)}
                            alt={item.product.node.title}
                            className="w-full h-full object-cover object-center"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                        <h4 className="font-medium text-sm leading-tight">{item.product.node.title}</h4>
                        {!isOilItem(item) && item.variantTitle && item.variantTitle !== "Default Title" && (
                          <span
                            className="text-xs uppercase"
                            style={{ fontFamily: 'UDC Working Man Sans, sans-serif', color: '#1B4229', opacity: 0.7, letterSpacing: '0.08em' }}
                          >
                            {variantLabel(item)}
                          </span>
                        )}
                        <p className="font-semibold text-sm">
                          {formatPrice(localizedUnitPrice(item, locale), locale, autoDecimals(localizedUnitPrice(item, locale)))}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.variantId, item.quantity - 1)}>
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-6 text-center text-sm">{item.quantity}</span>
                            <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.variantId, item.quantity + 1)}>
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeItem(item.variantId)}>
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {recommendationsGrid && (
                  <div className="mt-4 pt-4 border-t border-olive-dark/10">
                    <h3 className="text-sm uppercase mb-3" style={recommendationsHeadingStyle}>
                      {t.youMightAlsoLike}
                    </h3>
                    {recommendationsGrid}
                  </div>
                )}
              </div>

              {/* Mixed cart: oils (shipped by us) + merch (shipped by Printful)
                  arrive separately. Flag it so the split delivery isn't a
                  surprise. */}
              {hasOil && hasMerch && (
                <div
                  className="flex-shrink-0 mb-3 px-3 py-2 rounded-md text-xs text-center"
                  style={{
                    backgroundColor: 'rgba(27, 66, 41, 0.06)',
                    color: '#1B4229',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  {t.separateShipments}
                </div>
              )}

              {/* Subtotal + Shipping rows — no combined total per spec. */}
              <div className="flex-shrink-0 space-y-1 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-base" style={{ color: '#1B4229' }}>{t.subtotal}</span>
                  <span className="text-base font-semibold" style={{ color: '#1B4229' }}>
                    {hasVolumeDiscount && (
                      <span className="line-through opacity-60 font-normal mr-2">
                        {formatPrice(subtotalBeforeDiscount, locale, autoDecimals(subtotalBeforeDiscount))}
                      </span>
                    )}
                    {/* 2 decimals when a discount is active or merch is in the
                        cart, so the UI matches what Shopify actually charges. */}
                    {formatPrice(subtotal, locale, autoDecimals(subtotal))}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-base" style={{ color: '#1B4229' }}>{t.shipping}</span>
                  <span
                    className="text-base font-semibold"
                    style={{ color: qualifiesForFreeShipping ? '#1B4229' : 'rgba(27, 66, 41, 0.7)' }}
                  >
                    {qualifiesForFreeShipping ? t.free : t.calculatedAtCheckout}
                  </span>
                </div>

                <Button
                  onClick={handleCheckout}
                  className="w-full h-14 text-lg font-bold hover:opacity-90 transition-opacity"
                  disabled={items.length === 0 || isLoading}
                  style={{
                    backgroundColor: 'rgb(205, 219, 45)',
                    color: '#1B4229',
                    fontFamily: 'UDC Working Man Sans, sans-serif'
                  }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      {t.creatingCheckout}
                    </>
                  ) : (
                    t.checkout
                  )}
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
