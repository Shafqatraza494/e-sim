import AllPosts from "@/Components/Blog/AllPosts";
import RecentBlog from "@/Components/Blog/RecentBlog";
import Hero from "@/Components/Hero/Hero";
import Faq from "@/Components/Home/FAQSection/Faq";
import React from "react";

function pgae() {
  return (
    <>
      <div>
        <Hero heading={"sTAY Updated with Blogs "} para={"eSim Blogs"} />
      </div>

      <div className="md:mx-14 mx-4 text-center md:text-left flex flex-col md:justify-start md:items-start justify-center items-center">
        <h1 className="bayon-text md:text-[64px] text-[24px] ">
          Stories and interviews
        </h1>
        <p className="lato-text md:text-[22px] text-[15px]">
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </p>
        <RecentBlog />
        <div className="hidden md:block">
          <AllPosts />
        </div>
      </div>
      <div className="bg-[#EB662B0F]  px-14 flex flex-col justify-center my-10">
        <Faq />
      </div>
    </>
  );
}

export default pgae;
