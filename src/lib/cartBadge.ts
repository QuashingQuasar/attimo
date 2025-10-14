// src/lib/cartBadge.ts
const SHOP_DOMAIN = 'attimo-oil.myshopify.com';
const SF_API_VERSION = '2025-10';
const STOREFRONT_TOKEN = '79b950607019e5b5574dd3e5fe0fe15a';
const CART_STORAGE_KEY = 'attimo_cart_v1';

function $badge(): HTMLElement | null {
  return document.getElementById('cart-count-badge');
}

export function setCartBadge(count: number) {
  const badge = $badge();
  if (!badge) return;
  badge.textContent = String(count);
  badge.hidden = count <= 0;
}

export async function reconcileCartBadge() {
  try {
    const cartId = localStorage.getItem(CART_STORAGE_KEY);
    if (!cartId) {
      setCartBadge(0);
      return;
    }
    const query = `
      query($id: ID!) { cart(id: $id) { id totalQuantity } }
    `;
    const res = await fetch(`https://${SHOP_DOMAIN}/api/${SF_API_VERSION}/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN,
      },
      body: JSON.stringify({ query, variables: { id: cartId } }),
    });
    const json = await res.json();
    const total = json?.data?.cart?.totalQuantity ?? 0;
    setCartBadge(total);
  } catch (e) {
    console.warn('[cartBadge] reconcile failed', e);
  }
}

export function initCartBadge() {
  // Initialize badge at boot from the latest Shopify totalQuantity
  reconcileCartBadge();
}
