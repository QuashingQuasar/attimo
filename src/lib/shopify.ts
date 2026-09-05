import { toast } from "sonner";

// Shopify Storefront localization context. When set, queries run under
// @inContext(country, language) so Shopify returns market-appropriate data
// and the created cart's checkoutUrl opens in the right market/currency.
// `undefined` (or null vars) means "no context" — identical to the previous
// behaviour, so the default/dk/se markets are unaffected.
export interface ShopifyContext {
  country?: string;  // ISO country code, e.g. "FR"
  language?: string; // Storefront LanguageCode, e.g. "FR"
}

const SHOPIFY_API_VERSION = '2025-07';
const SHOPIFY_STORE_PERMANENT_DOMAIN = '00xpv6-0j.myshopify.com';
const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;
const SHOPIFY_STOREFRONT_TOKEN = '79b950607019e5b5574dd3e5fe0fe15a';

export interface ShopifyProduct {
  node: {
    id: string;
    title: string;
    description: string;
    // Rich-text description (keeps <p>/<ul><li> structure that the plain
    // `description` field strips). Used by merch PDPs to render spec bullets.
    descriptionHtml?: string;
    handle: string;
    // Shopify product type. Oils are "Olive Oil"; merch is "Merch". Used to
    // exclude merch from the oils' volume discount + free-shipping bottle count
    // and to flag mixed (separate-shipment) carts.
    productType: string;
    // Lowercased product tags. Merch uses a garment tag (hoodie / tee / cap)
    // for the collection-page category filter.
    tags?: string[];
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images: {
      edges: Array<{
        node: {
          url: string;
          altText: string | null;
        };
      }>;
    };
    variants: {
      edges: Array<{
        node: {
          id: string;
          title: string;
          price: {
            amount: string;
            currencyCode: string;
          };
          availableForSale: boolean;
          selectedOptions: Array<{
            name: string;
            value: string;
          }>;
          // Variant-specific image (e.g. the hoodie's per-colour mockup).
          // Null when the variant has no dedicated image.
          image?: { url: string; altText: string | null } | null;
        };
      }>;
    };
    options: Array<{
      name: string;
      values: string[];
    }>;
  };
}

export interface SellingPlan {
  id: string;
  name: string;
  options: Array<{ name: string; value: string }>;
  priceAdjustments: Array<{
    adjustmentValue: {
      __typename: string;
      adjustmentPercentage?: number;
      adjustmentAmount?: { amount: string; currencyCode: string };
      price?: { amount: string; currencyCode: string };
    };
  }>;
}

export async function storefrontApiRequest(query: string, variables: any = {}) {
  // Hard timeout so a stalled request (spotty mobile network, an ad-blocker
  // holding the connection to the Shopify subdomain, a Shopify edge hiccup)
  // rejects instead of hanging forever. Without this, a stalled cartCreate on
  // the "Checkout" click left the button spinning indefinitely with no error
  // — customers read it as "the site is broken" and left. 12s is generous;
  // cartCreate normally resolves in well under a second.
  // Guard AbortSignal.timeout — it exists in all browsers since mid-2022, but on
  // an older one (iOS 15 etc.) calling it would throw and break EVERY storefront
  // request (product/inventory fetches included), not just checkout. On those
  // browsers we simply skip the timeout and keep the prior (no-timeout) behaviour.
  const timeoutSignal =
    typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function"
      ? AbortSignal.timeout(12000)
      : undefined;
  const response = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    signal: timeoutSignal,
  });

  if (response.status === 402) {
    toast.error("Shopify: Payment required", {
      description: "Shopify API access requires an active billing plan."
    });
    return;
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  
  if (data.errors) {
    throw new Error(`Error calling Shopify: ${data.errors.map((e: any) => e.message).join(', ')}`);
  }

  return data;
}

const PRODUCTS_QUERY = `
  query GetProducts($first: Int!, $query: String, $country: CountryCode, $language: LanguageCode) @inContext(country: $country, language: $language) {
    products(first: $first, query: $query) {
      edges {
        node {
          id
          title
          description
          handle
          productType
          tags
          descriptionHtml
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 30) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 100) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                availableForSale
                selectedOptions {
                  name
                  value
                }
                image {
                  url
                  altText
                }
              }
            }
          }
          options {
            name
            values
          }
        }
      }
    }
  }
`;

const SELLING_PLANS_QUERY = `
  query GetProductSellingPlans($handle: String!, $country: CountryCode, $language: LanguageCode) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      sellingPlanGroups(first: 5) {
        edges {
          node {
            name
            options {
              name
              values
            }
            sellingPlans(first: 10) {
              edges {
                node {
                  id
                  name
                  options {
                    name
                    value
                  }
                  priceAdjustments {
                    adjustmentValue {
                      __typename
                      ... on SellingPlanPercentagePriceAdjustment {
                        adjustmentPercentage
                      }
                      ... on SellingPlanFixedAmountPriceAdjustment {
                        adjustmentAmount {
                          amount
                          currencyCode
                        }
                      }
                      ... on SellingPlanFixedPriceAdjustment {
                        price {
                          amount
                          currencyCode
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

// ── Manual "sold out" override ──────────────────────────────────────────────
// Handles here are forced to render sold out across the site (PDP notify-me
// state + sold-out card badges) WITHOUT touching Shopify inventory. This is the
// only safe way to take the Coratina *single* off sale while keeping its stock:
// the trio/duo bundles draw down the SAME Coratina variant, so zeroing real
// stock in Shopify would break the bundles too. Applied inside fetchProducts so
// it holds on both the build-time snapshot AND the client-side revalidation
// (both call this function). Delete the handle to restore normal availability.
//
// 2026-08-31: Coratina single off sale — steer standalone demand into bundles
// and protect shared stock while away. Revert on return.
// 2026-09-05: Picual single also off sale (same rationale — trio component).
const FORCE_SOLD_OUT_HANDLES = new Set<string>([
  "attimo-extra-virgin-olive-oil-coratina-500ml",
  "attimo-extra-virgin-olive-oil-picual-500ml",
]);

function applySoldOutOverride(products: ShopifyProduct[]): ShopifyProduct[] {
  if (FORCE_SOLD_OUT_HANDLES.size === 0) return products;
  return products.map((p) =>
    FORCE_SOLD_OUT_HANDLES.has(p.node.handle)
      ? {
          ...p,
          node: {
            ...p.node,
            variants: {
              ...p.node.variants,
              edges: p.node.variants.edges.map((e) => ({
                ...e,
                node: { ...e.node, availableForSale: false },
              })),
            },
          },
        }
      : p,
  );
}

export async function fetchProducts(limit = 10, query?: string, context?: ShopifyContext): Promise<ShopifyProduct[]> {
  const data = await storefrontApiRequest(PRODUCTS_QUERY, {
    first: limit,
    query,
    country: context?.country ?? null,
    language: context?.language ?? null,
  });
  return applySoldOutOverride(data?.data?.products?.edges || []);
}

// Exact single-product availability by handle. The `products(query:"handle:…")`
// full-text filter is UNRELIABLE — it can silently return a different product
// (e.g. querying the 3L box handle returned nocellara), so anything that must
// key off a specific handle has to use the exact `product(handle:)` lookup.
// Returns true/false for real availability, or null when the product can't be
// found / Shopify is unreachable (caller decides the fallback). Honours the
// manual sold-out override so this stays consistent with fetchProducts.
const PRODUCT_AVAILABILITY_QUERY = `
  query ProductAvailability($handle: String!, $country: CountryCode, $language: LanguageCode) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      handle
      variants(first: 20) {
        edges {
          node {
            availableForSale
          }
        }
      }
    }
  }
`;

export async function fetchProductAvailabilityByHandle(
  handle: string,
  context?: ShopifyContext,
): Promise<boolean | null> {
  const data = await storefrontApiRequest(PRODUCT_AVAILABILITY_QUERY, {
    handle,
    country: context?.country ?? null,
    language: context?.language ?? null,
  });
  const product = data?.data?.product;
  if (!product) return null;
  if (FORCE_SOLD_OUT_HANDLES.has(product.handle)) return false;
  return product.variants.edges.some(
    (v: { node: { availableForSale: boolean } }) => v.node.availableForSale,
  );
}

// Merch products. We filter by `product_type:Merch` rather than the "Merch"
// collection: the store defines merch by productType, and (unlike the product)
// the collection isn't published to this headless Storefront channel. This
// also means future merch auto-appears with no extra collection step. Returns
// full product nodes (incl. variants/options/images) for both the /merch
// listing and the /merch/[handle] PDP.
export async function fetchMerchProducts(
  limit = 50,
  context?: ShopifyContext,
): Promise<ShopifyProduct[]> {
  return fetchProducts(limit, "product_type:Merch", context);
}

const VARIANT_INVENTORY_QUERY = `
  query GetVariantInventory($id: ID!, $country: CountryCode, $language: LanguageCode) @inContext(country: $country, language: $language) {
    node(id: $id) {
      ... on ProductVariant {
        quantityAvailable
        availableForSale
      }
    }
  }
`;

/**
 * Returns the live quantityAvailable for a Shopify product variant, or null
 * when the value is unknown (the Storefront API access token lacks the
 * `unauthenticated_read_product_inventory` scope, inventory tracking is off
 * for the variant, or the request fails). Callers must treat null as
 * "unknown" — do NOT disable UI on null, fall back to existing behaviour.
 */
export async function fetchVariantQuantityAvailable(variantId: string, context?: ShopifyContext): Promise<number | null> {
  if (!variantId) return null;
  try {
    const data = await storefrontApiRequest(VARIANT_INVENTORY_QUERY, {
      id: variantId,
      country: context?.country ?? null,
      language: context?.language ?? null,
    });
    const qty = data?.data?.node?.quantityAvailable;
    return typeof qty === "number" ? qty : null;
  } catch (error) {
    console.warn("[shopify.fetchVariantQuantityAvailable] failed:", { variantId, error });
    return null;
  }
}

export async function fetchSellingPlans(handle: string, context?: ShopifyContext): Promise<SellingPlan[]> {
  try {
    const data = await storefrontApiRequest(SELLING_PLANS_QUERY, {
      handle,
      country: context?.country ?? null,
      language: context?.language ?? null,
    });
    const groups = data?.data?.product?.sellingPlanGroups?.edges || [];
    const plans = groups.flatMap((g: any) =>
      g.node.sellingPlans.edges.map((sp: any) => sp.node)
    );
    console.log('[shopify.fetchSellingPlans]', {
      handle,
      groupCount: groups.length,
      planCount: plans.length,
      planIds: plans.map((p: SellingPlan) => p.id),
    });
    return plans;
  } catch (error) {
    console.warn('[shopify.fetchSellingPlans] failed (scope may not be enabled):', { handle, error });
    return [];
  }
}

// $language is the typed LanguageCode enum. It's nullable (no `!`) on purpose:
// English markets (default/dk/se) pass null → @inContext(language: null) is
// identical to no language context (English checkout), preserving their prior
// behaviour. Country is NOT on @inContext here — for cart operations Shopify
// ignores the @inContext country/buyer args; country must come from
// buyerIdentity.countryCode in the input (set in createStorefrontCheckout).
const CART_CREATE_MUTATION = `
  mutation cartCreate($input: CartInput!, $language: LanguageCode) @inContext(language: $language) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export interface CartItem {
  product: ShopifyProduct;
  variantId: string;
  variantTitle: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  quantity: number;
  selectedOptions: Array<{
    name: string;
    value: string;
  }>;
  sellingPlanId?: string;
  // True when the user added this line as Subscribe & Save. Tracked
  // separately from `sellingPlanId` because the Storefront API may not
  // return a selling plan (scope-dependent), but we still need the cart
  // to display the subscription price.
  isSubscription?: boolean;
}

// Per-session cache mapping product handle → list of currently-valid
// sellingPlan IDs returned by Shopify. Populated lazily at checkout time.
// We always validate the cart item's stored sellingPlanId against this list
// because Shopify rotates plan IDs when the subscription app is reinstalled
// or plans are recreated, leaving persisted cart entries with stale IDs.
const sellingPlansByHandle: Record<string, string[] | null> = {};

async function ensureSellingPlanId(item: CartItem): Promise<string | null> {
  const handle = item.product?.node?.handle;
  if (!handle) {
    console.warn('[shopify.ensureSellingPlanId] item has no product handle', item);
    return null;
  }

  let validIds = sellingPlansByHandle[handle];
  if (validIds === undefined) {
    const plans = await fetchSellingPlans(handle);
    validIds = plans.map((p) => p.id);
    sellingPlansByHandle[handle] = validIds.length ? validIds : null;
  }
  if (!validIds || validIds.length === 0) {
    console.error('[shopify.ensureSellingPlanId] no plans available for', handle);
    return null;
  }

  // Use the cart's stored ID only if Shopify still recognizes it.
  if (item.sellingPlanId && validIds.includes(item.sellingPlanId)) {
    console.log('[shopify.ensureSellingPlanId] reusing stored id', {
      handle,
      id: item.sellingPlanId,
    });
    return item.sellingPlanId;
  }

  const fresh = validIds[0];
  console.log('[shopify.ensureSellingPlanId] using fresh id', {
    handle,
    fresh,
    storedWasStale: !!item.sellingPlanId,
    storedId: item.sellingPlanId ?? null,
    allValidIds: validIds,
  });
  return fresh;
}

// The customer-facing store domain (where /cart permalinks and /checkouts
// live). Distinct from SHOPIFY_STORE_PERMANENT_DOMAIN, which is the *.myshopify
// host used only for the Storefront API.
const SHOPIFY_CHECKOUT_DOMAIN = 'shop.attimo-oil.com';

/**
 * Build a direct Shopify cart permalink from the current cart, as a fallback
 * for when the Storefront `cartCreate` fails or times out — so a hiccup in our
 * own checkout-creation never strands the customer on an infinite spinner.
 * Returns null when the cart can't be expressed as a permalink (any
 * subscription line: permalinks can't carry selling plans). Shopify infers
 * market/currency from the buyer's geo on the permalink, same as a normal cart.
 */
export function buildCartPermalink(items: CartItem[]): string | null {
  if (items.length === 0) return null;
  if (items.some((i) => i.isSubscription || i.sellingPlanId)) return null;
  const parts = items
    .map((i) => {
      const numericId = i.variantId.split('/').pop();
      return numericId ? `${numericId}:${i.quantity}` : null;
    })
    .filter(Boolean);
  if (parts.length === 0) return null;
  return `https://${SHOPIFY_CHECKOUT_DOMAIN}/cart/${parts.join(',')}`;
}

export async function createStorefrontCheckout(
  items: CartItem[],
  context?: ShopifyContext,
): Promise<string> {
  try {
    // Resolve a sellingPlanId for every subscription line. If the cart was
    // added before fetchSellingPlans completed (or the storefront scope was
    // briefly unavailable), backfill here so the price the customer saw in
    // the drawer is the price Shopify actually charges.
    const lines = await Promise.all(items.map(async (item) => {
      const line: any = {
        quantity: item.quantity,
        merchandiseId: item.variantId,
      };
      if (item.isSubscription || item.sellingPlanId) {
        const planId = await ensureSellingPlanId(item);
        if (!planId) {
          throw new Error(
            'Subscription plan unavailable. Please refresh the page and try again, or remove the subscription item from your cart.'
          );
        }
        line.sellingPlanId = planId;
      }
      return line;
    }));

    console.log('[shopify.createStorefrontCheckout] cartCreate input lines:', JSON.stringify(lines, null, 2));

    // buyerIdentity.countryCode pins the cart to a market so the returned
    // checkoutUrl opens in that country's currency (e.g. FR → French/EUR
    // checkout). Only attached when a caller passes a country (France); the
    // default/dk/se markets pass nothing and keep their prior behaviour.
    const input: { lines: typeof lines; buyerIdentity?: { countryCode: string } } = { lines };
    if (context?.country) {
      input.buyerIdentity = { countryCode: context.country };
    }

    // Checkout LANGUAGE is set solely by @inContext(language:) on cartCreate —
    // the returned checkoutUrl then loads in that language. null (English
    // markets) = no language context = English, unchanged. The cart is created
    // fresh on every "Checkout" click from the storefront's CURRENT locale, so
    // the checkout language always matches the active locale (no stale-language
    // edge case to carry over).
    const cartData = await storefrontApiRequest(CART_CREATE_MUTATION, {
      input,
      language: context?.language ?? null,
    });

    // Echo the context Shopify actually applied, to confirm e.g. language=FR
    // was applied and not silently falling back to EN.
    console.log(
      '[shopify.createStorefrontCheckout] requested context:',
      { country: context?.country ?? null, language: context?.language ?? null },
      '| applied (extensions.context):',
      cartData?.extensions?.context ?? null,
    );

    if (cartData.data.cartCreate.userErrors.length > 0) {
      console.error('[shopify.createStorefrontCheckout] userErrors from Shopify:', cartData.data.cartCreate.userErrors);
      const detail = cartData.data.cartCreate.userErrors
        .map((e: any) => `${(e.field || []).join('.') || 'cart'}: ${e.message}`)
        .join('; ');
      throw new Error(`Cart creation failed: ${detail}`);
    }

    const cart = cartData.data.cartCreate.cart;

    if (!cart.checkoutUrl) {
      throw new Error('No checkout URL returned from Shopify');
    }

    const url = new URL(cart.checkoutUrl);
    url.searchParams.set('channel', 'online_store');
    return url.toString();
  } catch (error) {
    console.error('Error creating storefront checkout:', error);
    throw error;
  }
}
