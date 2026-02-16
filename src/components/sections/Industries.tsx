"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { INDUSTRIES } from "@/lib/constants";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Industries() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <Section id="industries">
      <SectionHeading
        title="Industries We Serve"
        subtitle="Specialized cleaning expertise across diverse sectors, tailored to each industry's unique requirements."
      />

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {INDUSTRIES.map((industry, i) => (
          <motion.article
            key={industry.name}
            className="industry-card relative rounded-2xl overflow-hidden h-[320px] sm:h-[360px] group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 0.5,
              delay: 0.06 * i,
              ease: "easeOut",
            }}
          >
            <Image
              src={industry.image}
              alt={industry.name}
              fill
              className="object-cover industry-card-img"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/60 group-hover:via-black/20 transition-all duration-500" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="inline-block glass text-xs font-semibold px-3 py-1 rounded-full text-white mb-2">
                {industry.clientCount} Clients
              </span>
              <h3 className="font-outfit font-bold text-lg text-white mb-1">
                {industry.name}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {industry.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
