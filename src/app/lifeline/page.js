import Hero from "@/Components/Hero/Hero";
import Grid from "@/Components/Home/Grid/Grid";
import React from "react";

function page() {
  return (
    <div>
      <Hero
        para={"Lifeline Program for low-income Consumers"}
        heading={"Lifeline Program"}
      />
      <div className="md:mx-14 mx-4 my-10">
        <div>
          <h1 className="bayon-text md:text-[64px] text-[24px]  ">
            Overcoming the digital divide & opening doors to opportunity
          </h1>
          <p className="lato-text md:text-[22px] text-[16px]">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>{" "}
        </div>
        <div className="my-12 flex flex-col gap-5">
          <h1 className=" lato-text text-[22px]">
            WHAT does e SIM card provides?{" "}
          </h1>
          <div className="lato-text md:text-[18px] text-[16px] text-[#797979] uppercase tracking-tight leading-loose [word-spacing:2px]">
            <p>
              Lifeline is an FCC lifeline program that helps make communications
              services more affordable for low-income consumers. Lifeline
              provides subscribers a discount on qualifying monthly telephone
              service, broadband Internet service, or bundled voice-broadband
              packages purchased from participating wireline or wireless
              providers.
            </p>
            <p>
              Since 1985, the Lifeline program has provided a discount on phone
              service for qualifying low-income consumers to ensure that all
              Americans have the opportunities and security that phone service
              brings, including connecting to jobs, family, and emergency
              services. The Lifeline program is available to eligible low-income
              consumers in every state, territory, commonwealth, and Tribal
              land. Lifeline provides up to a $9.25 monthly discount on service
              for eligible low-income subscribers and up to $34.25 per month for
              those on Tribal lands. Subscribers may receive a Lifeline discount
              on either a wireline or a wireless service, but they may not
              simultaneously receive a discount on both services. Lifeline also
              supports broadband Internet service and broadband-voice bundles.
              FCC rules prohibit more than one Lifeline service per household.
            </p>
            <p>
              In the 2016 Lifeline Modernization Order, the Commission included
              broadband as a support service in the Lifeline program. The
              Lifeline Commission also set out minimum service standards for
              Lifeline-supported services to ensure maximum value for the
              universal service dollar. It established a National Eligibility
              Verifier to make independent subscriber eligibility
              determinations. Add a button like after the text this to redirect
              to
            </p>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <button className="bg-[#EB662B] py-3 px-5 rounded-[18px] text-white">
            <a href="#" target="_blank">
              Lifeline on the FCC Website
            </a>
          </button>
        </div>
        <Grid />
      </div>
    </div>
  );
}

export default page;
