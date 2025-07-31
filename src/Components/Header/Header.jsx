"use client"; // if you're using Next.js 13+ app router

import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";

function Header() {
  const [langOpen, setLangOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "jp", label: "日本語" },
  ];

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <a href="#">
          <Image src="/logo.png" alt="Logo" width={29} height={29} />
        </a>
        <p className="hidden md:block ">eSIM White Label</p>
      </div>

      <div className={styles.navigation}>
        <nav>
          <ul className="hidden lg:flex flex-row gap-[60px] items-center justify-center list-none">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Buy eSIM</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex flex-row justify-center items-center gap-[9px]">
          <button className={styles.cartBtn}>
            <Image
              className={styles.cartImg}
              src="/Vector.png"
              alt="Cart"
              width={24}
              height={24}
            />
          </button>

          <button className={styles.registerBtn}>Register</button>
          <button className={styles.loginBtn}>Login</button>

          <div className="relative">
            <button
              className={`${styles.langBtn} bg-white rounded-full w-10 h-10 flex flex-row justify-center items-center`}
              onClick={() => setLangOpen(!langOpen)}
            >
              <Image src="/united states.png" alt="" width={30} height={30} />
              <span className="text-sm">▼</span>
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
        <div className="flex md:hidden flex-row justify-center align-middle gap-10">
          <Image src="/Cart.png" alt="" width={35} height={10} />
          <Image src="/pfp.png" alt="" width={35} height={10} />
          <Image src="/hamburger.png" alt="" width={35} height={10} />
        </div>
      </div>
    </div>
  );
}

export default Header;
