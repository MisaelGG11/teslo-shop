import { create } from "zustand";
import { CartProduct } from "@/interfaces";
import { persist } from "zustand/middleware";

interface State {
  cart: CartProduct[];
  getTotalItems: () => number;
  addToCart: (item: CartProduct) => void;
  updateProductQuantity: (productItem: CartProduct, quantity: number) => void;
  removeFromCart: (productItem: CartProduct) => void;
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

      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.quantity, 0);
      },

      updateProductQuantity: (productItem, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productItem.id && item.size === productItem.size
              ? { ...item, quantity }
              : item
          ),
        })),
      removeFromCart: (productItem) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productItem.id || item.size !== productItem.size)
        })),
      clearCart: () => set({ cart: [] }),
    }),
    { name: "cart-store" }
  )
);
