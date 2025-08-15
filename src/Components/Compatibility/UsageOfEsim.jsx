import Image from "next/image";
import React from "react";

function UsageOfEsim() {
  return (
    <div className="relative flex flex-row justify-center items-center md:h-[680px]">
      <div className="hidden md:block absolute left-0">
        <Image width={550} height={595} src="/Compatibilty/usage.svg" alt="" />
      </div>

      <div className="md:absolute  right-0 md:bg-[#EB662B0D] md:w-[700px] md:h-[680px] rounded-[20px]">
        <div className="md:pl-30 md:pr-10 md:py-6 p-10 md:text-left text-center">
          <h1 className="bayon-text md:text-[50px] text-[24px]">
            Usage of e-SIM in 2024
          </h1>
          <p className="lato-text md:text-[14px] text-[12px]">
            In 2024, More than half phones Worldwide are eSIM
            compatible,Ofcousre for the convenience of the users and fulfilling
            the demand of the technology enthusiasts. Graph of the eSIM
            compatible phones launching is forward and upward.
          </p>
        </div>

        <div className="flex md:flex-row gap-5 md:mt-30 md:py-0 py-10 md:px-0 px-8 flex-col md:bg-[#eb652b00] bg-[#EB662B0D] rounded-[20px] items-center">
          <div className="w-full md:w-[180px] h-[150px] bg-white rounded-[20px] p-5 flex flex-col gap-5">
            <Image
              width={35}
              height={35}
              src="/Compatibilty/ticket.svg"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <h1 className="lato-text text-[14px] font-bold">
                Affordable Plans
              </h1>
              <p className="lato-text text-[12px]">
                Enjoy Global Connectivity without overspending.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[180px] h-[150px] bg-white rounded-[20px] p-5 flex flex-col gap-5">
            <Image
              width={35}
              height={35}
              src="/Compatibilty/hot-air-balloon.svg"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <h1 className="lato-text text-[14px] font-bold">
                Affordable Plans
              </h1>
              <p className="lato-text text-[12px]">
                Enjoy Global Connectivity without overspending.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[180px] h-[150px] bg-white rounded-[20px] p-5 flex flex-col gap-5">
            <Image
              width={35}
              height={35}
              src="/Compatibilty/diamond.svg"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <h1 className="lato-text text-[14px] font-bold">
                Affordable Plans
              </h1>
              <p className="lato-text text-[12px]">
                Enjoy Global Connectivity without overspending.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsageOfEsim;
