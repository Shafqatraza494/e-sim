"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Smartphone } from "lucide-react";

export default function MobileModels() {
  const companies = [
    { name: "Iphones", color: "#F15A24" },
    { name: "iPads" },
    { name: "Samsung" },
    { name: "Google Pixel" },
    { name: "Huawei" },
    { name: "Oppo" },
    { name: "Sony" },
    { name: "Xiaomi" },
    { name: "Motorola" },
  ];

const models = {
  Iphones: [
    "iPhone XS", "iPhone 14 Plus", "iPhone 13 mini", "iPhone 11 Pro Max",
    "iPhone 15 Pro", "iPhone 16 Plus", "iPhone XR", "iPhone 14 Pro Max",
    "iPhone 13 Pro", "iPhone 16 Pro", "iPhone 15 Pro Max", "iPhone 12",
    "iPhone 15", "iPhone 13 Pro Max", "iPhone SE (2022)", "iPhone SE (2020)",
    "iPhone 12 Pro", "iPhone 11"
  ],
  iPads: [
    "iPad Pro (7th generation)",
    "iPad Air (7th generation, M3)",
    "iPad Mini (7th generation, A17 Pro)",
    "iPad (11th generation, A16)"
  ],
  Samsung: [
    "Galaxy S23", "Galaxy S22", "Galaxy Note 20", "Galaxy Z Flip", "Galaxy Fold"
  ],
  "Google Pixel": [
    "Pixel", "Pixel 2", "Pixel 3", "Pixel 3a", "Pixel 4", "Pixel 5",
    "Pixel 6", "Pixel 6a", "Pixel 7", "Pixel 7a", "Pixel 8", "Pixel 8 Pro",
    "Pixel 8a", "Pixel 9", "Pixel 9 Pro", "Pixel 9 Pro Fold", "Pixel 9a",
    "Pixel 10", "Pixel 10 Pro", "Pixel 10 Pro XL", "Pixel 10 Pro Fold"
  ],
  Huawei: [
    "P60 Pro", "P60", "Mate 50 Pro", "Mate 50", "P50 Pro", "P50"
    // Example Huawei models — precise data not pulled from source
  ],
  Oppo: [
    "Find X7 Pro", "Find X7", "Reno 10 Pro", "Reno 10", "Find X6 Pro"
    // Example Oppo models
  ],
  Sony: [
    "Xperia 1 V", "Xperia 5 V", "Xperia 10 V"
    // Example Sony models
  ],
  Xiaomi: [
    "Xiaomi 13 Pro", "Xiaomi 13", "Redmi Note 12 Pro", "Redmi 12C"
    // Example Xiaomi models
  ],
  Motorola: [
    "Moto G Power (2025)", "Moto Edge Plus (2025)", "Razr+ (2025)"
    // Example Motorola models
  ],
};

  const [selectedCompany, setSelectedCompany] = useState("Iphones");
  const scrollRef = useRef(null);

  // Always start from the first chip on mount
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, []);

  // Scroll handler for arrows
  const scrollByAmount = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Company Selector */}
      <div className="flex items-center gap-2">
        {/* Left Scroll Button - visible only on desktop */}
        <button
          onClick={() => scrollByAmount(-150)}
          className="hidden md:block p-2 rounded-full bg-gray-100"
        >
          <ChevronLeft size={18} />
        </button>

        <div
          ref={scrollRef}
          className="flex items-center gap-2 overflow-x-auto scrollbar-hide scroll-smooth md:justify-center flex-1"
        >
          {companies.map((company) => (
            <button
              key={company.name}
              onClick={() => setSelectedCompany(company.name)}
              className={`px-5 py-2 rounded-full whitespace-nowrap transition ${
                selectedCompany === company.name
                  ? "bg-[#F15A24] text-white"
                  : "bg-[#F9F9F9] text-black"
              }`}
            >
              {company.name}
            </button>
          ))}
        </div>

        {/* Right Scroll Button - visible only on desktop */}
        <button
          onClick={() => scrollByAmount(150)}
          className="hidden md:block p-2 rounded-full bg-gray-100"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Models Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:px-6 px-4 bg-white rounded-2xl p-6 border">
        {models[selectedCompany]?.map((model, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <Smartphone size={16} />
            <span>{model}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
