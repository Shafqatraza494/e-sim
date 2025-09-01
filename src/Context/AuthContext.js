"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { useQueryClient } from "@tanstack/react-query";
import { useFetch } from "@/Hooks/useFetch";
import { useMutationRequest } from "@/Hooks/useMutationRequest";
import { Router } from "next/router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("auth_token");
    if (stored) setToken(stored);
  }, []);

  const { data: user, isLoading } = useFetch("user", "/user", {
    enabled: !!token,
    retry: false,
  });

  const logoutMutation = useMutationRequest("post", "/logout", {
    onSuccess: () => {
      localStorage.removeItem("auth_token");
      setToken(null);
      queryClient.removeQueries(["user"]);
      window.location.href = "/login";
    },
  });

  const deleteUserMutation = useMutationRequest("delete", "/user", {
    onSuccess: () => {
      localStorage.removeItem("auth_token");
      setToken(null);
      queryClient.removeQueries(["user"]);
    },
  });

  const login = (newToken) => {
    localStorage.setItem("auth_token", newToken);
    setToken(newToken);
    queryClient.invalidateQueries(["user"]);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout: logoutMutation.mutate,
        deleteUser: deleteUserMutation.mutate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
