"use client";

import React from "react";
import Image from "next/image";
import ButtonFill from "../ui/Buttons/ButtonFill";
import ButtonOutlineOrange from "../ui/Buttons/ButtonOutlineOrange";
import { useAuth } from "@/Context/AuthContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SimDetailsCard({ simId }) {
  const { getSimById } = useAuth();
  const { data: simResponse, isLoading, isError } = getSimById(simId);

  const simDetails = simResponse?.data?.sim;

  if (isLoading) {
    return (
      <div className="lg:w-[600px] w-[391px] lg:h-[500px] border-1 rounded-2xl py-3 bg-white p-6">
        <ul className="grid lg:grid-cols-2 grid-cols-1 place-items-left gap-8 pb-5">
          {Array.from({ length: 8 }).map((_, index) => (
            <li
              key={index}
              className="flex flex-row gap-2 text-lato justify-start items-start align-top lg:pl-8 pl-2 lg:bg-white bg-[#FBFBFB] lg:mx-0 mx-5 rounded-[9px] lg:py-0 py-4"
            >
              <Skeleton width={30} height={30} />
              <div className="flex flex-col w-full">
                <Skeleton width={120} height={20} className="mb-2" />
                <Skeleton width={`80%`} height={16} />
              </div>
            </li>
          ))}
        </ul>

        {/* Mobile buttons */}
        <div className="lg:hidden flex flex-col gap-4 p-6 text-white">
          <Skeleton height={40} />
          <Skeleton height={40} />
        </div>

        {/* Desktop QR & share */}
        <div className="hidden lg:flex flex-col gap-2 px-8">
          <Skeleton width={100} height={100} />
          <div className="flex flex-row gap-2">
            <Skeleton width={20} height={20} />
            <Skeleton width={20} height={20} />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !simDetails) {
    return (
      <div className="lg:w-[600px] w-[391px] lg:h-[500px] border-1 rounded-2xl py-3 bg-white flex items-center justify-center">
        <p className="text-red-500">Failed to load SIM details</p>
      </div>
    );
  }

  const relatedPackages = simResponse?.data?.related_packages || [];
  const assignedPackages = simResponse?.data?.assigned_packages || [];
  const overallUsage = simResponse?.data?.overall_usage || {};

  const currentPackage =
    assignedPackages.length > 0 ? assignedPackages[0] : null;

  const infoData = [
    {
      heading: "ICCID",
      value: simDetails.iccid || "-",
      image: "/SimDetailsImages/ICCID.png",
      icon: true,
    },
    {
      heading: "Activation Code",
      value: simDetails.lpa || "-",
      image: "/SimDetailsImages/Purchase.png",
      icon: true,
    },
    {
      heading: "Manual Entry",
      subHeading: "(Android)",
      value: simDetails.lpa || "-",
      image: "/SimDetailsImages/ICCID.png",
      icon: true,
    },
    {
      heading: "Purchase Date",
      value: simDetails.created_at
        ? new Date(simDetails.created_at).toLocaleDateString()
        : "N/A",
      image: "/SimDetailsImages/Purchase.png",
      icon: false,
    },
    {
      heading: "Status",
      value: simDetails.status || "Unknown",
      image: "/SimDetailsImages/Status.png",
      icon: false,
    },
    {
      heading: "Coverage",
      value:
        currentPackage?.package_type?.local_name ||
        (relatedPackages.length > 0
          ? "Multiple Packages Available"
          : "See Details"),
      image: "/SimDetailsImages/Coverage.png",
      icon: false,
    },
    {
      heading: "Data Usage",
      value:
        overallUsage.rem_data_quantity && overallUsage.rem_data_unit
          ? `${overallUsage.rem_data_quantity} ${overallUsage.rem_data_unit} remaining`
          : "N/A",
      image: "/SimDetailsImages/Status.png",
      icon: false,
    },
    {
      heading: "Renewable Date",
      value: currentPackage?.date_expiry
        ? new Date(currentPackage.date_expiry).toLocaleDateString()
        : "N/A",
      image: "/SimDetailsImages/Renewable.png",
      icon: false,
    },
  ];

  return (
    <div className="lg:w-[600px] w-[391px] lg:h-[500px] border-1 rounded-2xl py-3 bg-white">
      <ul className="grid lg:grid-cols-2 grid-cols-1 place-items-left gap-5 pb-5">
        {infoData.map((info, index) => (
          <li
            key={index}
            className="flex flex-row gap-2 text-lato justify-start items-start align-top lg:pl-8 pl-2 lg:bg-white bg-[#FBFBFB] lg:mx-0 mx-5 rounded-[9px] lg:py-0 py-4"
          >
            <Image src={info.image} alt="" width={30} height={30} />
            <div className="flex flex-col">
              <p className="text-[18px] font-[600] text-[#EB662B]">
                {info.heading}
                {info.subHeading && (
                  <span className="text-sm ml-1">{info.subHeading}</span>
                )}
              </p>
              <div className="flex flex-row gap-1 text-[12px] font-[600] items-center">
                <p className="w-[150px]">{info.value}</p>
                {info.icon && (
                  <Image
                    src="/SimDetailsImages/copy.png"
                    width={15}
                    height={15}
                    alt="copy"
                  />
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Mobile buttons */}
      <div className="lg:hidden flex flex-col gap-4 p-6 text-white">
        <ButtonFill text={"Manage Subscription"} />
        <ButtonOutlineOrange text={"Cancel Subscription"} />
      </div>

      {/* Desktop QR & share */}
      <div className="hidden lg:flex flex-col gap-2 px-8">
        <Image
          height={100}
          width={100}
          src="/SimDetailsImages/QR.png"
          alt="QR Code"
        />
        <div className="flex flex-row gap-2">
          <Image
            height={20}
            width={20}
            src="/SimDetailsImages/download.png"
            alt="Download"
          />
          <Image
            height={20}
            width={20}
            src="/SimDetailsImages/share.png"
            alt="Share"
          />
        </div>
      </div>
    </div>
  );
}

export default SimDetailsCard;
