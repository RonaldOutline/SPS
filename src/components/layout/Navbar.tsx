"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import Container from "./Container";
import Button from "@/components/ui/Button";

const MEGA_MENU_COLUMNS = [
  {
    title: "Hooldusteenused",
    items: [
      "Kontori koristus",
      "Kaubanduspindade koristus",
      "Koolide koristus",
      "Tööstushoonete koristus",
    ],
  },
  {
    title: "Eripuhastustööd",
    items: [
      "Akende pesu",
      "Vaipade puhastus",
      "Põrandate hooldus",
      "Ehitusjärgne koristus",
      "Ehitusprahi äravedu",
      "Eskalaatorite süvapuhastus",
    ],
  },
  {
    title: "Välikoristus",
    items: [
      "Fassaadipesu",
      "Graffiti eemaldamine",
      "Tänavakivide pesu",
      "Lumekoristus",
    ],
  },
  {
    title: "Remonditööd",
    items: [
      "Elektritööd",
      "Torutööd",
      "Siseviimistlus",
      "Sanitaarremont",
      "Plaatimistööd",
      "Ventilatsioonide ehitus / hooldus",
      "Katuse remont",
      "Lammutustööd",
    ],
  },
];

const TOP_NAV = [
  { label: "Teenused", hasMega: true },
  { label: "Meist", href: "#why-us" },
  { label: "Valdkonnad", href: "#industries" },
  { label: "Protsess", href: "#process" },
  { label: "Tagasiside", href: "#testimonials" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  const scheduleMegaClose = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 150);
  };

  // Transparent (hero) state: white text. Scrolled state: dark text.
  const linkClass = scrolled
    ? "text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
    : "text-sm font-medium text-white/90 hover:text-white transition-colors";

  const logoTextClass = scrolled ? "text-text-primary" : "text-white";
  const iconClass = scrolled ? "text-text-primary" : "text-white";

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center shrink-0">
              <img
                src="/SPS_LOGO.svg"
                alt="SPS Grupp"
                className={`h-8 w-auto transition-all duration-300 ${scrolled ? "brightness-0" : ""}`}
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6" ref={megaRef}>
              {TOP_NAV.map((link) =>
                link.hasMega ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={openMega}
                    onMouseLeave={scheduleMegaClose}
                  >
                    <button
                      className={`flex items-center gap-1 ${linkClass}`}
                      onClick={() => setMegaOpen((v) => !v)}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`link-underline ${linkClass}`}
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block shrink-0">
              <Button variant="primary" size="sm" href="#contact">
                Küsi pakkumist
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="Ava menüü"
            >
              {mobileOpen ? (
                <X className={`w-6 h-6 ${iconClass}`} />
              ) : (
                <Menu className={`w-6 h-6 ${iconClass}`} />
              )}
            </button>
          </nav>
        </Container>

        {/* Mega Menu Panel — always solid white */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="hidden lg:block absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-[0_16px_48px_rgba(0,0,0,0.1)]"
              onMouseEnter={openMega}
              onMouseLeave={scheduleMegaClose}
            >
              <Container>
                <div className="grid grid-cols-4 gap-0 py-7">
                  {MEGA_MENU_COLUMNS.map((col, ci) => (
                    <div
                      key={col.title}
                      className={`px-6 ${ci < MEGA_MENU_COLUMNS.length - 1 ? "border-r border-gray-100" : ""}`}
                    >
                      <h3 className="font-outfit font-bold text-xs text-accent-primary uppercase tracking-widest mb-3">
                        {col.title}
                      </h3>
                      <ul className="space-y-2">
                        {col.items.map((item) => (
                          <li key={item}>
                            <a
                              href="#services"
                              className="text-sm text-text-secondary hover:text-accent-primary hover:translate-x-1 inline-block transition-all duration-150"
                              onClick={() => setMegaOpen(false)}
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-start pt-24 pb-12 px-6 gap-2 min-h-full">
              {TOP_NAV.map((link, i) =>
                link.hasMega ? (
                  <div key={link.label} className="w-full max-w-sm">
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="w-full flex items-center justify-between text-xl font-outfit font-semibold text-text-primary hover:text-accent-primary transition-colors py-3 border-b border-gray-100"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </motion.button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-2 gap-x-4 gap-y-4 pt-4 pb-3 pl-2">
                            {MEGA_MENU_COLUMNS.map((col) => (
                              <div key={col.title}>
                                <p className="text-xs font-bold text-accent-primary uppercase tracking-wider mb-2">
                                  {col.title}
                                </p>
                                {col.items.map((item) => (
                                  <a
                                    key={item}
                                    href="#services"
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-sm text-text-secondary hover:text-text-primary py-1"
                                  >
                                    {item}
                                  </a>
                                ))}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                    className="text-xl font-outfit font-semibold text-text-primary hover:text-accent-primary transition-colors w-full max-w-sm py-3 border-b border-gray-100"
                  >
                    {link.label}
                  </motion.a>
                )
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="mt-6 w-full max-w-sm"
              >
                <Button
                  variant="primary"
                  size="lg"
                  href="#contact"
                  className="w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Küsi pakkumist
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
