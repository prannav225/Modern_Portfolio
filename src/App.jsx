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
    <main className="flex min-h-screen flex-col bg-background">
      <SmoothScroll />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <EmailSection />
      <Footer />
    </main>
  );
}

export default App;
