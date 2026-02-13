"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const directionMap = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-15% 0px" });

  const offset = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset, scale: 0.97 }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, scale: 1 }
          : { opacity: 0, ...offset, scale: 0.97 }
      }
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
