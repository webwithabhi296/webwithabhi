"use client";

import React from "react";
import { EXPERIENCES } from "@/data/portfolio-data";
import { ExperienceItem } from "@/types";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { useLeadPopup } from "@/context/lead-popup-context";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Building,
  Briefcase,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export const ExperienceSection: React.FC = () => {
  const { openLeadPopup } = useLeadPopup();

  return (
    <section id="experience" className="py-12 md:py-16 bg-slate-950 relative border-t border-slate-900">
      {/* Background decoration */}
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-primary/10 blur-[130px] rounded-full pointer-events-none" />

      <Container>
        <SectionHeading
          badge="Professional Track Record"
          title="Career Journey &amp; Work Experience"
          subtitle="Hands-on experience in custom WordPress engineering, Next.js web application delivery, website maintenance (AMC), and Core Web Vitals performance tuning."
        />

        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-6 top-3 bottom-6 w-0.5 bg-gradient-to-b from-secondary via-slate-800 to-slate-900" />

          <div className="space-y-8">
            {EXPERIENCES.map((exp: ExperienceItem) => (
              <div key={exp.id} className="relative pl-10 sm:pl-14">
                {/* Timeline Bullet Node */}
                <div className="absolute left-4 sm:left-6 -translate-x-1/2 top-4 w-6 h-6 rounded-full bg-slate-950 border-2 border-secondary flex items-center justify-center z-10 shadow-md shadow-secondary/30">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      exp.isCurrent ? "bg-emerald-400 animate-pulse" : "bg-secondary"
                    }`}
                  />
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-200 space-y-4 shadow-xl shadow-black/20">
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 rounded-full flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Currently Working
                          </span>
                        )}
                        <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-secondary" />
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-slate-400">
                      <div className="text-sm font-semibold text-secondary flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5" />
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline flex items-center gap-1 text-secondary"
                          >
                            <span>{exp.company}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span>{exp.company}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-slate-400 pt-0.5">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Key Achievements Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Deliverables &amp; Technical Contributions:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {exp.achievements.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-slate-300 flex items-start gap-2 bg-slate-950/40 p-2.5 rounded-xl border border-slate-800/60"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    <span className="text-[10px] uppercase font-semibold text-slate-500 mr-1">
                      Tech:
                    </span>
                    {exp.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recruiter & Client Dual Action Banner */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-primary/20 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  Considering Abhishek for an Opportunity?
                </div>
                <div className="text-xs text-slate-400">
                  Available for Full-time Roles, Agency Retainers &amp; High-Impact Client Projects.
                </div>
              </div>
            </div>

            <button
              onClick={() => openLeadPopup("Experience Career Discussion")}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-secondary to-orange-600 rounded-xl shadow-md shadow-orange-500/20 hover:shadow-orange-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shrink-0"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
