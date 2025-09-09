"use client";

import CheckOut from "@/Components/CheckOut/CheckOut";
import Hero from "@/Components/CheckOut/Hero";
import React from "react";

export default function page() {
  return (
    <>
      <Hero heading={"CheckOUt"} />
      <div className="md:mx-14 mx-4 my-10">
        <CheckOut />
      </div>
    </>
  );
}
