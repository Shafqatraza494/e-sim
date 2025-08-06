"use client";

import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "BUY A DATA PLAN",
    description:
      "Search for your country and choose from flexible eSIM regional, eSIM local, or eSIM global data packs.",
    backgroundImage: "/Home/sliderImage.png",
  },
  {
    id: 2,
    title: "INSTALL YOUR eSIM",
    description:
      "Download the eSIM profile directly to your device using QR code or manual installation process.",
    backgroundImage: "/Home/sliderImage.png",
  },
  {
    id: 3,
    title: "STAY CONNECTED",
    description:
      "Activate your data plan and enjoy seamless connectivity wherever your travels take you.",
    backgroundImage: "/Home/sliderImage.png",
  },
];

export default function Slider() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="w-full md:h-[720px] relative overflow-hidden rounded-[50px]">
      <div className="absolute inset-0">
        <img
          src="/Home/orangeBox.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-color-burn transition-all duration-500 ease-in-out"
          style={{
            backgroundImage: `url('${steps[currentStep].backgroundImage}')`,
          }}
        ></div>
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="pt-8 px-8 flex flex-row gap-2">
          <h2 className="text-black font-medium text-lg tracking-wide drop-shadow-lg">
            Three Steps
          </h2>
          <div className="w-22 h-px bg-black/80 mt-2"></div>
        </div>

        <div className="flex-1 flex flex-col justify-end px-8 pb-10">
          <div className="flex items-center mb-6 align-middle gap-[14px] ">
            <div className="w-12 h-12 rounded-full border-3 border-white flex items-center justify-center">
              <span className="text-white text-xl font-bold">
                {steps[currentStep].id}
              </span>
            </div>
            <h1 className="text-white  bayon-text md:text-[52px] text-[29px] font-black  mb-2 drop-shadow-lg">
              {steps[currentStep].title}
            </h1>
          </div>
          <p className="text-white md:text-[20px] text-[11px] lato-text leading-relaxed font-light drop-shadow-md">
            {steps[currentStep].description}
          </p>
        </div>

        <div className="pb-6 px-8">
          <div className="flex space-x-3 justify-center">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? "bg-[#EB662B] w-[140px] h-[15px]"
                    : "bg-white w-[140px] h-[15px] hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
