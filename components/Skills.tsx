"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    icon: "{ }",
    color: "cyan",
    skills: ["Python", "C#", ".NET", "SQL", "JavaScript", "TypeScript"],
  },
  {
    category: "Automation & RPA",
    icon: "⚙",
    color: "purple",
    skills: ["UiPath (Advanced)", "Workato", "Document Understanding", "FastAPI", "Streamlit", "REST APIs"],
  },
  {
    category: "AI / ML",
    icon: "🤖",
    color: "cyan",
    skills: ["RAG", "Agentic Workflows", "LangChain", "ChromaDB", "Google Gemini", "NLP"],
  },
  {
    category: "Infrastructure",
    icon: "🚀",
    color: "purple",
    skills: ["Docker", "Redis", "Jenkins", "Git", "CI/CD", "Linux"],
  },
];

const featuredSkills = [
  { name: "UiPath", level: 95 },
  { name: "Python", level: 88 },
  { name: "Workato", level: 85 },
  { name: "RAG / AI", level: 80 },
  { name: "C# / .NET", level: 82 },
  { name: "Docker", level: 75 },
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

        {/* Proficiency bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {featuredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg px-5 py-4"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-sm text-foreground/80">{skill.name}</span>
                <span className="font-mono text-xs text-cyan">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-border rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: i * 0.08 + 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan to-purple"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill badge groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 hover:border-cyan/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">{group.icon}</span>
                <h4 className={`font-mono text-sm font-semibold ${group.color === "cyan" ? "text-cyan" : "text-purple"}`}>
                  {group.category}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: groupIndex * 0.1 + skillIndex * 0.04,
                    }}
                    viewport={{ once: true }}
                    className={`font-mono text-xs px-3 py-1.5 bg-background border rounded-full transition-all duration-200 cursor-default
                      ${group.color === "cyan"
                        ? "border-cyan/20 text-foreground/70 hover:border-cyan hover:text-cyan hover:shadow-[0_0_10px_#00f5ff33]"
                        : "border-purple/20 text-foreground/70 hover:border-purple hover:text-purple hover:shadow-[0_0_10px_#7c3aed33]"
                      }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
