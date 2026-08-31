"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/validation/contactSchema";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export const SERVICE_OPTIONS = [
  "Custom WordPress Development",
  "Next.js Web Application",
  "Landing Page & Conversion Optimization",
  "Website Performance & Core Web Vitals (95+)",
  "Website Maintenance & AMC",
  "Technical SEO & Schema Optimization",
  "Shopify Store Setup & Optimization",
  "Consultation / Other Inquiry",
];

export const SCOPE_OPTIONS = [
  "New Website from Scratch",
  "Redesign / Rebuild Existing Website",
  "Speed & Core Web Vitals Optimization",
  "Ongoing Monthly Maintenance (AMC)",
  "Technical Consulting & Code Audit",
  "Other / Custom Requirement",
];

interface ContactFormProps {
  onSuccess?: () => void;
  isModal?: boolean;
  defaultService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  onSuccess,
  isModal = false,
  defaultService,
}) => {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: defaultService || "Custom WordPress Development",
      projectScope: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmitStatus("success");
        setStatusMessage(
          resData.message || "Thank you! Your message has been sent to Abhishek Panchgalle."
        );
        reset();
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 2000);
        }
      } else {
        setSubmitStatus("error");
        setStatusMessage(resData.message || "Failed to send your inquiry. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus("error");
      setStatusMessage(
        "An unexpected network error occurred. Please reach out to webwithabhi296@gmail.com directly."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`text-left ${isModal ? "space-y-2.5" : "space-y-4"}`}
      noValidate
    >
      {isModal ? (
        /* ==========================================================
           MODAL MODE: Compact, Single-Column, Placeholders Only
           ========================================================== */
        <>
          {/* Name Field */}
          <div>
            <input
              id="name-modal"
              type="text"
              aria-label="Name"
              {...register("name")}
              placeholder="Name"
              disabled={isSubmitting}
              className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors ${
                errors.name
                  ? "border-red-500/80 focus:border-red-500"
                  : "border-slate-800 focus:border-secondary"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.name.message}</span>
              </p>
            )}
          </div>

          {/* Email Address Field */}
          <div>
            <input
              id="email-modal"
              type="email"
              aria-label="Email Address"
              {...register("email")}
              placeholder="Email Address"
              disabled={isSubmitting}
              className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors ${
                errors.email
                  ? "border-red-500/80 focus:border-red-500"
                  : "border-slate-800 focus:border-secondary"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.email.message}</span>
              </p>
            )}
          </div>

          {/* Phone Number Field */}
          <div>
            <input
              id="phone-modal"
              type="tel"
              aria-label="Phone Number"
              {...register("phone")}
              placeholder="Phone Number"
              disabled={isSubmitting}
              className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors ${
                errors.phone
                  ? "border-red-500/80 focus:border-red-500"
                  : "border-slate-800 focus:border-secondary"
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.phone.message}</span>
              </p>
            )}
          </div>

          {/* Service Required Field */}
          <div>
            <select
              id="service-modal"
              aria-label="Service Required"
              {...register("service")}
              disabled={isSubmitting}
              className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border text-white text-sm focus:outline-none transition-colors ${
                errors.service
                  ? "border-red-500/80 focus:border-red-500"
                  : "border-slate-800 focus:border-secondary"
              }`}
            >
              <option value="" disabled className="bg-slate-950 text-slate-500">
                Service Required
              </option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-slate-950 text-white">
                  {opt}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.service.message}</span>
              </p>
            )}
          </div>

          {/* Project Details (Optional) */}
          <div>
            <textarea
              id="message-modal"
              aria-label="Project Details (Optional)"
              {...register("message")}
              rows={3}
              placeholder="Project Details (Optional)"
              disabled={isSubmitting}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-950/90 border border-slate-800 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-secondary transition-colors resize-none"
            />
          </div>
        </>
      ) : (
        /* ==========================================================
           SECTION MODE: Comprehensive Layout with Labels & Grids
           ========================================================== */
        <>
          {/* Name Field */}
          <div>
            <label
              htmlFor="name-section"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
            >
              Full Name <span className="text-secondary">*</span>
            </label>
            <input
              id="name-section"
              type="text"
              {...register("name")}
              placeholder="e.g. John Doe"
              disabled={isSubmitting}
              className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors ${
                errors.name
                  ? "border-red-500/80 focus:border-red-500"
                  : "border-slate-800 focus:border-secondary"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.name.message}</span>
              </p>
            )}
          </div>

          {/* Email & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email-section"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
              >
                Email Address <span className="text-secondary">*</span>
              </label>
              <input
                id="email-section"
                type="email"
                {...register("email")}
                placeholder="e.g. john@company.com"
                disabled={isSubmitting}
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors ${
                  errors.email
                    ? "border-red-500/80 focus:border-red-500"
                    : "border-slate-800 focus:border-secondary"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.email.message}</span>
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone-section"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
              >
                Phone / WhatsApp <span className="text-secondary">*</span>
              </label>
              <input
                id="phone-section"
                type="tel"
                {...register("phone")}
                placeholder="e.g. +91 8421903846"
                disabled={isSubmitting}
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors ${
                  errors.phone
                    ? "border-red-500/80 focus:border-red-500"
                    : "border-slate-800 focus:border-secondary"
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.phone.message}</span>
                </p>
              )}
            </div>
          </div>

          {/* Service & Scope Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Service Field (Required) */}
            <div>
              <label
                htmlFor="service-section"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
              >
                Service Required <span className="text-secondary">*</span>
              </label>
              <select
                id="service-section"
                {...register("service")}
                disabled={isSubmitting}
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border text-white text-sm focus:outline-none transition-colors ${
                  errors.service
                    ? "border-red-500/80 focus:border-red-500"
                    : "border-slate-800 focus:border-secondary"
                }`}
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-slate-950 text-white">
                    {opt}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.service.message}</span>
                </p>
              )}
            </div>

            {/* Project Scope (Optional) */}
            <div>
              <label
                htmlFor="scope-section"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
              >
                Project Scope{" "}
                <span className="text-slate-500 text-[11px] lowercase">(optional)</span>
              </label>
              <select
                id="scope-section"
                {...register("projectScope")}
                disabled={isSubmitting}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-secondary transition-colors"
              >
                <option value="" className="bg-slate-950 text-slate-400">
                  Select project scope...
                </option>
                {SCOPE_OPTIONS.map((scope) => (
                  <option key={scope} value={scope} className="bg-slate-950 text-white">
                    {scope}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message Field (Optional) */}
          <div>
            <label
              htmlFor="message-section"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
            >
              Project Details / Message{" "}
              <span className="text-slate-500 text-[11px] lowercase">(optional)</span>
            </label>
            <textarea
              id="message-section"
              {...register("message")}
              rows={4}
              placeholder="Briefly describe your requirements, timeline, or objectives..."
              disabled={isSubmitting}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-secondary transition-colors resize-none"
            />
          </div>
        </>
      )}

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-400 text-xs flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
          <span>{statusMessage}</span>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-3 rounded-xl bg-red-950/40 border border-red-800/60 text-red-400 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full font-bold text-white bg-gradient-to-r from-secondary via-orange-500 to-amber-500 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 cursor-pointer ${
          isModal ? "py-2.5 px-4 rounded-xl text-sm" : "py-3 px-6 rounded-xl text-sm"
        }`}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>{isModal ? "Send Message" : "Send Project Inquiry"}</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-slate-500 text-center">
        Guaranteed response within 24 hours. Direct communication with Abhishek Panchgalle.
      </p>
    </form>
  );
};
