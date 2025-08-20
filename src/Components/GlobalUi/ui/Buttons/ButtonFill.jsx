"use client";

import { useCart } from "@/Context/CartContext";
import React from "react";

function ButtonFill({ text, onClick }) {
  return (
    <button className="bg-[#EB662B] py-2 px-8 rounded-xl" onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonFill;
