import { StepsContent } from "@/constants";
import Image from "next/image";

export default function Steps() {
    return(
        <div className="sectionPadding flex flex-col justify-center items-center gap-16">
            <h1 className="font-bold text-4xl text-center">Get Delivered In Three Easy Steps</h1>
            <div className="flex flex-col lg:flex-row flew-wrap justify-center items-center gap-4">
                {StepsContent.map((steps) => (
                    <div className="p-6 flex flex-col w-[350px] aspect-square text-center items-center">
                        <h1 className="font-bold text-2xl ">{steps.title}</h1>
                        <Image
                            src={steps.icon}
                            height={100}
                            width={200}
                            alt={steps.alt}
                            className="object-cover my-12"
                            />
                        <h1 className="font-bold text-lg">{steps.subtitle}</h1>
                        <p className="font-medium text-gray-500">{steps.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}