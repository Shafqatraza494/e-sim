import Banner from "@/Components/GlobalUi/DownloadBanner/Banner";
import Hero from "@/Components/Hero/Hero";
import React from "react";

function page() {
  return (
    <div className="mb-10">
      <Hero para={"Privacy Policy"} heading={"Privacy Policy"} />
      <div className="md:mx-14 mx-4 my-10">
        <div>
          <h1 className="bayon-text md:text-[64px] text-[24px]  ">
            1. Introduction and General Terms
          </h1>
          <div className="lato-text md:text-[22px] text-[16px]">
            Welcome to eSIMcard.com. We understand the importance of your
            privacy and are committed to protecting your personal information.
            This Privacy Policy serves as our promise to handle your data with
            care, transparency, and respect. At eSIMcard.com, we provide
            innovative digital SIM card solutions to keep you connected globally
            without the hassle of physical SIM cards. Our commitment extends
            beyond offering exceptional services; we are equally dedicated to
            safeguarding your personal information. This Privacy Policy outlines
            how we collect, use, store, and protect the personal information you
            share while using our website and services. It applies to all data
            collected through your interactions with our website, customer
            service, and our products and services.
            <p>
              We encourage you to read this policy carefully to understand our
              practices regarding your data. By accessing or using our services,
              you acknowledge that you have read, understood, and agreed to the
              terms of this Privacy Policy. If you do not agree with our
              practices, please do not use our website or services. Please note
              that this policy may be updated occasionally to reflect changes in
              our practices or legal requirements. We will notify you of any
              significant changes and always have the most current version of
              the Privacy Policy on our website. Your trust is important to us,
              and we are committed to ensuring the privacy and security of your
              personal information. If you have any questions or concerns about
              our Privacy Policy or practices, please contact us anytime.
            </p>
          </div>{" "}
        </div>
        <div className="my-12 flex flex-col gap-5">
          <h1 className=" lato-text text-[22px]">
            2. What Information Do We Collect?
          </h1>
          <div className="lato-text md:text-[18px] text-[16px] text-[#797979] uppercase tracking-tight leading-loose [word-spacing:2px]">
            <p>
              At eSIMcard.com, we maintain our visitors and customers trust and
              confidence. In this section, we want to be transparent about the
              types of information we collect when you interact with our website
              and services. We aim to collect only the information that helps us
              provide you with a high-quality experience while respecting your
              privacy.
            </p>
          </div>
        </div>
        <div className="my-12 flex flex-col gap-5">
          <h1 className=" lato-text text-[22px]">
            Who Is Eligible for the Affordable Connectivity Program?
          </h1>
          <div className="lato-text md:text-[18px] text-[16px] pl-4 text-[#797979] uppercase tracking-tight leading-loose [word-spacing:2px]">
            <ul className="list-disc">
              <li>
                Household income is at or below{" "}
                <strong>200% of the Federal Poverty Guidelines</strong>.
              </li>
              <li>
                OR a household member meets at least one of the following:
                <ul className="list-disc">
                  <li>
                    Received a <strong>Federal Pell Grant</strong> during the
                    current award year.
                  </li>
                  <li>
                    Meets the eligibility criteria for a participating
                    provider’s existing low-income internet program.
                  </li>
                  <li>
                    Participates in one of these assistance programs:
                    <ul className="list-disc">
                      <li>
                        Free and Reduced-Price School Lunch Program or School
                        Breakfast Program (including USDA Community Eligibility
                        Provision schools)
                      </li>
                      <li>SNAP</li>
                      <li>Medicaid</li>
                      <li>
                        Housing Choice Voucher (HCV) Program (Section 8
                        Vouchers)
                      </li>
                      <li>
                        Project-Based Rental Assistance (PBRA) / 202 / 811
                      </li>
                      <li>Public Housing</li>
                      <li>Supplemental Security Income (SSI)</li>
                      <li>WIC</li>
                      <li>Veterans Pension or Survivor Benefits</li>
                      <li>Lifeline</li>
                    </ul>
                  </li>
                  <li>
                    Participates in one of these assistance programs{" "}
                    <em>and</em> lives on Qualifying Tribal lands:
                    <ul className="list-disc">
                      <li>Bureau of Indian Affairs General Assistance</li>
                      <li>Tribal TANF</li>
                      <li>Food Distribution Program on Indian Reservations</li>
                      <li>Tribal Head Start (income-based)</li>
                      <li>
                        Affordable Housing Programs for American Indians, Alaska
                        Natives, or Native Hawaiians
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
}

export default page;
