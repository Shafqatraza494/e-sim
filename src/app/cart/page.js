"use client";

import { useCart } from "../../Context/CartContext";
import RightCart from "@/Components/GlobalUi/Cart/RightCart";

export default function CartPage() {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return <RightCart />;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="mb-4 p-4 border rounded">
          <h2 className="text-xl font-semibold">{item.name}</h2>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}
