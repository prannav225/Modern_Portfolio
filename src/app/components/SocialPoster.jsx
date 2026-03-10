import React, { useState } from "react";
import { Mail, Globe, Sparkles, Phone, ArrowUpRight } from "lucide-react";
import { toPng } from "html-to-image";
import { QRCode } from "react-qrcode-logo";

export default function SocialPoster() {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadImage = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById("social-poster-container");
      if (!element) return;

      const dataUrl = await toPng(element, {
        quality: 1,
        pixelRatio: 2, // 1080x1350 * 2 = 2160x2700 (Very high res)
        backgroundColor: "#0c0c0b",
      });

      const link = document.createElement("a");
      link.download = "pranav-freelance-poster.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to generate poster:", err);
      alert("Something went wrong while downloading. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0b] flex flex-col items-center p-8 overflow-x-hidden">
      <div className="mb-6 text-white/50 text-sm max-w-sm text-center mt-10">
        <p>This is your High-Res Social Media Poster.</p>
        <p>Perfect for Instagram and WhatsApp (4:5 Ratio).</p>
      </div>

      <div className="flex gap-4 mb-10 z-50 relative">
        <button
          onClick={downloadImage}
          disabled={isDownloading}
          className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-wait"
        >
          {isDownloading ? "Generating Poster..." : "Download Poster (PNG)"}
        </button>
      </div>

      {/* Wrapper to scale down visually on screens without affecting actual captured size */}
      <div className="w-full flex justify-center items-start mb-20 origin-top">
        {/* Dynamic height and width wrapper for responsive scaling preview */}
        <div className="relative transform scale-[0.35] sm:scale-[0.5] md:scale-[0.6] lg:scale-[0.7] transform-gpu origin-top h-[472px] sm:h-[675px] md:h-[810px] lg:h-[945px] w-[378px] sm:w-[540px] md:w-[648px] lg:w-[756px] transition-all duration-300">
          {/* Actual Poster Container - Exact 1080x1350 Canvas for IG Portrait */}
          <div
            id="social-poster-container"
            style={{
              width: "1080px",
              height: "1350px",
              backgroundColor: "#0c0c0b",
            }}
            className="absolute top-0 left-0 rounded-3xl overflow-hidden border border-white/15 font-body text-white flex flex-col"
          >
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, #fff 1.5px, transparent 1.5px)`,
                backgroundSize: "45px 45px",
              }}
            ></div>

            {/* Artifact-Free Native Glows - Uses pure CSS gradients instead of heavy blur filters */}
            <div
              className="absolute top-[-25%] left-[-25%] w-[1200px] h-[1200px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute bottom-[-25%] right-[-30%] w-[1400px] h-[1400px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(34,197,94,0.1) 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10 w-full h-full p-20 flex flex-col justify-between">
              {/* Header */}
              <div className="flex justify-between items-start w-full">
                <div className="w-24 h-24 bg-linear-to-b from-white/10 to-transparent backdrop-blur-xl border border-white/20 rounded-full flex flex-col items-center justify-center">
                  <span className="text-[18px] font-mono font-black text-white/90">
                    npm _
                  </span>
                </div>
                <div className="flex flex-col items-end opacity-40 mt-3">
                  <span className="text-[15px] font-mono uppercase tracking-widest text-white leading-relaxed">
                    13.4355° N
                  </span>
                  <span className="text-[15px] font-mono uppercase tracking-widest text-white leading-relaxed">
                    77.7315° E
                  </span>
                </div>
              </div>

              {/* Huge Main Content block centered */}
              <div className="flex flex-col items-center justify-center -mt-8">
                {/* Ping Status */}
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-md mb-12 w-fit mx-auto">
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  <span className="flex items-center gap-2 text-[15px] uppercase tracking-[0.25em] font-bold text-green-400/90">
                    <Sparkles size={16} />
                    AVAILABLE FOR FREELANCE WORK
                  </span>
                </div>

                <h1 className="text-[6.2rem] font-black leading-[1.05] tracking-tight mb-8 font-heading text-transparent bg-clip-text bg-linear-to-br from-white via-white to-white/40 text-center max-w-[95%] mx-auto">
                  Upgrade Your Business With A Premium Website.
                </h1>

                <p className="text-[28px] font-light text-white/50 leading-relaxed text-center max-w-[80%] mx-auto mb-16">
                  I design and build incredibly fast, modern websites that help
                  your business attract more customers and dominate online.
                </p>

                {/* Services Grid (Giant format for print/poster) */}
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-6 max-w-[85%] mx-auto">
                  {[
                    "Custom Websites",
                    "E-Commerce Stores",
                    "Digital Branding",
                    "WordPress Sites",
                  ].map((service) => (
                    <div
                      key={service}
                      className="px-7 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center"
                    >
                      <span className="text-[14px] font-bold text-white/70 tracking-widest uppercase leading-none mt-1">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Area with Contacts and QR */}
              <div className="w-full flex justify-between items-end mt-16 pt-16 border-t border-white/10">
                {/* Contact Block */}
                <div className="flex flex-col gap-9 pb-2">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                      <Phone size={24} className="text-white/70" />
                    </div>
                    <div>
                      <div className="text-[14px] text-white/40 uppercase tracking-[0.25em] mb-2 font-bold whitespace-nowrap">
                        Call / WhatsApp
                      </div>
                      <div className="text-[26px] tracking-wide text-white/95 font-medium">
                        +91 9945859958
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                      <Globe size={24} className="text-white/70" />
                    </div>
                    <div>
                      <div className="text-[14px] text-white/40 uppercase tracking-[0.25em] mb-2 font-bold whitespace-nowrap">
                        View Portfolio Site
                      </div>
                      <div className="text-[26px] tracking-wide text-white/95 font-medium">
                        pra9v.site
                      </div>
                    </div>
                  </div>
                </div>

                {/* QR Block */}
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-linear-to-b from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl overflow-hidden flex items-center justify-center mb-5">
                    <QRCode
                      value="https://pra9v.site/"
                      size={170}
                      bgColor="transparent"
                      fgColor="#ffffff"
                      qrStyle="dots"
                      eyeRadius={8}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-white/60 text-center">
                      Scan to Visit
                    </span>
                    <ArrowUpRight size={18} className="text-white/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
