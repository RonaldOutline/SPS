"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { INDUSTRIES } from "@/lib/constants";
import Container from "@/components/layout/Container";

export default function Industries() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [active, setActive] = useState(0);

  const industry = INDUSTRIES[active];

  return (
    <section id="industries" className="py-20 md:py-28 bg-bg-secondary/40">
      <Container>
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          ref={ref}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-primary block mb-3">
            Valdkonnad
          </span>
          <h2 className="font-outfit font-bold text-text-primary text-3xl md:text-4xl leading-tight mb-4">
            Valdkonnad, mida teenindame
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-base leading-relaxed">
            Spetsialiseeritud puhastusekspertiis erinevates sektorites,
            kohandatud iga valdkonna unikaalsetele nõuetele.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-5 mt-2">
          {/* Left: Tab list */}
          <div className="flex flex-col gap-1">
            {INDUSTRIES.map((item, i) => (
              <motion.button
                key={item.name}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                className={`text-left px-4 py-3 rounded-xl transition-all duration-250 relative overflow-hidden ${
                  i === active
                    ? "bg-[#071428] text-white"
                    : "hover:bg-white text-text-secondary hover:text-text-primary hover:shadow-sm"
                }`}
              >
                {/* Active highlight bar */}
                {i === active && (
                  <motion.div
                    layoutId="active-tab-bar"
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent-primary rounded-full"
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                )}
                <span className="font-outfit font-semibold text-sm leading-tight block pl-1">
                  {item.name}
                </span>
                {i === active && (
                  <motion.span
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-white/60 text-xs mt-0.5 block pl-1"
                  >
                    {item.clientCount} klienti
                  </motion.span>
                )}
              </motion.button>
            ))}
          </div>

          {/* Right: Image + info */}
          <div className="col-span-2 relative rounded-2xl overflow-hidden h-[480px] shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover"
                  sizes="66vw"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                {/* Bottom info */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-8"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                >
                  <span className="inline-block text-xs font-semibold bg-accent-primary/25 border border-accent-primary/30 backdrop-blur-sm text-white px-3 py-1 rounded-full mb-3">
                    {industry.clientCount} klienti
                  </span>
                  <h3 className="font-outfit font-bold text-2xl text-white mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed max-w-md">
                    {industry.description}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
