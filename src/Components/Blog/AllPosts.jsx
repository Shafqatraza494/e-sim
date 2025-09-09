"use client";

import { useState } from "react";
import BlogPost from "./allposts/BlogPost";
import Pagination from "./allposts/Pagination";
import { useFetch } from "@/Hooks/useFetch";
import Skeleton from "react-loading-skeleton";

const BASE_URL = "https://platform.defymobile.com/";

export default function AllPosts() {
  const { data, isLoading, isError } = useFetch("get", "/blog");
  const blogs = data?.blogs?.data ?? [];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page) => setCurrentPage(page);
  const handlePrevious = () =>
    currentPage > 1 && handlePageChange(currentPage - 1);
  const handleNext = () =>
    currentPage < totalPages && handlePageChange(currentPage + 1);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className=" my-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            All blog posts
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {Array.from({ length: postsPerPage }).map((_, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <Skeleton width="350px" height="200px" />
                <Skeleton width="80%" height="20px" />
                <Skeleton width="60%" height="18px" />
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
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto my-10">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            All blog posts
          </h1>
        </div>

        {/* Blog posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-5 pb-10 border-b-1">
          {currentPosts.map((post) => (
            <BlogPost
              key={post.id}
              image={`${BASE_URL}${post.thumbnail}`}
              author={post.author_name}
              date={new Date(post.created_at).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
              title={post.name}
              description={post.sub_content}
              slug={post.slug}
              href={`/blog/${post.slug}`} // ✅ dynamic blog link
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}
