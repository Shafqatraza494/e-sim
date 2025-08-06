import Header from "@/Components/Header/Header";
import React from "react";
import "./globals.css";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero";
import SimDetailsCard from "@/Components/GlobalUi/Cards/SimDetailsCard";
import UsageDetailsCard from "@/Components/GlobalUi/Cards/UsageDetailsCard";
import EsimSection from "@/Components/Home/EsimSection/EsimSection";
import Grid from "@/Components/Home/Section3/Grid";

function page() {
  return (
    <>
      <div className="md:mx-14 mx-8">
        <EsimSection />
        <Grid />
      </div>
    </>
  );
}

export default page;
