"use client";
import { useCart } from "@/Context/CartContext";
import React from "react";

export default function DummyCartButton() {
  const { addToCart, toggleCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      title: "Test Product",
      price: 19.99,
      id: Date.now()
    });
    toggleCart();
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
    >
      Add Dummy Item to Cart
    </button>
  );
}
