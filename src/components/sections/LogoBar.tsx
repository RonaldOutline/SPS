"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LOGO_COMPANIES } from "@/lib/constants";
import Container from "@/components/layout/Container";

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center px-6 md:px-8 py-2 min-w-[120px]">
      <span className="text-text-muted font-outfit font-semibold text-base md:text-lg whitespace-nowrap tracking-wide opacity-50 hover:opacity-100 hover:text-text-secondary transition-all duration-300 hover:scale-105">
        {name}
      </span>
    </div>
  );
}

export default function LogoBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="trusted-by" className="relative py-12 md:py-16" ref={ref}>
      <Container>
        <motion.div
          className="glass rounded-2xl py-8 md:py-10 px-6 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-center text-xs font-semibold tracking-[0.15em] uppercase text-text-muted mb-6">
            Trusted by Industry Leaders
          </p>

          {/* Desktop: static row */}
          <div className="hidden md:flex items-center justify-between gap-4">
            {LOGO_COMPANIES.map((name) => (
              <LogoPlaceholder key={name} name={name} />
            ))}
          </div>

          {/* Mobile: infinite marquee */}
          <div className="md:hidden relative overflow-hidden">
            <div className="animate-marquee flex items-center gap-8 w-max">
              {[...LOGO_COMPANIES, ...LOGO_COMPANIES].map((name, i) => (
                <LogoPlaceholder key={`${name}-${i}`} name={name} />
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
