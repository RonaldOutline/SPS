import { type ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
}

export default function Section({
  children,
  id,
  className = "",
  fullWidth = false,
  noPadding = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative ${noPadding ? "" : "py-20 md:py-28"} ${className}`}
    >
      {fullWidth ? children : <Container>{children}</Container>}
    </section>
  );
}
