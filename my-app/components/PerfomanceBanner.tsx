import { BannerContent } from "@/constants";
import Image from "next/image";

export default function PerformanceBanner() {
    return(
        <main className="w-full lg:h-[350px] bg-slate-100 bg-cover bg-bottom py-20 lg:py-0">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 place-content-center">
            {BannerContent.map((block) => (
                <div key={block.id} className="h-[180px] lg:w-[250px] aspect-video bg-white rounded-xl p-8 flex flex-row flex-wrap justify-center items-center text-center shadow-2xl hover:scale-105 linear duration-100 transition place-self-center">
                    <Image 
                        src={block.icon}
                        height={150}
                        width={100}
                        alt={block.alt}
                        >
                    </Image>
                    <h1 className="w-full font-semibold text-lg capitalize">{block.title}</h1>
                </div>
            ))}
            </div>
        </main>
    )
}