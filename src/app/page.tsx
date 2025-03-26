import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main id="home" className="relative flex min-h-screen flex-col">
      <div className="flex-1 pt-16">
        <div className="min-h-screen">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </main>
  );
}
