"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

const SERVICE_IMAGES: Record<string, string> = {
  "Office Cleaning":
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  "Industrial Cleaning":
    "https://images.unsplash.com/photo-1581092160607-ee67df30d0f2?w=600&q=80",
  "Retail & Commercial":
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
  "Post-Construction Cleanup":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  "Window & Facade Cleaning":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  "Specialized Sanitization":
    "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=600&q=80",
};

export default function Services() {
  return (
    <Section id="services">
      <SectionHeading
        title="Comprehensive Cleaning Solutions"
        subtitle="From daily office maintenance to specialized industrial cleaning, we deliver excellence across every service."
      />

      <StaggerChildren
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        staggerDelay={0.1}
      >
        {SERVICES.map((service) => {
          const Icon = iconMap[service.icon];
          const imageUrl = SERVICE_IMAGES[service.title];
          return (
            <motion.article
              key={service.title}
              variants={staggerItem}
              className="relative rounded-2xl overflow-hidden gradient-border-hover group cursor-pointer bg-white"
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Background image */}
              <div className="relative h-44 overflow-hidden">
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                {/* Floating icon */}
                <div className="absolute bottom-0 translate-y-1/2 left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-lg z-10">
                  {Icon && <Icon className="w-6 h-6 text-white" />}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-8">
                <h3 className="font-outfit font-bold text-lg text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-accent-primary text-sm font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.article>
          );
        })}
      </StaggerChildren>
    </Section>
  );
}
