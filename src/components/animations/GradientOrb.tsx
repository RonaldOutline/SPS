"use client";

import { motion } from "framer-motion";

interface GradientOrbProps {
  color?: string;
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
  duration?: number;
}

export default function GradientOrb({
  color = "var(--color-accent-primary)",
  size = 600,
  top,
  left,
  right,
  bottom,
  delay = 0,
  duration = 25,
}: GradientOrbProps) {
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity: 0.1,
        filter: "blur(80px)",
      }}
      animate={{
        y: [0, -30, 0, 30, 0],
        scale: [1, 1.05, 1, 0.95, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
