"use client";

import { useState } from "react";
import Image from "next/image";
import { useGuest } from "@/Context/GuestContext";
import { LoaderLink } from "@/Context/LoaderLink";
import ShowGlobalPkg from "./ShowGlobalPkg";

const Country = () => {
  const [activeTab, setActiveTab] = useState("Local eSIMs");
  const [visibleCount, setVisibleCount] = useState(20);

  const {
    countries,
    countriesLoading,
    regions,
    regionsLoading,
    globalPackages,
    isGlobalPackages,
    isGlobalPackagesError,
  } = useGuest();
  
  const getActiveData = () => {
    if (activeTab === "Local eSIMs")
      return { data: countries, isLoading: countriesLoading, isError: false };
    if (activeTab === "Regional eSIMs")
      return { data: regions, isLoading: regionsLoading, isError: false };
    if (activeTab === "Global Packages")
      return {
        data: globalPackages,
        isLoading: isGlobalPackages,
        isError: isGlobalPackagesError,
        isGlobal: true,
      };
    return { data: [], isLoading: false, isError: false };
  };

  const { data, isLoading, isError, isGlobal } = getActiveData();

  return (
    <>
      {/* Heading */}
      <div className="mt-20 flex flex-col md:items-start items-center text-center md:text-left">
        <h1 className="md:text-[50px] text-[24px] bayon-text md:font-[600]">
          WHICH COUNTRY IS CALLING YOU?
        </h1>
        <p className="lato-text md:text-[22px] text-[15px] text-[#000000]">
          Whether you need a prepaid eSIM for a weekend getaway or a global eSIM
          for multiple borders
        </p>
      </div>

      {/* Tabs */}
      <ul className="hidden md:flex flex-row items-center mt-10 text-[22px] align-middle">
        {["Local eSIMs", "Regional eSIMs", "Global Packages"].map(
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

      {/* Loader Skeleton */}
      {isLoading && (
        <div className="mt-20 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center gap-5">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-[104px] w-[260px] rounded-[10px] p-3 flex flex-row justify-between items-end animate-pulse bg-gray-200"
            >
              <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-row items-center gap-2">
                  <div className="w-[40px] h-[40px] bg-gray-300 rounded-full"></div>
                  <div className="h-5 w-24 bg-gray-300 rounded"></div>
                </div>
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
              </div>
              <div className="h-8 w-8 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      )}

      {/* Error */}
      {!isLoading && isError && (
        <p className="text-red-500 mt-10">Failed to load {activeTab} 🚨</p>
      )}

      {/* Data */}
      {!isLoading && data?.status && (
        <>
          {isGlobal ? (
            <ShowGlobalPkg />
          ) : (
            <div className="mt-20 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center gap-5">
              {data.data?.slice(0, visibleCount).map((pkg, index) => (
                <div
                  key={index}
                  className="border-1 h-[104px] w-[260px] rounded-[10px] p-3 flex flex-row justify-between items-end"
                >
                  <div className="flex flex-col gap-2 h-[100%] justify-center">
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        width={40}
                        height={40}
                        src={pkg.image_url || "https://flagcdn.com/w80/th.png"}
                        alt={pkg.name}
                      />
                      <h3 className="bayon-text text-[26px] leading-[22px]">
                        {pkg.name}
                      </h3>
                    </div>
                    <p className="lato-text">{`Starts at $${pkg.starts_at}`}</p>
                  </div>
                  <LoaderLink href={`/packages/${pkg.slug}`}>
                    <Image width={43} height={43} src="/Home/Arow.png" alt="" />
                  </LoaderLink>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Load More Button */}
      {!isLoading && !isGlobal && data?.data?.length > visibleCount && (
        <div className="flex justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 25)}
            className="mt-5 px-4 py-2 bg-orange-500 text-white rounded"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default Country;
