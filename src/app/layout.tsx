import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/common/json-ld";
import "@/styles/globals.css";

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.ownerName} | ${siteConfig.brandName} - Next.js Architect & Full Stack WordPress Developer`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.ownerName,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.ownerName,
  publisher: siteConfig.brandName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "profile",
    firstName: "Abhishek",
    lastName: "Panchgalle",
    username: "magicabhi",
    gender: "male",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.ownerName} | ${siteConfig.brandName} - Next.js Architect & Full Stack WordPress Developer`,
    description: siteConfig.description,
    siteName: siteConfig.brandName,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.ownerName} - Senior Next.js Architect & Full Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.ownerName} | ${siteConfig.brandName}`,
    description: siteConfig.description,
    creator: "@webwithabhi",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { LeadPopupProvider } from "@/context/lead-popup-context";
import { LeadPopup } from "@/components/modal/lead-popup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-secondary selection:text-white font-sans">
        <LeadPopupProvider>
          {children}
          <LeadPopup />
        </LeadPopupProvider>
      </body>
    </html>
  );
}
