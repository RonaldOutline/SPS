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
    <section
      id="why-us"
      ref={ref}
      className="bg-[#071428] py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(14,165,233,0.10)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(6,182,212,0.06)_0%,transparent_50%)] pointer-events-none" />

      <Container className="relative z-10">
        {/* ── Top block: About text + Big stats ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 md:mb-16">
          {/* Left: About heading + text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <motion.div
              className="w-10 h-1 rounded-full bg-accent-primary mb-5"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            />
            <h2 className="font-outfit font-bold text-white leading-tight mb-5"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
              20 aastase ajalooga puhastusettevõte
            </h2>
            <p className="text-slate-400 leading-relaxed text-base">
              Koristusfirma SPS Grupp ajalugu sai alguse 2006. aastal. Tänaseks
              oleme kasvanud üheks Harjumaa juhtivaks kinnisvarahaldus
              ettevõtteks. Meil töötab üle 200 töötaja ning suudame leida
              optimaalse lahenduse nii suurtele, kui ka väga suurtele
              ettevõtetele.
            </p>
          </motion.div>

          {/* Right: 3 big stat numbers */}
          <div className="grid grid-cols-3 gap-4 lg:gap-6 items-center">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.13, ease: "easeOut" }}
                className="text-center"
              >
                {/* Accent line above number */}
                <motion.div
                  className="w-8 h-0.5 bg-accent-primary mx-auto mb-3 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.13 }}
                />
                <div className="font-outfit font-bold text-white mb-1"
                  style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)" }}>
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-white"
                    duration={2.5}
                  />
                </div>
                <p className="text-slate-400 text-sm font-medium leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <motion.div
          className="border-t border-slate-800 mb-12 md:mb-14"
          initial={{ scaleX: 0, originX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        />

        {/* ── Bottom block: Two trust cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {/* Left trust card: Eco / Process */}
          <motion.div
            className="rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm p-7 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.14)" }}
          >
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-accent-primary/15 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-accent-primary" />
              </div>
              <p className="text-white font-outfit font-bold text-base leading-snug pt-1">
                Usume puhastamisse, mis ei käi keldikorra arvelt. Kasutame
                puhastushendeid ja protsessuid, mis vähendavad allergeeid ning
                toetavad kiidava kvaliteediga iga tööobjekti.
              </p>
            </div>
            <ul className="space-y-2.5 pl-1">
              {ECO_POINTS.map((point, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2.5"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.07 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary shrink-0 mt-1.5" />
                  <span className="text-slate-400 text-sm leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right trust card: Guarantee */}
          <motion.div
            className="rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm p-7 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.72, ease: "easeOut" }}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.14)" }}
          >
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-accent-primary/15 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-accent-primary" />
              </div>
              <div className="pt-0.5">
                <p className="text-white font-outfit font-bold text-base leading-snug">
                  SPS Grupp tegutseb usaldustatult
                </p>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  Vastutame täielikult ettevõtte korralduste tegemisel ning
                  anname 100% garantii tahitud töö kvaliteedile.
                </p>
              </div>
            </div>
            <ul className="space-y-2.5 pl-1">
              {GUARANTEE_POINTS.map((point, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2.5"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.82 + i * 0.07 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary shrink-0 mt-1.5" />
                  <span className="text-slate-400 text-sm leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
