"use client";

import Image from "next/image";
import React, { useState } from "react";
const Country = () => {
  const [activeTab, setActiveTab] = useState("Data");

  return (
    <>
      <div className="mt-30">
        <h1 className=" text-[50px] bayon-text font-[600]">
          WHICH COUNTRY IS CALLING YOU?
        </h1>
        <p className="font-400 lato-text text-[18px] w-[1000px] text-[#000000]">
          Whether you need a prepaid eSIM for a weekend getaway or a global eSIM
          for multiple borders
        </p>
      </div>
      <ul className="flex flex-row items-center   mt-10 text-[22px] align-middle px-4">
        {["Local eSIMs", "Regional eSIMs", "Global eSIMs"].map((tab, index) => (
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
        ))}
      </ul>
      <div className="mt-20">
        <div className="border-1 h-[90px] w-[200px] rounded-[10px]"></div>
        <Image className="" width={40} height={40} src="/Images/flags/austria.png" alt="" />
      </div>
    </>
  );
};

export default Country;
