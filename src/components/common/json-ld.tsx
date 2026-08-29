import React from "react";
import { siteConfig } from "@/config/site";
import { FAQS, SERVICES } from "@/data/portfolio-data";

export const JsonLd: React.FC = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.ownerName,
    alternateName: ["Web With Abhi", "Abhishek P."],
    jobTitle: "WordPress Developer, Next.js Engineer & Performance Specialist",
    worksFor: {
      "@type": "Organization",
      name: "Magicworksit Sol. Pvt. Ltd",
    },
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: `+91-${siteConfig.phone}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.twitter,
    ],
    knowsAbout: [
      "Custom WordPress Development",
      "WordPress Theme Development",
      "WordPress Plugin Development",
      "Core Web Vitals Optimization",
      "PageSpeed Optimization",
      "Landing Page Development",
      "Website Maintenance & AMC",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PHP",
      "MySQL",
      "Shopify Development",
      "Sanity CMS",
      "Technical SEO & Structured Data",
      "Headless CMS Architecture",
    ],
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.brandName,
    url: siteConfig.url,
    telephone: `+91-${siteConfig.phone}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.5204,
      longitude: 73.8567,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Engineering, Development & AMC Services",
      itemListElement: SERVICES.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
        position: index + 1,
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Abhishek Panchgalle",
        item: `${siteConfig.url}#about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Skills Matrix",
        item: `${siteConfig.url}#skills`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Featured Projects",
        item: `${siteConfig.url}#projects`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Website Performance & Core Web Vitals",
        item: `${siteConfig.url}#performance`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Services & AMC",
        item: `${siteConfig.url}#services`,
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Certifications",
        item: `${siteConfig.url}#certifications`,
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Contact Abhishek",
        item: `${siteConfig.url}#contact`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};
