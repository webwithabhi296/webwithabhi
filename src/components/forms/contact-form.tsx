"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  ContactFormData,
  PURPOSE_OPTIONS,
  COUNTRY_CODES,
} from "@/lib/validation/contactSchema";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

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

  // Match incoming default service / purpose string if provided
  const resolvedPurpose = React.useMemo(() => {
    if (!defaultService) return "";
    const matched = PURPOSE_OPTIONS.find(
      (opt) => opt.toLowerCase() === defaultService.toLowerCase()
    );
    if (matched) return matched;
    if (defaultService.toLowerCase().includes("full-time") || defaultService.toLowerCase().includes("career")) {
      return "Full-Time Opportunity";
    }
    if (defaultService.toLowerCase().includes("freelance")) {
      return "Freelance Project";
    }
    if (defaultService.toLowerCase().includes("wordpress")) {
      return "WordPress Development";
    }
    if (defaultService.toLowerCase().includes("next")) {
      return "Next.js Development";
    }
    if (defaultService.toLowerCase().includes("landing")) {
      return "Landing Page Development";
    }
    if (defaultService.toLowerCase().includes("speed") || defaultService.toLowerCase().includes("optimization")) {
      return "Website Optimization";
    }
    if (defaultService.toLowerCase().includes("seo")) {
      return "SEO & Performance";
    }
    if (defaultService.toLowerCase().includes("maintenance") || defaultService.toLowerCase().includes("amc")) {
      return "Website Maintenance";
    }
    if (defaultService.toLowerCase().includes("shopify")) {
      return "Shopify Development";
    }
    return "";
  }, [defaultService]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      countryCode: "+91",
      mobile: "",
      email: "",
      purpose: resolvedPurpose || "",
      projectDetails: "",
    },
  });

  useEffect(() => {
    if (resolvedPurpose) {
      setValue("purpose", resolvedPurpose);
    }
  }, [resolvedPurpose, setValue]);

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
        reset({
          name: "",
          countryCode: "+91",
          mobile: "",
          email: "",
          purpose: "",
          projectDetails: "",
        });
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
      className="text-left space-y-3.5 w-full"
      noValidate
    >
      {/* 1. Name Field */}
      <div>
        <input
          id={isModal ? "name-modal" : "name-section"}
          type="text"
          aria-label="Name"
          placeholder="Name *"
          {...register("name")}
          disabled={isSubmitting}
          className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border text-white text-sm placeholder:text-slate-400 focus:outline-none transition-colors ${
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

      {/* 2. Mobile Number with Country Code Selector */}
      <div>
        <div className="flex gap-2">
          {/* Country Code Dropdown */}
          <div className="w-[120px] sm:w-[130px] shrink-0">
            <select
              id={isModal ? "country-code-modal" : "country-code-section"}
              aria-label="Country Code"
              {...register("countryCode")}
              disabled={isSubmitting}
              className="w-full px-2.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-secondary transition-colors cursor-pointer"
            >
              {COUNTRY_CODES.map((item) => (
                <option
                  key={item.code}
                  value={item.code}
                  className="bg-slate-900 text-white"
                >
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* Phone Input */}
          <div className="flex-1 min-w-0">
            <input
              id={isModal ? "mobile-modal" : "mobile-section"}
              type="tel"
              inputMode="numeric"
              aria-label="Mobile Number"
              placeholder="Mobile Number *"
              {...register("mobile")}
              disabled={isSubmitting}
              className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border text-white text-sm placeholder:text-slate-400 focus:outline-none transition-colors ${
                errors.mobile
                  ? "border-red-500/80 focus:border-red-500"
                  : "border-slate-800 focus:border-secondary"
              }`}
            />
          </div>
        </div>
        {errors.mobile && (
          <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1 font-medium">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.mobile.message}</span>
          </p>
        )}
      </div>

      {/* 3. Email Field (Optional) */}
      <div>
        <input
          id={isModal ? "email-modal" : "email-section"}
          type="email"
          aria-label="Email (Optional)"
          placeholder="Email (Optional)"
          {...register("email")}
          disabled={isSubmitting}
          className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border text-white text-sm placeholder:text-slate-400 focus:outline-none transition-colors ${
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

      {/* 4. Purpose Dropdown (Required) */}
      <div>
        <select
          id={isModal ? "purpose-modal" : "purpose-section"}
          aria-label="How can I help you?"
          {...register("purpose")}
          disabled={isSubmitting}
          className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border text-white text-sm focus:outline-none transition-colors cursor-pointer ${
            errors.purpose
              ? "border-red-500/80 focus:border-red-500"
              : "border-slate-800 focus:border-secondary"
          }`}
        >
          <option value="" disabled className="bg-slate-950 text-slate-400">
            How can I help you? *
          </option>
          {PURPOSE_OPTIONS.map((opt) => (
            <option key={opt} value={opt} className="bg-slate-900 text-white">
              {opt}
            </option>
          ))}
        </select>
        {errors.purpose && (
          <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1 font-medium">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.purpose.message}</span>
          </p>
        )}
      </div>

      {/* 5. Project Details (Optional) */}
      <div>
        <textarea
          id={isModal ? "project-details-modal" : "project-details-section"}
          aria-label="Project Details (Optional)"
          rows={3}
          placeholder="Project Details (Optional)"
          {...register("projectDetails")}
          disabled={isSubmitting}
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-white text-sm placeholder:text-slate-400 focus:outline-none focus:border-secondary transition-colors resize-none"
        />
      </div>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-800/70 text-emerald-300 text-xs flex items-start gap-2.5 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
          <span>{statusMessage}</span>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-3 rounded-xl bg-red-950/50 border border-red-800/70 text-red-300 text-xs flex items-start gap-2.5 animate-in fade-in">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 rounded-xl font-bold text-white text-sm bg-gradient-to-r from-secondary via-orange-500 to-amber-500 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Get in Touch</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-slate-400 text-center">
        Guaranteed response within 24 hours. Direct communication with Abhishek.
      </p>
    </form>
  );
};
