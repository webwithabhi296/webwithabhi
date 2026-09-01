"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Copy,
  Check,
  ShieldCheck,
} from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-secondary/10 blur-[130px] rounded-full pointer-events-none" />

      <Container>
        <SectionHeading
          badge="Direct Communication"
          title="Get in Touch &amp; Start a Project"
          subtitle="Ready to build a custom WordPress platform, develop a Next.js application, optimize Core Web Vitals, or set up website AMC maintenance?"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
          {/* Left Column: Direct Contact & Availability Cards */}
          <FadeIn variant="fadeUp" className="lg:col-span-5 space-y-5">
            {/* Quick Connect Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6 shadow-xl shadow-black/20">
              <h3 className="text-xl font-bold text-white">
                Contact Abhishek Panchgalle
              </h3>

              <div className="space-y-4">
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-orange-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                        Direct Email Address
                      </div>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-secondary transition-colors truncate block"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(siteConfig.email, "email")}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0 cursor-pointer"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedField === "email" ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-orange-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                        Direct Phone / Mobile
                      </div>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-secondary transition-colors block"
                      >
                        +91 {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(siteConfig.phone, "phone")}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0 cursor-pointer"
                    title="Copy Phone Number"
                    aria-label="Copy Phone Number"
                  >
                    {copiedField === "phone" ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* WhatsApp Instant Chat */}
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-800/40 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-900/40 flex items-center justify-center text-emerald-400 shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-emerald-400 uppercase tracking-wider font-semibold">
                        Instant WhatsApp Chat
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-white">
                        Start WhatsApp Conversation
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-400 group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </a>
              </div>

              {/* Timezone & Location Status */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span>Pune, India (IST)</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-white">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>{currentTime || "IST Live"}</span>
                </div>
              </div>
            </div>

            {/* Quick SLA Box */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <strong className="text-white block font-semibold">
                  Guaranteed 24-Hour Response
                </strong>
                Direct technical review and transparent scoping for every project inquiry.
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Shared Contact Inquiry Form */}
          <FadeIn variant="fadeUp" delay={0.15} className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl shadow-black/20">
              <h3 className="text-xl font-bold text-white mb-4 pb-3 border-b border-slate-800">
                Get in Touch
              </h3>

              {/* Reusable Contact Form Component */}
              <ContactForm isModal={false} />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};
