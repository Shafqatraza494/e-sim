import CheckOut from "@/Components/CheckOut/CheckOut";
import Section1 from "@/Components/Country/Section1";
import Section2 from "@/Components/Country/Section2";
import Section3 from "@/Components/Country/Section3";
import CustomerReviews from "@/Components/Customer Reviews/CustomerReviews";
import Banner from "@/Components/GlobalUi/DownloadBanner/Banner";
import Hero from "@/Components/Hero/Hero";
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
        <Section3 />
      <CustomerReviews />
      </div>
      <Banner />
    </div>
  );
}

export default page;
