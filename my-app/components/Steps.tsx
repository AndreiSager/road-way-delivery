import { StepsContent } from "@/constants";
import Image from "next/image";

export default function Steps() {
    return(
        <div className="sectionPadding w-full flex flex-row flex-wrap">
            <div className="flex flex-col justify-center items-center gap-16 w-full lg:w-3/5">
                <h1 className="font-bold text-4xl text-center">Get Delivered In Four Easy Steps</h1>
                <div className="flex flex-row flex-wrap justify-center items-center gap-12 w-full">
                    {StepsContent.map((steps) => (
                        <div key={steps.id} className="flex flex-col w-[300px] aspect-video text-center items-center ">
                            <h1 className="font-bold text-lg w-full lg:w-[200px]">{steps.title}: <span className="text-accent-1">{steps.subtitle}</span></h1>
                            <div className="flex flex-row justify-center items-center gap-4">
                                <Image
                                    src={steps.icon}
                                    height={75}
                                    width={100}
                                    alt={steps.alt}
                                    className="object-cover my-12 hover:scale-105 transition linear duration-200"
                                    />
                                <p className="font-medium text-gray-500">{steps.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-2/5">
                <h1>Booking Form</h1>
            </div>
        </div>
    )
}