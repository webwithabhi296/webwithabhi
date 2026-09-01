"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { STATS } from "@/data/portfolio-data";
import { Container } from "@/components/layout/container";
import { useLeadPopup } from "@/context/lead-popup-context";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  Gauge,
  Globe,
} from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const ROLES = [
  "WordPress Developer",
  "Next.js Engineer",
  "Core Web Vitals Specialist",
  "Landing Page Developer",
  "Website Maintenance (AMC)",
];

export const HeroSection: React.FC = () => {
  const { openLeadPopup } = useLeadPopup();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[85vh] pt-28 pb-12 md:pt-36 md:pb-16 flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background Decorative Gradients & Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(11,59,104,0.35),rgba(255,255,255,0))]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-secondary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-orange-600/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <FadeIn variant="fadeUp" className="lg:col-span-7 flex flex-col items-start text-left space-y-6 max-w-full">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-sm max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-300">
                Available for Full-time Roles, Freelance Projects &amp; AMC Retainers
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold text-secondary tracking-wide uppercase">
                Hello, I am {siteConfig.ownerName}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Delivering High-Performance{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-secondary to-amber-300">
                  WordPress &amp; Next.js
                </span>{" "}
                Websites.
              </h1>
            </div>

            {/* Dynamic Role Ticker */}
            <div className="h-9 flex items-center text-lg sm:text-xl md:text-2xl font-bold text-slate-300">
              <span className="mr-2 text-slate-400 font-normal">Expertise in:</span>
              <span className="text-white border-b-2 border-secondary pb-0.5 transition-all duration-300">
                {ROLES[roleIndex]}
              </span>
            </div>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              Proven track record in custom WordPress theme engineering, high-converting landing pages, Next.js web applications, and Core Web Vitals optimization to guarantee sub-second load times and high conversions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Primary CTA: Hire Me (opens popup) */}
              <button
                onClick={() => openLeadPopup("Full-Time Opportunity")}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-secondary via-orange-500 to-amber-500 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA: Discuss a Project (opens popup) */}
              <button
                onClick={() => openLeadPopup("Freelance Project")}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all duration-200 cursor-pointer"
              >
                <span>Discuss a Project</span>
              </button>

              <Link
                href="#projects"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <span>Explore Projects</span>
                <span className="text-secondary">&darr;</span>
              </Link>
            </div>

            {/* Direct Contact Snippets */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-900 w-full">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-1.5 hover:text-secondary transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-secondary" />
                <span>{siteConfig.email}</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-1.5 hover:text-secondary transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-secondary" />
                <span>+91 {siteConfig.phone}</span>
              </a>
              <span className="text-slate-700">•</span>
              <span>Pune, Maharashtra, India</span>
            </div>
          </FadeIn>

          {/* Right Column: Interactive Architecture Snapshot Card */}
          <FadeIn variant="fadeIn" delay={0.15} className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 p-6 shadow-2xl backdrop-blur-xl space-y-6">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-orange-400" />
                  <span>WordPress &amp; Next.js Focus</span>
                </div>
              </div>

              {/* Engineering Profile Snapshot */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">DEVELOPER:</span>
                  <span className="text-xs font-mono font-bold text-white">
                    Abhishek Panchgalle
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">EXPERTISE:</span>
                  <span className="text-xs font-mono text-secondary font-semibold">
                    WordPress • Next.js • Speed
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">SPECIALTY:</span>
                  <span className="text-xs font-mono text-slate-300">
                    Custom Themes • Lead Gen • AMC
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">LOCATION:</span>
                  <span className="text-xs font-mono text-slate-300">
                    Pune, India (IST / UTC+5:30)
                  </span>
                </div>
              </div>

              {/* Mini Stats Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-xl font-extrabold text-white">3+ Years</div>
                  <div className="text-[11px] text-slate-400">Professional Exp</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-xl font-extrabold text-orange-400">25+ Sites</div>
                  <div className="text-[11px] text-slate-400">Production Delivered</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-xl font-extrabold text-emerald-400">98+ Score</div>
                  <div className="text-[11px] text-slate-400">Core Web Vitals</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-xl font-extrabold text-sky-400">24h SLA</div>
                  <div className="text-[11px] text-slate-400">Maintenance &amp; Support</div>
                </div>
              </div>

              {/* Live Status Footer */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Clean &amp; Optimized Code
                </span>
                <span className="font-mono text-[10px] text-slate-500">
                  SEO &amp; Conversion Ready
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Metrics Bar */}
        <FadeIn variant="slideUp" delay={0.25} className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-slate-900">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex flex-col space-y-1"
            >
              <div className="text-2xl sm:text-3xl font-black text-white">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-secondary uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 leading-snug">
                {stat.description}
              </div>
            </div>
          ))}
        </FadeIn>
      </Container>
    </section>
  );
};
