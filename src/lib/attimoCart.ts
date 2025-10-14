type VariantKey = '1' | '2' | '3' | '4' | '8';

const SHOP_DOMAIN = 'attimo-oil.myshopify.com';
const SF_API_VERSION = '2025-10';
const STOREFRONT_TOKEN = '79b950607019e5b5574dd3e5fe0fe15a';
const CART_STORAGE_KEY = 'attimo_cart_v1';

export function initAttimoCart() {
  const VARIANTS: Record<VariantKey, number> = {
    '1': 56203507597695,
    '2': 56203507630463,
    '3': 56203507663231,
    '4': 56203507695999,
    '8': 56203507728767,
  };

  const pills = Array.from(
    document.querySelectorAll<HTMLButtonElement>('#bundle-pills .pill')
  );
  const cta = document.getElementById('add-to-cart-btn') as HTMLButtonElement | null;
  const badge = document.getElementById('cart-count-badge') as HTMLSpanElement | null;

  if (!pills.length || !cta) return;

  let selectedKey: VariantKey = (pills[0].dataset.key as VariantKey) || '1';
  const qty = 1;

  const formatPrice = (n: number) => `€${Number(n).toFixed(0)}`;

  function getPriceFor(key: string) {
    const pill = pills.find(p => p.dataset.key === key);
    const p = pill?.dataset.price ? Number(pill.dataset.price) : NaN;
    return Number.isFinite(p) ? p : 0;
  }

  function updateCTA() {
    const price = getPriceFor(selectedKey);
    cta.textContent = `Add to cart – ${formatPrice(price)}`;
  }

  function selectPill(key: VariantKey) {
    selectedKey = key;
    pills.forEach(p => p.classList.toggle('active', p.dataset.key === key));
    updateCTA();
  }

  function bumpBadge(n: number) {
    if (!badge) return;
    const current = Number(badge.textContent || 0);
    const next = current + n;
    badge.textContent = String(next);
    badge.hidden = next <= 0;
  }

  async function ensureCartId(): Promise<string> {
    let cartId = localStorage.getItem(CART_STORAGE_KEY);
    if (cartId) return cartId;

    const createMutation = `
      mutation cartCreate($input: CartInput) {
        cartCreate(input: $input) { cart { id } userErrors { field message } }
      }`;
    const res = await fetch(`https://${SHOP_DOMAIN}/api/${SF_API_VERSION}/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN,
      },
      body: JSON.stringify({ query: createMutation, variables: { input: {} } }),
    });
    const json = await res.json();
    cartId = json?.data?.cartCreate?.cart?.id;
    if (!cartId) throw new Error('Failed to create cart');
    localStorage.setItem(CART_STORAGE_KEY, cartId);
    return cartId;
  }

  async function addViaStorefrontAPI(variantId: number, quantity: number) {
    const cartId = await ensureCartId();
    const addMutation = `
      mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
          cart { id totalQuantity }
          userErrors { field message }
        }
      }`;
    const variables = {
      cartId,
      lines: [{ merchandiseId: `gid://shopify/ProductVariant/${variantId}`, quantity }],
    };
    const res = await fetch(`https://${SHOP_DOMAIN}/api/${SF_API_VERSION}/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN,
      },
      body: JSON.stringify({ query: addMutation, variables }),
    });
    const json = await res.json();
    const err = json?.data?.cartLinesAdd?.userErrors?.[0]?.message;
    if (err) throw new Error(err);
    return json?.data?.cartLinesAdd?.cart?.totalQuantity as number | undefined;
  }

  async function onAddClick() {
    const variantId = VARIANTS[selectedKey];

    const original = cta.textContent;
    cta.disabled = true;
    cta.textContent = 'Added ✓';
    bumpBadge(qty);

    try {
      await addViaStorefrontAPI(variantId, qty);
    } catch (e) {
      console.error('[attimo] add failed:', e);
      bumpBadge(-qty);
      cta.textContent = 'Add failed';
      setTimeout(() => (cta.textContent = original || 'Add to cart'), 1200);
      cta.disabled = false;
      return;
    }

    setTimeout(() => {
      cta.textContent = original || 'Add to cart';
      cta.disabled = false;
    }, 900);
  }

  pills.forEach(p => p.addEventListener('click', () => selectPill(p.dataset.key as VariantKey)));
  cta.addEventListener('click', onAddClick);

  // init
  selectPill(selectedKey);
}
