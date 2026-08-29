"use client";

import React from "react";
import { TESTIMONIALS } from "@/data/portfolio-data";
import { TestimonialItem } from "@/types";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-slate-950 relative border-t border-slate-900">
      <Container>
        <SectionHeading
          badge="Endorsements &amp; Trust"
          title="Client &amp; Colleague Feedback"
          subtitle="Real testimonials from engineering leads, agency directors, and enterprise clients who have worked directly with Abhishek."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {TESTIMONIALS.map((item: TestimonialItem) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/20"
            >
              <div className="space-y-4">
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700" />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xs tracking-wider shadow-sm">
                  {item.avatarText}
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{item.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xs text-slate-400">
                    {item.role} • {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
