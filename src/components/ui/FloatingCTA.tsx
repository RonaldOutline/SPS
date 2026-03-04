"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      {/* Side tab button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-gradient-to-b from-accent-primary to-accent-secondary text-white font-semibold text-sm tracking-wide shadow-xl rounded-l-xl flex flex-col items-center py-5 px-3 gap-2 hover:pr-4 transition-all duration-300 group"
        initial={{ x: 80 }}
        animate={{ x: 0 }}
        transition={{ delay: 1.8, type: "spring", stiffness: 200, damping: 20 }}
        aria-label="Küsi pakkumist"
      >
        {/* Pulsing dot */}
        <span className="w-2 h-2 rounded-full bg-white/70 animate-pulse mb-1" />
        <span
          className="font-outfit font-bold text-xs uppercase tracking-widest"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Küsi pakkumist
        </span>
        <motion.span
          className="text-white/80 text-xs mt-1"
          animate={{ y: [0, 3, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          →
        </motion.span>
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Panel header */}
              <div className="bg-gradient-to-r from-accent-primary to-accent-secondary px-6 py-6 flex items-center justify-between shrink-0">
                <div>
                  <h2 className="font-outfit font-bold text-white text-xl">
                    Küsi pakkumist
                  </h2>
                  <p className="text-white/80 text-sm mt-0.5">
                    Vastame 24 tunni jooksul
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  aria-label="Sulge"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Form content */}
              <div className="flex-1 px-6 py-6">
                {submitted ? (
                  <motion.div
                    className="flex flex-col items-center justify-center h-full text-center gap-4 py-16"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
                      <CheckCircle className="w-9 h-9 text-success" />
                    </div>
                    <h3 className="font-outfit font-bold text-text-primary text-2xl">
                      Päring saadetud!
                    </h3>
                    <p className="text-text-secondary max-w-xs">
                      Võtame Teiega ühendust 24 tunni jooksul.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setIsOpen(false);
                        setForm({ name: "", company: "", email: "", phone: "", message: "" });
                      }}
                      className="mt-4 text-accent-primary font-semibold hover:underline text-sm"
                    >
                      Sulge
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1.5">
                          Nimi *
                        </label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Teie nimi"
                          className="w-full px-4 py-3 rounded-xl border border-bg-secondary bg-bg-primary text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/40 focus:border-accent-primary transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1.5">
                          Ettevõte *
                        </label>
                        <input
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          required
                          placeholder="Ettevõtte nimi"
                          className="w-full px-4 py-3 rounded-xl border border-bg-secondary bg-bg-primary text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/40 focus:border-accent-primary transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1.5">
                          E-post *
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="teie@ettevote.ee"
                          className="w-full px-4 py-3 rounded-xl border border-bg-secondary bg-bg-primary text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/40 focus:border-accent-primary transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1.5">
                          Telefon
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+372 5xxx xxxx"
                          className="w-full px-4 py-3 rounded-xl border border-bg-secondary bg-bg-primary text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/40 focus:border-accent-primary transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1.5">
                          Sõnum
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Kirjeldage oma vajadusi lühidalt..."
                          className="w-full px-4 py-3 rounded-xl border border-bg-secondary bg-bg-primary text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/40 focus:border-accent-primary transition-all text-sm resize-none"
                        />
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-base hover:shadow-[0_0_24px_rgba(14,165,233,0.4)] transition-shadow mt-2"
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
