"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Leaf,
  Award,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CERTIFICATES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Leaf,
  Award,
  BadgeCheck,
};

export default function Certificates() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <Section id="certificates">
      <SectionHeading
        title="Warranty & Certificates"
        subtitle="Our quality is backed by internationally recognized certifications and comprehensive warranties."
      />

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
      >
        {CERTIFICATES.map((cert, i) => {
          const Icon = iconMap[cert.icon] || ShieldCheck;
          return (
            <motion.div
              key={cert.title}
              className="glass rounded-2xl p-6 text-center group gradient-border-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.5, delay: 0.1 * i, ease: "easeOut" }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-outfit font-bold text-lg text-text-primary mb-2">
                {cert.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Button variant="primary" size="lg" href="#cta">
          Check Closer
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </motion.div>
    </Section>
  );
}
