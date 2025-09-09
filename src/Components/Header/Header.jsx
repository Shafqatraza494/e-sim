"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { useCart } from "@/Context/CartContext";
import ButtonFill from "../GlobalUi/ui/Buttons/ButtonFill";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useAuth } from "@/Context/AuthContext";
import { LoaderLink } from "../../Context/LoaderLink";

function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const { toggleCart } = useCart();

  const languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "jp", label: "日本語" },
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="flex flex-row justify-between items-center md:px-[60px] px-[25px] py-[20px]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <LoaderLink href="/">
          <Image src="/logo.png" alt="Logo" width={29} height={29} />
        </LoaderLink>
        <p className="hidden md:block font-semibold">eSIM White Label</p>
      </div>

      {/* Navigation */}
      <div className={styles.navigation}>
        <nav>
          <ul className="hidden lg:flex flex-row gap-[60px] items-center justify-center list-none">
            <li>
              <LoaderLink href="/">Home</LoaderLink>
            </li>
            <li>
              <LoaderLink href="/buy-esim">Buy eSIM</LoaderLink>
            </li>
            <li>
              <LoaderLink href="/about-us">About Us</LoaderLink>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex flex-row justify-center items-center gap-[12px] ml-8">
          {/* Cart */}
          <button onClick={toggleCart} className={styles.cartBtn}>
            <Image src="/Vector.png" alt="Cart" width={18} height={18} />
          </button>

          {/* Auth State */}
          {isLoading ? (
            <div className="flex gap-2">
              <Skeleton width={80} height={30} />
              <Skeleton width={80} height={30} />
            </div>
          ) : isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="px-4 py-2 border flex flex-row items-center gap-2 border-black rounded-[20px] bg-white text-black font-medium hover:bg-gray-100"
              >
                <span>{user?.name || "Account"}</span>
                {menuOpen ? (
                  <ChevronDown size={16} className="text-gray-600" />
                ) : (
                  <ChevronRight size={16} className="text-gray-600" />
                )}
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-50">
                  <ul className="flex flex-col text-left">
                    <li>
                      <LoaderLink
                        href="/user/manage-esim"
                        className="block px-4 py-2 hover:bg-gray-100 rounded-lg"
                      >
                        Manage eSIM
                      </LoaderLink>
                    </li>
                    <li>
                      <LoaderLink
                        href="/user/profile"
                        className="block px-4 py-2 hover:bg-gray-100 rounded-lg"
                      >
                        Profile
                      </LoaderLink>
                    </li>
                    <li>
                      <LoaderLink
                        href="/user/refill-balance"
                        className="block px-4 py-2 hover:bg-gray-100 rounded-lg"
                      >
                        Refill
                      </LoaderLink>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 rounded-lg"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <>
              <LoaderLink href="/signup">
                <button className="cursor-pointer border px-4 py-2 rounded-md bg-white hover:bg-gray-100">
                  Register
                </button>
              </LoaderLink>
              <LoaderLink href="/login">
                <button className="cursor-pointer border px-4 py-2 rounded-md bg-white hover:bg-gray-100">
                  Login
                </button>
              </LoaderLink>
            </>
          )}

          {/* Language Selector */}
          <div className="relative">
            <button
              className="bg-white rounded-full w-10 h-10 flex flex-row justify-center items-center border"
              onClick={() => setLangOpen(!langOpen)}
            >
              <Image
                src="/united states.png"
                alt="lang"
                width={20}
                height={20}
              />
              <span className="text-sm ml-1">▼</span>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md z-50">
                <ul className="py-2">
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button className="flex items-center w-full gap-2 px-4 py-2 hover:bg-gray-100">
                        <span className="text-sm">{lang.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="flex md:hidden flex-row justify-center items-center gap-6">
          <Image
            src="/Cart.png"
            alt="Cart"
            width={30}
            height={30}
            onClick={toggleCart}
            className="cursor-pointer"
          />
          <LoaderLink href="/user/profile">
            <Image src="/pfp.png" alt="Profile" width={30} height={30} />
          </LoaderLink>
          <LoaderLink href="/menu">
            <Image src="/hamburger.png" alt="Menu" width={30} height={30} />
          </LoaderLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
