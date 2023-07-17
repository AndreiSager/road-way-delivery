import { StepsContent } from "@/constants";
import Image from "next/image";

export default function Steps() {
    return(
        <div className="sectionPadding flex flex-col justify-center items-center gap-16">
            <h1 className="font-bold text-4xl">Rent Now In Three Easy Steps</h1>
            <div className="flex flex-row flew-wrap justify-center items-center gap-4">
                {StepsContent.map((steps) => (
                    <div className="p-6 flex flex-col w-[350px] aspect-square text-center items-center">
                        <h1 className="font-bold text-2xl mb-6">{steps.title}</h1>
                        <Image
                            src={steps.icon}
                            height={200}
                            width={200}
                            alt={steps.alt}
                            className="object-cover"
                            />
                        <h1 className="font-bold text-lg mt-6">{steps.subtitle}</h1>
                        <p className="font-medium text-gray-500">{steps.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}