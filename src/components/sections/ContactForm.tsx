"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
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
    <section id="contact" className="py-20 md:py-28 bg-bg-primary">
      <Container>
        <div ref={ref}>
          {/* Heading */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-primary block mb-3">
              Kontakt
            </span>
            <h2 className="font-outfit font-bold text-text-primary text-3xl md:text-4xl leading-tight mb-3">
              Alustame teie{" "}
              <span className="gradient-text">puhta ruumiga</span>
            </h2>
            <p className="text-text-secondary max-w-md mx-auto text-base">
              Täitke päringuvorm ja meie meeskond koostab teile personaalse
              pakkumise 24 tunni jooksul.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left: Contact info */}
            <motion.div
              className="lg:col-span-2 flex flex-col gap-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            >
              {/* Contact details */}
              <div className="rounded-2xl border border-gray-100 bg-white p-6 flex flex-col gap-5 shadow-sm">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }, i) => (
                  <motion.div
                    key={label}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-accent-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-text-primary text-sm font-medium hover:text-accent-primary transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-text-primary text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust badge */}
              <motion.div
                className="rounded-2xl bg-[#071428] p-6 flex items-center gap-4 relative overflow-hidden"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(14,165,233,0.12)_0%,transparent_60%)] pointer-events-none" />
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shrink-0 relative z-10">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="relative z-10">
                  <p className="font-outfit font-bold text-white text-sm">
                    Tasuta konsultatsioon
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                    Tuleme kohale, hindame ruumid ja koostame pakkumise tasuta.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
            >
              <div className="rounded-3xl border border-gray-100 bg-white p-8 md:p-10 shadow-sm">
                {submitted ? (
                  <motion.div
                    className="flex flex-col items-center text-center gap-5 py-10"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
                    >
                      <CheckCircle className="w-10 h-10 text-success" />
                    </motion.div>
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField label="Nimi *" name="name" value={form.name} onChange={handleChange} required placeholder="Teie nimi" />
                      <FormField label="Ettevõte *" name="company" value={form.company} onChange={handleChange} required placeholder="Ettevõtte nimi" />
                      <FormField label="E-post *" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="teie@ettevote.ee" />
                      <FormField label="Telefon" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+372 5xxx xxxx" />
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
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/25 focus:border-accent-primary focus:bg-white transition-all text-sm resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-base"
                      whileHover={{
                        scale: 1.01,
                        boxShadow: "0 8px 32px rgba(14,165,233,0.35)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15 }}
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
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FormField({
  label,
  name,
  value,
  onChange,
  required,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wide mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/25 focus:border-accent-primary focus:bg-white transition-all text-sm"
      />
    </div>
  );
}
