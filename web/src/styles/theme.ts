export const LIGHT_THEME = {
  colors: {
    background: "#f5f5f7",
    surface: "#ffffff",
    surfaceSoft: "#eef2f7",
    border: "rgba(29, 29, 31, 0.12)",
    text: "#1d1d1f",
    muted: "rgba(29, 29, 31, 0.68)",

    primary00: "#f5f9ff",
    primary01: "#edf4ff",
    primary02: "#dbe9ff",
    primary03: "#c8dcff",
    primary04: "#adc9ff",
    primary05: "#8bb2ff",
    primary06: "#6798f0",
    primary07: "#3e7ae0",
    primary08: "#0071e3",
    primary09: "#0066cc",
    primary10: "#0054b3",

    gray05: "#ffffff",
    gray10: "#f2f2f4",
    gray20: "#e3e6eb",
    gray30: "#c2c6cf",
    gray40: "#8f96a3",
    gray50: "#6e7582",
    gray60: "#4a505c",
    gray70: "#2f3440",
    gray80: "#1f2430",
    gray90: "#12161f",
    gray100: "#090c12",

    tagBg: "#edf4ff",
    tagText: "#0066cc",
  },

  typography: {
    h1: {
      fontSize: "3.5rem",
      fontWeight: 600,
      lineHeight: 1.07,
      letterSpacing: "-0.04em",
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 600,
      lineHeight: 1.12,
      letterSpacing: "-0.03em",
    },
    h3: {
      fontSize: "1.375rem",
      fontWeight: 600,
      lineHeight: 1.24,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontSize: "1.125rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "-0.01em",
    },
    body: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.7,
      letterSpacing: "-0.01em",
    },
    button: {
      fontSize: "0.95rem",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
    },
    caption: {
      fontSize: "0.8125rem",
      fontWeight: 500,
      lineHeight: 1.45,
      letterSpacing: "0.01em",
    },
    mobileCaption: {
      fontSize: "1.125rem",
      fontWeight: 600,
      lineHeight: 1.35,
      letterSpacing: "-0.02em",
    },
  },
};

export const DARK_THEME = {
  colors: {
    background: "#000000",
    surface: "#111111",
    surfaceSoft: "#1c1c1e",
    border: "rgba(255, 255, 255, 0.12)",
    text: "#f5f5f7",
    muted: "rgba(245, 245, 247, 0.72)",

    primary00: "#0b1526",
    primary01: "#10203a",
    primary02: "#143055",
    primary03: "#184274",
    primary04: "#1b5697",
    primary05: "#1e6bbb",
    primary06: "#2997ff",
    primary07: "#66b6ff",
    primary08: "#8eceff",
    primary09: "#bce1ff",
    primary10: "#d9efff",

    gray05: "#0a0a0c",
    gray10: "#111113",
    gray20: "#1a1a1d",
    gray30: "#2b2b30",
    gray40: "#4a4a51",
    gray50: "#6d6d76",
    gray60: "#9696a0",
    gray70: "#babac2",
    gray80: "#d7d7dc",
    gray90: "#ececef",
    gray100: "#ffffff",

    tagBg: "rgba(41, 151, 255, 0.14)",
    tagText: "#8eceff",
  },

  typography: {
    h1: {
      fontSize: "3.5rem",
      fontWeight: 600,
      lineHeight: 1.07,
      letterSpacing: "-0.04em",
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 600,
      lineHeight: 1.12,
      letterSpacing: "-0.03em",
    },
    h3: {
      fontSize: "1.375rem",
      fontWeight: 600,
      lineHeight: 1.24,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontSize: "1.125rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "-0.01em",
    },
    body: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.7,
      letterSpacing: "-0.01em",
    },
    button: {
      fontSize: "0.95rem",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
    },
    caption: {
      fontSize: "0.8125rem",
      fontWeight: 500,
      lineHeight: 1.45,
      letterSpacing: "0.01em",
    },
    mobileCaption: {
      fontSize: "1.125rem",
      fontWeight: 600,
      lineHeight: 1.35,
      letterSpacing: "-0.02em",
    },
  },
};

export type Theme = typeof LIGHT_THEME;
export type ColorsKey = keyof typeof LIGHT_THEME.colors;
export type TypographyKey = keyof typeof LIGHT_THEME.typography;
