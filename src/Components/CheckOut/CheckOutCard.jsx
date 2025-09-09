"use client";

import { useCart } from "@/Context/CartContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const CheckoutCard = ({ country, plan }) => {
  const [activeTab, setActiveTab] = useState("Features");
  const [quantity, setQuantity] = useState(1);

  const { addToCart, cartItems, toggleCart } = useCart();

  // 🔹 Reset quantity when plan changes
  useEffect(() => {
    setQuantity(1);
  }, [plan]);

  // 🔹 Calculate total items in cart
  const handleCart = () => {
    if (plan && quantity > 0) {
      addToCart(plan, quantity);
      setQuantity(1);
      toggleCart();
    }
  };

  // 🔹 Disable conditions
  const isDisabled = !plan;

  return (
    <div className="border border-black md:w-[400px] w-[362px] md:h-[552px] h-[600px] rounded-[13.4px]">
      {/* Rating header */}
      <div className="flex md:justify-start justify-center gap-3 p-4">
        <h1 className="font-bold text-[12px] Montserrat">Excellent</h1>
        <p className="text-[12px] Montserrat">
          <span className="font-bold">4.8</span> out of 5
        </p>
        <Image
          width={14}
          height={13}
          src="/About/Shape...star.svg"
          alt="star"
        />
        <h1 className="font-bold text-[12px] Montserrat">Trustpilot</h1>
      </div>

      <div className="border-t border-[#D8D8D8] mt-2 "></div>

      {/* Plan Info */}
      <div className="p-4">
        <div className="flex items-center gap-3 mt-4 md:justify-start justify-center">
          <Image
            src={plan?.banner || "/Country/country.svg"}
            alt="flag"
            width={36}
            height={36}
          />
          <h2 className="font-bold Montserrat">
            {plan?.name || "Select Plan"}
          </h2>
        </div>

        {/* Quantity */}
        <div className="flex gap-4 mt-1 justify-between w-[98%] items-center">
          <p className="mt-3">Quantity</p>
          <div className="border-1 border-gray-300 rounded-[12px] flex flex-row justify-center items-center">
            <button
              disabled={isDisabled || quantity <= 1}
              className={`px-2 ${
                isDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => setQuantity(quantity - 1)}
            >
              –
            </button>
            <button className="border-l-1 border-r-1 border-gray-300 h-[20px] px-2">
              {quantity}
            </button>
            <button
              disabled={isDisabled}
              className={`px-2 ${
                isDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleCart}
          disabled={isDisabled}
          className={`flex items-center lato-text text-[20px] font-[400] justify-center gap-2 ${
            isDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#F97316] hover:bg-[#ea580c]"
          } text-white md:w-[365px] w-[322px] md:h-[45px] h-[44px] py-3 mt-4 rounded-[18px]`}
        >
          <FaShoppingCart />
          {isDisabled
            ? "Add to Cart"
            : `Add to Cart - $${
                plan?.price ? (plan?.price * quantity).toFixed(2) : 0.0
              }`}
        </button>

        <div className="flex items-center gap-2 mt-3">
          <Image
            className="w-[14px]"
            height={20}
            width={14}
            src="/About/Vector-22.svg"
            alt=""
          />
          <span className="text-lato font-[400] text-size-[16px]">
            Check if your device supports eSIMs
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#D8D8D8] h-[0px] w-[100%] mt-6"></div>

      {/* Tabs */}
      <div className="p-4">
        <ul className="flex text-[16px] lato-text font-[500] w-[100%]">
          {["Features", "Description", "Technical Specs"].map((tab, index) => (
            <li
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer border-b-3 ${
                activeTab === tab
                  ? "w-[130px] border-[#EB662B] text-[#EB662B] font-[700]"
                  : "w-[130px] text-black font-[400]"
              }`}
            >
              {tab}
            </li>
          ))}
        </ul>

        {/* Features */}
        <ul className="mt-3 lato-text list-disc list-inside text-[11px] md:text-[10px] leading-6 flex justify-center md:h-[180px] flex-col">
          <h1 className="font-[400] text-[#000000]">
            About eSIMCard's {country?.name || "Plan"}
          </h1>
          <li className="font-[400] text-[#000000]">
            Stay connected with fast, reliable 2G,3G,4G,5G network
          </li>
          <li className="font-[400] text-[#000000]">
            Affordable plans starting at ${plan?.price || "0.00"}
          </li>
          <li className="font-[400] text-[#000000]">
            Pay only for the data you use. No hidden fee and roaming charges
          </li>
          <li className="font-[400] text-[#000000]">
            Fast activation via QR code or manual setup
          </li>
          <li className="font-[400] text-[#000000]">
            24/7 support team to assist you during travel
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheckoutCard;
