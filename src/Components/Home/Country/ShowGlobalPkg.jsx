"use client";

import Image from "next/image";
import React, { useState } from "react";
import CheckoutCard from "../../CheckOut/CheckOutCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useGuest } from "@/Context/GuestContext";
import PkgDetails from "../../PkgDetails/PkgDetails";

function ShowGlobalPkg() {
  const { globalPackages, isGlobalPackages, isGlobalPackagesError } =
    useGuest();

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);

  const packages = globalPackages?.data ?? [];


  if (isGlobalPackages) {
    return (
      <div>
        <h1>
          <Skeleton width={300} height={40} />
        </h1>
        <p className="mt-2">
          <Skeleton width={400} height={20} />
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-10 w-full mt-10">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="p-4 border rounded-xl shadow-md">
              <Skeleton height={20} width={120} className="mb-2" />
              <Skeleton height={15} width={100} className="mb-2" />
              <Skeleton height={20} width={80} className="mb-2" />
              <Skeleton height={25} width={60} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isGlobalPackagesError) return <p>Failed to load packages.</p>;
  if (!packages.length) return <p>No global packages available.</p>;

  return (
    <div>
      {/* Modal */}
      {isModalOpen && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl p-6 shadow-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-7 right-7 text-black hover:text-gray-700"
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

      {/* Heading */}
      <h1 className="bayon-text md:text-[64px] text-[24px] md:text-left text-center">
        Pick the best Global Package
      </h1>
      <p className="lato-text md:text-[22px] text-[15px] md:text-left text-center">
        Whether you need a prepaid eSIM for a short trip or a global Package for
        multiple borders.
      </p>

      {/* Packages */}
      <div className="flex md:flex-row flex-col md:gap-10 justify-center md:justify-start md:items-start items-center mt-10">
        <div className="md:w-[790px] w-[360px] flex md:justify-start justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-10 w-full">
            {packages.slice(0, visibleCount).map((pkg, idx) => (
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
                {/* Days / Validity */}
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <Image
                    width={16}
                    height={16}
                    src="/country/day.svg"
                    alt="validity"
                  />
                  {pkg.package_validity} {pkg.package_validity_unit}
                </div>

                {/* Minutes */}
                <div className="flex items-center gap-2 text-sm my-2">
                  <Image
                    width={16}
                    height={16}
                    src="/country/gb.svg"
                    alt="minutes"
                  />
                  {pkg.minutes ? `${pkg.minutes} Minutes` : "Unlimited Minutes"}
                </div>

                {/* SMS */}
                <div className="flex items-center gap-2 text-sm my-2">
                  <Image
                    width={16}
                    height={16}
                    src="/country/gb.svg"
                    alt="sms"
                  />
                  {pkg.sms ? `${pkg.sms} SMS` : "Unlimited SMS"}
                </div>

                {/* Countries */}
                <div className="flex items-center gap-1 text-sm mt-2 flex-wrap">
                  <Image
                    width={18}
                    height={18}
                    src="/country/country.svg"
                    alt="coverage"
                  />
                  {pkg.regional_name || pkg.local_name}
                  {pkg.countries?.slice(0, 2).map((c) => (
                    <Image
                      key={c.id}
                      width={20}
                      height={14}
                      className="inline-block rounded-sm"
                      src={c.image_url}
                      alt={c.name}
                    />
                  ))}
                  {pkg.countries?.length > 2 && (
                    <span className="ml-1">+{pkg.countries.length - 2}</span>
                  )}
                </div>

                {/* Connectivity */}
                <div className="text-green-900 bg-green-200 w-fit px-2 py-0.5 rounded-[10px] text-xs font-medium mt-3">
                  {pkg.connectivity} Available
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPlan(pkg);
                      setIsModalOpen(true);
                    }}
                    className="text-orange-500 border border-orange-400 px-3 py-1 rounded-[13.5px] text-sm"
                  >
                    View Details
                  </button>

                  <div className="bg-[#EB662B] text-white px-3 py-1 rounded-[13.5px] text-sm">
                    ${pkg.price.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Checkout Card */}
        <div>
          <CheckoutCard country="Global" plan={selectedPlan} />
        </div>
      </div>

      {/* Load More Button */}
      {visibleCount < packages.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisibleCount((prev) => prev + 9)}
            className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default ShowGlobalPkg;
