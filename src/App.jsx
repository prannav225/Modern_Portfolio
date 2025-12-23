import React from "react";
import AboutSection from "./app/components/AboutSection";
import EmailSection from "./app/components/EmailSection";
import Footer from "./app/components/Footer";
import HeroSection from "./app/components/HeroSection";
import Navbar from "./app/components/Navbar";
import ProjectSection from "./app/components/ProjectSection";
import SmoothScroll from "./app/components/SmoothScroll";

function App() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <SmoothScroll />
      <Navbar />
      <div className="container mx-auto px-4 md:px-12 py-4 mt-24">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}

export default App;
