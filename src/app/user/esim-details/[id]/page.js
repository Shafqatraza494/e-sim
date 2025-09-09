"use client";

import SimDetailsCard from "@/Components/GlobalUi/Cards/SimDetailsCard";
import UsageDetailsCard from "@/Components/GlobalUi/Cards/UsageDetailsCard";
import Hero from "@/Components/Hero/Hero";
import SimInstallation from "@/Components/Sim-Inatallation/SimInstallation";
import React from "react";
import { useParams } from "next/navigation";

function Page() {
  const { id } = useParams(); 

  return (
    <div className="lg:bg-[#EB662B0F]">
      <Hero
        heading={"Manage your sim here."}
        para={
          "Our team is here to assist you promptly through any of these channels."
        }
        btn1={"Buy eSIM"}
        btn2={"My eSIM"}
      />

      <div className="flex lg:flex-row flex-col lg:mx-14 lg:py-20 py-5 px-5 gap-4 justify-center items-center">
        {/* Pass the id prop to your cards */}
        <SimDetailsCard simId={id} />
        <UsageDetailsCard simId={id} />
      </div>

      <SimInstallation />
    </div>
  );
}

export default Page;
