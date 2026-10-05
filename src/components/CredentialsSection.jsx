import { GraduationCap, Medal, Star, Shield, Trophy, Heart, ExternalLink } from "lucide-react";

export default function CredentialsSection({ t, onOpenLightbox }) {
  return (
    <section id="credentials" className="py-14 sm:py-20 border-b border-slate-200 dark:border-brand-darkBorder transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-brand-gold uppercase tracking-wider font-en">
            {t.credSub}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            {t.credTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-2">
            {t.credDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Column 1: Academic Degrees */}
          <div className="theme-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {t.degHeader}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-300 font-medium font-en">{t.degSub}</p>
                </div>
              </div>

              <div className="space-y-4">
                
                {/* MBA */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between text-brand-gold dark:text-amber-400 font-bold text-xs mb-1">
                    <span>{t.mbaTitle}</span>
                    <span className="font-en">{t.mbaDate}</span>
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">
                    {t.mbaUni}
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 text-xs mt-1.5 text-justified font-medium">
                    {t.mbaThesis}
                  </p>
                  {t.mbaSpec && (
                    <p className="text-slate-600 dark:text-slate-300 text-[11px] mt-1 text-justified">
                      {t.mbaSpec}
                    </p>
                  )}
                  
                  {/* Defense Photo preview badge */}
                  <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <button
                      onClick={() =>
                        onOpenLightbox(
                          "/images/mba/img_031.jpeg",
                          "مناقشة رسالة ماجستير إدارة الأعمال المهني (MBA) - أحمد عبد المنعم ياسين"
                        )
                      }
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-gold dark:text-amber-400 hover:underline cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>عرض وثيقة وصورة مناقشة الماجستير</span>
                    </button>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded">
                      درجة الامتياز
                    </span>
                  </div>
                </div>

                {/* LL.M */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between text-blue-600 dark:text-blue-400 font-bold text-xs mb-1">
                    <span>{t.llmTitle}</span>
                    <span className="font-en">{t.llmDate}</span>
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">
                    {t.llmUni}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-xs mt-1 text-justified">
                    {t.llmSpec || t.llmDesc}
                  </p>
                </div>

                {/* LL.B */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between text-slate-600 dark:text-slate-300 font-bold text-xs mb-1">
                    <span>{t.llbTitle}</span>
                    <span className="font-en">{t.llbDate}</span>
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">
                    {t.llbUni}
                  </p>
                  {t.llbSpec && (
                    <p className="text-slate-600 dark:text-slate-300 text-xs mt-1 text-justified">
                      {t.llbSpec}
                    </p>
                  )}
                </div>

              </div>
            </div>
          </div>

          {/* Column 2: Honors and Awards */}
          <div className="theme-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-500 flex items-center justify-center">
                  <Medal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {t.awardsHeader}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-300 font-medium font-en">{t.awardsSub}</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Governor Award */}
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <span>{t.aw1Title}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mt-1 text-xs text-justified">
                    {t.aw1Desc}
                  </p>
                </div>

                {/* Military Region Commendation */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                    <Shield className="w-4 h-4 text-blue-500" />
                    <span>{t.aw2Title}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mt-1 text-xs text-justified">
                    {t.aw2Desc}
                  </p>
                </div>

                {/* Egypt Excellence Award */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                    <Trophy className="w-4 h-4 text-emerald-500" />
                    <span>{t.aw3Title}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mt-1 text-xs text-justified">
                    {t.aw3Desc}
                  </p>
                </div>

                {/* Decent Life */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span>{t.aw4Title}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mt-1 text-xs text-justified">
                    {t.aw4Desc}
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
