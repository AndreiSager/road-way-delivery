"use client";

import { ServicesData } from "@/constants/ServicesDB";
import React, { ReactNode } from "react";

export default function Services() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-center flex-row justify-between gap-16 px-40 py-24">
        <div className="flex w-full max-w-[490px] flex-col gap-6">
          <h1 className="text-5xl font-bold">
            Be Faster, Smarter, and{" "}
            <span className="text-accent-1">More Efficient</span>
          </h1>
          <p className="text-xl">
            Roadway Delivery is designed for those who take delivery seriously.
            Effortlessly manage your deliveries, track your shipments, and
            ensure every package gets where it needs to go—on time, every time.
          </p>
        </div>

        <div className="group/cards grid grid-cols-2 gap-12">
          {ServicesData.map(({ icon, title, description }, id) => (
            <Card icon={icon} title={title} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
}

type CardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

function Card({ icon, title, description }: CardProps) {
  return (
    <div className="group/card z-10 flex w-full max-w-[420px] flex-col gap-6 p-6">
      <div className="relative flex h-12 w-12">
        <div className="z-20 h-12 w-12 text-accent-1 group-first/card:text-white group-hover/cards:group-hover/card:text-white group-hover/cards:text-accent-1 group-hover/cards:group-hover/card:group-first/card:text-white">
          {icon}
        </div>
        <div className="absolute left-[50%] top-[50%] z-10 h-0 w-0 -translate-x-[50%] -translate-y-[50%] rounded-full bg-accent-1 duration-500 ease-in-out group-first/card:h-20 group-first/card:w-20 group-hover/card:h-20 group-hover/card:w-20 group-hover/cards:group-first/card:h-0 group-hover/cards:group-hover/card:group-first/card:h-24 group-hover/cards:group-first/card:w-0 group-hover/cards:group-hover/card:group-first/card:w-24" />
      </div>
      <div>
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
}
