"use client";

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

export default function Process() {
  return (
    <Section id="process" className="bg-bg-secondary/50">
      <SectionHeading
        title="Kuidas me töötame"
        subtitle="Tõhususe ja erakordsete tulemuste jaoks loodud sujuv protsess, alati."
      />

      <div className="relative">
        {/* Horizontal connector line (desktop) */}
        <div className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-30" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <ScrollReveal key={step.number} direction="up" delay={i * 0.1}>
                <div className="flex flex-col items-center text-center">
                  {/* Icon circle */}
                  <div className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-md mb-4">
                    {Icon && <Icon className="w-6 h-6 text-white" />}
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-bg-primary border-2 border-accent-primary flex items-center justify-center text-accent-primary font-bold text-xs">
                      {step.number}
                    </span>
                  </div>

                  <div className="glass rounded-2xl p-4 w-full">
                    <h3 className="font-outfit font-bold text-base text-text-primary mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
