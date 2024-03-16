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
          <p className="text-[#adb7be text-lg mb-6 lg:text-xl">
            I am web developer and a mom ☺️
          </p>
          <div>
            <button>Hire Me</button>
            <button>Download CV</button>
          </div>
        </div>
        <div className="col-span-5 mt-4 place-self-center lg:mt-0">
          <div className="bg-[#181818] w-[250px] h-[250px] relative overflow-hidden rounded-full">
            <Image
              src="/images/jedikay.jpg"
              alt="jedikay image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
