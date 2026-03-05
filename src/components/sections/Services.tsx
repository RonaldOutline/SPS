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
};

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
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

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.09, ease: "easeOut" }}
                className="group relative rounded-2xl border border-gray-100 bg-white p-7 cursor-pointer overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -6 }}
              >
                {/* Gradient reveal on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                {/* Icon */}
                <motion.div
                  className="w-13 h-13 rounded-xl bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 flex items-center justify-center mb-5 group-hover:from-accent-primary/20 group-hover:to-accent-secondary/20 transition-all duration-300"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.2 }}
                >
                  {Icon && <Icon className="w-6 h-6 text-accent-primary" />}
                </motion.div>

                {/* Title */}
                <h3 className="font-outfit font-bold text-lg text-text-primary mb-4 leading-snug">
                  {service.title}
                </h3>

                {/* Link */}
                <span className="inline-flex items-center gap-1.5 text-accent-primary text-sm font-semibold">
                  Vaata lähemalt
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                </span>

                {/* Bottom accent border on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
