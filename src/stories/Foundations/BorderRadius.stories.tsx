import React, { useEffect, useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta = {
  title: 'Foundations/Borders',
  parameters: {
    layout: 'fullscreen',
    docs: { canvas: { sourceState: 'none' } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ─── Shared helpers ───────────────────────────────────────────────────────────

const useTokenValue = (token: string) => {
  const ref = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState('')
  useEffect(() => {
    if (!ref.current) return
    setValue(getComputedStyle(ref.current).getPropertyValue(token).trim())
  })
  return { ref, value }
}

const PAGE_STYLES = {
  page: {
    background: 'var(--container-color-themeable-primary)',
    minHeight: '100vh',
    padding: '40px 48px',
    display: 'flex' as const,
    flexDirection: 'column' as const,
    gap: 56,
  },
  pageHeader: {
    display: 'flex' as const,
    flexDirection: 'column' as const,
    gap: 8,
    borderBottom: '1px solid var(--border-color-themeable-primary)',
    paddingBottom: 32,
  },
  h1: {
    margin: 0,
    fontFamily: 'var(--text-family-static-headline)',
    fontSize: 32,
    fontWeight: 400,
    color: 'var(--text-color-themeable-primary)',
    lineHeight: '1.2',
  },
  h2: {
    margin: 0,
    fontFamily: 'var(--text-family-static-headline)',
    fontSize: 20,
    fontWeight: 400,
    color: 'var(--text-color-themeable-primary)',
    lineHeight: '1.3',
  },
  lead: {
    margin: 0,
    fontFamily: 'var(--text-family-static-body)',
    fontSize: 14,
    color: 'var(--text-color-themeable-secondary)',
    lineHeight: '1.6',
    maxWidth: 560,
  },
  description: {
    margin: 0,
    fontFamily: 'var(--text-family-static-body)',
    fontSize: 13,
    color: 'var(--text-color-themeable-secondary)',
    lineHeight: '1.5',
  },
  valueBadge: {
    fontFamily: 'var(--text-family-static-mono)',
    fontSize: 12,
    color: 'var(--text-color-themeable-secondary)',
    background: 'var(--container-color-themeable-secondary)',
    padding: '2px 6px',
    borderRadius: 4,
    whiteSpace: 'nowrap' as const,
  },
  tokenName: {
    fontFamily: 'var(--text-family-static-mono)',
    fontSize: 11,
    color: 'var(--text-color-themeable-secondary)',
    wordBreak: 'break-all' as const,
  },
}

// ─── Border Radius ────────────────────────────────────────────────────────────

interface RadiusToken {
  token: string
  label: string
  description: string
}

const RADIUS_TOKENS: RadiusToken[] = [
  {
    token: '--border-radius-static-none',
    label: 'None',
    description: 'Sharp corners. Use for data-dense surfaces like table cells and code blocks.',
  },
  {
    token: '--border-radius-static-small',
    label: 'Small',
    description: 'Subtle rounding. Use for inline elements like badges, chips, and tags.',
  },
  {
    token: '--border-radius-static-primary',
    label: 'Primary',
    description: 'Default radius for cards, inputs, buttons, and most interactive surfaces.',
  },
  {
    token: '--border-radius-static-circle',
    label: 'Circle / Pill',
    description: 'Fully rounded. Use for avatars, icon buttons, toggles, and pill-shaped chips.',
  },
]

const RadiusSwatch = ({ token, label, description }: RadiusToken) => {
  const { ref, value } = useTokenValue(token)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        padding: 24,
        background: 'var(--container-color-themeable-secondary)',
        border: '1px solid var(--border-color-themeable-primary)',
        borderRadius: 8,
      }}
    >
      <div
        ref={ref}
        style={{
          width: '100%',
          aspectRatio: '2 / 1',
          background: 'var(--container-color-static-brand-primary)',
          borderRadius: `var(${token})`,
          opacity: 0.85,
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
          <span style={{ fontFamily: 'var(--text-family-static-body)', fontSize: 14, fontWeight: 600, color: 'var(--text-color-themeable-primary)' }}>
            {label}
          </span>
          <span style={PAGE_STYLES.valueBadge}>{value || '—'}</span>
        </div>
        <code style={PAGE_STYLES.tokenName}>{token}</code>
        <p style={PAGE_STYLES.description}>{description}</p>
      </div>
    </div>
  )
}

// ─── Border Width ─────────────────────────────────────────────────────────────

interface WidthToken {
  token: string
  label: string
  description: string
}

const WIDTH_TOKENS: WidthToken[] = [
  {
    token: '--border-width-static-none',
    label: 'None',
    description: 'No border. Use to visually remove a border while keeping layout stable.',
  },
  {
    token: '--border-width-static-primary',
    label: 'Primary',
    description: 'Standard 1px border. Default for all cards, inputs, and interactive surfaces.',
  },
  {
    token: '--border-width-static-large',
    label: 'Large',
    description: '2px border. Use for focus rings, active state indicators, and emphasis.',
  },
]

const WidthSwatch = ({ token, label, description }: WidthToken) => {
  const { ref, value } = useTokenValue(token)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        padding: 24,
        background: 'var(--container-color-themeable-secondary)',
        border: '1px solid var(--border-color-themeable-primary)',
        borderRadius: 8,
      }}
    >
      {/* Demo: a box whose border uses this width */}
      <div
        ref={ref}
        style={{
          width: '100%',
          aspectRatio: '3 / 1',
          borderRadius: 6,
          border: `var(${token}) solid var(--border-color-static-brand-primary)`,
          background: 'var(--container-color-themeable-primary)',
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
          <span style={{ fontFamily: 'var(--text-family-static-body)', fontSize: 14, fontWeight: 600, color: 'var(--text-color-themeable-primary)' }}>
            {label}
          </span>
          <span style={PAGE_STYLES.valueBadge}>{value || '—'}</span>
        </div>
        <code style={PAGE_STYLES.tokenName}>{token}</code>
        <p style={PAGE_STYLES.description}>{description}</p>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const BordersPage = () => (
  <div style={PAGE_STYLES.page}>
    <div style={PAGE_STYLES.pageHeader}>
      <h1 style={PAGE_STYLES.h1}>Borders</h1>
      <p style={PAGE_STYLES.lead}>
        Border tokens cover two dimensions: <strong>radius</strong> for corner shape and{' '}
        <strong>width</strong> for stroke weight. Both sets are static — they do not change between
        dark and light themes.
      </p>
    </div>

    {/* Radius */}
    <section style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <h2 style={PAGE_STYLES.h2}>Border Radius</h2>
        <p style={PAGE_STYLES.description}>
          Four steps from sharp to fully rounded. Always use a token — never hardcode a pixel value.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
        {RADIUS_TOKENS.map(t => <RadiusSwatch key={t.token} {...t} />)}
      </div>
    </section>

    {/* Width */}
    <section style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <h2 style={PAGE_STYLES.h2}>Border Width</h2>
        <p style={PAGE_STYLES.description}>
          Three weight options. <code style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 12 }}>primary</code> is the default for
          all surfaces; <code style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 12 }}>large</code> is reserved for emphasis and focus states.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
        {WIDTH_TOKENS.map(t => <WidthSwatch key={t.token} {...t} />)}
      </div>
    </section>
  </div>
)

export const Borders: Story = {
  name: 'Borders',
  render: () => <BordersPage />,
}
