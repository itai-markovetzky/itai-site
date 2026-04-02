"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    icon: "{ }",
    skills: ["Python", "C#", ".NET", "SQL", "JavaScript"],
  },
  {
    category: "Automation & RPA",
    icon: "⚙",
    skills: ["UiPath (Advanced)", "Workato", "Document Understanding", "FastAPI", "Streamlit"],
  },
  {
    category: "AI / ML",
    icon: "🤖",
    skills: ["RAG", "Agentic Workflows", "LangChain", "ChromaDB", "Google Gemini"],
  },
  {
    category: "Infrastructure",
    icon: "🚀",
    skills: ["Docker", "Redis", "Jenkins", "Git", "CI/CD"],
  },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">{group.icon}</span>
                <h4 className="font-mono text-cyan text-sm font-semibold">
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
                      delay: groupIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    className="font-mono text-xs px-3 py-1.5 bg-background border border-cyan/20 text-foreground/80 rounded-full hover:border-cyan hover:text-cyan hover:shadow-[0_0_10px_#00f5ff33] transition-all duration-200 cursor-default"
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
