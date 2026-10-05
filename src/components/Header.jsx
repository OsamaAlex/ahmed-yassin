"use client";

import { useState } from "react";
import { Globe, Moon, Sun, Download, Send, Menu, X } from "lucide-react";

export default function Header({ lang, setLang, isDark, setIsDark, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === "ar" ? "en" : "ar");
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };


  const navLinks = [
    { href: "#about", label: t.navAbout },
    { href: "#pillars", label: t.navPillars },
    { href: "#experience", label: t.navExp },
    { href: "#megaprojects", label: t.navProjects },
    { href: "#training", label: t.navTraining },
    { href: "#credentials", label: t.navCredentials },
    { href: "#gallery", label: t.navGallery },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/85 dark:bg-brand-darkBg/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-brand-darkBorder/80 transition-colors no-print shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-3">
        
        {/* Brand Logo & Identity */}
        <a href="#about" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-goldDark via-brand-gold to-brand-goldLight p-0.5 shadow-md shadow-brand-gold/15 group-hover:scale-105 transition-transform shrink-0">
            <div className="w-full h-full bg-white dark:bg-brand-navy rounded-[9px] flex items-center justify-center">
              <span className="text-brand-gold font-bold text-base font-en">AY</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-900 dark:text-white font-extrabold text-sm sm:text-base leading-tight group-hover:text-brand-gold transition-colors whitespace-nowrap">
              {t.navName}
            </span>
            <span className="text-[10px] sm:text-[11px] text-brand-gold font-bold tracking-tight whitespace-nowrap">
              {t.navRoleHeader}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links — Floating Pill Bar */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 p-1 bg-slate-100/80 dark:bg-slate-900/70 rounded-full border border-slate-200/70 dark:border-slate-800/80 shadow-xs backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-brand-gold dark:hover:text-amber-400 hover:bg-white dark:hover:bg-brand-darkCard hover:shadow-xs transition-all duration-200 whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Utilities: Lang Switch, Dark/Light, Print & Contact CTA */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          
          {/* Language Switcher Pill */}
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:border-brand-gold dark:hover:border-amber-400 hover:text-brand-gold dark:hover:text-amber-400 text-xs font-bold transition-all flex items-center gap-1 shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
            title={lang === "ar" ? "Switch to English" : "التحويل إلى العربية"}
          >
            <Globe className="w-3.5 h-3.5 text-brand-gold dark:text-amber-400" />
            <span className="font-en text-[11px]">{lang === "ar" ? "EN" : "عربي"}</span>
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:border-brand-gold dark:hover:border-amber-400 transition-all shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>

          {/* Download CV Button */}
          <a
            href="/mycv/cvats.pdf"
            download="cvats.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 hover:border-brand-gold dark:hover:border-amber-400 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-all shadow-xs hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
            title={t.printCv}
          >
            <Download className="w-3.5 h-3.5 text-brand-gold dark:text-amber-400" />
            <span className="text-[11px]">{t.printCv}</span>
          </a>

          {/* Direct Contact CTA Pill */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-gold to-brand-goldDark text-white font-bold text-xs shadow-md shadow-brand-gold/20 hover:brightness-110 transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <Send className="w-3 h-3" />
            <span>{t.ctaContact}</span>
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-brand-gold active:scale-95 cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 border-t border-slate-200 dark:border-brand-darkBorder bg-white/95 dark:bg-brand-darkBg/95 backdrop-blur-xl animate-fadeIn">
          <nav className="flex flex-col space-y-1.5 text-sm font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60"></span>
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2 border-t border-slate-100 dark:border-slate-800 mt-2">
              <a
                href="/mycv/cvats.pdf"
                download="cvats.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-center flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Download className="w-4 h-4 text-brand-gold dark:text-amber-400" />
                <span>{t.printCvFull || t.printCv}</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl bg-gradient-to-r from-brand-gold to-brand-goldDark text-white font-bold text-center block shadow-md cursor-pointer active:scale-95"
              >
                {t.ctaContact}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
