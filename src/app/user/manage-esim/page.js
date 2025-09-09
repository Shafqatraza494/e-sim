"use client";

import Hero from "@/Components/Hero/Hero";
import ProtectedRoute from "@/Components/ProtectedRoute/ProtectedRoute";
import { useAuth } from "@/Context/AuthContext";
import { LoaderLink } from "@/Context/LoaderLink";
import Image from "next/image";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Page() {
  const { userSim, isUserSimLoading } = useAuth();

  // Destructure your API response
  const sims = userSim?.data || [];

  return (
    <ProtectedRoute>
      <div>
        <Hero
          para="Our team is here to assist you promptly through any of these channels."
          heading="Manage your sim here."
        />
        <div className="md:mx-14 mx-6 mb-10 bayon-text text-[64px] text-center">
          My <span className="lato-text font-extrabold">e</span>Sim
        </div>

        <div className="bg-[#EB662B0F] px-14 flex md:flex-row gap-x-10 md:flex-wrap flex-col justify-center items-center">
          {/* 🔹 Skeleton Loader for 3 cards */}
          {isUserSimLoading &&
            Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="p-5 border-2 rounded-[10px] w-[330px] bg-white my-5"
              >
                <Skeleton height={25} width={120} />
                <Skeleton height={15} width={200} className="mt-2" />
                <Skeleton height={25} width={150} className="mt-4" />
                <Skeleton height={15} width={180} className="mt-2" />
                <Skeleton height={40} className="mt-4 rounded-[10px]" />
              </div>
            ))}

          {/* 🔹 SIM Data */}
          {!isUserSimLoading &&
            sims.map((sim) => (
              <div
                key={sim.id}
                className="p-5 border-2 h-[320px] rounded-[10px] w-[350px] bg-white my-5"
              >
                <div>
                  <div className="flex flex-row items-center gap-2">
                    <Image
                      src="/manage-sim/user.svg"
                      alt="iccid"
                      width={20}
                      height={20}
                    />
                    <h1 className="lato-text text-[22px] font-extrabold">
                      ICCID
                    </h1>
                  </div>
                  <p>{sim.iccid}</p>
                </div>

                <div className="mt-3">
                  <div className="flex flex-row items-center gap-2">
                    <Image
                      src="/manage-sim/calendar.svg"
                      alt="purchase date"
                      width={20}
                      height={20}
                    />
                    <h1 className="lato-text text-[22px] font-extrabold">
                      Purchase Date
                    </h1>
                  </div>
                  <p>{new Date(sim.created_at).toLocaleDateString()}</p>
                </div>

                <div className="mt-3">
                  <div className="flex flex-row items-center gap-2">
                    <Image
                      src="/manage-sim/archive.svg"
                      alt="bundle"
                      width={20}
                      height={20}
                    />
                    <h1 className="lato-text text-[22px] font-extrabold">
                      Current Bundle
                    </h1>
                  </div>
                  <p>{sim.last_bundle_name || "No Bundle Active"}</p>
                </div>

                <LoaderLink href={`/user/esim-details/${sim.id}`}>
                  <button className="bg-[#EB662B] text-white rounded-[10px] px-4 py-2 mt-4">
                    See Details
                  </button>
                </LoaderLink>
              </div>
            ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default Page;
