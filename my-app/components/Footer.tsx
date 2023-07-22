import { FooterLinks, FooterContent } from "@/constants"
import Image from "next/image";
import { BsFacebook, BsYoutube, BsTwitter, BsTiktok, BsMailbox, BsTelephone } from "react-icons/bs"
import { FaInstagramSquare } from 'react-icons/fa'
import { GoGear } from 'react-icons/go'

type LinksProps = {
    id: number;
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
    <div className="flex flex-col gap-4 py-4 max-w-[125px]">
        <h1 className="font-bold text-md">{title}</h1>
        <ul className="flex flex-col gap-2">
            {links.map((link) => (
                <li key={link.id} className="font-medium text-sm text-gray-500 hover:underline hover:text-accent-1"><a href={link.href}>{link.title}</a></li>
            ))}
        </ul>
    </div>
)

export default function Footer() {
    const sizeIcon = 30;

    return(
        <footer className="sectionPadding flex flex-row flex-wrap gap-6 w-full p-16 bg-slate-50 justify-center items-end">
            <div className="w-full lg:w-fit flex flex-col gap-4">
                <Image src="/rwd-logo_black.svg"
                    height={200}
                    width={150}
                    alt="Road Way Delivery">
                </Image>
                <h1 className="font-bold text-lg capitalize sm:w-[320px]">{FooterContent.title}</h1>
                <p className="sm:w-[320px] sentence font-medium text-gray-500">{FooterContent.address}</p>
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
                    <div className="flex flex-row gap-4 items-center">
                        <GoGear size={sizeIcon}/>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-md capitalize">{FooterContent.contactInfo[2].title}</h1>
                            <h1>{FooterContent.contactInfo[2].info}</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col  mt-4 gap-4">
                    <h1 className="font-bold text-md capitalize">Watch The Road!</h1>
                    <div className="flex flex-row gap-4">
                        <a href="#facebook" className="text-gray-500 hover:text-accent-1"><BsFacebook size={sizeIcon}/></a>
                        <a href="#youtube" className="text-gray-500 hover:text-accent-1"><BsYoutube size={sizeIcon}/></a>
                        <a href="#twitter" className="text-gray-500 hover:text-accent-1"><BsTwitter size={sizeIcon}/></a>
                        <a href="#instagram" className="text-gray-500 hover:text-accent-1"><FaInstagramSquare size={sizeIcon}/></a>
                        <a href="#tiktok" className="text-gray-500 hover:text-accent-1"><BsTiktok size={sizeIcon}/></a>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap gap-6 w-full lg:w-fit">
                <FooterColumn title={FooterLinks[0].title} links={FooterLinks[0].links}></FooterColumn>
                <FooterColumn title={FooterLinks[1].title} links={FooterLinks[1].links}></FooterColumn>
                <div className="flex flex-col">
                    <FooterColumn title={FooterLinks[2].title} links={FooterLinks[2].links}></FooterColumn>
                    <FooterColumn title={FooterLinks[4].title} links={FooterLinks[4].links}></FooterColumn>
                </div>
                <FooterColumn title={FooterLinks[3].title} links={FooterLinks[3].links}></FooterColumn>
                <FooterColumn title={FooterLinks[6].title} links={FooterLinks[6].links}></FooterColumn>
                <div>
                    <FooterColumn title={FooterLinks[5].title} links={FooterLinks[5].links}></FooterColumn>
                    <FooterColumn title={FooterLinks[7].title} links={FooterLinks[7].links}></FooterColumn>
                </div>
            </div>
            <div className="w-full justify-center items-center text-center mt-6">
                <p>@ 20XX Road Way Delivery. All rights reserved</p>
            </div>
        </footer>
    )
}