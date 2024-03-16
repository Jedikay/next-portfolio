import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="mb-4 text-4xl font-extrabold text-white lg:text-6xl">
            Hello, I&apos;m Kadyn
          </h1>
          <p className="text-[#adb7be text-lg lg:text-xl">
            I am web developer and a mom ☺️
          </p>
        </div>
        <div className="col-span-5">
          <div className="bg-[#181818] w-[500px] h-[500px] relative overflow-hidden rounded-full">
            <Image
              src="/images/jedikay.jpg"
              alt="jedikay image"
              className="absolute transform -translate-x-1 -translate-y-1 top-1 left-1"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
