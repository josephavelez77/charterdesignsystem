---
name: create-component
description: Build a new Charter Design System component (TSX + CSS Module + Storybook stories + barrel/docs wiring) using the existing CSS tokens. Use when the user asks to create, add, or build a new component — especially when they pass a Figma link to a component documentation page, in which case pull the spec through the Figma MCP first. Usage — /create-component <figma-url> [notes]
---

# Create component

Turns a component spec — ideally a **Figma component documentation page** — into a production component in this repo that follows the library's conventions and uses only tokens from `src/tokens/index.css`.

Output for a component called `Foo`:

```
src/components/Foo/
  Foo.tsx            # component + exported types, JSDoc on every prop
  Foo.module.css     # tokens only
  Foo.stories.tsx    # mirrors the Figma "Examples" section
  index.ts           # re-exports
```

…plus wiring in `src/index.ts`, `scripts/generate-llms.mjs`, `llms.txt`, and `README.md`.

## 1. Gather the spec

### If the user gave a Figma link (preferred path)

The link should point at a component **documentation frame** (Header → Overview → Anatomy → Properties → Examples → Notes → Best Practices). If it points somewhere else, still proceed but tell the user which sections were missing.

1. **Parse the URL.** `figma.com/design/:fileKey/:name?node-id=1112-47548` → `fileKey`, `nodeId = 1112:47548` (swap `-` for `:`). For `/design/:fileKey/branch/:branchKey/` use `branchKey`. No `node-id` → ask the user for a node-specific link.
2. **Load the design-to-code guidance** before any `get_design_context` call: invoke the `figma:figma-design-to-code` skill if it's installed; otherwise read the MCP resource `skill://figma/figma-design-to-code/SKILL.md` (server `plugin:figma:figma`) and pass `skillNames: "resource:figma-design-to-code"`.
3. **`create_session`** with the fileKey and a one-line task description. Reuse the `sessionId` on every later Figma call.
4. **Pull context in parallel:**
   - `get_design_context` on the doc node (`clientFrameworks: react`, `clientLanguages: typescript,css`) — gives the reference component code with its Figma props, plus the doc text.
   - `get_variable_defs` on the doc node — the Figma variables the component uses.
5. **Expect a truncated response.** Doc pages routinely exceed 100 KB and the text cuts off mid-page. When that happens:
   - Extract what you need from the saved JSON with a small `python3 -I` script (the component function, `<p>` text) rather than printing it whole.
   - `get_metadata` on the doc node to list the sections (`Section1…SectionN`) and their child frame IDs.
   - `get_screenshot` of the full doc at `maxDimension` ≥ its natural height, `curl` it into the scratchpad, and crop it per section with `sips --cropOffset <y> 0 -c <h> <w>` (no PIL available). Read the crops — Examples, Notes and Best Practices often only come through visually because `get_design_context` on instance sub-frames returns empty shells.
   - Call `get_design_context` on a small frame that contains one instance of each variant (e.g. the Overview "Representative …" frame) for a clean, high-fidelity reference.
6. **Fetch tiny SVG assets just to read them** (`curl -sL <asset-url>`). Simple lines/circles/dividers become CSS, not `<img>` — record their stroke/fill colour and map it to a token.

### If there's no Figma link

Ask for one. If the user wants to proceed without it, get the variants, props, and states from them in one round of questions, then continue from step 2.

## 2. Map the design onto the codebase

**Tokens.** A Figma variable name maps to a CSS custom property by its last path segment:

```
container/color/brand/container-color-static-brand-primary  →  var(--container-color-static-brand-primary)
text/size/text-size-static-body2                            →  var(--text-size-static-body2)
typography/font-family/font-body                            →  var(--text-family-static-body)   (exception)
```

`grep` each one in `src/tokens/index.css` to confirm it exists. Raw hex values in SVG assets: find the token with that value in the **dark** block (`:root`) and check its light-mode override still makes sense. If no token fits, stop and ask — never hardcode, never hand-edit `index.css` (tokens come from `npm run tokens`).

**Find precedents.** Read 1–2 existing components that are closest in kind before writing anything:

| Building… | Look at |
|---|---|
| Form input with label/value | `NumberField`, `TextField`, `Switch` |
| Toggle / boolean control | `Switch`, `Checkbox` |
| Progress / status visual | `ProgressBar`, `Stepper` |
| Compound component | `AccordionGroup` + `Accordion`, `Menu` + `MenuItem` |
| Overlay | `Dialog`, `Drawer`, `Popover` |

Reuse existing components (`Icon`, `Button`, `IconButton`, …) instead of re-implementing them.

**Translate Figma props into a code API — don't copy them 1:1.** Figma props describe what a designer types into a frame; code props describe behaviour:

- Free-text "display" props (e.g. `activeSelection: "50%"`) become **derived** values — use a numeric `value` plus a `formatValue` callback so text can't drift from state.
- Figma-only authoring knobs (`activeStep`, "adjust gap to move", per-instance spacers) become real state (`value`, `defaultValue`, `min`/`max`/`step`).
- `showX` booleans are kept when they toggle optional chrome; an optional string prop (`label?`) usually replaces `showLabel`.
- Figma "state" variants (rest/hover/focus/disabled) become CSS states plus a `disabled` prop, not a `state` prop.
- Read the **Notes** section for responsibilities the doc says the implementation must cover (accessible name, value semantics, keyboard, focus, touch target) — those are requirements.

## 3. Write the component

Conventions (also in `CLAUDE.md`):

- `React.forwardRef` to the main interactive element; `className` goes on the root.
- Extend the native element's attributes when one exists (`Omit<React.InputHTMLAttributes<HTMLInputElement>, …>`) and spread `...props` onto it so `name`, `aria-*`, `onBlur` etc. pass through.
- Props: `disabled` (not `isDisabled`), plain boolean names, `onChange`/`onDismiss`/`onClose`. Value-based inputs call `onChange(value)` with the value, not the event (see `NumberField`).
- Support controlled (`value`) and uncontrolled (`defaultValue`) modes.
- Prefer the native element for behaviour (`<input type="range">`, `<button>`, `<input type="checkbox">`) and style around it, so keyboard and screen-reader support comes free. Use `useId` for label/`htmlFor` wiring.
- **JSDoc on every prop**, including what the default is — `npm run llms` builds the docs from these.
- Set `Foo.displayName = 'Foo'`.
- Export string-union types used in props (`export type FooVariant = …`).

CSS Module rules:

- Tokens only, for colours, spacing, radii, font sizes, line heights and families. Fixed component geometry with no token (e.g. a 200px `min-width`) is fine as a literal, matching `Switch.module.css`.
- **Dynamic values** (percentages, positions) go through a CSS custom property set inline — `style={{ '--foo-pct': pct } as React.CSSProperties}` — and the CSS does the maths. This is the only accepted inline style (precedent: `ProgressBar`).
- No theme logic: tokens switch automatically under `[data-theme='light']`.
- Hover: `::after` overlay with `--container-color-static-hover-darken`. Focus: `outline: 2px solid var(--border-color-static-brand-primary)` on `:focus-visible`. Disabled: `--text-color-themeable-disabled` / `--container-color-themeable-disabled`, `cursor: not-allowed`.
- Section comments in the `/* ── Name ──── */` style used across the repo.

## 4. Write the stories

`Foo.stories.tsx`, following `ProgressBar.stories.tsx` / `Switch.stories.tsx`:

- `title: '<Category>/Foo'` — use an existing category: `Inputs`, `Buttons`, `Chips`, `Data Display`, `Feedback`, `Navigation`, `Overlay`.
- `tags: ['autodocs']`, `argTypes` for every prop worth a control, shared defaults in meta `args`.
- One story per **variant**, plus `Disabled`.
- One story per group in Figma's **Examples** section (e.g. optional parts, step counts, positions), laid out as a grid of captioned cells.
- A `Controlled` story wired to `useState`.
- **Don't write light-theme stories.** The Storybook toolbar has a theme switcher that flips every story between dark and light, so a dedicated theme story just duplicates that.
- **Keep fixed-width wrappers off `meta.decorators`.** Story-level decorators are *added to* meta decorators, not swapped in for them, so a meta `width: 277` wrapper also wraps the grid stories. The grid then overflows to the right of a centered narrow box and causes horizontal scroll. Define the wrapper as a `const fixedWidth: Story['decorators'] = [...]` and apply it only to single-instance stories. Multi-example grid stories size themselves and stay centered under `layout: 'centered'`.
- Inline styles are fine in stories for layout only; captions use `fontFamily: 'var(--text-family-static-body)'` and token colours.

## 5. Wire it up

1. `src/components/Foo/index.ts` — `export { Foo } from './Foo'` and `export type { FooProps, … } from './Foo'`.
2. `src/index.ts` — add both lines near related components (alphabetical within its group).
3. `scripts/generate-llms.mjs` — add a `COMPONENTS` entry (`exports`, `category`, `description`, `files`, optional `notes`, `example`). Escape backticks and `${` inside the `example` template literal.
4. `llms.txt` — add a hand-written section in the matching category, and a row in the "Never use raw HTML" table if the component replaces a native element.
5. `README.md` — add a row to the components table (alphabetical).

## 6. Verify

Run each as its own command and fix failures:

```bash
npm run typecheck
npm run build
npm run llms      # confirm the new section appears in llms-full.txt
```

**Visual + interaction check.** If Storybook is running on :6006 (`lsof -i :6006`; otherwise start it with `npm run dev` in the background), script a Playwright check from the scratchpad:

- Import from `node_modules/playwright/index.mjs`. If launch complains about a missing browser version, pass `executablePath` pointing at the `chrome-headless-shell` that exists under `~/Library/Caches/ms-playwright/` rather than downloading one.
- Load `http://localhost:6006/iframe.html?id=<category>-foo--<story-export-kebab>&viewMode=story`. Story ids come from the **export name**, not the `name:` override.
- Use `page.screenshot({ fullPage: true })`; `#storybook-root` element screenshots time out.
- Compare each screenshot against the matching Figma crop and exercise keyboard/pointer input plus focus-visible. To check light theme, set `document.documentElement.dataset.theme = 'light'` in the page instead of writing a story for it.
- Check that grid stories sit centered with no horizontal scroll: `document.documentElement.scrollWidth <= innerWidth`.

Fix in-scope mismatches; mention pre-existing out-of-scope ones without changing them.

## 7. Report

Tell the user:

- The files created and changed.
- Every place the code API deliberately differs from the Figma props, and why.
- Anything from the doc that wasn't implemented, or tokens that were missing.
- That nothing is committed yet; `/ship` verifies, commits and pushes, and `/ship release` also publishes.
