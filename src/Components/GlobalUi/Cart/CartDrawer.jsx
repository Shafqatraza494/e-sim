"use client";
import { useCart } from "@/Context/CartContext";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Trash2 } from "lucide-react";

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const router = useRouter();

  const handleContinueShopping = () => {
    closeCart();
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal > 0 ? 0.05 * subtotal : 0;
  const total = subtotal - discount;

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[300px] max-w-sm bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold">Review Your Cart</h2>
        <button onClick={closeCart} className="text-2xl leading-none">
          &times;
        </button>
      </div>

      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col flex-1 px-6 py-4 overflow-y-auto">
          {cartItems.length === 0 ? (
            <>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Your cart is empty
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Have an account? Log in to check out faster.
                </p>
              </div>
              <div className="mb-8 h-[100%] flex justify-center items-center">
                <Image
                  width={100}
                  height={100}
                  src="/RightCart/Cart.png"
                  alt=""
                />
              </div>
            </>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-4"
              >
                <div className="flex gap-3 items-center">
                  <Image
                    src={item.image || "/flags/canada.png"}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="rounded-full w-12 h-12 object-cover"
                  />
                  <div className="text-sm">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-orange-600 text-xs">Data: {item.data}</p>
                    <p className="text-orange-600 text-xs">
                      Duration: {item.duration}
                    </p>

                    <div className="flex items-center mt-1">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-2 py-1 text-lg border rounded-l"
                      >
                        –
                      </button>
                      <span className="px-3 py-1 border-t border-b">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-2 py-1 text-lg border rounded-r"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold text-lg">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 mt-1"
                    aria-label="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-6 py-4 border-t bg-white">
            {/* Discount Code */}
            <div>
              <button className="flex items-center gap-2 mb-2 text-sm font-medium">
                🏷️ Got a discount code?
              </button>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="flex-1 px-3 py-2 border rounded-md"
                  disabled
                />
                <button
                  className="bg-black text-white px-4 rounded-md"
                  disabled
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Totals */}
            <div className="text-sm mb-3">
              <div className="flex justify-between mb-1">
                <span>Sub Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-orange-500">
                <span>Coupon</span>
                <span>5% Off</span>
              </div>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-md font-medium">
              Checkout ${total.toFixed(2)}
            </button>
          </div>
        )}

        {/* Empty Cart Button */}
        {cartItems.length === 0 && (
          <div className="p-4 border-t mb-14">
            <button
              onClick={handleContinueShopping}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-1  rounded-md font-medium flex items-center justify-center gap-2 transition"
            >
              <span className="text-sm">&#x21A9;</span> Continue shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
