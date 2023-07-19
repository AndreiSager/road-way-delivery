import { AboutContent } from "@/constants";
import Image from "next/image";

export default function About() {
    return(
        <div className="sectionPadding flex flex-col gap-16 lg:gap-0">
            {AboutContent.map((content) => (
                <div key={content.id} className="flex flex-col lg:flex-row even:lg:flex-row-reverse items-center">
                    <div className="pb-6 lg:p-8 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
                        <h1 className="sectionHeader">{content.title}</h1>
                        <p className="lg:text-justify font-medium text-gray-500">{content.description}</p>
                    </div>
                    <Image
                        src={content.image}
                        height={200}
                        width={700}
                        alt={content.alt}
                        className="object-cover"
                        />
                </div>
            ))}
        </div>
    )
}