"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, ShieldCheck } from "lucide-react";
import { STATS } from "@/lib/constants";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Container from "@/components/layout/Container";

const ECO_POINTS = [
  "Öko-sertifitseeritud puhastustooted kõikides teenustes",
  "Jäätmete vähendamise ja ringlussevõtu protokollid igal tööobjektil",
  "Süsiniku jalajälje jälgimine ja aastaaruandlus",
];

const GUARANTEE_POINTS = [
  "Öko-sertifitseeritud puhastusteenus kõikides teenustes",
  "Säästame vähendamise protokollid igal tööobjektil",
  "Süsiniku jalajälje jälgimine ja aastaaruandlus",
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="why-us" ref={ref} className="py-20 md:py-28 bg-bg-primary">
      <Container>

        {/* ── Row 1: Heading (left) + Paragraph text (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-primary block mb-4">
              Miks valida meid
            </span>
            <h2
              className="font-outfit font-bold text-[#071428] leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              20 aastase ajalooga puhastusettevõte
            </h2>
          </motion.div>

          <motion.p
            className="text-text-secondary leading-relaxed text-base lg:pt-12"
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Koristusfirma SPS Grupp ajalugu sai alguse 2006. aastal. Tänaseks
            oleme kasvanud üheks Harjumaa juhtivaks kinnisvarahaldus
            ettevõtteks. Meil töötab üle 200 töötaja ning suudame leida
            optimaalse lahenduse nii suurtele, kui ka väga suurtele
            ettevõtetele.
          </motion.p>
        </div>

        {/* ── Row 2: Three stat numbers in ONE row ── */}
        <div className="grid grid-cols-3 gap-6 mb-14">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.13, ease: "easeOut" }}
              className="text-center"
            >
              <div
                className="font-outfit font-bold text-[#071428] mb-1 tabular-nums"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-[#071428]"
                  duration={2.5}
                />
              </div>
              <p className="text-text-secondary text-sm font-semibold uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Divider ── */}
        <motion.div
          className="border-t border-gray-200 mb-12"
          initial={{ scaleX: 0, originX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* ── Row 3: Two trust blocks ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left trust block */}
          <motion.div
            className="rounded-2xl bg-white border border-gray-100 p-7 md:p-8 shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-accent-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-accent-primary" />
              </div>
              <p className="text-text-primary font-outfit font-bold text-base leading-snug pt-1">
                Usume puhastamisse, mis ei käi keldikorra arvelt. Kasutame
                puhastushendeid ja protsessuid, mis vähendavad allergeeid ning
                toetavad kiidava kvaliteediga iga tööobjekti.
              </p>
            </div>
            <ul className="space-y-2.5 pl-1">
              {ECO_POINTS.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary shrink-0 mt-1.5" />
                  <span className="text-text-secondary text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right trust block */}
          <motion.div
            className="rounded-2xl bg-white border border-gray-100 p-7 md:p-8 shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.72, ease: "easeOut" }}
          >
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-accent-primary/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-accent-primary" />
              </div>
              <div className="pt-0.5">
                <p className="text-text-primary font-outfit font-bold text-base leading-snug">
                  SPS Grupp tegutseb usaldustatult
                </p>
                <p className="text-text-secondary text-sm mt-2 leading-relaxed">
                  Vastutame täielikult ettevõtte korralduste tegemisel ning
                  anname 100% garantii tahitud töö kvaliteedile.
                </p>
              </div>
            </div>
            <ul className="space-y-2.5 pl-1">
              {GUARANTEE_POINTS.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary shrink-0 mt-1.5" />
                  <span className="text-text-secondary text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </Container>
    </section>
  );
}
