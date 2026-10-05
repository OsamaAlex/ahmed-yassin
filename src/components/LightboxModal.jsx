"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export default function LightboxModal({ isOpen, onClose, image, title, caption }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"
          aria-label="Close Preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Container */}
        <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
          <img
            src={image}
            alt={title || "عرض تفصيلي"}
            className="max-h-[75vh] w-auto object-contain"
          />
        </div>

        {/* Caption Bar */}
        {(title || caption) && (
          <div className="p-4 bg-slate-900 border-t border-slate-800 text-center">
            {title && <p className="text-white font-bold text-sm sm:text-base">{title}</p>}
            {caption && (
              <p className="text-slate-200 text-xs sm:text-sm mt-1">{caption}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
