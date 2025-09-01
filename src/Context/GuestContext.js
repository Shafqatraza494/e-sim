"use client";

import { createContext, useContext } from "react";
import { useFetch } from "@/Hooks/useFetch";
import { data } from "autoprefixer";

const GuestContext = createContext();

export const GuestProvider = ({ children }) => {
  // Country Packages
  const { data: countries, isLoading: countriesLoading } = useFetch(
    "get",
    "/packages/country"
  );

  // Region Packages
  const { data: regions, isLoading: regionsLoading } = useFetch(
    "get",
    "/packages/region"
  );

  // Global Packages
  const { data: globalPkg, isLoading: globalPkgLoading } = useFetch(
    "get",
    "/packages/global"
  );

  // Blogs
  const {
    data: blogsData,
    isLoading: blogsLoading,
    isError: blogsError,
  } = useFetch("get", "/blog");

  const useCountryBySlug = (slug) =>
    useFetch("get", `/packages/country/${slug}`);

  const useRegionBySlug = (slug) => useFetch("get", `/packages/region/${slug}`);

  const useGlobalPackages = () => useFetch("get", `/packages/global`);

  return (
    <GuestContext.Provider
      value={{
        // Country
        countries,
        countriesLoading,

        // Region
        regions,
        regionsLoading,

        // Global
        globalPkg,
        globalPkgLoading,

        // Blogs
        blogsData,
        blogsLoading,
        blogsError,

        // Dynamic Fetch
        useCountryBySlug,
        useRegionBySlug,
        useGlobalPackages,
      }}
    >
      {children}
    </GuestContext.Provider>
  );
};

export const useGuest = () => useContext(GuestContext);
