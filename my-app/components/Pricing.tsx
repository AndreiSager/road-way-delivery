import { PricingPlans } from "@/constants";
import Image from "next/image";
import { BsFuelPumpFill } from "react-icons/bs";
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
                <div className="flex justify-center items-center w-full bg-slate-200">
                    <div className="flex flex-row flex-wrap gap-16 lg:gap-10 items-center lg:p-4 bg-slate-400">
                        {PricingPlans.map((plan) => (
                            <div key={plan.id} className="rounded-lg bg-white shadow-lg ">
                                <div className="w-[350px] h-[230px] flex flex-row p-6 gap-5">
                                    <div className="w-2/3 flex flex-col justify-between">
                                        <div className="">
                                            <h1 className="font-bold text-2xl">{plan.name}</h1>
                                            <h1 className="font-medium">{plan.model}</h1>
                                            <h1 className="font-bold text-lg">{plan.rating}</h1>
                                        </div>
                                        <div>
                                            <button type="button" className="w-5/6 flex-1 p-4 bg-accent-1 text-white font-extrabold text-lg uppercase rounded-lg">{plan.price}$ /day</button>
                                        </div>
                                    </div>
                                    <div className="w-1/3 flex flex-col gap-4">
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
                                <Image
                                    src={plan.thumbnail}
                                    height={250}
                                    width={350}
                                    alt={plan.alt}
                                    className="rounded-b-lg"
                                    />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}