import { EmotionProvider } from "@/providers/EmotionProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "@/styles/index.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";

const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/Pretendard/Pretendard-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard/Pretendard-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard/Pretendard-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard/Pretendard-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard/Pretendard-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard/Pretendard-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard/Pretendard-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard/Pretendard-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard/Pretendard-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

const suit = localFont({
  src: [
    {
      path: "../../public/fonts/Suit/SUIT-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Suit/SUIT-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Suit/SUIT-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Suit/SUIT-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Suit/SUIT-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Suit/SUIT-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Suit/SUIT-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Suit/SUIT-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Suit/SUIT-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-suit",
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
    <html
      lang="ko"
      className={`${pretendard.variable} ${suit.variable}`}
      suppressHydrationWarning
    >
      <body>
        <EmotionProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </EmotionProvider>
      </body>
    </html>
  );
}
