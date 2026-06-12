import React, { useEffect, useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta = {
  title: 'Foundations/Shadow',
  parameters: {
    layout: 'fullscreen',
    docs: { canvas: { sourceState: 'none' } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ─── Shadow recipes ───────────────────────────────────────────────────────────
//
// The raw tokens (--container-shadow-themeable-shadow-N) are themed rgba color
// values at various opacities (1 %, 4 %, 5 %, 6 %, 10 %, 25 %). They're the
// building blocks — compose them into box-shadow values as shown below.

interface ShadowRecipe {
  label: string
  boxShadow: string
  tokens: string[]
  description: string
}

const RECIPES: ShadowRecipe[] = [
  {
    label: 'Flat',
    boxShadow: 'none',
    tokens: [],
    description: 'No elevation. Use for inline content, table rows, and flush surfaces.',
  },
  {
    label: 'Subtle',
    boxShadow: '0 1px 2px var(--container-shadow-themeable-shadow-10)',
    tokens: ['--container-shadow-themeable-shadow-10'],
    description: 'Barely lifted. Good for input fields, small chips, and low-emphasis cards.',
  },
  {
    label: 'Small',
    boxShadow:
      '0 2px 4px var(--container-shadow-themeable-shadow-10), 0 1px 2px var(--container-shadow-themeable-shadow-6)',
    tokens: ['--container-shadow-themeable-shadow-10', '--container-shadow-themeable-shadow-6'],
    description: 'Slight depth. Use for cards, dropdowns, and secondary panels.',
  },
  {
    label: 'Medium',
    boxShadow:
      '0 4px 12px var(--container-shadow-themeable-shadow-10), 0 2px 4px var(--container-shadow-themeable-shadow-6)',
    tokens: ['--container-shadow-themeable-shadow-10', '--container-shadow-themeable-shadow-6'],
    description: 'Clear elevation. Use for modals, popovers, and menus.',
  },
  {
    label: 'Large',
    boxShadow:
      '0 8px 32px var(--container-shadow-themeable-shadow-25), 0 4px 8px var(--container-shadow-themeable-shadow-10)',
    tokens: ['--container-shadow-themeable-shadow-25', '--container-shadow-themeable-shadow-10'],
    description: 'Strong elevation. Use for dialogs, full-screen drawers, and overlay panels.',
  },
]

// ─── Raw token table ──────────────────────────────────────────────────────────

const RAW_TOKENS = [
  '--container-shadow-themeable-shadow-1',
  '--container-shadow-themeable-shadow-4',
  '--container-shadow-themeable-shadow-5',
  '--container-shadow-themeable-shadow-6',
  '--container-shadow-themeable-shadow-10',
  '--container-shadow-themeable-shadow-25',
]

// ─── Focus ring ───────────────────────────────────────────────────────────────

const FOCUS_TOKENS = [
  { token: '--focus-ring', label: 'Focus ring', description: '2px brand-blue ring. The default focus outline for all interactive elements.' },
  { token: '--focus-ring-offset', label: 'Focus ring offset', description: '4px brand-blue ring with a larger spread. Use when the element needs extra breathing room.' },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

const useTokenValue = (token: string) => {
  const ref = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState('')
  useEffect(() => {
    if (!ref.current) return
    setValue(getComputedStyle(ref.current).getPropertyValue(token).trim())
  })
  return { ref, value }
}

// ─── Shadow card ──────────────────────────────────────────────────────────────

const ShadowCard = ({ label, boxShadow, tokens, description }: ShadowRecipe) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 24, background: 'var(--container-color-themeable-secondary)', border: '1px solid var(--border-color-themeable-primary)', borderRadius: 8 }}>
    {/* Demo surface */}
    <div
      style={{
        width: '100%',
        height: 80,
        background: 'var(--container-color-themeable-primary)',
        borderRadius: 6,
        boxShadow,
      }}
    />

    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontFamily: 'var(--text-family-static-body)', fontSize: 14, fontWeight: 600, color: 'var(--text-color-themeable-primary)' }}>
        {label}
      </span>

      {tokens.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {tokens.map(t => (
            <code key={t} style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 11, color: 'var(--text-color-themeable-secondary)', background: 'var(--container-color-themeable-primary)', padding: '2px 5px', borderRadius: 4 }}>
              {t}
            </code>
          ))}
        </div>
      ) : (
        <code style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 11, color: 'var(--text-color-themeable-secondary)' }}>none</code>
      )}

      <p style={{ margin: 0, fontFamily: 'var(--text-family-static-body)', fontSize: 13, color: 'var(--text-color-themeable-secondary)', lineHeight: '1.5' }}>
        {description}
      </p>
    </div>
  </div>
)

// ─── Raw token row ────────────────────────────────────────────────────────────

const RawTokenRow = ({ token }: { token: string }) => {
  const { ref, value } = useTokenValue(token)
  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: '340px 1fr',
        alignItems: 'center',
        gap: 16,
        padding: '10px 0',
        borderBottom: '1px solid var(--border-color-themeable-primary)',
      }}
    >
      <code style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 12, color: 'var(--text-color-themeable-secondary)' }}>
        {token}
      </code>
      <span style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 12, color: 'var(--text-color-themeable-secondary)' }}>
        {value || '—'}
      </span>
    </div>
  )
}

// ─── Focus ring card ──────────────────────────────────────────────────────────

const FocusCard = ({ token, label, description }: { token: string; label: string; description: string }) => {
  const { ref, value } = useTokenValue(token)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 24, background: 'var(--container-color-themeable-secondary)', border: '1px solid var(--border-color-themeable-primary)', borderRadius: 8 }}>
      <div
        ref={ref}
        style={{
          width: '100%',
          height: 52,
          background: 'var(--container-color-themeable-primary)',
          borderRadius: 6,
          boxShadow: `var(${token})`,
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontFamily: 'var(--text-family-static-body)', fontSize: 14, fontWeight: 600, color: 'var(--text-color-themeable-primary)' }}>
          {label}
        </span>
        <code style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 11, color: 'var(--text-color-themeable-secondary)' }}>
          {token}
        </code>
        <code style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 11, color: 'var(--text-color-themeable-secondary)', opacity: 0.7 }}>
          {value || '—'}
        </code>
        <p style={{ margin: 0, fontFamily: 'var(--text-family-static-body)', fontSize: 13, color: 'var(--text-color-themeable-secondary)', lineHeight: '1.5' }}>
          {description}
        </p>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const ShadowPage = () => (
  <div style={{ background: 'var(--container-color-themeable-primary)', minHeight: '100vh', padding: '40px 48px', display: 'flex', flexDirection: 'column', gap: 56 }}>
    {/* Header */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, borderBottom: '1px solid var(--border-color-themeable-primary)', paddingBottom: 32 }}>
      <h1 style={{ margin: 0, fontFamily: 'var(--text-family-static-headline)', fontSize: 32, fontWeight: 400, color: 'var(--text-color-themeable-primary)', lineHeight: '1.2' }}>
        Shadow
      </h1>
      <p style={{ margin: 0, fontFamily: 'var(--text-family-static-body)', fontSize: 14, color: 'var(--text-color-themeable-secondary)', lineHeight: '1.6', maxWidth: 560 }}>
        Shadow tokens are themed rgba values (dark: white-tinted, light: black-tinted) that you
        compose into <code style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 13 }}>box-shadow</code> declarations.
        Use the recipes below as a starting point. Focus ring tokens are pre-composed{' '}
        <code style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 13 }}>box-shadow</code> values ready to use directly.
      </p>
    </div>

    {/* Elevation recipes */}
    <section style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--text-family-static-headline)', fontSize: 20, fontWeight: 400, color: 'var(--text-color-themeable-primary)' }}>
          Elevation Recipes
        </h2>
        <p style={{ margin: 0, fontFamily: 'var(--text-family-static-body)', fontSize: 13, color: 'var(--text-color-themeable-secondary)', lineHeight: '1.5', maxWidth: 560 }}>
          Composed box-shadow values using the raw tokens. Toggle the theme toolbar to see how each
          recipe adapts between dark and light.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
        {RECIPES.map(r => <ShadowCard key={r.label} {...r} />)}
      </div>
    </section>

    {/* Focus ring */}
    <section style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--text-family-static-headline)', fontSize: 20, fontWeight: 400, color: 'var(--text-color-themeable-primary)' }}>
          Focus Ring
        </h2>
        <p style={{ margin: 0, fontFamily: 'var(--text-family-static-body)', fontSize: 13, color: 'var(--text-color-themeable-secondary)', lineHeight: '1.5', maxWidth: 560 }}>
          Pre-composed brand-blue focus outlines applied via <code style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 12 }}>box-shadow</code>.
          Use on <code style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 12 }}>:focus-visible</code> selectors.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {FOCUS_TOKENS.map(t => <FocusCard key={t.token} {...t} />)}
      </div>
    </section>

    {/* Raw tokens */}
    <section style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--text-family-static-headline)', fontSize: 20, fontWeight: 400, color: 'var(--text-color-themeable-primary)' }}>
          Raw Tokens
        </h2>
        <p style={{ margin: 0, fontFamily: 'var(--text-family-static-body)', fontSize: 13, color: 'var(--text-color-themeable-secondary)', lineHeight: '1.5', maxWidth: 560 }}>
          The underlying rgba values. The number suffix is the opacity percentage. Values are
          themed — white-tinted on dark backgrounds, black-tinted on light.
        </p>
      </div>
      <div style={{ paddingBottom: 8, borderBottom: '1px solid var(--border-color-themeable-secondary)', display: 'grid', gridTemplateColumns: '340px 1fr', gap: 16 }}>
        {['Token', 'Resolved value'].map(h => (
          <span key={h} style={{ fontFamily: 'var(--text-family-static-body)', fontSize: 11, fontWeight: 600, color: 'var(--text-color-themeable-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            {h}
          </span>
        ))}
      </div>
      {RAW_TOKENS.map(t => <RawTokenRow key={t} token={t} />)}
    </section>
  </div>
)

export const Shadow: Story = {
  name: 'Shadow',
  render: () => <ShadowPage />,
}
