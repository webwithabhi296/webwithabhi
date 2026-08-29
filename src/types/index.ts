import { ReactNode } from "react";

export interface SiteConfig {
  name: string;
  brandName: string;
  ownerName: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  experienceYears: string;
  completedProjects: string;
  clientSatisfaction: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    linkedin: string;
    twitter: string;
    whatsapp: string;
  };
  keywords: string[];
}

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export interface ContainerProps extends BaseComponentProps {
  as?: keyof HTMLElementTagNameMap;
  fluid?: boolean;
}

export interface SectionWrapperProps extends BaseComponentProps {
  id?: string;
  as?: "section" | "div" | "article" | "main";
  fluid?: boolean;
  containerFluid?: boolean;
  containerClassName?: string;
}

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "cms"
  | "performance"
  | "tools"
  | "ai";

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level: number; // 1-100
  experience: string;
  description: string;
  iconName: string;
  featured?: boolean;
}

export type ProjectCategory =
  | "all"
  | "wordpress"
  | "nextjs"
  | "landing"
  | "performance";

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  longDescription: string;
  impactMetric: string;
  architectureHighlight: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  achievements: string[];
  techStack: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  iconName: string;
  badge?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  provider: string;
  date: string;
  mode: string;
  technologyArea: string;
  description: string;
  skillsCovered: string[];
  credentialBadge?: string;
  isFeatured?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarText: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface PerformanceMetric {
  metric: string;
  fullName: string;
  target: string;
  achieved: string;
  description: string;
  optimizationTechnique: string;
}
