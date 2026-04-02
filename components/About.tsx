"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-cyan text-sm tracking-widest mb-2">
            &gt; about.txt
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">About Me</h3>

          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2 space-y-4 text-foreground/80 text-lg leading-relaxed">
              <p>
                I&apos;m Itai Markovetzky — an Automation & Integration Developer
                with a passion for building intelligent systems that eliminate
                repetitive work and unlock real business value.
              </p>
              <p>
                I specialize in enterprise-grade RPA, API-driven integrations,
                and AI-powered automation — combining tools like UiPath, Workato,
                and LangChain with hands-on Python and C# development. I hold a
                B.Sc. in Computer Science and bring a sharp, engineering-first
                mindset to every problem I tackle.
              </p>
              <p>
                When I&apos;m not automating something, you&apos;ll probably
                find me gaming.
              </p>
            </div>

            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 rounded-full px-4 py-2">
                <span className="text-purple">⚡</span>
                <span className="font-mono text-sm text-purple font-semibold">
                  AI Enthusiast
                </span>
              </div>

              <div className="space-y-2 font-mono text-sm text-foreground/60">
                <div className="flex items-center gap-2">
                  <span className="text-cyan">&gt;</span>
                  <span>RPA / UiPath expert</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan">&gt;</span>
                  <span>Agentic AI builder</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan">&gt;</span>
                  <span>Python & C# dev</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan">&gt;</span>
                  <span>Docker & CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
