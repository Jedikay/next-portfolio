import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start w-full min-h-screen px-8 py-24">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <EmailSection />
    </main>
  );
}
