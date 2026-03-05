"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";
import Container from "@/components/layout/Container";

export default function VideoBlock() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="video" className="py-20 md:py-28 bg-white">
      <Container>
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Heading */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-primary block mb-3">
              Vaata lähemalt
            </span>
            <h2 className="font-outfit font-bold text-text-primary text-3xl md:text-4xl leading-tight">
              Kuidas me töötame
            </h2>
            <p className="text-text-secondary mt-3 max-w-xl mx-auto">
              Tutvu meie meeskonna ja tööprotsessiga lühivideo vahendusel.
            </p>
          </motion.div>

          {/* Video container */}
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-slate-900 group cursor-pointer"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            {playing ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="SPS Grupp tutvustusvideo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                {/* Thumbnail */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/25 to-transparent" />

                {/* Play button */}
                <button
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                  aria-label="Esita video"
                >
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Pulsing ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-accent-primary/30"
                      animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-accent-primary/20"
                      animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2.2, delay: 0.4, ease: "easeInOut" }}
                    />
                    <div className="relative w-20 h-20 rounded-full bg-white shadow-[0_0_40px_rgba(14,165,233,0.35)] flex items-center justify-center">
                      <Play className="w-8 h-8 text-accent-primary ml-1" fill="currentColor" />
                    </div>
                  </motion.div>
                  <motion.span
                    className="text-white font-outfit font-semibold text-sm tracking-wide opacity-90"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Esita tutvustus
                  </motion.span>
                </button>

                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shrink-0">
                      <span className="text-white font-outfit font-bold text-xs">SPS</span>
                    </div>
                    <div>
                      <p className="text-white font-outfit font-bold text-sm">Tarmo Sildberg</p>
                      <p className="text-white/65 text-xs">SPS Grupp — Harjumaa juhtiv koristusfirma alates 2006</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
