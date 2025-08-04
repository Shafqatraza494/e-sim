"use client";

import React, { useState } from "react";
import Image from "next/image";
import { data } from "autoprefixer";

const UsageDetailsCard = () => {
  const [activeTab, setActiveTab] = useState("Data");

  const radius = 90;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  // Dynamic data for each tab
  const dataMap = {
    Data: {
      percentage: 50.7,
      unit: "GB",
      label: "Data",
      note: "of 100 GB left",
    },
    Minutes: {
      percentage: 80,
      unit: "min",
      label: "Minutes",
      note: "of 500 min used",
    },
    SMS: {
      percentage: 30,
      unit: "SMS",
      label: "SMS",
      note: "of 1000 SMS left",
    },
  };

  const { percentage, unit, label, note } = dataMap[activeTab];
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col justify-between w-[600px] h-[500px] border-1 rounded-2xl bg-white">
      <div>
        {/* Tabs */}
        <ul className="flex justify-center  mt-10 text-[22px] align-middle">
          {["Data", "Minutes", "SMS"].map((tab, index) => (
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

        {/* Heading */}
        <div className="flex justify-center items-center mt-8">
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
      </div>

      {/* Info Message */}
      <div className="flex flex-row items-center gap-3 mx-10 mb-7">
        <Image width={16.67} height={16.67} src="/info.png" alt="info" />
        <h3 className="text-[12px] text-[#EB662B] font-[500] ">
          You are low on data. Please update your package to avoid
          inconvenience.
        </h3>
      </div>
    </div>
  );
};

export default UsageDetailsCard;
