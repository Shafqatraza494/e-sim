"use client";

import React from "react";
import ButtonFill from "../GlobalUi/ui/Buttons/ButtonFill";
import ButtonOutline from "../GlobalUi/ui/Buttons/ButtonOutline";
import DummyCartButton from "../DummyCartButton";

function Hero({ para, heading, btn1, btn2, onBtn1Click, onBtn2Click }) {
  return (
    <div className="flex flex-col justify-center items-center mb-6 text-white lg:mx-4 lg:h-[297px] opacity-100 lg:rounded-[20px] bg-gradient-to-b from-[#FF9B65] to-[rgba(255,155,101,0)]">
      <div className="flex lg:flex-col flex-col-reverse justify-center items-center text-center mb-5 md:w-[100%] w-[90%] py-10">
        <p className="lato-text font-normal lg:text-[20px] text-2xl ">{para}</p>
        <h1 className="bayon-text lg:text-[80px] text-[48px] text-center align-middle leading-none py-8">
          {heading}
        </h1>
      </div>
      <div className="flex flex-row gap-3">
        {btn1 && <ButtonFill text={btn1} onClick={onBtn1Click} />}
        {btn2 && <ButtonOutline text={btn2} onClick={onBtn2Click} />}
      </div>
    </div>
  );
}

export default Hero;
