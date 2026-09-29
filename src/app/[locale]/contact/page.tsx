"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const inquiryTypes = [
  "investment",
  "partnership",
  "consultation",
  "meeting",
  "other",
] as const;

export default function ContactPage() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <>
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-radial-glow" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag={t("sectionTag")}
            title={t("title")}
            highlight={t("titleHighlight")}
            subtitle={t("subtitle")}
          />

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-card p-8 space-y-6">
                {[
                  { Icon: MapPin, text: t("info.address") },
                  {
                    Icon: Phone,
                    text: t("info.phone"),
                    href: "tel:+61420781188",
                  },
                  {
                    Icon: Mail,
                    text: t("info.email"),
                    href: "mailto:viaus.investments@gmail.com",
                  },
                  { Icon: Clock, text: t("info.hours") },
                ].map(({ Icon, text, href }, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-primary-light" />
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-text-secondary hover:text-primary-light transition-colors pt-2.5 text-sm"
                      >
                        {text}
                      </a>
                    ) : (
                      <p className="text-text-secondary pt-2.5 text-sm">
                        {text}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="glass-card p-8">
                <h4 className="text-text-primary font-semibold mb-4">
                  Office Location
                </h4>
                <div className="aspect-video rounded-lg overflow-hidden bg-surface border border-border flex items-center justify-center">
                  <div className="text-center text-text-muted">
                    <MapPin size={32} className="mx-auto mb-2 text-primary/40" />
                    <p className="text-sm">Port Melbourne, VIC 3207</p>
                    <p className="text-xs mt-1">Australia</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 lg:p-10"
            >
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} className="text-success" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {t("form.success")}
                  </h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">
                        {t("form.name")} *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">
                        {t("form.email")} *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">
                        {t("form.phone")}
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">
                        {t("form.company")}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-text-secondary text-sm mb-2">
                      {t("form.inquiryType")} *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    >
                      <option value="">--</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {t(`form.inquiryTypes.${type}`)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-text-secondary text-sm mb-2">
                      {t("form.message")} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full btn-primary text-base !py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      t("form.sending")
                    ) : (
                      <>
                        {t("form.submit")}
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
