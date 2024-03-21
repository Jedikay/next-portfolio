"use client";
import React, { useState } from "react";
import GithubIcon from "./icons/GithubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center w-full gap-8 my-10 lg:items-start lg:flex-row"
    >
      <div className="w-full max-w-lg lg:w-1/2">
        <h5 className="my-2 text-3xl font-bold text-purple-500">
          Let&apos;s conjure a web development spell that will enchant browsers
          and bewitch users!
        </h5>
        <p className="max-w-md mb-4 text-slate-200">
          {" "}
          Currently accepting new opportunities and requests! Whether you have a
          question or just want to say hello, I&apos;ll get back to you as soon
          as possible!
        </p>
        <div className="flex flex-row gap-2 socials">
          <a
            href="https://github.com/Jedikay"
            target="_blank"
            className="w-12 curor-pointer text-slate-200 hover:text-purple-500"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/kadynstafford/"
            target="_blank"
            className="w-12 cursor-pointer text-slate-200 hover:text-purple-500"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="w-full max-w-md lg:flex-1">
        {emailSubmitted ? (
          <p className="text-sm text-green-500">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-zinc-900 border border-zinc-700 placeholder-zinc-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-white"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-zinc-900 border border-zinc-700 placeholder-zinc-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hello"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-zinc-900 border border-zinc-700 placeholder-zinc-400 text-gray-100 text-sm rounded-lg block w-full p-2.5 min-h-28"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full border border-purple-500 bg-purple-500"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
