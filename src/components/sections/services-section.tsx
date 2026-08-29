"use client";

import React from "react";
import { SERVICES } from "@/data/portfolio-data";
import { ServiceItem } from "@/types";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { useLeadPopup } from "@/context/lead-popup-context";
import {
  Zap,
  Globe,
  Layers,
  Bot,
  CheckCircle2,
  ArrowRight,
  Gauge,
  ShieldCheck,
  Search,
  FileSpreadsheet,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Zap,
  Globe,
  Layers,
  Bot,
  Gauge,
  ShieldCheck,
  Search,
  FileSpreadsheet,
};

export const ServicesSection: React.FC = () => {
  const { openLeadPopup } = useLeadPopup();

  return (
    <section id="services" className="py-12 md:py-16 bg-slate-950/90 relative border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <Container>
        <SectionHeading
          badge="End-to-End Solutions"
          title="Professional Web Services &amp; AMC"
          subtitle="Comprehensive web engineering services spanning custom WordPress development, Next.js web applications, landing pages, Core Web Vitals optimization, and ongoing maintenance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {SERVICES.map((service: ServiceItem) => {
            const Icon = ICON_MAP[service.iconName] || Globe;

            return (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/20"
              >
                <div className="space-y-4">
                  {/* Service Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center text-secondary group-hover:bg-primary/20 group-hover:text-orange-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    {service.badge && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded-full border border-orange-500/20">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-400">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Includes:
                    </div>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-slate-300 flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack & Action Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1">
                    {service.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => openLeadPopup(service.title)}
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-secondary hover:text-white px-3 py-2.5 rounded-xl border border-slate-700 transition-all w-full text-center cursor-pointer"
                  >
                    <span>Inquire Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
