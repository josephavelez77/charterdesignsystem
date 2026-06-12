# Charter Design System — Claude Guide

This is the source repo for `@josephavelez77/charter-design-system`, a React component library for enterprise software tools.

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
import { Icon } from '@josephavelez77/charter-design-system'

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

## ChartCard + MUI X Charts

`ChartCard` is a layout shell — it provides the card chrome, the stat value/description, and a `children` slot. It does **not** bundle a chart library. Drop any React chart component into the `children` slot.

The Storybook stories use **MUI X Charts** (`@mui/x-charts`) as a reference integration. It is a `devDependency` only — consumers choose their own chart library.

### Layout prop

```tsx
<ChartCard value="$102K" description="Monthly revenue" layout="vertical">
  {/* your chart here */}
</ChartCard>
```

- `layout="horizontal"` — value/description left, chart right (good for sparklines and small bar charts)
- `layout="vertical"` — value/description top, chart full-width below (good for detailed charts)

### Theming MUI X Charts to match DS tokens

MUI X Charts renders axes as SVG and the legend as HTML. Override both separately:

```tsx
// Axis + grid lines — use sx on the chart component
const chartSx = {
  '& .MuiChartsAxis-tickLabel': {
    fill: 'var(--text-color-themeable-secondary) !important',
    fontFamily: 'var(--text-family-static-body) !important',
    fontSize: '11px !important',
  },
  '& .MuiChartsAxis-line':  { stroke: 'var(--border-color-themeable-primary) !important' },
  '& .MuiChartsAxis-tick':  { stroke: 'var(--border-color-themeable-primary) !important' },
  '& .MuiChartsGrid-horizontalLine': {
    stroke: 'var(--border-color-themeable-primary) !important',
    strokeDasharray: '4 4',
    opacity: 0.5,
  },
}

// Legend — must use slotProps.legend.sx (not ancestor sx) to win emotion specificity
const legendBottom = {
  position: { vertical: 'bottom', horizontal: 'middle' },
  direction: 'row',
  sx: {
    color: 'var(--text-color-themeable-secondary)',
    fontFamily: 'var(--text-family-static-body)',
    fontSize: '11px',
    marginBlockStart: '4px',
  },
}

<BarChart ... sx={chartSx} slotProps={{ legend: legendBottom }} />
```

### Reducing left whitespace

MUI X Charts reserves space for a y-axis by default. For card-sized charts where grid lines + tooltip give enough context, hide the axis entirely:

```tsx
<BarChart
  yAxis={[{ position: 'none' }]}
  margin={{ top: 8, right: 8, bottom: 40, left: 8 }}
  ...
/>
```

### Responsive width

MUI X Charts v9 needs an explicit pixel `width`. Use a ResizeObserver hook:

```tsx
const useAutoWidth = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(entries => {
      const w = entries[0]?.contentRect.width
      if (w) setWidth(Math.floor(w))
    })
    ro.observe(el)
    setWidth(Math.floor(el.getBoundingClientRect().width))
    return () => ro.disconnect()
  }, [])
  return { ref, width }
}

// Usage
const { ref, width } = useAutoWidth()
<div ref={ref} style={{ width: '100%' }}>
  {width > 0 && <BarChart width={width} height={220} ... />}
</div>
```

### DS chart color palette

```ts
const DS_CHART_COLORS = ['#007DAF', '#B15873', '#00C950', '#FF6900', '#2B7FFF']
// brand-primary blue, brand-secondary rose, success green, warning orange, accent blue
```

## What NOT to do

- Don't import from deep paths: `@josephavelez77/charter-design-system/dist/components/Button` ❌
- Don't hardcode colors or spacing values ❌
- Don't add new dependencies without checking if a token or existing component covers it ❌
- Don't edit `src/tokens/index.css` by hand — run `npm run tokens` to regenerate it ❌
- Don't add stories to `src/index.ts` — `*.stories.tsx` files are excluded from the build ❌
- Don't expect fonts to load automatically in consuming apps — they must be loaded separately ❌
