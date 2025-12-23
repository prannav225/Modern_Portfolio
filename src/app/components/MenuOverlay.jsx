import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center fixed inset-0 top-[70px] bg-black/90 backdrop-blur-xl z-40 h-screen justify-center gap-8">
      {links.map((link, index) => (
        <li key={index}> 
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
