"use client";

import React, { useState } from "react";
import ButtonFill from "../GlobalUi/ui/Buttons/ButtonFill";
import ButtonOutline from "../GlobalUi/ui/Buttons/ButtonOutline";
import DummyCartButton from "../DummyCartButton";

function Hero({ heading }) {
  const [activeTab, setActiveTab] = useState("Checkout details");
  return (
    <div className="flex flex-col justify-center items-center mb-6 text-white lg:mx-4 lg:h-[297px] opacity-100 lg:rounded-[20px] bg-gradient-to-b from-[#FF9B65] to-[rgba(255,155,101,0)]">
      <div className="flex lg:flex-col flex-col-reverse justify-center items-center text-center mb-5 md:w-[100%] w-[90%] py-10">
        <h1 className="bayon-text lg:text-[80px] text-[48px] text-center align-middle leading-none py-8">
          {heading}
        </h1>
        <ul className="hidden md:flex flex-row items-center mt-10 text-[22px] align-middle">
          {["Shopping cart", "Checkout details", "Order complete"].map(
            (tab, index) => (
              <li
                key={index}
                onClick={() => {
                  setActiveTab(tab);
                  setVisibleCount(20);
                }}
                className={`cursor-pointer border-b-3 ${
                  activeTab === tab
                    ? "w-[200px] border-[#EB662B] text-[#EB662B] font-[700]"
                    : "w-[200px] text-black font-[400]"
                }`}
              >
                {tab}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default Hero;
