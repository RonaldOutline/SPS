"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { MapPin, Clock, ArrowRight, Users } from "lucide-react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { JOB_POSITIONS } from "@/lib/constants";

export default function Careers() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <Section id="careers">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: Text & CTA */}
        <div>
          <SectionHeading
            title="Come to Work with Us"
            subtitle="Join a growing team that values professionalism, sustainability, and making spaces shine."
            centered={false}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Team image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-6 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                alt="SPS team working together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-outfit font-bold text-sm">150+ Team Members</p>
                  <p className="text-white/70 text-xs">Across Estonia</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-outfit font-bold text-lg text-text-primary mb-1">
                  Why SPS?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Competitive salary, flexible schedules, professional
                  development, and the pride of working for Estonia&apos;s
                  top-rated cleaning company. We invest in our team because
                  they&apos;re our greatest asset.
                </p>
              </div>
            </div>

            <Button variant="primary" size="lg" href="#cta">
              View All Openings
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>

        {/* Right: Job Cards */}
        <div ref={ref} className="space-y-4">
          {JOB_POSITIONS.map((job, i) => (
            <motion.div
              key={job.title}
              className="glass rounded-2xl p-5 md:p-6 gradient-border-hover group cursor-pointer"
              initial={{ opacity: 0, x: 30 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 30 }
              }
              transition={{ duration: 0.5, delay: 0.1 * i, ease: "easeOut" }}
              whileHover={{
                y: -4,
                boxShadow: "0 16px 32px rgba(0,0,0,0.06)",
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-outfit font-bold text-lg text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-3">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
                      <Clock className="w-3.5 h-3.5" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-accent-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
