"use client";

import Image from "next/image";
import React from "react";

function Manual() {
  return (
    <div className="flex flex-col">
      <div className="bg-[#EB662B1A] w-[400px] text-[#F15A24] p-2 rounded-md flex items-center gap-2 text-sm">
        <Image
          width={20}
          height={20}
          src="/Sim-Installation/info.png"
          alt="info"
        />
        <span>Incase eSIM doesn't work please check:</span>
      </div>

      <div className="flex py-6 text-[16px] lato-text">
        <div className=" bg-[#FBFBFB] p-4 rounded-[9px]">
          <div className="flex flex-row gap-6 p-2">
            <div className="flex flex-row items-center gap-1">
              <Image
                width={20}
                height={20}
                src="/Sim-Installation/settings.png"
                alt=""
              />
              <p>SM-DP+ADDRESS</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <p>SM-DP+ADDRESS</p>
              <Image
                onClick={() => alert("copy")}
                className="cursor-pointer"
                width={15}
                height={15}
                src="/Sim-Installation/copy.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-row gap-6 p-2">
            <div className="flex flex-row items-center gap-1">
              <Image
                width={20}
                height={20}
                src="/Sim-Installation/settings.png"
                alt=""
              />
              <p>ACTIVATION CODE</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <p>OcakkzfY8D</p>
              <Image
                onClick={() => alert("copy")}
                className="cursor-pointer"
                width={15}
                height={15}
                src="/Sim-Installation/copy.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 pb-4">
        {/* Step 1 */}
        <div className="md:w-1/2">
          <h2 className="text-[#F15A24] w-fit bg-[#EB662B1A] p-1 rounded-[7px] text-sm mb-4">
            Step 1
          </h2>
          <ol className="list-decimal list-inside text-[13px] font-semibold text-gray-800 space-y-1">
            <li>
              Go to Settings &gt; Cellular/Mobile &gt; Add Cellular/ Mobile
              Plan.
            </li>
            <li>Tap on "Enter Details Manually".</li>
            <li>Enter your SM-DP+ Address and Activation Code.</li>
            <li>Tap on "Add Cellular Plan".</li>
            <li>Label the eSIM.</li>
            <li>Choose preferred default line to call or send messages.</li>
            <li>
              Choose the preferred line to use with iMessage, FaceTime, and
              Apple ID.
            </li>
            <li>
              Choose the eSIM plan as your default line for Cellular Data and do
              not turn on "Allow Cellular Data Switching" to prevent charges on
              your other line.
            </li>
            <li>
              Your eSIM has been installed successfully, please scroll down to
              see the settings for accessing data.
            </li>
          </ol>
        </div>

        {/* Step 2 (Optional) */}
        <div className="md:w-1/2">
          <h2 className="text-[#F15A24] text-sm mb-4 w-fit p-1 bg-[#EB662B1A] rounded-[7px]">
            Step 2 <span className="text-[12px]">(Optional)</span>
          </h2>
          <p className="text-sm mb-4 text-gray-800 font-bold">
            Only if your eSIM is not connecting to the network tower.
          </p>
          <ol className="list-decimal list-inside text-[13px] font-semibold text-gray-800 space-y-1">
            <li>Select your eSIM under "Cellular Plans".</li>
            <li>Ensure that "Turn On This Line" is toggled on.</li>
            <li>Go to "Network Selection" and select the supported network.</li>
            <li>
              Go to "Cellular Data Network" and update the "APN" field under
              "CELLULAR DATA". The remaining fields should be left blank.
            </li>
            <li>Turn on the Data Roaming.</li>
            <li>Need help? chat with us.</li>
          </ol>
        </div>
      </div>

      {/* SIM help */}
      <div className="py-4 space-y-4 md:block flex justify-center flex-col items-center md:border-0 border-1 my-4 rounded-[29px]">
        <div className="bg-[#EB662B1A] md:w-[400px] w-[300px] text-[#F15A24] p-2 rounded-md flex items-center gap-2 text-sm">
          <Image
            width={20}
            height={20}
            src="/Sim-Installation/info.png"
            alt=""
          />
          <span>Incase eSIM doesn't work please check:</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-row justify-between items-center bg-[#EB662B1A] h-16 p-4 rounded-sm relative md:w-[350px] w-[300px]">
            <div>
              <div className="text-[#F15A24] font-medium ">APN</div>
              <div className="text-black font-semibold text-sm">
                Global Data
              </div>
            </div>
            <Image
              width={20}
              height={20}
              src="/Sim-Installation/arrow-right-left.png"
              alt=""
            />
          </div>

          <div className="flex flex-row justify-between items-center md:w-[350px] w-[300px] bg-[#EB662B1A] h-16 p-4 rounded-sm relative">
            <div>
              <div className="text-[#F15A24] font-medium mb-1">APN</div>
              <div className="text-black font-semibold text-sm">
                Global Data
              </div>
            </div>
            <Image
              width={20}
              height={20}
              src="/Sim-Installation/badge-info.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manual;
