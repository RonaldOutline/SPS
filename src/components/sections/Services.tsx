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

// Per-card: height (size), padding (density), mt (vertical stagger)
const CARD_CONFIGS = [
  { height: "h-52", padding: "p-6",  mt: "mt-0"  },
  { height: "h-44", padding: "p-5",  mt: "mt-8"  },
  { height: "h-56", padding: "p-8",  mt: "mt-3"  },
  { height: "h-48", padding: "p-6",  mt: "mt-0"  },
  { height: "h-52", padding: "p-5",  mt: "mt-7"  },
  { height: "h-44", padding: "p-7",  mt: "mt-1"  },
  { height: "h-60", padding: "p-8",  mt: "mt-4"  },
  { height: "h-48", padding: "p-5",  mt: "mt-2"  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });

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

        {/* Uneven 3-column grid — narrower container makes cards squarish */}
        <div className="max-w-2xl mx-auto grid grid-cols-3 gap-3 items-start">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            const cfg = CARD_CONFIGS[i] ?? CARD_CONFIGS[0];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 + i * 0.07, ease: "easeOut" }}
                className={`group relative rounded-2xl bg-white border border-gray-100 cursor-pointer overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center ${cfg.height} ${cfg.padding} ${cfg.mt}`}
                whileHover={{ y: -4 }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent-primary/20 transition-colors duration-300 shrink-0">
                  {Icon && <Icon className="w-6 h-6 text-accent-primary" />}
                </div>
                <h3 className="font-outfit font-bold text-sm text-text-primary mb-3 leading-snug">
                  {service.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-accent-primary text-xs font-semibold mt-auto">
                  Vaata lähemalt
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
