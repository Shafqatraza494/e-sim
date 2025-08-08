import Image from "next/image";
import React from "react";

function Section2() {
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
  ];
  return (
    <div>
      <h1 className="bayon-text md:text-[64px] text-[24px] md:text-left text-center md:mt-0 mt-4">
        Explore Data eSIMs You'll Enjoy
      </h1>
      <div className=" my-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center gap-5">
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
    </div>
  );
}

export default Section2;
