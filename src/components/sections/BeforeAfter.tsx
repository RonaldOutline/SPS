"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { GripVertical } from "lucide-react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    isDragging.current = true;
    handleMove(e.touches[0].clientX);
  };

  return (
    <Section id="before-after">
      <div ref={sectionRef}>
        <SectionHeading
          title="See the Difference"
          subtitle="Drag the slider to reveal the transformation our professional team delivers."
        />

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            ref={containerRef}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] cursor-ew-resize select-none"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {/* After image (full width background) */}
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
              alt="After cleaning - pristine office"
              fill
              className="object-cover pointer-events-none"
              sizes="(max-width: 1024px) 100vw, 900px"
              draggable={false}
            />

            {/* Before image (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80"
                alt="Before cleaning - office needing attention"
                fill
                className="object-cover pointer-events-none"
                sizes="(max-width: 1024px) 100vw, 900px"
                style={{ minWidth: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }}
                draggable={false}
              />
              {/* Before overlay tint */}
              <div className="absolute inset-0 bg-amber-900/10" />
            </div>

            {/* Slider line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.3)] z-20"
              style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
            >
              {/* Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center">
                <GripVertical className="w-5 h-5 text-accent-primary" />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 glass-dark rounded-lg px-3 py-1.5 z-10">
              <span className="text-white text-sm font-semibold">Before</span>
            </div>
            <div className="absolute top-4 right-4 glass-dark rounded-lg px-3 py-1.5 z-10">
              <span className="text-white text-sm font-semibold">After</span>
            </div>
          </div>

          {/* Caption */}
          <p className="text-center text-text-muted text-sm mt-4">
            Drag the slider left and right to compare
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
