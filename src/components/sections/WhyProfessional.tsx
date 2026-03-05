"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HeartPulse, Leaf, BarChart3 } from "lucide-react";
import Container from "@/components/layout/Container";

const CARDS = [
  {
    icon: HeartPulse,
    title: "Väheneb haiguspäevade arv",
    description:
      "Korralikult hooldatud ruumides levib vähem haigusi. Puhas töökeskkond tähendab tervemat meeskonda ja vähem tootlikkuse kadu.",
  },
  {
    icon: Leaf,
    title: "Öko sertifikaadid",
    description:
      "Kasutame öko-sertifikaatidega puhastusvahendeid. Nii vähendame allergiaid ja minimeerime keskkonnakoormus.",
  },
  {
    icon: BarChart3,
    title: "Digitaalne raporteerimine",
    description:
      "Saame ka tagantjärele veenduda tehtud tööde kvaliteedis. 15-punktiline hindamine tagab läbipaistva kvaliteedikontrolli.",
  },
];

export default function WhyProfessional() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section className="relative py-20 md:py-28 bg-[#071428] overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(14,165,233,0.10)_0%,transparent_65%)] pointer-events-none" />

      <Container>
        <div ref={ref} className="flex flex-col items-center">
          {/* Heading */}
          <motion.h2
            className="font-outfit font-bold text-white text-center leading-tight mb-14"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Millist efekti võib anda professionaalne
            <br className="hidden md:block" /> optimeeritud puhastusteenus
          </motion.h2>

          {/* Three cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.15 + i * 0.12, ease: "easeOut" }}
                  className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 hover:bg-white/8 hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent-primary/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent-primary" />
                  </div>
                  <h3 className="font-outfit font-bold text-white text-lg leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* 75% wide bottom block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
            className="mt-8 w-3/4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 text-center"
          >
            <p className="text-white/75 text-base md:text-lg leading-relaxed">
              Koristusfirma SPS Grupp ajalugu sai alguse 2006. aastal. Tänaseks oleme
              kasvanud üheks Harjumaa juhtivaks kinnisvarahaldus ettevõtteks. Meil töötab
              üle 200 töötaja ning suudame leida optimaalse lahenduse nii suurtele, kui
              ka väga suurtele ettevõtetele.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
