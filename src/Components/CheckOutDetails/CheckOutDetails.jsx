import Image from "next/image";
import React from "react";

const CheckOutDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 p-4 lg:p-8">
      {/* Left Section */}
      <div className="flex-1">
        {/* Title */}
        <div className="flex flex-row gap-2 items-center mb-6">
          <Image
            height={20}
            width={18}
            src="/checkout/Vector.svg"
            alt=""
            className="mb-1"
          />
          <h1 className="lato-text font-[700] text-[18px] sm:text-[22px] text-[#000000]">
            Order Summary
          </h1>
        </div>

        {/* Product Table Head */}
        <div className="mb-6 w-full">
          <ul className="font-[500] text-[14px] sm:text-[16px] lato-text text-[#3C3C3C] flex justify-between">
            <li>Product</li>
            <li>Quantity</li>
            <li>Renew</li>
            <li>Price</li>
          </ul>
          <div className="border-b border-[#F2F2F2] mt-2"></div>

          {/* Product Item 1 */}
          <div className="flex flex-wrap sm:flex-nowrap items-center mt-4 gap-3">
            <div className="flex flex-row gap-1 items-center flex-1 min-w-[180px]">
              <Image
                height={20}
                width={23}
                src="/checkout/Group.svg"
                alt=""
              />
              <p className="text-lato font-[400] text-[14px] text-[#3C3C3C]">
                2GB eSIM Data For 15 Days in Canada
              </p>
            </div>

            <div className="flex gap-3 sm:gap-5 items-center">
              <div className="flex justify-center">
                <div className="w-[80px] flex justify-between px-3 items-center rounded-[13px] border border-black">
                  <h1 className="text-[20px]">-</h1>
                  <h1 className="text-[12px] font-extrabold">1</h1>
                  <h1 className="text-[20px]">+</h1>
                </div>
              </div>
              <input
                type="checkbox"
                className="accent-[#EB662B] w-[20px] h-[20px]"
              />
              <button className="w-[60px] h-[32px] rounded-[6px] bg-[#EB662B] text-white">
                $24
              </button>
            </div>
          </div>

          <div className="border-b border-[#F2F2F2] mt-4"></div>

          {/* Product Item 2 */}
          <div className="flex flex-wrap sm:flex-nowrap items-center mt-4 gap-3">
            <div className="flex flex-row gap-1 items-center flex-1 min-w-[180px]">
              <Image
                height={20}
                width={23}
                src="/checkout/Group.svg"
                alt=""
              />
              <p className="text-lato font-[400] text-[14px] text-[#3C3C3C]">
                2GB eSIM Data For 15 Days in Canada
              </p>
            </div>

            <div className="flex gap-3 sm:gap-5 items-center">
              <div className="flex justify-center">
                <div className="w-[80px] h-[32px] border rounded-[13px] flex justify-between px-3 items-center">
                  <h1 className="text-[20px]">-</h1>
                  <h1>1</h1>
                  <h1 className="text-[20px]">+</h1>
                </div>
              </div>
              <input
                type="checkbox"
                className="accent-[#EB662B] w-[20px] h-[20px]"
              />
              <button className="w-[60px] h-[32px] rounded-[6px] bg-[#EB662B] text-white">
                $24
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="flex items-center gap-2 mt-6">
          <Image height={14} width={20} src="/checkout/Vector (1).svg" alt="" />
          <h1 className="lato-text font-[700] text-[18px] sm:text-[22px] text-[#000000]">
            Pricing
          </h1>
        </div>

        <div className="h-[31px] rounded-[10px] bg-[#F4F4F4] mt-4 flex justify-between px-4 items-center">
          <h1 className="text-[#EB662B]">Sub Total</h1>
          <h1 className="text-[#EB662B]">$48.00</h1>
        </div>

        {/* Coupon Section */}
        <div className="flex flex-wrap justify-between items-center mt-8 gap-4">
          <div className="flex flex-row gap-4 items-center">
            <h1 className="work-sans-text font-[500] text-[16px] sm:text-[18px] text-black">
              Coupon
            </h1>
            <div className="flex flex-row gap-2 items-center">
              <button className="w-[90px] sm:w-[98px] h-[30px] rounded-[6px] bg-black text-white">
                offer_five
              </button>
              <Image height={18} width={18} src="/checkout/Vector (2).svg" alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-[64px] h-[32px] rounded-[6px] bg-[#EB662B] text-white">
              5% off
            </button>
          </div>
        </div>

        {/* Discount Code Input */}
        <div className="flex flex-wrap sm:flex-nowrap justify-between mt-5 gap-3">
          <input
            className="font-[400] lato-text text-[14px] rounded-[10px] flex-1 h-[31px] bg-[#F4F4F4] px-3"
            type="text"
            placeholder="Enter Code"
          />
          <button className="w-[96px] h-[31px] rounded-[10px] bg-black text-white">
            Apply
          </button>
        </div>

        {/* Total */}
        <div className="h-[31px] rounded-[10px] bg-[#F4F4F4] mt-4 flex justify-between px-4 items-center border border-[#EB662B]">
          <h1 className="text-[#EB662B]">Total</h1>
          <h1 className="text-[#EB662B]">$48.00</h1>
        </div>

        {/* Checkout Button */}
        <button className="bg-[#EB662B] text-white w-full rounded-[18px] mt-5 h-[53px] flex justify-center gap-2 items-center">
          <Image width={24} height={24} src="/checkout/lock-keyhole-white.svg" alt="" />
          Go to Secure Checkout
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[400px]">
        <div className="py-[11px] px-[17px] bg-[#EB662B] text-white flex justify-between items-center rounded-[20px]">
          <div className="flex gap-2 items-center">
            <Image width={32} height={32} src="/checkout/dollar.svg" alt="" />
            <h1 className="lato-text text-[16px] sm:text-[20px]">Your Balance</h1>
          </div>
          <h1 className="lato-text text-[18px] sm:text-[24px]">$12.99</h1>
        </div>

        <div className="flex justify-between items-center my-7">
          <Image width={24} height={24} src="/checkout/lock-keyhole.svg" alt="" />
          <h1 className="lato-text text-[12px] sm:text-[14px]">
            Guaranteed safe & secure checkout
          </h1>
          <p className="text-blue-600">stripe</p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Image width={30} height={19} src="/amex.png" alt="Amex" />
          <Image width={30} height={19} src="/apple-pay.png" alt="Apple Pay" />
          <Image width={30} height={19} src="/gpay.png" alt="Google Pay" />
          <Image width={30} height={19} src="/mastercard.png" alt="Mastercard" />
          <Image width={30} height={19} src="/visa.png" alt="Visa" />
        </div>
      </div>
    </div>
  );
};

export default CheckOutDetails;
