"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { useLeadPopup } from "@/context/lead-popup-context";
import {
  Menu,
  X,
  ArrowRight,
  PhoneCall,
  Mail,
} from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { openLeadPopup } = useLeadPopup();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 200) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled
          ? "py-3 bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/25"
          : "py-4 bg-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between gap-2 sm:gap-4 w-full">
          {/* Brand Logo */}
          <Link
            href="#home"
            className="group flex items-center gap-2 sm:gap-2.5 font-bold text-white tracking-tight shrink-0 min-w-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-primary via-slate-800 to-secondary flex items-center justify-center p-0.5 shadow-md shadow-primary/30 group-hover:scale-105 transition-transform duration-200 shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="text-secondary font-black text-xs sm:text-sm">W</span>
                <span className="text-white font-black text-xs sm:text-sm">A</span>
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="leading-none text-sm sm:text-lg font-bold truncate">
                Web With <span className="text-secondary">Abhi</span>
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium tracking-wide truncate">
                Abhishek Panchgalle
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200",
                    isActive
                      ? "text-white bg-slate-800 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Hybrid CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <div className="hidden xl:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for Hire &amp; Freelance
            </div>

            <button
              onClick={() => openLeadPopup("Navbar Get In Touch")}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-secondary to-orange-600 rounded-full shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none cursor-pointer shrink-0 ml-auto"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-slate-950/95 border border-slate-800 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 text-xs font-medium mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for Full-Time &amp; Freelance
              </div>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openLeadPopup("Mobile Menu Drawer Inquiry");
                }}
                className="w-full py-2.5 px-4 text-center text-xs font-semibold text-white bg-gradient-to-r from-secondary to-orange-600 rounded-xl shadow-md cursor-pointer"
              >
                Inquire Project / Full-Time Hire
              </button>
              <div className="flex items-center justify-between text-xs text-slate-400 px-2 pt-1">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-white flex items-center gap-1"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
