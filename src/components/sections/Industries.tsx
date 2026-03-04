"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const VISIBLE_DESKTOP = 3;
const VISIBLE_MOBILE = 1;
const AUTO_INTERVAL = 3000;

export default function Industries() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = left, -1 = right
  const [paused, setPaused] = useState(false);
  const total = INDUSTRIES.length;

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const visible = isMobile ? VISIBLE_MOBILE : VISIBLE_DESKTOP;
  const maxIndex = total - visible;

  const next = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-advance every 3s
  useEffect(() => {
    if (paused || !isInView) return;
    const timer = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, isInView, next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <Section id="industries">
      <SectionHeading
        title="Valdkonnad, mida teenindame"
        subtitle="Spetsialiseeritud puhastusekspertiis erinevates sektorites, kohandatud iga valdkonna unikaalsetele nõuetele."
      />

      <div
        ref={ref}
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Slide window */}
        <div className="overflow-hidden">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {INDUSTRIES.slice(index, index + VISIBLE_DESKTOP).map((industry) => (
              <article
                key={industry.name}
                className="industry-card relative rounded-2xl overflow-hidden h-[380px] md:h-[420px] group cursor-pointer"
              >
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover industry-card-img"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent group-hover:from-black/60 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block glass text-xs font-semibold px-3 py-1 rounded-full text-white mb-3">
                    {industry.clientCount} klienti
                  </span>
                  <h3 className="font-outfit font-bold text-xl text-white mb-1">
                    {industry.name}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-between mt-6">
          {/* Dot indicators */}
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Mine slaidile ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 bg-accent-primary"
                    : "w-2 bg-text-muted/30 hover:bg-text-muted/60"
                }`}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-glass-hover transition-colors"
              aria-label="Eelmine"
            >
              <ChevronLeft className="w-5 h-5 text-text-secondary" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-accent-primary flex items-center justify-center hover:bg-accent-secondary transition-colors"
              aria-label="Järgmine"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-3 h-0.5 bg-bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary"
            key={`${index}-${paused}`}
            initial={{ width: "0%" }}
            animate={{ width: paused ? undefined : "100%" }}
            transition={{ duration: AUTO_INTERVAL / 1000, ease: "linear" }}
          />
        </div>
      </div>
    </Section>
  );
}
