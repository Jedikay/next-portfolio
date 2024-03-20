"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="w-full max-w-5xl py-8">
      <div className="flex flex-col items-center justify-center w-full md:flex-row md:justify-between">
        <div className="w-full text-left md:w-auto md:flex-1">
          <h1 className="w-full mb-4 text-3xl font-extrabold text-white md:text-4xl lg:text-6xl">
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">
              Hello, I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Kadyn",
                1000,
                "Meta Certified",
                1000,
                "a Web Developer",
                1000,
                "an UI/UX Engineer",
                1000,
                "Kadyn",
                5000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be mb-6 text-base md:text-lg lg:text-xl">
            I understand that pixels have personalities, and user interfaces
            whisper secrets. My rural roots ground me, but my digital wings
            soar. Hire me, and you&apos;ll get a dash of Southern charm, a pinch
            of gaming zeal, and a whole lot of code magic.
          </p>
          <div>
            <button className="w-full px-6 py-3 mr-4 text-white rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 md:w-fit">
              Hire Me
            </button>
            <button className="w-full px-1 py-1 mt-3 text-white rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 md:w-fit">
              <span className="block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800">
                Download Resume
              </span>
            </button>
          </div>
        </div>
        <div className="mt-10 w-[250px] md:mt-0">
          <div className="relative h-[250px] w-[250px] overflow-hidden rounded-full bg-[#181818]">
            <Image
              src="/images/jedikay.jpg"
              alt="jedikay image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
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
