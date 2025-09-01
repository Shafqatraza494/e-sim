"use client";

import { useFetch } from "@/Hooks/useFetch";
import Image from "next/image";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

const BASE_URL = "https://platform.defymobile.com/";

function RecentBlog() {
  const { data, isLoading, isError } = useFetch("get", "/blog");

  const [activeTab, setActiveTab] = useState("eSIM Technology");

  const blogs = data?.blogs?.data ?? [];
  console.log("blogs data filterd", blogs);
  console.log("blogs data lslsl", data);

  if (isLoading) {
    return (
      <div className="mb-10">
        <h1 className="lato-text md:text-[27px] text-[20px] text-left md:pb-10 pb-5">
          Recent blog posts
        </h1>

        <div className="flex md:flex-row flex-col gap-10">
          <div className="flex flex-col gap-6 md:w-[500px]">
            <Skeleton height={300} borderRadius={12} />
            <Skeleton width="60%" height={16} />
            <Skeleton width="90%" height={24} />
            <Skeleton width="80%" height={16} />
          </div>

          <div className="md:w-[600px] flex flex-col gap-10">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex md:flex-row flex-col gap-5">
                <Skeleton width={350} height={220} borderRadius={12} />
                <div className="flex flex-col gap-3 flex-1">
                  <Skeleton width="40%" height={16} />
                  <Skeleton width="70%" height={20} />
                  <Skeleton width="90%" height={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return <p className="text-center text-red-500">Failed to load blogs.</p>;
  }

  return (
    <>
      <div className="md:my-10 my-4 flex justify-center items-center w-[100%] ">
        <ul className="hidden md:flex flex-row items-center mt-10 text-[22px] align-middle">
          {data?.categories?.map((tab, index) => (
            <li
              key={index}
              onClick={() => setActiveTab(tab.name)}
              className={`cursor-pointer border-b-3 ${
                activeTab === tab.name
                  ? "w-[200px] border-[#EB662B] text-[#EB662B] font-[700]"
                  : "w-[200px] text-black font-[400]"
              }`}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-10">
        <h1 className="lato-text md:text-[27px] text-[20px] text-left md:pb-10 pb-5">
          Recent blog posts
        </h1>
        <div className="flex md:flex-row flex-col gap-10">
          {blogs.length > 0 && (
            <div className="flex flex-col gap-10 md:w-[500px] text-left">
              <Image
                width={600}
                height={300}
                src={`${BASE_URL}${blogs[0].image}`}
                alt={blogs[0].name}
              />
              <div className="flex flex-col gap-4">
                <p className="lato-text text-[15px] text-[#EB662B]">
                  {blogs[0].author_name} •{" "}
                  {new Date(blogs[0].created_at).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <div className="flex flex-row justify-between">
                  <button>
                    <h1 className="lato-text md:text-[27px] text-[20px] md:text-left text-center">
                      {blogs[0].name}
                    </h1>
                  </button>
                  <Image
                    width={27}
                    height={27}
                    src="/Blog/arrow-up-right.svg"
                    alt="arrow"
                  />
                </div>
                <p className="lato-text md:text-[18px] text-[#667085]">
                  {blogs[0].sub_content}
                </p>
              </div>
            </div>
          )}

          <div className="md:w-[600px] flex flex-col gap-10">
            {blogs.slice(1, 3).map((blog) => (
              <div key={blog.id} className="flex md:flex-row flex-col gap-5">
                <Image
                  className="md:w-[350px] w-[100%]"
                  width={350}
                  height={220}
                  src={`${BASE_URL}${blog.thumbnail}`}
                  alt={blog.name}
                />
                <div className="flex flex-col gap-5">
                  <p className="lato-text text-[15px] text-left text-[#EB662B]">
                    {blog.author_name} •{" "}
                    {new Date(blog.created_at).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <button>
                    <h1 className="lato-text text-[20px] text-left">
                      {blog.name}
                    </h1>
                  </button>
                  <p className="lato-text md:text-[18px] text-left text-[#667085]">
                    {blog.sub_content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentBlog;
data is recievd from api like above i showed you make recent posts changes on category switch also add id as slug in title click as LoaderLink