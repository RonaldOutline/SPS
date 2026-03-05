"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { INDUSTRIES } from "@/lib/constants";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Industries() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [active, setActive] = useState(0);

  const industry = INDUSTRIES[active];

  return (
    <Section id="industries">
      <SectionHeading
        title="Valdkonnad, mida teenindame"
        subtitle="Spetsialiseeritud puhastusekspertiis erinevates sektorites, kohandatud iga valdkonna unikaalsetele nõuetele."
      />

      <div ref={ref} className="grid grid-cols-3 gap-6 mt-2">
        {/* Left column – tab list */}
        <div className="flex flex-col gap-1">
          {INDUSTRIES.map((item, i) => (
            <motion.button
              key={item.name}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`text-left px-4 py-3 rounded-xl transition-all duration-200 group ${
                i === active
                  ? "bg-accent-primary text-white"
                  : "hover:bg-bg-secondary text-text-secondary hover:text-text-primary"
              }`}
            >
              <span className="font-outfit font-semibold text-sm leading-tight block">
                {item.name}
              </span>
              {i === active && (
                <span className="text-white/70 text-xs mt-0.5 block">
                  {item.clientCount} klienti
                </span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Right 2 columns – image + description */}
        <div className="col-span-2 relative rounded-2xl overflow-hidden h-[460px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block glass text-xs font-semibold px-3 py-1 rounded-full text-white mb-3">
                  {industry.clientCount} klienti
                </span>
                <h3 className="font-outfit font-bold text-2xl text-white mb-2">
                  {industry.name}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-md">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
