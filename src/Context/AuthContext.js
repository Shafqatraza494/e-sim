"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useFetch } from "@/Hooks/useFetch";
import { useMutationRequest } from "@/Hooks/useMutationRequest";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const stored = Cookies.get("auth_token");
    if (stored) setToken(stored);
  }, []);

  // 🔹 User data
  const { data: user, isLoading } = useFetch("user", "/user", {
    enabled: !!token,
    retry: false,
  });

  // 🔹 SIM data
  const { data: userSim, isLoading: isUserSimLoading } = useFetch(
    "sim",
    "/sim",
    {
      enabled: !!token,
      retry: false,
    }
  );

  const getSimById = (id) => {
    return useFetch(["sim", id], `/sim/${id}`, {
      enabled: !!token && !!id,
      retry: false,
    });
  };

  // 🔹 Logout
  const logoutMutation = useMutationRequest("post", "/logout", {
    onSuccess: () => {
      Cookies.remove("auth_token");
      setToken(null);
      queryClient.removeQueries(["user"]);
      queryClient.removeQueries(["sim"]);
      window.location.href = "/login";
    },
  });

  // 🔹 Delete user
  const deleteUserMutation = useMutationRequest("delete", "/user", {
    onSuccess: () => {
      Cookies.remove("auth_token");
      setToken(null);
      queryClient.removeQueries(["user"]);
      queryClient.removeQueries(["sim"]);
    },
  });

  // 🔹 Reset password flow
  const sendResetOtpMutation = useMutationRequest("post", "/password-reset");
  const verifyResetOtpMutation = useMutationRequest(
    "post",
    "/password-reset/submit"
  );

  // 🔹 Register flow
  const sendOtpMutation = useMutationRequest("post", "/send-otp");
  const verifyOtpMutation = useMutationRequest("post", "/register", {
    onSuccess: (data) => {
      if (data?.token) {
        Cookies.set("auth_token", data.token, {
          expires: 60,
          secure: true,
          sameSite: "Strict",
        });
        setToken(data.token);
        queryClient.invalidateQueries(["user"]);
        queryClient.invalidateQueries(["sim"]);
      }
    },
  });

  // 🔹 Login helper
  const login = (newToken) => {
    Cookies.set("auth_token", newToken, {
      expires: 60,
      secure: true,
      sameSite: "Strict",
    });
    setToken(newToken);
    queryClient.invalidateQueries(["user"]);
    queryClient.invalidateQueries(["sim"]);
  };

  // 🔹 Checkout Summary
  const checkoutSummaryMutation = useMutationRequest(
    "post",
    "/cart/checkout/summary"
  );
  // 🔹 Checkout (final order creation / payment init)
  const checkoutMutation = useMutationRequest("post", "/cart/checkout");

  return (
    <AuthContext.Provider
      value={{
        user,
        userSim,
        token,
        isAuthenticated: !!user,
        isLoading,
        isUserSimLoading,
        login,
        logout: logoutMutation.mutate,
        deleteUser: deleteUserMutation.mutate,
        getSimById,

        // Register
        sendOtp: sendOtpMutation.mutate,
        verifyOtp: verifyOtpMutation.mutate,
        isSendingOtp: sendOtpMutation.isPending,
        isVerifyingOtp: verifyOtpMutation.isPending,

        // Reset password
        sendresetOtp: sendResetOtpMutation.mutate,
        isSendresetOtp: sendResetOtpMutation.isPending,
        verifyResetOtp: verifyResetOtpMutation.mutate,
        isVerifyResetOtp: verifyResetOtpMutation.isPending,

        // Checkout summary
        checkoutSummary: checkoutSummaryMutation.mutate,
        isCheckoutSummaryLoading: checkoutSummaryMutation.isPending,
        checkoutSummaryData: checkoutSummaryMutation.data,
        checkoutSummaryError: checkoutSummaryMutation.error,

        checkout: checkoutMutation.mutate,
        isCheckoutLoading: checkoutMutation.isPending,
        checkoutData: checkoutMutation.data,
        checkoutError: checkoutMutation.error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
