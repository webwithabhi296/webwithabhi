"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
} from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900 text-slate-400 pt-10 pb-8 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-gradient-to-t from-primary/10 to-transparent blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="#home"
              className="inline-flex items-center gap-2.5 text-xl font-bold text-white tracking-tight"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary via-slate-800 to-secondary flex items-center justify-center p-0.5 shadow-md shadow-primary/30">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="text-secondary font-black text-sm">W</span>
                  <span className="text-white font-black text-sm">A</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="leading-none text-base sm:text-lg font-bold">
                  Web With <span className="text-secondary">Abhi</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  {siteConfig.ownerName}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              WordPress Developer, Next.js Engineer &amp; Performance Specialist.
              Engineering high-converting websites, Core Web Vitals optimization,
              and proactive Annual Maintenance Contracts (AMC) for businesses and organizations.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-secondary hover:bg-slate-800 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-secondary hover:bg-slate-800 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter Profile"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-secondary hover:bg-slate-800 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Chat"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500 hover:bg-slate-800 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#about" className="hover:text-secondary transition-colors">
                  About Abhishek
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-secondary transition-colors">
                  Skills Matrix
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-secondary transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="#performance" className="hover:text-secondary transition-colors">
                  Core Web Vitals
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-secondary transition-colors">
                  Services &amp; AMC
                </Link>
              </li>
              <li>
                <Link href="#certifications" className="hover:text-secondary transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-secondary transition-colors">
                  Career Timeline
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Offerings */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Core Offerings
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="text-slate-400">Custom WordPress Themes</li>
              <li className="text-slate-400">Next.js Web Applications</li>
              <li className="text-slate-400">Landing Page Development</li>
              <li className="text-slate-400">PageSpeed 95+ Tuning</li>
              <li className="text-slate-400">Website Maintenance (AMC)</li>
              <li className="text-slate-400">Shopify &amp; eCommerce</li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 hover:text-secondary transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span className="break-all">{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 hover:text-secondary transition-colors"
                >
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span>+91 {siteConfig.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.ownerName} ({siteConfig.brandName}). Available for Full-Time Roles &amp; Freelance Projects.
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-slate-400">
              Next.js 15 • Tailwind v4 • TypeScript
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
