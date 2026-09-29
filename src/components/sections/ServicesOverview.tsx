"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedCard from "@/components/ui/AnimatedCard";
import {
  TrendingUp,
  FlaskConical,
  Factory,
  Palette,
  Ship,
  ArrowRight,
} from "lucide-react";

const services = [
  { key: "investment", Icon: TrendingUp, color: "from-blue-500/20 to-cyan-500/10" },
  { key: "pharma", Icon: FlaskConical, color: "from-emerald-500/20 to-teal-500/10" },
  { key: "manufacturing", Icon: Factory, color: "from-orange-500/20 to-amber-500/10" },
  { key: "brand", Icon: Palette, color: "from-purple-500/20 to-pink-500/10" },
  { key: "trade", Icon: Ship, color: "from-primary/20 to-primary-light/10" },
] as const;

export default function ServicesOverview() {
  const t = useTranslations("services");

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag={t("sectionTag")}
          title={t("title")}
          highlight={t("titleHighlight")}
          subtitle={t("subtitle")}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ key, Icon, color }, i) => (
            <AnimatedCard
              key={key}
              index={i}
              className={`group ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon size={24} className="text-primary-light" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                {t(`items.${key}.title`)}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {t(`items.${key}.description`)}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-light group-hover:gap-2 transition-all">
                0{i + 1}
              </span>
            </AnimatedCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="btn-outline inline-flex items-center gap-2 group"
          >
            View All Services
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
