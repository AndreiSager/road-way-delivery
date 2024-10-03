"use client";

import Image from "next/image";
import React from "react";

export default function DownloadBtns() {
  const handleButton = () => {
    // Play Store action
  };

  return (
    <div className="flex flex-row gap-6">
      <button
        onClick={() => handleButton()}
        className="group flex select-none flex-row items-center justify-center gap-8 rounded-full bg-black py-2 pl-8 pr-2 duration-300 ease-out hover:-translate-y-1 hover:bg-[#1a1a1a] hover:shadow-xl hover:brightness-125"
      >
        <p className="text-white">Play Store</p>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3D3D3D] group-hover:bg-[#4a4a4a]">
          <Image
            src={"/Icons/playstore-svgrepo-com.svg"}
            width={20}
            height={20}
            alt="Play Store"
          />
        </div>
      </button>
      <button
        onClick={() => handleButton()}
        className="group flex select-none flex-row items-center justify-center gap-8 rounded-full bg-black py-2 pl-8 pr-2 duration-300 ease-out hover:-translate-y-1 hover:bg-[#1a1a1a] hover:shadow-xl hover:brightness-125"
      >
        <p className="text-white">App Store</p>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3D3D3D] group-hover:bg-[#4a4a4a]">
          <Image
            src={"/Icons/app-store-svgrepo-com.svg"}
            width={24}
            height={24}
            alt="App Store"
          />
        </div>
      </button>
    </div>
  );
}
