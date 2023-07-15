import Image from "next/image";

export default function Hero() {
    return(
        <div className="flex flex-row flex-wrap px-0 py-16 lg:p-0">
            <Image
                src={"/hero_truck.svg"}
                height={600}
                width={700}
                alt="White Truck"
                className="order-2 lg:order-1 w-full lg:w-[58%]"
                >
            </Image>
            <div className="order-1 lg:order-2 w-full lg:w-[42%] flex flex-col justify-center p-6 lg:p-12">
                <h1 className="w-full md:w-[400px] font-bold text-5xl">Lorem ipsum dolor sit amet.</h1>
                <p className="w-full md:w-[400px] font-medium text-slate-600 text-lg mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptates sit soluta aliquam laborum animi sit soluta aliquam.</p>
                <div className="flex flex-row gap-4">
                    <button type="button" className="w-fit py-4 px-10 font-bold text-white bg-accent-1 rounded-full mt-6">Rent Now</button>
                    <button type="button" className="w-fit py-4 px-10 font-bold text-white bg-slate-600 rounded-full mt-6">Learn More</button>
                </div>
            </div>
        </div>
    )
}