"use client";
import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";
import { useGuest } from "@/Context/GuestContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import RecentBlog from "@/Components/Blog/RecentBlog";
import BlogPost from "@/Components/Blog/allposts/BlogPost";

const BASE_URL = "https://platform.defymobile.com/";

export default function Page({ params }) {
  const { slug } = React.use(params);
  const { blogsData, blogsLoading, blogsError } = useGuest();

  if (blogsLoading) {
    return (
      <div className="md:mx-14 mx-4">
        {/* Skeleton for cover image */}
        <Skeleton height={300} borderRadius={12} />

        <div className="my-5">
          {/* Skeleton for title */}
          <Skeleton width="60%" height={48} />

          {/* Skeleton for sub-content */}
          <Skeleton count={2} height={20} style={{ marginTop: "10px" }} />

          {/* Skeleton for author */}
          <div className="flex items-center gap-2 mt-3">
            <Skeleton circle width={40} height={40} />
            <Skeleton width={100} height={20} />
          </div>
        </div>

        {/* Skeleton for content */}
        <Skeleton count={8} height={18} />
      </div>
    );
  }

  if (blogsError) return <p>Failed to load blogs.</p>;

  const blogs = blogsData?.blogs?.data ?? [];
  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="md:mx-14 mx-4 mb-10">
      <Image
        className="w-full h-[300px] object-cover object-center rounded-lg"
        width={900}
        height={300}
        src={`${BASE_URL}${post.image}`}
        alt={post.name}
      />

      <div className="my-5">
        <h1 className="bayon-text md:text-[64px] text-[24px] text-[#EB662B]">
          {post.name}
        </h1>
        <p className="lato-text md:text-[22px] text-[15px] text-gray-700">
          {post.sub_content}
        </p>

        <div className="flex items-center gap-2 mt-3">
          <Image
            src={`${BASE_URL}${post.author_image}`}
            width={40}
            height={40}
            alt={post.author_name}
            className="rounded-full"
          />
          <span className="text-sm text-gray-600">{post.author_name}</span>
        </div>
      </div>

      <div
        className="blog-content prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className=" my-10">
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
          {blogs
            .slice(0, 3)
            .map(
              (post, index) => (
                console.log("ajaja", post), (<BlogPost key={index} {...post} />)
              )
            )}
        </div>
      </div>
    </div>
  );
}
