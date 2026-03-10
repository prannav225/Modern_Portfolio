import React, { useState } from "react";
import { Mail, Globe, Sparkles, Phone } from "lucide-react";
import { toPng } from "html-to-image";
import { QRCode } from "react-qrcode-logo";
import { jsPDF } from "jspdf";

export default function DigitalCardHorizontal() {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadImage = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById(
        "digital-card-horizontal-container",
      );
      if (!element) return;

      const dataUrl = await toPng(element, {
        quality: 1,
        pixelRatio: 3,
        backgroundColor: "#0c0c0b",
      });

      const link = document.createElement("a");
      link.download = "pranav-digital-card-horizontal.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to generate digital card:", err);
      alert(
        "Something went wrong while downloading the card. Please try again.",
      );
    } finally {
      setIsDownloading(false);
    }
  };

  const downloadPdf = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById(
        "digital-card-horizontal-container",
      );
      if (!element) return;

      const dataUrl = await toPng(element, {
        quality: 1,
        pixelRatio: 4, // Super high resolution for print
        backgroundColor: "#0c0c0b",
      });

      // Standard horizontal 3.5" x 2" business card plus 0.125" bleed
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "in",
        format: [3.75, 2.125],
      });

      pdf.addImage(dataUrl, "PNG", 0, 0, 3.75, 2.125);
      pdf.save("pranav-digital-card-horizontal-print.pdf");
    } catch (err) {
      console.error("Failed to generate digital card PDF:", err);
      alert(
        "Something went wrong while downloading the card PDF. Please try again.",
      );
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0b] flex flex-col items-center justify-center p-8 lg:p-12">
      <div className="mb-6 text-white/50 text-sm max-w-sm text-center">
        <p>This is your Horizontal Digital Visiting Card.</p>
        <p>A classic business card layout, modernized.</p>
      </div>

      <div className="flex gap-4 mb-8 z-50 relative">
        <button
          onClick={downloadImage}
          disabled={isDownloading}
          className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-wait"
        >
          {isDownloading ? "Generating..." : "Download PNG (Digital)"}
        </button>

        <button
          onClick={downloadPdf}
          disabled={isDownloading}
          className="px-6 py-3 bg-white/10 text-white font-bold border border-white/20 uppercase tracking-widest text-sm rounded-full hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-wait"
        >
          {isDownloading ? "Generating..." : "Download PDF (Print)"}
        </button>
      </div>

      {/* Horizontal Digital Card Container (Standard Business Card roughly ~ 3.5:2 ratio or 16:9) */}
      <div
        id="digital-card-horizontal-container"
        style={{ width: "746px", height: "420px", backgroundColor: "#0c0c0b" }}
        className="relative rounded-3xl overflow-hidden border border-white/10 shrink-0 font-body text-white flex shadow-2xl shadow-white/5"
      >
        {/* Structural Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>

        {/* Decorative Gradient Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-white/5 blur-[90px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-green-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full h-full p-10 flex">
          {/* Left Column: Branding and Intro */}
          <div className="flex-1 flex flex-col justify-between pr-8 border-r border-white/10">
            {/* Header / Badges */}
            <div className="flex justify-between items-start w-full">
              <div className="w-14 h-14 bg-linear-to-b from-white/10 to-transparent backdrop-blur-xl border border-white/20 rounded-full flex flex-col items-center justify-center shadow-lg shadow-white/5">
                <span className="text-[11px] font-mono tracking-[0.2em] font-black text-white/90 uppercase">
                  NPM
                </span>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col mt-4">
              {/* Static Status Badge placed above name */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.1)] w-fit mb-4">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] font-bold text-green-400/90">
                  <Sparkles size={10} />
                  AVAILABLE
                </span>
              </div>

              <h1 className="text-[3.5rem] font-black leading-[0.9] tracking-tighter mb-2 font-heading text-transparent bg-clip-text bg-linear-to-br from-white via-white to-white/40">
                PRANAV
              </h1>
              <h2 className="text-[13px] font-bold tracking-[0.25em] text-white/50 uppercase mb-5">
                Web Developer & Designer
              </h2>

              <p className="text-[12px] font-light text-white/60 leading-relaxed max-w-[90%] mb-6">
                I build fast, beautiful, and easy-to-use websites that help
                businesses grow, attract more customers, and stand out online.
              </p>

              {/* Premium Pill Tags */}
              <div className="flex flex-wrap gap-x-2 gap-y-2.5">
                {[
                  "Custom Websites",
                  "E-Commerce",
                  "Digital Branding",
                  "WordPress",
                ].map((service) => (
                  <div
                    key={service}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm flex items-center justify-center"
                  >
                    <span className="text-[8px] font-bold text-white/70 tracking-widest uppercase leading-none mt-px">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact & QR */}
          <div className="w-[45%] flex flex-col justify-between pl-10">
            <div className="flex flex-col items-end opacity-40">
              <span className="text-[9px] font-mono uppercase tracking-widest text-white">
                12.97° N
              </span>
              <span className="text-[9px] font-mono uppercase tracking-widest text-white">
                77.59° E
              </span>
            </div>

            <div className="flex flex-col items-center mt-2">
              <div className="p-3 bg-linear-to-b from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-xl shadow-black/50 overflow-hidden flex items-center justify-center mb-4">
                <QRCode
                  value="https://pra9v.site/"
                  size={100}
                  bgColor="transparent"
                  fgColor="#ffffff"
                  qrStyle="dots"
                  eyeRadius={6}
                />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/40 text-center">
                Scan to Visit
              </span>
            </div>

            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shadow-lg shadow-white/5">
                  <Mail size={16} className="text-white/70" />
                </div>
                <div>
                  <div className="text-[8px] text-white/40 uppercase tracking-[0.2em] mb-1 font-bold">
                    Email
                  </div>
                  <div className="text-[12px] tracking-wide text-white/95 font-medium">
                    pra9v@proton.me
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shadow-lg shadow-white/5">
                  <Phone size={16} className="text-white/70" />
                </div>
                <div>
                  <div className="text-[8px] text-white/40 uppercase tracking-[0.2em] mb-1 font-bold whitespace-nowrap">
                    Phone / WA
                  </div>
                  <div className="text-[12px] tracking-wide text-white/95 font-medium">
                    +91 9945859958
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shadow-lg shadow-white/5">
                  <Globe size={16} className="text-white/70" />
                </div>
                <div>
                  <div className="text-[8px] text-white/40 uppercase tracking-[0.2em] mb-1 font-bold">
                    Portfolio
                  </div>
                  <div className="text-[12px] tracking-wide text-white/95 font-medium">
                    pra9v.site
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
