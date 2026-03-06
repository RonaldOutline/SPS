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

// Shared card base classes
const CARD_BASE = "group relative rounded-2xl bg-white border border-gray-100 cursor-pointer overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center";

function ServiceCard({
  service,
  delay,
  isInView,
  small = false,
}: {
  service: (typeof SERVICES)[number];
  delay: number;
  isInView: boolean;
  small?: boolean;
}) {
  const Icon = iconMap[service.icon];
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`${CARD_BASE} ${small ? "p-4" : "p-7"}`}
      whileHover={{ y: -4 }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <div className={`rounded-xl bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors duration-300 shrink-0 ${small ? "w-8 h-8 mb-2" : "w-11 h-11 mb-4"}`}>
        {Icon && <Icon className={`text-accent-primary ${small ? "w-4 h-4" : "w-5 h-5"}`} />}
      </div>
      <h3 className={`font-outfit font-bold text-text-primary leading-snug mb-2 ${small ? "text-xs" : "text-sm"}`}>
        {service.title}
      </h3>
      {!small && (
        <span className="inline-flex items-center gap-1 text-accent-primary text-xs font-semibold mt-auto">
          Vaata lähemalt
          <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      )}
    </motion.article>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });

  // 0–4: normal cards (3 in row 1, 2 in row 2 col 1–2)
  // 5: Fassaadipesu (row 2 col 3, normal)
  // 6–7: small cards stacked under Fassaadipesu
  const main = SERVICES.slice(0, 5);
  const fassaad = SERVICES[5];
  const small = SERVICES.slice(6);

  return (
    <section id="services" className="py-20 md:py-28">
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

        {/* 3 columns × 2 rows; col 3 row 2 holds Fassaadipesu + 2 small below */}
        <div className="max-w-2xl mx-auto grid grid-cols-3 gap-3 items-start">
          {/* Row 1 (cols 1–3) + Row 2 cols 1–2 */}
          {main.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={0.05 + i * 0.07} isInView={isInView} />
          ))}

          {/* Row 2, col 3: Fassaadipesu + 2 small cards beneath */}
          <div className="flex flex-col gap-2">
            <ServiceCard service={fassaad} delay={0.40} isInView={isInView} />
            <div className="grid grid-cols-2 gap-2">
              {small.map((service, i) => (
                <ServiceCard key={service.title} service={service} delay={0.48 + i * 0.06} isInView={isInView} small />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
