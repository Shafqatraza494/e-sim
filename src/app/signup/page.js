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
            <h1>Your only eSIM Solution</h1>
            <p>Instant. Secure. Global</p>
          </div>
        </div>
      </div>

      {/* Right Login Form Panel */}
      <div className={styles.rightPanel}>
        <h1>Signup</h1>

        <label className={styles.label}>Email</label>
        <input type="text" className={styles.input1} />



        <label className={styles.label}>Password</label>
        <input type="password" className={styles.input1} />
<Image src="/view.png" width={14} height={14} alt="" />



        <label className={styles.label}>Confirm password</label>
        <input type="text" className={styles.input1} />
        <div className={styles.checkbox}>
          <div className={styles.rememberMe}>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>

          <button className={styles.signInBtn}>Signup</button>
        </div>

        <h4 className={styles.forgot}>Forgot Password?</h4>

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
            <Image className={styles.icon} src={apple} alt="" /> Continue with
            Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
