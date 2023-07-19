"use client"

import { NavLinks as links } from "@/constants"
import { MdAccountCircle } from "react-icons/md"
import { CgNotes } from "react-icons/cg"
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

    return(
        <nav className="w-full ">
            <div id="navbar" className="flex flex-row justify-between items-center w-full py-4 px-4 md:px-12 shadow-md navbar__white fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
                <div className="flex flex-row gap-8">
                    <Image 
                        src={logo}
                        height={100}
                        width={150}
                        alt="Road Way Delivery">
                    </Image>
                    <ul className="hidden lg:flex flex-row">
                        {links.map((link) => (
                            <li key={link.id} className="font-semibold text-md">
                                <a href={link.href}
                                    className="block p-4"
                                    >{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:flex flex-row gap-8 justify-center items-center">
                    <div className="flex flex-row gap-4 justify-center items-center">
                        <MdAccountCircle size={sizeIcon}/>
                        <CgNotes size={sizeIcon}/>
                    </div>
                    <button type="button" className="rounded-full px-12 py-4 bg-accent-1 flex flex-row justify-center items-center gap-2 text-white font-bold"><GiCarWheel size={sizeIcon}/>Drive Now</button>
                </div>
                <div onClick={handleNav} className="flex lg:hidden">
                    {!nav ? <GiHamburgerMenu  size={sizeIcon}/> : <RxCross2  size={sizeIcon}/>}
                </div>
            </div>
            <div className={nav ? "flex flex-row gap-8 bg-white w-full h-fit pb-8 shadow-md" : "hidden"}>
                <ul className="flex flex-col w-full text-center">
                    {links.map((link) => (
                        <li key={link.id} className="font-semibold text-md block w-full hover:text-gray-100">
                            <a onClick={handleNav} href={link.href}
                                className="block p-4"
                                >{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}