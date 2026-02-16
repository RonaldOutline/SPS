"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

interface InlineCTAProps {
  title: string;
  subtitle: string;
}

export default function InlineCTA({ title, subtitle }: InlineCTAProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 p-6 md:p-8 text-center my-12"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="font-outfit font-bold text-xl md:text-2xl text-text-primary mb-2">
        {title}
      </h3>
      <p className="text-text-secondary mb-5">{subtitle}</p>
      <Button variant="primary" size="md" href="#quote-form">
        Get Your Free Quote
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </motion.div>
  );
}
