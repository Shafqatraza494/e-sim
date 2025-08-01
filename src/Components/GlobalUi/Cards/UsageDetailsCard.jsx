import React from "react";
import Image from "next/image";

const UsageDetailsCard = () => {
  const radius = 90;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const percentage = 50.7;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <>
      <div className="flex flex-col justify-between w-[550px] h-[500px]  border-1 rounded-2xl bg-white">
        <div>
          <ul className="flex justify-center gap-[50px] mt-10 text-[22px]  align-middle ">
            <li className="text-lato font-[700] text-[#EB662B]   ">Data</li>
            <li className="w-[80px] h-[16px] text-lato font-[400] ">Minutes</li>
            <li className="w-[45px] h-[16px] text-lato font-[400] ">SMS </li>
          </ul>
          <div className="flex justify-center items-center mt-15">
            <h1 className="text-[#EB662B]  font-[700]  text-[34px] tracking-[-2%]">
              Data Usage
            </h1>
          </div>

          {/* Chart */}
          <div className="relative w-[180px] h-[180px] mx-auto mt-9">
            <svg
              height={radius * 2}
              width={radius * 2}
              className="transform -rotate-270"
            >
              {/* Background dashed circle */}
              <circle
                stroke="#F6C6AD"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                strokeDasharray="30 20"
              />
              {/* Foreground arc */}
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
              <p className="text-black font-semibold text-[16px] mb-1">Data</p>
              <p className="text-[#EB662B] font-bold text-[28px] leading-[1]">
                {percentage}
              </p>
              <p className="text-[#EB662B] font-bold text-[20px] leading-[1]">
                GB
              </p>
              <p className="text-[#EB662B] text-[13px] mt-1 leading-[1.2]">
                of 100 GB left
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 mx-10 mb-7">
          <Image width={16.67} height={16.67} src="/info.png" alt="" />
          <h3 className="text-[13px] text-[#EB662B] font-[500] ">
            {" "}
            You are low on data please update your package to avoid inconvience
          </h3>
        </div>
      </div>
    </>
  );
};

export default UsageDetailsCard;
