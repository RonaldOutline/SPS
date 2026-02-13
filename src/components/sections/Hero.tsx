"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HERO } from "@/lib/constants";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import GradientOrb from "@/components/animations/GradientOrb";
import Image from "next/image";

export default function Hero() {
  const headlineWords = HERO.headline.split(" ");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <GradientOrb
          color="#0EA5E9"
          size={700}
          top="-10%"
          right="-10%"
          delay={0}
          duration={25}
        />
        <GradientOrb
          color="#06B6D4"
          size={500}
          bottom="-5%"
          left="-5%"
          delay={3}
          duration={30}
        />
        <GradientOrb
          color="#0EA5E9"
          size={300}
          top="40%"
          left="30%"
          delay={5}
          duration={20}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Headline */}
            <motion.h1
              className="font-outfit font-bold text-text-primary leading-[1.1]"
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
                className="inline-block"
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
              className="text-text-secondary text-lg md:text-xl max-w-xl leading-relaxed"
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
              <Button variant="secondary" size="lg" href="#services">
                {HERO.ctaSecondary}
              </Button>
            </motion.div>
          </div>

          {/* Right: Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <div className="glass rounded-2xl p-2 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
                  alt="Pristine modern office space"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -left-4 glass-heavy rounded-xl px-4 py-3 shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-semibold text-text-primary">
                  Serving 500+ Clients
                </span>
              </div>
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
          <ChevronDown className="w-6 h-6 text-text-muted bounce-slow" />
        </a>
      </motion.div>
    </section>
  );
}
