"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LOGO_COMPANIES } from "@/lib/constants";
import Container from "@/components/layout/Container";

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center px-8 py-2 min-w-[140px] shrink-0">
      <span className="text-text-muted font-outfit font-bold text-base md:text-lg whitespace-nowrap tracking-widest opacity-40 hover:opacity-90 hover:text-accent-primary transition-all duration-300">
        {name}
      </span>
    </div>
  );
}

// Two copies so -50% translateX = exactly one set → seamless loop
const LOGOS_DOUBLE = [...LOGO_COMPANIES, ...LOGO_COMPANIES];

export default function LogoBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="trusted-by" className="relative py-10 md:py-14" ref={ref}>
      <Container>
        <motion.div
          className="glass rounded-2xl py-7 md:py-9 overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white/55 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white/55 to-transparent pointer-events-none" />

          {/* Infinite marquee — all screen sizes */}
          <div className="relative overflow-hidden">
            <div className="animate-marquee flex items-center w-max">
              {LOGOS_DOUBLE.map((name, i) => (
                <LogoPlaceholder key={`${name}-${i}`} name={name} />
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
