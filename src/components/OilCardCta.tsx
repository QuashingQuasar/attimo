import type { MouseEvent } from "react";
import { toast } from "sonner";
import { formatPrice, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";
import type { ShopifyProduct } from "@/lib/shopify";

// The call to action under an oil card, shared by every card grid (homepage
// shop grid, "More Varieties" on product pages) so the rules live in one place:
//   in stock   chartreuse "ADD TO CART · price"; on sale the regular price
//              shows struck through before the sale price
//   sold out   dark green; either a plain "SOLD OUT" with no price, or
//              "NOTIFY ME · price" (soldOutMode)
interface OilCardCtaProps {
  available: boolean;
  soldOutMode?: "notify" | "soldOut";
  /** The price charged now. */
  price: number;
  /** The regular price; shown struck through when it is higher than `price`. */
  regularPrice?: number;
  locale: Locale;
  onClick?: (e: MouseEvent) => void;
}

export const OilCardCta = ({ available, soldOutMode = "notify", price, regularPrice, locale, onClick }: OilCardCtaProps) => {
  const t = getDict(locale);
  const plainSoldOut = !available && soldOutMode === "soldOut";
  const onSale = regularPrice !== undefined && regularPrice > price;
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-3 mb-3 whitespace-nowrap transition-opacity hover:opacity-90"
      style={{
        fontFamily: "UDC Working Man Sans, sans-serif",
        fontSize: "clamp(1.1rem, 1.45vw, 1.45rem)",
        letterSpacing: "0.05em",
        borderRadius: "8px",
        padding: "0.55rem 1.4rem",
        border: "none",
        cursor: "pointer",
        backgroundColor: available ? "#CDDB2D" : "#1B4229",
        color: available ? "#1B4229" : "#FFFAEA",
      }}
    >
      <span style={{ fontWeight: 700 }}>{(available ? t.product.addToCart : plainSoldOut ? t.product.soldOut : t.notify.notifyMe).toUpperCase()}</span>
      {!plainSoldOut && (<>
        <span aria-hidden="true" style={{ opacity: 0.45 }}>·</span>
        {onSale && <s style={{ opacity: 0.55, textDecorationThickness: "2px" }}>{formatPrice(regularPrice!, locale)}</s>}
        <span>{formatPrice(price, locale)}</span>
      </>)}
    </button>
  );
};

// Sold-out bottle photo: desaturated and faded, so the card reads as
// unavailable before the label does.
export const SOLD_OUT_IMAGE_STYLE = { filter: "saturate(0.35) brightness(1.04)", opacity: 0.6 } as const;

type AddItem = (item: {
  product: ShopifyProduct;
  variantId: string;
  variantTitle: string;
  price: { amount: string; currencyCode: string };
  quantity: number;
  selectedOptions: { name: string; value: string }[];
  isSubscription: boolean;
}) => void;

/** Adds one bottle to the cart from a card and confirms it with a toast. */
export function addBottleFromCard({ product, price, locale, addItem }: { product: ShopifyProduct; price: number; locale: Locale; addItem: AddItem }) {
  const t = getDict(locale);
  const variant = product.node.variants.edges[0].node;
  addItem({
    product,
    variantId: variant.id,
    variantTitle: variant.title,
    price: { amount: String(price), currencyCode: locale.currency.code },
    quantity: 1,
    selectedOptions: variant.selectedOptions || [],
    isSubscription: false,
  });
  toast.success(t.product.toastAdded.replace("{n}", "1").replace(/\{plural\}/g, ""), { position: "top-center" });
}
