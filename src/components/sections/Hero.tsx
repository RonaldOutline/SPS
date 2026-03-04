"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HERO } from "@/lib/constants";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

type HeroStat = {
  value: string | null;
  suffix?: string;
  display?: string;
  label: string;
};

const HERO_STATS: HeroStat[] = [
  { value: "160", suffix: "+", label: "Äriklienti" },
  { value: "20", suffix: "+", label: "Aastat kogemust" },
  { value: "99.8", suffix: "%", label: "Rahulolu määr" },
  { value: null, display: "24/7", label: "Alati valmis" },
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
      {/* Dark blue overlay with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071428]/80 via-[#0c1e3d]/70 to-[#0a1a35]/75" />
      {/* Subtle light rays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,165,233,0.12)_0%,transparent_60%)]" />

      <Container className="relative z-10 w-full">
        <div className="flex flex-col items-start gap-6 md:gap-8 max-w-3xl">
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
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
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
            className="text-white/75 text-lg md:text-xl max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
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
              delay: 0.85,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            <Button variant="primary" size="lg" href="#contact">
              {HERO.ctaPrimary}
            </Button>
            <Button variant="outline" size="lg" href="#services">
              {HERO.ctaSecondary}
            </Button>
          </motion.div>

          {/* Stat badges with animated counters */}
          <motion.div
            className="flex flex-wrap gap-3 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05, ease: "easeOut" }}
          >
            {HERO_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 1.15 + i * 0.09, ease: "backOut" }}
                className="flex flex-col items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-3 min-w-[90px] hover:bg-white/15 transition-colors duration-300"
              >
                <span className="font-outfit font-bold text-white text-xl leading-tight">
                  {stat.value !== null ? (
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={2}
                      className="text-white"
                    />
                  ) : (
                    stat.display
                  )}
                </span>
                <span className="text-white/65 text-xs mt-0.5 text-center leading-tight">
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
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <a href="#trusted-by" aria-label="Scroll down">
          <ChevronDown className="w-6 h-6 text-white/50 bounce-slow" />
        </a>
      </motion.div>
    </section>
  );
}
