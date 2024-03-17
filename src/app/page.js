import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen px-8 py-24">
        <HeroSection />
    </main>
  );
}
