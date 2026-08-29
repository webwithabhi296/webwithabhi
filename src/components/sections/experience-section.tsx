"use client";

import React from "react";
import { EXPERIENCES } from "@/data/portfolio-data";
import { ExperienceItem } from "@/types";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Building,
} from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-12 md:py-16 bg-slate-950 relative border-t border-slate-900">
      {/* Background decoration */}
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-primary/10 blur-[130px] rounded-full pointer-events-none" />

      <Container>
        <SectionHeading
          badge="Professional Track Record"
          title="Career Journey &amp; Work Experience"
          subtitle="Real-world experience in custom WordPress engineering, Next.js web application delivery, website maintenance, and Core Web Vitals performance tuning."
        />

        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-slate-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp: ExperienceItem, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 items-center"
                >
                  {/* Timeline Center Node */}
                  <div className="hidden sm:flex absolute left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-secondary items-center justify-center z-10 shadow-md shadow-secondary/20">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                  </div>

                  {/* Left Column or Right Column depending on even/odd */}
                  <div
                    className={`sm:col-span-1 ${
                      isEven ? "sm:text-right sm:pr-8" : "sm:order-2 sm:pl-8"
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-200 space-y-4 shadow-lg shadow-black/20">
                      {/* Header */}
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1 justify-start sm:justify-start">
                          {exp.isCurrent && (
                            <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 rounded-full flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Current Position
                            </span>
                          )}
                          <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-secondary" />
                            {exp.period}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {exp.role}
                        </h3>

                        <div className="text-sm font-semibold text-secondary flex items-center gap-1.5">
                          <Building className="w-3.5 h-3.5" />
                          <span>{exp.company}</span>
                        </div>

                        <div className="text-xs text-slate-400 flex items-center gap-1 pt-0.5">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-left">
                        {exp.summary}
                      </p>

                      {/* Key Achievements Bullet List */}
                      <div className="space-y-2 text-left pt-2 border-t border-slate-800/80">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Key Deliverables &amp; Outcomes:
                        </div>
                        <ul className="space-y-1.5">
                          {exp.achievements.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-slate-400 flex items-start gap-2"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty balance column for alternate sides on desktop */}
                  <div
                    className={`hidden sm:block sm:col-span-1 ${
                      isEven ? "sm:order-2 sm:pl-8" : "sm:text-right sm:pr-8"
                    }`}
                  >
                    <div className="p-4 rounded-xl bg-slate-900/20 border border-slate-800/40 text-slate-400 text-xs">
                      <div className="font-semibold text-white mb-1">
                        Milestone Focus
                      </div>
                      <div>
                        {exp.company} • {exp.period}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        High-velocity client delivery, speed tuning, and proactive maintenance.
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
