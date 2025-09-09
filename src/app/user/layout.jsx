"use client";

import ProtectedRoute from "@/Components/ProtectedRoute/ProtectedRoute";

export default function layout({ children }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
