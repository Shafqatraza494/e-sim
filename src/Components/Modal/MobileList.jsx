"use client";

import React, { useState } from "react";

const MobileList = () => {
  const companies = [
    "Iphones",
    "iPads",
    "Samsung",
    "Google Pixel",
    "Huawei",
    "Oppo",
    "Sony",
    "Xiaomi",
    "Motorola",
    "Honor",
    "Other Android mobiles",
  ];

  const models = {
    Iphones: [
      "iPhone XS",
      "iPhone 14 Plus",
      "iPhone 13 mini",
      "iPhone 11 Pro Max",
      "iPhone 15 Pro",
      "iPhone 16 Plus",
      "iPhone XR",
      "iPhone 14 Pro Max",
      "iPhone 13 Pro",
      "iPhone 16 Pro",
      "iPhone 15 Pro Max",
      "iPhone 12",
      "iPhone 15",
      "iPhone 13 Pro Max",
      "iPhone SE (2022)",
      "iPhone SE (2020)",
      "iPhone 12 Pro",
      "iPhone 11",
    ],
    iPads: ["iPad Pro", "iPad Air", "iPad Mini", "iPad (10th Gen)"],
    Samsung: [
      "Galaxy S23",
      "Galaxy S22",
      "Galaxy Note 20",
      "Galaxy Z Flip",
      "Galaxy Fold",
    ],
    "Google Pixel": ["Pixel 7", "Pixel 8", "Pixel 9", "Pixel 10"],
    Huawei: ["P60 Pro", "P60", "Mate 50 Pro", "Mate 50", "P50 Pro", "P50"],
    Oppo: ["Find X7 Pro", "Find X7", "Reno 10 Pro", "Reno 10", "Find X6 Pro"],
    Sony: ["Xperia 1 V", "Xperia 5 V", "Xperia 10 V"],
    Xiaomi: ["Xiaomi 13 Pro", "Xiaomi 13", "Redmi Note 12 Pro", "Redmi 12C"],
    Motorola: ["Moto G Power", "Moto Edge Plus", "Razr+"],
    Honor: ["Honor 80", "Honor Magic5", "Honor X40"],
    "Other Android mobiles": [
      "Realme 12 Pro",
      "Vivo V30",
      "OnePlus Nord 3",
      "Infinix Zero 5",
      "Tecno Camon 20",
    ],
  };

  const [selectedCompany, setSelectedCompany] = useState("Iphones");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter models based on search query
  const filteredModels = models[selectedCompany].filter((model) =>
    model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center p-5">
      <div className="w-[1100px] border-2 p-[20px] rounded-2xl">
        <div className="flex justify-between items-center font-[500] text-[22px] mb-3">
          <h1>Compatible Devices with eSim</h1>
          <h1 className="cursor-pointer" onClick={() => setSelectedCompany("")}>
            x
          </h1>
        </div>

        {/* Companies Buttons */}
        <div className="flex flex-wrap gap-2 mb-3">
          {companies.map((company) => (
            <button
              key={company}
              onClick={() => setSelectedCompany(company)}
              className={`px-5 py-2 rounded-full whitespace-nowrap transition ${
                selectedCompany === company
                  ? "bg-[#F15A24] text-white"
                  : "bg-[#F9F9F9] text-black"
              }`}
            >
              {company}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="flex justify-between ">
          <input
            type="text"
            placeholder="Search for your device"
            className="w-[295px] border-[#E1E1E1] border-[0.5px] p-2 rounded-lg mb-3 bg-[#FBFBFB]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <p className=" lato-text text-[16px]  ">
            Here you can write your device name,
            <br /> Or check our 
            <span className="lato-text w-[400] text-[16px] text-[#EB662B]  underline underline-offset-4  decoration-[#EB662B]">
              <a href="/compatibility"> Supported Devices Page</a>
            </span>
          </p>
        </div>

        {/* Device List */}
        <div className="border p-3 rounded-lg h-[300px] overflow-y-auto scroll-smooth bg-[#FBFBFB]">
          {filteredModels.length > 0 ? (
            <ul className="list-disc pl-5 space-y-1">
              {filteredModels.map((model, index) => (
                <li key={index}>{model}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No devices found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileList;
