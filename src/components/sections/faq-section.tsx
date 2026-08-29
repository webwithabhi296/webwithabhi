"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/portfolio-data";
import { FAQItem } from "@/types";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-16 bg-slate-950/90 relative border-t border-slate-900">
      <Container>
        <SectionHeading
          badge="Knowledge Base &amp; AEO Matrix"
          title="Frequently Asked Questions"
          subtitle="Clear answers about Abhishek Panchgalle's background, technical specializations, engineering methodology, and project engagement models."
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
      </Container>
    </section>
  );
};
