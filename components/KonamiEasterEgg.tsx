"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const KONAMI = [
  "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
  "b","a",
];

export default function KonamiEasterEgg() {
  const [active, setActive] = useState(false);
  const [phase, setPhase] = useState<"rain" | "message" | "idle">("idle");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sequenceRef = useRef<string[]>([]);
  const animFrameRef = useRef<number>(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const startEasterEgg = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    setActive(true);
    setPhase("rain");
    timersRef.current.push(setTimeout(() => setPhase("message"), 3000));
    timersRef.current.push(setTimeout(() => {
      setActive(false);
      setPhase("idle");
    }, 6000));
  }, []);

  useEffect(() => {
    return () => timersRef.current.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const key = e.key;
      sequenceRef.current = [...sequenceRef.current, key].slice(-KONAMI.length);
      if (sequenceRef.current.join(",") === KONAMI.join(",")) {
        startEasterEgg();
        sequenceRef.current = [];
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [startEasterEgg]);

  // Matrix rain canvas
  useEffect(() => {
    if (phase !== "rain" || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()ｱｲｳｴｵｶｷｸｹｺ";
    const fontSize = 14;
    const cols = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(cols).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff41";
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [phase]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {phase === "rain" && (
        <canvas ref={canvasRef} className="absolute inset-0" />
      )}
      {phase === "message" && (
        <div className="relative z-10 text-center font-mono">
          <div className="text-matrix text-4xl mb-4 glow-cyan">
            CHEAT CODE ACTIVATED
          </div>
          <div className="text-matrix text-lg">
            &gt; nice one. you know your classics.
          </div>
          <div className="text-matrix/60 text-sm mt-2">
            &gt; dismissing in 3s...
          </div>
        </div>
      )}
    </div>
  );
}
