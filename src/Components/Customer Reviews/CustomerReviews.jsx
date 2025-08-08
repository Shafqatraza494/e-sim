"use client";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: "/Country/customer-1.svg",
    review:
      "Laborum quasi distinctio est et. Sequi omnis molestiae. Officia occaecati voluptatem accusantium.",
  },
  {
    id: 2,
    name: "John Doe",
    image: "/Country/customer-2.svg",
    review:
      "Laborum quasi distinctio est et. Sequi omnis molestiae. Officia occaecati voluptatem accusantium.",
  },
  {
    id: 3,
    name: "John Doe",
    image: "/Country/customer-3.svg",
    review:
      "Laborum quasi distinctio est et. Sequi omnis molestiae. Officia occaecati voluptatem accusantium.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl ">
        {/* Heading */}
        <h2 className="bayon-text font-[400] md:text-[64px] text-[24px] text-[#000000] mb-10 md:text-left text-center">
          OUR HAPPY CUSTOMER
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:ml-35">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition border border-gray-100"
            >
              {/* Profile */}
              <div className="flex items-center mb-4">
                <Image height={55} width={55} src={t.image} alt="" />
                <div className="ml-3">
                  <h3 className="font-semibold">{t.name}</h3>
                  {/* Stars */}
                  <div className="flex space-x-1 text-lg">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        <Image
                          height={24}
                          width={24}
                          src="/Country/star.svg"
                          alt=""
                        />
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
