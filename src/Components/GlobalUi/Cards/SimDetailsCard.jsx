import React from "react";
import Image from "next/image";
import { Flamenco } from "next/font/google";
import ButtonFill from "../ui/Buttons/ButtonFill";
import ButtonOutline from "../ui/Buttons/ButtonOutline";
import ButtonOutlineOrange from "../ui/Buttons/ButtonOutlineOrange";

function SimDetailsCard() {
  const infoData = [
    {
      heading: "ICCID",
      value: "FSJAJJKAhsdff",
      image: "/SimDetailsImages/ICCID.png",
      icon: true,
    },
    {
      heading: "Activation Code",
      value: "OcakkzfY8D",
      image: "/SimDetailsImages/Purchase.png",
      icon: true,
    },
    {
      heading: "Manual Entry",
      subHeading: "(Android)",
      value: "LPA-12938928989384994",
      image: "/SimDetailsImages/ICCID.png",
      icon: true,
    },
    {
      heading: "Purchase Date",
      value: "28-4-2024",
      image: "/SimDetailsImages/Purchase.png",
      icon: false,
    },
    {
      heading: "Status",
      value: "28-4-2024",
      image: "/SimDetailsImages/Status.png",
      icon: false,
    },
    {
      heading: "Coverage",
      value: "See Details",
      image: "/SimDetailsImages/Coverage.png",
      icon: false,
    },
    {
      heading: "Purchase Date",
      value: "May 07, 2023",
      image: "/SimDetailsImages/Purchase.png",
      icon: false,
    },
    {
      heading: "Renewable Date",
      value: "May 07, 2023",
      image: "/SimDetailsImages/Renewable.png",
      icon: false,
    },
  ];

  return (
    <div className="lg:w-[600px] w-[391px] lg:h-[500px] border-1 rounded-2xl py-3 bg-white">
      <ul className=" grid lg:grid-cols-2 grid-cols-1 place-items-left gap-8 pb-5">
        {infoData.map((info, index) => (
          <li
            key={index}
            className="flex flex-row gap-2 text-lato justify-start items-start align-top lg:pl-8 pl-2 lg:bg-white bg-[#FBFBFB] lg:mx-0 mx-5 rounded-[9px] lg:py-0 py-4"
          >
            {" "}
            <Image src={info.image} alt="" width={30} height={30} />{" "}
            <div className="flex flex-col  ">
              <p className="text-[18px] font-[600] text-[#EB662B]">
                {info.heading}
                {info.subHeading && (
                  <span className="text-sm ml-1">{info.subHeading}</span>
                )}
              </p>
              <div className="flex flex-row gap-1 text-[12px] font-[600] items-center">
                <p>{info.value}</p>
                <div>
                  {info.icon && (
                    <Image
                      src="/SimDetailsImages/copy.png"
                      width={10}
                      height={10}
                      alt="copy"
                    />
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="lg:hidden flex flex-col gap-4 p-6 text-white">
        <ButtonFill text={"Manage Subscription"} />
        <ButtonOutlineOrange text={"Cancel Subscription"} />
      </div>

      <div className="hidden lg:flex flex-col gap-2 px-8 ">
        <Image height={100} width={100} src="/SimDetailsImages/QR.png" alt="" />
        <div className="flex flex-row gap-2">
          <Image
            height={20}
            width={20}
            src="/SimDetailsImages/download.png"
            alt=""
          />{" "}
          <Image
            height={20}
            width={20}
            src="/SimDetailsImages/share.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default SimDetailsCard;
