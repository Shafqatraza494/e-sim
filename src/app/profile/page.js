import ButtonFill from "@/Components/GlobalUi/ui/Buttons/ButtonFill";
import ButtonOutline from "@/Components/GlobalUi/ui/Buttons/ButtonOutline";
import Header from "@/Components/Header/Header";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { MdDelete, MdLogout } from "react-icons/md";
import Hero from "@/Components/Hero/Hero";
import Image from "next/image";
import React from "react";
import {
  faClapperboard,
  faDeleteLeft,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const page = () => {
  return (
    <>
      <div className="mx-10">
        <Hero heading={"profile"} />
        <div className="mx-5">
          <div className="flex flex-row justify-between border-1 rounded-[20px] p-4 ">
            <div className="flex flex-row gap-2">
              <Image
                className="rounded-full object-center  "
                width={62}
                height={62}
                src="/profile-img.jpg"
                alt="profile"
              />
              <div className="flex flex-col w-[200px]">
                <h1 className="font-bold text-[20px]">Aana Lisa</h1>
                <div className="flex flex-row gap-1 items-center">
                  {" "}
                  <Image width={18} height={18} src="/Vector (1).png" alt="" />
                  <h4 className="text-[14px] text-[#7D7D7D]"> Change Image</h4>
                </div>
              </div>
            </div>
            <div className="justify-between flex flex-row gap-[30px]">
              <button className="border-1 border-[#BEBEBE] w-[193] h-[60px] rounded-2xl text-[20px] font-[400] text-[#BEBEBE]">
                Cancel
              </button>
              <div className="text-white h-[60px] bg-[#EB662B] border-1 w-[193]  rounded-2xl items-center flex flex-col justify-center font-[400] text-[20px]">
                <button> Save Changes</button>
              </div>
            </div>
          </div>
          <div className="border-1 mt-8 rounded-[20px] py-[23px] px-[49px]">
            <h1 className="font-bold pb-8 text-[28px]">Acount Information</h1>
            <div className="flex flex-row  gap-[49px] ">
              <div className="flex flex-col items-start gap-6 ">
                <div className="flex flex-col gap-[13px]">
                  <label className="flex flex-row gap-2" htmlFor="">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-black-500 text-xl h-[15px] mt-1"
                    />{" "}
                    Full Name
                  </label>
                  <input
                    className="bg-white border-[#BEBEBE] rounded-[15px] border-1 h-[48px] w-[280px]"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col gap-[13px]">
                  <label className="flex flex-row gap-2" htmlFor="">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="text-black-500 text-xl h-[15px] mt-1"
                    />
                    {""}
                    Current Password
                  </label>

                  <input
                    className="bg-white rounded-[15px] border-[#BEBEBE]  border-1 h-[48px] w-[280px] "
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <button className="bg-white rounded-[15px] flex flex-row gap-2 items-center border-[#BEBEBE]  border-1 h-[48px] w-[200px]">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="text-black-500 text-xl h-[15px]  ml-2"
                  />
                  {""}
                  Create New Password
                </button>
              </div>
              <div className="flex flex-col">
                <h1 className="flex flex-row gap-3">
                  <FontAwesomeIcon
                    icon={faClapperboard}
                    className="text-black-500 text-xl h-[15px] mt-1"
                  />
                  {""}
                  Add Bio
                </h1>
                <textarea
                  className="w-[384px] bg-white border-1 border-[#BEBEBE] h-[156px] rounded-[15px] mt-3 "
                  name=""
                  id=""
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="border-1 mt-10 rounded-[20px] py-[23px] px-[49px] mx-5">
          <h1 className="text-black font-bold w-[700] text-[28px]">
            Delet Account
          </h1>
          <p className="text-[#FF0000] mt-5 font-[400] flex flex-row gap-2  ">
            <FontAwesomeIcon icon={faTrash} className=" h-[15px] mt-1" />
            This will Delete your account permanently.
          </p>
          <p className="mt-8 text-[#BEBEBE]">
            Note: This process can take while. Once account is deleted it cant
            be recovered.
          </p>
          <div className="text-white h-[60px] bg-[#FF0000] border-1 w-[193]  rounded-2xl items-center flex flex-col justify-center font-[400] text-[20px] mt-9">
            <button> Save Changes</button>
          </div>
        </div>
      </div>
      <div className="border-1 mt-10 mb-10  gap-2 mx-15 rounded-[20px] flex flex-col py-[40px] px-[40px]">
        <div className="flex flex-row gap-4">
          <MdLogout className="text-black text-[30px] mt-1   " />
          <h1 className="flex flex-col w-[700] text-[28px] font-bold">
            {" "}
            Logout Account
          </h1>
        </div>
        <p className=" text-[#BEBEBE]">Logout form here.</p>
        <div className="text-[#FF0000] h-[60px]  border-1 w-[193]  rounded-2xl items-center flex flex-col justify-center font-[400] text-[20px] mt-5">
          <button>Logout</button>
        </div>
      </div>
    </>
  );
};

export default page;
