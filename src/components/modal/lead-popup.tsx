"use client";

import React, { useRef } from "react";
import { useLeadPopup } from "@/context/lead-popup-context";
import { ContactForm } from "@/components/forms/contact-form";
import { X, Sparkles, ShieldCheck } from "lucide-react";

export const LeadPopup: React.FC = () => {
  const { isOpen, closeLeadPopup, selectedService } = useLeadPopup();
  const modalRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-popup-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        // Close on backdrop click
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
          closeLeadPopup();
        }
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-slate-900 border border-slate-800 p-5 sm:p-7 shadow-2xl shadow-black/80 text-white animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={closeLeadPopup}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge & Title */}
        <div className="pr-8 mb-5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[11px] font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3 text-secondary" />
            <span>Direct Inquiry • Abhishek Panchgalle</span>
          </div>

          <h3 id="lead-popup-title" className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Let&apos;s Build Something High-Performing.
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
            Need a custom WordPress build, Next.js app, speed tuning (95+ PageSpeed), or ongoing website AMC? Share your details below.
          </p>
        </div>

        {/* Shared Form */}
        <ContactForm
          isModal={true}
          defaultService={selectedService}
          onSuccess={closeLeadPopup}
        />

        {/* Footer Trust Markers */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% Privacy Protected</span>
          </div>
          <span>Pune, India • IST / UTC+5:30</span>
        </div>
      </div>
    </div>
  );
};
