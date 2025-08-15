import Image from "next/image";
import React from "react";

const CheckOutForm = () => {
  return (
    <>
      <div className="flex flex-row  gap-20">
        <div>
          <div className="flex flex-row gap-2 ">
            <Image
              className="mb-8"
              height={20}
              width={18}
              src="/checkout/Vector.svg"
              alt=""
            />
            <h1 className="lato-text font-[700] text-[22px] text-[#000000] mb-8">
              Order Summary
            </h1>
          </div>
          <div className="mb-20 w-[600px]">
            <ul className="font-[500] text-[16px] lato-text text-[#3C3C3C] flex flex-row justify-between">
              <li>Product</li>
              <li>Quantity</li>
              <li>Renew</li>
              <li>Price</li>
            </ul>
            <div className=" h-[0px] border-[1px] border-[#F2F2F2] mt-2"></div>
            {/* //////////////////////////////////////////////////////////////////////////////////// */}
            <div className="flex flex-row  items-center">
              <div className="flex flex-row gap-1 ">
                <Image
                  height={19.83}
                  width={22.51}
                  src="/checkout/Group.svg"
                  alt=""
                />
                <p className="text-lato font-[400] text-[14px] text-[#3C3C3C] w-40">
                  2GB eSIM Data For 15 Days in Canada
                </p>
              </div>
              <div className="flex flex-row justify-between w-130">
                <div className="w-35 flex justify-center">
                  <div className="w-[87px]  flex flex-row justify-between px-3 items-center rounded-[13.43px] border-1 text-center border-[#000000]    ">
                    <h1 className="text-[25px]  ">-</h1>
                    <h1 className="text-[12px] font-extrabold">1</h1>
                    <h1 className="text-[25px]  ">+</h1>
                  </div>
                </div>
                <div className="flex justify-left w-20">
                  <input
                    type="checkbox"
                    className="accent-[#EB662B] w-[24px] h-[32px] "
                  />
                </div>
                <button className="w-[64px] h-[32px] rounded-[6px] bg-[#EB662B] text-[#FFFFFF] ">
                  $24
                </button>
              </div>
            </div>
            <div className=" h-[0px] border-[1px] border-[#F2F2F2] mt-2"></div>
            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div className="flex flex-row  items-center">
              <div className="flex flex-row gap-1 mt-8 ">
                <Image
                  height={19.83}
                  width={22.51}
                  src="/checkout/Group.svg"
                  alt=""
                />
                <p className="text-lato font-[400] text-[14px] text-[#3C3C3C] w-40 ">
                  2GB eSIM Data For 15 Days in Canada
                </p>
              </div>
              <div className="flex flex-row justify-between w-130">
                <div className="w-35 flex justify-center mt-7">
                  <div className="w-[87px] h-[32px] border-1 rounded-[13px] flex flex-row items-center justify-between px-2 ">
                    <h1 className="text-[20px]  w-5 align-middle ">-</h1>
                    <h1 className="">1</h1>
                    <h1 className="text-[20px] w-5 align-middle ">+</h1>
                  </div>
                </div>
                <div className="flex justify-left w-20 mt-7">
                  <input
                    type="checkbox"
                    className="accent-[#EB662B] w-[24px] h-[32px] "
                  />
                </div>
                <button className="w-[64px] h-[32px] rounded-[6px] bg-[#EB662B] text-[#FFFFFF] mt-7 ">
                  $24
                </button>
              </div>
            </div>
            <div className=" h-[0px] border-[1px] border-[#F2F2F2] mt-2"></div>
            <div className="flex flex-row gap-2 mt-5">
              <Image
                height={14}
                width={20.01}
                src="checkout/Vector (1).svg"
                alt=""
              />
              <h1 className="lato-text font-[700] text-[22px] text-[#000000]">
                Pricing
              </h1>
            </div>

            <div className=" h-[31px] rounded-[10px] bg-[#F4F4F4] mt-4 flex flex-row justify-between px-4 items-center">
              <h1 className="text-[#EB662B]">Sub Total</h1>

              <h1 className="text-[#EB662B]">$48.00</h1>
            </div>

            <div className="flex flex-row mt-10 justify-between  ">
              <div className="flex flex-row gap-4 items-center">
                <h1 className="work Sans-text font-[500] text-[18px] text-[#000000]">
                  Coupon
                </h1>
                <div className="flex flex-row gap-2 items-center">
                  <button className="w-[98px] h-[30px] rounded-[6px]   bg-[#000000] text-[#FFFFFF] ">
                    offer_five
                  </button>
                  <Image
                    height={18}
                    width={18}
                    src="/checkout/Vector (2).svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <button className="w-[64px] h-[32px] rounded-[6px] bg-[#EB662B] text-[#FFFFFF]">
                  5% off
                </button>
                <Image
                  className=" ml-12 mt-2"
                  height={6}
                  width={12}
                  src="/checkout/Vector (3).svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-row gap-1">
              <Image height={24} width={24} src="/checkout/Frame.svg" alt="" />
              <h1 className="text-lato font-[700] text-[22px] text-[#000000]">
                Got a discount code?
              </h1>
            </div>
            <div className="flex flex-row justify-between mt-5">
              <input
                className="font-[400] lato-text text-[ 14px] rounded-[10px] w-[600px] h-[31px] bg-[#F4F4F4] "
                type="text"
                placeholder="Enter Code"
              />
              <button className="w-[96px] h-[31px] rounded-[10px] bg-[#000000] text-[#FFFFFF]">
                Apply
              </button>
            </div>
            <div className=" h-[31px] rounded-[10px] bg-[#F4F4F4] mt-4 flex flex-row justify-between px-4 items-center border-1 border-[#EB662B]">
              <h1 className="text-[#EB662B]">Total</h1>

              <h1 className="text-[#EB662B]">$48.00</h1>
            </div>
            <div>
              <button className="bg-[#EB662B] text-[#F4F4F4] w-full rounded-[18px] mt-[19px] h-[53px] flex flex-row justify-center gap-2 items-center">
                <Image
                  width={24}
                  height={24}
                  src="/checkout/lock-keyhole-white.svg"
                  alt=""
                />
                Go to Secure Checkout
              </button>
              <p className="lato-text font-[500] text-[14px] text-[#3C3C3C] mt-6">
                By clicking 'Go to Secure Checkout' you agree to our Terms of
                Use and Privacy Policy and will be redirected to Stripe for
                secure payment.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[500px]">
          <div>
            <div className="w-[580px] h-[556px] rounded-[13.43] border-[1.34px] p-8">
              <h1 className="text-center lato-text text-[43.33px] text-[#121212] font-bold">
                Login/Signup
              </h1>
              <div className="flex flex-col">
                <label
                  className="lato-text font-[400] text-[14.44px] text-[#121212]"
                  htmlFor=""
                >
                  Full Name
                </label>
                <input
                  className="h-[44.28px] rounded-[10.83] bg-[#F5F7FA] mt-3 lato-text font-[400] text-[12.64px] text-[#6B6B6B] px-5"
                  type="text"
                  placeholder="Example"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="lato-text font-[400] text-[14.44px] mt-4 text-[#121212]"
                  htmlFor=""
                >
                  Email
                </label>
                <input
                  className="h-[44.28px] relative rounded-[10.83] bg-[#F5F7FA] mt-3 lato-text font-[400] text-[12.64px] text-[#6B6B6B] px-5"
                  type="text"
                  placeholder="example@123.com"
                  name=""
                  id=""
                />
                <Image className="absolute right-20 top-91.5 " height={18.06} width={18.06} src="/hide.png" alt="" />
              </div>
              <div className="flex flex-row justify-center mt-15">
                <button className="h-[44px] rounded-[18px] bg-[#EB662B] text-[#FFFFFF] lato-text font-[400px] text-[20px] w-[231px] ">
                  Continue as Guest
                </button>
              </div>
              <div className="flex flex-row justify-center gap-5">
                <button className="w-[220px] h-[48px] rounded-[12px] bg-[#FFFFFF] border-[1px] mt-15 border-[#DCDBDD] flex flex-row items-center gap-2 p-2 ">
                  {" "}
                  <Image width={15} height={15} src="/Google.logo.svg" alt="" />
                  Continue with Google
                </button>
                <button className="w-[220px] h-[48px] rounded-[12px] bg-[#FFFFFF] border-[1px] mt-15 border-[#DCDBDD] flex flex-row items-center gap-2 p-2 ">
                  {" "}
                  <Image
                    height={19.63}
                    width={16}
                    src="/apple.logo.svg"
                    alt=""
                  />
                  Continue with Apple
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between w-[314px] items-center my-7">
            <Image
              width={24}
              height={24}
              src="/checkout/lock-keyhole.svg"
              alt=""
            />
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
      </div>
    </>
  );
};

export default CheckOutForm;
