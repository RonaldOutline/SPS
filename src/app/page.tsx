"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LogoBar from "@/components/sections/LogoBar";
import Services from "@/components/sections/Services";
import WhyProfessional from "@/components/sections/WhyProfessional";
import Stats from "@/components/sections/Stats";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Sustainability from "@/components/sections/Sustainability";
import ContactForm from "@/components/sections/ContactForm";

import FloatingCTA from "@/components/ui/FloatingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingCTA />
      <main>
        <Hero />
        <LogoBar />
        <Services />
        <WhyProfessional />
        <Stats />
        <Industries />
        <Process />
        <Testimonials />

        <Sustainability />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
