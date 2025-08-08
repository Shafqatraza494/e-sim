"use client";

import React, { useState } from "react";
import Image from "next/image";
import banner from "../../../public/Images/banner.png";
import apple from "../../../public/Images/Vector.png";
import google from "../../../public/Images/google.png";
import shape from "../../../public/Images/Star.jpg";
import white from "../../../public/Images/white-shape.png";
import styles from "./Signup.module.css";

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [ConfirmPassword, setConfirmPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const toglePassword = () => {
    setConfirmPassword((prev) => !prev);
  };
  return (
    <div className={styles.container}>
      {/* Left Image Panel */}

      <div className={styles.leftPanel}>
        <div className={styles.overlay}>
          <div className={styles.midpanel}>
            <h3>Excellent</h3>
            <div className={styles.img}>
              <Image height={14} src={shape} alt="" />
              <Image height={14} src={shape} alt="" />
              <Image height={14} src={shape} alt="" />
              <Image height={14} src={shape} alt="" />
              <Image height={14} src={shape} alt="" />
            </div>
            <div className={styles.div1}>
              {" "}
              <p>436 reviews on</p>
            </div>
            <div className={styles.h3}>
              <Image height={14} src={white} alt="" />
              <h3>Trustpilot</h3>
            </div>
          </div>
          <div className={styles.overlayText}>
            <h1 className="lato-text">Your only eSIM Solution</h1>
            <p className="lato-text">Instant. Secure. Global</p>
          </div>
        </div>
      </div>

      {/* Right Login Form Panel */}
      <div className={styles.rightPanel}>
        {" "}
        <h1 className="text-center lato-text text-[43px] font-[700]">Signup</h1>
        <label className="lato-text font-[400] text-[14px] text-[#121212] mb-2">Email</label>
        <input
          type="text"
          placeholder="ali@786gmail.com"
          className={styles.input1}
        />
        <label className="lato-text font-[400] text-[14px] text-[#121212] mb-2">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="**********"
          className={styles.input1}
        />
        <div className={styles.imgeye} onClick={togglePassword}>
          <Image
            src={showPassword ? "/hide.png" : "/view.png"}
            alt="toglepassword2"
            height={18}
            width={18}
          />
        </div>
        <label className="lato-text font-[400] text-[14px] text-[#121212] mb-2">Confirm password</label>
        <input
          type={ConfirmPassword ? "text" : "password"}
          placeholder="*********"
          className={styles.input1}
        />
        <div className={styles.imgeye1} onClick={toglePassword}>
          <Image
            src={ConfirmPassword ? "/hide.png" : "/view.png"}
            alt="togglePassword"
            width={18}
            height={18}
          />
        </div>
        <div className="flex flex-row justify-between mb-5">
          <div className={styles.rememberMe}>
            <input type="checkbox" />
            <span className="lato-text font-[500] text-[12]">Remember me</span>
          </div>

          <button className="bg-[#EB662B] text-white rounded-[18px] w-[162px] h-[44px] gap-[10px]">Signup</button>
        </div>
        <h4 className="lato-text font-[500] text-[12.64px] text-[#3D3D3D] ">Forgot Password?</h4>
        <p className={styles.signup}>
          Don’t have an account? <a href="#">Sign In</a>
        </p>
        <div className={styles.btn2}>
          <button className={styles.btn}>
            {" "}
            <Image className={styles.icon} src={google} alt="" /> Continue with
            Google
          </button>
          <button className={styles.btn}>
            {" "}
            <Image className={styles.icon1} src={apple} alt="" /> Continue with
            Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
