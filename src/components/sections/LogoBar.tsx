"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/layout/Container";

const FEATURED_LOGOS = [
  "TalTech",
  "Ericsson",
  "Selver",
  "Info Auto",
  "Mustikas",
  "Uponor",
  "MyFitness",
  "Nordic Hotels",
  "Elering",
];

export default function LogoBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="trusted-by" className="py-12 md:py-16 bg-white" ref={ref}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-stretch">
          {/* Left: Logo grid */}
          <motion.div
            className="rounded-2xl border border-gray-100 bg-gray-50/60 p-8 md:p-10"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted mb-7">
              Meie kliendid
            </p>
            <div className="grid grid-cols-3 gap-x-4 gap-y-6">
              {FEATURED_LOGOS.map((name, i) => (
                <motion.div
                  key={name}
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.06, ease: "easeOut" }}
                >
                  <span className="font-outfit font-bold text-sm md:text-base text-text-muted/65 hover:text-accent-primary hover:scale-105 transition-all duration-300 cursor-default tracking-wide text-center select-none">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Trust card — dark navy */}
          <motion.div
            className="rounded-2xl bg-[#071428] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(14,165,233,0.12)_0%,transparent_60%)] pointer-events-none" />

            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              {/* Accent line */}
              <motion.div
                className="w-10 h-1 rounded-full bg-accent-primary mb-5"
                initial={{ scaleX: 0, originX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
              />

              <h2 className="font-outfit font-bold text-white text-2xl md:text-3xl lg:text-[2rem] leading-tight mb-4">
                Meid usaldavad üle{" "}
                <span className="text-accent-primary">160</span>{" "}
                Harjumaa ettevõtte
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Korporatiivsetelt büroohoonetelt kuni suure liikluse
                kaubanduskeskusteni — kvaliteetne puhtus on meie lubadus.
              </p>

              {/* Small trust badges */}
              <motion.div
                className="flex flex-wrap gap-2 mt-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                {["20+ aastat kogemust", "ISO sertifikaadid", "200+ töötajat"].map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-medium text-slate-300 bg-white/8 border border-white/10 rounded-full px-3 py-1"
                  >
                    {badge}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
