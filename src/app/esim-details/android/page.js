import SimDetailsCard from "@/Components/GlobalUi/Cards/SimDetailsCard";
import Hero from "@/Components/Hero/Hero";
import SimInstallation from "@/Components/Sim-Inatallation/SimInstallation";
import React from "react";

function page() {
  return (
    <div>
      <Hero
        heading={"Manage your sim here."}
        para={
          "Our team is here to assist you promptly through any of these channels."
        }
        btn1={"Buy eSIM"}
        btn2={"My eSIM"}
      />
      <div className="flex flex-row bg-[#EB662B0F] p-20 ">
        <SimDetailsCard />
      </div>
      <SimInstallation />
    </div>
  );
}

export default page;
