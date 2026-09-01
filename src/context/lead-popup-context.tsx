"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";

interface LeadPopupContextType {
  isOpen: boolean;
  selectedService?: string;
  openLeadPopup: (service?: string) => void;
  closeLeadPopup: () => void;
}

const LeadPopupContext = createContext<LeadPopupContextType | undefined>(undefined);

const AUTO_TRIGGER_KEY = "lead_popup_auto_triggered_v2";

export const LeadPopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const hasTriggeredRef = useRef(false);

  const openLeadPopup = useCallback((service?: string) => {
    setSelectedService(service);
    setIsOpen(true);
  }, []);

  const closeLeadPopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Automatic triggers: 5-second timer & 50% scroll depth
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      const alreadyTriggered = sessionStorage.getItem(AUTO_TRIGGER_KEY);
      if (alreadyTriggered) {
        hasTriggeredRef.current = true;
        return;
      }

      const triggerAutoPopup = () => {
        if (!hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          sessionStorage.setItem(AUTO_TRIGGER_KEY, "true");
          setIsOpen(true);
        }
      };

      // 1. Trigger A: 5 seconds after page load
      const timer = setTimeout(() => {
        triggerAutoPopup();
      }, 5000);

      // 2. Trigger B: ~50% scroll depth
      const handleScroll = () => {
        if (hasTriggeredRef.current) return;
        const scrollPosition = window.scrollY + window.innerHeight;
        const totalHeight = document.documentElement.scrollHeight;
        if (totalHeight > 0 && scrollPosition >= totalHeight * 0.48) {
          triggerAutoPopup();
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        clearTimeout(timer);
        window.removeEventListener("scroll", handleScroll);
      };
    } catch {
      // Gracefully handle any sessionStorage restrictions
    }
  }, []);

  // Close on Escape key & manage body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeLeadPopup();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeLeadPopup]);

  return (
    <LeadPopupContext.Provider
      value={{
        isOpen,
        selectedService,
        openLeadPopup,
        closeLeadPopup,
      }}
    >
      {children}
    </LeadPopupContext.Provider>
  );
};

export const useLeadPopup = (): LeadPopupContextType => {
  const context = useContext(LeadPopupContext);
  if (!context) {
    throw new Error("useLeadPopup must be used within a LeadPopupProvider");
  }
  return context;
};
