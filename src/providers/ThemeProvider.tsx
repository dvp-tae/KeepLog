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

// 쿠키에서 값을 읽는 헬퍼 함수
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
    // localStorage에서 테마 설정 불러오기
    const savedTheme = localStorage.getItem("theme") as ThemeMode | null;
    if (savedTheme) {
      setThemeMode(savedTheme);
    } else {
      // 시스템 설정 확인
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setThemeMode(prefersDark ? "dark" : "light");
    }

    // middleware에서 설정한 쿠키에서 isMobile 값 읽기
    const mobileCookie = getCookie("isMobile");
    if (mobileCookie !== null) {
      setIsMobile(mobileCookie === "true");
    } else {
      // 쿠키가 없는 경우 fallback으로 클라이언트에서 감지
      const mobileRegex = /android|iphone|ipad|ipod|blackberry|opera mini/i;
      setIsMobile(mobileRegex.test(navigator.userAgent));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", themeMode);
      // body에 클래스 추가/제거로 다크모드 전환
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
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const baseTheme = themeMode === "light" ? LIGHT_THEME : DARK_THEME;
  const theme = {
    ...baseTheme,
    isMobile,
  };

  // SSR 시에도 기본 theme 제공 (hydration mismatch 방지)
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
