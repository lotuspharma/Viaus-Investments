"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const t = useTranslations("portal.login");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative w-full max-w-md mx-auto px-4 py-32">
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
                  className="w-full pl-11 pr-4 py-3 bg-surface border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                  placeholder="you@company.com"
                />
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
                  className="w-full pl-11 pr-11 py-3 bg-surface border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
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

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-border bg-surface text-primary focus:ring-primary/30"
                />
                <span className="text-text-secondary text-xs">
                  {t("rememberMe")}
                </span>
              </label>
              <a
                href="#"
                className="text-xs text-primary-light hover:underline"
              >
                {t("forgotPassword")}
              </a>
            </div>

            <button
              type="submit"
              className="w-full btn-primary text-base !py-3.5 flex items-center justify-center gap-2"
            >
              {t("signIn")}
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="text-center text-text-muted text-sm mt-6">
            {t("noAccount")}{" "}
            <Link
              href="/portal/register"
              className="text-primary-light hover:underline font-medium"
            >
              {t("register")}
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
