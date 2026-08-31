"use client";

import React, { useRef } from "react";
import { useLeadPopup } from "@/context/lead-popup-context";
import { ContactForm } from "@/components/forms/contact-form";
import { X } from "lucide-react";

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
        className="relative w-full max-w-[420px] max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-800 p-5 sm:p-6 shadow-2xl shadow-black/80 text-white animate-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-800">
          <h3
            id="lead-popup-title"
            className="text-xl font-bold text-white tracking-tight"
          >
            Get in Touch
          </h3>
          <button
            onClick={closeLeadPopup}
            aria-label="Close modal"
            className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Compact Lead Form */}
        <ContactForm
          isModal={true}
          defaultService={selectedService}
          onSuccess={closeLeadPopup}
        />
      </div>
    </div>
  );
};
