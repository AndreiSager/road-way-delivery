import Image from "next/image";

export default function Hero() {
    return(
        <div className="flex flex-row flex-wrap px-0 py-16 lg:p-0 bg-truck bg-cover w-full h-[100vh] bg-center lg:bg-right">
            <div className="order-1 lg:order-2 w-full lg:w-[800px] flex flex-col justify-center lg:mt-32 p-6 lg:p-12 gap-8">
                <div className="text-center lg:text-left flex flex-col items-center lg:items-start ">
                    <h1 className="w-full md:w-[600px] font-bold text-3xl lg:text-5xl text-white uppercase">Where There's A <span className="text-green-600">Road</span>, There's A <span  className="text-green-600">Way</span>.</h1>
                    <p className="w-full md:w-[600px] font-medium text-slate-200 text-lg mt-4">Embrace life's challenges with perseverance and unwavering belief in finding a way. With optimism and determination, unlock new opportunities and achieve your goals on this rewarding journey.</p>
                </div>
                <div className="flex flex-row gap-4 w-full lg:w-[450px]">
                    <button type="button" className="flex-1 w-fit py-4 px-10 font-bold text-white bg-accent-1 rounded-full mt-6 hover:brightness-125">Book Now</button>
                    <button type="button" className="flex-1 w-fit py-4 px-10 font-bold text-white bg-slate-600 rounded-full mt-6 hover:brightness-125">Learn More</button>
                </div>
            </div>
        </div>
    )
}