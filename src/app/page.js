import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen px-8 py-24">
      <div className="container px-12 py-4 mx-auto mt-24">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
