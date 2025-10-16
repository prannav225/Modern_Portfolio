import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#121212] py-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href={"/"} className="text-2xl font-bold bg-gradient-to-r from-yellow-500 via-orange-300 to-sky-400 bg-clip-text text-transparent mb-6 md:mb-0">
            Naga Pranav M
          </Link>
          <div className="flex flex-col items-center">
            <p className="text-slate-400 mb-4">Connect with me</p>
            <div className="flex space-x-6">
              <a 
                href="https://github.com/prannav225" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/prannav-m/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-2 text-center">
          <p className="text-slate-600">
            © {new Date().getFullYear()} Naga Pranav M. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;