"use client";

import React from "react";
import { useHydratedCart } from "../../hooks/useHydratedCart";
import { Product } from "../../types";

interface AddToCartButtonProps {
  product: Product;
  children: React.ReactNode;
}

const AddToCartButton = ({ product, children }: AddToCartButtonProps) => {
  const { addToCart } = useHydratedCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);

    console.log("Added to cart:", product.name);
  };
  return (
    <>
      <button
        onClick={() => handleAddToCart(product)}
        data-add-cart={product.id}
        className="flex-1 bg-primary cursor-pointer text-secondary py-3 rounded-lg font-semibold hover:bg-primary_dark transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent/50"
      >
        {children}
      </button>
    </>
  );
};

export default AddToCartButton;
