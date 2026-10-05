import {
  Hammer,
  AlertTriangle,
  Radio,
  Users,
  BarChart3,
  Cpu,
  Coins,
  Scale,
  Check
} from "lucide-react";

const ICON_MAP = {
  hammer: Hammer,
  alertTriangle: AlertTriangle,
  radio: Radio,
  users: Users,
  barChart: BarChart3,
  cpu: Cpu,
  coins: Coins,
  scale: Scale
};

const THEME_STYLES = {
  amber: {
    iconColor: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-100 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/30",
  },
  red: {
    iconColor: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-100 dark:bg-red-500/10 border-red-200 dark:border-red-500/30",
  },
  purple: {
    iconColor: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/30",
  },
  emerald: {
    iconColor: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-100 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30",
  },
  blue: {
    iconColor: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30",
  },
  indigo: {
    iconColor: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-100 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/30",
  },
  teal: {
    iconColor: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-100 dark:bg-teal-500/10 border-teal-200 dark:border-teal-500/30",
  }
};

export default function PillarsSection({ t }) {
  const pillarsList = t.pillarsList || [];

  return (
    <section id="pillars" className="py-14 sm:py-20 border-b border-slate-200 dark:border-brand-darkBorder transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-gold dark:text-amber-400 uppercase tracking-wider font-en">
            {t.pillarsSub}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            {t.pillarsTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-2">
            {t.pillarsDesc}
          </p>
        </div>

        {/* 8 Pillars Grid (4 cols on lg, 2 cols on md, 1 on sm) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillarsList.map((p, idx) => {
            const Icon = ICON_MAP[p.iconName] || BarChart3;
            const theme = THEME_STYLES[p.theme] || THEME_STYLES.amber;

            return (
              <div
                key={p.id || idx}
                className="theme-card p-5 rounded-2xl flex flex-col justify-between group hover:border-brand-gold/60 transition-all duration-300"
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${theme.bgColor} ${theme.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-200 text-xs leading-relaxed text-justified mb-4">
                    {p.desc}
                  </p>
                </div>
                
                {p.bullets && p.bullets.length > 0 && (
                  <ul className="text-[11px] text-slate-600 dark:text-slate-300 space-y-2 border-t border-slate-100 dark:border-slate-800 pt-3">
                    {p.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
