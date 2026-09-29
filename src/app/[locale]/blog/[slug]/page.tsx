"use client";

import { useParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/blog-data";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const locale = useLocale();
  const t = useTranslations("blog");

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="pt-32 pb-24 text-center">
        <h1 className="text-3xl font-bold text-text-primary mb-4">
          Article Not Found
        </h1>
        <Link href="/blog" className="btn-primary inline-block">
          {t("viewAll")}
        </Link>
      </section>
    );
  }

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-text-muted hover:text-primary-light transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            {t("viewAll")}
          </Link>

          <div className="mb-8">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary-light text-xs font-semibold mb-4">
              <Tag size={12} />
              {t(`categories.${post.category}`)}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              {locale === "vi" ? post.titleVi : post.titleEn}
            </h1>
            <div className="flex items-center gap-4 text-text-muted text-sm">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString(
                  locale === "vi" ? "vi-VN" : "en-AU",
                  { year: "numeric", month: "long", day: "numeric" }
                )}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
          </div>

          <div className="glass-card p-8 lg:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-text-secondary text-lg leading-relaxed">
                {locale === "vi" ? post.contentVi : post.contentEn}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
