"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = TESTIMONIALS.length;

  const next = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + total) % total), [total]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const getIndex = (offset: number) => (current + offset + total) % total;

  return (
    <Section id="testimonials">
      <SectionHeading
        title="Mida meie kliendid ütlevad"
        subtitle="Kuulge ettevõtetelt, kes usaldavad meile oma keskkonna."
      />

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slider track */}
        <div className="flex items-center gap-4 overflow-hidden px-4">
          {/* Previous card – peek */}
          <div className="flex-shrink-0 w-[20%] opacity-40 scale-95 origin-right transition-all duration-500 pointer-events-none select-none">
            <TestimonialCard testimonial={TESTIMONIALS[getIndex(-1)]} />
          </div>

          {/* Active card */}
          <div className="flex-shrink-0 w-[56%] transition-all duration-500 relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <TestimonialCard testimonial={TESTIMONIALS[current]} active />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next card – peek */}
          <div className="flex-shrink-0 w-[20%] opacity-40 scale-95 origin-left transition-all duration-500 pointer-events-none select-none">
            <TestimonialCard testimonial={TESTIMONIALS[getIndex(1)]} />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-glass-hover transition-colors"
            aria-label="Eelmine arvustus"
          >
            <ChevronLeft className="w-5 h-5 text-text-secondary" />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
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
            onClick={next}
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-glass-hover transition-colors"
            aria-label="Järgmine arvustus"
          >
            <ChevronRight className="w-5 h-5 text-text-secondary" />
          </button>
        </div>
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
