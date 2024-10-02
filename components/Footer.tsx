import { FooterLinks, FooterContent } from "@/constants";
import Image from "next/image";
import {
  BsFacebook,
  BsYoutube,
  BsTwitter,
  BsTiktok,
  BsMailbox,
  BsTelephone,
} from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import Icon from "@svgr-iconkit/entypo";

export default function Footer() {
  const sizeIcon = 30;

  return (
    <footer className="flex w-full flex-col items-center bg-slate-50">
      <div className="flex max-w-center flex-col items-center justify-center gap-24 px-5 py-24 md:px-40">
        <div className="flex max-w-center flex-col items-start justify-center gap-24 md:flex-row">
          <div className="flex w-full flex-col gap-8 lg:w-fit">
            <Image
              src="/rwd-logo_black.svg"
              height={200}
              width={150}
              alt="Road Way Delivery"
            />

            <div className="flex flex-col gap-3">
              <h1 className="text-base font-bold capitalize sm:w-[320px]">
                {FooterContent.title}
              </h1>
              <p className="sentence text-sm font-normal text-gray-500 sm:w-[320px]">
                {FooterContent.address}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-sm font-bold capitalize">Watch The Road!</h1>
              <div className="flex flex-row gap-2">
                <a href="#facebook" className="h-8 w-8 text-accent-1">
                  <Icon name="facebook-with-circle" />
                </a>
                <a href="#youtube" className="h-8 w-8 text-accent-1">
                  <Icon name="youtube-with-circle" />
                </a>
                <a href="#twitter" className="h-8 w-8 text-accent-1">
                  <Icon name="twitter-with-circle" />
                </a>
                <a href="#instagram" className="h-8 w-8 text-accent-1">
                  <Icon name="instagram-with-circle" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-8 md:gap-12 lg:w-fit">
            <div className="row-span-2">
              <FooterColumn
                title={FooterLinks[0].title}
                links={FooterLinks[0].links}
              />
            </div>
            <div className="row-span-2">
              <FooterColumn
                title={FooterLinks[1].title}
                links={FooterLinks[1].links}
              />
            </div>
            <div className="row-span-1 row-start-3 md:row-span-2 md:row-start-auto">
              <FooterColumn
                title={FooterLinks[2].title}
                links={FooterLinks[2].links}
              />
            </div>
            <div className="row-span-1 row-start-4 md:row-span-2 md:row-start-auto">
              <FooterColumn
                title={FooterLinks[4].title}
                links={FooterLinks[4].links}
              />
            </div>
            <div className="row-span-2">
              <FooterColumn
                title={FooterLinks[3].title}
                links={FooterLinks[3].links}
              />
            </div>
            <div className="row-span-2">
              <FooterColumn
                title={FooterLinks[6].title}
                links={FooterLinks[6].links}
              />
            </div>
            <div className="col-start-2 row-span-1 row-start-5 md:col-start-auto md:row-span-2 md:row-start-auto">
              <FooterColumn
                title={FooterLinks[5].title}
                links={FooterLinks[5].links}
              />
            </div>
            <div className="col-start-2 row-span-1 row-start-6 md:col-start-auto md:row-span-2 md:row-start-auto">
              <FooterColumn
                title={FooterLinks[7].title}
                links={FooterLinks[7].links}
              />
            </div>
          </div>
        </div>
        <p className="text-sm">© 2022 Roadway Delivery. All rights reserved</p>
      </div>
    </footer>
  );
}

type LinksProps = {
  id: number;
  href: string;
  key: string;
  title: string;
};

type ColumnProps = {
  id?: number;
  title: string;
  links: Array<LinksProps>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="flex w-full flex-col gap-4 md:max-w-none">
    <h1 className="text-sm font-bold uppercase">{title}</h1>
    <ul className="flex flex-col gap-2">
      {links.map((link) => (
        <li
          key={link.id}
          className="text-xs font-medium text-gray-500 hover:text-accent-1 hover:underline"
        >
          <a href={link.href}>{link.title}</a>
        </li>
      ))}
    </ul>
  </div>
);
