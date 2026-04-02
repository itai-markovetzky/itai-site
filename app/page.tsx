import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import GitHubStats from "@/components/GitHubStats";
import NowCard from "@/components/NowCard";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ChatWidget from "@/components/ChatWidget";
import KonamiEasterEgg from "@/components/KonamiEasterEgg";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <GitHubStats />
        <NowCard />
        <Skills />
        <Contact />
      </main>
      <ChatWidget />
      <KonamiEasterEgg />
    </>
  );
}
