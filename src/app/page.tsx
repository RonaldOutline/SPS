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
import VideoBlock from "@/components/sections/VideoBlock";
import Certificates from "@/components/sections/Certificates";
import FAQ from "@/components/sections/FAQ";
import Careers from "@/components/sections/Careers";
import QuoteForm from "@/components/sections/QuoteForm";
import InlineCTA from "@/components/sections/InlineCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero - full-width with big background image + glassmorphism */}
        <Hero />
        <LogoBar />

        {/* Main body: content sections + sticky sidebar quote form */}
        <div className="relative mx-auto max-w-[1440px] lg:flex lg:gap-10">
          {/* Content column - sections keep their own Container */}
          <div className="flex-1 min-w-0">
            <Services />

            <InlineCTA
              title="Need a Custom Cleaning Plan?"
              subtitle="Tell us about your space and we'll create a tailored solution."
            />

            <Stats />
            <Industries />

            <InlineCTA
              title="Serving Your Industry"
              subtitle="Request a specialized quote for your sector."
            />

            <VideoBlock />
            <Process />
            <Certificates />
            <Testimonials />

            <InlineCTA
              title="Ready to Experience the Difference?"
              subtitle="Join 500+ satisfied clients across Estonia."
            />

            <FAQ />
            <Sustainability />
          </div>

          {/* Sticky sidebar quote form (desktop only) */}
          <div className="hidden lg:block w-[380px] shrink-0 pt-20 pr-6 xl:pr-10">
            <div className="sticky top-28">
              <QuoteForm />
            </div>
          </div>
        </div>

        {/* Full-width sections below sidebar area */}
        <Careers />
        <CTABanner />

        {/* Mobile: floating quote button */}
        <div className="lg:hidden fixed bottom-6 right-6 z-50">
          <a
            href="#quote-form-mobile"
            className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile: quote form section */}
        <div className="lg:hidden" id="quote-form-mobile">
          <div className="mx-auto w-full max-w-xl px-4 sm:px-6 py-12">
            <QuoteForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
