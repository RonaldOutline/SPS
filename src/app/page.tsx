"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LogoBar from "@/components/sections/LogoBar";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Sustainability from "@/components/sections/Sustainability";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Services />
        <Stats />
        <Industries />
        <Process />
        <Testimonials />
        <Sustainability />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
