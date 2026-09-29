"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { User, Mail, Lock, Phone, Building2, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const t = useTranslations("portal.register");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative w-full max-w-lg mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 lg:p-10"
        >
          <div className="text-center mb-8">
            <div className="relative w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-primary/30">
              <Image
                src="/images/logo-viaus.png"
                alt="VIAUS"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-text-primary">
              {t("title")}
            </h1>
            <p className="text-text-secondary text-sm mt-1">
              {t("subtitle")}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-text-secondary text-sm mb-2">
                  {t("firstName")}
                </label>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                  />
                  <input
                    type="text"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-surface border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-text-secondary text-sm mb-2">
                  {t("lastName")}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-text-secondary text-sm mb-2">
                {t("email")}
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                />
                <input
                  type="email"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-surface border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-text-secondary text-sm mb-2">
                  {t("phone")}
                </label>
                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                  />
                  <input
                    type="tel"
                    className="w-full pl-11 pr-4 py-3 bg-surface border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-text-secondary text-sm mb-2">
                  {t("company")}
                </label>
                <div className="relative">
                  <Building2
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                  />
                  <input
                    type="text"
                    className="w-full pl-11 pr-4 py-3 bg-surface border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-text-secondary text-sm mb-2">
                {t("password")}
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full pl-11 pr-11 py-3 bg-surface border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-text-secondary text-sm mb-2">
                {t("confirmPassword")}
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                />
                <input
                  type="password"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-surface border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                className="w-4 h-4 mt-0.5 rounded border-border bg-surface text-primary focus:ring-primary/30"
              />
              <span className="text-text-secondary text-xs leading-relaxed">
                {t("terms")}
              </span>
            </label>

            <button
              type="submit"
              className="w-full btn-primary text-base !py-3.5 flex items-center justify-center gap-2"
            >
              {t("register")}
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="text-center text-text-muted text-sm mt-6">
            {t("hasAccount")}{" "}
            <Link
              href="/portal/login"
              className="text-primary-light hover:underline font-medium"
            >
              {t("login")}
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
