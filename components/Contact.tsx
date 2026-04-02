"use client";

import { motion } from "framer-motion";

const links = [
  {
    label: "Email",
    value: "itai.markovetzky@gmail.com",
    href: "mailto:itai.markovetzky@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/itai-markovetzky",
    href: "https://github.com/itai-markovetzky",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/itai-markovetzky",
    href: "https://linkedin.com/in/itai-markovetzky",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-mono text-cyan text-sm tracking-widest mb-2">
            &gt; contact --reach-out
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h3>
          <p className="text-foreground/60 mb-12 max-w-md mx-auto">
            Open to collaborations, interesting projects, or just a good
            conversation about AI and automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 hover:border-cyan/40 hover:shadow-[0_0_20px_#00f5ff11] transition-all duration-300 group"
              >
                <span className="text-foreground/60 group-hover:text-cyan transition-colors">
                  {link.icon}
                </span>
                <span className="font-mono text-sm text-foreground/80 group-hover:text-cyan transition-colors">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="text-center mt-16 font-mono text-xs text-foreground/30 space-y-2">
        <div>
          <span>© 2026 Itai Markovetzky</span>
          <span className="mx-2 text-cyan">·</span>
          <span>Built with Next.js + ❤️</span>
        </div>
        <div className="text-foreground/20 hover:text-foreground/50 transition-colors cursor-default select-none">
          psst... try ↑ ↑ ↓ ↓ ← → ← → B A
        </div>
      </div>
    </section>
  );
}
