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

function page() {
  return (
    <>
      <div className="mx-4">
        <HeroHome />
        <Country />
      </div>
      <div className="md:mx-14 mx-8">
        <EsimSection />
        <Grid />
      </div>
    </>
  );
}

export default page;
