import Image from "next/image";
import React from "react";

const PkgDetails = ({ pkg }) => {
  console.log(pkg);

  if (!pkg) return null;

  return (
    <div className="w-[800px]">
      <div className="flex flex-row gap-3">
        <Image
          height={36}
          width={36}
          src={pkg.banner || "/image 29.svg"}
          alt={pkg.regional_name || "Country flag"}
        />
        <div className="flex flex-row justify-between w-full">
          <h1 className="lato-text font-medium text-[22px] text-[#000000]">
            {pkg.regional_name || "Unknown Country"}
          </h1>
          <div className="flex flex-row justify-between w-[60%] items-center">
            <h1 className="lato-text font-medium text-[24px] text-[#000000]">
              Supported Countries & Network
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between mt-8">
        <div className="flex flex-col gap-10">
          <div className="flex flex-row justify-between items-center px-5 w-[295px] h-[46px] rounded-[9px] border border-[#E1E1E1] bg-[#FBFBFB]">
            <div className="flex flex-row gap-3">
              <Image
                height={20}
                width={18}
                src="/modal-vector.svg"
                alt="Data icon"
              />
              <h1 className="lato-text font-bold text-[16px] text-[#000000]">
                Data
              </h1>
            </div>
            <h1 className="lato-text text-[16px] text-[#000000] font-bold">
              {pkg.data_quantity} {pkg.data_unit}
            </h1>
          </div>

          <div className="flex flex-row justify-between items-center px-5 w-[295px] h-[46px] rounded-[9px] border border-[#E1E1E1] bg-[#FBFBFB]">
            <div className="flex flex-row gap-3">
              <Image
                height={24}
                width={24}
                src="/calendar-model.svg"
                alt="Calendar icon"
              />
              <h1 className="lato-text font-bold text-[16px] text-[#000000]">
                Validity
              </h1>
            </div>
            <h1 className="lato-text text-[16px] text-[#000000] font-bold">
              {pkg.package_validity} {pkg.package_validity_unit}
            </h1>
          </div>

          <div className="flex flex-row justify-between items-center px-5 w-[295px] h-[46px] rounded-[9px] border border-[#E1E1E1] bg-[#FBFBFB]">
            <div className="flex flex-row gap-3">
              <Image
                height={20}
                width={20}
                src="/vector-model.svg"
                alt="Speed icon"
              />
              <h1 className="lato-text font-bold text-[16px] text-[#000000]">
                Throttle/Speed Limit
              </h1>
            </div>
            <h1 className="lato-text text-[16px] text-[#000000] font-bold">
              {pkg.throttle ? `Yes (${pkg.throttle_speed || "Limited"})` : "No"}
            </h1>
          </div>

          {/* Tethering */}
          <div className="flex flex-row justify-between items-center px-5 w-[295px] h-[46px] rounded-[9px] border border-[#E1E1E1] bg-[#FBFBFB]">
            <div className="flex flex-row gap-3">
              <Image
                height={20}
                width={20}
                src="/vector-model4.svg"
                alt="Hotspot icon"
              />
              <h1 className="lato-text font-bold text-[16px] text-[#000000]">
                Tethering/Hotspot
              </h1>
            </div>
            <h1 className="lato-text text-[16px] text-[#000000] font-bold">
              {pkg.tether ? "Yes" : "No"}
            </h1>
          </div>
        </div>

        {/* Right Side - Networks */}
        <div className="flex flex-row gap-3 w-[485px] h-[300px] rounded-[9px] border border-[#E1E1E1] bg-[#FBFBFB] p-3 overflow-y-auto overflow-x-hidden">
          <div className="h-[1000px] flex flex-col gap-4 w-full">
            {pkg.coverages?.map((coverage, i) => (
              <div key={i} className="flex flex-row justify-between w-full">
                <h1 className="lato-text font-bold text-[18px] mt-1 text-[#000000]">
                  {coverage.country_name}
                </h1>
                <div className="flex flex-row gap-3 px-4 mt-2 w-fit h-[22px] rounded-[6px] border border-[#E1E1E1] bg-[#FBFBFB] items-center">
                  <p className="lato-text font-normal text-[14px] text-[#000000]">
                    {coverage.network_name}
                  </p>
                  <span className="flex items-center justify-center px-2 lato-text font-normal text-[14px] text-[#FFFFFF] bg-[#EB662B] rounded-[4px] h-[17px]">
                    {coverage.connectivity || pkg.connectivity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[800px] rounded-[9px] border border-[#BDBDBD] bg-[#FFFFFF] mt-4 p-3">
        <ul className="lato-text text-[16px] text-[#000000] list-disc list-inside font-bold">
          <li>{pkg.activation_type_description}</li>
          {pkg.notes && <li>{pkg.notes}</li>}
          {pkg.other_info && <li>{pkg.other_info}</li>}
        </ul>
      </div>
    </div>
  );
};

export default PkgDetails;
