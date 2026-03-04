"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Leaf } from "lucide-react";
import { SUSTAINABILITY_POINTS } from "@/lib/constants";
import Section from "@/components/layout/Section";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Sustainability() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <Section id="sustainability" className="bg-bg-secondary/50">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <div>
          <ScrollReveal direction="left">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-success">
              Jätkusuutlikkus
            </span>
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-text-primary mt-2 mb-4">
              Pühendunud puhtamale planeedile
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Usume puhastamisse, mis ei käi planeedi arvelt. Meie keskkonnasõbralik lähenemine tagab, et iga meie töö aitab kaasa jätkusuutlikumale tulevikule.
            </p>
          </ScrollReveal>

          <div className="space-y-4 mb-8">
            {SUSTAINABILITY_POINTS.map((point, i) => (
              <ScrollReveal key={i} direction="left" delay={0.1 + i * 0.1}>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <p className="text-text-secondary">{point.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="left" delay={0.4}>
            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5">
              <Leaf className="w-4 h-4 text-success" />
              <span className="text-sm font-semibold text-text-primary">
                ISO 14001 Certified
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.5} className="mt-6">
            <a
              href="#"
              className="link-underline text-accent-primary font-semibold text-sm inline-flex items-center gap-1"
            >
              Loe meie jätkusuutlikkuse kohustust →
            </a>
          </ScrollReveal>
        </div>

        {/* Right: Decorative graphic */}
        <ScrollReveal direction="right" className="flex items-center justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Animated gradient circles */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
              }}
              animate={
                isInView
                  ? { scale: [1, 1.1, 1], rotate: [0, 180, 360] }
                  : {}
              }
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-6 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
              }}
              animate={
                isInView
                  ? { scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }
                  : {}
              }
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass rounded-full p-8">
                <Leaf className="w-16 h-16 text-success" />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute top-8 right-4 glass-heavy rounded-lg px-3 py-2 text-xs font-semibold text-text-primary"
              animate={isInView ? { y: [0, -8, 0] } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              🌿 Öko tooted
            </motion.div>
            <motion.div
              className="absolute bottom-12 left-0 glass-heavy rounded-lg px-3 py-2 text-xs font-semibold text-text-primary"
              animate={isInView ? { y: [0, 8, 0] } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              ♻️ Null jäätmeid
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
