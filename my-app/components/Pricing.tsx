import { PricingPlans } from "@/constants";
import Image from "next/image";
import { BsFuelPumpFill, BsStars } from "react-icons/bs";
import { FaWeightHanging } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { MdEventSeat } from "react-icons/md";


export default function Pricing() {
    const sizeIcon = 25;

    return(
        <main className="sectionPadding">
            <div className="flex flex-row flex-wrap justify-center items-center gap-16">
                <div className="flex flex-col w-full lg:w-[600px] text-center">
                    <h1 className="sectionHeader">Pricing</h1>
                    <p className="font-medium text-gray-500">Discover the different ways you can book our service. We provide a plethora of vehicles that may suit your transportation needs. Need food delivered? Need your possessions moved? Need to deliver goods? Road Way Delivery has your back with affordable prices ready for service.</p>
                </div>
                <div className="flex justify-center items-center w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-10 items-start lg:p-4">
                        {PricingPlans.map((plan) => (
                            <div key={plan.id} className="rounded-lg bg-white drop-shadow-xl">
                                <div className="w-full lg:w-[350px] h-[230px] flex flex-row justify-between p-4 lg:p-6">
                                    <div className="w-3/6 flex flex-col justify-between gap-4">
                                        <div className="">
                                            <h1 className="font-bold text-2xl">{plan.name}</h1>
                                            <h1 className="font-medium text-sm">{plan.model}</h1>
                                        </div>
                                        <div>
                                            <button type="button" className="w-full flex-1 p-4 bg-accent-1 text-white font-extrabold text-lg uppercase rounded-lg">{plan.price}$ /day</button>
                                        </div>
                                    </div>
                                    <div className="w-2/5 flex flex-col gap-4">
                                        <div className="flex flex-row items-center gap-2">
                                            <FaWeightHanging size={sizeIcon} className="text-accent-1"/>
                                            <h1 className="font-medium text-sm">{plan.load}</h1>
                                        </div>
                                        <div className="flex flex-row items-center gap-2">
                                            <MdEventSeat size={sizeIcon} className="text-accent-1"/>
                                            <h1 className="font-medium text-sm">{plan.seats}/{plan.doors}</h1>
                                        </div>

                                        <div className="flex flex-row items-center gap-2">
                                            <GiSteeringWheel size={sizeIcon} className="text-accent-1"/>
                                            <h1 className="capitalize font-medium text-sm">{plan.transmission}</h1>
                                        </div>
                                        <div className="flex flex-row items-center gap-2">
                                            <BsFuelPumpFill size={sizeIcon} className="text-accent-1"/>
                                            <h1 className="capitalize font-medium text-sm">{plan.fuel}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-full">
                                    <Image
                                        src={plan.thumbnail}
                                        height={1500}
                                        width={350}
                                        alt={plan.alt}
                                        className="rounded-b-lg brightness-105 object-cover"
                                        />
                                    <div className="absolute bottom-4 left-4 flex flex-row gap-2 justify-center items-center text-white ">
                                        <BsStars size={40}/>
                                        <h1 className="font-bold text-2xl">{plan.rating}</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}