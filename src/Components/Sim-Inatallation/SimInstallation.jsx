"use client";

import React, { useState } from "react";
import ButtonFill from "../GlobalUi/ui/Buttons/ButtonFill";
import ButtonOutline from "../GlobalUi/ui/Buttons/ButtonOutline";
import ButtonOutlineOrange from "../GlobalUi/ui/Buttons/ButtonOutlineOrange";
import Direct from "./tabs/Direct";
import QRCode from "./tabs/QRCode";
import Manual from "./tabs/Manual";

function SimInstallation() {
  const [activeTab, setActiveTab] = useState("Data");
  const [directData, setDirectData] = useState("direct");
  return (
    <>
      <div className="flex flex-col gap-10 px-18">
        <div className="">
          <h1 className="font-open-sans font-bold text-[64px] leading-[89%] align-middle">
            e<span className="bayon-text">SIM</span> INSTALLATION{" "}
          </h1>
        </div>
        <div className="text-white flex flex-row gap-4">
          <ButtonFill text={"IOS Devices"} />
          <ButtonOutlineOrange text={"Android Devices"} />
        </div>
        <div>
          <ul className="flex   mt-1 text-[22px] align-middle">
            {["Direct", "QR Code", "Manual"].map((tab, index) => (
              <li
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer border-b-3   ${
                  activeTab === tab
                    ? "  w-[130px] border-[#EB662B] text-[#EB662B] font-[700]"
                    : " w-[130px] text-black font-[400]"
                }`}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Direct />
          <h1>QR code</h1>
          {directData === "qr" ? <p>QR Code</p> : null}
          <h1>manual</h1>
          <QRCode />
          <Manual />
        </div>
      </div>
    </>
  );
}

export default SimInstallation;
