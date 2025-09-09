"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import banner from "../../../public/Images/banner.png";
import apple from "../../../public/Images/Vector.png";
import google from "../../../public/Images/google.png";
import shape from "../../../public/Images/Star.jpg";
import white from "../../../public/Images/white-shape.png";
import styles from "./Signup.module.css";
import ProtectedRoute from "@/Components/ProtectedRoute/ProtectedRoute";
import toast from "react-hot-toast";
import { useAuth } from "@/Context/AuthContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { LoaderLink } from "@/Context/LoaderLink";

const Page = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("ahmed@gmail.com");
  const [password, setPassword] = useState("11223344");
  const [confirmPassword, setConfirmPassword] = useState("11223344");
  const [otp, setOtp] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [name, setName] = useState("");

  const { sendOtp, verifyOtp, isSendingOtp, isVerifyingOtp } = useAuth();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    sendOtp(
      { email, password },
      {
        onSuccess: () => {
          toast.success("OTP sent successfully!");
          setOtp(true);
        },
        onError: (error) => {
          console.log(error);

          toast.error("Failed to send OTP.");
        },
      }
    );
  };

  const handleVerify = (e) => {
    e.preventDefault();
    verifyOtp(
      { email, password, name, otp: otpValue },
      {
        onSuccess: () => {
          toast.success("OTP verified successfully!");
          router.push("/login");
        },
        onError: () => toast.error("Failed to verify OTP."),
      }
    );
  };

  return (
    <ProtectedRoute guestOnly>
      <div className={styles.container}>
        {/* Left Panel */}
        <div className={styles.leftPanel}>
          <div className={styles.overlay}>
            <div className={styles.midpanel}>
              <h3>Excellent</h3>
              <div className={styles.img}>
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Image key={i} height={14} src={shape} alt="" />
                  ))}
              </div>
              <div className={styles.div1}>
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

        {/* Right Panel */}
        <div className={styles.rightPanel}>
          {!otp ? (
            <>
              <h1 className="text-center lato-text text-[43px] font-[700]">
                Signup
              </h1>
              <label className="lato-text text-[14px] mb-2">Email</label>
              <input
                type="text"
                className={styles.input1}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="lato-text text-[14px] mb-2">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className={styles.input1}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className={styles.imgeye} onClick={togglePassword}>
                <Image
                  src={showPassword ? "/hide.png" : "/view.png"}
                  alt="toggle password"
                  height={18}
                  width={18}
                />
              </div>
              <label className="lato-text text-[14px] mb-2">
                Confirm password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className={styles.input1}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className="flex justify-between mb-5">
                <div className={styles.rememberMe}>
                  <input type="checkbox" />
                  <span className="lato-text font-[500] text-[12]">
                    Remember me
                  </span>
                </div>
                {isSendingOtp ? (
                  <Skeleton width={162} height={44} borderRadius={18} />
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="bg-[#EB662B] text-white rounded-[18px] w-[162px] h-[44px]"
                  >
                    Signup
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              <h1 className="text-center lato-text text-[43px] font-[700]">
                Verify OTP
              </h1>
              <label className="lato-text text-[14px] mb-2">Enter Name</label>
              <input
                type="text"
                className={styles.input1}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="lato-text text-[14px] mb-2">Enter OTP</label>
              <input
                type="text"
                className={styles.input1}
                value={otpValue}
                onChange={(e) => setOtpValue(e.target.value)}
              />
              <div className="flex justify-between mb-5">
                <div className={styles.rememberMe}>
                  <input type="checkbox" />
                  <span className="lato-text font-[500] text-[12]">
                    Remember me
                  </span>
                </div>
                {isVerifyingOtp ? (
                  <Skeleton width={162} height={44} borderRadius={18} />
                ) : (
                  <button
                    onClick={handleVerify}
                    className="bg-[#EB662B] text-white rounded-[18px] w-[162px] h-[44px]"
                  >
                    Verify
                  </button>
                )}
              </div>
            </>
          )}

          <p className={styles.signup}>
            Don’t have an account?{" "}
            <LoaderLink href="/login">Sign In</LoaderLink>
          </p>
          <div className={styles.btn2}>
            <button className={styles.btn}>
              <Image className={styles.icon} src={google} alt="" /> Continue
              with Google
            </button>
            <button className={styles.btn}>
              <Image className={styles.icon1} src={apple} alt="" /> Continue
              with Apple
            </button>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Page;
