"use client";

import React from "react";
import { PERFORMANCE_METRICS } from "@/data/portfolio-data";
import { PerformanceMetric } from "@/types";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { useLeadPopup } from "@/context/lead-popup-context";
import {
  TrendingUp,
  ArrowRight,
  Server,
  Layers,
  FileCode2,
  Gauge,
  Search,
  Smartphone,
  FileSpreadsheet,
  ShieldCheck,
} from "lucide-react";

export const PerformanceSection: React.FC = () => {
  const { openLeadPopup } = useLeadPopup();

  const PILLARS = [
    {
      title: "Core Web Vitals Tuning",
      icon: Gauge,
      description: "Sub-second LCP, minimal visual shift (CLS < 0.02), and low interaction latency.",
    },
    {
      title: "Google PageSpeed 95+",
      icon: TrendingUp,
      description: "Comprehensive audits eliminating render-blocking CSS/JS and unused code.",
    },
    {
      title: "WordPress Speed Optimization",
      icon: Server,
      description: "Asset debloating, WooCommerce speed tuning, and eliminating heavy page-builder overhead.",
    },
    {
      title: "Cache Optimization",
      icon: Layers,
      description: "Redis object caching, Varnish edge proxy, PHP opcode acceleration, and browser caching headers.",
    },
    {
      title: "Next-Gen Image Optimization",
      icon: FileCode2,
      description: "AVIF/WebP automated conversion, responsive srcset matrices, and lazy loading strategies.",
    },
    {
      title: "Technical SEO & Schema",
      icon: Search,
      description: "JSON-LD structured data, clean DOM hierarchy, XML sitemaps, and search bot crawlability.",
    },
    {
      title: "Mobile Optimization",
      icon: Smartphone,
      description: "Rigorous layout optimization across 320px to 768px viewports with zero horizontal overflow.",
    },
    {
      title: "Landing Page & Form Validation",
      icon: FileSpreadsheet,
      description: "Frictionless form conversion, real-time client & server validation, and CRM webhook routing.",
    },
    {
      title: "Comprehensive Performance Audits",
      icon: ShieldCheck,
      description: "Deep dive profiling of database slow queries, server response TTFB, and network waterfalls.",
    },
  ];

  return (
    <section
      id="performance"
      className="py-12 md:py-16 bg-slate-950/95 relative border-t border-slate-900 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/15 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <SectionHeading
          badge="Speed Engineering &amp; SEO"
          title="Website Performance &amp; SEO Optimization"
          subtitle="Measurable Core Web Vitals, 95+ Google PageSpeed guarantees, technical SEO, and conversion optimization that eliminate bounce rates and drive revenue."
        />

        {/* Real Case Study Banner: Before vs After */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-xl shadow-black/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-800/60 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Proven Real-World Case Study</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Client Platform Speed Transformation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                By eliminating render-blocking scripts, converting heavy assets to WebP/AVIF, configuring server-side Redis object caching, and optimizing MySQL database queries, client sites experienced drastic performance gains and elevated search rankings.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
              {/* Before */}
              <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/40 text-center space-y-1">
                <div className="text-xs font-semibold uppercase text-red-400">
                  Initial PageSpeed
                </div>
                <div className="text-3xl sm:text-4xl font-black text-red-400">
                  38/100
                </div>
                <div className="text-[11px] text-slate-400">
                  LCP 4.8s • TTFB 1.8s
                </div>
              </div>

              {/* After */}
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/60 text-center space-y-1">
                <div className="text-xs font-semibold uppercase text-emerald-400">
                  Optimized Result
                </div>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400">
                  98/100
                </div>
                <div className="text-[11px] text-slate-300 font-semibold">
                  LCP 0.9s • TTFB 160ms
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Web Vitals Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {PERFORMANCE_METRICS.map((item: PerformanceMetric, idx: number) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between space-y-4 shadow-lg shadow-black/20"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-base font-extrabold font-mono text-secondary">
                    {item.metric}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded-md border border-emerald-800/50">
                    Achieved: {item.achieved}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white">
                  {item.fullName}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-300">
                <span className="font-semibold text-sky-400 block mb-1">
                  Optimization technique:
                </span>
                <span className="text-slate-400 leading-snug block">
                  {item.optimizationTechnique}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Optimization Pillars Grid Covering All User Requirements */}
        <div className="mt-10">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
            Specialized Performance &amp; SEO Competencies
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3 hover:border-slate-700 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">{pillar.title}</h5>
                    <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-primary/20 via-slate-900 to-secondary/20 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">
              Is your website running slow or failing Google Core Web Vitals?
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Get an actionable speed, PageSpeed 95+, and technical SEO audit directly from Abhishek.
            </p>
          </div>
          <button
            onClick={() => openLeadPopup("Website Speed & Core Web Vitals Audit")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-white text-xs font-bold shadow-md shadow-secondary/20 hover:bg-orange-600 transition-all shrink-0 cursor-pointer"
          >
            <span>Request Speed Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </Container>
    </section>
  );
};
