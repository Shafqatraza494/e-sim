import Image from "next/image";
import React from "react";

function Section3() {
  return (
    <div>
      <div className="my-10">
        <h1 className="bayon-text md:text-[64px] text-[24px] md:text-left text-center">
          How does eSIM Netherlands Work?
        </h1>
        <p className="lato-text md:text-[22px] text-[15px] md:text-left text-center">
          Search for “Netherlands” and Pick your data plan.
        </p>
      </div>
      <div className="flex md:flex-row flex-col md:gap-[60px] gap-5  md:items-start items-center">
        <div className="w-[360px]">
          <div>
            <Image width={360} height={309} src="/Country/BuyData.svg" alt="" />
          </div>
          <div className="bg-[#FBFBFB] py-10 px-4 rounded-b-[12px]">
            <h1 className="lato-text text-[28px]">Buy a data plan</h1>
            <p className="lato-text text-[14px]">
              {" "}
              Search for your destination and pick any data pack
            </p>
          </div>
        </div>
        <div className="w-[360px]">
          <div>
            <Image
              width={360}
              height={309}
              src="/Country/InstalleSim.svg"
              alt=""
            />
          </div>
          <div className="bg-[#FBFBFB] py-10 px-4 rounded-b-[12px]">
            <h1 className="lato-text text-[28px]">Install the eSIM</h1>
            <p className="lato-text text-[14px]">
              {" "}
              Easy installation via QR code
            </p>
          </div>
        </div>
        <div className="w-[360px]">
          <div>
            <Image
              width={360}
              height={309}
              src="/Country/ActivatePlan.svg"
              alt=""
            />
          </div>
          <div className="bg-[#FBFBFB] py-10 px-4 rounded-b-[12px]">
            <h1 className="lato-text text-[28px]">Activate your plan</h1>
            <p className="lato-text text-[14px]">
              {" "}
              Only activate when you are ready to use data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
