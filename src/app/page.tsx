import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  PerformanceSection,
  ServicesSection,
  CertificationsSection,
  ExperienceSection,
  TestimonialsSection,
  FAQSection,
  ContactSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-secondary selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full flex flex-col">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <PerformanceSection />
        <ServicesSection />
        <CertificationsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
