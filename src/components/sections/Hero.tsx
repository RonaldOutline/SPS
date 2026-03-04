"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HERO } from "@/lib/constants";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const HERO_STATS = [
  { value: "160+", label: "Äriklienti" },
  { value: "20+", label: "Aastat kogemust" },
  { value: "99.8%", label: "Rahulolu määr" },
  { value: "24/7", label: "Alati valmis" },
];

export default function Hero() {
  const headlineWords = HERO.headline.split(" ");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/SPSHero.png')" }}
      />
      {/* Dark blue overlay */}
      <div className="absolute inset-0 bg-[#0c1e3d]/65" />

      <Container className="relative z-10 w-full">
        <div className="flex flex-col items-start gap-6 md:gap-8 max-w-3xl">
          {/* Headline */}
          <motion.h1
            className="font-outfit font-bold text-white leading-[1.1]"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.2 },
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
              className="shimmer inline-block mr-[0.25em]"
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
            className="text-white/80 text-lg md:text-xl max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
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
              delay: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            <Button variant="primary" size="lg" href="#cta">
              {HERO.ctaPrimary}
            </Button>
            <Button variant="outline" size="lg" href="#services">
              {HERO.ctaSecondary}
            </Button>
          </motion.div>

          {/* Stat badges */}
          <motion.div
            className="flex flex-wrap gap-3 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          >
            {HERO_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.1 + i * 0.08 }}
                className="flex flex-col items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-3 min-w-[90px]"
              >
                <span className="font-outfit font-bold text-white text-xl leading-tight">
                  {stat.value}
                </span>
                <span className="text-white/70 text-xs mt-0.5 text-center leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <a href="#trusted-by" aria-label="Scroll down">
          <ChevronDown className="w-6 h-6 text-white/60 bounce-slow" />
        </a>
      </motion.div>
    </section>
  );
}
