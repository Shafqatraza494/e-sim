"use client";

import React, { useState } from "react";
import Image from "next/image";
import banner from "../../../public/Images/banner.png";
import apple from "../../../public/Images/Vector.png";
import google from "../../../public/Images/google.png";
import shape from "../../../public/Images/Star.jpg";
import white from "../../../public/Images/white-shape.png";
import styles from "./Signup.module.css";
import { useMutationRequest } from "@/Hooks/useMutationRequest";
import ProtectedRoute from "@/Components/ProtectedRoute/ProtectedRoute";

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("ahmed@gmail.com");
  const [password, setPassword] = useState("11223344");
  const [confirmPassword, setConfirmPassword] = useState("11223344");
  const [otp, setOtp] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [name, setName] = useState("");

  const sendOtp = useMutationRequest("post", "/send-otp");
  const verifyOtp = useMutationRequest("post", "/register");

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    sendOtp.mutate(
      { email, password },
      {
        onSuccess: (data) => {
          alert("OTP sent successfully!");
          setOtp(true);
        },
        onError: (err) => {
          console.error("❌ Backend Error:", err.response.data);
          console.error("❌ Status:", err.response.status);
        },
      }
    );
  };

  const handleVerify = (e) => {
    e.preventDefault();
    verifyOtp.mutate(
      { email, password, name, otp: otpValue },
      {
        onSuccess: (data) => {
          alert("OTP verified successfully!");
          localStorage.setItem("auth_token", data.token);
        },
        onError: (err) => {
          console.error("❌ Backend Error:", err.response.data);
          console.error("❌ Status:", err.response.status);
        },
      }
    );
  };

  return (
    <ProtectedRoute guestOnly>
      <div className={styles.container}>
        

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

        <div className={styles.rightPanel}>
          {" "}
          {!otp ? (
            <>
              <h1 className="text-center lato-text text-[43px] font-[700]">
                Signup
              </h1>
              <label className="lato-text font-[400] text-[14px] text-[#121212] mb-2">
                Email
              </label>
              <input
                type="text"
                placeholder="ali@786gmail.com"
                className={styles.input1}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="lato-text font-[400] text-[14px] text-[#121212] mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="**********"
                className={styles.input1}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className={styles.imgeye} onClick={togglePassword}>
                <Image
                  src={showPassword ? "/hide.png" : "/view.png"}
                  alt="toglepassword2"
                  height={18}
                  width={18}
                />
              </div>
              <label className="lato-text font-[400] text-[14px] text-[#121212] mb-2">
                Confirm password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="*********"
                className={styles.input1}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className="flex flex-row justify-between mb-5">
                <div className={styles.rememberMe}>
                  <input type="checkbox" />
                  <span className="lato-text font-[500] text-[12]">
                    Remember me
                  </span>
                </div>

                <button
                  onClick={handleSubmit}
                  className="bg-[#EB662B] text-white rounded-[18px] w-[162px] h-[44px] gap-[10px]"
                >
                  Signup
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-center lato-text text-[43px] font-[700]">
                Verify OTP
              </h1>
              <label className="lato-text font-[400] text-[14px] text-[#121212] mb-2">
                Enter Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className={styles.input1}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="lato-text font-[400] text-[14px] text-[#121212] mb-2">
                Enter OTP
              </label>
              <input
                type="text"
                placeholder="123456"
                className={styles.input1}
                value={otpValue}
                onChange={(e) => setOtpValue(e.target.value)}
              />
              <div className="flex flex-row justify-between mb-5">
                <div className={styles.rememberMe}>
                  <input type="checkbox" />
                  <span className="lato-text font-[500] text-[12]">
                    Remember me
                  </span>
                </div>

                <button
                  onClick={handleVerify}
                  className="bg-[#EB662B] text-white rounded-[18px] w-[162px] h-[44px] gap-[10px]"
                >
                  Verify
                </button>
              </div>
            </>
          )}
          <h4 className="lato-text font-[500] text-[12.64px] text-[#3D3D3D] ">
            Forgot Password?
          </h4>
          <p className={styles.signup}>
            Don’t have an account? <a href="#">Sign In</a>
          </p>
          <div className={styles.btn2}>
            <button className={styles.btn}>
              {" "}
              <Image className={styles.icon} src={google} alt="" /> Continue
              with Google
            </button>
            <button className={styles.btn}>
              {" "}
              <Image className={styles.icon1} src={apple} alt="" /> Continue
              with Apple
            </button>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default page;
