"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        success: {
          style: {
            background: "#EB662B",
            color: "#fff",
            borderRadius: "12px",
            padding: "12px 16px",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#FF9B65",
          },
        },
        error: {
          style: {
            background: "#ef4444", 
            color: "#fff",
            borderRadius: "12px",
            padding: "12px 16px",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#ef4444",
          },
        },
      }}
    />
  );
}
