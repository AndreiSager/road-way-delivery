"use client"

import { PricingPlans } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { AiFillCar } from "react-icons/ai"
import { FaGasPump } from "react-icons/fa";
import { GiCarDoor, GiGearStick, GiWeight } from "react-icons/gi";
import { IoLogoModelS } from "react-icons/io";
import { TbAirConditioning } from "react-icons/tb"

export default function Models() {
    const iconSize = 30;

    const [contentIndex, setContentIndex] = useState<number>(0);
    const handleContentIndex = () => {

    }

    return(
        <div className="sectionPadding w-full flex flex-col text-center gap-8">
            <div className="text-center flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl">Choose your car</h1>
                <p className="font-medium text-md text-slate-500 m-2 w-full lg:w-[500px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, asperiores temporibus dolor eligendi amet magni cupiditate laudantium consectetur doloremque eum ipsa!</p>
            </div>
            <div className="order-3 lg:order-2 flex flex-col lg:flex-row mt-4 gap-4 lg:gap-12 lg:m-8">
                <Image
                    className="w-full lg:w-3/5 rounded-lg"
                    src={PricingPlans[contentIndex].thumbnail}
                    width={300}
                    height={300}
                    alt={PricingPlans[contentIndex].thumbnail}
                    />
                <div className="w-full lg:w-2/5">
                    <table className="w-full table-fixed border-separate border-spacing-2 lg:border-spacing-4 border border-1 border-slate-300 rounded-lg">
                        <thead>
                            <tr className="tableContainer">
                                <td className="tableTitle">Brand</td>
                                <td className="tableTitle">{PricingPlans[contentIndex].brand}</td>
                            </tr>
                        </thead>
                        <tbody className="flex flex-col gap-2 lg:gap-4">
                            <tr className="tableContainer">
                                <td className="tableContent"><IoLogoModelS size={iconSize}></IoLogoModelS>model</td>
                                <td className="tableContent">{PricingPlans[contentIndex].brand} {PricingPlans[contentIndex].model} {PricingPlans[contentIndex].year}</td>
                            </tr>
                            <tr className="tableContainer">
                                <td className="tableContent"><GiCarDoor size={iconSize}></GiCarDoor>doors</td>
                                <td className="tableContent">{PricingPlans[contentIndex].doors}/{PricingPlans[contentIndex].seats}</td>
                            </tr>
                            <tr className="tableContainer">
                                <td className="tableContent"><GiWeight size={iconSize}></GiWeight>load</td>
                                <td className="tableContent">{PricingPlans[contentIndex].load}</td>
                            </tr>      
                            <tr className="tableContainer">
                                <td className="tableContent"><TbAirConditioning size={iconSize}></TbAirConditioning>ac</td>
                                <td className="tableContent">{PricingPlans[contentIndex].ac}</td>
                            </tr>
                            <tr className="tableContainer">
                                <td className="tableContent"><GiGearStick size={iconSize}></GiGearStick>transmission</td>
                                <td className="tableContent">{PricingPlans[contentIndex].transmission}</td>
                            </tr>
                            <tr className="tableContainer">
                                <td className="tableContent"><FaGasPump size={iconSize}></FaGasPump>fuel</td>
                                <td className="tableContent">{PricingPlans[contentIndex].fuel}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" className="callToAction mt-6 uppercase shadow-lg">${PricingPlans[contentIndex].price} / booking</button>
                </div>
            </div>
            <div className="order-2 lg:order-3 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:p-8">
                {PricingPlans.map((content) => (
                    <div key={content.id} className="">
                        <h1 className="flex-none block p-4 w-full bg-slate-200 hover:text-white font-bold text-lg rounded-lg hover:bg-accent-1 active:bg-accent-1 shadow-lg">{content.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}