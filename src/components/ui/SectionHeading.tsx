"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={`mb-12 md:mb-16 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
        {title}
      </h2>
      <div
        className={`h-1 w-16 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary ${
          centered ? "mx-auto" : ""
        } mb-4`}
      />
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
