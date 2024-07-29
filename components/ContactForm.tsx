import { FooterContent } from "@/constants";
import { BsMailbox, BsTelephone } from "react-icons/bs";
import { GoGear } from "react-icons/go";

export default function ContactForm() {
    const sizeIcon = 30; 

    return(
        <div className="sectionPadding flex flex-col flex-wrap lg:flex-row justify-center gap-12">
            <h1 className="sectionHeader w-full text-center">Contact Us</h1>
            <div className="w-full lg:w-2/5 lg:order-2 gap-6 text-center lg:text-left lg:items-start flex flex-col items-center">
                <h1 className="font-bold text-2xl">Want To Know Even More About Us?</h1>
                <p className="font-bold text-gray-500">We are Road Way Delivery, a trusted transportation provider dedicated to excellence in service. With a strong track record, we prioritize customer satisfaction and safety. Our skilled drivers, modern fleet, and advanced technology ensure efficient and reliable journeys. From local deliveries to long-haul shipments, we offer tailored solutions to diverse needs. Our commitment to professionalism, integrity, and personalized service sets us apart. Partner with us and experience exceptional transportation at Road Way Delivery</p>
                <div className="w-fit">
                    <div className="flex flex-col gap-4 mt-4">
                        <div className="flex flex-row gap-4 items-center">
                            <BsMailbox size={sizeIcon}/>
                            <div className="flex flex-col text-left">
                                <h1 className="font-bold text-md capitalize text-left">{FooterContent.contactInfo[0].title}</h1>
                                <h1>{FooterContent.contactInfo[0].info}</h1>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <BsTelephone size={sizeIcon}/>
                            <div className="flex flex-col text-left">
                                <h1 className="font-bold text-md capitalize text-left">{FooterContent.contactInfo[1].title}</h1>
                                <h1>{FooterContent.contactInfo[1].info}</h1>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <GoGear size={sizeIcon}/>
                            <div className="flex flex-col">
                                <h1 className="font-bold text-md capitalize">{FooterContent.contactInfo[2].title}</h1>
                                <h1>{FooterContent.contactInfo[2].info}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-2/5 lg:order-1">
                <form action="" className='flex flex-wrap w-full gap-3'>
                    <h1 className="font-bold">Enter your name..*</h1>
                    <input 
                        type="text" 
                        name='Sender' 
                        placeholder='E.g:"Shaners Sager"'
                        className='w-full inputField focus:placeholder:italic'
                        />
                    <h1 className="font-bold">Enter your email..*</h1>
                    <input 
                        type="text" 
                        name='Email' 
                        placeholder='shanerssager@dummy.com'
                        className='w-full inputField focus:placeholder:italic'
                        />
                    <h1 className="font-bold">Write your message..*</h1>
                    <textarea 
                        name='Message' 
                        placeholder='“Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.” -Marcus Aurelius'
                        className='w-full inputField textArea focus:placeholder:italic'
                        />
                    <button type='submit' className='w-full callToAction mt-2 shadow-xl shadow-gray-300'>Send</button>
                </form>
            </div>
        </div>
    )
}