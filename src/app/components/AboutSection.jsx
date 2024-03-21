"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2 list-disc">
        <li>JavaScript</li>
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>NextJs</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>Pearl River Community College, Poplarville, MS</li>
        <li>Associate in Arts-Criminal Justice</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
        <li>Meta Front-End Developer Certification</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="items-center gap-8 px-4 py-8 md:flex md:flex-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/designer.png"
          className="rounded-3xl"
          width={500}
          height={500}
          alt="about me image"
        />
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-purple-500">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a mother, a wife, a gamer, and a web developer—a delightful
            blend of roles and skills. My journey has taken me from the serene
            landscapes of rural Mississippi to the bustling digital world. As a
            web developer, I weave spells with JavaScript, Tailwind CSS, React,
            and NextJs. User experience? I&apos;ve got it covered. I&apos;m a
            storyteller who crafts digital narratives. Let&apos;s create
            something extraordinary together!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
