"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2">
      <Globe size={16} className="text-text-muted" />
      <div className="flex items-center rounded-lg overflow-hidden border border-border">
        {routing.locales.map((loc) => (
          <button
            key={loc}
            onClick={() => switchLocale(loc)}
            className={`px-3 py-1.5 text-xs font-semibold uppercase transition-all duration-200 ${
              locale === loc
                ? "bg-primary text-white"
                : "text-text-muted hover:text-text-primary hover:bg-surface-hover"
            }`}
          >
            {loc === "en" ? "EN" : "VI"}
          </button>
        ))}
      </div>
    </div>
  );
}
