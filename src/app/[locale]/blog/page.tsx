"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { blogPosts } from "@/lib/blog-data";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const categories = ["all", "market", "pharma", "trade", "technology"] as const;

export default function BlogPage() {
  const t = useTranslations("blog");
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
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

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "glass-light text-text-secondary hover:text-text-primary hover:bg-surface-hover"
              }`}
            >
              {t(`categories.${cat}`)}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card overflow-hidden group"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 to-primary-dark/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Tag size={40} className="text-primary/30" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-primary/80 text-white text-[10px] font-semibold uppercase tracking-wider">
                      {t(`categories.${post.category}`)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-text-muted text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString(
                        locale === "vi" ? "vi-VN" : "en-AU",
                        { year: "numeric", month: "short", day: "numeric" }
                      )}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-text-primary mb-3 line-clamp-2 group-hover:text-primary-light transition-colors">
                    {locale === "vi" ? post.titleVi : post.titleEn}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-3 mb-4">
                    {locale === "vi" ? post.excerptVi : post.excerptEn}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-light group-hover:gap-3 transition-all"
                  >
                    {t("readMore")}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
