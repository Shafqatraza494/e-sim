import Image from "next/image";
import React from "react";

const Modal = () => {
  return (
    <div className="w-[800px]">
      {/* Header */}
      <div className="flex flex-row gap-3">
        <Image
          height={36}
          width={36}
          src="/image 29.svg"
          alt="Netherlands flag"
        />
        <div className="flex flex-row justify-between w-full">
          <h1 className="lato-text font-medium text-[22px] text-[#000000]">
            Netherlands
          </h1>
          <div className="flex flex-row justify-between w-[60%] items-center">
            <h1 className="lato-text font-medium text-[24px] text-[#000000]">
              Supported Countries & Network
            </h1>
            <Image height={24} width={24} src="/x.svg" alt="Close" />
          </div>
        </div>
      </div>

      {/* Info Cards + Network */}
      <div className="flex flex-row justify-between mt-8">
        {/* Left Side Cards */}
        <div className="flex flex-col gap-10">
          {/* Data */}
          <div className="flex flex-row justify-between items-center px-5 w-[295px] h-[46px] rounded-[9px] border border-[#E1E1E1] bg-[#FBFBFB]">
            <div className="flex flex-row gap-3">
              <Image
                height={20}
                width={18}
                src="/modal-vector.svg"
                alt="Data icon"
              />
              <h1 className="lato-text font-bold text-[16px] text-[#000000]">
                Data
              </h1>
            </div>
            <h1 className="lato-text text-[16px] text-[#000000] font-bold">
              3 GB
            </h1>
          </div>

          {/* Validity */}
          <div className="flex flex-row justify-between items-center px-5 w-[295px] h-[46px] rounded-[9px] border border-[#E1E1E1] bg-[#FBFBFB]">
            <div className="flex flex-row gap-3">
              <Image
                height={24}
                width={24}
                src="/calendar-model.svg"
                alt="Calendar icon"
              />
              <h1 className="lato-text font-bold text-[16px] text-[#000000]">
                Validity
              </h1>
            </div>
            <h1 className="lato-text text-[16px] text-[#000000] font-bold">
              30 Days
            </h1>
          </div>

          {/* Throttle */}
          <div className="flex flex-row justify-between items-center px-5 w-[295px] h-[46px] rounded-[9px] border border-[#E1E1E1] bg-[#FBFBFB]">
            <div className="flex flex-row gap-3">
              <Image
                height={20}
                width={20}
                src="/vector-model.svg"
                alt="Speed icon"
              />
              <h1 className="lato-text font-bold text-[16px] text-[#000000]">
                Throttle/Speed Limit
              </h1>
            </div>
            <h1 className="lato-text text-[16px] text-[#000000] font-bold">
              No
            </h1>
          </div>

          {/* Tethering */}
          <div className="flex flex-row justify-between items-center px-5 w-[295px] h-[46px] rounded-[9px] border border-[#E1E1E1] bg-[#FBFBFB]">
            <div className="flex flex-row gap-3">
              <Image
                height={20}
                width={20}
                src="/vector-model4.svg"
                alt="Hotspot icon"
              />
              <h1 className="lato-text font-bold text-[16px] text-[#000000]">
                Tethering/Hotspot
              </h1>
            </div>
            <h1 className="lato-text text-[16px] text-[#000000] font-bold">
              Yes
            </h1>
          </div>
        </div>

        {/* Right Side Network Info */}
        <div className="flex flex-row gap-3 w-[485px] h-[300px] rounded-[9px] border border-[#E1E1E1] bg-[#FBFBFB] p-3 overflow-y-auto overflow-x-hidden">
          <div className="h-[1000px] flex flex-row justify-between  w-full">
            <h1 className="lato-text font-bold text-[18px] mt-1 text-[#000000]">
              Canada
            </h1>
            <div className="flex flex-row  gap-3 px-4 mt-2 w-fit h-[22px] rounded-[6px] border border-[#E1E1E1] bg-[#FBFBFB] items-center">
              <p className="lato-text font-normal text-[14px] text-[#000000]">
                Rogers Communications Canada Inc.
              </p>
              <span className="flex items-center justify-center px-2 lato-text font-normal text-[14px] text-[#FFFFFF] bg-[#EB662B] rounded-[4px] h-[17px]">
                2G,3G,4G,5G
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="w-[800px] rounded-[9px] border border-[#BDBDBD] bg-[#FFFFFF] mt-4 p-3">
        <ul className="lato-text  text-[16px] text-[#000000] list-disc list-inside font-bold">
          <li>eSim will be activated when it is purchased</li>
          <li>Assigned number will be a +44 UK Number.</li>
          <li>
            Any usage outside of these countries may use up all of the bundle
            allowances.
          </li>
          <li>
            Calls are allowed locally within one country but not across
            countries.
          </li>
          <li>
            Calling across countries will consume the entire bundle allowance.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
