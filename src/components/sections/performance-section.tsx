"use client";

import React from "react";
import Link from "next/link";
import { PERFORMANCE_METRICS } from "@/data/portfolio-data";
import { PerformanceMetric } from "@/types";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import {
  TrendingUp,
  ArrowRight,
  Server,
  Layers,
  FileCode2,
  Database,
} from "lucide-react";

export const PerformanceSection: React.FC = () => {
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
          badge="Core Web Vitals &amp; Speed Engineering"
          title="Website Performance Optimization"
          subtitle="Measurable speed improvements that elevate user experience, reduce bounce rates, and guarantee 95+ Google PageSpeed and Core Web Vitals scores."
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
                By eliminating render-blocking scripts, converting heavy assets to WebP/AVIF, configuring server-side Redis object caching, and optimizing MySQL database queries, client sites experienced drastic performance gains.
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
                  How it&apos;s optimized:
                </span>
                <span className="text-slate-400 leading-snug block">
                  {item.optimizationTechnique}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Optimization Pillars */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-secondary shrink-0 mt-0.5">
              <FileCode2 className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white">Asset Minification</h5>
              <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                Critical CSS inlining, JS bundle debloating, and script deferral.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-secondary shrink-0 mt-0.5">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white">Advanced Caching</h5>
              <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                Redis object cache, opcode caching, and CDN edge distribution.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-secondary shrink-0 mt-0.5">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white">Image Conversion</h5>
              <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                Next-gen WebP/AVIF formats with explicit responsive dimensions.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-secondary shrink-0 mt-0.5">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white">Database Indexing</h5>
              <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                MySQL query profiling, transient cleanup, and table optimization.
              </p>
            </div>
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-primary/20 via-slate-900 to-secondary/20 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">
              Is your website running slow or failing Core Web Vitals?
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Get a comprehensive speed and performance audit for your WordPress or Next.js website.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-white text-xs font-bold shadow-md shadow-secondary/20 hover:bg-orange-600 transition-all shrink-0"
          >
            <span>Request Speed Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
