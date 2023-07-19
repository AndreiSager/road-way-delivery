import Image from "next/image";

export default function Hero() {
    return(
        <div className="flex flex-row flex-wrap px-0 py-16 lg:p-0 bg-truck bg-cover w-full h-[100vh] bg-center lg:bg-right">
            <div className="order-1 lg:order-2 w-full lg:w-[600px] flex flex-col justify-center p-6 lg:p-12 gap-8">
                <div className="text-center lg:text-left">
                    <h1 className="w-full md:w-[400px] font-bold text-5xl text-white">Lorem ipsum dolor sit amet.</h1>
                    <p className="w-full md:w-[400px] font-medium text-slate-200 text-lg mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptates sit soluta aliquam laborum animi sit soluta aliquam.</p>
                </div>
                <div className="flex flex-row gap-4">
                    <button type="button" className="flex-1 w-fit py-4 px-10 font-bold text-white bg-accent-1 rounded-full mt-6">Rent Now</button>
                    <button type="button" className="flex-1 w-fit py-4 px-10 font-bold text-white bg-slate-600 rounded-full mt-6">Learn More</button>
                </div>
            </div>
        </div>
    )
}