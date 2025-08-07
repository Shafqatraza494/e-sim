import Image from "next/image";
import React from "react";

function Grid() {
  return (
    <div className=" lg:h-[559px] h-[1398px] my-20 flex lg:flex-row flex-col gap-5 items-center">
      {/* ///////////////////////////////left///////////////////////////////// */}
      <div className=" h-[559px]  w-[400px] flex flex-col gap-[20px]">
        <div className="w-[400px] h-[352px] bg-[url('/Home/grid/grid1.png')] bg-cover bg-center rounded-[22px]"></div>
        <div className="w-[400px] h-[186px]  bg-[#EB662B] rounded-[22px] p-6 text-white">
          <h1 className="bayon-text text-[36px]">Instant Delivery</h1>
          <p className="lato-text ">
            Your eSIM data plan arrives by email within minutes. Setup is quick
            and secure — even before your plane takes off.
          </p>
        </div>
      </div>
      {/* //////////////////////////////////center//////////////////////////////////// */}
      <div className="relative h-[559px]  w-[400px] bg-[url('/Home/grid/grid2.png')] bg-cover bg-center rounded-[22px] p-6 text-white flex flex-col justify-between">
        <Image
          className="absolute bottom-0 left-0"
          width={380}
          height={100}
          src="/Home/grid/gradiant.png"
          alt=""
        />
        <Image
          className="absolute top-0 left-0"
          width={380}
          height={100}
          src="/Home/grid/gradianttao.png"
          alt=""
        />
        <h1 className="text-[36px] bayon-text absolute">
          Unlimited data plans
        </h1>
        <p className="lato-text absolute bottom-8">
          Say goodbye to top-ups. With prepaid eSIM plans, you get non-stop data
          to explore freely without worrying about limits.
        </p>
      </div>
      {/* /////////////////////////////////////right//////////////////////////////////// */}
      <div className="  h-[559px]  w-[400px] flex flex-col gap-[20px]">
        <div className="w-[400px] h-[186px]  bg-[#EB662B] rounded-[22px] p-6 text-white">
          <h1 className="bayon-text text-[36px]">Instant Delivery</h1>
          <p className="lato-text ">
            Use iPhone eSIM or dual SIM devices to run both your local number
            and data plan side by side — perfect for esim vs physical SIM
            advantages.
          </p>
        </div>
        <div className="w-[400px] h-[352px] bg-[url('/Home/grid/grid3.png')] bg-cover bg-center rounded-[22px]"></div>
      </div>
    </div>
  );
}

export default Grid;
