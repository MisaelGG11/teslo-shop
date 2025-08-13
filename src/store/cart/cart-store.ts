import { create } from "zustand";
import { CartProduct } from "@/interfaces";
import { persist } from "zustand/middleware";

interface State {
  cart: CartProduct[];
  addToCart: (item: CartProduct) => void;
  updateProductQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (item) => {
        // Check if the item already exists in the cart
        const { cart } = get();
        const existingItem = cart.some(
          (cartItem) => cartItem.id === item.id && cartItem.size === item.size
        );

        if (!existingItem) set((state) => ({ cart: [...state.cart, item] }));
        else {
          // If it exists, update the quantity of the existing item
          set((state) => ({
            cart: state.cart.map((cartItem) =>
              cartItem.id === item.id && cartItem.size === item.size
                ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                : cartItem
            ),
          }));
        }
      },
      updateProductQuantity: (itemId, quantity) =>
      {},
      removeFromCart: (itemId) =>
      {},
      clearCart: () => set({ cart: [] }),
    }),
    { name: "cart-store" }
  )
);
