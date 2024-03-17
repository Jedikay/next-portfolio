"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from "./MenuOverlay";

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
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="relative w-full">
      <nav
        className={
          !navbarOpen
            ? 'z-10 flex h-24 w-full flex-row items-center justify-between bg-neutral-900 bg-opacity-70 px-8'
            : 'hidden'
        }
      >
        <div className="flex h-full w-full flex-wrap items-center justify-between px-4 py-2">
          <Link href={'/'}>
            <picture>
              <img
                src="./images/logo.png"
                alt="Jedikay Logo"
                className="w-20"
              />
            </picture>
          </Link>
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center rounded border border-slate-300 px-3 py-2 text-slate-300 hover:border-purple-500 hover:text-purple-500"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center rounded border border-slate-300 px-3 py-2 text-slate-300 hover:border-purple-500 hover:text-purple-500"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="Navbar">
            <ul className="mt-0 flex p-4 md:flex-row md:space-x-8 md:p-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={
          navbarOpen
            ? 'absolute z-50 h-screen w-screen bg-neutral-900'
            : 'hidden'
        }
      >
        <nav className="z-10 flex h-24 w-full flex-row items-center justify-between bg-neutral-900 bg-opacity-70 px-8">
          <div className="flex h-full w-full flex-wrap items-center justify-between px-4 py-2">
            <Link href={'/'}>
              <picture>
                <img
                  src="./images/logo.png"
                  alt="Jedikay Logo"
                  className="w-20"
                />
              </picture>
            </Link>
            <div className="mobile-menu block md:hidden">
              {!navbarOpen ? (
                <button
                  onClick={() => setNavbarOpen(true)}
                  className="flex items-center rounded border border-slate-300 px-3 py-2 text-slate-300 hover:border-purple-500 hover:text-purple-500"
                >
                  <Bars3Icon className="h-5 w-5" />
                </button>
              ) : (
                <button
                  onClick={() => setNavbarOpen(false)}
                  className="flex items-center rounded border border-slate-300 px-3 py-2 text-slate-300 hover:border-purple-500 hover:text-purple-500"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </nav>

        <MenuOverlay links={navLinks} />
      </div>
    </div>
  )
};

export default Navbar;
