"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("");

  const applyTheme = (theme: string) => {
    if (theme === "system") {
      const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      theme = isDarkMode ? "dark" : "light";
    }
    setMode(theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "system";
    applyTheme(storedTheme);

    const systemThemeListener = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      if (localStorage.getItem("theme") === "system") {
        applyTheme("system");
      }
    };
    systemThemeListener.addEventListener("change", handleSystemThemeChange);

    return () => systemThemeListener.removeEventListener("change", handleSystemThemeChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, setMode: applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
