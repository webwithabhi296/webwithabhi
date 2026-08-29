"use client";

import React from "react";
import { CERTIFICATIONS } from "@/data/portfolio-data";
import { CertificationItem } from "@/types";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import {
  Award,
  Building,
  Calendar,
  CheckCircle2,
  BadgeCheck,
  Sparkles,
  Bot,
  Globe,
  Briefcase,
  MessageSquare,
} from "lucide-react";

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-12 md:py-16 bg-slate-950/95 relative border-t border-slate-900 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-primary/10 blur-[130px] rounded-full pointer-events-none" />

      <Container>
        <SectionHeading
          badge="Verified Credentials"
          title="Professional Certifications"
          subtitle="Formal industry training and technical certifications validating practical expertise in AI-assisted development, prompt engineering, project management, communication, and full-stack WordPress architecture."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {CERTIFICATIONS.map((cert: CertificationItem) => {
            const isClaude = cert.id === "claude-101-anthropic";

            return (
              <div
                key={cert.id}
                className={`p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/20 relative ${
                  cert.isFeatured || isClaude
                    ? "bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-950/90 border-2 border-secondary/60 hover:border-secondary shadow-secondary/10 hover:-translate-y-1"
                    : "bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Top Highlight Tag for Claude / AI */}
                {cert.isFeatured && (
                  <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-secondary to-orange-500 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md shadow-orange-500/30">
                    <Sparkles className="w-3 h-3" />
                    <span>Featured AI Specialization</span>
                  </div>
                )}

                <div className="space-y-3.5">
                  {/* Header Badge & Provider */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isClaude
                            ? "bg-secondary/20 text-orange-400 border border-secondary/40"
                            : "bg-slate-800 text-secondary group-hover:bg-primary/20"
                        }`}
                      >
                        {isClaude ? (
                          <Bot className="w-5 h-5" />
                        ) : cert.title.includes("WordPress") ? (
                          <Globe className="w-5 h-5" />
                        ) : cert.title.includes("Project") ? (
                          <Briefcase className="w-5 h-5" />
                        ) : cert.title.includes("Communicating") ? (
                          <MessageSquare className="w-5 h-5" />
                        ) : (
                          <Award className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-200 flex items-center gap-1">
                          <Building className="w-3 h-3 text-secondary" />
                          <span>{cert.provider}</span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          {cert.mode}
                        </div>
                      </div>
                    </div>

                    {cert.credentialBadge && (
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                          isClaude
                            ? "text-orange-300 bg-orange-950/60 border-orange-700/60"
                            : "text-emerald-400 bg-emerald-950/50 border-emerald-800/50"
                        }`}
                      >
                        <BadgeCheck className="w-3 h-3" />
                        {cert.credentialBadge}
                      </span>
                    )}
                  </div>

                  {/* Title & Date */}
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-secondary transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-secondary" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* Technology Area Box */}
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs">
                    <div className="font-semibold text-sky-400 text-[10px] uppercase tracking-wider mb-0.5">
                      Focus Area:
                    </div>
                    <div className="text-slate-300 text-xs leading-snug">
                      {cert.technologyArea}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Skills Covered Checklist */}
                <div className="mt-5 pt-3 border-t border-slate-800/80 space-y-1.5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Key Topics &amp; Competencies:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {cert.skillsCovered.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700 flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-secondary shrink-0" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
