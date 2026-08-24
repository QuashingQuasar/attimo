import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from 'sonner';
import { CartItem, createStorefrontCheckout, type ShopifyContext } from '@/lib/shopify';

interface CartStore {
  items: CartItem[];
  cartId: string | null;
  checkoutUrl: string | null;
  isLoading: boolean;
  
  addItem: (item: CartItem) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  removeItem: (variantId: string) => void;
  clearCart: () => void;
  setCartId: (cartId: string) => void;
  setCheckoutUrl: (url: string) => void;
  setLoading: (loading: boolean) => void;
  // Shopify localization context for the active storefront locale: country
  // pins the checkout market/currency (buyerIdentity), language sets the
  // checkout language (@inContext). Pass it for language markets (France →
  // {country:"FR",language:"FR"}); omit for default/dk/se (English checkout).
  createCheckout: (context?: ShopifyContext) => Promise<void>;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      cartId: null,
      checkoutUrl: null,
      isLoading: false,

      addItem: (item) => {
        const { items } = get();
        const existingItem = items.find(i => i.variantId === item.variantId);
        
        if (existingItem) {
          set({
            items: items.map(i =>
              i.variantId === item.variantId
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            )
          });
        } else {
          set({ items: [...items, item] });
        }
      },

      updateQuantity: (variantId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(variantId);
          return;
        }
        
        set({
          items: get().items.map(item =>
            item.variantId === variantId ? { ...item, quantity } : item
          )
        });
      },

      removeItem: (variantId) => {
        set({
          items: get().items.filter(item => item.variantId !== variantId)
        });
      },

      clearCart: () => {
        set({ items: [], cartId: null, checkoutUrl: null });
      },

      setCartId: (cartId) => set({ cartId }),
      setCheckoutUrl: (checkoutUrl) => set({ checkoutUrl }),
      setLoading: (isLoading) => set({ isLoading }),

      createCheckout: async (context?: ShopifyContext) => {
        const { items, setLoading, setCheckoutUrl } = get();
        if (items.length === 0) return;

        // Clear any prior checkoutUrl first so a failed attempt can't redirect
        // the caller to a stale/expired checkout from an earlier click.
        setCheckoutUrl(null);
        setLoading(true);
        try {
          const checkoutUrl = await createStorefrontCheckout(items, context);
          setCheckoutUrl(checkoutUrl);
        } catch (error) {
          console.error('Failed to create checkout:', error);
          const message = error instanceof Error ? error.message : 'Could not start checkout. Please try again.';
          toast.error(message);
        } finally {
          setLoading(false);
        }
      }
    }),
    {
      name: 'shopify-cart',
    }
  )
);
