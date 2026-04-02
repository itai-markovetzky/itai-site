"use client";

import { motion } from "framer-motion";

const coreSkills = [
  {
    name: "UiPath",
    level: "Advanced",
    desc: "Enterprise RPA, Document Understanding, AI integrations",
    icon: "🤖",
    color: "cyan",
    wide: true,
  },
  {
    name: "Python",
    level: "Proficient",
    desc: "FastAPI, Pandas, automation scripts, AI pipelines",
    icon: "🐍",
    color: "purple",
  },
  {
    name: "RAG & Agents",
    level: "Builder",
    desc: "LangChain, ChromaDB, Gemini, agentic workflows",
    icon: "🧠",
    color: "cyan",
  },
  {
    name: "Workato",
    level: "Proficient",
    desc: "iPaaS integrations, HTTP connectors, API auth",
    icon: "⚡",
    color: "purple",
  },
  {
    name: "C# / .NET",
    level: "Proficient",
    desc: "NLP code, data transforms, RPA extensions",
    icon: "◈",
    color: "cyan",
  },
  {
    name: "Docker",
    level: "Proficient",
    desc: "Containerisation, docker-compose stacks, CI pipelines",
    icon: "🐳",
    color: "purple",
    wide: true,
  },
];

const alsoKnow = [
  "LangChain", "ChromaDB", "Vector DBs", "Redis",
  "Jenkins", "Git / TFS", "SQL", "REST APIs",
  "JSON Parsing", "ERP / CRM", "Streamlit", "FastAPI",
  "Node.js", "TypeScript", "Linux", "CI/CD",
  "NLP", "Google Gemini", "Pandas", "Agentic AI",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-mono text-cyan text-sm tracking-widest mb-2">
            &gt; skills --list
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">Skills</h3>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {coreSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              viewport={{ once: true }}
              className={`group relative bg-card border rounded-2xl p-5 overflow-hidden
                transition-all duration-300 cursor-default
                ${skill.wide ? "col-span-2" : "col-span-1"}
                ${skill.color === "cyan"
                  ? "border-border hover:border-cyan/50 hover:shadow-[0_0_30px_#00f5ff11]"
                  : "border-border hover:border-purple/50 hover:shadow-[0_0_30px_#7c3aed11]"
                }`}
            >
              {/* Background glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                ${skill.color === "cyan"
                  ? "bg-gradient-to-br from-cyan/5 to-transparent"
                  : "bg-gradient-to-br from-purple/5 to-transparent"
                }`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className={`font-mono text-xs px-2 py-0.5 rounded-full border
                    ${skill.color === "cyan"
                      ? "text-cyan border-cyan/30 bg-cyan/10"
                      : "text-purple border-purple/30 bg-purple/10"
                    }`}>
                    {skill.level}
                  </span>
                </div>
                <h4 className="font-mono font-bold text-foreground mb-1 group-hover:text-cyan transition-colors duration-200">
                  {skill.name}
                </h4>
                <p className="text-foreground/50 text-xs leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Also familiar with */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs text-foreground/40 mb-4 tracking-widest">
            &gt; also_familiar_with[]
          </p>
          <div className="flex flex-wrap gap-2">
            {alsoKnow.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 + i * 0.025 }}
                viewport={{ once: true }}
                className="font-mono text-xs px-3 py-1.5 bg-background border border-border
                  text-foreground/60 rounded-full hover:border-cyan/40 hover:text-cyan
                  transition-all duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
