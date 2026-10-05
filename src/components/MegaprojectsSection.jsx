import { ZoomIn } from "lucide-react";

export default function MegaprojectsSection({ t, onOpenLightbox }) {
  const cards = t.projectsList || [];

  return (
    <section id="megaprojects" className="py-14 sm:py-20 border-b border-slate-200 dark:border-brand-darkBorder bg-slate-100/60 dark:bg-brand-darkCard/20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider font-en">
              {t.projectsSub}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              {t.projectsTitle}
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-md mt-2 md:mt-0 text-justify">
            {t.projectsDesc}
          </p>
        </div>

        {/* Cards Grid: Render all projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, idx) => (
            <div key={idx} className="theme-card rounded-2xl overflow-hidden group flex flex-col justify-between hover:border-brand-gold/60 transition-all duration-300">
              <div>
                <div
                  className="h-52 relative overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => onOpenLightbox(c.image, c.caption)}
                >
                  <img
                    src={c.image}
                    alt={c.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <span className={`absolute top-3 right-3 px-3 py-1 rounded-lg text-xs font-bold shadow-md ${c.badgeColor}`}>
                    {c.badge}
                  </span>

                  {/* Zoom Hint */}
                  <div className="absolute bottom-2 left-2 text-white/90 text-[11px] flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                    <ZoomIn className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{t.zoom}</span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 text-justified">
                    {c.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-5 pb-5 pt-3 flex items-center justify-between text-xs text-brand-gold dark:text-amber-400 font-bold border-t border-slate-100 dark:border-slate-800">
                <span>{c.stat1}</span>
                <span>{c.stat2}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
