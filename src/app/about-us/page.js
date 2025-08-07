import Hero from "@/Components/Hero/Hero";
import React from "react";

function page() {
  return (
    <div>
      <Hero
        heading={"About us"}
        para={
          "We're not just eSIM sellers; we're your partners in connectivity. Discover why we're the top choice for seamless mobile experiences."
        }
      />
      <div className="md:mx-14 mx-4">
        <div className="">
          <h1 className="bayon-text md:text-[64px] text-[24px]">
            How eSim white label manage{" "}
          </h1>
          <p className="lato-text text-[22px]">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>
        </div>
        <div>
          <div className="bg-[url('/About/IMG.png')] bg-cover"></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default page;
