"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  Banknote,
  Cpu,
  Factory,
  Palette,
  Ship,
  Store,
  ArrowRight,
} from "lucide-react";

const steps = [
  { key: "investment", Icon: Banknote },
  { key: "technology", Icon: Cpu },
  { key: "manufacturing", Icon: Factory },
  { key: "brand", Icon: Palette },
  { key: "trade", Icon: Ship },
  { key: "market", Icon: Store },
] as const;

export default function BusinessModel() {
  const t = useTranslations("businessModel");

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag={t("sectionTag")}
          title={t("title")}
          highlight={t("titleHighlight")}
          subtitle={t("subtitle")}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 lg:p-12"
        >
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span className="px-6 py-3 rounded-xl bg-primary/20 border border-primary/30 text-primary-light font-bold text-sm tracking-wider">
                🇦🇺 {t("australia")}
              </span>
              <ArrowRight size={24} className="text-accent hidden sm:block" />
              <span className="px-6 py-3 rounded-xl bg-accent/20 border border-accent/30 text-accent font-bold text-sm tracking-wider animate-pulse-glow">
                {t("connector")}
              </span>
              <ArrowRight size={24} className="text-accent hidden sm:block" />
              <span className="px-6 py-3 rounded-xl bg-accent-red/20 border border-accent-red/30 text-accent-red font-bold text-sm tracking-wider">
                🇻🇳 {t("vietnam")}
              </span>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {steps.map(({ key, Icon }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-surface hover:bg-surface-hover border border-border hover:border-primary/30 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon size={24} className="text-primary-light" />
                    </div>
                    <span className="text-xs font-semibold text-text-primary text-center">
                      {t(`steps.${key}`)}
                    </span>
                    <span className="text-[10px] text-text-muted">
                      0{i + 1}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-text-muted z-10">
                      <ArrowRight size={14} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
