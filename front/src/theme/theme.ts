// Ported from the removed web/src/styles/theme.ts (Emotion CSS-in-JS on Next.js).
// Colors are copied 1:1 (pure data, platform-agnostic). Typography values were
// converted from CSS units to RN's absolute-number model: rem -> px (1rem = 16),
// unitless line-height -> px (multiplier * fontSize), em letter-spacing -> px
// (em * fontSize), since React Native's StyleSheet has no relative CSS units.

const LIGHT_COLORS = {
  background: '#f5f5f7',
  surface: '#ffffff',
  surfaceSoft: '#eef2f7',
  border: 'rgba(29, 29, 31, 0.12)',
  text: '#1d1d1f',
  muted: 'rgba(29, 29, 31, 0.68)',

  primary00: '#f5f9ff',
  primary01: '#edf4ff',
  primary02: '#dbe9ff',
  primary03: '#c8dcff',
  primary04: '#adc9ff',
  primary05: '#8bb2ff',
  primary06: '#6798f0',
  primary07: '#3e7ae0',
  primary08: '#0071e3',
  primary09: '#0066cc',
  primary10: '#0054b3',

  gray05: '#ffffff',
  gray10: '#f2f2f4',
  gray20: '#e3e6eb',
  gray30: '#c2c6cf',
  gray40: '#8f96a3',
  gray50: '#6e7582',
  gray60: '#4a505c',
  gray70: '#2f3440',
  gray80: '#1f2430',
  gray90: '#12161f',
  gray100: '#090c12',

  tagBg: '#edf4ff',
  tagText: '#0066cc',
};

const DARK_COLORS: Record<keyof typeof LIGHT_COLORS, string> = {
  background: '#000000',
  surface: '#111111',
  surfaceSoft: '#1c1c1e',
  border: 'rgba(255, 255, 255, 0.12)',
  text: '#f5f5f7',
  muted: 'rgba(245, 245, 247, 0.72)',

  primary00: '#0b1526',
  primary01: '#10203a',
  primary02: '#143055',
  primary03: '#184274',
  primary04: '#1b5697',
  primary05: '#1e6bbb',
  primary06: '#2997ff',
  primary07: '#66b6ff',
  primary08: '#8eceff',
  primary09: '#bce1ff',
  primary10: '#d9efff',

  gray05: '#0a0a0c',
  gray10: '#111113',
  gray20: '#1a1a1d',
  gray30: '#2b2b30',
  gray40: '#4a4a51',
  gray50: '#6d6d76',
  gray60: '#9696a0',
  gray70: '#babac2',
  gray80: '#d7d7dc',
  gray90: '#ececef',
  gray100: '#ffffff',

  tagBg: 'rgba(41, 151, 255, 0.14)',
  tagText: '#8eceff',
};

// fontWeight is a string per RN's Text style type ('400' | '600' | ... | 'bold').
const TYPOGRAPHY = {
  h1: { fontSize: 56, fontWeight: '600', lineHeight: 60, letterSpacing: -2.24 },
  h2: { fontSize: 36, fontWeight: '600', lineHeight: 40.32, letterSpacing: -1.08 },
  h3: { fontSize: 22, fontWeight: '600', lineHeight: 27.28, letterSpacing: -0.44 },
  h4: { fontSize: 18, fontWeight: '400', lineHeight: 27, letterSpacing: -0.18 },
  body: { fontSize: 16, fontWeight: '400', lineHeight: 27.2, letterSpacing: -0.16 },
  button: { fontSize: 15.2, fontWeight: '500', lineHeight: 18.24, letterSpacing: -0.15 },
  caption: { fontSize: 13, fontWeight: '500', lineHeight: 18.85, letterSpacing: 0.13 },
  mobileCaption: { fontSize: 18, fontWeight: '600', lineHeight: 24.3, letterSpacing: -0.36 },
} as const;

// Original web tokens were CSS custom properties (--gap-N / --padding-N / --radius-N)
// all defined as N * 4px. Reproduced here as plain numeric scales.
export const SPACING = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  40: 160,
} as const;

export const RADIUS = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  25: 100,
} as const;

export const LIGHT_THEME = {
  colors: LIGHT_COLORS,
  typography: TYPOGRAPHY,
  spacing: SPACING,
  radius: RADIUS,
};

export const DARK_THEME = {
  colors: DARK_COLORS,
  typography: TYPOGRAPHY,
  spacing: SPACING,
  radius: RADIUS,
};

export type Theme = typeof LIGHT_THEME;
export type ColorsKey = keyof typeof LIGHT_COLORS;
export type TypographyKey = keyof typeof TYPOGRAPHY;
export type SpacingKey = keyof typeof SPACING;
export type RadiusKey = keyof typeof RADIUS;
