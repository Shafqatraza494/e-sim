import Image from "next/image";
import React from "react";
import Slider from "./Slider";

function EsimSection() {
  return (
    <div className="flex flex-col lg:gap-[99px] gap-5 my-10  lg:items-start items-center">
      <h1 className="bayon-text md:text-[64px] text-[24px] md:text-left text-center">
        How Does the eSIM Work?
      </h1>
      <div className="flex lg:flex-row flex-col lg:gap-[97px] gap-6 justify-center">
        <div className="lg:w-[530px] md:w-full  w-[360px]">
          <Slider />
        </div>
        <div className="w-[360px] lg:w-[530px] md:w-full md:h-[720px] h-[312px] border-1 rounded-[50px]  md:bg-[url('/Home/Mockup.png')] bg-[url('/Home/mobiles.png')] md:bg-[length:270%] md:bg-[position:50%_33%] bg-[length:600%] bg-[position:97%_15%] bg-no-repeat"></div>
      </div>
    </div>
  );
}

export default EsimSection;
