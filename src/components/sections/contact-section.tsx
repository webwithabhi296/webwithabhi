"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Copy,
  Check,
  Send,
  ShieldCheck,
  AlertCircle,
  Loader2,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Custom WordPress Development",
    message: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

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

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Please enter your full name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.replace(/\s+/g, ""))) {
      errors.phone = "Please enter a valid phone number (10+ digits).";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Please describe your project or requirements (at least 10 characters).";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setStatusMessage(data.message || "Thank you! Your message has been sent to Abhishek Panchgalle.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Custom WordPress Development",
          message: "",
        });
        setFieldErrors({});
      } else {
        setSubmitStatus("error");
        setStatusMessage(data.message || "Failed to send your inquiry. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus("error");
      setStatusMessage("An unexpected network error occurred. Please email webwithabhi296@gmail.com directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-slate-950 relative border-t border-slate-900">
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
          <div className="lg:col-span-5 space-y-5">
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
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl shadow-black/20">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Project Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below to receive a scoping timeline and estimate.
              </p>

              {/* Status Alert Banner */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/50 border border-emerald-800 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Inquiry Sent Successfully!</div>
                    <div>{statusMessage}</div>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-red-950/50 border border-red-800 text-red-300 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Submission Error</div>
                    <div>{statusMessage}</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (fieldErrors.name) {
                          setFieldErrors({ ...fieldErrors, name: "" });
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                        fieldErrors.name ? "border-red-500" : "border-slate-800"
                      } text-white text-xs sm:text-sm focus:outline-none focus:border-secondary transition-colors`}
                    />
                    {fieldErrors.name && (
                      <p className="text-[11px] text-red-400 font-medium">{fieldErrors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rajesh@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (fieldErrors.email) {
                          setFieldErrors({ ...fieldErrors, email: "" });
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                        fieldErrors.email ? "border-red-500" : "border-slate-800"
                      } text-white text-xs sm:text-sm focus:outline-none focus:border-secondary transition-colors`}
                    />
                    {fieldErrors.email && (
                      <p className="text-[11px] text-red-400 font-medium">{fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (fieldErrors.phone) {
                          setFieldErrors({ ...fieldErrors, phone: "" });
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                        fieldErrors.phone ? "border-red-500" : "border-slate-800"
                      } text-white text-xs sm:text-sm focus:outline-none focus:border-secondary transition-colors`}
                    />
                    {fieldErrors.phone && (
                      <p className="text-[11px] text-red-400 font-medium">{fieldErrors.phone}</p>
                    )}
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Service Requirement
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-secondary transition-colors cursor-pointer"
                    >
                      <option value="Custom WordPress Development">
                        Custom WordPress Development &amp; Themes
                      </option>
                      <option value="Next.js Web Applications">
                        Next.js 15/16 App Router Web Application
                      </option>
                      <option value="Landing Page Development">
                        Landing Page Development (Lead Gen / Campaign)
                      </option>
                      <option value="Website Performance Optimization">
                        Website Performance &amp; Core Web Vitals (95+ PageSpeed)
                      </option>
                      <option value="Website Maintenance & AMC">
                        Website Maintenance &amp; AMC Contract
                      </option>
                      <option value="Technical SEO & Structured Data">
                        Technical SEO &amp; Schema Markup
                      </option>
                      <option value="CMS Development (Headless/Sanity)">
                        Headless CMS (WordPress REST/Sanity + Next.js)
                      </option>
                      <option value="AI-Assisted Web Development">
                        AI Integration &amp; Automation
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Project Details &amp; Scope *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project requirements, target timeline, or existing website URL..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (fieldErrors.message) {
                        setFieldErrors({ ...fieldErrors, message: "" });
                      }
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                      fieldErrors.message ? "border-red-500" : "border-slate-800"
                    } text-white text-xs sm:text-sm focus:outline-none focus:border-secondary transition-colors resize-none`}
                  />
                  {fieldErrors.message && (
                    <p className="text-[11px] text-red-400 font-medium">{fieldErrors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-secondary via-orange-500 to-amber-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Inquiry to Abhishek...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
