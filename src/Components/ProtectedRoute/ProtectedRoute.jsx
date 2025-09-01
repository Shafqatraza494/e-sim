"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children, guestOnly = false }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");

    if (guestOnly) {
      if (token) {
        router.replace("/"); 
      } else {
        setAuthorized(true);
      }
    } else {
      if (!token) {
        router.replace("/login");
      } else {
        setAuthorized(true);
      }
    }
  }, [router, guestOnly]);

  if (!authorized) return null;

  return <>{children}</>;
}
