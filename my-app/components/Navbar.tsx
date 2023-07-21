"use client"

import { NavLinks as links } from "@/constants"
import { MdAccountCircle } from "react-icons/md"
import { IoMdNotifications } from "react-icons/io"
import { GiCarWheel, GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"
import { useState, useEffect } from "react";
import Image from "next/image"

export default function Navbar() {
    const sizeIcon = 35;

    const [nav, setNav] = useState<true | false>(false);
    const handleNav = () => (
        setNav(!nav)
    )
   
    const [logo, setLogo] = useState<'/rwd-logo_white.svg' | '/rwd-logo_black.svg'>('/rwd-logo_white.svg');
    
    useEffect(() => {
        const onScroll = () => {
            const navbar = document.getElementById("navbar")!;
            const distance = 50;
            if (document.documentElement.scrollTop > distance) {
                navbar.classList.add("navbar__black");
                setLogo("/rwd-logo_black.svg");
            } else {
                navbar.classList.remove("navbar__black");
                setLogo("/rwd-logo_white.svg");
            }
        }
        window.addEventListener("scroll", onScroll);
    }, []);

    const signedIn = useState<true | false>(true);

    return(
        <nav className="w-full relative">
            <div id="navbar" className="flex flex-row justify-between items-center w-full py-4 px-4 md:px-12 shadow-md navbar__white fixed top-0 left-auto right-auto z-50 backdrop-blur-sm max-w-screen-xl">
                <div className="flex flex-row gap-8">
                    <a href="/">
                        <Image 
                            src={logo}
                            height={100}
                            width={150}
                            alt="Road Way Delivery">
                        </Image>
                    </a>
                    <ul className="hidden lg:flex flex-row">
                        {links.map((link) => (
                            <li key={link.id} className="font-semibold text-md">
                                <a href={link.href}
                                    className="block p-4 hover:text-green-500"
                                    >{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                {signedIn ? (
                    <div className="hidden lg:flex flex-row gap-8 justify-center items-center">
                        <div className="flex flex-row gap-4 justify-center items-center">
                            <IoMdNotifications size={sizeIcon}/>
                            <MdAccountCircle size={sizeIcon}/>
                        </div>
                        <button type="button" className="rounded-lg px-12 py-4 bg-accent-1 flex flex-row justify-center items-center gap-2 text-white font-bold capitalize hover:brightness-125">Book Now</button>
                    </div>
                ) : ( 
                    <div className="hidden lg:flex flex-row gap-8 justify-center items-center">
                        <div className="flex flex-row gap-4 justify-center items-center">
                            <h1 className="hover:underline">Sign-Up</h1>
                        </div>
                        <button type="button" className="rounded-lg px-12 py-4 bg-accent-1 flex flex-row justify-center items-center gap-2 text-white font-bold capitalize hover:brightness-125">Sign-In</button>
                    </div>
                )}
                <div onClick={handleNav} className="flex lg:hidden">
                    <GiHamburgerMenu size={sizeIcon}/>
                </div>
            </div>
            <div className={nav ? "flex flex-col justify-between items-center gap-8 bg-white w-full h-full fixed top-0 left-0 lg:hidden z-50 ease-in-out duration-500" : "flex flex-col justify-between items-center gap-8 bg-white w-full h-full fixed top-0 left-[-100%] lg:hidden z-50 ease-in-out duration-500"}>
                <div onClick={handleNav} className="flex w-full h-[85px] justify-end items-center p-4 md:px-12">
                    <RxCross2 size={sizeIcon}/>
                </div>
                <ul className="flex flex-col w-full text-center">
                    {links.map((link) => (
                        <li key={link.id} className="font-semibold text-md block w-full">
                            <a onClick={handleNav} href={link.href}
                                className="block p-4 w-full"
                                >{link.title}</a>
                        </li>
                    ))}
                </ul>
                <div></div>
            </div>
        </nav>
    )
}