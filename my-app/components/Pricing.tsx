import { PricingPlans } from "@/constants";

export default function Pricing() {
    return(
        <main className="sectionPadding">
            <div className="flex flex-row flex-wrap justify-center items-center gap-16">
                <div className="flex flex-col w-full lg:w-[600px] text-center">
                    <h1 className="sectionHeader">Testimonials</h1>
                    <p className="font-medium text-gray-500">Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
                </div>
                <div className="flex flex-row flex-wrap gap-10 justify-center items-center w-full">
                    {PricingPlans.map((plan) => (
                        <div>
                            <div className="bg-gray-400 w-[350px] aspect-square"></div>
                            <h1>{plan.price}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}