"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LogoBar from "@/components/sections/LogoBar";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Testimonials from "@/components/sections/Testimonials";
import VideoBlock from "@/components/sections/VideoBlock";
import Stats from "@/components/sections/Stats";
import ContactForm from "@/components/sections/ContactForm";
import FloatingCTA from "@/components/ui/FloatingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingCTA />
      <div className="mt-10 rounded-[20px] overflow-hidden bg-[#f2f2f2]">
        <main>
          <Hero />
          <LogoBar />
          <Services />
          <Industries />
          <Testimonials />
          <VideoBlock />
          <Stats />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
}
