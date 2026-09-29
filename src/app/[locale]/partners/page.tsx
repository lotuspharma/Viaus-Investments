"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedCard from "@/components/ui/AnimatedCard";
import CTASection from "@/components/sections/CTASection";
import {
  Building2,
  FlaskConical,
  Factory,
  Store,
  Truck,
  Landmark,
  Quote,
  ArrowRight,
} from "lucide-react";

const partnerTypes = [
  { icon: FlaskConical, title: "Pharmaceutical Companies", description: "R&D and manufacturing partners in Australia" },
  { icon: Factory, title: "Manufacturers", description: "Contract manufacturing and OEM partners" },
  { icon: Building2, title: "Brand Owners", description: "Brand development and licensing partners" },
  { icon: Store, title: "Distributors", description: "Distribution networks in Vietnam" },
  { icon: Truck, title: "Logistics Partners", description: "Import-export and supply chain partners" },
  { icon: Landmark, title: "Government & Industry", description: "Trade associations and regulatory bodies" },
];

const testimonials = [
  {
    quote: "VIAUS has been instrumental in helping us navigate the Vietnamese market. Their deep understanding of both cultures and business environments is unmatched.",
    author: "Partner Representative",
    role: "Australian Pharmaceutical Company",
  },
  {
    quote: "Working with VIAUS gave us confidence to explore cross-border opportunities we never thought possible. Their network and expertise are truly valuable.",
    author: "Business Director",
    role: "Vietnamese Distribution Partner",
  },
  {
    quote: "The team at VIAUS brings a unique combination of investment acumen and market knowledge that bridges the gap between our two countries perfectly.",
    author: "CEO",
    role: "Technology Transfer Partner",
  },
];

export default function PartnersPage() {
  const t = useTranslations("partners");

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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerTypes.map((partner, i) => (
              <AnimatedCard key={i} index={i}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <partner.icon size={22} className="text-primary-light" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-text-primary mb-1">
                      {partner.title}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-text-primary">
              What Our Partners Say
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card p-8 flex flex-col"
              >
                <Quote size={32} className="text-primary/30 mb-4" />
                <p className="text-text-secondary leading-relaxed flex-1 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-text-primary font-semibold text-sm">
                    {item.author}
                  </p>
                  <p className="text-text-muted text-xs mt-1">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 lg:p-16"
          >
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Interested in Partnering with VIAUS?
            </h3>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
              We&apos;re always looking for new partners who share our vision of
              connecting Australia and Vietnam through quality business
              opportunities.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 text-lg group"
            >
              {t("cta")}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
