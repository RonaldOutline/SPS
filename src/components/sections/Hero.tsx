"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HERO } from "@/lib/constants";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const HERO_STATS = [
  { value: "200", suffix: "+", label: "Töötajat" },
  { value: null, display: "ISO", label: "Sertifitseeritud" },
  { value: "160", suffix: "+", label: "Äriklienti" },
];

export default function Hero() {
  const headlineWords = HERO.headline.split(" ");

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/SPShero2.jpg')" }}
      />
      {/* Overlay: strong left, fades to transparent right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071428]/92 via-[#071428]/60 to-[#071428]/10" />

      <Container className="relative z-10 w-full flex flex-col flex-1">
        {/*
          Two-column grid: text left, stat chips right.
          items-end aligns both columns to their bottom edge
          so the stat chips sit at the same level as the CTA button.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end flex-1 py-12 md:py-16">

          {/* ── Left: Text content ── */}
          <div className="flex flex-col items-start gap-5 md:gap-6">
            {/* Badge */}
            <motion.div
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              <span className="text-white/90 text-xs font-semibold tracking-wide uppercase">
                Harjumaa nr. 1 puhastusteenus
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-outfit font-bold text-white leading-[1.05]"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 5rem)" }}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.25 },
                },
              }}
            >
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.25em]"
                  variants={{
                    hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.55, ease: "easeOut" },
                    },
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                className="shimmer inline-block mr-[0.25em]"
                variants={{
                  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.55, ease: "easeOut" },
                  },
                }}
              >
                {HERO.highlightedWord}
              </motion.span>
              <motion.span
                className="inline-block text-white"
                variants={{
                  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.55, ease: "easeOut" },
                  },
                }}
              >
                {HERO.headlineSuffix}
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-white/70 text-base md:text-lg max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
            >
              {HERO.subheadline}
            </motion.p>

            {/* CTA — this is the bottom-most element, aligns with stats on right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85, type: "spring", stiffness: 100, damping: 15 }}
            >
              <Button variant="primary" size="lg" href="#contact">
                {HERO.ctaPrimary}
              </Button>
            </motion.div>
          </div>

          {/* ── Right: Stat chips in ONE horizontal row at bottom ── */}
          <div className="flex flex-col items-start lg:items-end justify-end gap-3">
            {/* Mobile: shown below CTA, desktop: hidden here (shown in row below) */}
            <motion.div
              className="flex flex-row flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            >
              {HERO_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 1.05 + i * 0.1, ease: "backOut" }}
                  className="flex flex-col items-center justify-center rounded-xl bg-white/12 backdrop-blur-md border border-white/20 px-5 py-3 min-w-[90px] hover:bg-white/18 transition-colors duration-300"
                >
                  <span className="font-outfit font-bold text-white text-xl leading-tight">
                    {stat.value !== null ? (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} className="text-white" />
                    ) : (
                      stat.display
                    )}
                  </span>
                  <span className="text-white/60 text-xs mt-0.5 text-center leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        <a href="#trusted-by" aria-label="Scroll down">
          <ChevronDown className="w-6 h-6 text-white/40 bounce-slow" />
        </a>
      </motion.div>
    </section>
  );
}
