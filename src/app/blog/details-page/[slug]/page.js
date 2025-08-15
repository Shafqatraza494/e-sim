import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";
import { blogPosts } from "@/Components/Blog/allposts/blogData";

export default function Page({ params }) {
  const { slug } = params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="md:mx-14 mx-4">
      <Image
        className="w-full h-[300px] object-cover object-center rounded-lg"
        width={900}
        height={100}
        src={post.image}
        alt={post.title}
      />

      <div className="my-5">
        <h1 className="bayon-text md:text-[64px] text-[24px] text-[#EB662B]">
          {post.title}
        </h1>
        <p className="lato-text md:text-[22px] text-[15px] text-gray-700">
          {post.description}
        </p>
      </div>

      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
