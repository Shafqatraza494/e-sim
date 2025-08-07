import Hero from "@/Components/Hero/Hero";
import Country from "@/Components/Home/Country/Country";
import Faq from "@/Components/Home/FAQSection/Faq";
import React from "react";

function page() {
  return (
    <>
      <Hero
        heading={"eSIMs for Easy Travel Connectivity"}
        para={"eSIM - Fast and Affordable mode of Connectivity"}
      />
      <div className="md:mx-14 mx-0 mb-10">
        <Country />
      </div>
      <div className="bg-[#EB662B0F]  px-14 flex flex-col justify-center my-10">
        <Faq />
      </div>
    </>
  );
}

export default page;
