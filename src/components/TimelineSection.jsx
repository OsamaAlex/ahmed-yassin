export default function TimelineSection({ t }) {
  const roles = t.rolesList || [];

  return (
    <section id="experience" className="py-14 sm:py-20 border-b border-slate-200 dark:border-brand-darkBorder transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-brand-gold uppercase tracking-wider font-en">
            {t.expSub}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            {t.expTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-2">
            {t.expDesc}
          </p>
        </div>

        {/* Timeline Line */}
        <div className="relative border-r-2 rtl:border-r-2 rtl:border-l-0 ltr:border-l-2 ltr:border-r-0 border-brand-gold/40 rtl:mr-4 rtl:sm:mr-8 ltr:ml-4 ltr:sm:ml-8 space-y-10">
          {roles.map((role, idx) => (
            <div key={role.id || idx} className="relative rtl:pr-6 rtl:sm:pr-8 ltr:pl-6 ltr:sm:pl-8">
              {/* Node Bullet */}
              <div
                className={`absolute rtl:-right-[9px] ltr:-left-[9px] top-2 w-4 h-4 rounded-full ${role.nodeColor || "bg-brand-gold"} ring-4 ring-white dark:ring-brand-darkBg transition-transform hover:scale-125`}
              ></div>

              {/* Card */}
              <div className={`theme-card p-5 sm:p-7 rounded-2xl rtl:border-r-4 ltr:border-l-4 ${role.accentColor || "border-r-brand-gold"}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <span className={`px-2.5 py-0.5 rounded font-bold text-xs w-fit font-en ${role.dateBadge || "bg-brand-gold/10 text-brand-gold"}`}>
                    {role.date}
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-300 font-semibold">
                    {role.head}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                  {role.title}
                </h3>
                
                <p className="text-xs sm:text-sm font-semibold text-brand-gold dark:text-amber-400 mt-0.5 mb-4">
                  {role.org}
                </p>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {role.items && role.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="bg-slate-50/70 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-100 dark:border-slate-700/80">
                      <p className="font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold dark:bg-amber-400 shrink-0"></span>
                        <span>{item.subtitle}</span>
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm whitespace-pre-line leading-relaxed text-justified">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
