"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useAnimationFrame } from "framer-motion";
import { LOGO_COMPANIES } from "@/lib/constants";
import Container from "@/components/layout/Container";

// Split logos into two rows (alternating for visual variety)
const HALF = Math.ceil(LOGO_COMPANIES.length / 2);
const ROW1_BASE = LOGO_COMPANIES.slice(0, HALF);
const ROW2_BASE = LOGO_COMPANIES.slice(HALF);

// Triple each row so the loop has runway
const ROW1 = [...ROW1_BASE, ...ROW1_BASE, ...ROW1_BASE];
const ROW2 = [...ROW2_BASE, ...ROW2_BASE, ...ROW2_BASE];

const SPEED1 = 0.038; // px per ms
const SPEED2 = 0.028; // slightly slower for depth effect

export default function LogoBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  const x1 = useMotionValue(0);
  const x2 = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    if (!isInView) return;

    const t1 = track1Ref.current;
    if (t1) {
      const oneSet = t1.scrollWidth / 3;
      let next = x1.get() - delta * SPEED1;
      if (next <= -oneSet) next += oneSet;
      x1.set(next);
    }

    const t2 = track2Ref.current;
    if (t2) {
      const oneSet = t2.scrollWidth / 3;
      let next = x2.get() - delta * SPEED2;
      if (next <= -oneSet) next += oneSet;
      x2.set(next);
    }
  });

  return (
    <section id="trusted-by" className="py-12 md:py-16" ref={sectionRef}>
      <Container>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-5 items-stretch"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Left: Two scrolling logo rows */}
          <div className="md:col-span-3 rounded-2xl bg-[#f2f2f2] overflow-hidden py-8 relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#f2f2f2] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#f2f2f2] to-transparent pointer-events-none" />

            {/* Row 1 */}
            <motion.div
              ref={track1Ref}
              className="flex items-center mb-4"
              style={{ x: x1 }}
            >
              {ROW1.map((name, i) => (
                <LogoItem key={`r1-${name}-${i}`} name={name} />
              ))}
            </motion.div>

            {/* Row 2 */}
            <motion.div
              ref={track2Ref}
              className="flex items-center"
              style={{ x: x2 }}
            >
              {ROW2.map((name, i) => (
                <LogoItem key={`r2-${name}-${i}`} name={name} />
              ))}
            </motion.div>
          </div>

          {/* Right: Light blue trust card */}
          <motion.div
            className="md:col-span-2 rounded-2xl bg-[#EFF6FF] border border-blue-100 p-7 md:p-8 flex flex-col justify-center relative overflow-hidden"
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {/* Subtle accent shape */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-accent-primary/8 pointer-events-none" />

            <motion.div
              className="w-8 h-1 rounded-full bg-accent-primary mb-5"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            />

            <h2 className="font-outfit font-bold text-[#071428] text-xl md:text-2xl lg:text-[1.6rem] leading-tight mb-3">
              Meid usaldavad üle{" "}
              <span className="text-accent-primary">160</span>{" "}
              Harjumaa ettevõtte
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Korporatiivsetelt büroohoonetelt kuni suure liikluse
              kaubanduskeskusteni — kvaliteetne puhtus on meie lubadus.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {["20+ aastat", "ISO sertifikaadid", "200+ töötajat"].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-semibold text-accent-primary bg-white border border-blue-100 rounded-full px-3 py-1"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center px-8 shrink-0">
      <span className="font-outfit font-bold text-sm md:text-base whitespace-nowrap tracking-wider text-text-muted/60 hover:text-accent-primary hover:opacity-100 transition-all duration-300 cursor-default select-none">
        {name}
      </span>
    </div>
  );
}
