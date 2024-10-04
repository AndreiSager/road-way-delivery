"use client";

import Marquee from "react-easy-marquee";
import DownloadBtns from "./Downloads/DownloadBtns";

export default function Hero() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex h-full w-full max-w-center flex-row items-center justify-between overflow-hidden px-40">
        <div className="flex flex-row items-center justify-center gap-8">
          <div className="h-full max-h-[1000px] w-[320px]">
            <Marquee
              duration={20000}
              background="transparent"
              height="1500px"
              width="auto"
              axis="Y"
              align="center"
              pauseOnHover={false}
              reverse={false}
              className="flex flex-col gap-8"
            >
              {MockupsData1.map(({ src, alt }, id) => (
                <div
                  key={id}
                  className="mt-8 h-[600px] w-[320px] rounded-3xl bg-gray-100"
                />
              ))}
            </Marquee>
          </div>
          <div className="h-full max-h-[1000px] w-[320px]">
            <Marquee
              duration={20000}
              background="transparent"
              height="1500px"
              width="auto"
              axis="Y"
              align="center"
              pauseOnHover={false}
              reverse={true}
              className="flex flex-col gap-8"
            >
              {MockupsData2.map(({ src, alt }, id) => (
                <div
                  key={id}
                  className="mt-8 h-[600px] w-[320px] rounded-3xl bg-gray-100"
                ></div>
              ))}
            </Marquee>
          </div>
        </div>

        <div className="flex w-full max-w-[730px] flex-col gap-12">
          <h1 className="text-5xl font-bold">
            Where There’s A Road,
            <br />
            <span className="text-accent-1">There’s A Way</span>
          </h1>
          <div className="flex flex-col gap-6">
            <p className="w-full max-w-[570px]">
              Have your package delivered safe and sound to any location
              connected with a road. Available on Android.
            </p>
          </div>
          <DownloadBtns />
        </div>
      </div>
    </div>
  );
}

const MockupsData1 = [
  {
    src: "",
    alt: "",
  },
  {
    src: "",
    alt: "",
  },
  {
    src: "",
    alt: "",
  },
];
const MockupsData2 = [
  {
    src: "",
    alt: "",
  },
  {
    src: "",
    alt: "",
  },
  {
    src: "",
    alt: "",
  },
];
