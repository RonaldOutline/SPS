"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Send, CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

const CONTACT_INFO = [
  { icon: Phone, label: "Telefon", value: "+372 600 1234", href: "tel:+3726001234" },
  { icon: Mail, label: "E-post", value: "info@sps-cleaning.ee", href: "mailto:info@sps-cleaning.ee" },
  { icon: MapPin, label: "Aadress", value: "Tornimäe 5, 10145 Tallinn", href: null },
  { icon: Clock, label: "Tööaeg", value: "E–R 07:00–20:00 · L 09:00–16:00", href: null },
];

export default function ContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section id="contact" className="bg-gradient-to-b from-bg-secondary to-bg-primary">
      <Container>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Left: Info block */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <p className="text-accent-primary font-semibold text-sm tracking-widest uppercase mb-3">
                Võtke ühendust
              </p>
              <h2 className="font-outfit font-bold text-text-primary text-3xl md:text-4xl leading-tight mb-4">
                Alustame teie{" "}
                <span className="gradient-text">puhta ruumiga</span>
              </h2>
              <p className="text-text-secondary text-base leading-relaxed">
                Täitke päringuvorm ja meie meeskond koostab teile personaalse pakkumise 24 tunni jooksul.
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-accent-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-text-primary font-medium hover:text-accent-primary transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-text-primary font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-outfit font-bold text-text-primary text-sm">
                  Tasuta konsultatsioon
                </p>
                <p className="text-text-secondary text-xs mt-0.5">
                  Tuleme kohale, hindame ruumid ja koostame pakkumise tasuta.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="glass-heavy rounded-3xl p-8 md:p-10 shadow-xl">
              {submitted ? (
                <motion.div
                  className="flex flex-col items-center text-center gap-5 py-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center">
                    <CheckCircle className="w-11 h-11 text-success" />
                  </div>
                  <h3 className="font-outfit font-bold text-text-primary text-2xl">
                    Päring edukalt saadetud!
                  </h3>
                  <p className="text-text-secondary max-w-sm">
                    Täname! Meie meeskond võtab Teiega ühendust hiljemalt 24 tunni jooksul.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", company: "", email: "", phone: "", message: "" });
                    }}
                    className="mt-2 text-accent-primary font-semibold hover:underline text-sm"
                  >
                    Saada uus päring
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="font-outfit font-bold text-text-primary text-xl mb-1">
                    Täitke päringuvorm
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wide mb-2">
                        Nimi *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Teie nimi"
                        className="w-full px-4 py-3.5 rounded-xl border border-bg-secondary bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/30 focus:border-accent-primary transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wide mb-2">
                        Ettevõte *
                      </label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        required
                        placeholder="Ettevõtte nimi"
                        className="w-full px-4 py-3.5 rounded-xl border border-bg-secondary bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/30 focus:border-accent-primary transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wide mb-2">
                        E-post *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="teie@ettevote.ee"
                        className="w-full px-4 py-3.5 rounded-xl border border-bg-secondary bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/30 focus:border-accent-primary transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wide mb-2">
                        Telefon
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+372 5xxx xxxx"
                        className="w-full px-4 py-3.5 rounded-xl border border-bg-secondary bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/30 focus:border-accent-primary transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wide mb-2">
                      Sõnum
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Kirjeldage oma ruume ja vajadusi lühidalt..."
                      className="w-full px-4 py-3.5 rounded-xl border border-bg-secondary bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/30 focus:border-accent-primary transition-all text-sm resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-base hover:shadow-[0_0_32px_rgba(14,165,233,0.35)] transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-4 h-4" />
                    Saada päring
                  </motion.button>

                  <p className="text-text-muted text-xs text-center">
                    Teie andmed on kaitstud ja neid ei jagata kolmandate osapooltega.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
