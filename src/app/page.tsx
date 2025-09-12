import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { Education } from "@/components/landing/education";
import { Experience } from "@/components/landing/experience";
import { Skills } from "@/components/landing/skills";
import { Projects } from "@/components/landing/projects";
import { Certifications } from "@/components/landing/certifications";
import { LanguagesAndQualities } from "@/components/landing/languages-and-qualities";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <LanguagesAndQualities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
