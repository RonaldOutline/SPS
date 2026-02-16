"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { CheckCircle, Leaf } from "lucide-react";
import { SUSTAINABILITY_POINTS } from "@/lib/constants";
import Section from "@/components/layout/Section";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Sustainability() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <Section id="sustainability" className="bg-bg-secondary/50">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <div>
          <ScrollReveal direction="left">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-success">
              Sustainability
            </span>
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-text-primary mt-2 mb-4">
              Committed to a Cleaner Planet
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              We believe in cleaning that doesn&apos;t come at the planet&apos;s
              expense. Our eco-forward approach ensures every job we do contributes
              to a more sustainable future.
            </p>
          </ScrollReveal>

          <div className="space-y-4 mb-8">
            {SUSTAINABILITY_POINTS.map((point, i) => (
              <ScrollReveal key={i} direction="left" delay={0.1 + i * 0.1}>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <p className="text-text-secondary">{point.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="left" delay={0.4}>
            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5">
              <Leaf className="w-4 h-4 text-success" />
              <span className="text-sm font-semibold text-text-primary">
                ISO 14001 Certified
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.5} className="mt-6">
            <a
              href="#"
              className="link-underline text-accent-primary font-semibold text-sm inline-flex items-center gap-1"
            >
              Read Our Sustainability Commitment →
            </a>
          </ScrollReveal>
        </div>

        {/* Right: Real image with overlays */}
        <ScrollReveal direction="right" className="flex items-center justify-center">
          <div className="relative w-full max-w-lg">
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
                alt="Green sustainable environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-emerald-900/10" />
            </div>

            {/* Accent image offset */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&q=80"
                alt="Eco cleaning products"
                fill
                className="object-cover"
                sizes="160px"
              />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              className="absolute top-6 -right-4 glass-heavy rounded-xl px-4 py-3 shadow-lg"
              animate={isInView ? { y: [0, -8, 0] } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-success" />
                <span className="text-sm font-bold text-text-primary">Eco Products</span>
              </div>
            </motion.div>
            <motion.div
              className="absolute bottom-20 -right-6 glass-heavy rounded-xl px-4 py-3 shadow-lg"
              animate={isInView ? { y: [0, 8, 0] } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-bold text-text-primary">Zero Waste Goal</span>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
