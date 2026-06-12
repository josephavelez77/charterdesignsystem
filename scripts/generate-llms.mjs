/**
 * generate-llms.mjs
 *
 * Reads JSDoc-annotated Props interfaces from every component file and produces
 * llms-full.txt — a detailed, LLM-readable reference for the design system.
 *
 * Run:  node scripts/generate-llms.mjs
 *       (or via npm script: npm run llms)
 *
 * The file is intentionally NOT committed to .gitignore so it can be referenced
 * by AI coding tools via the raw GitHub URL.
 */

import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

// ─── Component catalogue ──────────────────────────────────────────────────────
// Each entry drives one section of llms-full.txt.
// `files` lists the source file(s) to parse for Props interfaces.
// `description` is a 1-2 sentence plain-language summary.
// `notes` (optional) covers compound-component patterns, gotchas, accessibility notes.
// `example` is copy-paste-ready JSX (keep it minimal but realistic).

const COMPONENTS = [
  // ── Primitives ──────────────────────────────────────────────────────────────
  {
    exports: ['Icon'],
    category: 'Primitives',
    description: 'Renders a single Font Awesome icon at one of five sizes. Always pass `aria-label` when the icon conveys meaning without surrounding text.',
    files: ['Icon/Icon.tsx'],
    example: `import { faHouse } from '@fortawesome/free-solid-svg-icons'

<Icon icon={faHouse} size="medium" />
<Icon icon={faHouse} size="medium" aria-label="Home" />`,
  },
  {
    exports: ['Button'],
    category: 'Primitives',
    description: 'Standard clickable button. Supports four color variants, three fill emphases, leading/trailing icons, a loading spinner state, and full-width layout.',
    files: ['Button/Button.tsx'],
    example: `<Button variant="brandPrimary" emphasis="primary" onClick={save}>
  Save Changes
</Button>

<Button variant="neutral" emphasis="secondary" loading>
  Saving…
</Button>

<Button variant="statusError" emphasis="tertiary" leadingIcon={<Icon icon={faTrash} size="small" />}>
  Delete
</Button>`,
  },
  {
    exports: ['IconButton'],
    category: 'Primitives',
    description: 'Square icon-only button. `aria-label` is required — there is no visible text.',
    files: ['IconButton/IconButton.tsx'],
    example: `import { faXmark } from '@fortawesome/free-solid-svg-icons'

<IconButton icon={faXmark} aria-label="Close" variant="neutral" />
<IconButton icon={faTrash} aria-label="Delete item" variant="brandPrimary" iconSize="small" />`,
  },
  {
    exports: ['SplitButton'],
    category: 'Primitives',
    description: 'Two-part button: a primary action on the left and a chevron that opens a dropdown of secondary actions. Shares the same variant/emphasis API as Button.',
    files: ['SplitButton/SplitButton.tsx'],
    example: `<SplitButton
  label="Export"
  variant="brandPrimary"
  emphasis="primary"
  onClick={handleExport}
  items={[
    { label: 'Export as CSV', onClick: exportCsv },
    { label: 'Export as PDF', onClick: exportPdf },
  ]}
/>`,
  },
  {
    exports: ['ButtonGroup'],
    category: 'Primitives',
    description: 'Horizontal group of Button elements that share a unified border radius and collapse gaps on outlined variants to show a single divider line.',
    files: ['ButtonGroup/ButtonGroup.tsx'],
    example: `<ButtonGroup variant="neutral" emphasis="secondary">
  <Button>Day</Button>
  <Button>Week</Button>
  <Button>Month</Button>
</ButtonGroup>`,
  },

  // ── Identity / display ───────────────────────────────────────────────────────
  {
    exports: ['Avatar'],
    category: 'Display',
    description: 'Circular avatar in three types: initials (2-char text), icon, or image. Background color is controlled via the `color` prop for initials and icon types.',
    files: ['Avatar/Avatar.tsx'],
    example: `<Avatar type="initials" initials="JV" color="brandPrimary" />
<Avatar type="icon" icon={faUser} color="brandSecondary" />
<Avatar type="image" src="https://…/avatar.jpg" alt="Jane Doe" />`,
  },
  {
    exports: ['Badge'],
    category: 'Display',
    description: 'Small numeric counter or dot indicator overlaid on another element (typically an icon). Use `max` to cap the displayed number.',
    files: ['Badge/Badge.tsx'],
    example: `<div style={{ position: 'relative', display: 'inline-block' }}>
  <Icon icon={faBell} size="medium" aria-label="Notifications" />
  <Badge value={12} max={9} />
</div>`,
  },
  {
    exports: ['Chip'],
    category: 'Display',
    description: 'Toggleable filter/tag chip. Supports controlled and uncontrolled selected states. Fires `onChange` with the new boolean selected state.',
    files: ['Chip/Chip.tsx'],
    example: `<Chip label="Active" defaultSelected />
<Chip label="Archived" icon={faArchive} onChange={handleChange} />`,
  },
  {
    exports: ['AttributeChip'],
    category: 'Display',
    description: 'Read-only tag with an optional leading icon and a dismiss (✕) button. Use to show removable metadata on a record.',
    files: ['AttributeChip/AttributeChip.tsx'],
    example: `<AttributeChip label="High Priority" icon={faFlag} onDismiss={() => removeTag('High Priority')} />`,
  },
  {
    exports: ['StatusChip'],
    category: 'Display',
    description: 'Non-interactive status badge. Combine `statusType` (semantic category) with `level` (intensity 1–3) for full control over color.',
    files: ['StatusChip/StatusChip.tsx'],
    example: `<StatusChip label="Active"   statusType="positive" level={2} />
<StatusChip label="Overdue"  statusType="negative" level={3} />
<StatusChip label="Pending"  statusType="caution"  level={1} />
<StatusChip label="Archived" statusType="neutral"  level={1} />`,
  },
  {
    exports: ['PriorityChip'],
    category: 'Display',
    description: 'Non-interactive chip that shows a priority level with an auto-selected icon and color. Pass `label` to override the default capitalized priority text.',
    files: ['PriorityChip/PriorityChip.tsx'],
    example: `<PriorityChip priority="urgent" />
<PriorityChip priority="high" />
<PriorityChip priority="medium" label="Med" />
<PriorityChip priority="low" />`,
  },
  {
    exports: ['UserIdentificationTag'],
    category: 'Display',
    description: 'Compact row combining an Avatar and a name/role text block. Used in tables, lists, and comment threads to identify a user.',
    files: ['UserIdentificationTag/UserIdentificationTag.tsx'],
    example: `<UserIdentificationTag
  name="Jane Doe"
  role="Product Designer"
  avatarSrc="https://…/avatar.jpg"
/>`,
  },
  {
    exports: ['Logo'],
    category: 'Display',
    description: 'Application logo mark. Renders the brand SVG at the configured size.',
    files: ['Logo/Logo.tsx'],
    example: `<Logo size="default" />`,
  },

  // ── Feedback ─────────────────────────────────────────────────────────────────
  {
    exports: ['Alert'],
    category: 'Feedback',
    description: 'Inline status banner for error, warning, success, or info messages. Add `dismissible` to let users close it.',
    files: ['Alert/Alert.tsx'],
    example: `<Alert severity="error" dismissible onDismiss={handleDismiss}>
  File upload failed — check the file format and try again.
</Alert>`,
  },
  {
    exports: ['Toast'],
    category: 'Feedback',
    description: 'Transient notification that auto-dismisses after `duration` ms. Pass `action` to render an action button (e.g. "Undo"). Manage a stack externally and pass `onDismiss` to remove from state.',
    notes: 'The Toast does not position itself — wrap it in a fixed/absolute container (bottom-right corner is conventional).',
    files: ['Toast/Toast.tsx'],
    example: `<Toast urgency="success" duration={4000} onDismiss={() => removeToast(id)}>
  Record saved successfully.
</Toast>

<Toast urgency="error" action="Retry" onAction={retryUpload} onDismiss={() => removeToast(id)}>
  Upload failed.
</Toast>`,
  },
  {
    exports: ['Spinner'],
    category: 'Feedback',
    description: 'Animated loading indicator. Use inline for button loading states or centered in a panel while content loads.',
    files: ['Spinner/Spinner.tsx'],
    example: `<Spinner size="medium" />`,
  },
  {
    exports: ['Skeleton'],
    category: 'Feedback',
    description: 'Placeholder shimmer block shown while content is loading. Set explicit `width` and `height` to match the element it replaces.',
    files: ['Skeleton/Skeleton.tsx'],
    example: `<Skeleton width={200} height={20} />
<Skeleton width="100%" height={14} style={{ marginTop: 8 }} />`,
  },
  {
    exports: ['ProgressBar'],
    category: 'Feedback',
    description: 'Horizontal progress indicator. `value` is 0–100. Optionally show a percentage label.',
    files: ['ProgressBar/ProgressBar.tsx'],
    example: `<ProgressBar value={65} showLabel />`,
  },
  {
    exports: ['Tooltip'],
    category: 'Feedback',
    description: 'Hover/focus tooltip that wraps any element. The tooltip text is plain string only — no JSX.',
    files: ['Tooltip/Tooltip.tsx'],
    example: `<Tooltip content="Opens the settings panel" placement="top">
  <IconButton icon={faGear} aria-label="Settings" />
</Tooltip>`,
  },

  // ── Overlays ─────────────────────────────────────────────────────────────────
  {
    exports: ['Dialog'],
    category: 'Overlays',
    description: 'Modal dialog with title, optional subtitle, body area, and up to two footer action buttons. Renders into a portal with a scrim overlay.',
    files: ['Dialog/Dialog.tsx'],
    example: `<Dialog
  open={isOpen}
  title="Delete record"
  subtitle="This action cannot be undone."
  size="sm"
  onClose={() => setOpen(false)}
  primaryAction={{ label: 'Delete', variant: 'statusError', onClick: handleDelete }}
  secondaryAction={{ label: 'Cancel', onClick: () => setOpen(false) }}
/>`,
  },
  {
    exports: ['Drawer'],
    category: 'Overlays',
    description: 'Side-panel overlay that slides in from the right. Same structure as Dialog but anchored to the viewport edge.',
    files: ['Drawer/Drawer.tsx'],
    example: `<Drawer
  open={isOpen}
  title="Edit record"
  onClose={() => setOpen(false)}
  primaryAction={{ label: 'Save', onClick: handleSave }}
  secondaryAction={{ label: 'Cancel', onClick: () => setOpen(false) }}
>
  <TextField label="Name" />
</Drawer>`,
  },
  {
    exports: ['Popover'],
    category: 'Overlays',
    description: 'Anchored floating panel with a header label and freeform content. Toggles open/closed when the trigger element is clicked; closes on outside click or Escape.',
    files: ['Popover/Popover.tsx'],
    example: `<Popover label="Filter options" placement="bottom" content={<FilterForm />}>
  <Button variant="neutral" emphasis="secondary">Filters</Button>
</Popover>`,
  },
  {
    exports: ['Menu', 'MenuItem'],
    category: 'Overlays',
    description: 'Compound dropdown menu. `Menu` is the container (scrollable list); `MenuItem` is each row. Typically anchored below a Button or SplitButton with absolute positioning.',
    notes: 'Menu does not manage its own open state or positioning — wrap it in a relative container and toggle visibility yourself.',
    files: ['Menu/Menu.tsx', 'MenuItem/MenuItem.tsx'],
    example: `<div style={{ position: 'relative' }}>
  <Button onClick={() => setOpen(v => !v)}>Actions</Button>
  {open && (
    <Menu style={{ position: 'absolute', top: '100%', right: 0 }}>
      <MenuItem label="Edit" leadingIcon={faPen} onClick={handleEdit} />
      <MenuItem label="Duplicate" leadingIcon={faCopy} onClick={handleDuplicate} />
      <MenuItem label="Delete" leadingIcon={faTrash} variant="danger" onClick={handleDelete} />
    </Menu>
  )}
</div>`,
  },

  // ── Form fields ───────────────────────────────────────────────────────────────
  {
    exports: ['TextField'],
    category: 'Form Fields',
    description: 'Single-line text input with label, hint text, error message, and optional leading/trailing icons. Fully extends native `<input>` props.',
    files: ['TextField/TextField.tsx'],
    example: `<TextField
  label="Email"
  placeholder="you@company.com"
  hint="We'll send a confirmation link."
  leadingIcon={faEnvelope}
  error={errors.email}
  value={email}
  onChange={e => setEmail(e.target.value)}
/>`,
  },
  {
    exports: ['TextArea'],
    category: 'Form Fields',
    description: 'Multi-line text input with label, hint, error, and optional leading icon. Extends native `<textarea>` props.',
    files: ['TextArea/TextArea.tsx'],
    example: `<TextArea
  label="Description"
  rows={4}
  hint="Max 500 characters."
  error={errors.description}
  value={description}
  onChange={e => setDescription(e.target.value)}
/>`,
  },
  {
    exports: ['PasswordField'],
    category: 'Form Fields',
    description: 'Password input with a built-in show/hide toggle button. Behaves identically to TextField otherwise.',
    files: ['PasswordField/PasswordField.tsx'],
    example: `<PasswordField
  label="Password"
  value={password}
  onChange={e => setPassword(e.target.value)}
  error={errors.password}
/>`,
  },
  {
    exports: ['NumberField'],
    category: 'Form Fields',
    description: 'Numeric text input with increment/decrement stepper buttons. Supports `min`, `max`, and `step` constraints.',
    files: ['NumberField/NumberField.tsx'],
    example: `<NumberField
  label="Quantity"
  min={1}
  max={100}
  step={1}
  value={qty}
  onChange={e => setQty(Number(e.target.value))}
/>`,
  },
  {
    exports: ['SelectField'],
    category: 'Form Fields',
    description: 'Single-value dropdown built on a native `<select>`. Pass `options` as `{ value, label }` pairs.',
    files: ['SelectField/SelectField.tsx'],
    example: `<SelectField
  label="Country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
  ]}
  value={country}
  onChange={e => setCountry(e.target.value)}
/>`,
  },
  {
    exports: ['MultiSelectField'],
    category: 'Form Fields',
    description: 'Multi-value dropdown that shows selected options as removable AttributeChip elements. `value` and `onChange` operate on string arrays.',
    files: ['MultiSelectField/MultiSelectField.tsx'],
    example: `<MultiSelectField
  label="Tags"
  options={[
    { value: 'design', label: 'Design' },
    { value: 'engineering', label: 'Engineering' },
  ]}
  value={selectedTags}
  onChange={setSelectedTags}
/>`,
  },
  {
    exports: ['DateField'],
    category: 'Form Fields',
    description: 'Date input that wraps a native `<input type="date">` with DS label, hint, and error styling.',
    files: ['DateField/DateField.tsx'],
    example: `<DateField
  label="Start date"
  value={startDate}
  onChange={e => setStartDate(e.target.value)}
  error={errors.startDate}
/>`,
  },
  {
    exports: ['DatePicker'],
    category: 'Form Fields',
    description: 'Interactive calendar date picker with a month/year header and a year-jump overlay. Fires `onConfirm` with the selected Date when the user confirms.',
    notes: 'DatePicker renders inline — position it in a floating container (absolute/popover) when triggered from a field.',
    files: ['DatePicker/DatePicker.tsx'],
    example: `<DatePicker
  value={selectedDate}
  onConfirm={date => { setSelectedDate(date); setOpen(false) }}
  onCancel={() => setOpen(false)}
/>`,
  },
  {
    exports: ['TimeField'],
    category: 'Form Fields',
    description: 'Time input field with a clock icon that opens a TimePicker overlay. Manages its own input state; pass `value` and `onChange` for controlled usage.',
    files: ['TimeField/TimeField.tsx'],
    example: `<TimeField
  label="Start time"
  value={time}
  onChange={setTime}
/>`,
  },
  {
    exports: ['TimePicker'],
    category: 'Form Fields',
    description: 'Interactive time selector with hour, minute, and AM/PM columns. Typically opened by a TimeField; can also be used standalone.',
    files: ['TimePicker/TimePicker.tsx'],
    example: `<TimePicker
  value={time}
  onChange={setTime}
  onClose={() => setPickerOpen(false)}
/>`,
  },
  {
    exports: ['Checkbox'],
    category: 'Form Fields',
    description: 'Single checkbox with a visible label. Supports controlled, uncontrolled, and indeterminate states. Fully extends native `<input type="checkbox">` props.',
    files: ['Checkbox/Checkbox.tsx'],
    example: `<Checkbox
  label="I agree to the terms"
  checked={agreed}
  onChange={e => setAgreed(e.target.checked)}
/>`,
  },
  {
    exports: ['CheckboxGroup'],
    category: 'Form Fields',
    description: 'Labeled group of Checkbox items rendered as a vertical list. Manages selection state internally when used uncontrolled.',
    files: ['CheckboxGroup/CheckboxGroup.tsx'],
    example: `<CheckboxGroup
  label="Notify me when:"
  options={[
    { value: 'comment', label: 'Someone comments' },
    { value: 'assign', label: 'I am assigned' },
  ]}
  value={selections}
  onChange={setSelections}
/>`,
  },
  {
    exports: ['RadioButton', 'RadioButtonGroup', 'RadioButtonItem'],
    category: 'Form Fields',
    description: 'Radio button set. Use `RadioButtonGroup` to manage selection with a shared `name`; compose individual `RadioButtonItem` elements inside it.',
    files: ['RadioButton/RadioButton.tsx', 'RadioButtonGroup/RadioButtonGroup.tsx', 'RadioButtonItem/RadioButtonItem.tsx'],
    example: `<RadioButtonGroup name="plan" value={plan} onChange={e => setPlan(e.target.value)} label="Billing plan">
  <RadioButtonItem value="monthly" label="Monthly" />
  <RadioButtonItem value="annual" label="Annual" hint="Save 20%" />
</RadioButtonGroup>`,
  },
  {
    exports: ['Switch'],
    category: 'Form Fields',
    description: 'Toggle switch for binary on/off settings. Supports controlled and uncontrolled modes.',
    files: ['Switch/Switch.tsx'],
    example: `<Switch checked={enabled} onChange={e => setEnabled(e.target.checked)} />`,
  },
  {
    exports: ['SwitchGroup', 'SwitchItem'],
    category: 'Form Fields',
    description: 'Labeled list of Switch rows. Each `SwitchItem` has its own label, hint, and disabled state.',
    files: ['SwitchGroup/SwitchGroup.tsx', 'SwitchItem/SwitchItem.tsx'],
    example: `<SwitchGroup label="Notifications">
  <SwitchItem label="Email alerts" checked={email} onChange={e => setEmail(e.target.checked)} />
  <SwitchItem label="Push alerts" checked={push} onChange={e => setPush(e.target.checked)} hint="Mobile only" />
</SwitchGroup>`,
  },
  {
    exports: ['FileUploader', 'FileUploaderListItem'],
    category: 'Form Fields',
    description: 'Drag-and-drop file upload zone with a file list below. `FileUploaderListItem` renders each uploaded file with name, size, a progress bar, and a remove button.',
    files: ['FileUploader/FileUploader.tsx', 'FileUploaderListItem/FileUploaderListItem.tsx'],
    example: `<FileUploader
  onFilesAdded={files => uploadFiles(files)}
  accept=".pdf,.docx"
  requirements="PDF or DOCX, max 10 MB"
>
  {uploadedFiles.map(f => (
    <FileUploaderListItem
      key={f.id}
      fileName={f.name}
      fileSize={f.size}
      progress={f.progress}
      onRemove={() => removeFile(f.id)}
    />
  ))}
</FileUploader>`,
  },

  // ── Layout / Navigation ────────────────────────────────────────────────────
  {
    exports: ['Accordion', 'AccordionGroup'],
    category: 'Layout',
    description: 'Collapsible section with a labeled header. Use standalone for a single panel; wrap multiple `AccordionItem` elements in `AccordionGroup` for exclusive (one-open-at-a-time) behavior.',
    notes: 'The exported component is `AccordionItem`, not `Accordion`.',
    files: ['Accordion/Accordion.tsx', 'AccordionGroup/AccordionGroup.tsx'],
    example: `// Standalone
<AccordionItem title="Details" subtitle="Click to expand">
  Panel content goes here.
</AccordionItem>

// Exclusive group
<AccordionGroup exclusive>
  <AccordionItem title="Section 1">Content A</AccordionItem>
  <AccordionItem title="Section 2">Content B</AccordionItem>
</AccordionGroup>`,
  },
  {
    exports: ['TabGroup'],
    category: 'Layout',
    description: 'Horizontal tab bar. Manages its own selected state when `activeIndex` and `onChange` are omitted.',
    files: ['TabGroup/TabGroup.tsx'],
    example: `<TabGroup
  tabs={[{ label: 'Overview' }, { label: 'Activity' }, { label: 'Settings' }]}
  activeIndex={activeTab}
  onChange={setActiveTab}
/>`,
  },
  {
    exports: ['Stepper'],
    category: 'Layout',
    description: 'Multi-step form progress indicator with step badges, connecting dividers, and Back/Next/Cancel/Done control buttons.',
    files: ['Stepper/Stepper.tsx'],
    example: `<Stepper
  steps={[{ label: 'Details' }, { label: 'Review' }, { label: 'Confirm' }]}
  activeStep={step}
  onNext={() => setStep(s => s + 1)}
  onBack={() => setStep(s => s - 1)}
  onCancel={handleCancel}
  onDone={handleDone}
/>`,
  },
  {
    exports: ['Breadcrumb'],
    category: 'Layout',
    description: 'Hierarchical navigation trail. The last item is treated as the current page and rendered without a link.',
    files: ['Breadcrumb/Breadcrumb.tsx'],
    example: `<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Apollo Redesign' },
  ]}
/>`,
  },
  {
    exports: ['Divider'],
    category: 'Layout',
    description: 'Thin horizontal or vertical rule used to separate sections of content.',
    files: ['Divider/Divider.tsx'],
    example: `<Divider />
<Divider orientation="vertical" />`,
  },
  {
    exports: ['Pagination'],
    category: 'Layout',
    description: 'Page navigation control with previous/next arrows and numbered page buttons. Fires `onPageChange` with the new 1-based page number.',
    files: ['Pagination/Pagination.tsx'],
    example: `<Pagination
  totalPages={24}
  currentPage={page}
  onPageChange={setPage}
/>`,
  },
  {
    exports: ['GlobalToolbar'],
    category: 'Navigation',
    description: 'Top application bar with logo, navigation area, and a user avatar. Renders app-level actions and branding.',
    files: ['GlobalToolbar/GlobalToolbar.tsx'],
    example: `<GlobalToolbar
  avatarInitials="JV"
  onAvatarClick={() => setProfileOpen(true)}
>
  <Button variant="neutral" emphasis="tertiary">Dashboard</Button>
</GlobalToolbar>`,
  },
  {
    exports: ['NavDrawer'],
    category: 'Navigation',
    description: 'Collapsible vertical sidebar for application navigation. Typically placed on the left of the page layout.',
    files: ['NavDrawer/NavDrawer.tsx'],
    example: `<NavDrawer>
  <NavItem label="Dashboard" icon={faHome} href="/" active />
  <NavItem label="Projects"  icon={faFolder} href="/projects" />
</NavDrawer>`,
  },
  {
    exports: ['PageHeader'],
    category: 'Navigation',
    description: 'Page-level title block with a heading, optional subtitle, and a trailing actions slot.',
    files: ['PageHeader/PageHeader.tsx'],
    example: `<PageHeader
  title="All Projects"
  subtitle="24 projects"
  actions={<Button variant="brandPrimary">New Project</Button>}
/>`,
  },

  // ── Cards / Data display ──────────────────────────────────────────────────
  {
    exports: ['Card'],
    category: 'Data Display',
    description: 'Generic surface container with consistent padding, border, and radius. Use as the base for custom card layouts.',
    files: ['Card/Card.tsx'],
    example: `<Card>
  <p>Any content goes here.</p>
</Card>`,
  },
  {
    exports: ['KpiCard'],
    category: 'Data Display',
    description: 'Metric card displaying a headline number, label, and optional trend indicator.',
    files: ['KpiCard/KpiCard.tsx'],
    example: `<KpiCard label="Monthly Revenue" value="$42,800" trend="+12%" trendDirection="up" />`,
  },
  {
    exports: ['ChartCard'],
    category: 'Data Display',
    description: 'Metric card with two layout variants. `horizontal` places the KPI text on the left and the chart on the right. `vertical` stacks text above a full-width chart. Pass any chart library component as `children`.',
    notes: 'The design system does not bundle a chart library. The Storybook stories use `@mui/x-charts` as a reference implementation. Pass `colors` and `sx` to MUI X Charts to align with DS tokens — see example below.',
    files: ['ChartCard/ChartCard.tsx'],
    example: `// Vertical layout with MUI X Charts
import { BarChart } from '@mui/x-charts/BarChart'

<ChartCard value="100" description="Bushels of apples" layout="vertical">
  <BarChart
    series={[
      { data: [30, 25, 30, 20], label: '2020' },
      { data: [65, 48, 40, 48], label: '2021' },
      { data: [75, 82, 56, 79], label: '2022' },
    ]}
    xAxis={[{ data: ['Figma', 'Sketch', 'XD', 'PS'], scaleType: 'band' }]}
    colors={['#007DAF', '#B15873', '#00C950']}
    height={220}
    grid={{ horizontal: true }}
    sx={{
      '& .MuiChartsAxis-tickLabel': { fill: 'var(--text-color-themeable-secondary)' },
      '& .MuiChartsAxis-line':      { stroke: 'var(--border-color-themeable-primary)' },
      '& .MuiChartsLegend-label':   { fill: 'var(--text-color-themeable-secondary)' },
      '& .MuiChartsGrid-line':      { stroke: 'var(--border-color-themeable-primary)' },
    }}
  />
</ChartCard>

// Horizontal layout — compact sidebar chart
<ChartCard value="48,200" description="Page views" layout="horizontal">
  <BarChart series={[{ data: [42, 67, 55, 80, 73] }]} height={120} hideLegend />
</ChartCard>`,
  },
  {
    exports: ['ListCard'],
    category: 'Data Display',
    description: 'Card with a title and a scrollable list body. Use with ListItem or ListGroup children.',
    files: ['ListCard/ListCard.tsx'],
    example: `<ListCard title="Recent activity">
  <ListItem label="Invoice #1042 paid" meta="2 hours ago" />
  <ListItem label="New comment on Project Apollo" meta="5 hours ago" />
</ListCard>`,
  },
  {
    exports: ['ListGroup', 'ListItem'],
    category: 'Data Display',
    description: 'Structured list. `ListGroup` adds a section heading above a group of `ListItem` rows.',
    files: ['ListGroup/ListGroup.tsx', 'ListItem/ListItem.tsx'],
    example: `<ListGroup label="Today">
  <ListItem label="Stand-up meeting" meta="9:00 AM" leadingIcon={faCalendar} />
  <ListItem label="Design review" meta="2:00 PM" leadingIcon={faCalendar} />
</ListGroup>`,
  },
  {
    exports: ['Table'],
    category: 'Data Display',
    description: 'Styled HTML table wrapper with consistent header, row, and cell styling.',
    files: ['Table/Table.tsx'],
    example: `<Table
  columns={[{ key: 'name', header: 'Name' }, { key: 'status', header: 'Status' }]}
  rows={records}
/>`,
  },
  {
    exports: ['DataGrid'],
    category: 'Data Display',
    description: 'Feature-rich data table with sortable columns, row selection, and pagination support.',
    files: ['DataGrid/DataGrid.tsx'],
    example: `<DataGrid
  columns={columns}
  rows={data}
  onSort={handleSort}
  selectedRows={selected}
  onRowSelect={setSelected}
/>`,
  },
]

// ─── JSDoc parser ─────────────────────────────────────────────────────────────

/**
 * Extract { name, type, doc } from JSDoc-annotated props in a TypeScript source file.
 * Handles multi-line types (union literals that span lines).
 */
function extractProps(src) {
  const props = []
  // Match: /** doc */ optionalWhitespace propName?: type
  const re = /\/\*\*\s*([\s\S]*?)\*\/\s*\n\s+(['"\w-]+)\??: (.+)/g
  let m
  while ((m = re.exec(src)) !== null) {
    const doc = m[1].replace(/^\s*\*\s?/gm, '').trim()
    const name = m[2].replace(/['"]/g, '')
    const rawType = m[3].trim().replace(/;$/, '')
    props.push({ name, type: rawType, doc })
  }
  return props
}

/**
 * Extract default values from the component's destructuring signature.
 * Handles both plain functions and forwardRef patterns.
 */
function extractDefaults(src) {
  const defaults = {}
  // Only match simple prop defaults: string literals, booleans, numbers, null, undefined
  // Pattern: propName = <simple-literal>  followed by , or )
  // The simple-literal check prevents catching ternaries, comparisons, etc.
  const re = /\b(\w+)\s*=\s*([^,)\n]+?)(?=[,)\n])/g
  let m
  while ((m = re.exec(src)) !== null) {
    const name = m[1]
    const val = m[2].trim()
    // Must be a simple literal — reject expressions
    const isSimple =
      /^(['"`]).*\1$/.test(val) ||          // string literal
      val === 'true' || val === 'false' ||   // boolean
      val === 'null' || val === 'undefined' || // null/undefined
      /^\d+$/.test(val) ||                   // integer
      /^\d+\.\d+$/.test(val) ||             // float
      val === '[]' || val === '0'            // empty array or zero
    if (!isSimple) continue
    defaults[name] = val
  }
  return defaults
}

// ─── Markdown builder ─────────────────────────────────────────────────────────

function escapeCell(str) {
  return str.replace(/\|/g, '\\|').replace(/\n/g, ' ')
}

function buildSection(component) {
  const lines = []

  const heading = component.exports.join(' / ')
  lines.push(`## ${heading}`)
  lines.push('')
  lines.push(component.description)
  if (component.notes) {
    lines.push('')
    lines.push(`> **Note:** ${component.notes}`)
  }
  lines.push('')
  lines.push(`**Import:** \`import { ${component.exports.join(', ')} } from '@josephavelez77/charter-design-system'\``)
  lines.push('')

  // Props tables — one per file
  for (const file of component.files) {
    const path = join(ROOT, 'src/components', file)
    let src
    try {
      src = readFileSync(path, 'utf8')
    } catch {
      lines.push(`_Source not found: ${file}_`)
      lines.push('')
      continue
    }

    const props = extractProps(src)
    const defaults = extractDefaults(src)

    if (props.length === 0) continue

    // Derive interface label from filename
    const baseName = file.replace(/.*\//, '').replace('.tsx', '')
    if (component.files.length > 1) {
      lines.push(`### ${baseName} props`)
      lines.push('')
    } else {
      lines.push('### Props')
      lines.push('')
    }

    lines.push('| Prop | Type | Default | Description |')
    lines.push('|------|------|---------|-------------|')

    for (const { name, type, doc } of props) {
      const def = defaults[name] ?? '—'
      lines.push(`| \`${escapeCell(name)}\` | \`${escapeCell(type)}\` | ${escapeCell(def)} | ${escapeCell(doc)} |`)
    }
    lines.push('')
  }

  // Usage example
  if (component.example) {
    lines.push('### Usage')
    lines.push('')
    lines.push('```tsx')
    lines.push(component.example)
    lines.push('```')
    lines.push('')
  }

  lines.push('---')
  lines.push('')

  return lines.join('\n')
}

// ─── Header ───────────────────────────────────────────────────────────────────

function readVersion() {
  const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'))
  return pkg.version
}

function buildHeader(version) {
  return `# @josephavelez77/charter-design-system — Full Component Reference

> Version: ${version}
> Package: \`npm install @josephavelez77/charter-design-system\`
> Repository: https://github.com/josephavelez77/charterdesignsystem

## Key facts for AI agents

- **Dark mode is the default.** Light mode is opt-in via \`data-theme="light"\` on \`<html>\`. Components need no theme logic.
- **All icons come from Font Awesome.** Import \`IconDefinition\` objects from \`@fortawesome/free-solid-svg-icons\`. Never use emoji or plain strings.
- **Fonts are NOT bundled.** Consuming apps must load DM Sans, DM Serif Display, and JetBrains Mono from Google Fonts. See the README for the \`<link>\` tag.
- **CSS Modules, no inline styles.** Do not pass \`style\` props with hardcoded colors or spacing — use \`className\` for layout overrides only.
- **All imports are from the top-level package** — never from sub-paths like \`/dist/components/Button\`.

\`\`\`tsx
import {
  Button, IconButton, SplitButton, ButtonGroup,
  TextField, SelectField, Checkbox, Switch,
  Dialog, Drawer, Toast, Alert,
  // … etc
} from '@josephavelez77/charter-design-system'
\`\`\`

---

`
}

// ─── Generate ─────────────────────────────────────────────────────────────────

const version = readVersion()
let output = buildHeader(version)

// Group by category
const categories = [...new Set(COMPONENTS.map(c => c.category))]
for (const cat of categories) {
  const group = COMPONENTS.filter(c => c.category === cat)
  output += `# ${cat}\n\n`
  for (const component of group) {
    output += buildSection(component)
  }
}

const outPath = join(ROOT, 'llms-full.txt')
writeFileSync(outPath, output, 'utf8')

const lineCount = output.split('\n').length
console.log(`✓ llms-full.txt written (${lineCount} lines, ${(output.length / 1024).toFixed(1)} KB)`)
