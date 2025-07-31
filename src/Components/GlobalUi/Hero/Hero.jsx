import React from "react";
import ButtonFill from "../ui/Buttons/ButtonFill";
import ButtonOutline from "../ui/Buttons/ButtonOutline";

function Hero({ para, heading, btn1, btn2 }) {
  console.log(para, heading, btn1, btn2);

  return (
    <div className="flex flex-col justify-center items-center mb-6 text-white lg:mx-4 lg:h-[297px] opacity-100 lg:rounded-[20px] bg-gradient-to-b from-[#FF9B65] to-[rgba(255,155,101,0)]">
      <div className="flex lg:flex-col flex-col-reverse justify-center items-center text-center mb-5 w-[80%]">
        <p className="lato-text font-normal lg:text-[20px] text-2xl ">{para}</p>
        <h1 className="bayon-text lg:text-[100px] text-[60px] text-center align-middle">
          {heading}
        </h1>
      </div>
      <div className="flex flex-row gap-3">
        {btn1 && <ButtonFill text={btn1} />}
        {btn2 && <ButtonOutline text={btn2} />}
      </div>
    </div>
  );
}

export default Hero;
