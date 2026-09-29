"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { Globe2, Link2, Shield, Network } from "lucide-react";

const features = [
  { key: "dualMarket", Icon: Globe2 },
  { key: "fullChain", Icon: Link2 },
  { key: "quality", Icon: Shield },
  { key: "network", Icon: Network },
] as const;

export default function WhyViaus() {
  const t = useTranslations("whyViaus");

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-40" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary-light border border-primary/20 mb-6">
              {t("sectionTag")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-2">
              {t("title")}
            </h2>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              <span className="gradient-text">{t("titleHighlight")}</span>
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-text-secondary mb-6">
              {t("subtitle")}
            </h3>
            <p className="text-text-secondary leading-relaxed text-lg">
              {t("description")}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map(({ key, Icon }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={22} className="text-primary-light" />
                </div>
                <h4 className="text-base font-semibold text-text-primary mb-2">
                  {t(`features.${key}.title`)}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t(`features.${key}.text`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
