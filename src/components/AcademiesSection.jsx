import {
  Crown,
  ShieldCheck,
  Shield,
  Award,
  Briefcase,
  Radio,
  Cpu,
  Building2,
  Anchor,
  Scale,
  BarChart3
} from "lucide-react";

const ICON_MAP = {
  crown: Crown,
  shieldCheck: ShieldCheck,
  shield: Shield,
  award: Award,
  briefcase: Briefcase,
  radio: Radio,
  cpu: Cpu,
  building: Building2,
  anchor: Anchor,
  scale: Scale,
  barChart: BarChart3
};

const THEME_MAP = {
  red: {
    iconColor: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-500/10 dark:bg-red-500/20",
    borderColor: "rtl:border-r-red-500 ltr:border-l-red-500",
  },
  gold: {
    iconColor: "text-brand-gold dark:text-amber-400",
    bgColor: "bg-brand-gold/10 dark:bg-amber-500/20",
    borderColor: "rtl:border-r-brand-gold ltr:border-l-brand-gold dark:rtl:border-r-amber-400 dark:ltr:border-l-amber-400",
  },
  blue: {
    iconColor: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
    borderColor: "rtl:border-r-blue-500 ltr:border-l-blue-500",
  },
  indigo: {
    iconColor: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-500/10 dark:bg-indigo-500/20",
    borderColor: "rtl:border-r-indigo-500 ltr:border-l-indigo-500",
  },
  emerald: {
    iconColor: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-500/10 dark:bg-emerald-500/20",
    borderColor: "rtl:border-r-emerald-500 ltr:border-l-emerald-500",
  },
  purple: {
    iconColor: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
    borderColor: "rtl:border-r-purple-500 ltr:border-l-purple-500",
  },
  cyan: {
    iconColor: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-500/10 dark:bg-cyan-500/20",
    borderColor: "rtl:border-r-cyan-500 ltr:border-l-cyan-500",
  },
  teal: {
    iconColor: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-500/10 dark:bg-teal-500/20",
    borderColor: "rtl:border-r-teal-500 ltr:border-l-teal-500",
  },
  amber: {
    iconColor: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-500/10 dark:bg-amber-500/20",
    borderColor: "rtl:border-r-amber-500 ltr:border-l-amber-500",
  },
};

export default function AcademiesSection({ t }) {
  const programs = t.programsList || [];

  return (
    <section id="training" className="py-14 sm:py-20 border-b border-slate-200 dark:border-brand-darkBorder transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-brand-gold uppercase tracking-wider font-en">
            {t.trainSub}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            {t.trainTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-2">
            {t.trainDesc}
          </p>
        </div>

        {/* Programs Grid: Render all 11 programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((prog, idx) => {
            const Icon = ICON_MAP[prog.iconName] || Award;
            const theme = THEME_MAP[prog.theme] || THEME_MAP.gold;

            return (
              <div
                key={prog.id || idx}
                className={`theme-card p-5 rounded-2xl rtl:border-r-4 ltr:border-l-4 ${theme.borderColor} flex flex-col justify-between group hover:border-brand-gold/60 transition-all duration-300`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold ${theme.bgColor} ${theme.iconColor}`}>
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${prog.badgeColor}`}>
                      {prog.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                    {prog.title}
                  </h3>

                  <p className={`font-semibold text-xs mb-2 ${theme.iconColor}`}>
                    {prog.org}
                  </p>

                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed text-justify">
                    {prog.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 font-medium font-en">
                  {prog.footer}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
