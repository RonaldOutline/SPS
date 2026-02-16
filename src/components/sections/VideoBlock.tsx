"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function VideoBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <Section id="video">
      <SectionHeading
        title="See Us in Action"
        subtitle="Watch how our professional teams deliver spotless results for leading businesses across Estonia."
      />

      <motion.div
        ref={ref}
        className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          isInView
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.95 }
        }
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Video container with 16:9 ratio */}
        <div className="relative aspect-video bg-slate-900">
          {/* Poster / thumbnail */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80)",
            }}
          />
          <div className="absolute inset-0 bg-black/30" />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Play video"
            >
              <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1 group-hover:scale-110 transition-transform" />
            </motion.button>
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-4 right-4 glass rounded-lg px-3 py-1.5">
            <span className="text-white text-sm font-medium">2:45</span>
          </div>
        </div>

        {/* Bottom info bar */}
        <div className="glass-heavy p-5 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="font-outfit font-bold text-text-primary text-lg">
                Behind the Scenes at SPS
              </h3>
              <p className="text-text-secondary text-sm">
                A day with our professional cleaning teams
              </p>
            </div>
            <span className="text-accent-primary font-semibold text-sm whitespace-nowrap">
              Watch Full Tour
            </span>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
