import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
export default function Home() {
  return (
   <main>
    <HeroSection />
    <ProjectSection />
    <SkillsSection />
    <ExperienceSection />
    <AboutSection />
   </main>
  );
}
