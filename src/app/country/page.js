import CheckOut from "@/Components/CheckOut/CheckOut";
import Section1 from "@/Components/Country/Section1";
import Section2 from "@/Components/Country/Section2";
import WorkingOfSim from "@/Components/Country/WorkingOfSim";
import CustomerReviews from "@/Components/Customer-Reviews/CustomerReviews";
import Banner from "@/Components/GlobalUi/DownloadBanner/Banner";
import Hero from "@/Components/Hero/Hero";
import Faq from "@/Components/Home/FAQSection/Faq";
import React from "react";

function page() {
  return (
    <div>
      <Hero
        para={
          "Travel Smart with Affordable eSIM Data Plans and High Speed Internet. Our eSIMs Offer Coverage in Nearly Every Corner of the World!"
        }
        heading={"sTAY connected in Netherlands "}
      />
      <div className="md:mx-14 mx-4 my-10">
        <Section1 />
        <Section2 />
        <WorkingOfSim country={"Netherlands"} />
        <CustomerReviews />
      </div>
      <Banner />
      <div className="bg-[#EB662B0F]  px-14 flex flex-col justify-center my-10">
        <Faq />
      </div>
    </div>
  );
}

export default page;
