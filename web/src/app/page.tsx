"use client";

import Button from "@/components/common/Button";
import Text from "@/components/common/Text";
import Flex from "@/components/layout/Flex";
import Wrapper from "@/components/layout/Wrapper";
import { useTheme } from "@/providers/ThemeProvider";
import { ColorsKey, TypographyKey } from "@/styles/theme";

const FONT_WEIGHTS: { label: string; weight: number }[] = [
  { label: "Thin", weight: 100 },
  { label: "ExtraLight", weight: 200 },
  { label: "Light", weight: 300 },
  { label: "Regular", weight: 400 },
  { label: "Medium", weight: 500 },
  { label: "SemiBold", weight: 600 },
  { label: "Bold", weight: 700 },
  { label: "ExtraBold", weight: 800 },
  { label: "Black / Heavy", weight: 900 },
];

const FONT_SAMPLE = "다람쥐 헌 쳇바퀴에 Ag 가나다 123";

const BUTTON_SIZES = ["x-small", "small", "medium", "large"] as const;

export default function HomePage() {
  const { theme, themeMode, toggleTheme } = useTheme();
  const colorEntries = Object.entries(theme.colors) as [ColorsKey, string][];
  const typographyEntries = Object.entries(theme.typography) as [
    TypographyKey,
    (typeof theme.typography)[TypographyKey],
  ][];

  return (
    <Wrapper maxWidth={960} center padding="var(--padding-8)">
      <Flex direction="column" gap="var(--gap-12)">
        <Flex justify="space-between" align="center">
          <Text variant="h1">Design System</Text>
          <Button color="primary08" size="medium" onClick={toggleTheme}>
            {themeMode === "light" ? "Dark mode" : "Light mode"}
          </Button>
        </Flex>

        <section>
          <Text variant="h3" color="muted">
            Typography
          </Text>
          <Flex direction="column" gap="var(--gap-6)">
            {typographyEntries.map(([key, style]) => (
              <Flex key={key} direction="column" gap="var(--gap-1)">
                <Text variant="caption" color="muted">
                  {key} · {style.fontSize} / {style.fontWeight}
                </Text>
                <Text variant={key}>{FONT_SAMPLE}</Text>
              </Flex>
            ))}
          </Flex>
        </section>

        <section>
          <Text variant="h3" color="muted">
            Fonts — Pretendard vs SUIT
          </Text>
          <Flex gap="var(--gap-8)" wrap="wrap">
            <Flex.Item flex={1}>
              <Flex direction="column" gap="var(--gap-3)">
                <Text variant="button">Pretendard</Text>
                {FONT_WEIGHTS.map(({ label, weight }) => (
                  <span
                    key={label}
                    style={{
                      fontFamily: "var(--font-pretendard)",
                      fontWeight: weight,
                      fontSize: "1.15rem",
                      color: theme.colors.text,
                    }}
                  >
                    {label} {weight} — {FONT_SAMPLE}
                  </span>
                ))}
              </Flex>
            </Flex.Item>
            <Flex.Item flex={1}>
              <Flex direction="column" gap="var(--gap-3)">
                <Text variant="button">SUIT</Text>
                {FONT_WEIGHTS.map(({ label, weight }) => (
                  <span
                    key={label}
                    style={{
                      fontFamily: "var(--font-suit)",
                      fontWeight: weight,
                      fontSize: "1.15rem",
                      color: theme.colors.text,
                    }}
                  >
                    {label} {weight} — {FONT_SAMPLE}
                  </span>
                ))}
              </Flex>
            </Flex.Item>
          </Flex>
        </section>

        <section>
          <Text variant="h3" color="muted">
            Color tokens ({themeMode})
          </Text>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
              gap: "1rem",
              marginTop: "var(--gap-4)",
            }}
          >
            {colorEntries.map(([key, value]) => (
              <Flex key={key} direction="column" gap="var(--gap-2)">
                <div
                  style={{
                    height: 64,
                    borderRadius: "var(--radius-3)",
                    background: value,
                    border: `1px solid ${theme.colors.border}`,
                  }}
                />
                <Text variant="caption">{key}</Text>
                <Text variant="caption" color="muted">
                  {value}
                </Text>
              </Flex>
            ))}
          </div>
        </section>

        <section>
          <Text variant="h3" color="muted">
            Buttons
          </Text>
          <Flex gap="var(--gap-4)" wrap="wrap">
            {BUTTON_SIZES.map((size) => (
              <Button key={size} size={size} color="primary08" selected>
                {size}
              </Button>
            ))}
            {BUTTON_SIZES.map((size) => (
              <Button key={`${size}-outline`} size={size} color="primary08">
                {size}
              </Button>
            ))}
          </Flex>
        </section>
      </Flex>
    </Wrapper>
  );
}
