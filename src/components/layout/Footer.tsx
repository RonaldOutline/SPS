"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FOOTER_COLUMNS, FOOTER_CONTACT, COMPANY } from "@/lib/constants";
import Container from "./Container";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white pt-16 pb-8">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent" />

      <Container>
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Col 1: Company info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                  <span className="text-white font-outfit font-bold text-xs">
                    {COMPANY.name}
                  </span>
                </div>
                <span className="font-outfit font-bold text-lg">
                  {COMPANY.name}
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {COMPANY.description}
              </p>
              {/* Social icons (placeholder) */}
              <div className="flex gap-3">
                {["LinkedIn", "Facebook", "Instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-accent-primary transition-colors text-xs font-semibold text-slate-400 hover:text-white"
                    aria-label={social}
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 & 3: Link columns */}
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="font-outfit font-semibold text-sm mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-slate-400 text-sm hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Col 4: Contact */}
            <div>
              <h3 className="font-outfit font-semibold text-sm mb-4">
                Kontakt
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                  <span className="text-slate-400 text-sm">
                    {FOOTER_CONTACT.address}
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-accent-primary shrink-0" />
                  <a
                    href={`tel:${FOOTER_CONTACT.phone}`}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {FOOTER_CONTACT.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-accent-primary shrink-0" />
                  <a
                    href={`mailto:${FOOTER_CONTACT.email}`}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {FOOTER_CONTACT.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                  <div className="text-slate-400 text-sm">
                    <p>{FOOTER_CONTACT.hours}</p>
                    <p>{FOOTER_CONTACT.weekendHours}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">{COMPANY.copyright}</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-slate-500 text-xs hover:text-white transition-colors"
            >
              Privaatsuspoliitika
            </a>
            <a
              href="#"
              className="text-slate-500 text-xs hover:text-white transition-colors"
            >
              Kasutustingimused
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
