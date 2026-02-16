"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HERO } from "@/lib/constants";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import GradientOrb from "@/components/animations/GradientOrb";

export default function Hero() {
  const headlineWords = HERO.headline.split(" ");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-screen background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85)",
        }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />

      {/* Subtle gradient orbs on top */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GradientOrb
          color="#0EA5E9"
          size={600}
          top="-10%"
          right="-5%"
          delay={0}
          duration={25}
        />
        <GradientOrb
          color="#06B6D4"
          size={400}
          bottom="0%"
          left="-5%"
          delay={3}
          duration={30}
        />
      </div>

      <Container className="relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Glassmorphism panel */}
          <motion.div
            className="glass-hero rounded-3xl p-8 md:p-12 lg:p-14"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Headline */}
            <motion.h1
              className="font-outfit font-bold text-white leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.3 },
                },
              }}
            >
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.25em]"
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                className="shimmer-hero inline-block mr-[0.25em]"
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
              >
                {HERO.highlightedWord}
              </motion.span>
              <motion.span
                className="inline-block text-white"
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
              >
                {HERO.headlineSuffix}
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-white/80 text-lg md:text-xl max-w-xl leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
              {HERO.subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.9,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
            >
              <Button variant="primary" size="lg" href="#quote-form">
                {HERO.ctaPrimary}
              </Button>
              <Button variant="outline" size="lg" href="#services">
                {HERO.ctaSecondary}
              </Button>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="mt-8 inline-flex items-center gap-2 glass rounded-full px-4 py-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
              <span className="text-sm font-semibold text-white">
                Serving 500+ Clients
              </span>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <a href="#trusted-by" aria-label="Scroll down">
          <ChevronDown className="w-6 h-6 text-white/60 bounce-slow" />
        </a>
      </motion.div>
    </section>
  );
}
