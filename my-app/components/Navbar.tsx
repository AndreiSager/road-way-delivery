import { NavLinks as links } from "@/constants"
import { MdAccountCircle } from "react-icons/md"
import { CgNotes } from "react-icons/cg"
import { GiCarWheel } from "react-icons/gi"

export default function Navbar() {
    const sizeIcon = 30;

    return(
        <nav className="flex flex-row justify-between items-center w-full p-6 ">
            <div className="flex flex-row gap-8">
                <h1><a href="/" className="block p-4">Logo</a></h1>
                <ul className="hidden md:flex flex-row">
                    {links.map((link) => (
                        <li className="font-semibold text-lg">
                            <a href={link.href}
                                className="block p-4"
                                >{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-row gap-8 justify-center items-center">
                <div className="flex flex-row gap-4 justify-center items-center">
                    <MdAccountCircle size={sizeIcon}/>
                    <CgNotes size={sizeIcon}/>
                </div>
                <button type="button" className="px-12 py-4 bg-red-500 flex flex-row justify-center items-center gap-2"><GiCarWheel size={sizeIcon}/>Drive Now</button>
            </div>
        </nav>
    )
}