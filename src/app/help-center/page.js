import { blogPosts } from "@/Components/Blog/allposts/blogData";
import BlogPost from "@/Components/Blog/allposts/BlogPost";
import Banner from "@/Components/GlobalUi/DownloadBanner/Banner";
import Hero from "@/Components/Hero/Hero";
import Faq from "@/Components/Home/FAQSection/Faq";
import Image from "next/image";
import React from "react";

function page() {
  const currentPosts = blogPosts.slice(0, 3);
  const cards = [
    {
      image: "/help-center/face-problem.svg",
      heading: "FACING PROBLEM",
      paragraph: "eSIM Card App was launched for iOS Devices",
    },
    {
      image: "/help-center/face-problem-star.svg",
      heading: "FACING PROBLEM",
      paragraph: "eSIM Card App was launched for iOS Devices",
    },
    {
      image: "/help-center/troubleshooting.svg",
      heading: "TROUBLESHOOTING",
      paragraph: "eSIM Card App was launched for iOS Devices",
    },
    {
      image: "/help-center/buy-esim.svg",
      heading: "BUY ESIM",
      paragraph: "eSIM Card App was launched for iOS Devices",
    },
    {
      image: "/help-center/my-account-airmoney.svg",
      heading: "MY ACCOUNT & AIRMONEY",
      paragraph: "eSIM Card App was launched for iOS Devices",
    },
    {
      image: "/help-center/esim-data-settings.svg",
      heading: "ESIM DATA SETTINGS",
      paragraph: "eSIM Card App was launched for iOS Devices",
    },
  ];

  return (
    <>
      <div>
        <Hero heading={"Help Center"} para={"Terms of Service"} />
      </div>
      <div className="md:mx-14 mx-4">
        <div className="w-[1000px]">
          <h1 className="bayon-text md:text-[64px] text-[24px]">
            Identify your problem and let us tackle with it.
          </h1>
          <p className="text-[16px] md:text-[20px]">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>
        </div>

        <div className="my-10 grid gap-6 md:grid-cols-3 grid-cols-1">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 w-[360px] border border-[#CCCCCC] rounded-[30px]"
            >
              <div className="flex items-center gap-4 justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-[#EB662B] w-fit p-2 pl-4 pt-4 rounded-tl-[30px]">
                    <Image
                      width={26}
                      height={26}
                      src={card.image}
                      alt={card.heading}
                    />
                  </div>
                  <h1 className="bayon-text text-[25px]">{card.heading}</h1>
                </div>
                <div className="p-4">
                  {/* do not change this image */}
                  <Image
                    width={20}
                    height={20}
                    src="/help-center/arrow-down.svg"
                    alt=""
                  />
                </div>
              </div>
              <p className="text-[12px] md:text-[17px] lato-text text-[#161C2D] pl-15">
                {card.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Banner />
      <div className="md:mx-14 mx-4 my-10">
        <div className="mb-10">
          <h1 className="bayon-text text-[24px] md:text-[64px]">
            Recent blog posts
          </h1>
          <p className="text-[16px] md:text-[20px] lato-text">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-5 pb-10 ">
          {currentPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
      <div className="bg-[#EB662B0F]  px-14 flex flex-col justify-center my-10">
        <Faq />
      </div>
    </>
  );
}

export default page;
