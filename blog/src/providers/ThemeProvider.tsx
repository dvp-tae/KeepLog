"use client";

import { DARK_THEME, LIGHT_THEME, type Theme } from "@/styles/theme";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  themeMode: ThemeMode;
  isMobile: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as ThemeMode | null;
    if (savedTheme) {
      setThemeMode(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setThemeMode(prefersDark ? "dark" : "light");
    }

    const mobileCookie = getCookie("isMobile");
    if (mobileCookie !== null) {
      setIsMobile(mobileCookie === "true");
    } else {
      const mobileRegex = /android|iphone|ipad|ipod|blackberry|opera mini/i;
      setIsMobile(mobileRegex.test(navigator.userAgent));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", themeMode);
      if (themeMode === "dark") {
        document.body.classList.add("dark");
        document.documentElement.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
        document.documentElement.classList.remove("dark");
      }
    }
  }, [themeMode, mounted]);

  const toggleTheme = () => {
    document.body.classList.add("theme-changing");
    document.documentElement.classList.add("theme-changing");

    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));

    window.setTimeout(() => {
      document.body.classList.remove("theme-changing");
      document.documentElement.classList.remove("theme-changing");
    }, 280);
  };

  const baseTheme = themeMode === "light" ? LIGHT_THEME : DARK_THEME;
  const theme = {
    ...baseTheme,
    isMobile,
  };

  return (
    <ThemeContext.Provider value={{ theme, themeMode, isMobile, toggleTheme }}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
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
