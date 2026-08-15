import { DARK_THEME } from "@/styles/theme";
import "@emotion/react";

type AppTheme = typeof DARK_THEME & { isMobile: boolean };
declare module "@emotion/react" {
  export interface Theme extends AppTheme {}
}
