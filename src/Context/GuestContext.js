"use client";

import { createContext, useContext } from "react";
import { useFetch } from "@/Hooks/useFetch";

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
  const {
    data: globalPackages,
    isLoading: isGlobalPackages,
    isError: isGlobalPackagesError,
  } = useFetch("get", "/packages/global");

  // Settings
  const { data: allSetting, isLoading: allSettingsLoading } = useFetch(
    "get",
    "/settings"
  );

  // Blogs
  const {
    data: blogsData,
    isLoading: blogsLoading,
    isError: blogsError,
  } = useFetch("get", "/blog");

  // Dynamic fetch hooks
  const useCountryBySlug = (slug) =>
    useFetch("get", `/packages/country/${slug}`);

  const useRegionBySlug = (slug) => useFetch("get", `/packages/region/${slug}`);


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
        globalPackages,
        isGlobalPackages,
        isGlobalPackagesError,

        // Settings
        allSetting,
        allSettingsLoading,

        // Blogs
        blogsData,
        blogsLoading,
        blogsError,

        // Dynamic Fetch
        useCountryBySlug,
        useRegionBySlug,
      }}
    >
      {children}
    </GuestContext.Provider>
  );
};

export const useGuest = () => useContext(GuestContext);
