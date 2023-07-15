import { Testimonials as Reviews } from "@/constants"
import { BiMessageSquareDetail } from "react-icons/bi"

export default function Testimonials() {
    const sizeIcon = 40;

    return(
        <main className="sectionPadding flex flex-row flex-wrap justify-center items-center gap-16">
            <div className="flex flex-col w-full lg:w-[600px] text-center">
                <h1 className="sectionHeader">Testimonials</h1>
                <p className="font-medium text-gray-500">Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
            </div>
            <div className="w-full flex flex-row flex-wrap gap-8 m-auto justify-center">
                {Reviews.map((review) => (
                    <div key={review.id} className="w-full sm:w-[350px] aspect-video bg-slate-200 shadow-xl p-8 flex flex-wrap gap-4 rounded-xl hover:scale-105 linear duration-100 transition">
                        <p className="font-medium text-md text-black flex items-center">{review.review}</p>
                        <div className="flex flex-row justify-between items-center w-full sm:w-[350px]">
                            <BiMessageSquareDetail size={sizeIcon} className="text-accent-1"/>
                            <div className="flex flex-row items-center">
                                <div className="flex flex-col text-right items-right mr-4">
                                    <h1 className="font-bold text-md">{review.client}</h1>
                                    <h2 className="font-semibold text-sm text-gray-500">{review.residence}</h2>
                                </div>
                                <div className="w-[40px] h-[40px] rounded-full bg-black"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}