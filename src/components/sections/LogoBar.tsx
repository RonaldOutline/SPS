"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useAnimationFrame } from "framer-motion";
import { LOGO_COMPANIES } from "@/lib/constants";
import Container from "@/components/layout/Container";

// Three sets so the loop has plenty of runway before reset
const LOGOS = [...LOGO_COMPANIES, ...LOGO_COMPANIES, ...LOGO_COMPANIES];
const SPEED = 0.04; // px per ms  ≈ 40 px/s

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center px-10 shrink-0">
      <span className="font-outfit font-bold text-base md:text-lg whitespace-nowrap tracking-widest text-text-muted opacity-65 hover:opacity-90 hover:text-accent-primary transition-all duration-300 cursor-default select-none">
        {name}
      </span>
    </div>
  );
}

export default function LogoBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  // Motion value drives translateX in pixels
  const x = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    if (!isInView) return;

    const track = trackRef.current;
    if (!track) return;

    // One set width = total width / 3
    const oneSet = track.scrollWidth / 3;

    let next = x.get() - delta * SPEED;
    // Reset once we've scrolled one full set
    if (next <= -oneSet) next += oneSet;
    x.set(next);
  });

  return (
    <section id="trusted-by" className="relative py-10 md:py-14" ref={sectionRef}>
      <Container>
        <motion.div
          className="glass rounded-2xl py-7 md:py-9 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white/55 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white/55 to-transparent pointer-events-none" />

          {/* Scrolling track */}
          <motion.div
            ref={trackRef}
            className="flex items-center"
            style={{ x }}
          >
            {LOGOS.map((name, i) => (
              <LogoPlaceholder key={`${name}-${i}`} name={name} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
