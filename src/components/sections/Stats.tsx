"use client";

import Image from "next/image";
import { STATS } from "@/lib/constants";
import Section from "@/components/layout/Section";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Stats() {
  return (
    <Section id="why-us" className="bg-bg-secondary/50">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
        {/* Left: Image */}
        <ScrollReveal direction="left" className="lg:col-span-3 relative">
          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80"
              alt="Modern corporate office environment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          {/* Floating stat cards over image */}
          <div className="absolute -bottom-6 right-4 md:right-8 glass-heavy rounded-xl px-5 py-4 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                <span className="text-white font-bold text-sm">★</span>
              </div>
              <div>
                <p className="text-sm font-bold text-text-primary">4.9/5 Reiting</p>
                <p className="text-xs text-text-muted">Google arvustused</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: Stats */}
        <div className="lg:col-span-2 space-y-2">
          <ScrollReveal direction="right">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-accent-primary">
              Miks valida meid
            </span>
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-text-primary mt-2 mb-4">
              20 aastase ajalooga koristusfirma
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Koristusfirma SPS Grupp ajalugu sai alguse 2006. aastal. Tänaseks oleme kasvanud üheks Harjumaa juhtivaks kinnisvarahaldus ettevõtteks. Meil töötab üle 200 töötaja ning suudame leida optimaalse lahenduse nii suurtele, kui ka väga suurtele ettevõtetele.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} direction="right" delay={0.1 * i}>
                <div className="glass rounded-xl p-5">
                  <div className="flex items-baseline gap-1 mb-1">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="font-outfit font-bold text-3xl text-accent-primary"
                    />
                  </div>
                  <h3 className="font-outfit font-semibold text-text-primary mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {stat.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
