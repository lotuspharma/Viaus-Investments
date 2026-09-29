"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function CTASection() {
  const t = useTranslations("common");

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
          <div className="absolute inset-0 bg-grid opacity-10" />

          <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-8"
            >
              <MessageSquare size={28} className="text-white" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Bridge
              <span className="text-accent"> Australia & Vietnam?</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Let&apos;s explore how VIAUS can help you connect with opportunities
              across both markets.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-primary-dark px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all hover:-translate-y-1 hover:shadow-xl inline-flex items-center gap-2 group"
              >
                {t("contactUs")}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/about"
                className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all hover:-translate-y-1 inline-flex items-center gap-2"
              >
                {t("learnMore")}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
