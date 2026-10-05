"use client";

import { Phone, Mail, Download, MessageSquare, Send } from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";

export default function ContactSection({ t }) {

  return (
    <section id="contact" className="py-14 sm:py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="theme-card p-6 sm:p-10 lg:p-12 rounded-3xl border border-brand-gold/40 shadow-2xl relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="w-12 h-12 rounded-2xl bg-brand-gold/15 text-brand-gold inline-flex items-center justify-center mb-3">
              <Send className="w-6 h-6" />
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {t.contactTitle}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-2 text-justify sm:text-center">
              {t.contactDesc}
            </p>
          </div>

          {/* 3 Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            
            {/* Mobile Phone */}
            <a
              href="tel:+201015195685"
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-brand-gold transition-all block group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 text-brand-gold mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-300 font-semibold">{t.cPhone}</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-1 font-en" dir="ltr">
                +20 101 519 5685
              </p>
            </a>

            {/* Official Email */}
            <a
              href="mailto:ahmedabdelmoneamyassin@gmail.com"
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-brand-gold transition-all block group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-300 font-semibold">{t.cEmail}</p>
              <p className="text-xs font-bold text-slate-900 dark:text-white mt-1 font-en truncate">
                ahmedabdelmoneamyassin@gmail.com
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ahmed-yassin-governance"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-brand-gold transition-all block group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-300 font-semibold">{t.cLinkedin}</p>
              <p className="text-xs font-bold text-slate-900 dark:text-white mt-1 font-en truncate">
                in/ahmed-yassin-governance
              </p>
            </a>

          </div>

          {/* Action Buttons: Print CV & WhatsApp */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
            <a
              href="/mycv/cvats.pdf"
              download="cvats.pdf"
              className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-brand-gold text-slate-800 dark:text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <Download className="w-4 h-4 text-brand-gold dark:text-amber-400" />
              <span>{t.printCvFull}</span>
            </a>

            <a
              href="https://wa.me/201015195685"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-emerald-600/20 transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.waContact}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
