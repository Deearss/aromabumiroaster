import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../types";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (item) =>
        set((state) => {
          const existingItem = state.items.find(
            (cartItem) => cartItem.id === item.id
          );

          if (existingItem) {
            // Jika item sudah ada, tambah quantity
            return {
              items: state.items.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              ),
            };
          } else {
            // Jika item baru, tambahkan dengan quantity 1
            return {
              items: [...state.items, { ...item, quantity: 1 }],
            };
          }
        }),

      removeFromCart: (itemId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        })),

      updateQuantity: (itemId, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            // Jika quantity 0 atau negatif, hapus item (akan ditangani dengan confirmasi di UI)
            return {
              items: state.items.filter((item) => item.id !== itemId),
            };
          }

          return {
            items: state.items.map((item) =>
              item.id === itemId ? { ...item, quantity } : item
            ),
          };
        }),

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        const state = get();
        return state.items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        const state = get();
        return state.items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "aroma-bumi-cart", // nama key di localStorage
    }
  )
);
