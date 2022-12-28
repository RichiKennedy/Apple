import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import BuyButton from "./BuyButton";
import WowBanner from "./WowBanner";

const LandingPage = () => {
  return (
    <section className="flex h-screen fixed translate-y-[45px] flex-col items-center justify-center">
      <div className="flex h-full  w-[100vw] flex-col items-center justify-evenly bg-gray-50 ">
        <h1 className="flex flex-col items-center justify-center space-y-2 ">
          <span className="text-3xl font-semibold md:text-4xl lg:text-5xl ">
            iPhone 14
          </span>
          <span className="text-xl font-normal md:text-2xl lg:text-3xl ">
            Big and bigger.
          </span>
          <span className="flex items-center justify-center gap-x-6">
            <Link className="link" href="/about">
              Learn more <AiOutlineRight />
            </Link>
            <Link className="link" href="/about">
              Buy now <AiOutlineRight />
            </Link>

            
            {/* <BuyButton title="Buy now" padding="100px" /> */}
          </span>
        </h1>
        <div className="relative h-[450px] w-full md:w-[70vw] lg:w-[50vw]">
          <Image
            src="/Apple-iPhone-14.jpeg"
            alt="iPhone 14"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      {/* <WowBanner /> */}
    </section>
  );
};

export default LandingPage;
