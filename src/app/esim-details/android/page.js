import SimDetailsCard from "@/Components/GlobalUi/Cards/SimDetailsCard";
import UsageDetailsCard from "@/Components/GlobalUi/Cards/UsageDetailsCard";
import Hero from "@/Components/Hero/Hero";
import SimInstallation from "@/Components/Sim-Inatallation/SimInstallation";
import React from "react";

function page() {
  return (
    <div className="bg-[#EB662B0F]">
      <Hero
        heading={"Manage your sim here."}
        para={
          "Our team is here to assist you promptly through any of these channels."
        }
        btn1={"Buy eSIM"}
        btn2={"My eSIM"}
      />
      <div className="flex lg:flex-row flex-col p-20 gap-4">
        <SimDetailsCard />
        <UsageDetailsCard />
      </div>

      <SimInstallation />
    </div>
  );
}

export default page;
