"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const TESTIMONIAL_IMAGES = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80",
];

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
        title="What Our Clients Say"
        subtitle="Hear from the businesses that trust us with their environments."
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Background decorative image */}
        <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full overflow-hidden opacity-[0.07] pointer-events-none hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="256px"
          />
        </div>

        <div
          className="relative"
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

              {/* Author with avatar */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-accent-primary/20 shrink-0">
                  <Image
                    src={TESTIMONIAL_IMAGES[current % TESTIMONIAL_IMAGES.length]}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="font-outfit font-bold text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-text-secondary text-sm">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-glass-hover transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-text-secondary" />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
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
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-text-secondary" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
