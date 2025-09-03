"use client";

import Image from "next/image";
import React, { useState } from "react";
import CheckOut from "../CheckOut/CheckOut";
import CheckOutDetails from "../CheckOutDetails/CheckOutDetails";
import CheckOutForm from "../CheckOutDetailForm/CheckOutForm";
import CheckoutCard from "../CheckOut/CheckOutCard";

function Section1() {
  const [activeTab, setActiveTab] = useState("Standard Plan");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const plans = [
    {
      data: "1 GB",
      days: "7 Days",

      country: "Netherlands",

      network: "5G Available",
      price: 2.23,
    },
    ...Array(8).fill({
      data: "1 GB",
      days: "7 Days",

      country: "Netherlands",

      network: "5G Available",
      price: 2.23,
    }),
  ];

  return (
    <div>
      <div>
        <h1 className="bayon-text md:text-[64px] text-[24px] md:text-left text-center">
          pick the best esim for Netherlands
        </h1>
        <p className="lato-text md:text-[22px] text-[15px] md:text-left text-center">
          Whether you need a prepaid eSIM for a weekend getaway or a global eSIM
          for multiple borders
        </p>
      </div>
      <div className="my-10 ">
        <ul className="hidden md:flex flex-row items-center   mt-10 text-[22px] align-middle">
          {["Standard Plan", "Unlimited Data", "Data/Voice"].map(
            (tab, index) => (
              <li
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer border-b-3   ${
                  activeTab === tab
                    ? "  w-[200px] border-[#EB662B] text-[#EB662B] font-[700]"
                    : " w-[200px] text-black font-[400]"
                }`}
              >
                {tab}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="flex md:flex-row flex-col md:gap-10 justify-center md:justify-start md:items-start items-center">
        <div className="md:w-[790px] w-[360px] flex md:justify-start justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-10 w-[100%]">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`border rounded-xl p-4 shadow-md w-full md:max-w-[250px] max-w-[350px] cursor-pointer transition-all duration-200
            ${
              selectedIndex === idx
                ? "ring-2 ring-orange-400"
                : "hover:shadow-lg"
            }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm flex flex-row gap-2 font-extrabold items-center">
                    <Image
                      width={16}
                      height={16}
                      src="/Country/gb.svg"
                      alt=""
                    />
                    {plan.data}
                  </div>
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors
                ${
                  selectedIndex === idx
                    ? "bg-orange-400 border-orange-500"
                    : "border-gray-300"
                }`}
                  >
                    {selectedIndex === idx && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>

                <div className="space-y-1 text-sm mb-2">
                  <div className="text-sm flex flex-row gap-2 items-center">
                    <Image
                      width={16}
                      height={16}
                      src="/Country/day.svg"
                      alt=""
                    />
                    {plan.days}
                  </div>
                  <div className="text-sm flex flex-row gap-2 items-center">
                    <Image
                      width={16}
                      height={16}
                      src="/Country/country.svg"
                      alt=""
                    />
                    {plan.country}
                  </div>
                </div>

                <div className="text-green-900 bg-green-200 w-fit px-2 rounded-[10px] text-sm font-medium mb-3">
                  {plan.network}
                </div>

                <div className="flex justify-between items-center gap-[7.5px]">
                  <button className="text-orange-500 border border-orange-400 px-3 py-1 w-[136px] h-[33px]  rounded-[13.5px] text-sm">
                    View Details
                  </button>
                  <div className="bg-[#EB662B] text-white px-3 py-1 rounded-[13.5px] w-[80px] h-[33px] border-[0.75] text-sm">
                    ${plan.price.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <CheckoutCard />
        </div>
      </div>
    </div>
  );
}

export default Section1;
