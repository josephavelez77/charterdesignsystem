# Base Design System — Claude Guide

This is the source repo for `@josephavelez77/base-design-system`, a React component library for enterprise software tools.

## Commands

```bash
npm run dev          # start Storybook on :6006
npm run build        # build the package to /dist
npm run tokens       # regenerate CSS tokens from JSON sources
npm run typecheck    # tsc --noEmit
npm run llms         # regenerate llms-full.txt from JSDoc in component source
```

## Releasing

```bash
npm version patch    # or minor / major — bumps version, commits, tags
git push --follow-tags  # triggers CI → auto-publishes to npm
```

## Repo structure

```
src/
  components/       # one folder per component
    Button/
      Button.tsx          # component + exported types
      Button.module.css   # scoped styles using CSS tokens
      Button.stories.tsx  # Storybook stories (excluded from build)
      index.ts            # re-exports from Button.tsx
  tokens/
    index.css             # generated CSS custom properties (dark default + light overrides)
    dark.tokens.json      # source of truth for dark theme tokens
    light.tokens.json     # source of truth for light theme overrides
  index.ts                # main barrel — all public exports live here
scripts/
  generate-tokens.mjs     # reads token JSON, writes src/tokens/index.css
```

## Adding a new component

1. Create `src/components/MyComponent/` with `MyComponent.tsx`, `MyComponent.module.css`, `MyComponent.stories.tsx`, `index.ts`
2. Export from `index.ts`:
   ```ts
   export { MyComponent } from './MyComponent'
   export type { MyComponentProps } from './MyComponent'
   ```
3. Add to `src/index.ts` barrel:
   ```ts
   export { MyComponent } from './components/MyComponent'
   export type { MyComponentProps } from './components/MyComponent'
   ```
4. Run `npm run build` and `npm run typecheck` to verify

## Styling rules

- **Always use CSS tokens** — never hardcode colors, spacing, font sizes, or radii
- Use `var(--container-color-themeable-primary)` not `#262626`
- Use `var(--container-padding-static-primary)` not `16px`
- Theming is handled by `[data-theme='light']` overrides in `src/tokens/index.css` — components don't need any theme logic
- CSS Modules only — no inline styles, no Tailwind, no CSS-in-JS

### Key tokens to know

| Token | Value |
|---|---|
| `--container-color-themeable-primary` | Main surface background |
| `--container-color-themeable-secondary` | Recessed/card background |
| `--text-color-themeable-primary` | Primary text |
| `--text-color-themeable-secondary` | Secondary/muted text |
| `--border-color-themeable-primary` | Default border |
| `--border-radius-static-primary` | `8px` — default radius |
| `--border-radius-static-circle` | `9999px` — pill/circle |
| `--container-padding-static-primary` | `16px` |
| `--container-gap-static-primary` | `16px` |
| `--container-gap-static-small` | `12px` |
| `--container-gap-static-xs` | `8px` |
| `--border-color-static-brand-primary` | Brand blue `#006992` |
| `--border-color-static-brand-secondary` | Brand amber `#ECA400` |

## Component API conventions

- Props use `disabled` (not `isDisabled`)
- Boolean props use plain names: `disabled`, `loading`, `fullWidth`, `dismissible`
- Event handlers follow React conventions: `onClick`, `onChange`, `onDismiss`, `onClose`
- Icon props accept `IconDefinition` from `@fortawesome/fontawesome-svg-core`
- All interactive components are either `React.forwardRef` or accept `className` for composition
- Compound components (e.g. `AccordionGroup` + `AccordionItem`, `Menu` + `MenuItem`) are exported separately and composed in JSX

## Icons

All icons come from FontAwesome. Import from the free solid or regular packs:

```tsx
import { faHouse, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '@josephavelez77/base-design-system'

<Icon icon={faHouse} size="medium" />
```

Always provide `aria-label` on `<Icon>` when it conveys meaning without surrounding text.
Always provide `aria-label` on `<IconButton>` — it's required by the prop type.

## Theming

The library defaults to dark mode (`:root`). Light mode is opt-in via `data-theme="light"` on the root element. Components don't need any theme-aware logic — CSS tokens handle it automatically.

```tsx
// Toggle theme
document.documentElement.setAttribute('data-theme', 'light')
document.documentElement.removeAttribute('data-theme') // back to dark
```

## Fonts

The library uses three Google Fonts, referenced via CSS custom properties:

| Token | Font |
|---|---|
| `--text-family-static-body` | DM Sans |
| `--text-family-static-headline` | DM Serif Display |
| `--text-family-static-mono` | JetBrains Mono |

**The package does not load fonts.** Storybook loads them via `.storybook/preview-head.html`. Consumers of the npm package must add the Google Fonts `<link>` tags to their own HTML `<head>` — without this, everything falls back to the browser's default serif font.

## What NOT to do

- Don't import from deep paths: `@josephavelez77/base-design-system/dist/components/Button` ❌
- Don't hardcode colors or spacing values ❌
- Don't add new dependencies without checking if a token or existing component covers it ❌
- Don't edit `src/tokens/index.css` by hand — run `npm run tokens` to regenerate it ❌
- Don't add stories to `src/index.ts` — `*.stories.tsx` files are excluded from the build ❌
- Don't expect fonts to load automatically in consuming apps — they must be loaded separately ❌
