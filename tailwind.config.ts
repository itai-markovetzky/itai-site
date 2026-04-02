import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        foreground: "#e2e8f0",
        cyan: {
          DEFAULT: "#00f5ff",
          dim: "#00c4cc",
        },
        purple: {
          DEFAULT: "#7c3aed",
          dim: "#5b21b6",
        },
        matrix: "#00ff41",
        card: "#0f0f1a",
        border: "#1a1a2e",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      animation: {
        "blink": "blink 1s step-end infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "glitch": "glitch 0.3s ease-in-out",
        "matrix-rain": "matrix-rain 0.1s linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 5px #00f5ff, 0 0 10px #00f5ff" },
          "50%": { boxShadow: "0 0 20px #00f5ff, 0 0 40px #00f5ff" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
