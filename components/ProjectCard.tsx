"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`group relative bg-card border border-border rounded-xl p-6 hover:border-cyan/40 transition-all duration-300 hover:shadow-[0_0_30px_#00f5ff11] ${
        featured ? "col-span-full" : ""
      }`}
    >
      {featured && (
        <span className="inline-block font-mono text-xs bg-cyan/20 text-cyan border border-cyan/30 rounded-full px-3 py-1 mb-3">
          ⭐ Featured
        </span>
      )}

      <div className={`${featured ? "md:flex md:gap-8 md:items-start" : ""}`}>
        <div className={`${featured ? "flex-1" : ""}`}>
          <h3
            className="glitch-text font-mono text-lg font-bold text-foreground group-hover:text-cyan transition-colors duration-200 mb-2"
            data-text={project.name}
          >
            {project.name}
          </h3>
          <p className="text-foreground/60 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        <div className={`${featured ? "md:flex-shrink-0 md:text-right" : ""}`}>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs bg-purple/20 text-purple border border-purple/30 rounded px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-cyan border border-cyan/40 rounded px-3 py-1.5 hover:bg-cyan/10 transition-colors"
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
