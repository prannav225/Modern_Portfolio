import React from "react";

const Footer = () => {
  return (
    <footer className="pt-24 md:pt-40 pb-16 mt-32 border-t border-white/5 bg-[#0c0c0b] relative overflow-hidden">
      {/* Infinite Scrolling Branding Marquee */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none py-10">
        <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite]">
          {[1, 2, 3, 4].map((i) => (
            <h1
              key={i}
              className="text-[30vw] md:text-[20vw] font-black tracking-tighter mx-10"
            >
              PRANAV M.
            </h1>
          ))}
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20 md:mb-32">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-8xl font-bold tracking-tighter mb-12">
              Ready to build? <br />
              <span className="text-white/20 hover:text-white transition-colors duration-700 cursor-pointer">
                Let's get to work.
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-8">
              <a
                href="mailto:pra9v@proton.me"
                className="group flex flex-col gap-2 transition-all duration-500"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/20">
                  Freelance
                </span>
                <span className="text-xl md:text-2xl font-light text-white/40 group-hover:text-white transition-colors border-b border-white/5 group-hover:border-white/20 pb-1">
                  pra9v@proton.me
                </span>
              </a>
              <a
                href="mailto:nagapranav.m@gmail.com"
                className="group flex flex-col gap-2 transition-all duration-500"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/20">
                  Corporate
                </span>
                <span className="text-xl md:text-2xl font-light text-white/40 group-hover:text-white transition-colors border-b border-white/5 group-hover:border-white/20 pb-1">
                  nagapranav.m@gmail.com
                </span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16 md:pt-4">
            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/20">
                Elsewhere
              </span>
              <div className="flex flex-col gap-3">
                {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-base text-white/40 hover:text-white transition-colors duration-300 w-fit"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/20">
                Location
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-base text-white/40">Bengaluru, IN</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/10 font-bold">
                  GMT +5:30
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/20">
            © {new Date().getFullYear()} Naga Pranav M.
          </p>
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">
              Status: Available for hire
            </span>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `,
        }}
      />
    </footer>
  );
};

export default Footer;
