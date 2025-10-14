(() => {
  // Run only once and not on the /cart page
  if (window.__attimoLockCartOnce || /\/cart(?:\/|$)/.test(location.pathname)) return;
  window.__attimoLockCartOnce = true;

  const CART_URL = 'https://attimo-oil.myshopify.com/cart';

  // Keep the link correct even if header re-hydrates
  function rewireLink() {
    const a = document.querySelector('#nav-cart-link');
    if (!a) return false;
    a.setAttribute('href', CART_URL);
    a.setAttribute('target', '_self');
    a.onclick = null; // drop any inline redirectors
    return true;
  }

  // MutationObserver so a re-render can't undo it
  const mo = new MutationObserver(() => rewireLink());
  mo.observe(document.documentElement, { childList: true, subtree: true });

  // Hard override in capture phase: any click from the cart icon area → /cart
  function armCapture() {
    const a = document.querySelector('#nav-cart-link');
    const cartContainer = a?.parentElement || document.querySelector('.cart-link');
    if (!cartContainer) {
      console.warn('[cart] cart container not found yet; will retry after DOM updates.');
      return;
    }

    document.addEventListener(
      'click',
      (e) => {
        const path = e.composedPath?.() || [];
        const inCartIcon = path.some(
          n =>
            n === cartContainer ||
            (n && n.id === 'nav-cart-link') ||
            (n && n.tagName === 'A' && /cart/i.test(n.getAttribute?.('aria-label') || ''))
        );
        if (!inCartIcon) return;

        try {
          e.preventDefault();
          e.stopImmediatePropagation();
          e.stopPropagation();
        } catch (_) {}

        window.location.href = CART_URL;
      },
      true
    );
  }

  const boot = () => { rewireLink(); armCapture(); };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();
