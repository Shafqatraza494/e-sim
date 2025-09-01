"use client";

import Hero from "@/Components/Hero/Hero";
import Image from "next/image";
import React, { useState } from "react";
import {
  faClapperboard,
  faLock,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdLogout } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProtectedRoute from "@/Components/ProtectedRoute/ProtectedRoute";
import { useAuth } from "@/Context/AuthContext";

const Page = () => {
  const { user, isLoading, isAuthenticated, logout, deleteUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className="p-10 text-center text-red-500">
        Failed to load profile
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="mx-14">
        <Hero heading={"profile"} />
        <div className="">
          <div className="flex flex-row justify-between border-1 rounded-[20px] p-4">
            <div className="flex flex-row gap-2">
              {isLoading ? (
                <Skeleton circle width={62} height={62} />
              ) : (
                <Image
                  className="rounded-full object-center"
                  width={62}
                  height={62}
                  src={user?.profileImage || "/profile-img.jpg"}
                  alt="profile"
                />
              )}
              <div className="flex flex-col w-[200px]">
                <h1 className="font-bold text-[20px] text-black">
                  {isLoading ? <Skeleton width={120} /> : user?.data.name}
                </h1>
                {/* Upload Image Button appears only in edit mode */}
                {!isLoading && (
                  <div className="flex flex-row gap-1 items-center cursor-pointer">
                    <Image
                      width={18}
                      height={18}
                      src="/Vector (1).png"
                      alt=""
                    />
                    <h4 className="text-[14px] text-[#7D7D7D]">Upload Image</h4>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-row gap-[20px] items-center">
              {isLoading ? (
                <>
                  <Skeleton width={193} height={60} />
                  <Skeleton width={193} height={60} />
                </>
              ) : (
                <>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="border border-[#BEBEBE] w-[193px] h-[60px] rounded-2xl text-[20px] font-[400] text-black hover:bg-gray-100"
                    >
                      Edit
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="border border-[#BEBEBE] w-[193px] h-[60px] rounded-2xl text-[20px] font-[400] text-[#BEBEBE] hover:bg-gray-100"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          setIsEditing(false);
                        }}
                        className="text-white h-[60px] bg-[#EB662B] border w-[193px] rounded-2xl flex items-center justify-center font-[400] text-[20px] hover:bg-orange-600"
                      >
                        Save Changes
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Account Information */}
          {isEditing && (
            <div className="border-1 mt-8 rounded-[20px] py-[23px] px-[49px]">
              <h1 className="font-bold pb-8 text-[28px]">
                Account Information
              </h1>
              <div className="flex flex-row gap-[49px] ">
                <div className="flex flex-col items-start gap-6 ">
                  <div className="flex flex-col gap-[13px]">
                    <label className="flex flex-row gap-2">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="text-black-500 text-xl h-[15px] mt-1"
                      />
                      Full Name
                    </label>
                    {isLoading ? (
                      <Skeleton width={280} height={48} />
                    ) : (
                      <input
                        className="bg-white border-[#BEBEBE] rounded-[15px] border-1 h-[48px] w-[280px] px-2"
                        type="text"
                        disabled={!isEditing}
                        defaultValue={user?.data.name}
                      />
                    )}
                  </div>

                  {/* Password */}
                  <div className="flex flex-col gap-[13px]">
                    <label className="flex flex-row gap-2">
                      <FontAwesomeIcon
                        icon={faLock}
                        className="text-black-500 text-xl h-[15px] mt-1"
                      />
                      Current Password
                    </label>
                    {isLoading ? (
                      <Skeleton width={280} height={48} />
                    ) : (
                      <input
                        className="bg-white rounded-[15px] border-[#BEBEBE] border-1 h-[48px] w-[280px] px-2"
                        type="password"
                        disabled={!isEditing}
                      />
                    )}
                  </div>

                  {/* Create New Password */}
                  {!isLoading && isEditing && (
                    <button className="bg-white rounded-[15px] flex flex-row gap-2 items-center border-[#BEBEBE] border-1 h-[48px] w-[250px]">
                      <FontAwesomeIcon
                        icon={faLock}
                        className="text-black-500 text-xl h-[15px] ml-2"
                      />
                      Create New Password
                    </button>
                  )}
                </div>

                {/* Bio */}
                <div className="flex flex-col">
                  <h1 className="flex flex-row gap-3">
                    <FontAwesomeIcon
                      icon={faClapperboard}
                      className="text-black-500 text-xl h-[15px] mt-1"
                    />
                    Add Bio
                  </h1>
                  {isLoading ? (
                    <Skeleton width={384} height={156} />
                  ) : (
                    <textarea
                      className="w-[384px] bg-white border-1 border-[#BEBEBE] h-[156px] rounded-[15px] mt-3 p-2"
                      defaultValue={user?.data.bio || ""}
                      disabled={!isEditing}
                    ></textarea>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Delete Account */}
        <div className="border-1 mt-10 rounded-[20px] py-[23px] px-[49px] ">
          <h1 className="text-black font-bold w-[700] text-[28px]">
            Delete Account
          </h1>
          <p className="text-[#FF0000] mt-5 font-[400] flex flex-row gap-2">
            <FontAwesomeIcon icon={faTrash} className="h-[15px] mt-1" />
            This will delete your account permanently.
          </p>
          <p className="mt-8 text-[#BEBEBE]">
            Note: This process can take a while. Once account is deleted it
            can’t be recovered.
          </p>
          {isLoading ? (
            <Skeleton width={193} height={60} />
          ) : (
            <button
              onClick={() => {
                if (confirm("Are you sure you want to delete your account?")) {
                  deleteUser();
                }
              }}
              className="text-white h-[60px] bg-[#FF0000] border w-[193px] rounded-2xl flex items-center justify-center font-[400] text-[20px] mt-9 hover:bg-red-600"
            >
              Delete Account
            </button>
          )}
        </div>

        {/* Logout */}
        <div className="border-1 mt-10 mb-10 gap-2  rounded-[20px] flex flex-col py-[40px] px-[40px]">
          <div className="flex flex-row gap-4">
            <MdLogout className="text-black text-[30px] mt-1" />
            <h1 className="flex flex-col w-[700] text-[28px] font-bold">
              Logout Account
            </h1>
          </div>
          <p className="text-[#BEBEBE]">Logout from here.</p>
          {isLoading ? (
            <Skeleton width={193} height={60} />
          ) : (
            <button
              onClick={() => logout()}
              className="text-[#FF0000] h-[60px] border w-[193px] rounded-2xl flex items-center justify-center font-[400] text-[20px] mt-5 hover:bg-gray-100"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Page;
