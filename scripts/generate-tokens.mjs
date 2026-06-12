/**
 * Token generation script.
 *
 * Usage:  npm run tokens
 *
 * Reads  src/tokens/dark.tokens.json  (dark mode, default)
 *   and  src/tokens/light.tokens.json (light mode overrides)
 * Writes src/tokens/index.css
 *
 * Rules:
 *   - "themeable" tokens differ between modes → emitted in :root AND [data-theme='light']
 *   - "static" tokens are identical in both modes → emitted in :root only
 *   - number values get "px" appended (0 stays "0")
 *   - color values with alpha < 1 become rgba()
 *   - font-weight strings (Regular / Medium / SemiBold / Bold) → numeric
 */

import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dir = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dir, '..')

const dark = JSON.parse(readFileSync(resolve(root, 'src/tokens/dark.tokens.json'), 'utf-8'))
const light = JSON.parse(readFileSync(resolve(root, 'src/tokens/light.tokens.json'), 'utf-8'))

// ── Flatten nested token object to { tokenName: tokenObject } ───────────────
function flatten(obj) {
  const out = {}
  for (const [key, val] of Object.entries(obj)) {
    if (key.startsWith('$')) continue
    if (val && typeof val === 'object' && '$value' in val) {
      out[key] = val
    } else if (val && typeof val === 'object') {
      Object.assign(out, flatten(val))
    }
  }
  return out
}

// ── Convert a token's $value to a CSS string ────────────────────────────────
const WEIGHT_MAP = { Regular: '400', Medium: '500', SemiBold: '600', Bold: '700' }

function toCSSValue(token) {
  const { $type, $value } = token
  switch ($type) {
    case 'color': {
      if (typeof $value === 'object' && $value.hex) {
        const { hex, alpha, components } = $value
        if (alpha < 1) {
          const [r, g, b] = components.map((c) => Math.round(c * 255))
          return `rgba(${r}, ${g}, ${b}, ${parseFloat(alpha.toFixed(3))})`
        }
        return hex
      }
      return String($value)
    }
    case 'number': {
      const n = Number($value)
      return n === 0 ? '0' : `${Math.round(n * 100) / 100}px`
    }
    case 'string': {
      return WEIGHT_MAP[$value] ?? String($value)
    }
    default:
      return String($value)
  }
}

// ── Build flat maps ──────────────────────────────────────────────────────────
const darkFlat = flatten(dark)
const lightFlat = flatten(light)

// Find tokens whose value differs between modes (themeable)
const themeable = new Set(
  Object.keys(darkFlat).filter((k) => {
    if (!lightFlat[k]) return false
    return toCSSValue(darkFlat[k]) !== toCSSValue(lightFlat[k])
  }),
)

// ── Group tokens by their first "segment" prefix ────────────────────────────
function firstSegment(name) {
  const m = name.match(/^([a-z]+)-/)
  return m ? m[1] : name
}

function renderVars(entries) {
  let out = ''
  let prevSeg = null
  for (const [name, cssVal] of entries) {
    const seg = firstSegment(name)
    if (seg !== prevSeg) {
      if (prevSeg !== null) out += '\n'
      out += `  /* ── ${seg.charAt(0).toUpperCase() + seg.slice(1)} ── */\n`
      prevSeg = seg
    }
    out += `  --${name}: ${cssVal};\n`
  }
  return out
}

// ── Compose CSS ─────────────────────────────────────────────────────────────
const darkEntries = Object.entries(darkFlat).map(([k, v]) => [k, toCSSValue(v)])

const lightEntries = [...themeable]
  .filter((k) => lightFlat[k])
  .map((k) => [k, toCSSValue(lightFlat[k])])

const header = `/**
 * Charter Design System — Design Tokens
 * ⚠️  Auto-generated — do not edit by hand.
 *    Run \`npm run tokens\` to regenerate.
 *
 * Fonts are NOT loaded here — consumers must load them separately.
 * See README.md for the required Google Fonts <link> tags.
 *
 * Source:
 *   src/tokens/dark.tokens.json   (default / dark theme)
 *   src/tokens/light.tokens.json  (light theme overrides)
 */

`

const focusRing = `
  /* ── Focus (composite, not in Figma variables) ── */
  --focus-ring: 0 0 0 2px var(--border-color-static-brand-primary);
  --focus-ring-offset: 0 0 0 4px var(--border-color-static-brand-primary);
`

const css =
  header +
  `:root {\n${renderVars(darkEntries)}${focusRing}}\n\n` +
  `[data-theme='light'] {\n${renderVars(lightEntries)}}\n`

// ── Write ────────────────────────────────────────────────────────────────────
const outPath = resolve(root, 'src/tokens/index.css')
writeFileSync(outPath, css, 'utf-8')

console.log(`✔ Generated src/tokens/index.css`)
console.log(`  ${darkEntries.length} total tokens  |  ${themeable.size} themeable  |  ${darkEntries.length - themeable.size} static`)
