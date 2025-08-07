"use client";

import Image from "next/image";
import React, { useState } from "react";
const Country = () => {
  const [activeTab, setActiveTab] = useState("Data");

  const countryCards = [
    {
      country: "Austria",
      image: "/Home/flags/austria.png",
      tagline: "Starts at $3.3",
    },
    {
      country: "Canada",
      image: "/Home/flags/Canada.png",
      tagline: "Starts at $3.3",
    },
    {
      country: "China",
      image: "/Home/flags/china.png",
      tagline: "Starts at $3.3",
    },
    {
      country: "Egypt",
      image: "/Home/flags/egypt.png",
      tagline: "Starts at $3.3",
    },
    {
      country: "France",
      image: "/Home/flags/france.png",
      tagline: "Starts at $3.3",
    },
    {
      country: "Germany",
      image: "/Home/flags/germany.png",
      tagline: "Starts at $3.3",
    },
    {
      country: "Greece",
      image: "/Home/flags/greece.png",
      tagline: "Starts at $3.3",
    },

    {
      country: "India",
      image: "/Home/flags/india.png",
      tagline: "Starts at $3.3",
    },
    {
      country: "Israel",
      image: "/Home/flags/israel.png",
      tagline: "Starts at $3.3",
    },
    {
      country: "Italy",
      image: "/Home/flags/italy.png",
      tagline: "Starts at $3.3",
    },
    {
      country: "Mexico",
      image: "/Home/flags/mexico.png",
      tagline: "Starts at $3.3",
    },
    {
      country: "Qatar",
      image: "/Home/flags/qatar.png",
      tagline: "Starts at $3.3",
    },
    {
      country: "Russia",
      image: "/Home/flags/russia.png",
      tagline: "Starts at $3.3",
    },
    {
      country: "Saudi Arabia",
      image: "/Home/flags/saudi-arabia.png",
      tagline: "Starts at $3.3",
    },
    {
      country: "Spain",
      image: "/Home/flags/spain.png",
      tagline: "Starts at $3.3",
    },
    {
      country: "Thailand",
      image: "/Home/flags/thailand.png",
      tagline: "Starts at $3.3",
    },
    {
      country: "Turkey",
      image: "/Home/flags/turkey.png",
      tagline: "Starts at $3.3",
    },
    { country: "UAE", image: "/Home/flags/uae.png", tagline: "Starts at $3.3" },
  ];

  return (
    <>
      <div className="mt-20 flex flex-col md:items-start items-center text-center md:text-left">
        <h1 className=" md:text-[50px] text-[24px] bayon-text md:font-[600] ">
          WHICH COUNTRY IS CALLING YOU?
        </h1>
        <p className=" lato-text md:text-[22px] text-[15px]  text-[#000000]">
          Whether you need a prepaid eSIM for a weekend getaway or a global eSIM
          for multiple borders
        </p>
      </div>
      <ul className="hidden md:flex flex-row items-center   mt-10 text-[22px] align-middle">
        {["Local eSIMs", "Regional eSIMs", "Global eSIMs"].map((tab, index) => (
          <li
            key={index}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer border-b-3   ${
              activeTab === tab
                ? "  w-[200px] border-[#EB662B] text-[#EB662B] font-[700]"
                : " w-[200px] text-black font-[400]"
            }`}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className="mt-20 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center gap-5">
        {countryCards.map((country, index) => (
          <div
            key={index}
            className="border-1 h-[104px] w-[260px] rounded-[10px] p-3 flex flex-row justify-between items-end"
          >
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <Image
                  className=""
                  width={40}
                  height={40}
                  src={country.image}
                  alt=""
                />
                <h3 className="bayon-text text-[26px]">{country.country}</h3>
              </div>
              <p className="lato-text">{country.tagline}</p>
            </div>
            <Image width={43} height={43} src="/Home/Arow.png" alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Country;
