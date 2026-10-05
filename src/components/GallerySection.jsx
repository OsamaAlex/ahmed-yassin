"use client";

import { useState } from "react";
import { ZoomIn, Filter } from "lucide-react";
import { galleryItems } from "@/data/galleryData";

export default function GallerySection({ t, lang, onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filterTabs = [
    { id: "all", label: t.filterAll },
    { id: "crisis", label: t.filterCrisis },
    { id: "storms", label: t.filterStorms },
    { id: "training", label: t.filterTraining },
    { id: "fleet", label: t.filterFleet },
    { id: "profile", label: t.filterProfile },
    { id: "projects", label: t.filterProjects },
    { id: "mba", label: t.filterMba },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-14 sm:py-20 border-b border-slate-200 dark:border-brand-darkBorder bg-slate-100/60 dark:bg-brand-darkCard/20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-gold uppercase tracking-wider font-en">
            {t.galSub}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            {t.galTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-2">
            {t.galDesc}
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-brand-gold text-white shadow-md shadow-brand-gold/20 scale-102"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-brand-gold border border-slate-200 dark:border-slate-700"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="theme-card rounded-2xl overflow-hidden group cursor-pointer flex flex-col justify-between"
              onClick={() =>
                onOpenLightbox(
                  item.image,
                  lang === "ar" ? item.captionAr : item.captionEn,
                  lang === "ar" ? item.titleAr : item.titleEn
                )
              }
            >
              <div>
                <div className="h-56 relative overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={lang === "ar" ? item.titleAr : item.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>

                  {/* Category Pill */}
                  <span
                    className={`absolute top-3 right-3 px-2.5 py-0.5 rounded-md text-[10px] font-bold shadow-md ${item.tagColor}`}
                  >
                    {lang === "ar" ? item.tagAr : item.tagEn}
                  </span>

                  {/* Zoom hint icon */}
                  <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-black/50 text-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-brand-gold" />
                  </div>

                  {/* Overlay Title on Image */}
                  <div className="absolute bottom-3 right-3 left-3 text-xs">
                    <p className="text-white font-bold leading-snug line-clamp-2">
                      {lang === "ar" ? item.titleAr : item.titleEn}
                    </p>
                  </div>
                </div>

                {/* Subtitle / Caption snippet under image */}
                <div className="p-3.5">
                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed text-justify line-clamp-2">
                    {lang === "ar" ? item.captionAr : item.captionEn}
                  </p>
                </div>
              </div>

              <div className="px-3.5 pb-3 pt-1 border-t border-slate-100 dark:border-slate-800 text-[10px] text-brand-gold dark:text-amber-400 font-bold flex items-center justify-between">
                <span>{t.zoom}</span>
                <span>★</span>
              </div>
            </div>
          ))}
        </div>

        {/* Counter footer */}
        <div className="text-center mt-8 text-xs text-slate-500 dark:text-slate-300 font-medium">
          <span>{filteredItems.length} {t.itemsCount}</span>
        </div>

      </div>
    </section>
  );
}
