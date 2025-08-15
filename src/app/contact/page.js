import Form from "@/Components/Contact-Us/Form";
import Banner from "@/Components/GlobalUi/DownloadBanner/Banner";
import Faq from "@/Components/Home/FAQSection/Faq";
import React from "react";

function page() {
  return (
    <>
      <div className="md:mx-14 mx-4">
        <Form />
      </div>
      <Banner />
      <div className="bg-[#EB662B0F]  px-14 flex flex-col justify-center my-10">
        <Faq />
      </div>
    </>
  );
}

export default page;
