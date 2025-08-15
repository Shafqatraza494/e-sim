import WorkingOfSim from "@/Components/Country/WorkingOfSim";
import Banner from "@/Components/GlobalUi/DownloadBanner/Banner";
import Hero from "@/Components/Hero/Hero";
import Faq from "@/Components/Home/FAQSection/Faq";
import React from "react";

function page() {
  return (
    <div>
      <Hero para={"Terms of Service"} heading={"here to assist you"} />
      <div className="md:mx-14 mx-4 my-10">
        <div>
          <h1 className="bayon-text md:text-[64px] text-[24px]  ">
            Tell me more about eSimCard{" "}
          </h1>
          <p className="lato-text md:text-[22px] text-[16px]">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>{" "}
        </div>
        <section className="max-w-4xl  py-8">
          {/* Main Title */}
          <h2
            className="font-extrabold text-2xl md:text-3xl mb-6"
            style={{ color: "#EB662B" }}
          >
            2. REGISTRATION AND ACTIVATION
          </h2>

          {/* Sub Title */}
          <h3
            className="font-semibold text-xl md:text-2xl mb-4"
            style={{ color: "#EB662B" }}
          >
            2.1. Registration Requirements
          </h3>

          {/* Paragraph */}
          <p className="text-gray-700 mb-4">
            Customers must complete a registration process to access and use our
            eSIM services. This process is straightforward and designed to
            ensure a smooth and secure experience. The following are the
            critical requirements for registration:
          </p>

          {/* List */}
          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="font-semibold" style={{ color: "#EB662B" }}>
                Personal Information:
              </span>{" "}
              Customers must provide accurate and current personal information,
              including their first name, last name, billing address, and a
              valid email address. This information is crucial for account
              creation and communication purposes.
            </li>
            <li>
              <span className="font-semibold" style={{ color: "#EB662B" }}>
                Account Creation:
              </span>{" "}
              Customers will create an account on our platform upon providing
              the necessary information. This account will manage purchases,
              track eSIM usage, and access support.
            </li>
            <li>
              <span className="font-semibold" style={{ color: "#EB662B" }}>
                Acceptance of Terms:
              </span>{" "}
              Customers must review and accept our General Terms and Conditions
              during registration. This acceptance is a binding agreement that
              the customer agrees to adhere to our policies and procedures.
            </li>
            <li>
              <span className="font-semibold" style={{ color: "#EB662B" }}>
                Device Compatibility Check:
              </span>{" "}
              Customers are responsible for ensuring their device is compatible
              with eSIM technology. A list of compatible devices is available on
              our website. Proceeding with the registration, the customer
              acknowledges that their device is compatible.
            </li>
          </ul>
        </section>
      </div>
      <div className="bg-[#EB662B0F]  px-14 flex flex-col justify-center my-10">
        <Faq />
      </div>
      <Banner />
      <div className="md:mx-14 mx-4 my-10">
        <WorkingOfSim />
      </div>
    </div>
  );
}

export default page;
