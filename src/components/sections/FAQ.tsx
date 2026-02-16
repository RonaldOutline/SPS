"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQ_ITEMS } from "@/lib/constants";

function FAQAccordionItem({
  question,
  answer,
  index,
  isOpen,
  toggle,
}: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <motion.div
      className="glass rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.06 * index }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <span className="font-outfit font-semibold text-text-primary text-base md:text-lg">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-text-muted" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
              <p className="text-text-secondary leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <Section id="faq" className="relative overflow-hidden">
      {/* Decorative background image */}
      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-[0.05] pointer-events-none hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80"
          alt=""
          fill
          className="object-cover rounded-full"
          sizes="320px"
        />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <SectionHeading
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our professional cleaning services."
      />

      <div ref={ref} className="max-w-3xl mx-auto space-y-3 relative z-10">
        {isInView &&
          FAQ_ITEMS.map((item, i) => (
            <FAQAccordionItem
              key={i}
              question={item.question}
              answer={item.answer}
              index={i}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
      </div>
    </Section>
  );
}
