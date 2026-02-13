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

      {/* Desktop: Horizontal scroll snap */}
      <div ref={ref} className="hidden md:block">
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {INDUSTRIES.map((industry, i) => (
            <motion.article
              key={industry.name}
              className="industry-card snap-start shrink-0 w-[300px] lg:w-[320px] h-[420px] relative rounded-2xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 0.5, delay: 0.08 * i, ease: "easeOut" }}
            >
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="object-cover industry-card-img"
                sizes="320px"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/60 group-hover:via-black/20 transition-all duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block glass text-xs font-semibold px-3 py-1 rounded-full text-white mb-3">
                  {industry.clientCount} Clients
                </span>
                <h3 className="font-outfit font-bold text-xl text-white mb-1">
                  {industry.name}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Mobile: Vertical stack */}
      <div className="md:hidden space-y-4">
        {INDUSTRIES.slice(0, 6).map((industry, i) => (
          <motion.article
            key={industry.name}
            className="industry-card relative rounded-2xl overflow-hidden h-[260px] group"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.08 * i, ease: "easeOut" }}
          >
            <Image
              src={industry.image}
              alt={industry.name}
              fill
              className="object-cover industry-card-img"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="inline-block glass text-xs font-semibold px-3 py-1 rounded-full text-white mb-2">
                {industry.clientCount} Clients
              </span>
              <h3 className="font-outfit font-bold text-lg text-white mb-1">
                {industry.name}
              </h3>
              <p className="text-white/80 text-sm">{industry.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
