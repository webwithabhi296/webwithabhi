"use client";

import React, { useState } from "react";
import { SKILLS } from "@/data/portfolio-data";
import { SkillCategory, SkillItem } from "@/types";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { cn } from "@/lib/utils";
import {
  Zap,
  Code2,
  Palette,
  FileCode,
  Server,
  Cpu,
  Database,
  Layers,
  Globe,
  Puzzle,
  ShoppingBag,
  Gauge,
  Bot,
  GitBranch,
  Search,
  ShieldCheck,
  FileSpreadsheet,
  CheckCircle2,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Zap,
  Code2,
  Palette,
  FileCode,
  Server,
  Cpu,
  Database,
  Layers,
  Globe,
  Puzzle,
  ShoppingBag,
  Gauge,
  Bot,
  GitBranch,
  Search,
  ShieldCheck,
  FileSpreadsheet,
};

const CATEGORIES: { key: "all" | SkillCategory; label: string }[] = [
  { key: "all", label: "All Technologies" },
  { key: "cms", label: "WordPress & eCommerce" },
  { key: "frontend", label: "Frontend & Next.js" },
  { key: "backend", label: "Backend & APIs" },
  { key: "performance", label: "Performance & SEO" },
  { key: "tools", label: "Dev Tools" },
  { key: "ai", label: "AI Developer Tools" },
];

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | SkillCategory>("all");

  const filteredSkills =
    activeCategory === "all"
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-12 md:py-16 bg-slate-950 relative border-t border-slate-900">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <Container>
        <SectionHeading
          badge="Technical Competency Matrix"
          title="Skills &amp; Technology Stack"
          subtitle="Realistic, battle-tested expertise across custom WordPress engineering, Next.js web applications, modern frontend frameworks, backend APIs, and performance optimization."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill: SkillItem, idx: number) => {
            const Icon = ICON_MAP[skill.iconName] || Code2;

            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group shadow-lg shadow-black/20"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-secondary group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-secondary transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[11px] text-slate-400">
                          {skill.experience}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-bold text-slate-300">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Level Progress Bar */}
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500 uppercase tracking-wider">
                  <span>Domain: {skill.category}</span>
                  {skill.featured && (
                    <span className="text-secondary font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Core Strength
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
