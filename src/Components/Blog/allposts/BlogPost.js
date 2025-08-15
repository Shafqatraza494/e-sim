import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogPost = ({
  image,
  author,
  date,
  title,
  description,
  slug,
  href = "#",
}) => (
  <Link href={`/blog/details-page/${slug}`}>
    <article className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <Image
          src={image}
          alt={title}
          width={400}
          height={192}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-sm">
          <span className="text-orange-500 font-medium">{author}</span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-gray-500">{date}</span>
        </div>

        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
              {title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {description}
            </p>
          </div>
          <ExternalLink className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </article>
  </Link>
);

export default BlogPost;
