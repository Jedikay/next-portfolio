import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t text-slate-200 footer border-t-slate-600">
      <div className="flex flex-col items-center justify-between gap-4 py-4">
        <picture>
          <img src="./images/logo.png" alt="Jedikay" className="w-12" />
        </picture>
        <p className="text-xs text-slate-600">
          ... a proud partner of{" "}
          <a
            className="font-bold hover:underline hover:text-purple-500"
            href="https://greatidea.dev/"
            target="_blank"
          >
            Great Idea Development
          </a>
        </p>
        <p className="text-xs text-slate-600">
          &copy; 2024 JediKay | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
