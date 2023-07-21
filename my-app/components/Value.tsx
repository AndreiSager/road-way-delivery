import { ValueContent as content } from "@/constants";
import Image from "next/image";

export default function Value() {
    return(
        <div className="sectionPadding w-full flex flex-col lg:flex-row bg-slate-100 gap-16 lg:px-16">
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
                <Image
                    src={content.image}
                    width={300}
                    height={300}
                    alt={content.alt}
                    className=""
                    />
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <h6 className="font font-medium uppercase text-slate-500">{content.overline}</h6>
                        <h1 className="font-bold text-3xl capitalize">{content.title}</h1>
                    </div>
                    <p className="font font-medium sentence text-slate-500">{content.description}</p>
                    <button type="button" className="callToAction lg:w-[200px]">{content.cta}</button>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
                {content.feature.map((content) => (
                    <div key={content.id} className="flex flex-row justify-center items-center w-full">
                        <div className="rounded-full border-2 border-accent-1 min-w-[150px] aspect-square flex flex-col justify-center items-center z-10 overflow-hidden bg-white hover:scale-105 ease-out duration-150">
                            <Image
                            src={content.icon}
                            width={100}
                            height={100}
                            alt={content.alt}
                            className="object-cover"
                            />
                        </div>
                        <div className="rounded-r-full h-[120px] flex flex-col justify-center p-10 pl-12 -ml-8 shadow-xl bg-white">
                            <h1 className="font-bold text-lg capitalize">{content.title}</h1>
                            <p className="font-medium text-xs lg:text-sm text-slate-500">{content.sentence}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}