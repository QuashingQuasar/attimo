// Attimo cart using local storage + Shopify cart permalinks
type VariantKey = '1' | '2' | '3' | '4' | '8';

const VARIANTS: Record<VariantKey, number> = {
  '1': 56203507597695,
  '2': 56203507630463,
  '3': 56203507663231,
  '4': 56203507695999,
  '8': 56203507728767,
};

const SHOP_DOMAIN = 'https://attimo-oil.myshopify.com';
const LS_KEY = 'attimo_local_cart_v1';

type LocalCart = Record<number, number>;

const getLocalCart = (): LocalCart => {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) || '{}');
  } catch {
    return {};
  }
};

const setLocalCart = (cart: LocalCart) => {
  localStorage.setItem(LS_KEY, JSON.stringify(cart || {}));
};

const localCount = (cart: LocalCart): number => {
  return Object.values(cart).reduce((sum, qty) => sum + (Number(qty) || 0), 0);
};

// Badge helpers
function ensureBadge() {
  const cartLink = document.querySelector<HTMLElement>('#nav-cart-link, a[href="/cart"], .cart-link');
  if (!cartLink) return null;
  
  cartLink.style.position = 'relative';
  let badge = document.querySelector<HTMLElement>('#cart-count-badge');
  
  if (!badge) {
    badge = document.createElement('span');
    badge.id = 'cart-count-badge';
    Object.assign(badge.style, {
      position: 'absolute',
      right: '-10px',
      top: '-8px',
      background: '#111827',
      color: '#fff',
      minWidth: '18px',
      height: '18px',
      padding: '0 6px',
      borderRadius: '999px',
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '700',
      fontSize: '12px',
      lineHeight: '18px',
      zIndex: '50'
    });
    cartLink.appendChild(badge);
  }
  return badge;
}

export function renderBadge() {
  const badge = ensureBadge();
  if (!badge) return;
  
  const count = localCount(getLocalCart());
  if (count > 0) {
    badge.style.display = 'inline-flex';
    badge.textContent = String(count);
  } else {
    badge.style.display = 'none';
    badge.textContent = '';
  }
}

async function addBundleToLocalCart(pillKey: VariantKey, qty = 1) {
  const vid = VARIANTS[pillKey];
  if (!vid) {
    console.warn('[attimo] No variant for pill', pillKey);
    return;
  }
  const cart = getLocalCart();
  cart[vid] = (cart[vid] || 0) + qty;
  setLocalCart(cart);
  renderBadge();
}

export function initAttimoCart() {
  const pills = Array.from(
    document.querySelectorAll<HTMLButtonElement>('#bundle-pills .pill')
  );
  const cta = document.getElementById('add-to-cart-btn') as HTMLButtonElement | null;

  if (!pills.length || !cta) return;

  let selectedKey: VariantKey = (pills[0].dataset.key as VariantKey) || '1';

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

  async function onAddClick(e: Event) {
    e.preventDefault();
    const original = cta.textContent;
    cta.disabled = true;
    cta.textContent = 'Added ✓';

    await addBundleToLocalCart(selectedKey, 1);

    setTimeout(() => {
      cta.textContent = original || 'Add to cart';
      cta.disabled = false;
    }, 900);
  }

  pills.forEach(p => p.addEventListener('click', () => selectPill(p.dataset.key as VariantKey)));
  cta.addEventListener('click', onAddClick);

  // Initialize
  selectPill(selectedKey);
  renderBadge();
}

export function initCartLink() {
  const cartLink = document.querySelector<HTMLAnchorElement>('#nav-cart-link, a[href="/cart"], .cart-link');
  if (!cartLink) return;

  cartLink.addEventListener('click', (e) => {
    e.preventDefault();
    const cart = getLocalCart();

    // Build "vid:qty,vid:qty" string
    const parts = Object.entries(cart)
      .filter(([, q]) => Number(q) > 0)
      .map(([vid, q]) => `${vid}:${q}`);

    const url = parts.length
      ? `${SHOP_DOMAIN}/cart/${parts.join(',')}`
      : `${SHOP_DOMAIN}/cart`;

    window.location.href = url;
  });

  // Initial badge render
  renderBadge();
}
