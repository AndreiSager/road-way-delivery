import { FooterContent } from "@/constants";
import { BsMailbox, BsTelephone } from "react-icons/bs";
import { GoGear } from "react-icons/go";

export default function ContactForm() {
  const sizeIcon = 30;

  return (
    <div className="sectionPadding flex flex-col flex-wrap justify-center gap-12 lg:flex-row">
      <h1 className="sectionHeader w-full text-center">Contact Us</h1>
      <div className="flex w-full flex-col items-center gap-6 text-center lg:order-2 lg:w-2/5 lg:items-start lg:text-left">
        <h1 className="text-2xl font-bold">Want To Know Even More About Us?</h1>
        <p className="font-bold text-gray-500">
          We are Road Way Delivery, a trusted transportation provider dedicated
          to excellence in service. With a strong track record, we prioritize
          customer satisfaction and safety. Our skilled drivers, modern fleet,
          and advanced technology ensure efficient and reliable journeys. From
          local deliveries to long-haul shipments, we offer tailored solutions
          to diverse needs. Our commitment to professionalism, integrity, and
          personalized service sets us apart. Partner with us and experience
          exceptional transportation at Road Way Delivery
        </p>
        <div className="w-fit">
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex flex-row items-center gap-4">
              <BsMailbox size={sizeIcon} />
              <div className="flex flex-col text-left">
                <h1 className="text-md text-left font-bold capitalize">
                  {FooterContent.contactInfo[0].title}
                </h1>
                <h1>{FooterContent.contactInfo[0].info}</h1>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <BsTelephone size={sizeIcon} />
              <div className="flex flex-col text-left">
                <h1 className="text-md text-left font-bold capitalize">
                  {FooterContent.contactInfo[1].title}
                </h1>
                <h1>{FooterContent.contactInfo[1].info}</h1>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <GoGear size={sizeIcon} />
              <div className="flex flex-col">
                <h1 className="text-md font-bold capitalize">
                  {FooterContent.contactInfo[2].title}
                </h1>
                <h1>{FooterContent.contactInfo[2].info}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:order-1 lg:w-2/5">
        <form action="" className="flex w-full flex-wrap gap-3">
          <label className="font-bold">Enter your name..*</label>
          <input
            type="text"
            name="Sender"
            placeholder='E.g:"Shaners Sager"'
            className="inputField w-full focus:placeholder:italic"
          />
          <label className="font-bold">Enter your email..*</label>
          <input
            type="text"
            name="Email"
            placeholder="shanerssager@dummy.com"
            className="inputField w-full focus:placeholder:italic"
          />
          <label className="font-bold">Write your message..*</label>
          <textarea
            name="Message"
            placeholder="“Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.” -Marcus Aurelius"
            className="inputField textArea w-full focus:placeholder:italic"
          />
          <button
            type="submit"
            className="callToAction mt-2 w-full shadow-xl shadow-gray-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
