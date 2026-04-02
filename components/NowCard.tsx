"use client";

import { motion } from "framer-motion";
import { nowText } from "@/data/now";

export default function NowCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto px-6 py-4"
    >
      <div className="bg-card border border-cyan/20 rounded-xl px-6 py-4 flex items-center gap-4 shadow-[0_0_20px_#00f5ff0a]">
        <span className="font-mono text-cyan text-lg">&gt;</span>
        <div>
          <span className="font-mono text-xs text-foreground/40 block mb-0.5">
            currently building
          </span>
          <span className="font-mono text-sm text-cyan">{nowText}</span>
        </div>
        <span className="ml-auto w-2 h-2 rounded-full bg-cyan animate-pulse" />
      </div>
    </motion.div>
  );
}
