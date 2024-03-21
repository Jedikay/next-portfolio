"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  return (
    <div className="relative w-full">
      <nav
        className={
          "flex h-24 w-full flex-row items-center justify-between bg-neutral-900 bg-opacity-70 px-10"
        }
      >
        <div className="flex flex-wrap items-center justify-between w-full h-full">
          <Link href={"/"}>
            <picture>
              <img
                src="./images/logo.png"
                alt="Jedikay Logo"
                className="w-20"
              />
            </picture>
          </Link>
          <div className="flex" id="Navbar">
            <ul className="flex flex-row gap-4 md:gap-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
