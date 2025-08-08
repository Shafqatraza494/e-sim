"use client";

import Image from "next/image";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const CheckoutCard = () => {
  const [activeTab, setActiveTab] = useState("Data");

  return (
    <div className="border border-black md:w-[517px] w-[362px] md:h-[552px]  rounded-[13.4px] ">
      {/* Top Review Section */}
      <div className="flex  md:justify-start justify-center gap-3 p-4">
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

      {/* Divider */}
      <div className="border-t border-[#D8D8D8] mt-2 "></div>

      <div className=" p-4">
        {" "}
        {/* Product Section */}
        <div className="flex items-center gap-3 mt-4 md:justify-start justify-center">
          <Image src="/Country/flag.svg" alt="flag" width={36} height={36} />
          <h2 className="font-bold Montserrat">Netherlands Unlimited</h2>
        </div>
        {/* Quantity */}
        <div className="flex gap-4 mt-1 justify-between w-[98%] items-center">
          <p className="mt-3">Quantity</p>
          <div className="border-1 border-gray-300 rounded-[12px]  flex flex-row justify-center items-center">
            <button className="px-2">−</button>
            <button className=" border-l-1 border-r-1 border-gray-300 h-[20px] px-2">
              1
            </button>
            <button className="px-2">+</button>
          </div>
        </div>
        {/* Add to Cart Button */}
        <button className="flex items-center lato-text text-[20px] font-[400] justify-center gap-2 bg-[#F97316] text-white md:w-[476px] w-[322px] md:h-[53px] h-[44px] py-3 mt-4 rounded-[18px] ">
          <FaShoppingCart />
          Add to Cart - $25.00
        </button>
        {/* eSIM Check */}
        <div className="flex items-center gap-2 mt-3">
          <Image
            className="w-[14px] "
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

      <div className=" p-4">
        <ul className="flex  text-[16px] lato-text font-[500]   w-[100%] ">
          {["Features", "Description", "Technical Specs"].map((tab, index) => (
            <li
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer border-b-3   ${
                activeTab === tab
                  ? "  w-[130px] border-[#EB662B] text-[#EB662B] font-[700]"
                  : " w-[130px] text-black font-[400]"
              }`}
            >
              {tab}
            </li>
          ))}
        </ul>

        {/* Features List */}
        <ul className="mt-3 list-disc list-inside text-[11px] md:text-[14px] leading-6 tracking-[-0.6] md:w-[490px] w-[345px] flex justify-center md:h-[180px] h-[171px] flex-col">
          <h1 className=" font-[400] text-[#000000] ">
            About eSIMCard's Netherlands eSIM
          </h1>
          <li className=" font-[400] text-[#000000]">
            Stay connected in Netherlands with fast, reliable 2G,3G,4G,5G
            network
          </li>
          <li className="  font-[400] text-[#000000]">
            Our eSIM data plans for Netherlands are affordable, starting at just
            $2.23
          </li>
          <li className=" font-[400] text-[#000000]">
            Pay only for the data you use. No hidden fee and roaming charges
          </li>
          <li className=" font-[400] text-[#000000]">
            Fast activation via QR code or manual setup
          </li>
          <li className=" font-[400] text-[#000000]">
            24/7 - Active support team. We've got your back for any issue during
            your travel
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheckoutCard;
