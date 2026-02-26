export const LIGHT_THEME = {
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    surfaceSoft: "#F8FAFF",
    border: "#E0E6F0",
    text: "#1c1c1c",
    muted: "#6B7280",

    primary00: "#F8FCFF",
    primary01: "#EEF7FF",
    primary02: "#E3F1FF",
    primary03: "#D5E8FF",
    primary04: "#C5DDFF",
    primary05: "#A5C8FF",
    primary06: "#7FAEFF",
    primary07: "#5A94F2",
    primary08: "#3B82F6",
    primary09: "#2563EB",
    primary10: "#1D4ED8",

    gray05: "#F9FAFB",
    gray10: "#E5E7EB",
    gray20: "#D1D5DB",
    gray30: "#9CA3AF",
    gray40: "#6B7280",
    gray50: "#4B5563",
    gray60: "#374151",
    gray70: "#1F2933",
    gray80: "#111827",
    gray90: "#020617",
    gray100: "#02040B",

    tagBg: "#e6f2ff",
    tagText: "#1f54a3",
  },

  typography: {
    h1: {
      fontSize: "2.25rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "1rem",
      fontWeight: "regular",
    },
    body: {
      fontSize: "0.875rem",
      fontWeight: "regular",
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: "bold",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: "regular",
    },
    mobileCaption: {
      fontSize: "1.25rem",
      fontWeight: "bold",
    },
  },
};

export const DARK_THEME = {
  colors: {
    background: "#1b1f28",
    surface: "#0B1120",
    surfaceSoft: "#111827",
    border: "#1F2937",
    text: "#ffffff",
    muted: "#9CA3AF",

    primary00: "#0B1120",
    primary01: "#111827",
    primary02: "#1E293B",
    primary03: "#1D3A5D",
    primary04: "#1E40AF",
    primary05: "#2563EB",
    primary06: "#3B82F6",
    primary07: "#60A5FA",
    primary08: "#93C5FD",
    primary09: "#BFDBFE",
    primary10: "#DBEAFE",

    gray05: "#020617",
    gray10: "#030712",
    gray20: "#02081E",
    gray30: "#111827",
    gray40: "#1F2937",
    gray50: "#374151",
    gray60: "#4B5563",
    gray70: "#6B7280",
    gray80: "#9CA3AF",
    gray90: "#E5E7EB",
    gray100: "#F9FAFB",

    tagBg: "#2b303b",
    tagText: "#bddeff",
  },

  typography: {
    h1: {
      fontSize: "2.25rem", // 36px
      fontWeight: "bold",
    },
    h2: {
      fontSize: "1.5rem", // 24px
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1.25rem", // 20px
      fontWeight: "bold",
    },
    h4: {
      fontSize: "1rem", // 16px
      fontWeight: "regular",
    },
    body: {
      fontSize: "0.875rem", // 14px
      fontWeight: "regular",
    },
    button: {
      fontSize: "0.875rem", // 14px
      fontWeight: "bold",
    },
    caption: {
      fontSize: "0.75rem", // 12px
      fontWeight: "regular",
    },
    mobileCaption: {
      fontSize: "1.25rem", // 20px
      fontWeight: "bold",
    },
  },
};

export type Theme = typeof LIGHT_THEME;
export type ColorsKey = keyof typeof LIGHT_THEME.colors;
export type TypographyKey = keyof typeof LIGHT_THEME.typography;
