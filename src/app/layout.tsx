import { LayoutShell } from "@/app/layoutShell";
import { EmotionProvider } from "@/providers/EmotionProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "@/styles/index.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";

const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/Pretendard-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Frontend Experiment Lab",
  description: "프론트엔드 개발 실험과 경험을 기록하는 포트폴리오",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={pretendard.variable} suppressHydrationWarning>
      <body>
        <EmotionProvider>
          <ThemeProvider>
            <LayoutShell>{children}</LayoutShell>
          </ThemeProvider>
        </EmotionProvider>
      </body>
    </html>
  );
}
