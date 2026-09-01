"use client";

import React from "react";
import { Container } from "@/components/layout/container";
import { Award, Globe2, Code2, Briefcase } from "lucide-react";

export const TrustSection: React.FC = () => {
  const trustItems = [
    {
      icon: Award,
      title: "2.5+ Years Experience",
      subtitle: "Hands-on Web Engineering",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20",
    },
    {
      icon: Globe2,
      title: "50+ Websites Worked On",
      subtitle: "Production Client Platforms",
      color: "text-sky-400",
      bgColor: "bg-sky-500/10",
      borderColor: "border-sky-500/20",
    },
    {
      icon: Code2,
      title: "WordPress • Next.js • SEO",
      subtitle: "Core Technical Stack",
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
    },
    {
      icon: Briefcase,
      title: "Available for Work",
      subtitle: "Full-Time & Freelance",
      isLive: true,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
  ];

  return (
    <section className="relative py-6 sm:py-8 bg-slate-950 border-y border-slate-900/90 overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-200 shadow-sm"
              >
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${item.bgColor} ${item.borderColor} border flex items-center justify-center shrink-0 ${item.color}`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    {item.isLive && (
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                    )}
                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-400 truncate">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
