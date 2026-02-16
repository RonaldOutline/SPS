"use client";

import { motion } from "framer-motion";
import { Send, Phone } from "lucide-react";

export default function QuoteForm() {
  return (
    <motion.div
      id="quote-form"
      className="glass-heavy rounded-3xl p-6 md:p-8 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h3 className="font-outfit font-bold text-xl md:text-2xl text-text-primary mb-2">
        Request a Free Quote
      </h3>
      <p className="text-text-secondary text-sm mb-6">
        Get a customized proposal within 24 hours
      </p>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-text-primary mb-1.5"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/30 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/40 transition"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text-primary mb-1.5"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="john@company.com"
            className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/30 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/40 transition"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-text-primary mb-1.5"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+372 ..."
            className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/30 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/40 transition"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-text-primary mb-1.5"
          >
            Service Type
          </label>
          <select
            id="service"
            className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/30 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/40 transition appearance-none"
          >
            <option value="">Select a service</option>
            <option value="office">Office Cleaning</option>
            <option value="industrial">Industrial Cleaning</option>
            <option value="retail">Retail &amp; Commercial</option>
            <option value="post-construction">Post-Construction Cleanup</option>
            <option value="window">Window &amp; Facade Cleaning</option>
            <option value="sanitization">Specialized Sanitization</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-text-primary mb-1.5"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={3}
            placeholder="Tell us about your facility and requirements..."
            className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/30 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/40 transition resize-none"
          />
        </div>

        <motion.button
          type="submit"
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold flex items-center justify-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.02, boxShadow: "0 0 24px rgba(14,165,233,0.35)" }}
          whileTap={{ scale: 0.98 }}
        >
          <Send className="w-4 h-4" />
          Get Free Quote
        </motion.button>
      </form>

      <div className="mt-5 pt-5 border-t border-white/20 text-center">
        <p className="text-text-muted text-xs mb-2">Or call us directly</p>
        <a
          href="tel:+3726001234"
          className="inline-flex items-center gap-2 text-accent-primary font-semibold hover:underline"
        >
          <Phone className="w-4 h-4" />
          +372 600 1234
        </a>
      </div>
    </motion.div>
  );
}
