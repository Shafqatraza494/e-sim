import MobileModels from "@/Components/Compatibility/MobileModels";
import UsageOfEsim from "@/Components/Compatibility/UsageOfEsim";
import WorkingOfSim from "@/Components/Country/WorkingOfSim";
import CustomerReviews from "@/Components/Customer-Reviews/CustomerReviews";
import Faq from "@/Components/Home/FAQSection/Faq";
import { ChevronRight, Search } from "lucide-react";
import React from "react";

function page() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center  mb-15 text-white lg:mx-4 lg:h-[297px] opacity-100 lg:rounded-[20px] bg-gradient-to-b from-[#FF9B65] to-[rgba(255,155,101,0)]">
        <div className="flex flex-col  justify-center items-center text-center mb-5 md:w-[70%] md:py-10">
          <h1 className="bayon-text lg:text-[80px] text-[48px] text-center align-middle leading-none md:py-8 py-4">
            esim mobile Compatibility
          </h1>
          <p className="lato-text font-normal text-black md:text-[20px] text-[15px] text-2xl md:mx-0 mx-10">
            Travel Smart with Affordable eSIM Data Plans and High Speed
            Internet. Our eSIMs Offer Coverage in Nearly Every Corner of the
            World!
          </p>
        </div>
        {/* Search Bar with Icons Inside */}
        <div className="flex justify-center items-center">
          <div className="relative md:w-full max-w-md flex flex-row gap-2 justify-center">
            {/* Left Icon */}
            <div className="absolute inset-y-0 md:left-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-black" />
            </div>

            {/* Input */}
            <input
              type="text"
              className="md:w-[330px] pl-9 pr-10 py-2 rounded-full lato-text font-[400] text-black border border-black bg-[#FFFFFF] text-sm outline-none"
              placeholder="Find data plans in 200+ countries"
            />

            {/* Right Button Icon */}
            <button className="  border-1 flex items-center pr-3 bg-gray-200 rounded-full px-2">
              <ChevronRight className="h-4 w-4 text-black" />
            </button>
          </div>
        </div>
      </div>
      {/* /////////////////////above hero and down others//////////////////////////// */}
      <div className="md:mx-14 mx-4">
        <MobileModels />
        <UsageOfEsim />
        <WorkingOfSim />
        <CustomerReviews />
      </div>
      <div className="bg-[#EB662B0F]  px-14 flex flex-col justify-center my-10">
        <Faq />
      </div>{" "}
    </div>
  );
}

export default page;
