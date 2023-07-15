"use client"

import { NavLinks as links } from "@/constants"
import { MdAccountCircle } from "react-icons/md"
import { CgNotes } from "react-icons/cg"
import { GiCarWheel, GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"
import { useState } from "react";
import Image from "next/image"

export default function Navbar() {
    const sizeIcon = 35;

    const [nav, setNav] = useState<true | false>(false);
    const handleNav = () => (
        setNav(!nav)
    )

    return(
        <nav className="w-full sticky top-0 z-50">
            <div className="flex flex-row justify-between items-center w-full py-4 px-4 md:px-12 bg-white shadow-md">
                <div className="flex flex-row gap-8">
                    <Image src="/rwd_logo.svg"
                        height={200}
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
            <div className={nav ? "flex flex-row gap-8 relative top-0 left-0 bg-white w-full h-fit pb-8 shadow-md" : "hidden"}>
                <ul className="flex flex-col w-full text-center">
                    {links.map((link) => (
                        <li key={link.id} className="font-semibold text-md block w-full">
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