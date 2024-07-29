"use client"

import { PricingPlans } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGasPump, FaPeace } from "react-icons/fa";
import { GiCarDoor, GiGearStick, GiWeight } from "react-icons/gi";
import { IoLogoModelS } from "react-icons/io";
import { TbAirConditioning } from "react-icons/tb"

export default function Models() {
    const iconSize = 30;

    type ModelProps = {
        thumbnail: string;
        alt: string;
        brand: string;
        model: string;
        year: string;
        doors: number;
        seats: number;
        load: string;
        ac: string;
        transmission: string;
        fuel: string;
        price: number;
    }

    const [content, setContent] = useState<ModelProps>({
        thumbnail: PricingPlans[0].thumbnail,
        alt: PricingPlans[0].alt,
        brand: PricingPlans[0].brand,
        model: PricingPlans[0].model,
        year: PricingPlans[0].year,
        doors: PricingPlans[0].doors,
        seats: PricingPlans[0].seats,
        load: PricingPlans[0].load,
        ac: PricingPlans[0].ac,
        transmission: PricingPlans[0].transmission,
        fuel: PricingPlans[0].fuel,
        price: PricingPlans[0].price,
    });

    const handleContent = (index: number) => {
        setContent({
            thumbnail: PricingPlans[index].thumbnail,
            alt: PricingPlans[0].alt,
            brand: PricingPlans[index].brand,
            model: PricingPlans[index].model,
            year: PricingPlans[index].year,
            doors: PricingPlans[index].doors,
            seats: PricingPlans[index].seats,
            load: PricingPlans[index].load,
            ac: PricingPlans[index].ac,
            transmission: PricingPlans[index].transmission,
            fuel: PricingPlans[index].fuel,
            price: PricingPlans[index].price,
         })
     }

    useEffect(() => {
        setState({ ...appState, activeObject: appState.objects[1] })
    }, []);

  


    const [appState, setState] = useState({
        activeObject: { id: 1 },
        objects: [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 } ],
    });
    
    function toggleActive(index: number) {
        setState({ ...appState, activeObject: appState.objects[index] })
    }
    
    function toggleActiveQuestion(index: number) {
        if (appState.objects[index] === appState.activeObject) {
            return "flex-none block p-4 w-full font-bold text-lg rounded-lg hover:bg-accent-1 active:bg-accent-1 shadow-lg capitalize  bg-accent-1 text-white"; 
        } else {
            return "flex-none block p-4 w-full font-bold text-lg rounded-lg hover:bg-accent-1 active:bg-accent-1 shadow-lg capitalize bg-slate-200 hover:text-white";
        }
    }

    return(
        <div className="sectionPadding w-full flex flex-col text-center gap-8">
            <div className="text-center flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl capitalize">Choose your transport</h1>
                <p className="font-medium text-md text-slate-500 m-2 w-full lg:w-[500px]">Explore our diverse selection of incredible vehicles, select whatever perfectly matches your needs for your upcoming adventure or corporate journey.</p>
            </div>
            <div className="order-3 lg:order-2 flex flex-col lg:flex-row mt-4 gap-4 lg:gap-12 lg:m-8">
                <Image
                    className="w-full lg:w-3/5 rounded-lg aspect-video object-cover"
                    src={content.thumbnail}
                    width={400}
                    height={300}
                    alt={content.alt}
                    />
                <div className="w-full lg:w-2/5">
                    <table className="w-full table-fixed border-separate border-spacing-2 lg:border-spacing-4 rounded-lg">
                        <thead>
                            <tr className="tableContainer">
                                <td className="tableContent"><FaPeace size={iconSize}/>Brand</td>
                                <td className="tableContent">{content.brand}</td>
                            </tr>
                        </thead>
                        <tbody className="flex flex-col gap-2 lg:gap-4">
                            <tr className="tableContainer">
                                <td className="tableContent"><IoLogoModelS size={iconSize}></IoLogoModelS>model</td>
                                <td className="tableContent">{content.model} {content.year}</td>
                            </tr>
                            <tr className="tableContainer">
                                <td className="tableContent"><GiCarDoor size={iconSize}></GiCarDoor>doors/seats</td>
                                <td className="tableContent">{content.doors}/{content.seats}</td>
                            </tr>
                            <tr className="tableContainer">
                                <td className="tableContent"><GiWeight size={iconSize}></GiWeight>load</td>
                                <td className="tableContent">{content.load}</td>
                            </tr>      
                            <tr className="tableContainer">
                                <td className="tableContent"><TbAirConditioning size={iconSize}></TbAirConditioning>ac</td>
                                <td className="tableContent">{content.ac}</td>
                            </tr>
                            <tr className="tableContainer">
                                <td className="tableContent"><GiGearStick size={iconSize}></GiGearStick>transmission</td>
                                <td className="tableContent">{content.transmission}</td>
                            </tr>
                            <tr className="tableContainer">
                                <td className="tableContent"><FaGasPump size={iconSize}></FaGasPump>fuel</td>
                                <td className="tableContent">{content.fuel}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" className="callToAction mt-6 uppercase shadow-lg">${content.price} / day</button>
                </div>
            </div>
            <div className="order-2 lg:order-3 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:p-8">
                {PricingPlans.map((content) => (
                    <div key={content.id} 
                        >
                        <h1 onClick={ () => { toggleActive(content.id); handleContent(content.id - 1);  } } 
                            className={toggleActiveQuestion(content.id)}
                        >{content.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}