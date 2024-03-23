"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="w-full max-w-5xl pb-16">
      <div className="flex flex-col-reverse items-center justify-center w-full md:flex-row md:justify-between">
        <div className="w-full text-left md:flex-1">
          <h1 className="w-full mb-4 text-4xl font-extrabold text-white lg:text-6xl">
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
                "a UI/UX Engineer",
                1000,
                "Kadyn",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be mb-6 text-base md:text-lg lg:text-xl w-full md:w-4/5">
            I understand that pixels have personalities, and user interfaces
            whisper secrets. My rural roots ground me, but my digital wings
            soar. Hire me, and you&apos;ll get a dash of Southern charm, a pinch
            of gaming zeal, and a whole lot of code magic.
          </p>
          <div className="flex flex-col w-full gap-1 md:gap-4 md:flex-row">
            <button className="w-full px-12 py-2 mt-3 text-white rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 md:w-fit">
              <a href="/#contact">Hire Me</a>
            </button>
            <button className="w-full px-1 py-1 mt-3 text-white rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 md:w-fit">
              <a
                href="/kadyn-stafford-resume.pdf"
                target="_blank"
                className="block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800"
              >
                Download Resume
              </a>
            </button>
          </div>
        </div>
        <picture className="mb-10 md:mb-0">
          <img
            src="/images/jedikay.jpg"
            alt="jedikay image"
            className="w-64 rounded-full"
          />
        </picture>
      </div>
    </section>
  );
};

export default HeroSection;
