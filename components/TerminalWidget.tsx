"use client";

import { useState, useEffect } from "react";

const LINES = [
  "> initializing Itai.exe...",
  "> loading skills... ✓",
  "> connecting to AI core... ✓",
  "> ready.",
];

export default function TerminalWidget() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (currentLine >= LINES.length) {
      setDone(true);
      return;
    }

    const line = LINES[currentLine];
    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setCurrentChar((c) => c + 1);
      }, 35);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, line]);
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, done]);

  const currentTyping =
    currentLine < LINES.length ? LINES[currentLine].slice(0, currentChar) : "";

  return (
    <div className="font-mono text-sm bg-black/60 border border-border rounded-lg p-4 w-full max-w-md backdrop-blur-sm">
      {/* Terminal header */}
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-foreground/40 text-xs">itai@portfolio ~ </span>
      </div>

      {/* Lines */}
      <div className="space-y-1">
        {displayedLines.map((line, i) => (
          <div key={i} className="text-matrix">
            {line}
          </div>
        ))}
        {!done && (
          <div className="text-matrix">
            {currentTyping}
            <span className="animate-blink">▊</span>
          </div>
        )}
        {done && (
          <div className="text-cyan mt-1">
            <span className="animate-blink">▊</span>
          </div>
        )}
      </div>
    </div>
  );
}
