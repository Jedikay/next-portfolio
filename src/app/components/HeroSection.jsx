import React from "react";
import Image from "next/image"

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
            <h1 className="mb-4 text-4xl font-extrabold text-white lg:text-6xl">Hello, I&apos;m Kadyn</h1>
            <p className="text-[#adb7be text-lg lg:text-xl">I am a web developer.</p>
            </div>
            <div className="col-span-5">
            <div className="squared-full bg-[#181818] w-[500px] h-[500px] relative">
            <Image
            src="/images/jedikay.jpg"
            alt="jedikay image"
            className="absolute transform -translate-x-1 -translate-y-1 top-1 left-1"
            width={500}
            height={300}
            />
            </div>
            </div>
            </div>
        </section>
    );
};

export default HeroSection;