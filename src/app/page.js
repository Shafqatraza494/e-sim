import Header from "@/Components/Header/Header";
import React from "react";
import "./globals.css";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero";
import SimDetailsCard from "@/Components/GlobalUi/Cards/SimDetailsCard";
import UsageDetailsCard from "@/Components/GlobalUi/Cards/UsageDetailsCard";
import EsimSection from "@/Components/Home/EsimSection/EsimSection";
import Grid from "@/Components/Home/Section3/Grid";
import HeroHome from "@/Components/Home/hero/HeroHome";
import Country from "@/Components/Home/Country/Country";
import Banner from "@/Components/GlobalUi/DownloadBanner/Banner";

function page() {
  return (
    <>
      <div className="md:mx-4 mx-0">
        <HeroHome />
      </div>
      <div className="md:mx-14 mx-8 mb-10">
        <Country />
        <EsimSection />
        <Grid />
      </div>
      <div className="my-20">
        <Banner />
      </div>
    </>
  );
}

export default page;
