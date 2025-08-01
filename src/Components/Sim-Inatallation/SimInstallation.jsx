import React from "react";
import ButtonFill from "../GlobalUi/ui/Buttons/ButtonFill";
import ButtonOutline from "../GlobalUi/ui/Buttons/ButtonOutline";
import ButtonOutlineOrange from "../GlobalUi/ui/Buttons/ButtonOutlineOrange";
import Direct from "./tabs/Direct";
import QRCode from "./tabs/QRCode";
import Manual from "./tabs/Manual";

function SimInstallation() {
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
          <Direct />
          <QRCode />
          <Manual />
        </div>
      </div>
    </>
  );
}

export default SimInstallation;
