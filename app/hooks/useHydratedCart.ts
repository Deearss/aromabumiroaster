"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "../store/cartStore";

// Hook untuk memastikan cart state hydration-safe
export const useHydratedCart = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const cartStore = useCartStore();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Jika belum hydrated, return default values
  if (!isHydrated) {
    return {
      items: [],
      addToCart: () => {},
      removeFromCart: () => {},
      updateQuantity: () => {},
      clearCart: () => {},
      getTotalItems: () => 0,
      getTotalPrice: () => 0,
      isHydrated: false,
    };
  }

  return {
    ...cartStore,
    isHydrated: true,
  };
};
