"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedCard from "@/components/ui/AnimatedCard";
import CTASection from "@/components/sections/CTASection";
import {
  Eye,
  Target,
  Shield,
  Gem,
  Lightbulb,
  Handshake,
  Leaf,
} from "lucide-react";

const values = [
  { key: "integrity", Icon: Shield },
  { key: "quality", Icon: Gem },
  { key: "innovation", Icon: Lightbulb },
  { key: "partnership", Icon: Handshake },
  { key: "sustainable", Icon: Leaf },
] as const;

export default function AboutPage() {
  const t = useTranslations("about");

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
          />

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-text-secondary text-lg leading-relaxed text-center"
            >
              {t("description")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-secondary text-lg leading-relaxed text-center"
            >
              {t("description2")}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 lg:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye size={26} className="text-primary-light" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                {t("vision.title")}
              </h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                {t("vision.text")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 lg:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Target size={26} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                {t("mission.title")}
              </h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                {t("mission.text")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-radial-glow opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag={t("sectionTag")}
            title=""
            highlight={t("values.title")}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ key, Icon }, i) => (
              <AnimatedCard
                key={key}
                index={i}
                className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-primary-light" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2">
                      {t(`values.${key}.title`)}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {t(`values.${key}.text`)}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
