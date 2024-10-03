"use client";

import { Testimonials as Reviews } from "@/constants";
import Image from "next/image";
import { AddPlus } from "react-coolicons";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import { BiMessageSquareDetail } from "react-icons/bi";
import DownloadBtns from "./Downloads/DownloadBtns";

export default function Testimonials() {
  return (
    <div className="w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-12 px-40 py-24">
        <div className="flex w-full flex-col items-center justify-center text-center">
          <h1 className="sectionHeader">Get Your Package Delivered Now!</h1>
          <p className="font-medium text-gray-500">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>

          <div className="flex flex-row gap-40">
            {NumbersData.map(({ end, name }, id) => (
              <Numbers key={id} end={end} name={name} />
            ))}
          </div>

          <p className="font-medium text-gray-500">
            Register now and experience seamless, dependable delivery services.
          </p>

          <DownloadBtns />
        </div>
        <div className="m-auto flex w-full max-w-center flex-row flex-wrap justify-center gap-8">
          <Marquee
            play={true}
            direction={"left"}
            loop={0}
            pauseOnHover={false}
            speed={30}
            autoFill={true}
          >
            <div className="first-letter: z-20 mr-3 flex w-full flex-row gap-3 md:mr-5 md:gap-5">
              {Reviews.map(({ review, residence, client, avatar, alt }, id) => (
                <Card
                  key={id}
                  review={review}
                  residence={residence}
                  client={client}
                  avatar={avatar}
                  alt={alt}
                />
              ))}
            </div>
          </Marquee>
          <Marquee
            play={true}
            direction={"right"}
            loop={0}
            pauseOnHover={false}
            speed={30}
            autoFill={true}
          >
            <div className="first-letter: z-20 mr-3 flex w-full flex-row gap-3 md:mr-5 md:gap-5">
              {Reviews.map(({ review, residence, client, avatar, alt }, id) => (
                <Card
                  key={id}
                  review={review}
                  residence={residence}
                  client={client}
                  avatar={avatar}
                  alt={alt}
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

type CardProps = {
  review: string;
  residence: string;
  client: string;
  avatar: string;
  alt: string;
};

function Card({ review, residence, client, avatar, alt }: CardProps) {
  return (
    <div className="flex aspect-video w-full flex-wrap gap-4 rounded-xl p-8 shadow-xl transition duration-100 hover:scale-105 sm:w-[350px]">
      <div className="flex w-full flex-row items-center justify-between sm:w-[350px]">
        <BiMessageSquareDetail size={40} className="text-accent-1" />
        <div className="flex flex-row items-center">
          <div className="items-right mr-4 flex flex-col text-right">
            <h1 className="text-md font-bold">{client}</h1>
            <h2 className="text-sm font-semibold text-gray-500">{residence}</h2>
          </div>
          <div className="h-[50px] w-[50px] overflow-hidden rounded-full bg-black">
            <Image src={avatar} width={50} height={50} alt={alt} className="" />
          </div>
        </div>
      </div>
      <p className="flex items-center text-sm text-black">{review}</p>
    </div>
  );
}

type NumbersProps = {
  end: number;
  name: string;
};

function Numbers({ end, name }: NumbersProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex flex-row items-start justify-center">
        <div className="invisible h-6 w-6" />
        <CountUp
          end={end}
          className="text-5xl font-bold text-accent-1"
          duration={5}
        />
        <AddPlus className="h-6 w-6 text-accent-1" />
      </div>
      <p className="text-base">{name}</p>
    </div>
  );
}

const NumbersData = [
  {
    end: 200000,
    name: "Packages Delivered",
  },
  {
    end: 520,
    name: "Delivery Branches",
  },
  {
    end: 10882,
    name: "Modes Of Transport",
  },
  {
    end: 349143,
    name: "Registered Drivers",
  },
];
