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
      "iPhone XS",
      "iPhone 14 Plus",
      "iPhone 13 mini",
      "iPhone 11 Pro Max",
      "iPhone 15 Pro",
      "iPhone 16 Plus",
      "iPhone XS",
      "iPhone 12",
      "iPhone XR",
      "iPhone 14 Pro Max",
      "iPhone 13 Pro",
      "iPhone 12 mini",
      "iPhone 16 Pro",
      "iPhone 12",
      "iPhone 14",
      "iPhone 12 Pro Max",
      "iPhone 11 Pro",
      "iPhone 15 Plus",
      "iPhone SE (2022)",
      "iPhone SE (2022)",
      "iPhone 14",
      "iPhone XS Max",
      "iPhone 14 Pro",
      "iPhone 13",
      "iPhone SE (2020)",
      "iPhone 15 Pro Max",
      "iPhone 15 Pro Max",
      "iPhone XS Max",
      "iPhone 12 Pro",
      "iPhone 11",
      "iPhone 15",
      "iPhone 13 Pro Max",
      "iPhone 16",
      "iPhone 16 Pro Max",
      "iPhone 12 Pro",
    ],
    Samsung: [
      "Galaxy S23",
      "Galaxy S22",
      "Galaxy Note 20",
      "Galaxy Z Flip",
      "Galaxy Fold",
    ],
    // Add more brands...
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
