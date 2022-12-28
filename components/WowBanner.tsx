import Image from "next/image";
import React from "react";

const WowBanner = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-evenly bg-[#01012A]">
      <div className="relative h-[300px] w-[300px]">
        <Image
          src="/holiday-logo.png"
          alt="iPhone 14"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="space-y-4 text-center text-white">
        <h1 className="text-4xl font-semibold md:text-6xl">Wow yourself.</h1>
        <h3 className="text-xl font-thin md:text-2xl">
          Get the gift you've been eyeing all season
        </h3>
      </div>
    </div>
  );
};

export default WowBanner;
