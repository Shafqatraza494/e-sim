"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]); // array of full plans + quantity
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProduct, setCartProduct] = useState(null); // checkout summary result

  const { checkoutSummary, isCheckoutSummaryLoading, checkoutSummaryError } =
    useAuth();

  

  // ✅ Add or update plan in cart (max 5 per item)
  const addToCart = (plan, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === plan.id);

      if (existing) {
        return prev.map((item) =>
          item.id === plan.id
            ? {
                ...item,
                quantity: Math.min(item.quantity + quantity, 5), // 🚫 cap at 5
              }
            : item
        );
      } else {
        return [...prev, { ...plan, quantity: Math.min(quantity, 5) }]; // 🚫 cap at 5
      }
    });
  };

  // ✅ Remove a plan
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Increase quantity (max 5 per item)
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.min(item.quantity + 1, 5) } // 🚫 cap at 5
          : item
      )
    );
  };

  // ✅ Decrease quantity (min 1)
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ✅ Clear all plans
  const clearCart = () => setCartItems([]);

  // 🔹 Auto-fetch checkout summary when cart changes
  useEffect(() => {
    if (cartItems.length === 0) {
      setCartProduct(null);
      return;
    }

    const payload = {
      bundles: cartItems.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })),
    };

    checkoutSummary(payload, {
      onSuccess: (data) => {
        console.log("Fetched summary ✅", data);
        setCartProduct(data);
      },
      onError: (err) => {
        console.error("Summary fetch failed ❌", err?.response?.data || err);
        setCartProduct(null);
      },
    });
  }, [cartItems, checkoutSummary]);

  // ✅ UI controls
  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isCartOpen,
        toggleCart,
        closeCart,

        // 🔹 Checkout summary result
        cartProduct,
        isCheckoutSummaryLoading,
        checkoutSummaryError,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
