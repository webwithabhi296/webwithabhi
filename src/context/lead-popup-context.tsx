"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface LeadPopupContextType {
  isOpen: boolean;
  selectedService?: string;
  openLeadPopup: (service?: string) => void;
  closeLeadPopup: () => void;
}

const LeadPopupContext = createContext<LeadPopupContextType | undefined>(undefined);

const SESSION_KEY = "lead_popup_shown_session";

export const LeadPopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const openLeadPopup = useCallback((service?: string) => {
    setSelectedService(service);
    setIsOpen(true);
  }, []);

  const closeLeadPopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  // 5-second automatic trigger on first visit per browser session
  useEffect(() => {
    try {
      const alreadyShown = sessionStorage.getItem(SESSION_KEY);
      if (!alreadyShown) {
        const timer = setTimeout(() => {
          setIsOpen(true);
          sessionStorage.setItem(SESSION_KEY, "true");
        }, 5000);

        return () => clearTimeout(timer);
      }
    } catch {
      // Catch possible security restrictions with sessionStorage
    }
  }, []);

  // Close on Escape key
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
