"use client";

import Image from "next/image";
import React, { useState } from "react";
import CheckoutCard from "../CheckOut/CheckOutCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useGuest } from "@/Context/GuestContext";
import PkgDetails from "../PkgDetails/PkgDetails";

function ShowCountryPkg({ slug }) {
  const { useCountryBySlug } = useGuest();
  const { data, isLoading, isError } = useCountryBySlug(slug);

  const [activeTab, setActiveTab] = useState("Standard Plan");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const country = data?.country;
  const packages = data?.data;

  if (isLoading) {
    return (
      <div>
        {" "}
        <h1>
          {" "}
          <Skeleton width={300} height={40} />{" "}
        </h1>{" "}
        <p className="mt-2">
          {" "}
          <Skeleton width={400} height={20} />{" "}
        </p>{" "}
        <div className="my-10 flex gap-4">
          {" "}
          <Skeleton width={150} height={30} />{" "}
          <Skeleton width={150} height={30} />{" "}
          <Skeleton width={150} height={30} />{" "}
        </div>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-10 w-full">
          {" "}
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="p-4 border rounded-xl shadow-md">
              {" "}
              <Skeleton height={20} width={120} className="mb-2" />{" "}
              <Skeleton height={15} width={100} className="mb-2" />{" "}
              <Skeleton height={20} width={80} className="mb-2" />{" "}
              <Skeleton height={25} width={60} />{" "}
            </div>
          ))}{" "}
        </div>{" "}
        <div>
          {" "}
          <Skeleton height={200} width={300} />{" "}
        </div>{" "}
      </div>
    );
  }

  if (!packages || packages.length === 0) {
    return <p>No packages available for this country.</p>;
  }

  const filteredPackages = packages.filter((pkg) => {
    if (activeTab === "Standard Plan") {
      return pkg.package_type === "DATA-ONLY" && !pkg.unlimited;
    }
    if (activeTab === "Unlimited Data") {
      return pkg.unlimited === true;
    }
    if (activeTab === "Data/Voice") {
      return pkg.voice_quantity > 0;
    }
    return true;
  });

  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl p-6 shadow-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-7 right-7 text-black-600 hover:text-black"
            >
              ✕
            </button>

            <PkgDetails
              pkg={selectedPlan}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      )}
      <div>
        <h1 className="bayon-text md:text-[64px] text-[24px] md:text-left text-center">
          pick the best esim for {country?.local_name || "your country"}
        </h1>
        <p className="lato-text md:text-[22px] text-[15px] md:text-left text-center">
          Whether you need a prepaid eSIM for a weekend getaway or a global eSIM
          for multiple borders
        </p>
      </div>

      {/* ✅ Tabs */}
      <div className="my-10">
        <ul className="hidden md:flex flex-row items-center mt-10 text-[22px] align-middle">
          {["Standard Plan", "Unlimited Data", "Data/Voice"].map(
            (tab, index) => (
              <li
                key={index}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedIndex(null);
                  setSelectedPlan(null);
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

      {/* ✅ Packages Grid */}
      <div className="flex md:flex-row flex-col md:gap-10 justify-center md:justify-start md:items-start items-center">
        <div className="md:w-[790px] w-[360px] flex md:justify-start justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-10 w-[100%]">
            {filteredPackages.map((pkg, idx) => (
              <div
                key={pkg.id}
                onClick={() => {
                  setSelectedIndex(idx);
                  setSelectedPlan(pkg);
                }}
                className={`border rounded-xl p-4 shadow-md w-full md:max-w-[250px] max-w-[350px] cursor-pointer transition-all duration-200 ${
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
                      src={"/Country/gb.svg"}
                      alt=""
                    />
                    {pkg.data_quantity} {pkg.data_unit}
                  </div>
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
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
                  <div className="flex flex-row gap-2 items-center">
                    <Image
                      width={16}
                      height={16}
                      src="/Country/day.svg"
                      alt=""
                    />
                    {pkg.package_validity} {pkg.package_validity_unit}
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <Image
                      width={16}
                      height={16}
                      src={
                        pkg.countries?.[0]?.image_url ||
                        "/Country/default-flag.png"
                      }
                      alt=""
                    />
                    {pkg.local_name}
                  </div>
                </div>

                <div className="text-green-900 bg-green-200 w-fit px-2 rounded-[10px] text-sm font-medium mb-3">
                  {pkg.connectivity}
                </div>

                <div className="flex justify-between items-center gap-[7.5px]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPlan(pkg);
                      setIsModalOpen(true);
                    }}
                    className="text-orange-500 border border-orange-400 px-3 py-1 w-[136px] h-[33px] rounded-[13.5px] text-sm"
                  >
                    View Details
                  </button>
                  <div className="bg-[#EB662B] text-white px-3 py-1 rounded-[13.5px] w-[80px] h-[33px] text-sm">
                    ${pkg.price.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Checkout Card */}
        <div>
          <CheckoutCard
            country={country?.local_name || ""}
            plan={selectedPlan}
          />
        </div>
      </div>
    </div>
  );
}

export default ShowCountryPkg;
