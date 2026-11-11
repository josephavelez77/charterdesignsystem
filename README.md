# Charter Design System

An open-source React component library for enterprise software tools, built with design tokens, dark/light theming, and full TypeScript support.

---

## Installation

```bash
npm install @josephavelez77/charter-design-system
```

### Peer dependencies

Install these in your consuming project if you haven't already:

```bash
npm install react react-dom \
  @fortawesome/fontawesome-svg-core \
  @fortawesome/free-solid-svg-icons \
  @fortawesome/free-regular-svg-icons \
  @fortawesome/react-fontawesome
```

---

## Setup

### 1. Import the design tokens and styles

Add both imports **once** at your app root (e.g. `main.tsx` or `_app.tsx`):

```ts
import '@josephavelez77/charter-design-system/tokens'  // CSS custom properties
import '@josephavelez77/charter-design-system/styles'  // component styles
```

| Import | What it provides |
|---|---|
| `/tokens` | `:root` CSS variable declarations (colors, spacing, radii, typography) |
| `/styles` | Component CSS (layout, borders, states) — depends on the variables from `/tokens` |

> ⚠️ **Both imports are required.** Components will render without visual styling if `/tokens` is omitted, because all component CSS uses `var(--...)` references that need those declarations.

### 2. Load the fonts

The package does **not** bundle or load fonts. You must load them yourself. Add this to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
  rel="stylesheet"
/>
```

Without this, components will fall back to the browser's default serif font.

| Token | Font |
|---|---|
| `--text-family-static-body` | DM Sans |
| `--text-family-static-headline` | DM Serif Display |
| `--text-family-static-mono` | JetBrains Mono |

### 3. Set a theme

The library ships dark mode as the default (`:root`). To opt into light mode, apply `data-theme="light"` to your root element:

```html
<html data-theme="light">
```

Or toggle it dynamically:

```ts
document.documentElement.setAttribute('data-theme', 'light')
document.documentElement.removeAttribute('data-theme') // back to dark
```

### 4. Use components

```tsx
import { Button, Alert } from '@josephavelez77/charter-design-system'

export function App() {
  return (
    <>
      {/* Alert uses children for the message, not a title prop */}
      <Alert severity="success">Changes saved!</Alert>

      {/* Button requires both variant and emphasis */}
      <Button variant="brandPrimary" emphasis="primary">Get started</Button>
    </>
  )
}
```

---

## Available components

| Component | Description |
|---|---|
| `Accordion` / `AccordionGroup` | Collapsible content panels |
| `Alert` | Inline status messages (success, error, warning, info) |
| `AttributeChip` | Key/value label chip |
| `Avatar` | User avatar (image, initials, or icon) |
| `Badge` | Numeric or status badge overlay |
| `Breadcrumb` | Navigational breadcrumb trail |
| `Button` | Primary action button with variants and emphasis levels |
| `ButtonGroup` | Grouped set of related buttons |
| `Card` | Generic content card container |
| `ChartCard` | Card with a `children` slot for any chart library (`horizontal` or `vertical` layout) |
| `Checkbox` / `CheckboxGroup` | Checkbox input and grouped set |
| `Chip` | Compact filter or selection chip |
| `DataGrid` | Full-featured data table with sorting and overflow actions |
| `DateField` | Date text input |
| `DatePicker` | Calendar-based date picker |
| `Dialog` | Modal dialog with configurable actions |
| `Divider` | Horizontal or vertical rule |
| `Drawer` | Slide-in panel for contextual content |
| `FileUploader` / `FileUploaderListItem` | Drag-and-drop file upload |
| `GlobalToolbar` | App-level top navigation bar |
| `Icon` | FontAwesome icon wrapper with size tokens |
| `IconButton` | Icon-only button |
| `KpiCard` | Key performance indicator card |
| `ListCard` / `ListGroup` / `ListItem` | List layout primitives |
| `Menu` / `MenuItem` | Dropdown context menu |
| `MultiSelectField` | Multi-value select input |
| `NavDrawer` | Sidebar navigation drawer — pass `logo` / `logoCollapsed` to use your own brand |
| `NumberField` | Numeric text input |
| `PageHeader` | Page-level heading with actions |
| `Pagination` / `SimplePagination` | Page navigation controls |
| `PasswordField` | Password input with show/hide toggle |
| `Popover` | Anchored floating content panel |
| `PriorityChip` | Priority-level indicator chip |
| `ProgressBar` | Linear progress indicator |
| `RadioButton` / `RadioButtonGroup` / `RadioButtonItem` | Radio input and grouped set |
| `SegmentedControl` | Connected row of mutually exclusive options with one active segment |
| `SelectField` | Single-value select input |
| `Skeleton` | Loading placeholder shapes |
| `Slider` | Discrete or continuous range input |
| `Spinner` | Loading spinner |
| `SplitButton` | Button with a secondary dropdown action |
| `StatusChip` | Status indicator chip |
| `Stepper` | Multi-step progress indicator |
| `Switch` / `SwitchGroup` / `SwitchItem` | Toggle switch and grouped set |
| `TabGroup` | Tabbed navigation |
| `Table` | Data table with user/status value rendering |
| `TextArea` | Multi-line text input |
| `TextField` | Single-line text input |
| `TimeField` | Time text input |
| `TimePicker` | Clock-based time picker |
| `Toast` | Transient notification message |
| `Tooltip` | Hover tooltip |
| `UserIdentificationTag` | User identity display (avatar + name) |

---

## Design tokens

All tokens are CSS custom properties. You can use them directly in your own styles:

```css
.my-card {
  background: var(--container-color-themeable-primary);
  color: var(--text-color-themeable-primary);
  border-radius: var(--border-radius-static-primary);
  padding: var(--container-padding-static-primary);
}
```

Token categories: `border`, `container`, `icon`, `text`, `focus-ring`.

To import just the raw CSS variables without the Google Fonts `@import`:

```ts
import '@josephavelez77/charter-design-system/tokens'
```

### Brand customization

To apply your own brand colors, create a CSS file that loads **after** the design system tokens and override the relevant custom properties on `:root`:

```css
/* brand-overrides.css */
:root {
  --border-color-static-brand-primary: #7B2FBE;
  --container-color-static-brand-primary: #7B2FBE;
  --container-color-static-hover-brand-primary: #F3E8FF;
  --text-color-static-brand-primary: #7B2FBE;

  --border-color-static-brand-secondary: #E05252;
  --container-color-static-brand-secondary: #E05252;
  --container-color-static-hover-brand-secondary: #FEF2F2;
  --text-color-static-brand-secondary: #E05252;
}
```

Import it after the design system tokens so it wins the cascade:

```ts
import '@josephavelez77/charter-design-system/tokens'
import './brand-overrides.css'  // must come after
```

| Token | What it affects |
|---|---|
| `--border-color-static-brand-primary` | Brand-primary borders and strokes |
| `--container-color-static-brand-primary` | Brand-primary fills and backgrounds |
| `--container-color-static-hover-brand-primary` | Hover state over brand-primary surfaces |
| `--text-color-static-brand-primary` | Brand-primary text |
| `--border-color-static-brand-secondary` | Brand-secondary borders and strokes |
| `--container-color-static-brand-secondary` | Brand-secondary fills and backgrounds |
| `--container-color-static-hover-brand-secondary` | Hover state over brand-secondary surfaces |
| `--text-color-static-brand-secondary` | Brand-secondary text |

These eight tokens cover the full brand color surface — buttons, active states, links, selected tabs, and focus rings all derive from them.

---

## Charts

`ChartCard` is a layout shell: it renders the card chrome, a headline `value`, a `description`, and a `children` slot for your chart. **The package does not include a chart library** — bring whichever one your app already uses (MUI X Charts, Recharts, Victory, Nivo, visx, ECharts, or plain SVG). Nothing chart-related is added to your bundle.

```tsx
import { ChartCard } from '@josephavelez77/charter-design-system'

<ChartCard value="$102K" description="Monthly revenue" layout="vertical">
  <YourChart />
</ChartCard>
```

| `layout` | Use for |
|---|---|
| `horizontal` (default) | Value/description on the left, chart on the right — sparklines and small bar charts |
| `vertical` | Value/description on top, chart full-width below — detailed charts with axes and legends |

### Matching the design system

Chart libraries render their own SVG, so they won't pick up Charter styles on their own. Point their colors and fonts at the CSS tokens so charts follow the active theme:

| Chart element | Token |
|---|---|
| Axis labels, legend text | `--text-color-themeable-secondary` |
| Axis lines, ticks, grid lines | `--border-color-themeable-primary` |
| Font | `--text-family-static-body` |

Recommended series palette, in order:

```ts
const chartColors = ['#007DAF', '#B15873', '#00C950', '#FF6900', '#2B7FFF']
// brand-primary blue, brand-secondary rose, success green, warning orange, accent blue
```

### Example: MUI X Charts

The Storybook stories use [MUI X Charts](https://mui.com/x/react-charts/) as the reference integration. Install it in your app (it is not a dependency of this package):

```bash
npm install @mui/x-charts @emotion/react @emotion/styled
```

```tsx
import { BarChart } from '@mui/x-charts/BarChart'
import { ChartCard } from '@josephavelez77/charter-design-system'

// Axes + grid lines
const chartSx = {
  '& .MuiChartsAxis-tickLabel': {
    fill: 'var(--text-color-themeable-secondary) !important',
    fontFamily: 'var(--text-family-static-body) !important',
  },
  '& .MuiChartsAxis-line': { stroke: 'var(--border-color-themeable-primary) !important' },
  '& .MuiChartsAxis-tick': { stroke: 'var(--border-color-themeable-primary) !important' },
  '& .MuiChartsGrid-horizontalLine': {
    stroke: 'var(--border-color-themeable-primary) !important',
    strokeDasharray: '4 4',
  },
}

// The legend is HTML, so style it through slotProps (an ancestor sx won't win specificity)
const legend = {
  sx: {
    color: 'var(--text-color-themeable-secondary)',
    fontFamily: 'var(--text-family-static-body)',
  },
}

<ChartCard value="$102K" description="Monthly revenue" layout="vertical">
  <BarChart
    width={480}
    height={220}
    colors={chartColors}
    xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar'] }]}
    yAxis={[{ position: 'none' }]}
    series={[{ data: [32, 41, 29], label: 'Revenue' }]}
    grid={{ horizontal: true }}
    sx={chartSx}
    slotProps={{ legend }}
  />
</ChartCard>
```

MUI X Charts needs an explicit pixel `width`. To fill the card, measure the container with a `ResizeObserver` and pass the result. See `ChartCard.stories.tsx` for a `useAutoWidth` hook, plus line, pie, and sparkline examples.

### Example: no library

For something simple like a sparkline, inline SVG works and uses the tokens directly:

```tsx
<ChartCard value="1,234" description="Active users">
  <svg viewBox="0 0 100 30" width="100%" height="40" preserveAspectRatio="none">
    <polyline
      points="0,25 20,18 40,20 60,10 80,12 100,4"
      fill="none"
      stroke="var(--border-color-static-brand-primary)"
      strokeWidth="2"
    />
  </svg>
</ChartCard>
```

---

## TypeScript

All components ship full type definitions. Every component exports its props type:

```ts
import type { ButtonProps, AlertProps, DataGridColumn } from '@josephavelez77/charter-design-system'
```

---

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run dev

# Build the package
npm run build

# Regenerate design tokens from JSON sources
npm run tokens

# Type-check
npm run typecheck
```
