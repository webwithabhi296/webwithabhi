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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.ownerName} | ${siteConfig.brandName} - Next.js Architect & Full Stack WordPress Developer`,
    description: siteConfig.description,
    siteName: siteConfig.brandName,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.brandName} Logo - Abhishek Panchgalle`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.ownerName} | ${siteConfig.brandName}`,
    description: siteConfig.description,
    creator: "@webwithabhi",
    images: ["/twitter-image.png"],
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
