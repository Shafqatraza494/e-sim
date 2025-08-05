"use client";

import { useCart } from "@/Context/CartContext";
import React from "react";

function ButtonFill({ text, product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-[#EB662B] py-2 px-8 rounded-xl"
    >
      {text}
    </button>
  );
}

export default ButtonFill;
