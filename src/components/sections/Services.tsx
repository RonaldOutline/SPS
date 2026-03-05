"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  Factory,
  Store,
  HardHat,
  PanelsTopLeft,
  ShieldCheck,
  Layers,
  Droplet,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import Container from "@/components/layout/Container";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Factory,
  Store,
  HardHat,
  PanelsTopLeft,
  ShieldCheck,
  Layers,
  Droplet,
};

// 2 large | 4 medium | 2 small
const LARGE = 2;
const MEDIUM = 6; // index 2–5

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });

  const large = SERVICES.slice(0, LARGE);
  const medium = SERVICES.slice(LARGE, MEDIUM);
  const small = SERVICES.slice(MEDIUM);

  return (
    <section id="services" className="py-20 md:py-28 bg-bg-primary">
      <Container>
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-primary block mb-3">
            Teenused
          </span>
          <h2 className="font-outfit font-bold text-text-primary text-3xl md:text-4xl leading-tight mb-4">
            Põhjalikud puhastusteenused
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-base leading-relaxed">
            Igapäevasest korrashoiust kuni spetsialiseeritud tööstusliku
            puhastuseni — suudame olla tugevad kõikides lahendustes.
          </p>
        </motion.div>

        {/* Grid: 4 columns */}
        <div className="grid grid-cols-4 gap-4">
          {/* 2 large cards — col-span-2 each */}
          {large.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 + i * 0.1, ease: "easeOut" }}
                className="col-span-2 group relative rounded-2xl bg-white border border-gray-100 p-10 cursor-pointer overflow-hidden hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent-primary/20 transition-colors duration-300">
                    {Icon && <Icon className="w-8 h-8 text-accent-primary" />}
                  </div>
                  <h3 className="font-outfit font-bold text-xl text-text-primary mb-4 leading-snug">
                    {service.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-accent-primary text-sm font-semibold mt-auto">
                    Vaata lähemalt
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </motion.article>
            );
          })}

          {/* 4 medium cards — col-span-1 each */}
          {medium.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: "easeOut" }}
                className="col-span-1 group relative rounded-2xl bg-white border border-gray-100 p-7 cursor-pointer overflow-hidden hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent-primary/20 transition-colors duration-300">
                    {Icon && <Icon className="w-6 h-6 text-accent-primary" />}
                  </div>
                  <h3 className="font-outfit font-bold text-base text-text-primary mb-4 leading-snug">
                    {service.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-accent-primary text-xs font-semibold mt-auto">
                    Vaata lähemalt
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.article>
            );
          })}

          {/* 2 small cards — col-span-1 each, horizontal compact */}
          {small.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: "easeOut" }}
                className="col-span-1 group relative rounded-2xl bg-white border border-gray-100 p-5 cursor-pointer overflow-hidden hover:shadow-md transition-shadow duration-300 flex items-center gap-4"
                whileHover={{ y: -4 }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center shrink-0 group-hover:bg-accent-primary/20 transition-colors duration-300">
                  {Icon && <Icon className="w-5 h-5 text-accent-primary" />}
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="font-outfit font-bold text-sm text-text-primary leading-snug mb-1">
                    {service.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-accent-primary text-xs font-semibold">
                    Vaata lähemalt
                    <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
