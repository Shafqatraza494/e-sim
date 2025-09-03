"use client";

import React from "react";

const Skeleton = ({ width = "100%", height = "20px", rounded = "8px" }) => {
  return (
    <div
      className="relative overflow-hidden bg-gray-300"
      style={{
        width,
        height,
        borderRadius: rounded,
      }}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1s_infinite] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
    </div>
  );
};

export default Skeleton;
