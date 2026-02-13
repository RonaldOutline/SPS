"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: string;
  as?: "div" | "article";
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  padding = "p-6",
  as = "div",
}: GlassCardProps) {
  const Component = motion[as];

  return (
    <Component
      className={`glass rounded-2xl ${padding} ${className}`}
      whileHover={
        hover
          ? {
              y: -6,
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              background: "var(--color-glass-hover)",
            }
          : undefined
      }
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {children}
    </Component>
  );
}
