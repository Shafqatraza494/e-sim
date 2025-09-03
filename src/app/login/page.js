"use client";

import React, { useState } from "react";
import Image from "next/image";
import banner from "../../../public/Images/banner.png";
import apple from "../../../public/Images/Vector.png";
import google from "../../../public/Images/google.png";
import shape from "../../../public/Images/Star.jpg";
import white from "../../../public/Images/white-shape.png";
import styles from "./Login.module.css";
import { useMutationRequest } from "@/Hooks/useMutationRequest";
import Skeleton from "react-loading-skeleton";

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("8365p@powerscrews.com");
  const [password, setPassword] = useState("11223344");

  const loginMutation = useMutationRequest("post", "/login/");

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
    console.log(loginMutation);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation.mutate(
      { email, password },
      {
        onSuccess: (data) => {
          console.log("Logged in! Token:", data);

          localStorage.setItem("token", data.access_token);
        },
        onError: (error) => {
          console.error("Login failed", error);
        },
      }
    );

    console.log("email:", email);
    console.log("Password:", password);
  };
  return (
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
            <h1>Your only eSIM Solution</h1>
            <p>Instant. Secure. Global</p>
          </div>
        </div>
      </div>

      {/* Right Login Form Panel */}
      <div className={styles.rightPanel}>
        <div>
          {/* ✅ Skeleton when loading */}
          <form onSubmit={handleLogin}>
            <h1 className="lato-text font-[700] text-[43px] flex justify-center">
              Login
            </h1>

            <label className="lato-text font-[400] text-[14px] text-[#121212] mb-2">
              Email
            </label>
            <input
              type="text"
              placeholder="Example@123"
              className={styles.input1}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="lato-text font-[400] text-[14px] text-[#121212] mb-2">
              Password
            </label>
            <div className={styles.inputWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="*********"
                className={styles.input1}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className={styles.imgeye} onClick={togglePassword}>
                <Image
                  src={showPassword ? "/hide.png" : "/view.png"}
                  alt="Toggle password"
                  height={18}
                  width={18}
                />
              </div>
            </div>

            <div className="flex flex-row justify-between mb-5">
              <div className={styles.rememberMe}>
                <input type="checkbox" />
                <span className="lato-text font-[500] text-[12px] text-[#3D3D3D]">
                  Remember me
                </span>
              </div>

              <button
                type="submit"
                className="bg-[#EB662B] rounded-[18px] h-[44px] w-[162px] text-white"
              >
                Sign In
              </button>
            </div>
          </form>

          {!loginMutation.isLoading && (
            <>
              <h4 className="lato-text font-[400] text-[12px] ">
                Forgot Password?
              </h4>

              <p className={styles.signup}>
                Don’t have an account? <a href="#">Signup</a>
              </p>

              <div className={styles.btn2}>
                <button className={styles.btn}>
                  <Image width={15} height={15} src={google} alt="" /> Continue
                  with Google
                </button>
                <button className={styles.btn}>
                  <Image width={16} height={19} src={apple} alt="" /> Continue
                  with Apple
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
