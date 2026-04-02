"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { Lang } from "@/data/translations";

interface SiteContextType {
  theme: "dark" | "light";
  lang: Lang;
  toggleTheme: () => void;
  toggleLang: () => void;
}

const SiteContext = createContext<SiteContextType>({
  theme: "dark",
  lang: "en",
  toggleTheme: () => {},
  toggleLang: () => {},
});

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", theme === "light");
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("dir", lang === "he" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  return (
    <SiteContext.Provider
      value={{
        theme,
        lang,
        toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
        toggleLang: () => setLang((l) => (l === "en" ? "he" : "en")),
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export const useSite = () => useContext(SiteContext);
