# front/

> **Draft doc.** Initial orientation pass, not exhaustive.

React Native mobile app (iOS + Android), scaffolded via `@react-native-community/cli` init (`react-native@0.87.1`, TypeScript template). **Bare React Native, not Expo** — confirmed by the presence of native `ios/` and `android/` project directories and no Expo config. A design-token + common-component layer lives under `src/` (see below); no navigation or state-management library added yet.

## Package manager

`yarn` — specifically **Yarn Berry 3.6.4**, not classic. `.yarnrc.yml` sets `nodeLinker: node-modules` (so `node_modules` behaves like classic yarn, not PnP) and `yarnPath: .yarn/releases/yarn-3.6.4.cjs`; `package.json` pins `"packageManager": "yarn@3.6.4"`, so corepack resolves the right yarn automatically — no global yarn setup needed. Do not mix in `npm install` / `npx` for dependency management here.

**Node**: requires `>= 22.11.0` (`engines` in `package.json`). The repo's default Node via nvm may be older (e.g. v20) — run `nvm use 22` (or similar) before installing/building in `front/`. This may need surfacing in CI config too.

## Common commands

```bash
yarn install         # install dependencies
yarn ios              # run on iOS simulator
yarn android           # run on Android emulator
yarn start             # start Metro bundler
yarn test              # run test suite (jest)
yarn lint              # eslint .
yarn tsc --noEmit      # typecheck (no dedicated script yet, but this passes clean)
```

(Verified against `front/package.json` scripts — all are unmodified RN template defaults.)

## iOS setup caveat

CocoaPods has **not** been installed yet (`ios/Pods/` doesn't exist) — the interactive "install CocoaPods now?" prompt was declined during scaffolding. First iOS run will likely need `bundle install && cd ios && bundle exec pod install` (Ruby/CocoaPods setup is present via `Gemfile` + `.bundle/`), not yet verified end-to-end.

## Design tokens and common components (`src/`)

Ported from the removed web/ project's Emotion design system (colors, typography, spacing/radius scales, `Flex`/`Wrapper` layout primitives, `Button`/`Text` common components), adapted to React Native syntax:

```
src/
├── theme/
│   ├── theme.ts          # LIGHT_THEME / DARK_THEME, ColorsKey/TypographyKey/SpacingKey/RadiusKey types
│   ├── styled.d.ts        # module augmentation so styled(...)'s `theme` prop is typed
│   └── ThemeProvider.tsx  # React context + styled-components/native ThemeProvider; useAppTheme() hook
└── components/
    ├── common/
    │   ├── Button/        # styled.Pressable, mirrors the web Button API (color/size/selected)
    │   └── Text/           # styled.Text, mirrors the web Text API (variant/color/opacity)
    └── layout/
        ├── Flex/           # styled.View + Flex.Item, mirrors the web Flex/Flex.Item API
        └── Wrapper/        # styled.View, mirrors the web Wrapper API (padding/maxWidth/center/etc.)
```

Styling uses **`styled-components/native`** (`styled.View`/`styled.Text`/`styled.Pressable` template-literal API — the same shape as web's `@emotion/styled`, and as `@emotion/native`, which this originally shipped with before being swapped out; see "Why styled-components, not @emotion/native" below). Each component follows the original web split: `index.tsx` (typed props, defaults) + `X.styled.ts` (the styled component, reads `theme` via `ThemeProvider`). `App.tsx` is wrapped in `<ThemeProvider>` at the root.

Import from **`styled-components/native`**, not plain `styled-components` — the package ships separate web (`dist/`) and native (`native/dist/`) builds, each with its own `DefaultTheme` type; `src/theme/styled.d.ts` augments the `/native` one specifically, since augmenting the plain specifier doesn't reach it.

Deliberate deviations from the web version (CSS concepts with no RN equivalent):
- **Units**: rem → px (1rem = 16), unitless line-height → px, em letter-spacing → px — RN's StyleSheet has no relative CSS units, so `theme.ts` stores pre-computed absolute numbers instead of CSS strings.
- **`gap`/`padding`/`radius` tokens**: were CSS custom properties (`var(--gap-N)` etc.); now plain numeric scales (`SPACING`, `RADIUS` in `theme.ts`), each key still `N -> N*4`px like the original.
- **No hover/cursor**: `Button` dropped the web version's `:hover`/`cursor` styling (no pointer device on mobile); pressed-state feedback (e.g. via `Pressable`'s `style={({pressed}) => ...}` callback) isn't implemented yet.
- **`Wrapper.position`**: narrowed to `'relative' | 'absolute'` — Yoga (RN's layout engine) has no `'fixed'`/`'sticky'`.
- **`Wrapper.maxWidth`**: narrowed to `number | '100%'` — no `'fit-content'`/`'max-content'`/`'min-content'` in RN layout.
- **`Wrapper.fullHeight`**: now just `flex: 1` (fill the parent flex container) instead of the web version's `calc(100dvh - 57px)` fixed-navbar offset, which assumed a specific web layout that doesn't exist here.
- **Theme persistence**: `ThemeProvider` uses RN's built-in `useColorScheme()` for the system preference and an in-memory override for manual toggling — **not persisted** across app restarts (the web version used `localStorage`). Persisting would need `@react-native-async-storage/async-storage`, a native module not installed yet (would require a `pod install` — see the iOS setup caveat above).
- **No shadow token**: the web version referenced a `--shadow-card` CSS var that was never actually defined anywhere in `web/`, so it wasn't ported. Add elevation/shadow tokens (RN needs `shadowColor`/`shadowOffset`/`shadowOpacity`/`shadowRadius` + Android `elevation`) once a real value exists to port.

### Why styled-components, not @emotion/native

This design-system layer originally shipped on `@emotion/native`, then was swapped to **`styled-components`** (6.5.3): `@emotion/native` hasn't had a real code release since ~2023 and its bundled types still reference long-removed RN APIs (`DatePickerIOS`, `ListView`, etc.). `styled-components` is released regularly (last publish within the last month as of this writing), has ~200x the weekly downloads, and its native build is a near-1:1 API match (`styled.View`/`styled.Text`/`styled.Pressable` template literals, `ThemeProvider`, `useTheme`), so the swap was mechanical — import source changed, component code didn't. Both libraries' RN runtimes are actually built on the same underlying CSS-string parser (`css-to-react-native`), so this swap is about the wrapper library's maintenance, not the parsing engine underneath.

Other RN styling libraries considered and rejected for this project: `react-native-unistyles` (actively maintained, but a `StyleSheet.create`-based API, not styled-components-shaped — would mean rewriting every component — and pulls in `react-native-nitro-modules` + `react-native-reanimated` as native-module peers, which need `pod install`, not yet run here); `nativewind` (Tailwind `className` utility strings — a philosophy change away from the existing token-based `theme.ts`); `@shopify/restyle` (itself stale, ~18 months without a release); `tamagui` (a full universal UI-kit/compiler, disproportionate to replacing just a styling layer).

A regression test lives at `__tests__/designSystem.test.tsx` — renders `Wrapper`/`Flex`/`Flex.Item`/`Button`/`Text` together inside `ThemeProvider` via `react-test-renderer`, catching template-string/CSS-parsing errors from the styling layer. Re-run it after any styling-library or RN/React upgrade.

No `@/` path alias is configured (the web version used `@/styles/theme` etc.) — Metro doesn't read `tsconfig.json` paths natively, and adding one needs `babel-plugin-module-resolver`. Current code uses relative imports; revisit if the relative paths get unwieldy.

## TypeScript conventions

- Prefer explicit types on exported functions/components; avoid `any`.
- Follow the `index.tsx` + `X.styled.ts` split established under `src/components/` for new common/layout components.
- Match existing naming conventions (component folders, hooks prefixed `use*`, etc.) once established — don't introduce a new convention without checking what's already there.

## Native project notes

- iOS builds require CocoaPods (`pod install` inside `ios/`) after any native dependency change — typical for bare RN projects. See the caveat above: not yet run at all.
- Android builds go through Gradle (`android/`).
- Do not commit `ios/Pods/` or Android build artifacts — verify `.gitignore` covers them.

## Follow-up needed

- React Native 0.87.1, React 19.2.3, TypeScript ~6.0.3 as of this draft — revisit if bumped.
- No navigation library or state management library is set up yet beyond the RN CLI defaults (`react-native-safe-area-context` is present) — document the choice once one is added.
- Verify the CocoaPods install flow once someone actually runs `yarn ios` for the first time.
- Theme toggling isn't persisted (see `src/theme/ThemeProvider.tsx`) — add `@react-native-async-storage/async-storage` and re-run `pod install` if/when persistence is needed.
