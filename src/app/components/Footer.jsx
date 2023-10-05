import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Link href={"/"} className="text-lg font-semibold  bg-gradient-to-bl from-yellow-500 via-orange-300 to-sky-400 px-4 py-1 rounded-full">PRANAV</Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;