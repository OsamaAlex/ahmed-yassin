"use client";

import { ArrowUp } from "lucide-react";

export default function Footer({ t }) {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-slate-200 dark:border-brand-darkBorder py-8 bg-white dark:bg-brand-darkBg transition-colors no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 dark:text-slate-300 gap-4">
        <div className="flex items-center gap-2">
          <span className="text-brand-gold dark:text-amber-400 font-bold">{t.footerName}</span>
          <span>•</span>
          <span>{t.footerRights}</span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="font-en text-slate-500 dark:text-slate-300 text-center sm:text-start">
            {t.footerTitle}
          </span>

          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-brand-gold dark:hover:text-amber-400 hover:border-brand-gold dark:hover:border-amber-400 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-90"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
