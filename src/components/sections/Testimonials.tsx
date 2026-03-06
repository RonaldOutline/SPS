"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import Container from "@/components/layout/Container";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = TESTIMONIALS.length;

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  const goNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((p) => (p + 1) % total);
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating, total]);

  const goPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((p) => (p - 1 + total) % total);
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating, total]);

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
    <section id="testimonials" className="py-20 md:py-28" ref={sectionRef}>
      <Container>
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-primary block mb-3">
            Tagasiside
          </span>
          <h2 className="font-outfit font-bold text-text-primary text-3xl md:text-4xl leading-tight mb-3">
            Mida kliendid arvavad
          </h2>
          <p className="text-text-secondary max-w-md mx-auto text-base">
            Kuulge ettevõtetelt, kes usaldavad meile oma keskkonna.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Three-column: narrow peek | dominant center | narrow peek */}
          <div className="grid grid-cols-[100px_1fr_100px] gap-4 overflow-hidden items-start">

            {/* Left peek — shows right edge of previous card */}
            <div className="overflow-hidden">
              <div className="flex justify-end">
                <div className="w-96 shrink-0 opacity-35 pointer-events-none select-none">
                  <TestimonialCard testimonial={slides[0]} active={false} />
                </div>
              </div>
            </div>

            {/* Center — active card with crossfade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <TestimonialCard testimonial={slides[1]} active />
              </motion.div>
            </AnimatePresence>

            {/* Right peek — shows left edge of next card */}
            <div className="overflow-hidden">
              <div className="w-96 shrink-0 opacity-35 pointer-events-none select-none">
                <TestimonialCard testimonial={slides[2]} active={false} />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/80 transition-all duration-200 hover:shadow-sm"
              aria-label="Eelmine arvustus"
            >
              <ChevronLeft className="w-5 h-5 text-text-secondary" />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { if (!isAnimating) setCurrent(i); }}
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
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/80 transition-all duration-200 hover:shadow-sm"
              aria-label="Järgmine arvustus"
            >
              <ChevronRight className="w-5 h-5 text-text-secondary" />
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
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
    <motion.div
      animate={active ? { opacity: 1, scale: 1 } : { opacity: 0.55, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className={`rounded-2xl p-6 md:p-8 border transition-all duration-300 h-full ${
        active
          ? "bg-white border-gray-100 shadow-lg shadow-black/5"
          : "bg-white/50 border-gray-100/50"
      }`}
    >
      <Quote className={`w-7 h-7 mb-3 transition-colors duration-300 ${active ? "text-accent-primary opacity-25" : "text-text-muted opacity-15"}`} />
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
        ))}
      </div>
      <blockquote className="text-text-primary text-base md:text-lg leading-relaxed italic mb-5">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="border-t border-gray-100 pt-4">
        {testimonial.name && (
          <p className="font-outfit font-bold text-text-primary text-sm">
            {testimonial.name}
          </p>
        )}
        <p className="text-text-secondary text-xs font-semibold mt-0.5">
          {[testimonial.title, testimonial.company].filter(Boolean).join(", ")}
        </p>
      </div>
    </motion.div>
  );
}
