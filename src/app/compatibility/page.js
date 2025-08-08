import { ChevronRight, Search } from "lucide-react";
import React from "react";

function page() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center  mb-6 text-white lg:mx-4 lg:h-[297px] opacity-100 lg:rounded-[20px] bg-gradient-to-b from-[#FF9B65] to-[rgba(255,155,101,0)]">
        <div className="flex lg:flex-col flex-col-reverse justify-center items-center text-center mb-5 md:w-[70%] py-10">
          <h1 className="bayon-text lg:text-[80px] text-[48px] text-center align-middle leading-none  py-8">
            esim mobile Compatibility
          </h1>
          <p className="lato-text font-normal text-black lg:text-[20px] text-2xl ">
            Travel Smart with Affordable eSIM Data Plans and High Speed
            Internet. Our eSIMs Offer Coverage in Nearly Every Corner of the
            World!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative md:w-full max-w-md flex flex-row gap-2 justify-center">
            {/* Left Icon */}
            <div className="absolute inset-y-0 md:left-8 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-black-400" />
            </div>

            {/* Input */}
            <input
              type="text"
              className="md:w-[330px] pl-9 pr-10 py-2 rounded-full lato-text font-[400]text-[#000000]  border border-black bg-[#FFFFFF] text-sm outline-none"
              placeholder="Find data plans in 200+ countries"
            />

            {/* Right Button Icon */}
            <button className="  border-1 flex items-center pr-3 bg-gray-200 rounded-full px-2">
              <ChevronRight className="h-4 w-4 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
