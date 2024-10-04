"use client";

import { NavLinksData } from "@/constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const sizeIcon = 35;

  const [nav, setNav] = useState<true | false>(false);
  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const onScroll = () => {
      const navbar = document.getElementById("navbar")!;
      const distance = 50;
      if (document.documentElement.scrollTop > distance) {
        navbar.classList.add("navbar__black");
      } else {
        navbar.classList.remove("navbar__black");
      }
    };
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="relative flex max-h-[85px] w-full items-center justify-center">
      <div
        id="navbar"
        className="navbar__white fixed left-auto right-auto top-0 z-50 flex w-full flex-row items-center justify-center px-4 py-4 shadow-md backdrop-blur-sm md:px-12"
      >
        <div className="flex w-full max-w-center items-center justify-between">
          <a href="/" className="w-full max-w-[200px]">
            <Image
              src={"/rwd-logo_black.svg"}
              height={100}
              width={150}
              alt="Road Way Delivery"
            ></Image>
          </a>
          <div className="flex flex-row gap-8">
            <ul className="hidden flex-row gap-4 lg:flex">
              {NavLinksData.map((link) => (
                <li key={link.id} className="text-md font-medium">
                  <a href={link.href} className="block p-4 hover:text-accent-1">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden max-w-[200px] flex-row items-center justify-center lg:flex">
            <button
              type="button"
              className="rounded-full px-6 py-2 text-center text-base font-medium"
            >
              Login
            </button>
            <button
              type="button"
              className="rounded-full bg-accent-1 px-6 py-2 text-center text-base font-medium text-white"
            >
              Sign Up
            </button>
          </div>

          <div onClick={handleNav} className="flex lg:hidden">
            <GiHamburgerMenu size={sizeIcon} />
          </div>
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-between gap-8 bg-white duration-500 ease-in-out lg:hidden"
              : "fixed left-[-100%] top-0 z-50 flex h-full w-full flex-col items-center justify-between gap-8 bg-white duration-500 ease-in-out lg:hidden"
          }
        >
          <div
            onClick={handleNav}
            className="flex h-[85px] w-full items-center justify-end p-4 md:px-12"
          >
            <RxCross2 size={sizeIcon} />
          </div>
          <ul className="flex w-full flex-col text-center">
            {links.map((link) => (
              <li key={link.id} className="text-md block w-full font-semibold">
                <a
                  onClick={handleNav}
                  href={link.href}
                  className="block w-full p-4"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <div></div>
        </div>
      </div>
    </nav>
  );
}
