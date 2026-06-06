# Base Design System

An open-source React component library for enterprise software tools, built with design tokens, dark/light theming, and full TypeScript support.

---

## Installation

```bash
npm install @josephavelez77/design-system
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

### 1. Import the design tokens (CSS variables + fonts)

Add this **once** at your app root (e.g. `main.tsx` or `_app.tsx`):

```ts
import '@josephavelez77/design-system/styles'
```

This imports all CSS custom properties (colors, spacing, typography, etc.) and loads the three fonts used by the system: **DM Sans**, **DM Serif Display**, and **JetBrains Mono**.

### 2. Set a theme

The library ships dark mode as the default (`:root`). To opt into light mode, apply `data-theme="light"` to your root element:

```html
<html data-theme="light">
```

Or toggle it dynamically:

```ts
document.documentElement.setAttribute('data-theme', 'light')
document.documentElement.removeAttribute('data-theme') // back to dark
```

### 3. Use components

```tsx
import { Button, Alert, Badge, DataGrid } from '@josephavelez77/design-system'

export function App() {
  return (
    <>
      <Alert severity="success" title="Saved!" />
      <Button variant="primary">Click me</Button>
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
import '@josephavelez77/design-system/tokens'
```

---

## TypeScript

All components ship full type definitions. Every component exports its props type:

```ts
import type { ButtonProps, AlertProps, DataGridColumn } from '@josephavelez77/design-system'
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
