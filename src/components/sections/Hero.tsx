"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Globe2, Building2, Users } from "lucide-react";

const statsIcons = [TrendingUp, Globe2, Building2, Users];
const statsKeys = ["established", "markets", "sectors", "partnerships"] as const;

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold text-primary-light tracking-wider uppercase">
                {t("tagline")}
              </span>
            </motion.span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-text-primary">{t("title")}</span>
              <br />
              <span className="gradient-text-gold">{t("titleHighlight")}</span>
            </h1>

            <p className="text-text-secondary text-lg lg:text-xl leading-relaxed max-w-xl">
              {t("subtitle")}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="btn-primary text-base flex items-center gap-2 group"
              >
                {t("cta")}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link href="/about" className="btn-outline text-base">
                {t("ctaSecondary")}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80 xl:w-96 xl:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 animate-pulse-glow" />
              <div className="absolute inset-4 rounded-full glass border border-border-light flex items-center justify-center">
                <div className="relative w-48 h-48 xl:w-56 xl:h-56 animate-float">
                  <Image
                    src="/images/logo-viaus.png"
                    alt="VIAUS INVESTMENTS"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-accent" />
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary-light" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {statsKeys.map((key, i) => {
            const Icon = statsIcons[i];
            return (
              <div
                key={key}
                className="glass-card p-5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon size={22} className="text-primary-light" />
                </div>
                <span className="text-sm font-semibold text-text-primary">
                  {t(`stats.${key}`)}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
