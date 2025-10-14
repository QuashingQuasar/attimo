// src/lib/attimoCart.ts
export function initAttimoCart() {
  const SHOP = 'attimo-oil.myshopify.com';

  // Numeric Shopify variant IDs (yours)
  const VARIANTS: Record<string, number> = {
    '1': 56203507597695,
    '2': 56203507630463,
    '3': 56203507663231,
    '4': 56203507695999,
    '8': 56203507728767
  };

  // Optional price map (fallback if you don't want to rely on data-price)
  const PRICES: Record<string, number> = { '1': 23, '2': 46, '3': 69, '4': 86, '8': 164 };

  const pills = Array.from(document.querySelectorAll<HTMLButtonElement>('#bundle-pills .pill'));
  const cta   = document.getElementById('add-to-cart-btn') as HTMLButtonElement | null;
  const badge = document.getElementById('cart-count-badge') as HTMLSpanElement | null;

  if (!pills.length || !cta) return;

  let selectedKey: string = pills[0].dataset.key || '1';
  const qty = 1;

  const formatPrice = (n: number) => `€${Number(n).toFixed(0)}`;

  function updateCTA() {
    const pill = pills.find(p => p.dataset.key === selectedKey);
    const price = pill?.dataset.price ? Number(pill.dataset.price) : (PRICES[selectedKey] ?? 0);
    cta.textContent = `Add to cart – ${formatPrice(price)}`;
  }

  function selectPill(key: string) {
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

  function addAndGoToCart() {
    const variantId = VARIANTS[selectedKey];
    if (!variantId) {
      console.error('[attimo] Missing variant for key', selectedKey);
      return;
    }
    const params = new URLSearchParams({
      id: String(variantId),
      quantity: String(qty),
      return_to: '/cart'
    });
    const url = `https://${SHOP}/cart/add?${params.toString()}`;
    bumpBadge(qty); // UI hint; Shopify /cart will be the truth
    window.location.href = url;
  }

  pills.forEach(p => p.addEventListener('click', () => selectPill(p.dataset.key!)));
  cta.addEventListener('click', addAndGoToCart);

  // init
  selectPill(selectedKey);
}
