"use client";

import ShowCountryPkg from "@/Components/Country/ShowCountryPkg";
import RandomCountries from "@/Components/Country/RandomCountries";
import WorkingOfSim from "@/Components/Country/WorkingOfSim";
import CustomerReviews from "@/Components/Customer-Reviews/CustomerReviews";
import Banner from "@/Components/GlobalUi/DownloadBanner/Banner";
import Hero from "@/Components/Hero/Hero";
import Faq from "@/Components/Home/FAQSection/Faq";
import React from "react";
import ShowRegionPkg from "@/Components/Country/ShowRegionPkg";
import { useGuest } from "@/Context/GuestContext";

function Page({ params }) {
  const { slug } = React.use(params);
  const { useRegionBySlug } = useGuest();

  const { data, isLoading, isError } = useRegionBySlug(slug);

  const isRegion = data?.region;

  return (
    <div>
      <Hero
        para="Travel Smart with Affordable eSIM Data Plans and High Speed Internet. Our eSIMs Offer Coverage in Nearly Every Corner of the World!"
        heading={`Stay connected in ${slug}`}
      />

      <div className="md:mx-14 mx-4 my-10">
        {isRegion ? (
          <ShowRegionPkg slug={slug} />
        ) : (
          <ShowCountryPkg slug={slug} />
        )}

        <RandomCountries slug={slug} />
        <WorkingOfSim slug={slug} />
        <CustomerReviews />
      </div>

      <Banner />

      <div className="bg-[#EB662B0F] px-14 flex flex-col justify-center my-10">
        <Faq />
      </div>
    </div>
  );
}

export default Page;
