import Image from "next/image";
import React from "react";
import Banner from "../GlobalUi/DownloadBanner/Banner";
import Faq from "../Home/FAQSection/Faq";

function Form() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full p-5 bg-gray-300 rounded-[30px] my-10">
        <div className="w-[100%]  bg-[#FFD0B7] rounded-[30px] p-5 flex md:flex-row flex-col gap-20">
          <div className="md:w-[50%] w-full text-white">
            <h1 className="pb-5 bayon-text text-white text-[30px]">
              Contact Us
            </h1>
            <form action="" className="flex flex-col gap-10">
              <div className="flex flex-row gap-5 justify-center">
                <div className="flex flex-col gap-2 w-1/2">
                  <label htmlFor="fullname">Full Name</label>
                  <input
                    className="py-3 px-4 bg-white border-1 border-black rounded-[20px] placeholder-gray-400"
                    type="text"
                    id="fullname"
                    name="fullname"
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                  <label htmlFor="email">Email</label>
                  <input
                    placeholder="Enter your email address"
                    className="py-3 px-4 bg-white border-1 border-black rounded-[20px] placeholder-gray-400"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone">Phone</label>
                <input
                  placeholder="Enter your phone number"
                  className="py-3 px-4 bg-white border-1 border-black rounded-[20px] placeholder-gray-400"
                  type="text"
                  id="phone"
                  name="phone"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message">Message</label>
                <textarea
                  placeholder="Enter your message"
                  className="py-3 px-4 bg-white border-1 border-black rounded-[20px] placeholder-gray-400"
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="flex flex-row items-center gap-2">
                <input type="checkbox" />
                <h1 className="underline">Accept Terms and Conditions</h1>
              </div>
              <button
                type="submit"
                className="bg-[#000000] text-white py-3 px-6 rounded-[20px] "
              >
                Submit
              </button>
            </form>
          </div>
          <div className="md:w-[50%] w-full flex flex-col gap-10 mt-4">
            <div className="rounded-[30px] h-[150px] bg-white p-10 flex items-start gap-3">
              <Image width={38} height={38} src="/contact/phone.svg" alt="" />
              <div className="flex flex-col gap-2 text-[#737373]">
                <h1>Phone</h1>
                <p>+123 456 789</p>
              </div>
            </div>
            <div className="rounded-[30px] h-[150px] bg-white p-10 flex items-start gap-3">
              <Image width={38} height={38} src="/contact/email.svg" alt="" />
              <div className="flex flex-col gap-2 text-[#737373]">
                <h1>Email</h1>
                <p>email@esim.com</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <Image
                width={71}
                height={38}
                src="/contact/whatsapp.svg"
                alt=""
              />
              <h1 className="lato-text text-[15px] text-[#EB662B]">
                Whatsapp + Chat | 24/7 Availability
              </h1>
            </div>
            <div className="flex sm:flex-row flex-col items-center gap-6 w-[100%]">
              <div className="bg-white rounded-[100px] p-3 flex justify-center items-center sm:w-[40%]">
                <a href="#" className="flex items-center gap-3">
                  <Image
                    width={38}
                    height={38}
                    src="/contact/playstore.svg"
                    alt=""
                  />
                  <div>
                    <p className="lato-text text-[13px]">Get It On</p>
                    <h1 className="lato-text text-[18px]">Google Play</h1>
                  </div>
                </a>
              </div>
              <div className="bg-white rounded-[100px] p-3 flex justify-center items-center sm:w-[40%]">
                <a href="#" className="flex items-center gap-3">
                  <Image
                    width={38}
                    height={38}
                    src="/contact/appstore.svg"
                    alt=""
                  />
                  <div>
                    <p className="lato-text text-[13px]">Download on the</p>
                    <h1 className="lato-text text-[18px]">App Store</h1>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Form;
