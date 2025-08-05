"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RightCart() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
      <p className="mb-6 text-sm text-gray-600">
        Have an account? Log in to check out faster.
      </p>

      <Image
        src="/sad-cart.png" // Place the sad cart image in /public
        alt="Empty cart"
        width={100}
        height={100}
        className="mb-6"
      />

      <button
        onClick={() => router.push("/")}
        className="bg-orange-500 text-white py-2 px-6 rounded-full shadow hover:bg-orange-600"
      >
        Continue shopping
      </button>
    </div>
  );
}
