import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="container flex flex-col min-h-screen">
      <Navbar />
      <div class="container mt-24 px-12 py-4 mx-auto bg-black">
        <HeroSection />
      </div>
    </main>
  );
}
