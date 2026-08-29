"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/portfolio-data";
import { ProjectCategory, ProjectItem } from "@/types";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { useLeadPopup } from "@/context/lead-popup-context";
import { cn } from "@/lib/utils";
import {
  ExternalLink,
  Zap,
  Sparkles,
  TrendingUp,
  Globe,
  FileSpreadsheet,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

const PROJECT_CATEGORIES: { key: ProjectCategory; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "nextjs", label: "Featured Next.js Projects" },
  { key: "wordpress", label: "WordPress & CMS Projects" },
  { key: "landing", label: "Landing Pages & Conversion" },
];

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const { openLeadPopup } = useLeadPopup();

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-12 md:py-16 bg-slate-950/90 relative border-t border-slate-900 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <SectionHeading
          badge="Real-World Portfolio"
          title="Featured Projects &amp; Case Studies"
          subtitle="Real-world Next.js web applications, bespoke WordPress platforms, and high-converting landing pages built and optimized for actual production environments."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {PROJECT_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={cn(
                  "px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer",
                  isActive
                    ? "bg-secondary text-white shadow-md shadow-secondary/30 scale-105"
                    : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-300 group shadow-xl shadow-black/30"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-1 rounded-md border border-secondary/20 flex items-center gap-1.5">
                    {project.category === "wordpress" && <Globe className="w-3 h-3" />}
                    {project.category === "nextjs" && <Zap className="w-3 h-3" />}
                    {project.category === "landing" && <FileSpreadsheet className="w-3 h-3" />}
                    {project.categoryLabel}
                  </span>

                  {project.featured && (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                      <Sparkles className="w-3 h-3" /> Live Production
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features Bullet List if present */}
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Highlights &amp; Scope:
                    </div>
                    <ul className="space-y-1">
                      {project.keyFeatures.map((feat, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges Solved */}
                {project.challengesSolved && (
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs">
                    <div className="text-amber-400 font-semibold text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> Technical Challenge Solved
                    </div>
                    <p className="text-slate-300 leading-relaxed text-[11px]">
                      {project.challengesSolved}
                    </p>
                  </div>
                )}

                {/* Impact Metric Card */}
                <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800/80 flex items-start gap-2.5">
                  <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="text-slate-400 font-medium">Outcome &amp; Result: </span>
                    <span className="text-emerald-300 font-semibold">
                      {project.impactMetric}
                    </span>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div className="text-xs text-slate-400 bg-primary/10 p-3 rounded-xl border border-primary/20">
                  <div className="font-semibold text-sky-300 text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-sky-400" /> Architecture Highlight
                  </div>
                  <div className="text-slate-300 text-[11px] leading-relaxed">
                    {project.architectureHighlight}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links & CTA */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-orange-400 transition-colors"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-500 font-medium italic">
                      Client Confidential Delivery
                    </span>
                  )}

                  <button
                    onClick={() => openLeadPopup(`Inquiry about ${project.title}`)}
                    className="text-[11px] font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Start Similar Project &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Project CTA Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-primary/20 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Have a Custom WordPress, Next.js, or Landing Page Project in Mind?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Discuss architecture, timeline scoping, or PageSpeed optimization with Abhishek directly.
            </p>
          </div>
          <button
            onClick={() => openLeadPopup("Custom Project Consultation")}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-secondary to-orange-600 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shrink-0"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </Container>
    </section>
  );
};
