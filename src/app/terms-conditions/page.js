import Banner from "@/Components/GlobalUi/DownloadBanner/Banner";
import Hero from "@/Components/Hero/Hero";
import React from "react";

function page() {
  return (
    <div className="mb-10">
      <Hero para={"Terms & Condition"} heading={"Terms & Condition"} />
      <div className="md:mx-14 mx-4 my-10">
        <div>
          <h1 className="bayon-text md:text-[64px] text-[24px]  ">
            1. Validity of General Terms and Conditions
          </h1>
          <p className="lato-text md:text-[22px] text-[16px]">
            These Terms and Conditions are applicable to all services provided
            by our company in relation to the reselling of prepaid eSIMs. These
            terms are binding and enforceable upon the use of our services. We
            may accept variations to these terms only if explicitly agreed upon
            in writing.
          </p>{" "}
        </div>
        <div className="my-12 flex flex-col gap-5">
          <h1 className=" lato-text text-[22px]">
            Due to a lack of additional funding from Congress, the Affordable
            Connectivity Program has ended for now. Effective June 1, 2024,
            households will no longer receive an ACP discount.
          </h1>
          <div className="lato-text md:text-[18px] text-[16px] text-[#797979] uppercase tracking-tight leading-loose [word-spacing:2px]">
            <p>
              The Affordable Connectivity Program is an FCC benefit program that
              helps ensure that households can afford the ACP broadband they
              need for work, school, healthcare, and more. The ACP benefit
              provides a discount of up to $30 per month toward internet service
              for eligible households and up to $75 per month for households on
              qualifying Tribal lands. Eligible households can also receive a
              one-time discount of up to $100 to purchase a laptop, desktop
              computer, or tablet from participating providers if they
              contribute more than $10 and less than $50 toward the purchase
              price. The Affordable Connectivity Program is limited to one
              monthly service discount and one device discount per household.
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
