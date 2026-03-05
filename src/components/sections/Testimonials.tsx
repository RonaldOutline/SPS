"use client";

import { useState, useEffect, useCallback, useRef, useLayoutEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const GAP = 24;
const CARD_RATIO = 0.78;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = TESTIMONIALS.length;

  const containerRef = useRef<HTMLDivElement>(null);
  const cardWidthRef = useRef(0);
  const pendingReset = useRef(false);
  const x = useMotionValue(0);

  // Measure container and set initial offset
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const cw = containerRef.current.offsetWidth * CARD_RATIO;
      cardWidthRef.current = cw;
      if (!pendingReset.current) x.set(-(cw + GAP));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [x]);

  // Reset x to center after setCurrent causes a re-render (no visible flash)
  useLayoutEffect(() => {
    if (pendingReset.current) {
      pendingReset.current = false;
      x.set(-(cardWidthRef.current + GAP));
    }
  });

  const goNext = useCallback(async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const cw = cardWidthRef.current;
    await animate(x, -(cw + GAP) - (cw + GAP), { duration: 0.45, ease: "easeInOut" });
    pendingReset.current = true;
    setCurrent((p) => (p + 1) % total);
    setIsAnimating(false);
  }, [isAnimating, total, x]);

  const goPrev = useCallback(async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const cw = cardWidthRef.current;
    await animate(x, 0, { duration: 0.45, ease: "easeInOut" });
    pendingReset.current = true;
    setCurrent((p) => (p - 1 + total) % total);
    setIsAnimating(false);
  }, [isAnimating, total, x]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, [isPaused, goNext]);

  const getIdx = (offset: number) => (current + offset + total) % total;
  const slides = [
    TESTIMONIALS[getIdx(-1)],
    TESTIMONIALS[current],
    TESTIMONIALS[getIdx(1)],
  ];

  return (
    <Section id="testimonials">
      <SectionHeading
        title="Mida meie kliendid ütlevad"
        subtitle="Kuulge ettevõtetelt, kes usaldavad meile oma keskkonna."
      />

      <div
        ref={containerRef}
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#F8FAFE] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#F8FAFE] to-transparent pointer-events-none" />

        {/* Sliding track */}
        <motion.div className="flex" style={{ x, gap: GAP }}>
          {slides.map((t, i) => (
            <div
              key={`${current}-${i}`}
              style={{ width: `${CARD_RATIO * 100}%` }}
              className="flex-shrink-0"
            >
              <TestimonialCard testimonial={t} active={i === 1} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={goPrev}
          className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-glass-hover transition-colors"
          aria-label="Eelmine arvustus"
        >
          <ChevronLeft className="w-5 h-5 text-text-secondary" />
        </button>

        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!isAnimating) {
                  const dir = i > current ? 1 : -1;
                  if (dir === 1) goNext();
                  else goPrev();
                }
              }}
              aria-label={`Mine arvustuse juurde ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-accent-primary"
                  : "w-2 bg-text-muted/30 hover:bg-text-muted/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-glass-hover transition-colors"
          aria-label="Järgmine arvustus"
        >
          <ChevronRight className="w-5 h-5 text-text-secondary" />
        </button>
      </div>
    </Section>
  );
}

function TestimonialCard({
  testimonial,
  active,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  active?: boolean;
}) {
  return (
    <div
      className={`glass rounded-2xl p-6 md:p-8 transition-shadow duration-300 ${
        active ? "shadow-lg shadow-accent-primary/10" : ""
      }`}
    >
      <Quote className="w-8 h-8 text-accent-primary opacity-20 mb-3" />
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
        ))}
      </div>
      <blockquote className="text-text-primary text-base md:text-lg leading-relaxed italic mb-5">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div>
        <p className="font-outfit font-bold text-text-primary text-sm">
          {testimonial.name}
        </p>
        <p className="text-text-secondary text-xs">
          {testimonial.title}, {testimonial.company}
        </p>
      </div>
    </div>
  );
}
