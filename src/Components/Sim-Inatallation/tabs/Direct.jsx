import Image from "next/image";
import React from "react";

function Direct() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row gap-8 pb-6">
        {/* Step 1 */}
        <div className="md:w-1/2">
          <h2 className="text-[#F15A24] w-fit bg-[#EB662B1A] p-1 rounded-[7px] text-sm mb-4">
            Step 1
          </h2>
          <ol className="list-decimal list-inside text-[13px] font-semibold text-gray-800">
            <li>Tap on "Install eSIM."</li>
            <li>Tap on "Allow" on the confirmation dialog box.</li>
            <li>
              Follow the on-screen instructions to complete the eSIM download
              and installation.
            </li>
            <li>Choose a label for your new eSIM plan.</li>
            <li>
              Select "Primary" for your default line, then tap "Continue."
            </li>
            <li>
              Choose "Primary" for iMessage and FaceTime for your Apple ID, then
              tap "Continue."
            </li>
            <li>
              Select your new eSIM plan for cellular/mobile data, then tap
              "Continue."
            </li>
          </ol>
        </div>

        {/* Step 2 (Optional) */}
        <div className="md:w-1/2">
          <h2 className="text-[#F15A24]  text-sm mb-4 w-fit p-1 bg-[#EB662B1A] rounded-[7px]">
            Step 2 <span className=" text-[12px]">(Optional)</span>
          </h2>
          <p className="text-sm mb-4 text-gray-800 font-bold">
            Only if your eSIM is not connecting to the network tower.
          </p>
          <ol className="list-decimal list-inside text-[13px] font-semibold text-gray-800">
            <li>
              Go to "Cellular/Mobile Data", then select the recently downloaded
              eSIM on your device.
            </li>
            <li>
              Enable the "Turn On This Line" toggle, then select your new eSIM
              plan for cellular/mobile data.
            </li>
            <li>
              Tap "Network Selection", disable the "Automatic" toggle, then
              manually select the supported network if your eSIM has connected
              to the wrong network.
            </li>
            <li>Enable the "Data Roaming" toggle for your new eSIM plan.</li>
          </ol>
        </div>
      </div>

      {/* {sim help} */}

      <div className="py-4 space-y-4 md:block flex justify-center flex-col items-center md:border-0 border-1 my-4 rounded-[29px]">
        <div className="bg-[#EB662B1A] md:w-[400px] w-[300px] text-[#F15A24] p-2 rounded-md flex items-center gap-2 text-sm">
          <Image
            width={20}
            height={20}
            src="/Sim-Installation/info.png"
            alt=""
          />
          <span>Incase eSIM doesn't work please check:</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-row justify-between items-center bg-[#EB662B1A] h-16 p-4 rounded-sm relative md:w-[350px] w-[300px]">
            <div>
              <div className="text-[#F15A24] font-medium ">APN</div>
              <div className="text-black font-semibold text-sm">
                Global Data
              </div>
            </div>
            <Image
              width={20}
              height={20}
              src="/Sim-Installation/arrow-right-left.png"
              alt=""
            />
          </div>

          <div className="flex flex-row justify-between items-center md:w-[350px] w-[300px] bg-[#EB662B1A] h-16 p-4 rounded-sm relative">
            <div>
              <div className="text-[#F15A24] font-medium mb-1">APN</div>
              <div className="text-black font-semibold text-sm">
                Global Data
              </div>
            </div>
            <Image
              width={20}
              height={20}
              src="/Sim-Installation/badge-info.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Direct;
