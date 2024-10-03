"use client";

import DownloadBtns from "./Downloads/DownloadBtns";

export default function Hero() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex h-[100vh] max-h-full w-full max-w-center flex-row items-center justify-between px-40 py-24">
        <div>Place Mockup Here</div>
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
