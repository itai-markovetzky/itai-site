"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import TerminalWidget from "./TerminalWidget";

const ParticleBackground = dynamic(() => import("./ParticleBackground"), {
  ssr: false,
});

const TITLES = ["Senior Automation Engineer", "Integration Developer", "AI Systems Builder", "Tech Lead in the Making"];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), speed);
      return () => clearTimeout(t);
    }

    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
    }

    setDisplayed(current.slice(0, charIndex));
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  useEffect(() => {
    setDisplayed(words[wordIndex].slice(0, charIndex));
  }, [charIndex, wordIndex, words]);

  return displayed;
}

function TypewriterTitle() {
  const title = useTypewriter(TITLES);
  return (
    <div className="font-mono text-xl md:text-2xl text-foreground/80 mb-8 h-8">
      <span className="text-purple">&gt; </span>
      <span>{title}</span>
      <span className="animate-blink text-cyan">|</span>
    </div>
  );
}

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10 pointer-events-none" />

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-black/40 border border-purple/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
          <span className="text-purple text-xs">⚡</span>
          <span className="font-mono text-xs text-foreground/70">
            Automation · Integration · AI
          </span>
        </div>

        {/* Name */}
        <h1 className="font-mono text-5xl md:text-7xl font-bold mb-4 glow-cyan text-cyan">
          Itai Markovetzky
        </h1>

        {/* Typewriter — isolated to avoid re-rendering heavy children */}
        <TypewriterTitle />

        {/* Terminal widget */}
        <div className="flex justify-center mb-10">
          <TerminalWidget />
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToProjects}
            className="font-mono px-8 py-3 bg-cyan text-background font-bold rounded hover:bg-cyan/80 transition-all duration-200 hover:shadow-[0_0_20px_#00f5ff66]"
          >
            See my work
          </button>
          <a
            href="/cv.pdf"
            download="Itai_Markovetzky_CV.pdf"
            className="font-mono px-8 py-3 border border-cyan text-cyan rounded hover:bg-cyan/10 transition-all duration-200"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
