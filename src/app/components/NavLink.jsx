
import React from "react";

const NavLink = ({ href, title }) => {
  return (
    <a
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] text-sm md:text-base rounded md:p-0 hover:text-white transition-colors duration-300 font-medium tracking-wide"
    >
      {title}
    </a>
  );
};

export default NavLink;