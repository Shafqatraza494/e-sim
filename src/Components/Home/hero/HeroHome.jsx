import { Search } from "lucide-react";
import { ChevronRight } from "lucide-react"; // For right arrow
import Image from "next/image";
import React from "react";
import styles from "./Carousal.module.css";

function HeroHome() {
  const countryData = [
    { image: "/Home/japan.png", heading: "Japan", tagline: "Start at $3.3" },
    { image: "/Home/turkey.png", heading: "Turkey", tagline: "Start at $388" },
    { image: "/Home/Russia.png", heading: "Russia", tagline: "Start at $388" },
    {
      image: "/Home/United-State.png",
      heading: "United-State",
      tagline: "Start at $388",
    },
    { image: "/Home/japan.png", heading: "Japan", tagline: "Start at $3.3" },
    { image: "/Home/Russia.png", heading: "Russia", tagline: "Start at $388" },
    { image: "/Home/turkey.png", heading: "Turkey", tagline: "Start at $388" },
    {
      image: "/Home/United-State.png",
      heading: "United-State",
      tagline: "Start at $388",
    },
  ];
  const allCountries = [...countryData, ...countryData];
  return (
    <>
      <div className="relative bg-[url('/image5.png')] rounded-[20px] bg-cover bg-center h-[765px] w-full flex items-center justify-center flex-col gap-20  pb-0 pt-46">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-peach-500 to-peach-0 mix-blend-hard-light z-0"></div>

        {/* Content */}
        <div className="absolute top-30 right-70">
          <Image height={67.8} width={69.38} src="/Home/shapes.png" alt="" />
        </div>
        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="text-white bayon-text text-[100px] md:text-5xl  lg:text-6xl font-[400] mb-4">
            WE CONNECT YOU GLOBALLY
          </h1>
          <p className="text-[#000000] text-[22px] lato-text md:text-lg font-[400] mb-6 w-[1030px]">
            Whether you're jet-setting across Europe, backpacking through
            Southeast Asia, or navigating a business trip to the USA, we offer
            the best eSIM for international travel with instant setup, secure
            access, and reliable data in 200+ destinations.
          </p>

          {/* Search Bar with Icons Inside */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Left Icon */}
              <div className="absolute inset-y-0 left-16 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-black-400" />
              </div>

              {/* Input */}
              <input
                type="text"
                className="w-[330px] pl-9 pr-10 py-2 rounded-full lato-text font-[400]text-[#000000]  border border-black bg-[#FFFFFF] text-sm outline-none"
                placeholder="Find data plans in 200+ countries"
              />

              {/* Right Button Icon */}
              <button className="absolute inset-y-0 right-4 border-1 flex items-center pr-3 bg-gray-200 rounded-full px-2">
                <ChevronRight className="h-4 w-4 text-black" />
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden whitespace-nowrap w-full">
          <div className={`flex gap-10 ${styles["scroll-track"]}`}>
            {allCountries.map((country, index) => (
              <div
                key={index}
                className="h-[300px] w-[300px] border-[2px] rounded-[20px] shrink-0 bg-white"
              >
                <div
                  className="bg-center bg-cover w-[296px] h-[200px] rounded-t-[18px]"
                  style={{ backgroundImage: `url(${country.image})` }}
                ></div>
                <div className="flex flex-row justify-between items-center mx-5">
                  <div className="flex flex-col justify-center h-[90px]">
                    <h1 className="bayon-text font-[400] text-[26.32px]">
                      {country.heading}
                    </h1>
                    <p className="lato-text font-[400] text-[22px]">
                      {country.tagline}
                    </p>
                  </div>
                  <Image width={53} height={53} src="/Home/Arow.png" alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroHome;
