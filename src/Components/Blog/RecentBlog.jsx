"use client";

import { useGuest } from "@/Context/GuestContext";
import { LoaderLink } from "@/Context/LoaderLink";
import { useFetch } from "@/Hooks/useFetch";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import Skeleton from "react-loading-skeleton";

const BASE_URL = "https://platform.defymobile.com/";

function RecentBlog() {
  const { blogsData, blogsLoading, blogsError } = useGuest();

  const [activeTab, setActiveTab] = useState("All");

  const blogs = blogsData?.blogs?.data ?? [];
  console.log(blogsData);

  const categories = blogsData?.categories ?? [];

  const filteredBlogs = useMemo(() => {
    if (activeTab === "All") return blogs;
    return blogs.filter((blog) => blog.category.name === activeTab);
  }, [blogs, activeTab]);

  if (blogsLoading) {
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

  if (blogsError) {
    return <p className="text-center text-red-500">Failed to load blogs.</p>;
  }

  return (
    <>
      <div className="md:my-10 my-4 flex justify-center items-center w-[100%]">
        <ul className="hidden md:flex flex-row items-center mt-10 text-[22px] align-middle gap-6">
          <li
            className={`cursor-pointer ${
              activeTab === "All"
                ? "border-b-2 border-[#EB662B] text-[#EB662B] font-[700]"
                : "text-black font-[400]"
            }`}
            onClick={() => setActiveTab("All")}
          >
            All
          </li>
          {categories.map((tab) => (
            <li
              key={tab.id}
              onClick={() => setActiveTab(tab.name)}
              className={`cursor-pointer ${
                activeTab === tab.name
                  ? "border-b-2 border-[#EB662B] text-[#EB662B] font-[700]"
                  : "text-black font-[400]"
              }`}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Blogs */}
      <div className="mb-10">
        <h1 className="lato-text md:text-[27px] text-[20px] text-left md:pb-10 pb-5">
          Recent blog posts
        </h1>

        <div className="flex md:flex-row flex-col gap-10">
          {filteredBlogs.length > 0 && (
            <div className="flex flex-col gap-10 md:w-[500px] text-left">
              <Image
                width={600}
                height={300}
                src={`${BASE_URL}${filteredBlogs[0].image}`}
                alt={filteredBlogs[0].name}
              />
              <div className="flex flex-col gap-4">
                <p className="lato-text text-[15px] text-[#EB662B]">
                  {filteredBlogs[0].author_name} •{" "}
                  {new Date(filteredBlogs[0].created_at).toLocaleDateString(
                    "en-US",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }
                  )}
                </p>

                <div className="flex flex-row justify-between items-center">
                  {/* ✅ Title wrapped with LoaderLink */}
                  <LoaderLink
                    href={`/blog/details-page/${filteredBlogs[0].slug}`}
                  >
                    <h1 className="lato-text md:text-[27px] text-[20px] md:text-left text-center cursor-pointer">
                      {filteredBlogs[0].name}
                    </h1>
                  </LoaderLink>
                  <Image
                    width={27}
                    height={27}
                    src="/Blog/arrow-up-right.svg"
                    alt="arrow"
                  />
                </div>

                <p className="lato-text md:text-[18px] text-[#667085]">
                  {filteredBlogs[0].sub_content}
                </p>
              </div>
            </div>
          )}

          {/* Side blogs */}
          <div className="md:w-[600px] flex flex-col gap-10">
            {filteredBlogs.slice(1, 3).map((blog) => (
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

                  {/* ✅ Title wrapped with LoaderLink */}
                  <LoaderLink href={`/blog/details-page/${blog.slug}`}>
                    <h1 className="lato-text text-[20px] text-left cursor-pointer">
                      {blog.name}
                    </h1>
                  </LoaderLink>

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
