"use client";

import { useState } from "react";
import Image from "next/image";
import { PhoneCall, Mail, MessageSquare, Star, ArrowLeftRight, CheckCircle2 } from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";
import { profileImages } from "@/data/galleryData";

export default function Hero({ t, lang }) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  const activePhoto = profileImages[selectedPhotoIndex] || profileImages[0];

  return (
    <section id="about" className="relative py-12 sm:py-16 lg:py-12 border-b border-slate-200 dark:border-brand-darkBorder overflow-hidden">
      {/* Subtle Decorative Background Glows */}
      <div className="absolute -top-32 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-brand-gold/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Text and Strategic Profile Data */}
          <div className="lg:col-span-7 flex flex-col space-y-6">

            {/* Live Status Operational Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white dark:bg-brand-darkCard border border-brand-gold/40 text-xs font-bold text-slate-800 dark:text-amber-300 shadow-sm self-start">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-radar"></span>
              <span>{t.heroBadge}</span>
            </div>

            {/* Name and Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                <span className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 font-semibold block mb-1">
                  {t.heroGreeting}
                </span>
                <span className="gold-gradient">{t.heroName}</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 dark:text-slate-200">
                {t.heroRole}
              </p>
              {t.heroDegrees && (
                <div className="flex flex-wrap items-center gap-2 pt-0.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 dark:bg-amber-500/20 text-brand-gold dark:text-amber-300 text-xs font-bold border border-brand-gold/30 dark:border-amber-500/40">
                    🎓 {t.heroDegrees}
                  </span>
                </div>
              )}
              <p className="text-xs sm:text-sm font-semibold text-brand-gold dark:text-amber-400 font-en">
                {t.heroRoleEn}
              </p>
            </div>

            {/* Executive Bio Paragraph */}
            <div className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
              <p className="text-justified">
                <span>{t.heroSummaryPart1 || t.heroSummary}</span>
                {!isBioExpanded && t.heroSummaryPart2 && (
                  <button
                    type="button"
                    onClick={() => setIsBioExpanded(true)}
                    className="inline-flex items-center font-bold text-brand-gold dark:text-amber-400 hover:text-brand-goldDark transition-all duration-200 mx-1.5 cursor-pointer underline underline-offset-4 hover:scale-105 active:scale-95"
                  >
                    {t.seeMore || "المزيد ..."}
                  </button>
                )}
              </p>

              {/* Smooth Collapsible Expansion with Dynamic Grid Rows */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${isBioExpanded
                  ? "grid-rows-[1fr] opacity-100 mt-2.5"
                  : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
                  }`}
              >
                <div className="overflow-hidden">
                  <p className="text-justified leading-relaxed">
                    {t.heroSummaryPart2}
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setIsBioExpanded(false)}
                      className="inline-flex items-center gap-1 font-bold text-brand-gold dark:text-amber-400 hover:text-brand-goldDark transition-all duration-200 cursor-pointer underline underline-offset-4 text-xs hover:scale-105 active:scale-95"
                    >
                      {t.seeLess || "عرض أقل"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Quick Competency Tags */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold shadow-xs">
                {t.tag1}
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold shadow-xs">
                {t.tag2}
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold shadow-xs">
                {t.tag3}
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold shadow-xs">
                {t.tag4}
              </span>
            </div>

            {/* Fast Contact Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="https://www.linkedin.com/in/ahmed-yassin-governance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all hover:scale-102 active:scale-98"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>{t.btnLinkedin}</span>
              </a>

              <a
                href="https://wa.me/201015195685"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition-all hover:scale-102 active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.btnWhatsapp}</span>
              </a>

              <a
                href="tel:+201015195685"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-brand-gold dark:border-amber-500/50 bg-white dark:bg-brand-darkCard text-slate-800 dark:text-white font-bold text-xs sm:text-sm shadow-xs hover:bg-brand-gold/10 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-brand-gold dark:text-amber-400" />
                <span dir="ltr" className="font-en">+20 101 519 5685</span>
              </a>

              <a
                href="mailto:ahmedabdelmoneamyassin@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 text-xs sm:text-sm hover:border-brand-gold transition-all"
              >
                <Mail className="w-4 h-4 text-slate-500 dark:text-slate-300" />
                <span>{t.btnEmail}</span>
              </a>
            </div>

          </div>

          {/* Executive Photo Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="max-w-md mx-auto">
              <div className="relative rounded-2xl p-1 bg-gradient-to-tr from-brand-gold via-slate-200 dark:via-slate-800 to-brand-goldDark shadow-2xl">
                <div className="rounded-xl overflow-hidden bg-white dark:bg-brand-darkCard">

                  {/* Top Banner of Photo Card */}
                  <div className="px-4 py-2.5 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>{t.photoCardHeader}</span>
                    </span>
                    <span className="text-brand-gold dark:text-amber-400 font-bold font-en text-[11px]">
                      {t.photoCardSub}
                    </span>
                  </div>

                  {/* Executive Photo Container */}
                  <div className="relative h-96 sm:h-[430px] overflow-hidden bg-slate-200 dark:bg-slate-950 group">
                    <img
                      src={activePhoto.src}
                      alt={t.photoCardName}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none"></div>

                    {/* Bottom floating badge on image */}
                    <div className="absolute bottom-3 right-3 left-3 bg-white/95 dark:bg-brand-navy/95 backdrop-blur-md p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs shadow-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white text-sm">{t.photoCardName}</p>
                          <p className="text-slate-500 dark:text-slate-300 text-[11px]">{t.photoCardRole}</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold">
                          <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Portrait switcher thumbnails */}
                  <div className="px-3 py-2 bg-slate-100/70 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] text-slate-600 dark:text-slate-300 font-semibold flex items-center gap-1">
                      <ArrowLeftRight className="w-3 h-3 text-brand-gold" />
                      {t.switchPhoto}:
                    </span>
                    <div className="flex items-center gap-1.5">
                      {profileImages.map((img, idx) => (
                        <button
                          key={img.src}
                          onClick={() => setSelectedPhotoIndex(idx)}
                          className={`relative w-8 h-8 rounded-md overflow-hidden border-2 transition-all ${selectedPhotoIndex === idx
                            ? "border-brand-gold scale-105 shadow-sm"
                            : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                          title={lang === "ar" ? img.titleAr : img.titleEn}
                        >
                          <img
                            src={img.src}
                            alt="portrait thumb"
                            className="w-full h-full object-cover object-top"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick Stats Bar Under Photo */}
                  <div className="p-3 grid grid-cols-2 gap-2 text-center text-xs bg-slate-50 dark:bg-slate-900/60">
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-xs">
                      <p className="text-slate-500 dark:text-slate-300 text-[11px] font-medium">{t.photoLoc1}</p>
                      <p className="font-bold text-slate-800 dark:text-white mt-0.5">{t.photoLocVal1}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-xs">
                      <p className="text-slate-500 dark:text-slate-300 text-[11px] font-medium">{t.photoLoc2}</p>
                      <p className="font-bold text-slate-800 dark:text-white mt-0.5">{t.photoLocVal2}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
