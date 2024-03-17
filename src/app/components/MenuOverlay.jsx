import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex w-full flex-col items-center justify-center py-4">
      {links.map((link, index) => (
        <li key={index} className="flex w-full items-center justify-center">
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  )
};

export default MenuOverlay;
