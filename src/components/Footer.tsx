"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Globe,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const contact = useTranslations("contact");
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary border-t border-border">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/30">
                <Image
                  src="/images/logo-viaus.png"
                  alt="VIAUS INVESTMENTS"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xl font-bold text-text-primary tracking-wide">
                  VIAUS
                </p>
                <p className="text-[10px] text-text-secondary tracking-[0.2em] uppercase">
                  Investments
                </p>
              </div>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed">
              {t("description")}
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg glass-light flex items-center justify-center text-text-muted hover:text-primary-light hover:border-primary/30 transition-all"
              >
                <Globe size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg glass-light flex items-center justify-center text-text-muted hover:text-primary-light hover:border-primary/30 transition-all"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-text-primary font-semibold mb-6">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-3">
              {(["about", "services", "partners", "blog", "contact"] as const).map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item}`}
                      className="text-text-secondary hover:text-primary-light text-sm transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight
                        size={14}
                        className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200"
                      />
                      {nav(item)}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-semibold mb-6">
              {t("contact")}
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-text-secondary">
                <MapPin size={18} className="text-primary-light shrink-0 mt-0.5" />
                <span>{contact("info.address")}</span>
              </li>
              <li className="flex gap-3 text-sm text-text-secondary">
                <Phone size={18} className="text-primary-light shrink-0" />
                <a
                  href="tel:+61420781188"
                  className="hover:text-primary-light transition-colors"
                >
                  {contact("info.phone")}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-text-secondary">
                <Mail size={18} className="text-primary-light shrink-0" />
                <a
                  href="mailto:viaus.investments@gmail.com"
                  className="hover:text-primary-light transition-colors"
                >
                  {contact("info.email")}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-text-secondary">
                <Clock size={18} className="text-primary-light shrink-0" />
                <span>{contact("info.hours")}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-semibold mb-6">
              {t("newsletter.title")}
            </h4>
            <p className="text-text-secondary text-sm mb-4">
              {t("newsletter.subtitle")}
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              />
              <button
                type="submit"
                className="w-full btn-primary text-sm !py-3 flex items-center justify-center gap-2"
              >
                {t("newsletter.subscribe")}
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="py-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            {t("copyright", { year: year.toString() })}
          </p>
          <p className="text-text-muted text-xs">{t("abn")}</p>
        </div>
      </div>
    </footer>
  );
}
