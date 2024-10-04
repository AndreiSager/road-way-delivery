"use client";

import DownloadBtns from "./Downloads/DownloadBtns";

export default function Hero() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex h-full w-full max-w-center flex-row items-center justify-between px-40">
        <div className="flex flex-row items-center justify-center gap-8">
          {/* <Marquee
            play={true}
            direction={"down"}
            loop={0}
            pauseOnHover={false}
            speed={30}
            autoFill={true}
            style={{
              overflow: "visible",
              height: "412px",
              width: "917px",
              display: "flex",
              flexDirection: "row",
              zIndex: 30,
            }}
          >
            {MockupsData1.map(({ src, alt }, id) => (
              <div
                key={id}
                className="h-[917px] w-[412px] rounded-3xl border border-[16px] border-black bg-gray-600"
              ></div>
            ))}
          </Marquee> */}
          <div className="flex flex-col gap-8">
            <VerticalTicker duration={25000} easing="ease-out">
              {MockupsData1.map(({ src, alt }, id) => (
                <div
                  key={id}
                  className="h-[917px] w-[412px] rounded-3xl border border-[16px] border-black bg-gray-600"
                ></div>
              ))}
            </VerticalTicker>
          </div>

          {/* <Marquee
            play={true}
            direction={"up"}
            loop={0}
            pauseOnHover={false}
            speed={30}
            autoFill={true}
            style={{ overflow: "visible" }}
          >
            <div className="z-20 flex h-[917px] w-[412px] flex-col gap-8">
              {MockupsData2.map(({ src, alt }, id) => (
                <div
                  key={id}
                  className="border-6 h-[412px] w-[917px] rounded-[20px] border border-[16px] border-black bg-gray-600"
                ></div>
              ))}
            </div>
          </Marquee> */}
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
];
const MockupsData2 = [
  {
    src: "",
    alt: "",
  },
];
