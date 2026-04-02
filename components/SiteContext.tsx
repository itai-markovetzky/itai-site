"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface SiteContextType {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

const SiteContext = createContext<SiteContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", theme === "light");
  }, [theme]);

  return (
    <SiteContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export const useSite = () => useContext(SiteContext);
