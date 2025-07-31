import React from "react";
import ButtonFill from "../GlobalUi/ui/Buttons/ButtonFill";
import ButtonOutline from "../GlobalUi/ui/Buttons/ButtonOutline";
import ButtonOutlineOrange from "../GlobalUi/ui/Buttons/ButtonOutlineOrange";

function SimInstallation() {
  return (
    <>
      <div className="">
        <h1 className="font-open-sans font-bold text-[64px] leading-[89%] align-middle">
          e<span className="bayon-text">SIM</span> INSTALLATION{" "}
        </h1>
      </div>
      <div className="text-white">
        <ButtonFill text={"IOS Devices"} />
        <ButtonOutlineOrange text={"Android Devices"} />
      </div>
    </>
  );
}

export default SimInstallation;
