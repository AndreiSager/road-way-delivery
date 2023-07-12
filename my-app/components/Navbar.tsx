import { NavLinks as links } from "@/constants"
import { MdAccountCircle } from "react-icons/md"
import { CgNotes } from "react-icons/cg"
import { GiCarWheel, GiHamburgerMenu } from "react-icons/gi"

export default function Navbar() {
    const sizeIcon = 30;

    return(
        <nav className="flex flex-row justify-between items-center w-full py-4 px-12">
            <div className="flex flex-row gap-8">
                <h1><a href="/" className="block p-4">Logo</a></h1>
                <ul className="hidden lg:flex flex-row">
                    {links.map((link) => (
                        <li className="font-semibold text-md">
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
            <div className="flex lg:hidden">
                <GiHamburgerMenu size={sizeIcon}/>
            </div>
        </nav>
    )
}