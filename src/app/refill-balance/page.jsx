import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import ButtonFill from "@/Components/GlobalUi/ui/Buttons/ButtonFill";
import Banner from "@/Components/GlobalUi/DownloadBanner/Banner";

function page() {
  return (
    <div>
      {/* //////////////////////////////////////hero/////////////////////////////////////// */}
      <div className="flex flex-col justify-center items-center mb-6 text-white lg:mx-4 lg:h-[297px] opacity-100 lg:rounded-[20px] bg-gradient-to-b from-[#FF9B65] to-[rgba(255,155,101,0)]">
        <div className="flex flex-col  justify-center items-center text-center my-10 w-[80%]">
          <div className="lato-text font-normal text-black p-2 bg-[#FFFFFF80] border-1 border-black rounded-[20px]">
            Current Balance : <span className="font-bold">$2.38</span>
          </div>
          <h1 className="bayon-text lg:text-[100px] text-[40px] text-center align-middle pt-4">
            Refill
          </h1>
        </div>
        <div className="flex flex-row gap-3">
          <input
            className="lato-text font-normal text-black p-2 bg-[#FFFFFF] border-1 border-black rounded-[20px] md:w-[250px] text-left"
            type="number"
            placeholder="Enter Amount to Refill"
          />
          <button className="w-[183px] p-2 bg-[#EB662B] rounded-[20px] border-1 border-black flex flex-row items-center justify-center">
            Add Amount{" "}
            <ChevronRightIcon className="w-[20px] h-[20px] text-white " />
          </button>
        </div>
      </div>

      {/* ////////////////////////////////body/////////////////////////////////////////// */}

      <div className="lg:mx-14 flex md:flex-row flex-col md:justify-between md:text-left text-center items-center md:mt-10">
        <div>
          <h1 className="md:text-[64px] text-[24px] bayon-text">
            Contact us for your Assistance.
          </h1>
          <p className="md:text-[22px] text-[16px] lato-text md:py-0 py-6">
            Reach us out.
          </p>
        </div>
        <div className="text-white">
          <ButtonFill text={"Contact Us"} />
        </div>
      </div>
      <div className="my-20">
        <Banner />
      </div>
    </div>
  );
}

export default page;
