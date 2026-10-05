"use client";

import { useEffect, useState } from "react";

export default function KpiSection({ t }) {
  const [counts, setCounts] = useState({
    years: 0,
    pipelines: 0,
    accidents: 0,
    beneficiaries: 0,
    surveyors: 0,
  });

  useEffect(() => {
    // Run smooth counter animation
    const duration = 1200;
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);

      setCounts({
        years: Math.round(progress * 11),
        pipelines: Math.round(progress * 100),
        accidents: Math.round(progress * 70),
        beneficiaries: Math.round(progress * 7000),
        surveyors: Math.round(progress * 125),
      });

      if (progress >= 1) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-10 bg-white dark:bg-brand-darkCard/50 border-b border-slate-200 dark:border-brand-darkBorder transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-5">
          
          {/* KPI 1 */}
          <div className="theme-card p-4 sm:p-5 rounded-xl text-center border-t-4 border-t-brand-gold">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-en">
              +{counts.years}
            </span>
            <p className="text-xs font-bold text-brand-gold dark:text-amber-400 mt-1">
              {t.kpi1Title}
            </p>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 font-medium mt-0.5">
              {t.kpi1Sub}
            </p>
          </div>

          {/* KPI 2 */}
          <div className="theme-card p-4 sm:p-5 rounded-xl text-center border-t-4 border-t-emerald-500">
            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 font-en">
              {counts.pipelines}%
            </span>
            <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">
              {t.kpi2Title}
            </p>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 font-medium mt-0.5">
              {t.kpi2Sub}
            </p>
          </div>

          {/* KPI 3 */}
          <div className="theme-card p-4 sm:p-5 rounded-xl text-center border-t-4 border-t-blue-500">
            <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 font-en">
              -{counts.accidents}%
            </span>
            <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">
              {t.kpi3Title}
            </p>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 font-medium mt-0.5">
              {t.kpi3Sub}
            </p>
          </div>

          {/* KPI 4 */}
          <div className="theme-card p-4 sm:p-5 rounded-xl text-center border-t-4 border-t-amber-500">
            <span className="text-3xl sm:text-4xl font-extrabold text-amber-600 dark:text-amber-400 font-en">
              +{counts.beneficiaries.toLocaleString()}
            </span>
            <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">
              {t.kpi4Title}
            </p>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 font-medium mt-0.5">
              {t.kpi4Sub}
            </p>
          </div>

          {/* KPI 5 */}
          <div className="col-span-2 md:col-span-1 theme-card p-4 sm:p-5 rounded-xl text-center border-t-4 border-t-purple-500">
            <span className="text-3xl sm:text-4xl font-extrabold text-purple-600 dark:text-purple-400 font-en">
              {counts.surveyors}
            </span>
            <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">
              {t.kpi5Title}
            </p>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 font-medium mt-0.5">
              {t.kpi5Sub}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
