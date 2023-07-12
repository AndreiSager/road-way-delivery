import { FooterLinks } from "@/constants"

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
    <div className="flex flex-col gap-4 p-4">
        <h1 className="font-bold text-md">{title}</h1>
        <ul className="flex flex-col gap-2">
            {links.map((link) => (
                <li className="font-medium text-gray-500 hover:underline hover:text-accent-1"><a href={link.href}>{link.title}</a></li>
            ))}
        </ul>
    </div>
)

export default function Footer() {
    return(
        <footer className="flex flex-col gap-6 w-full p-16">
            <div className="w-full lg:w-1/3 flex flex-col gap-2">
                <h1>Logo</h1>
                <h1>The Road Is The Way. Our Way.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam temporibus officiis quae eveniet ut.</p>
            </div>
            <div className="flex flex-row gap-6">
                <FooterColumn title={FooterLinks[0].title} links={FooterLinks[0].links}></FooterColumn>
                <FooterColumn title={FooterLinks[1].title} links={FooterLinks[1].links}></FooterColumn>
                <FooterColumn title={FooterLinks[2].title} links={FooterLinks[2].links}></FooterColumn>
                <FooterColumn title={FooterLinks[3].title} links={FooterLinks[3].links}></FooterColumn>
                <FooterColumn title={FooterLinks[4].title} links={FooterLinks[4].links}></FooterColumn>
                <FooterColumn title={FooterLinks[5].title} links={FooterLinks[5].links}></FooterColumn>
            </div>
            <div className="w-full justify-center items-center text-center">
                <h1>Copyright</h1>
            </div>
        </footer>
    )
}