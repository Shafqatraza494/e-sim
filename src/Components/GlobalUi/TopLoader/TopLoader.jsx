"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import LoadingBar from "react-top-loading-bar";
import { useIsFetching } from "@tanstack/react-query";

export default function TopLoader() {
  const ref = useRef(null);
  const pathname = usePathname();
  const isFetching = useIsFetching();

  useEffect(() => {
    if (!pathname) return;
    ref.current?.continuousStart();

    ref.current?.complete();
  }, [pathname]);

  useEffect(() => {
    if (isFetching > 0) {
      ref.current?.continuousStart();
    } else {
      ref.current?.complete();
    }
  }, [isFetching]);

  return <LoadingBar color="#F15A24" height={3} shadow ref={ref} />;
}
