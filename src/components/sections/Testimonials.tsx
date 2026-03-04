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

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const testimonial = TESTIMONIALS[current];

  return (
    <Section id="testimonials">
      <SectionHeading
        title="Mida meie kliendid ütlevad"
        subtitle="Kuulge ettevõtetelt, kes usaldavad meile oma keskkonna."
      />

      <div
        className="relative max-w-3xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="glass rounded-2xl p-8 md:p-10"
          >
            {/* Quote icon */}
            <Quote className="w-10 h-10 text-accent-primary opacity-20 mb-4" />

            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {Array.from({ length: testimonial.stars }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-gold text-gold"
                />
              ))}
            </div>

            {/* Quote text */}
            <blockquote className="text-text-primary text-lg md:text-xl leading-relaxed italic mb-6">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div>
              <p className="font-outfit font-bold text-text-primary">
                {testimonial.name}
              </p>
              <p className="text-text-secondary text-sm">
                {testimonial.title}, {testimonial.company}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

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
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-accent-primary w-6"
                    : "bg-text-muted/30 hover:bg-text-muted/50"
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
