"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 text-center place-self-center sm:text-left">
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Kadyn",
                1000,
                "a Web Developer",
                1000,
                "a Front End Developer",
                1000,
                "Self-Taught",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be text-base sm:text-lg mb-6 lg:text-xl">
            I am a web developer and a mom 👩🏻‍💻👩🏻‍🍼
          </p>
          <div>
            <button className="w-full px-6 py-3 mr-4 text-white rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 sm:w-fit hover:bg-slate-200">
              Hire Me
            </button>
            <button className="w-full px-1 py-1 mt-3 text-white rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 sm:w-fit hover:bg-slate-800">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </button>
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
