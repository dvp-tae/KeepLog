import 'styled-components/native';
import type { Theme as AppTheme } from './theme';

// styled-components ships separate web (dist/) and native (native/dist/) type
// builds, each with their own DefaultTheme declaration — augmenting the plain
// 'styled-components' specifier only reaches the web one, so this targets the
// '/native' subpath actually imported by this project's styled components.
declare module 'styled-components/native' {
  export interface DefaultTheme extends AppTheme {}
}
