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
    handle: string;
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
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 10) {
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

export async function fetchProducts(limit = 10, query?: string, context?: ShopifyContext): Promise<ShopifyProduct[]> {
  const data = await storefrontApiRequest(PRODUCTS_QUERY, {
    first: limit,
    query,
    country: context?.country ?? null,
    language: context?.language ?? null,
  });
  return data?.data?.products?.edges || [];
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

const CART_CREATE_MUTATION = `
  mutation cartCreate($input: CartInput!) {
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

export async function createStorefrontCheckout(
  items: CartItem[],
  opts?: { buyerCountryCode?: string },
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
    if (opts?.buyerCountryCode) {
      input.buyerIdentity = { countryCode: opts.buyerCountryCode };
    }

    const cartData = await storefrontApiRequest(CART_CREATE_MUTATION, { input });

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
