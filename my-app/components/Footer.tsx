import { FooterLinks, FooterContent } from "@/constants"
import Image from "next/image";
import { BsFacebook, BsYoutube, BsTwitter, BsTiktok, BsMailbox, BsTelephone } from "react-icons/bs"
import { FaInstagramSquare } from 'react-icons/fa'

type LinksProps = {
    href: string;
    key: string;
    title: string;
}

type ColumnProps = {
    id?: number;
    title: string;
    links: Array<LinksProps>;
}

const FooterColumn = ( {title, links}:ColumnProps ) => (
    <div className="flex flex-col gap-4 py-4">
        <h1 className="font-bold text-md">{title}</h1>
        <ul className="flex flex-col gap-2">
            {links.map((link) => (
                <li className="font-medium text-gray-500 hover:underline hover:text-accent-1"><a href={link.href}>{link.title}</a></li>
            ))}
        </ul>
    </div>
)

export default function Footer() {
    const sizeIcon = 30;

    return(
        <footer className="sectionPadding flex flex-row flex-wrap gap-6 w-full p-16 bg-slate-50">
            <div className="w-full lg:w-fit flex flex-col gap-4">
                <Image src="/rwd_logo.svg"
                    height={200}
                    width={150}
                    alt="Road Way Delivery">
                </Image>
                <h1 className="font-bold text-lg">The Road Is The Way. Our Way.</h1>
                <p className="sm:w-[320px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam temporibus officiis quae eveniet ut.</p>
                <div className="flex flex-col gap-4 mt-4">
                    <div className="flex flex-row gap-4 items-center">
                        <BsMailbox size={sizeIcon}/>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-md capitalize">{FooterContent.contactInfo[0].title}</h1>
                            <h1>{FooterContent.contactInfo[0].info}</h1>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                        <BsTelephone size={sizeIcon}/>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-md capitalize">{FooterContent.contactInfo[1].title}</h1>
                            <h1>{FooterContent.contactInfo[1].info}</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-4 mt-4">
                    <a href="#facebook" className="text-gray-500 hover:text-accent-1"><BsFacebook size={sizeIcon}/></a>
                    <a href="#youtube" className="text-gray-500 hover:text-accent-1"><BsYoutube size={sizeIcon}/></a>
                    <a href="#twitter" className="text-gray-500 hover:text-accent-1"><BsTwitter size={sizeIcon}/></a>
                    <a href="#instagram" className="text-gray-500 hover:text-accent-1"><FaInstagramSquare size={sizeIcon}/></a>
                    <a href="#tiktok" className="text-gray-500 hover:text-accent-1"><BsTiktok size={sizeIcon}/></a>
                </div>
          
            </div>
            <div className="flex flex-row flex-wrap gap-8 w-full lg:w-fit ">
                <FooterColumn title={FooterLinks[0].title} links={FooterLinks[0].links}></FooterColumn>
                <FooterColumn title={FooterLinks[1].title} links={FooterLinks[1].links}></FooterColumn>
                <FooterColumn title={FooterLinks[2].title} links={FooterLinks[2].links}></FooterColumn>
                <FooterColumn title={FooterLinks[3].title} links={FooterLinks[3].links}></FooterColumn>
                <FooterColumn title={FooterLinks[4].title} links={FooterLinks[4].links}></FooterColumn>
                <FooterColumn title={FooterLinks[5].title} links={FooterLinks[5].links}></FooterColumn>
            </div>
            <div className="w-full justify-center items-center text-center mt-6">
                <p>@ 20XX Road Way Delivery. All rights reserved</p>
            </div>
        </footer>
    )
}