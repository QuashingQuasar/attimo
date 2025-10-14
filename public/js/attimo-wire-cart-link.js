(() => {
  // Prevent double-wiring across hot reloads
  if (window.__attimoWireCartLinkOnce) return;
  window.__attimoWireCartLinkOnce = true;

  const CART_URL = 'https://attimo-oil.myshopify.com/cart';

  function wireNavCart() {
    const el = document.querySelector('#nav-cart-link');
    if (!el) {
      console.warn('[cart] #nav-cart-link not found; nothing to wire');
      return;
    }

    // Make sure the anchor itself points to /cart (not checkout)
    el.setAttribute('href', CART_URL);
    el.setAttribute('target', '_self');

    // Build a capture-phase handler that cancels any other listeners and forces /cart
    const forceCart = (e) => {
      try {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
      } catch (_) {}
      window.location.href = el.href;
    };

    // Drop ALL previous handlers by cloning the node, then add our capture handler
    const clone = el.cloneNode(true);
    el.replaceWith(clone);
    clone.addEventListener('click', forceCart, true);

    console.log('[cart] nav-cart-link now forced to /cart:', clone.href);
  }

  // Run after DOM is ready (covers both fast/slow loads)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireNavCart, { once: true });
  } else {
    wireNavCart();
  }
})();
