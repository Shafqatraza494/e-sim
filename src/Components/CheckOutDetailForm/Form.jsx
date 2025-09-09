import Image from "next/image";
import React from "react";

function Form() {
  return (
    <div className="w-full lg:max-w-[500px]">
      <div className="w-full rounded-[13.43px] border p-8">
        <h1 className="text-center lato-text text-[32px] lg:text-[43.33px] text-[#121212] font-bold">
          Login/Signup
        </h1>

        <div className="flex flex-col">
          <label className="lato-text font-[400] text-[14.44px] text-[#121212]">
            Full Name
          </label>
          <input
            className="h-[44.28px] rounded-[10.83px] bg-[#F5F7FA] mt-3 lato-text font-[400] text-[12.64px] text-[#6B6B6B] px-5"
            type="text"
            placeholder="Example"
          />
        </div>

        <div className="flex flex-col mt-4">
          <label className="lato-text font-[400] text-[14.44px] text-[#121212]">
            Email
          </label>
          <input
            className="h-[44.28px] rounded-[10.83px] bg-[#F5F7FA] mt-3 lato-text font-[400] text-[12.64px] text-[#6B6B6B] px-5"
            type="text"
            placeholder="example@123.com"
          />
        </div>

        <div className="flex flex-row justify-center mt-6">
          <button className="h-[44px] rounded-[18px] bg-[#EB662B] text-[#FFFFFF] lato-text text-[20px] w-[231px]">
            Continue as Guest
          </button>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-5 mt-5">
          <button className="w-full lg:w-[220px] h-[48px] rounded-[12px] bg-[#FFFFFF] border border-[#DCDBDD] flex flex-row items-center gap-2 p-2">
            <Image width={15} height={15} src="/Google.logo.svg" alt="" />
            Continue with Google
          </button>
          <button className="w-full lg:w-[220px] h-[48px] rounded-[12px] bg-[#FFFFFF] border border-[#DCDBDD] flex flex-row items-center gap-2 p-2">
            <Image height={19.63} width={16} src="/apple.logo.svg" alt="" />
            Continue with Apple
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center my-7 text-sm">
        <Image width={24} height={24} src="/checkout/lock-keyhole.svg" alt="" />
        <h1 className="lato-text">Guaranteed safe & secure checkout</h1>
        <p className="text-blue-600">stripe</p>
      </div>

      <div className="flex gap-2 flex-wrap">
        <a href="#">
          <Image width={30} height={19} src="/amex.png" alt="Amex" />
        </a>
        <a href="#">
          <Image width={30} height={19} src="/apple-pay.png" alt="Apple Pay" />
        </a>
        <a href="#">
          <Image width={30} height={19} src="/gpay.png" alt="Google Pay" />
        </a>
        <a href="#">
          <Image
            width={30}
            height={19}
            src="/mastercard.png"
            alt="Mastercard"
          />
        </a>
        <a href="#">
          <Image width={30} height={19} src="/visa.png" alt="Visa" />
        </a>
      </div>
    </div>
  );
}

export default Form;
