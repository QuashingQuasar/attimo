// src/utils/enforceCartLink.ts
export function enforceCartLink() {
  const sel = '#nav-cart-link, .cart-link, a[aria-label="Cart" i]';
  const a = document.querySelector<HTMLAnchorElement>(sel);
  if (!a) return;

  const CART_URL = 'https://shop.attimo-oil.com/cart';

  // Replace node to drop any inline/on* handlers
  const clean = a.cloneNode(true) as HTMLAnchorElement;
  clean.removeAttribute('onclick');
  clean.href = CART_URL;
  clean.target = '_self';
  a.replaceWith(clean);

  // Capture-phase guard: block other listeners and force /cart
  const forceToCart = (e: MouseEvent) => {
    const t = (e.target as Element)?.closest(sel);
    if (!t) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
    window.location.assign(CART_URL);
  };
  window.addEventListener('click', forceToCart, true);
}
