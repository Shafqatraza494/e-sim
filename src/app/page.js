import Header from "@/Components/Header/Header";
import React from "react";
import "./globals.css";
import Footer from "@/Components/Footer/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Hero from "@/Components/Hero/Hero";
import SimDetailsCard from "@/Components/GlobalUi/Cards/SimDetailsCard";
import UsageDetailsCard from "@/Components/GlobalUi/Cards/UsageDetailsCard";

function page() {
  return (
    <>
      <Hero
        para={
          " Our team is here to assist you promptly through any of these channels."
        }
        heading={"Manage your sim here."}
        btn1={"Buy eSIM"}
        btn2={"My eSIM"}
      />
      <div className="flex flex-row px-5">
        <SimDetailsCard />
        <UsageDetailsCard />
      </div>
    </>
  );
}

export default page;
