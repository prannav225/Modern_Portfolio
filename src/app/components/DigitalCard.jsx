import React, { useState } from "react";
import { Mail, Globe, Sparkles, Phone } from "lucide-react";
import { toPng } from "html-to-image";
import { QRCode } from "react-qrcode-logo";
import { jsPDF } from "jspdf";

export default function DigitalCard() {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadImage = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById("digital-card-container");
      if (!element) return;

      const dataUrl = await toPng(element, {
        quality: 1,
        pixelRatio: 3, // High resolution for mobile sharing
        backgroundColor: "#0c0c0b",
      });

      const link = document.createElement("a");
      link.download = "pranav-digital-card.png";
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
      const element = document.getElementById("digital-card-container");
      if (!element) return;

      const dataUrl = await toPng(element, {
        quality: 1,
        pixelRatio: 4, // Super high resolution for print
        backgroundColor: "#0c0c0b",
      });

      // Standard vertical 2" x 3.5" business card plus 0.125" bleed
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "in",
        format: [2.125, 3.75],
      });

      pdf.addImage(dataUrl, "PNG", 0, 0, 2.125, 3.75);
      pdf.save("pranav-digital-card-print.pdf");
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
        <p>This is your Digital Visiting Card template.</p>
        <p>
          Your non-tech clients can just scan the QR code to visit your website!
        </p>
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

      {/* Actual Digital Card Container (Mobile viewport 9:16 aspect ratio roughly) */}
      <div
        id="digital-card-container"
        style={{ width: "420px", height: "746px", backgroundColor: "#0c0c0b" }}
        className="relative rounded-3xl overflow-hidden border border-white/10 shrink-0 font-body text-white flex flex-col shadow-2xl shadow-white/5"
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
        <div className="absolute top-[-10%] left-[-20%] w-[350px] h-[350px] bg-white/5 blur-[90px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[350px] h-[350px] bg-green-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full h-full p-8 flex flex-col">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-10 w-full">
            <div className="w-14 h-14 bg-linear-to-b from-white/10 to-transparent backdrop-blur-xl border border-white/20 rounded-full flex flex-col items-center justify-center shadow-lg shadow-white/5">
              <span className="text-[11px] font-mono tracking-[0.2em] font-black text-white/90 uppercase">
                NPM
              </span>
            </div>

            <div className="flex flex-col items-end opacity-40 mt-1">
              <span className="text-[9px] font-mono uppercase tracking-widest text-white">
                12.97° N
              </span>
              <span className="text-[9px] font-mono uppercase tracking-widest text-white">
                77.59° E
              </span>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center w-full relative">
            {/* Pulsing Status */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-md w-fit mb-5 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] font-bold text-green-400/90">
                <Sparkles size={10} />
                AVAILABLE FOR NEW PROJECTS
              </span>
            </div>

            {/* Name & Title */}
            <h1 className="text-[3.5rem] font-black leading-[0.9] tracking-tighter mb-2.5 font-heading text-transparent bg-clip-text bg-linear-to-br from-white via-white to-white/40">
              PRANAV
            </h1>
            <h2 className="text-[13px] font-bold tracking-[0.25em] text-white/50 uppercase mb-7">
              Web Developer & Designer
            </h2>

            {/* Tagline */}
            <p className="text-[13px] font-light text-white/60 leading-relaxed max-w-[95%] mb-8">
              I build fast, beautiful, and easy-to-use websites that help
              businesses grow, attract more customers, and stand out online.
            </p>

            {/* Premium Pill Tags */}
            <div className="flex flex-wrap gap-x-2 gap-y-2.5 mb-3">
              {[
                "Custom Websites",
                "E-Commerce",
                "Digital Branding",
                "WordPress",
              ].map((service) => (
                <div
                  key={service}
                  className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm flex items-center justify-center"
                >
                  <span className="text-[9px] font-bold text-white/70 tracking-widest uppercase leading-none mt-px">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Gradient Divider */}
          <div className="w-full h-px bg-linear-to-r from-transparent via-white/15 to-transparent my-7"></div>

          <div className="flex flex-row justify-between items-end w-full pb-1 mt-auto">
            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shadow-lg shadow-white/5">
                  <Phone size={14} className="text-white/70" />
                </div>
                <div>
                  <div className="text-[9px] text-white/40 uppercase tracking-[0.2em] mb-1 font-bold whitespace-nowrap">
                    Phone / WA
                  </div>
                  <div className="text-[12px] tracking-wide text-white/95 font-medium">
                    +91 9945859958
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shadow-lg shadow-white/5">
                  <Mail size={16} className="text-white/70" />
                </div>
                <div>
                  <div className="text-[9px] text-white/40 uppercase tracking-[0.2em] mb-1 font-bold">
                    Email
                  </div>
                  <div className="text-[12px] tracking-wide text-white/95 font-medium">
                    pra9v@proton.me
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shadow-lg shadow-white/5">
                  <Globe size={16} className="text-white/70" />
                </div>
                <div>
                  <div className="text-[9px] text-white/40 uppercase tracking-[0.2em] mb-1 font-bold">
                    Portfolio
                  </div>
                  <div className="text-[12px] tracking-wide text-white/95 font-medium">
                    pra9v.site
                  </div>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center">
              <div className="p-2.5 bg-linear-to-b from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-xl shadow-black/50 mb-3 overflow-hidden flex items-center justify-center">
                <QRCode
                  value="https://pra9v.site/"
                  size={80}
                  bgColor="transparent"
                  fgColor="#ffffff"
                  qrStyle="dots"
                  eyeRadius={6}
                />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/40 text-center">
                Scan to
                <br />
                Visit
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
