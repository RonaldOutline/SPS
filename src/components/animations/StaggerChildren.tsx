"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface StaggerChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
}

export default function StaggerChildren({
  children,
  staggerDelay = 0.1,
  className = "",
  once = true,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
