import { BannerContent } from "@/constants";
import Image from "next/image";

export default function PerformanceBanner() {
    return(
        <main className="w-full h-[300px] bg-[url(/road_compressed.jpg)] bg-cover bg-bottom">
            <div className="w-full h-full flex flex-row flex-wrap gap-10 justify-center items-center">
            {BannerContent.map((block) => (
                <div key={block.id} className="w-[250px] bg-white rounded-xl p-8 flex flex-row flex-wrap justify-center items-center text-center shadow-2xl gap-4">
                    <Image 
                        src={block.icon}
                        height={150}
                        width={100}
                        alt={block.alt}
                        >
                    </Image>
                    <h1 className="font-semibold text-lg capitalize">{block.title}</h1>
                </div>
            ))}
            </div>
        </main>
    )
}