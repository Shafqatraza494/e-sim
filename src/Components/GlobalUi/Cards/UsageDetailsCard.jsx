"use client";

import React, { useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useAuth } from "@/Context/AuthContext";
import { AlertTriangle } from "lucide-react";
import Alert from "@mui/material/Alert";

const UsageDetailsCard = ({ simId }) => {
  const { getSimById } = useAuth();
  const { data: simResponse, isLoading, isError } = getSimById(simId);
  const [activeTab, setActiveTab] = useState("Data");

  // Extract SIM details
  const simDetails = simResponse?.data?.sim;
  const assignedPackages = simResponse?.data?.assigned_packages || [];
  const overallUsage = simResponse?.data?.overall_usage || {};

  const currentPackage =
    assignedPackages.length > 0 ? assignedPackages[0] : null;

  const radius = 90;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  const dataMap = {
    Data: {
      percentage:
        overallUsage.rem_data_quantity && overallUsage.rem_data_unit
          ? Math.min(
              100,
              (overallUsage.rem_data_quantity /
                (currentPackage?.package_type?.data_quantity || 1)) *
                100
            )
          : 0,
      unit: overallUsage.rem_data_unit || "GB",
      label: "Data",
      note: overallUsage.rem_data_quantity
        ? `of ${currentPackage?.package_type?.data_quantity} ${overallUsage.rem_data_unit} left`
        : "N/A",
    },
    Minutes: {
      percentage:
        overallUsage.rem_voice_quantity && overallUsage.rem_voice_unit
          ? Math.min(
              100,
              (overallUsage.rem_voice_quantity /
                (currentPackage?.package_type?.voice_quantity || 1)) *
                100
            )
          : 0,
      unit: overallUsage.rem_voice_unit || "min",
      label: "Minutes",
      note: overallUsage.rem_voice_quantity
        ? `of ${currentPackage?.package_type?.voice_quantity} min used`
        : "N/A",
    },
    SMS: {
      percentage:
        overallUsage.rem_sms_quantity && overallUsage.rem_sms_unit
          ? Math.min(
              100,
              (overallUsage.rem_sms_quantity /
                (currentPackage?.package_type?.sms_quantity || 1)) *
                100
            )
          : 0,
      unit: overallUsage.rem_sms_unit || "SMS",
      label: "SMS",
      note: overallUsage.rem_sms_quantity
        ? `of ${currentPackage?.package_type?.sms_quantity} SMS left`
        : "N/A",
    },
  };

  const { percentage, unit, label, note } = dataMap[activeTab];
  const offset = circumference - (percentage / 100) * circumference;

  if (isLoading) {
    return (
      <div className="flex flex-col justify-between w-[391px] lg:w-[550px] h-[500px] border-1 rounded-2xl bg-white p-6">
        <Skeleton height={30} width={150} className="mx-auto mb-5" />
        <ul className="flex justify-center gap-4 mb-10">
          {["Data", "Minutes", "SMS"].map((tab, index) => (
            <li key={index}>
              <Skeleton width={80} height={25} />
            </li>
          ))}
        </ul>
        <div className="relative w-[180px] h-[180px] mx-auto">
          <Skeleton circle width={180} height={180} />
        </div>
        <div className="flex flex-row items-center gap-3 mx-10 mb-7 bg-[#D894001A] px-2 rounded-md">
          <Skeleton width={16.67} height={16.67} />
          <Skeleton width={`80%`} height={16} />
        </div>
      </div>
    );
  }

  if (isError || !simDetails) {
    return (
      <div className="w-[391px] lg:w-[550px] h-[500px] border-1 rounded-2xl py-3 bg-white flex items-center justify-center">
        <p className="text-red-500">Failed to load usage details</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between w-[391px] lg:w-[550px] h-[500px] border-1 rounded-2xl bg-white">
      {/* Tabs */}
      <h1 className="md:hidden block font-[600] text-[22px] pt-6 pl-5">
        {label} Usage
      </h1>
      <ul className="flex justify-center mt-10 text-[22px] align-middle px-4">
        {["Data", "Minutes", "SMS"].map((tab, index) => (
          <li
            key={index}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer border-b-3 ${
              activeTab === tab
                ? "w-[130px] border-[#EB662B] text-[#EB662B] font-[700]"
                : "w-[130px] text-black font-[400]"
            }`}
          >
            {tab}
          </li>
        ))}
      </ul>

      {/* Heading */}
      <div className="hidden md:flex justify-center items-center mt-8">
        <h1 className="text-[#EB662B] font-[700] text-[34px] tracking-[-2%]">
          {label} Usage
        </h1>
      </div>

      {/* Chart */}
      <div className="relative w-[180px] h-[180px] mx-auto mt-9">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-270"
        >
          <circle
            stroke="#F6C6AD"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeDasharray="30 20"
          />
          <circle
            stroke="#EB662B"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>

        {/* Center Text */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center leading-none">
          <p className="text-black font-semibold text-[16px] mb-1">{label}</p>
          <p className="text-[#EB662B] font-bold text-[28px] leading-[1]">
            {percentage}
          </p>
          <p className="text-[#EB662B] font-bold text-[20px] leading-[1]">
            {unit}
          </p>
          <p className="text-[#EB662B] text-[13px] mt-1 leading-[1.2]">
            {note}
          </p>
        </div>
      </div>

      <Alert
        severity="warning"
        className="mx-10 mb-7 bg-[#D894001A] px-2 rounded-md"
      >
        You are low on data. Please update your package.
      </Alert>
    </div>
  );
};

export default UsageDetailsCard;
