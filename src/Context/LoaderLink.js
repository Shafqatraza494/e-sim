"use client";

import Link from "next/link";
import { createContext, useContext, useRef, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";

const LoaderContext = createContext();

export function LoaderProvider({ children }) {
  const ref = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    ref.current?.complete();
  }, [pathname]);

  return (
    <LoaderContext.Provider value={ref}>
      <LoadingBar color="#F15A24" height={3} shadow ref={ref} />
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  return useContext(LoaderContext);
}

export function LoaderLink({ href, children, ...props }) {
  const loaderRef = useLoader();

  const handleClick = () => {
    loaderRef?.current?.continuousStart();
  };

  return (
    <Link href={href} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
