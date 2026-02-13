"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone } from "lucide-react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <Section id="cta" noPadding>
      <Container>
        <motion.div
          ref={ref}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-primary to-accent-secondary py-16 md:py-20 px-8 md:px-16 text-center"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={
            isInView
              ? { scale: 1, opacity: 1 }
              : { scale: 0.95, opacity: 0 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="font-outfit font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Ready to Elevate Your Workspace?
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-8">
              Get a customized cleaning proposal within 24 hours
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="secondary" size="lg" className="bg-white text-accent-primary hover:bg-white/90 border-none font-bold">
                Request a Quote
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Call Us Now
              </Button>
            </div>
          </div>

          {/* Pulsing glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            animate={
              isInView
                ? {
                    boxShadow: [
                      "0 0 0px rgba(14,165,233,0)",
                      "0 0 60px rgba(14,165,233,0.3)",
                      "0 0 0px rgba(14,165,233,0)",
                    ],
                  }
                : {}
            }
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </Container>
    </Section>
  );
}
