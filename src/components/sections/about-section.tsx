"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import {
  Code,
  Gauge,
  Sparkles,
  CheckCircle,
  MapPin,
  Briefcase,
  Globe,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const AboutSection: React.FC = () => {
  const philosophies = [
    {
      icon: Globe,
      title: "WordPress & CMS Expertise",
      description:
        "Extensive experience building custom themes from scratch with PHP, ACF Pro, and WooCommerce, prioritizing clean structure over bloated page builders.",
    },
    {
      icon: Gauge,
      title: "Core Web Vitals & Speed",
      description:
        "Sub-second load times and 95+ PageSpeed scores achieved through asset minification, image compression, database query debloating, and object caching.",
    },
    {
      icon: Code,
      title: "Modern Next.js Engineering",
      description:
        "Building modern web applications with Next.js 15/16 App Router, React 19, TypeScript, and Tailwind CSS v4 for dynamic SaaS and educational platforms.",
    },
    {
      icon: ShieldCheck,
      title: "Maintenance & AMC Care",
      description:
        "Proactive website monitoring, regular plugin and security updates, automated cloud backups, and fast bug resolution to guarantee zero downtime.",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-16 bg-slate-950/80 relative border-t border-slate-900">
      <Container>
        <SectionHeading
          badge="Professional Background"
          title="About Abhishek Panchgalle"
          subtitle="A results-driven web developer with strong WordPress expertise, growing Next.js capabilities, and a proven track record in performance optimization and website maintenance."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          {/* Left Column: Bio & Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Web Developer &amp; Optimization Specialist in Pune, India
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Operating under the brand <span className="text-secondary font-semibold">Web With Abhi</span>, I have spent the last 3+ years delivering real-world web development projects for corporate consulting firms, healthcare providers, education portals, and marketing agencies.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                My primary focus and strongest professional experience lies in <span className="text-white font-medium">Custom WordPress Development</span>—crafting bespoke themes, configuring plugins, engineering high-converting landing pages, and providing reliable Annual Maintenance Contract (AMC) support at <span className="text-white font-medium">BrandupX</span> and currently at <span className="text-white font-medium">Magicworksit Sol. Pvt. Ltd</span>.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Alongside WordPress, I have expanded into modern JavaScript and full-stack development—building real-world Next.js applications such as <span className="text-white font-medium">OMC 2.0</span> and <span className="text-white font-medium">MW Host AI</span>. I specialize in turning sluggish websites into ultra-fast, 95+ PageSpeed platforms that drive measurable business outcomes.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-slate-800 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-secondary shrink-0" />
                  <span>Pune, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Briefcase className="w-4 h-4 text-secondary shrink-0" />
                  <span>Web Dev @ Magicworksit</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>25+ Shipped Websites</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Gauge className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>98+ Speed Score Record</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-secondary hover:bg-orange-600 rounded-xl transition-all shadow-md shadow-secondary/20"
                >
                  <span>Start a Project Discussion</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all"
                >
                  <span>View Services &amp; AMC</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Key Competency Pillars */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span>Core Technical Pillars</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {philosophies.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 group-hover:bg-primary/20 border border-slate-700/60 group-hover:border-secondary/40 flex items-center justify-center mb-3 text-secondary transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick Professional Value Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-primary/10 via-slate-900/60 to-secondary/10 border border-slate-800">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span>Professional Commitment</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Delivering reliable, scalable web solutions that combine clean code, outstanding Core Web Vitals, and proactive maintenance to help businesses capture and convert more leads.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
