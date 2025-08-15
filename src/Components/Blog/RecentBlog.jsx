"use client";

import Image from "next/image";
import React, { useState } from "react";

function RecentBlog() {
  const [activeTab, setActiveTab] = useState("Technology");
  return (
    <>
      <div className="md:my-10 my-4 flex justify-center items-center w-[100%] ">
        <ul className="hidden md:flex flex-row items-center   mt-10 text-[22px] align-middle">
          {["Technology", "Iphone", "News", "Teams"].map((tab, index) => (
            <li
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer border-b-3   ${
                activeTab === tab
                  ? "  w-[150px] border-[#EB662B] text-[#EB662B] font-[700]"
                  : " w-[150px] text-black font-[400]"
              }`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-10 ">
        <h1 className="lato-text md:text-[27px] text-[20px] text-left  md:pb-10 pb-5">
          Recent blog posts
        </h1>
        <div className="flex md:flex-row flex-col gap-10">
          <div className="flex flex-col gap-10 md:w-[500px] text-left">
            <Image
              width={600}
              height={300}
              src="/Blog/RecentImage1.svg"
              alt=""
            />
            <div className="flex flex-col gap-4 ">
              <p className="lato-text text-[15px] text-[#EB662B]">
                Olivia Rhye • 20 Jan 2022
              </p>
              <div className="flex flex-row justify-between">
                <button>
                  <h1 className="lato-text md:text-[27px] text-[20px]">
                    UX review presentations
                  </h1>
                </button>
                <Image
                  width={27}
                  height={27}
                  src="/Blog/arrow-up-right.svg"
                  alt=""
                />
              </div>
              <p className="lato-text md:text-[18px] text-[#667085]">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
            </div>
          </div>

          <div className="md:w-[600px] flex flex-col gap-10 ">
            <div className="flex md:flex-row flex-col  gap-5">
              <Image
                className="md:w-[350px] w-[100%]"
                width={350}
                height={220}
                src="/Blog/RecentImage2.svg"
                alt=""
              />
              <div className="flex flex-col gap-5 ">
                <p className="lato-text text-[15px] text-left text-[#EB662B]">
                  Phoenix Baker • 19 Jan 2022{" "}
                </p>
                <button>
                  <h1 className="lato-text text-[20px] text-left">
                    Migrating to Linear 101
                  </h1>
                </button>

                <p className="lato-text md:text-[18px] text-left text-[#667085]">
                  Linear helps streamline software projects, sprints, tasks, and
                  bug tracking. Here’s how to get...
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-5">
              <Image
                className="md:w-[350px] w-[100%]"
                width={350}
                height={220}
                src="/Blog/RecentImage3.svg"
                alt=""
              />
              <div className="flex flex-col gap-5">
                <p className="lato-text text-[15px] text-left text-[#EB662B]">
                  Lana Steiner • 18 Jan 2022
                </p>
                <button>
                  <h1 className="lato-text text-[20px] text-left">
                    Building your API Stack
                  </h1>
                </button>

                <p className="lato-text text-[18px] text-left text-[#667085]">
                  The rise of RESTful APIs has been met by a rise in tools for
                  creating, testing, and manag...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentBlog;
