import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const cartStore = (set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (index) =>
    set((state) => ({
      cart: state.cart.filter((_, i) => i !== index),
    })),
  clearCart: () => set({ cart: [] }),
});

export const useCartStore = create(
  devtools(persist(cartStore, { name: "cart " }))
);
