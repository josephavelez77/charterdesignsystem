# Base Design System

An open-source React component library for enterprise software tools, built with design tokens, dark/light theming, and full TypeScript support.

---

## Installation

```bash
npm install @josephavelez77/base-design-system
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
import '@josephavelez77/base-design-system/tokens'  // CSS custom properties
import '@josephavelez77/base-design-system/styles'  // component styles
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
import { Button, Alert } from '@josephavelez77/base-design-system'

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
| `ChartCard` | Card with an embedded bar chart |
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
| `Logo` | Brand logo with orientation and size variants |
| `Menu` / `MenuItem` | Dropdown context menu |
| `MultiSelectField` | Multi-value select input |
| `NavDrawer` | Sidebar navigation drawer |
| `NumberField` | Numeric text input |
| `PageHeader` | Page-level heading with actions |
| `Pagination` / `SimplePagination` | Page navigation controls |
| `PasswordField` | Password input with show/hide toggle |
| `Popover` | Anchored floating content panel |
| `PriorityChip` | Priority-level indicator chip |
| `ProgressBar` | Linear progress indicator |
| `RadioButton` / `RadioButtonGroup` / `RadioButtonItem` | Radio input and grouped set |
| `SelectField` | Single-value select input |
| `Skeleton` | Loading placeholder shapes |
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
import '@josephavelez77/base-design-system/tokens'
```

---

## TypeScript

All components ship full type definitions. Every component exports its props type:

```ts
import type { ButtonProps, AlertProps, DataGridColumn } from '@josephavelez77/base-design-system'
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
