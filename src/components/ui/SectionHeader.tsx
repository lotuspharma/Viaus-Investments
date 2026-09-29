"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  title: string;
  highlight: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({
  tag,
  title,
  highlight,
  subtitle,
  center = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${center ? "text-center" : ""}`}
    >
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary-light border border-primary/20 mb-6">
        {tag}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
        {title}{" "}
        <span className="gradient-text">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
