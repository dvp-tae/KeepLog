import React, { createContext, useContext, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { DARK_THEME, LIGHT_THEME, type Theme } from './theme';

type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useColorScheme();
  // No persistence yet (would need @react-native-async-storage/async-storage,
  // a native module not installed here) — manual toggles reset to the system
  // preference on next app launch. See front/CLAUDE.md follow-up notes.
  const [manualMode, setManualMode] = useState<ThemeMode | null>(null);

  const themeMode: ThemeMode = manualMode ?? (systemScheme === 'dark' ? 'dark' : 'light');
  const theme = themeMode === 'dark' ? DARK_THEME : LIGHT_THEME;

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      themeMode,
      toggleTheme: () => setManualMode(themeMode === 'dark' ? 'light' : 'dark'),
    }),
    [theme, themeMode],
  );

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useAppTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useAppTheme must be used within a ThemeProvider');
  }
  return context;
}
