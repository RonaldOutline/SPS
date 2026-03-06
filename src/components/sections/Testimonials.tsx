"use client";

import { useState, useEffect, useCallback, useRef, useLayoutEffect } from "react";
import { motion, useMotionValue, animate, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import Container from "@/components/layout/Container";

const GAP = 24;
const CARD_RATIO = 0.78;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = TESTIMONIALS.length;

  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardWidthRef = useRef(0);
  const pendingReset = useRef(false);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  const x = useMotionValue(0);

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
        >
          <div
            ref={containerRef}
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#f2f2f2]/80 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#f2f2f2]/80 to-transparent pointer-events-none" />

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
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/80 transition-all duration-200 hover:shadow-sm"
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
                      if (i > current) goNext();
                      else if (i < current) goPrev();
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
