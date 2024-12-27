import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  removeProduct: (index) =>
    set((state) => ({
      products: state.products.filter((_, i) => i !== index),
    })),
  DeleteAllProducts: () => set({ products: [] }),
}));
