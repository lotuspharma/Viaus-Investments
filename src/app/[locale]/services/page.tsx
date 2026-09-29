"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/sections/CTASection";
import {
  TrendingUp,
  FlaskConical,
  Factory,
  Palette,
  Ship,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    key: "investment",
    Icon: TrendingUp,
    gradient: "from-blue-500 to-cyan-500",
    highlights: [
      "Market opportunity assessment",
      "Due diligence & evaluation",
      "Strategic investment planning",
      "Cross-border deal structuring",
    ],
  },
  {
    key: "pharma",
    Icon: FlaskConical,
    gradient: "from-emerald-500 to-teal-500",
    highlights: [
      "Pharmaceutical R&D partnerships",
      "Cosmeceutical formulation transfer",
      "Regulatory compliance support",
      "Quality assurance frameworks",
    ],
  },
  {
    key: "manufacturing",
    Icon: Factory,
    gradient: "from-orange-500 to-amber-500",
    highlights: [
      "Contract manufacturing setup",
      "Licensed production agreements",
      "Private-label development",
      "Supply chain optimization",
    ],
  },
  {
    key: "brand",
    Icon: Palette,
    gradient: "from-purple-500 to-pink-500",
    highlights: [
      "Brand strategy & positioning",
      "Product concept development",
      "Market entry planning",
      "Brand portfolio management",
    ],
  },
  {
    key: "trade",
    Icon: Ship,
    gradient: "from-primary to-primary-light",
    highlights: [
      "Pharmaceuticals & cosmetics",
      "Agricultural products",
      "Food & consumer products",
      "Trade compliance & logistics",
    ],
  },
] as const;

export default function ServicesPage() {
  const t = useTranslations("services");

  return (
    <>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-radial-glow" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag={t("sectionTag")}
            title={t("title")}
            highlight={t("titleHighlight")}
            subtitle={t("subtitle")}
          />
        </div>
      </section>

      <section className="relative pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map(({ key, Icon, gradient, highlights }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-8 lg:p-10 group"
            >
              <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-20 flex items-center justify-center`}
                    >
                      <Icon size={26} className="text-white" />
                    </div>
                    <span className="text-text-muted text-sm font-mono">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-3">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {t(`items.${key}.description`)}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {highlights.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-3 p-3 rounded-lg bg-surface group-hover:bg-surface-hover transition-colors"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-primary-light shrink-0"
                      />
                      <span className="text-sm text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
