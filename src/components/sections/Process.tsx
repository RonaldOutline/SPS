"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  ClipboardList,
  FileText,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  ClipboardList,
  FileText,
  Sparkles,
  CheckCircle,
};

const STEP_IMAGES = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
  "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.7", "end 0.7"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="process" className="bg-bg-secondary/50">
      <SectionHeading
        title="How We Work"
        subtitle="A streamlined process designed for efficiency and exceptional results, every time."
      />

      <div ref={sectionRef} className="relative max-w-4xl mx-auto">
        {/* Vertical line — desktop center, mobile left */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-bg-secondary">
          <motion.div
            className="w-full bg-gradient-to-b from-accent-primary to-accent-secondary origin-top"
            style={{ height: lineHeight }}
          />
        </div>

        {/* Steps */}
        <div className="space-y-16 md:space-y-24">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon];
            const isLeft = i % 2 === 0;

            return (
              <div
                key={step.number}
                className="relative flex items-start"
              >
                {/* Desktop alternating layout */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-12 w-full items-center">
                  {isLeft ? (
                    <>
                      <ScrollReveal direction="left" delay={0.1}>
                        <StepCard step={step} Icon={Icon} image={STEP_IMAGES[i]} />
                      </ScrollReveal>
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <ScrollReveal direction="right" delay={0.1}>
                        <StepCard step={step} Icon={Icon} image={STEP_IMAGES[i]} />
                      </ScrollReveal>
                    </>
                  )}
                </div>

                {/* Mobile: all left */}
                <div className="md:hidden pl-16">
                  <ScrollReveal direction="up" delay={0.1}>
                    <StepCard step={step} Icon={Icon} image={STEP_IMAGES[i]} />
                  </ScrollReveal>
                </div>

                {/* Circle on the line */}
                <motion.div
                  className="absolute left-3.5 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary border-4 border-bg-primary z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.4, type: "spring" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function StepCard({
  step,
  Icon,
  image,
}: {
  step: (typeof PROCESS_STEPS)[number];
  Icon: LucideIcon | undefined;
  image: string;
}) {
  return (
    <div className="glass rounded-2xl overflow-hidden">
      {/* Step thumbnail */}
      <div className="relative h-32 overflow-hidden">
        <Image
          src={image}
          alt={step.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
        <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
          <span className="text-white text-xs font-bold">{step.number}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shrink-0">
            {Icon && <Icon className="w-5 h-5 text-white" />}
          </div>
          <div>
            <span className="text-xs font-semibold text-accent-primary">
              Step {step.number}
            </span>
            <h3 className="font-outfit font-bold text-lg text-text-primary">
              {step.title}
            </h3>
          </div>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}
