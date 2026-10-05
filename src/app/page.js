"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import KpiSection from "@/components/KpiSection";
import PillarsSection from "@/components/PillarsSection";
import TimelineSection from "@/components/TimelineSection";
import MegaprojectsSection from "@/components/MegaprojectsSection";
import AcademiesSection from "@/components/AcademiesSection";
import CredentialsSection from "@/components/CredentialsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LightboxModal from "@/components/LightboxModal";
import { translations } from "@/data/translations";

export default function Home() {
  const [lang, setLang] = useState("ar");
  const [isDark, setIsDark] = useState(false);
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    image: null,
    title: "",
    caption: "",
  });

  // Initialize preferences from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("ay_lang");
    if (savedLang === "en" || savedLang === "ar") {
      setLang(savedLang);
    }

    const savedTheme = localStorage.getItem("ay_theme");
    if (savedTheme === "dark") {
      setIsDark(true);
    }
  }, []);

  // Update HTML tag attributes on state changes
  useEffect(() => {
    localStorage.setItem("ay_lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("ay_theme", isDark ? "dark" : "light");
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const t = translations[lang] || translations.ar;

  const openLightbox = (image, caption = "", title = "") => {
    setLightbox({
      isOpen: true,
      image,
      caption,
      title,
    });
  };

  const closeLightbox = () => {
    setLightbox({
      isOpen: false,
      image: null,
      caption: "",
      title: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 dark:bg-brand-darkBg dark:text-slate-100 transition-colors">
      <Header
        lang={lang}
        setLang={setLang}
        isDark={isDark}
        setIsDark={setIsDark}
        t={t}
      />

      <main className="pt-0 flex-1">
        <Hero t={t} lang={lang} />
        <KpiSection t={t} />
        <PillarsSection t={t} />
        <TimelineSection t={t} />
        <MegaprojectsSection t={t} onOpenLightbox={openLightbox} />
        <AcademiesSection t={t} />
        <CredentialsSection t={t} onOpenLightbox={openLightbox} />
        <GallerySection t={t} lang={lang} onOpenLightbox={openLightbox} />
        <ContactSection t={t} />
      </main>

      <Footer t={t} />

      <LightboxModal
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        image={lightbox.image}
        title={lightbox.title}
        caption={lightbox.caption}
      />
    </div>
  );
}
