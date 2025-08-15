import Hero from "@/Components/Hero/Hero";
import Faq from "@/Components/Home/FAQSection/Faq";
import Grid from "@/Components/Home/Grid/Grid";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <Hero
        heading={"About us"}
        para={
          "We're not just eSIM sellers; we're your partners in connectivity. Discover why we're the top choice for seamless mobile experiences."
        }
      />
      <div className="md:mx-14 mx-4 mb-14">
        <div className="">
          <h1 className="bayon-text md:text-[64px] text-[24px] md:text-left text-center">
            How eSim white label manage{" "}
          </h1>
          <p className="lato-text md:text-[22px] text-[16px] md:text-left text-center md:px-0 px-6 ">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>
        </div>
        <div className="md:mx-32 my-10 flex md:flex-row flex-col justify-between items-center md:gap-20 ">
          <div className=" md:w-[450px] w-[360px] h-[673.11px]  relative bg-[url('/About/IMG.png')] bg-cover bg-center">
            <div className="absolute md:top-[60%] bottom-15 left-0 border-1 h-[91px] bg-[#000000] rounded-[10px] md:w-[351px] w-full flex flex-row items-center px-5 gap-3">
              <Image
                height={39}
                width={39}
                src="/About/about-bell.png"
                alt=""
              />
              <div className="text-white flex flex-col ">
                <p className="text-[#ffffffa2]">Global</p>
                <h1>eSIM Brand</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-18 gap-5">
            <div className="flex flex-row items-center gap-3">
              <Image width={43} height={43} src="/About/icon.png" alt="" />
              <div className="flex flex-col gap-1">
                <h1 className="bayon-text text-[30px]">2020.08</h1>
                <p className="lato-text text-[17px]">
                  eSIM Card App was launched for iOS Devices
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <Image width={43} height={43} src="/About/icon.png" alt="" />
              <div className="flex flex-col gap-1">
                <h1 className="bayon-text text-[30px]">2020.08</h1>
                <p className="lato-text text-[17px]">
                  eSIM Card App was launched for iOS Devices
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <Image width={43} height={43} src="/About/icon.png" alt="" />
              <div className="flex flex-col gap-1">
                <h1 className="bayon-text text-[30px]">2020.08</h1>
                <p className="lato-text text-[17px]">
                  eSIM Card App was launched for iOS Devices
                </p>
              </div>
            </div>
          </div>
        </div>
        <Grid />
      </div>
      <div className="bg-[#EB662B0F]  px-14 flex flex-col justify-center my-10">
        <Faq />
      </div>{" "}
    </div>
  );
}

export default page;
