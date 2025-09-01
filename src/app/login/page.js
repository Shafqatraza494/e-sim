"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import banner from "../../../public/Images/banner.png";
import apple from "../../../public/Images/Vector.png";
import google from "../../../public/Images/google.png";
import shape from "../../../public/Images/Star.jpg";
import white from "../../../public/Images/white-shape.png";
import styles from "./Login.module.css";
import { useMutationRequest } from "@/Hooks/useMutationRequest";
import { useAuth } from "@/Context/AuthContext";
import Skeleton from "react-loading-skeleton";
import ProtectedRoute from "@/Components/ProtectedRoute/ProtectedRoute";
import toast from "react-hot-toast";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("8365p@powerscrews.com");
  const [password, setPassword] = useState("11223344");
  const router = useRouter();
  const { login } = useAuth();

  const loginMutation = useMutationRequest("post", "/login/");

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation.mutate(
      { email, password },
      {
        onSuccess: (data) => {
          localStorage.setItem("auth_token", data.access_token);
          login(data.access_token);
          toast.success("Login successful!");
          router.push("/user/manage-esim");
        },
        onError: (error) => {
          console.log("Login failed:", error.message);
          toast.error(error.message || "Login failed. Please try again.");
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
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <Image key={i} height={14} src={shape} alt="star" />
                  ))}
              </div>
              <p>436 reviews on</p>
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

        <div className={styles.rightPanel}>
          <form onSubmit={handleLogin}>
            <h1 className="lato-text font-[700] text-[43px] flex justify-center">
              Login
            </h1>

            <label className="lato-text text-sm mb-2">Email</label>
            <input
              type="text"
              placeholder="Example@123"
              className={styles.input1}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="lato-text text-sm mb-2">Password</label>
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
                <span className="text-xs">Remember me</span>
              </div>

              <button
                type="submit"
                className="bg-[#EB662B] rounded-[18px] h-[44px] w-[162px] text-white disabled:opacity-10 flex items-center justify-center"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? (
                  <Skeleton
                    height={44}
                    width={162}
                    baseColor="#ffffff33"
                    highlightColor="black"
                    borderRadius={18}
                  />
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
          </form>

          <>
            <a href="">
              <h4 className="lato-text text-xs mt-3">Forgot Password?</h4>
            </a>

            <p className={styles.signup}>
              Don’t have an account?{" "}
              <a href="/signup" className="text-blue-500 underline">
                Signup
              </a>
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
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Page;
