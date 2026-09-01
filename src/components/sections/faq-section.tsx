"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/portfolio-data";
import { FAQItem } from "@/types";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useLeadPopup } from "@/context/lead-popup-context";
import { cn } from "@/lib/utils";

export const FAQSection: React.FC = () => {
  const { openLeadPopup } = useLeadPopup();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-16 bg-slate-950/90 relative border-t border-slate-900">
      <Container>
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Questions &amp; Answers"
          subtitle="Clear answers about Abhishek Panchgalle's experience, technical capabilities, engineering methodology, and engagement models for full-time roles and freelance projects."
        />

        <div className="max-w-3xl mx-auto mt-12 space-y-4">
          {FAQS.map((faq: FAQItem, idx: number) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={cn(
                  "rounded-2xl border transition-all duration-200 overflow-hidden",
                  isOpen
                    ? "bg-slate-900 border-secondary/40 shadow-lg shadow-black/30"
                    : "bg-slate-900/40 hover:bg-slate-900/80 border-slate-800"
                )}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-slate-800 text-secondary text-xs font-bold flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200",
                      isOpen && "rotate-180 text-secondary"
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 mt-1">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Let's Talk CTA */}
        <div className="mt-10 text-center flex flex-col items-center justify-center">
          <p className="text-xs text-slate-400 mb-3">
            Have an unlisted question about a role or upcoming project?
          </p>
          <button
            onClick={() => openLeadPopup("Other")}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs sm:text-sm font-semibold text-white transition-all cursor-pointer shadow-md"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-3.5 h-3.5 text-secondary" />
          </button>
        </div>
      </Container>
    </section>
  );
};
