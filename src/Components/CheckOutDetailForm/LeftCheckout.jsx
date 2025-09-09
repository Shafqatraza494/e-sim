import React from "react";
import Image from "next/image";
function LeftCheckout({ userBalance }) {
  return (
    <div className="w-[500px]">
      <div className="py-[11px] px-[17px] bg-[#EB662B] text-white flex flex-row justify-between items-center rounded-[20px]">
        <div className=" flex flex-row justify-between items-center">
          <Image width={32} height={32} src="/checkout/dollar.svg" alt="" />
          <h1 className="lato-text text-[20px]">Your Available Balance</h1>
        </div>
        <h1 className="lato-text text-[24px]">${userBalance}</h1>
      </div>
      <div className="flex flex-row justify-between w-[314px] items-center my-7">
        <Image width={24} height={24} src="/checkout/lock-keyhole.svg" alt="" />
        <h1 className="lato-text text-[14px]">
          Guaranteed safe & secure checkout
        </h1>
        <p className="text-[blue]">stripe</p>
      </div>
      <div className="flex gap-2">
        <a href="#">
          <Image
            width={30}
            height={19}
            src="/amex.png"
            alt="Amex"
            className="h-5"
          />
        </a>
        <a href="https://www.google.com">
          <Image width={30} height={19} src="/apple-pay.png" alt="" />
        </a>
        <a href="#">
          <Image
            width={30}
            height={19}
            src="/gpay.png"
            alt="Google Pay"
            className="h-5"
          />
        </a>
        <a href="#">
          <Image
            width={30}
            height={19}
            src="/mastercard.png"
            alt="Mastercard"
            className="h-5"
          />
        </a>
        <a href="#">
          <Image
            width={30}
            height={19}
            src="/visa.png"
            alt="Visa"
            className="h-5"
          />
        </a>
      </div>
    </div>
  );
}

export default LeftCheckout;
