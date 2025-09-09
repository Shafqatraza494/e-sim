"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
import { LoaderLink } from "@/Context/LoaderLink";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("yarsherry0302@gmail.com");
  const [password, setPassword] = useState("1234567890");

  const [forgotMode, setForgotMode] = useState(false);
  const [forgotModeOtpSend, setForgotModeOtpSend] = useState(false);

  const [resetGmail, setResetGmail] = useState("");
  const [resetPassword, setResetPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetPin, setResetPin] = useState("");

  const router = useRouter();
  const {
    login,
    sendresetOtp,
    isSendresetOtp,
    verifyResetOtp,
    isVerifyResetOtp,
  } = useAuth();

  //  Mutations
  const loginMutation = useMutationRequest("post", "/login/");

  const togglePassword = () => setShowPassword((prev) => !prev);

  //  Login handler
  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation.mutate(
      { email, password },
      {
        onSuccess: (data) => {
          login(data.access_token);
          toast.success("Login successful!");
          router.push("/user/manage-esim");
        },
        onError: (error) => {
          toast.error(error.message || "Login failed. Please try again.");
        },
      }
    );
  };

  //  Forgot handler → send OTP
  const handleForgot = (e) => {
    e.preventDefault();
    sendresetOtp(
      { email },
      {
        onSuccess: (data) => {
          toast.success(data.message || "Reset mail sent!");
          setForgotModeOtpSend(true);
        },
        onError: (error) => {
          toast.error(error.message || "Failed to send reset mail.");
        },
      }
    );
  };

  //  Reset password handler
  const handleResetPassword = (e) => {
    e.preventDefault();

    if (resetPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    verifyResetOtp(
      {
        email,
        password: resetPassword,
        password_confirmation: confirmPassword,
        token: resetPin,
      },
      {
        onSuccess: (data) => {
          toast.success(data.message || "Password reset successful!");
          setForgotMode(false);
          setForgotModeOtpSend(false);
          router.push("/login");
        },
        onError: (error) => {
          toast.error(error.message || "Failed to reset password.");
        },
      }
    );
  };

  return (
    <ProtectedRoute guestOnly>
      <div className={styles.container}>
        {/* left panel */}
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

        {/* right panel */}
        <div className={styles.rightPanel}>
          {/*  LOGIN FORM */}
          {!forgotMode ? (
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
                  <span className="lato-text font-[500] text-[12]">
                    Remember me
                  </span>
                </div>

                <button
                  type="submit"
                  className="bg-[#EB662B] rounded-[18px] h-[44px] w-[162px] text-white disabled:opacity-10 flex items-center justify-center"
                  disabled={loginMutation.isPending}
                >
                  {loginMutation.isPending ? "Signing in..." : "Sign In"}
                </button>
              </div>
            </form>
          ) : !forgotModeOtpSend ? (
            <form onSubmit={handleForgot}>
              <h1 className="lato-text font-[700] text-[36px] flex justify-center">
                Forgot Password
              </h1>
              <label className="lato-text text-sm mb-2">Enter your Email</label>
              <input
                type="text"
                placeholder="Example@123"
                className={styles.input1}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-[#EB662B] rounded-[18px] h-[44px] w-[162px] text-white disabled:opacity-10 flex items-center justify-center"
                  disabled={isSendresetOtp}
                >
                  {isSendresetOtp ? "Sending..." : "Send Reset Mail"}
                </button>
              </div>
            </form>
          ) : (
            /* RESET PASSWORD FORM (after OTP) */
            <form onSubmit={handleResetPassword}>
              <h1 className="lato-text font-[700] text-[36px] flex justify-center">
                Reset Password
              </h1>

              <label className="lato-text text-sm mb-2">Gmail</label>
              <input
                type="gmail"
                className={styles.input1}
                value={resetGmail}
                onChange={(e) => setResetGmail(e.target.value)}
              />
              <label className="lato-text text-sm mb-2">New Password</label>
              <input
                type="password"
                className={styles.input1}
                value={resetPassword}
                onChange={(e) => setResetPassword(e.target.value)}
              />

              <label className="lato-text text-sm mb-2">Confirm Password</label>
              <input
                type="password"
                className={styles.input1}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <label className="lato-text text-sm mb-2">Pin</label>
              <input
                type="text"
                placeholder="1234"
                className={styles.input1}
                value={resetPin}
                onChange={(e) => setResetPin(e.target.value)}
              />

              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-[#EB662B] rounded-[18px] h-[44px] w-[162px] text-white disabled:opacity-10 flex items-center justify-center"
                  disabled={isVerifyResetOtp}
                >
                  {isVerifyResetOtp ? "Changing..." : "Change Password"}
                </button>
              </div>
            </form>
          )}

          {/* toggle link */}
          <div className="flex justify-between items-center mt-3">
            <button
              type="button"
              onClick={() => {
                setForgotMode((prev) => !prev);
                setForgotModeOtpSend(false);
              }}
              className="text-black no-underline text-sm"
            >
              {forgotMode ? "< Back to Login" : "Forgot Password?"}
            </button>
          </div>

          <p className={styles.login}>
            Don’t have an account?{" "}
            <LoaderLink href="/signup" className="text-blue-500 underline">
              Signup
            </LoaderLink>
          </p>

          <div className={styles.btn2}>
            <button className={styles.btn}>
              <Image width={15} height={15} src={google} alt="" /> Continue with
              Google
            </button>
            <button className={styles.btn}>
              <Image width={16} height={19} src={apple} alt="" /> Continue with
              Apple
            </button>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Page;
