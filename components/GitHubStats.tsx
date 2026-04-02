"use client";

import { motion } from "framer-motion";

export default function GitHubStats() {
  const username = "itai-markovetzky";
  const theme = "transparent";
  const titleColor = "00f5ff";
  const textColor = "e2e8f0";
  const iconColor = "7c3aed";
  const borderColor = "1a1a2e";
  const bgColor = "0f0f1a";

  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&title_color=${titleColor}&text_color=${textColor}&icon_color=${iconColor}&border_color=${borderColor}&bg_color=${bgColor}&hide_border=false&count_private=true`;
  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}&title_color=${titleColor}&text_color=${textColor}&border_color=${borderColor}&bg_color=${bgColor}&hide_border=false`;

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-mono text-cyan text-sm tracking-widest mb-2">
            &gt; git log --stat
          </h2>
          <h3 className="text-3xl font-bold mb-10">GitHub Activity</h3>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={statsUrl}
              alt="GitHub Stats"
              className="rounded-xl border border-border max-w-full"
              loading="lazy"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={langsUrl}
              alt="Top Languages"
              className="rounded-xl border border-border max-w-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
