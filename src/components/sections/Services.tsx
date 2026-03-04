"use client";

import { motion } from "framer-motion";
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
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { staggerItem } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Factory,
  Store,
  HardHat,
  PanelsTopLeft,
  ShieldCheck,
};

export default function Services() {
  return (
    <Section id="services">
      <SectionHeading
        title="Põhjalikud puhastusteenused"
        subtitle="Igapäevasest korrashoiust kuni spetsialiseeritud tööstusliku puhastuseni. Suudame olla tugevad kõikides puhastuslahendustes."
      />

      <StaggerChildren
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        staggerDelay={0.1}
      >
        {SERVICES.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.article
              key={service.title}
              variants={staggerItem}
              className="glass rounded-2xl p-6 gradient-border-hover group cursor-pointer flex flex-col items-center text-center"
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                background: "var(--color-glass-hover)",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center mb-5">
                {Icon && <Icon className="w-7 h-7 text-white" />}
              </div>

              {/* Title */}
              <h3 className="font-outfit font-bold text-lg text-text-primary mb-3">
                {service.title}
              </h3>

              {/* Link */}
              <span className="inline-flex items-center gap-1.5 text-accent-primary text-base font-semibold mt-auto">
                Vaata lisaks
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.article>
          );
        })}
      </StaggerChildren>
    </Section>
  );
}
