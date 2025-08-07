"use client";

import React, { useState } from "react";
import Image from "next/image";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      title: "Is eSIM good for travel?",
      description:
        "Absolutely! eSIM revolutionizes the way you travel by making it incredibly easy to switch countries without the hassle of swapping SIM cards. This feature is perfect for frequent flyers and adventurous explorers who want to stay connected no matter where their journeys take them. With eSIM, you can seamlessly transition between different networks, ensuring you always have reliable service while you explore new destinations.",
    },
    {
      title: "Which eSIM is best for Travelling?",
      description:
        "Absolutely! eSIM revolutionizes the way you travel by making it incredibly easy to switch countries without the hassle of swapping SIM cards. This feature is perfect for frequent flyers and adventurous explorers who want to stay connected no matter where their journeys take them. With eSIM, you can seamlessly transition between different networks, ensuring you always have reliable service while you explore new destinations.",
    },
    {
      title: "Can you install eSIM before Traveling?",
      description:
        "Absolutely! eSIM revolutionizes the way you travel by making it incredibly easy to switch countries without the hassle of swapping SIM cards. This feature is perfect for frequent flyers and adventurous explorers who want to stay connected no matter where their journeys take them. With eSIM, you can seamlessly transition between different networks, ensuring you always have reliable service while you explore new destinations.",
    },
    {
      title: "What's the difference between eSIM and physical SIM?",
      description:
        "Absolutely! eSIM revolutionizes the way you travel by making it incredibly easy to switch countries without the hassle of swapping SIM cards. This feature is perfect for frequent flyers and adventurous explorers who want to stay connected no matter where their journeys take them. With eSIM, you can seamlessly transition between different networks, ensuring you always have reliable service while you explore new destinations.",
    },
    {
      title: "How do I know if my device supports eSIM?",
      description:
        "Absolutely! eSIM revolutionizes the way you travel by making it incredibly easy to switch countries without the hassle of swapping SIM cards. This feature is perfect for frequent flyers and adventurous explorers who want to stay connected no matter where their journeys take them. With eSIM, you can seamlessly transition between different networks, ensuring you always have reliable service while you explore new destinations.",
    },
    {
      title: "What countries don't support eSIM?",
      description:
        "Absolutely! eSIM revolutionizes the way you travel by making it incredibly easy to switch countries without the hassle of swapping SIM cards. This feature is perfect for frequent flyers and adventurous explorers who want to stay connected no matter where their journeys take them. With eSIM, you can seamlessly transition between different networks, ensuring you always have reliable service while you explore new destinations.",
    },
  ];

  return (
    <div className="w-full h-auto my-10">
      <h1 className="bayon-text md:text-[64px] text-[24px] md:text-left text-center mb-6">
        Frequently Asked Questions
      </h1>

      {faqData.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="bg-[#FFFFFF] rounded-[36px] p-5 flex flex-col gap-3 mb-4"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex justify-between items-center w-full"
            >
              <h2 className="latp-text md:text-[18px] text-[16px] font-bold text-left">
                {item.title}
              </h2>
              <Image
                src={isOpen ? "/Home/faq/opened.png" : "/Home/faq/closed.png"}
                alt="toggle"
                width={44}
                height={44}
              />
            </button>

            {isOpen && (
              <p className="text-sm text-gray-700">{item.description}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Faq;
