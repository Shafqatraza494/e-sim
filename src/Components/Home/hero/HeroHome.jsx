"use client";

import { Search, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useGuest } from "@/Context/GuestContext";

// ✅ import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { LoaderLink } from "@/Context/LoaderLink";

function HeroHome() {
  const { countries } = useGuest();

  return (
    <div className="relative bg-[url('/Home/bg-hero.jpg')] md:rounded-[20px] bg-cover bg-center h-[765px] w-full flex items-center md:justify-center flex-col gap-20 pt-10">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-peach-500 to-peach-0 mix-blend-hard-light z-0"></div>

      {/* Content */}
      <div className="hidden lg:block absolute top-5 right-45">
        <Image height={68} width={69} src="/Home/shapes.png" alt="" />
      </div>
      <div className="text-center px-15">
        <h1 className="text-white bayon-text md:text-[80px] text-[48px] mb-4">
          WE CONNECT YOU GLOBALLY
        </h1>
        <p className="text-[#000000] md:text-[22px] lato-text text-[15px] mb-6">
          Whether you're jet-setting across Europe, backpacking through
          Southeast Asia, or navigating a business trip to the USA, we offer the
          best eSIM for international travel with instant setup, secure access,
          and reliable data in 200+ destinations.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center items-center">
          <div className="relative md:w-full max-w-md flex flex-row gap-2 justify-center">
            <div className="absolute inset-y-0 md:left-8 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-black-400" />
            </div>
            <input
              type="text"
              className="md:w-[330px] pl-9 pr-10 py-2 rounded-full lato-text font-[400] text-[#000000] border border-black bg-[#FFFFFF] text-sm outline-none"
              placeholder="Find data plans in 200+ countries"
            />
            <button className="border-1 flex items-center pr-3 bg-gray-200 rounded-full px-2">
              <ChevronRight className="h-4 w-4 text-black" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full px-5">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView="auto"
          loop={true}
          freeMode={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
        >
          {countries?.data.map((country, index) => (
            <SwiperSlide key={index} style={{ width: "300px" }}>
              <div className="h-[300px] w-[300px] border-[2px] rounded-[20px] shrink-0 bg-white">
                <div
                  className="bg-center bg-cover w-[296px] h-[200px] rounded-t-[18px]"
                  style={{ backgroundImage: `url(${country.banner})` }}
                ></div>
                <div className="flex flex-row justify-between items-center mx-5">
                  <div className="flex flex-col justify-center h-[90px]">
                    <h1 className="bayon-text font-[400] text-[26px]">
                      {country.name}
                    </h1>
                    <p className="lato-text font-[400] text-[22px]">
                      Starts at: {country.starts_at}
                    </p>
                  </div>
                  <LoaderLink href={`/packages/${country.slug}`}>
                    <Image width={53} height={53} src="/Home/Arow.png" alt="" />
                  </LoaderLink>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HeroHome;
