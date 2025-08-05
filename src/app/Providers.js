"use client";

import { CartProvider } from "@/Context/CartContext";

export default function Providers({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
