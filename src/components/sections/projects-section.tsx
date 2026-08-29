"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/portfolio-data";
import { ProjectCategory, ProjectItem } from "@/types";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { cn } from "@/lib/utils";
import {
  ExternalLink,
  Github,
  Zap,
  Sparkles,
  TrendingUp,
  Globe,
  FileSpreadsheet,
} from "lucide-react";

const PROJECT_CATEGORIES: { key: ProjectCategory; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "wordpress", label: "WordPress & CMS" },
  { key: "nextjs", label: "Next.js Web Apps" },
  { key: "landing", label: "Landing Pages & Lead Gen" },
];

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-12 md:py-16 bg-slate-950/90 relative border-t border-slate-900">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <SectionHeading
          badge="Real-World Portfolio"
          title="Featured Projects &amp; Case Studies"
          subtitle="Real-world WordPress platforms, Next.js web applications, high-converting landing pages, and speed-optimized websites built for production."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
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
              className="rounded-2xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/30"
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
                      <Sparkles className="w-3 h-3" /> Production Live
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

                {/* Impact Metric Card */}
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-2.5">
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
                    <Zap className="w-3 h-3 text-sky-400" /> Key Technical Architecture
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

              {/* Action Links */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-orange-400 transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-slate-500 font-medium italic">
                    Enterprise Client Delivery
                  </span>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
