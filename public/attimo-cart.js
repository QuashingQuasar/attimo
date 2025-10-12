// --- Attimo minimal storefront cart+drawer (no redirect) ---
// CONFIG: domain + Storefront token
const SF_DOMAIN  = 'attimo-oil.myshopify.com';
const SF_VERSION = '2025-10';
const SF_TOKEN   = '79b950607019e5b5574dd3e5fe0fe15a'; // Storefront token (safe client-side)
const CART_KEY   = 'attimo_cart_v1';

const SF_URL = `https://${SF_DOMAIN}/api/${SF_VERSION}/graphql.json`;
const headers = {
  'Content-Type': 'application/json',
  'X-Shopify-Storefront-Access-Token': SF_TOKEN
};

async function gql(query, variables={}) {
  const res = await fetch(SF_URL, { method:'POST', headers, body: JSON.stringify({query,variables}) });
  const json = await res.json();
  if (!res.ok || json.errors) throw Object.assign(new Error('GQL failed'), { json });
  return json.data;
}

function getCartCache(){ return JSON.parse(localStorage.getItem(CART_KEY)||'null'); }
function setCartCache(cart){ localStorage.setItem(CART_KEY, JSON.stringify(cart)); window.__attimoCart = cart; }

async function ensureCart() {
  const cached = getCartCache();
  if (cached?.id) { window.__attimoCart = cached; return cached; }
  const d = await gql(`mutation{ cartCreate{ cart{ id checkoutUrl } userErrors{message} } }`);
  const cart = d.cartCreate.cart;
  if (!cart?.id) throw new Error('cartCreate failed');
  setCartCache(cart);
  return cart;
}

// Stable, minimal query (no cost fields)
async function fetchCart() {
  const id = (await ensureCart()).id;
  const q = `
    query($id: ID!){
      cart(id:$id){
        id checkoutUrl totalQuantity
        lines(first:50){
          nodes{
            id quantity
            merchandise{
              __typename
              ... on ProductVariant{
                id title
                product{ title }
                price{ amount currencyCode }
              }
            }
          }
        }
      }
    }`;
  const d = await gql(q,{id});
  return d.cart;
}

async function addLine(variantGid, qty=1) {
  const cart = await ensureCart();
  const q = `
    mutation($cartId:ID!,$lines:[CartLineInput!]!){
      cartLinesAdd(cartId:$cartId,lines:$lines){
        cart{ id checkoutUrl totalQuantity }
        userErrors{ message }
      }
    }`;
  const d = await gql(q,{ cartId: cart.id, lines:[{ merchandiseId: variantGid, quantity: qty }] });
  if (d.cartLinesAdd.userErrors?.length) throw new Error(d.cartLinesAdd.userErrors[0].message);
  setCartCache(d.cartLinesAdd.cart);
  return d.cartLinesAdd.cart;
}

async function updateLineQty(lineId, qty) {
  const cart = await ensureCart();
  const q = `
    mutation($cartId:ID!,$lines:[CartLineUpdateInput!]!){
      cartLinesUpdate(cartId:$cartId,lines:$lines){
        cart{ id checkoutUrl totalQuantity }
        userErrors{ message }
      }
    }`;
  const d = await gql(q,{ cartId: cart.id, lines:[{ id: lineId, quantity: qty }] });
  if (d.cartLinesUpdate.userErrors?.length) throw new Error(d.cartLinesUpdate.userErrors[0].message);
  setCartCache(d.cartLinesUpdate.cart);
}

async function removeLine(lineId) {
  const cart = await ensureCart();
  const q = `
    mutation($cartId:ID!,$lineIds:[ID!]!){
      cartLinesRemove(cartId:$cartId,lineIds:$lineIds){
        cart{ id checkoutUrl totalQuantity }
        userErrors{ message }
      }
    }`;
  const d = await gql(q,{ cartId: cart.id, lineIds:[lineId] });
  if (d.cartLinesRemove.userErrors?.length) throw new Error(d.cartLinesRemove.userErrors[0].message);
  setCartCache(d.cartLinesRemove.cart);
}

// --- Drawer UI (tiny, embedded) ---
function ensureDrawer() {
  if (document.getElementById('attimo-cart')) return;
  const style = document.createElement('style');
  style.textContent = `
    #attimo-cart-overlay{position:fixed;inset:0;background:rgba(0,0,0,.35);opacity:0;pointer-events:none;transition:.2s;z-index:2147483000}
    #attimo-cart{position:fixed;top:0;right:-420px;width:min(92vw,380px);height:100vh;background:#fff;box-shadow:-2px 0 18px rgba(0,0,0,.18);z-index:2147483001;display:flex;flex-direction:column;transition:right .25s}
    #attimo-cart.show{right:0} #attimo-cart-overlay.show{opacity:1;pointer-events:auto}
    #attimo-cart .hdr{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid #eee;font-weight:600}
    #attimo-cart .body{flex:1;overflow:auto;padding:10px 14px}
    #attimo-cart .line{display:flex;justify-content:space-between;gap:12px;padding:10px 0;border-bottom:1px solid #f3f3f3}
    #attimo-cart .ft{padding:12px 14px;border-top:1px solid #eee}
    #attimo-cart .btn{display:block;width:100%;padding:12px 14px;text-align:center;border-radius:10px;border:none;background:#224F36;color:#fff;font-weight:600;cursor:pointer}
    #attimo-cart .qty{display:flex;gap:8px;align-items:center}
    #attimo-cart .iconbtn{all:unset;cursor:pointer;padding:2px 6px;border:1px solid #ddd;border-radius:6px}
    #attimo-cart .muted{opacity:.6}
  `;
  document.head.appendChild(style);

  const ov = document.createElement('div');
  ov.id = 'attimo-cart-overlay';
  ov.addEventListener('click', closeDrawer);
  document.body.appendChild(ov);

  const dr = document.createElement('aside');
  dr.id = 'attimo-cart';
  dr.innerHTML = `
    <div class="hdr"><span>Cart</span><button class="iconbtn" id="attimo-x">✕</button></div>
    <div class="body"><div class="muted">Your cart is empty.</div></div>
    <div class="ft"><div class="tot muted" style="margin-bottom:10px">Subtotal — €0.00</div><button class="btn" id="attimo-checkout">Proceed to checkout</button></div>`;
  document.body.appendChild(dr);
  document.getElementById('attimo-x').addEventListener('click', closeDrawer);
  document.getElementById('attimo-checkout').addEventListener('click', () => {
    const url = window.__attimoCart?.checkoutUrl; if (url) location.href = url;
  });
}
function openDrawer(){ ensureDrawer(); document.getElementById('attimo-cart-overlay').classList.add('show'); document.getElementById('attimo-cart').classList.add('show'); }
function closeDrawer(){ const ov=document.getElementById('attimo-cart-overlay'); const dr=document.getElementById('attimo-cart'); if(ov) ov.classList.remove('show'); if(dr) dr.classList.remove('show'); }
function fmt(amount, code){ const a = Number(amount||0); return `${a.toFixed(2)} ${code||''}`.trim(); }

function render(cart){
  ensureDrawer();
  const body = document.querySelector('#attimo-cart .body');
  const tot  = document.querySelector('#attimo-cart .tot');
  if (!cart || cart.totalQuantity === 0) { body.innerHTML = `<div class="muted">Your cart is empty.</div>`; tot.textContent = `Subtotal — €0.00`; return; }
  const nodes = cart.lines?.nodes || [];
  let subA=0, cur='';
  body.innerHTML = nodes.map(n=>{
    const v = n.merchandise; const p = Number(v?.price?.amount||0); const c=v?.price?.currencyCode||''; if(!cur) cur=c; subA += p*(n.quantity||0);
    const label = v?.product?.title ? `${v.product.title} — ${v.title||''}` : (v?.title||'');
    return `<div class="line" data-id="${n.id}">
      <div style="flex:1">${label}<div class="muted">€${p.toFixed(2)} • <span class="qty">
        <button class="iconbtn" data-act="dec">–</button> x${n.quantity}
        <button class="iconbtn" data-act="inc">+</button>
        <button class="iconbtn" data-act="rm" style="margin-left:6px">Remove</button>
      </span></div></div>
      <div>€${(p*n.quantity).toFixed(2)}</div>
    </div>`;
  }).join('');
  tot.textContent = `Subtotal — ${fmt(subA, cur)}`;
  // wire qty / remove
  body.querySelectorAll('.line').forEach(el=>{
    el.addEventListener('click', async (ev)=>{
      const act = ev.target?.dataset?.act; if(!act) return;
      const id = el.getAttribute('data-id');
      const n  = nodes.find(x=>x.id===id); if(!n) return;
      try {
        if (act==='inc') await updateLineQty(id, n.quantity+1);
        if (act==='dec') await updateLineQty(id, Math.max(1, n.quantity-1));
        if (act==='rm')  await removeLine(id);
        render(await fetchCart());
      } catch(e){ console.error('[attimo] qty/remove error', e?.json||e); }
    });
  });
}

// Public hook to open drawer after add
window.attimoOpenCart = async () => { try { render(await fetchCart()); openDrawer(); } catch(e){ console.error('[attimo] drawer error', e?.json||e); } };

// Wire CTA + pills
window.addEventListener('DOMContentLoaded', () => {
  const btn  = document.getElementById('add-to-cart-btn');
  const pills = Array.from(document.querySelectorAll('[data-variant]'));
  let selected = pills.find(p => p.matches('[aria-selected="true"],[aria-pressed="true"],.active'))?.dataset.variant || '1';
  pills.forEach(p => p.addEventListener('click', () => { selected = p.dataset.variant; }));

  if (btn) btn.addEventListener('click', async (e) => {
    e.preventDefault();
   try {
      const gid = (window.VARIANTS||{})[selected];
      if (!gid) throw new Error('Missing VARIANTS mapping for '+selected);
      await addLine(gid, 1);
      const cart = await fetchCart();
      render(cart);
      openDrawer();
    } catch (err) {
      console.error('[attimo] add failed', err?.json||err);
    }
  }, { once:false });
});
