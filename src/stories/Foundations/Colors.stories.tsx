import React, { useEffect, useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta = {
  title: 'Foundations/Color Tokens',
  parameters: {
    layout: 'fullscreen',
    docs: { canvas: { sourceState: 'none' } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ─── Types ────────────────────────────────────────────────────────────────────

interface TokenEntry {
  /** CSS custom property name, e.g. "--container-color-themeable-primary" */
  token: string
  /** Short human label shown below the swatch */
  label: string
}

interface TokenGroup {
  title: string
  description?: string
  tokens: TokenEntry[]
}

// ─── Color swatch ─────────────────────────────────────────────────────────────

const ColorSwatch = ({ token, label }: TokenEntry) => {
  const swatchRef = useRef<HTMLDivElement>(null)
  const [resolvedValue, setResolvedValue] = useState('')

  useEffect(() => {
    if (!swatchRef.current) return
    const v = getComputedStyle(swatchRef.current).getPropertyValue(token).trim()
    setResolvedValue(v)
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
      <div
        ref={swatchRef}
        style={{
          height: 52,
          borderRadius: 6,
          background: `var(${token})`,
          border: '1px solid var(--border-color-themeable-primary)',
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span
          style={{
            fontFamily: 'var(--text-family-static-body)',
            fontSize: 12,
            fontWeight: 500,
            color: 'var(--text-color-themeable-primary)',
            lineHeight: '1.3',
            wordBreak: 'break-all',
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: 'var(--text-family-static-mono)',
            fontSize: 11,
            color: 'var(--text-color-themeable-secondary)',
            lineHeight: '1.3',
          }}
        >
          {resolvedValue || '—'}
        </span>
      </div>
    </div>
  )
}

// ─── Token group section ──────────────────────────────────────────────────────

const TokenSection = ({ title, description, tokens }: TokenGroup) => (
  <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <h2
        style={{
          margin: 0,
          fontFamily: 'var(--text-family-static-headline)',
          fontSize: 20,
          fontWeight: 400,
          color: 'var(--text-color-themeable-primary)',
          lineHeight: '1.3',
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--text-family-static-body)',
            fontSize: 13,
            color: 'var(--text-color-themeable-secondary)',
            lineHeight: '1.5',
          }}
        >
          {description}
        </p>
      )}
    </div>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
        gap: 16,
      }}
    >
      {tokens.map(t => (
        <ColorSwatch key={t.token} {...t} />
      ))}
    </div>
  </section>
)

// ─── Token definitions ────────────────────────────────────────────────────────

const COLOR_GROUPS: TokenGroup[] = [
  {
    title: 'Surface',
    description:
      'Background colors for containers, cards, and page surfaces. Themeable tokens flip between dark and light automatically.',
    tokens: [
      { token: '--container-color-themeable-primary', label: 'Primary surface' },
      { token: '--container-color-themeable-secondary', label: 'Secondary / recessed' },
      { token: '--container-color-themeable-tertiary', label: 'Tertiary / deep' },
      { token: '--container-color-themeable-disabled', label: 'Disabled surface' },
      { token: '--container-color-themeable-primary-inverse', label: 'Primary inverse' },
      { token: '--container-color-themeable-secondary-inverse', label: 'Secondary inverse' },
      { token: '--container-color-themeable-tertiary-inverse', label: 'Tertiary inverse' },
    ],
  },
  {
    title: 'Brand',
    description: 'Fixed brand colors used for primary and secondary brand accents. Static — same in both themes.',
    tokens: [
      { token: '--container-color-static-brand-primary', label: 'Brand primary' },
      { token: '--container-color-static-brand-secondary', label: 'Brand secondary' },
      { token: '--container-color-static-hover-brand-primary', label: 'Brand primary hover' },
      { token: '--container-color-static-hover-brand-secondary', label: 'Brand secondary hover' },
    ],
  },
  {
    title: 'State',
    description: 'Semantic state colors for error, warning, success, and informational feedback.',
    tokens: [
      { token: '--container-color-themeable-state-error', label: 'Error' },
      { token: '--container-color-themeable-state-warning', label: 'Warning' },
      { token: '--container-color-themeable-state-success', label: 'Success' },
      { token: '--container-color-themeable-state-information', label: 'Information' },
    ],
  },
  {
    title: 'Text',
    description: 'Foreground text colors for body copy, labels, and captions.',
    tokens: [
      { token: '--text-color-themeable-primary', label: 'Primary text' },
      { token: '--text-color-themeable-secondary', label: 'Secondary / muted' },
      { token: '--text-color-themeable-tertiary', label: 'Tertiary / placeholder' },
      { token: '--text-color-themeable-disabled', label: 'Disabled text' },
      { token: '--text-color-themeable-primary-inverse', label: 'Primary inverse' },
      { token: '--text-color-static-brand-primary', label: 'Brand primary' },
      { token: '--text-color-static-brand-secondary', label: 'Brand secondary' },
      { token: '--text-color-themeable-state-error', label: 'Error' },
      { token: '--text-color-themeable-state-warning', label: 'Warning' },
      { token: '--text-color-themeable-state-success', label: 'Success' },
      { token: '--text-color-themeable-state-information', label: 'Information' },
    ],
  },
  {
    title: 'Icon',
    description: 'Colors for icon fills, matching their surrounding text context.',
    tokens: [
      { token: '--icon-color-themeable-primary', label: 'Primary icon' },
      { token: '--icon-color-themeable-secondary', label: 'Secondary icon' },
      { token: '--icon-color-themeable-tertiary', label: 'Tertiary icon' },
      { token: '--icon-color-themeable-disabled', label: 'Disabled icon' },
      { token: '--icon-color-themeable-primary-inverse', label: 'Primary inverse' },
      { token: '--icon-color-static-brand-primary', label: 'Brand primary' },
      { token: '--icon-color-static-brand-secondary', label: 'Brand secondary' },
      { token: '--icon-color-themeable-state-error', label: 'Error' },
      { token: '--icon-color-themeable-state-warning', label: 'Warning' },
      { token: '--icon-color-themeable-state-success', label: 'Success' },
      { token: '--icon-color-themeable-state-information', label: 'Information' },
    ],
  },
  {
    title: 'Border',
    description: 'Stroke colors for borders, dividers, and outlines.',
    tokens: [
      { token: '--border-color-themeable-primary', label: 'Primary border' },
      { token: '--border-color-themeable-secondary', label: 'Secondary border' },
      { token: '--border-color-themeable-tertiary', label: 'Tertiary border' },
      { token: '--border-color-themeable-disabled', label: 'Disabled border' },
      { token: '--border-color-static-brand-primary', label: 'Brand primary' },
      { token: '--border-color-static-brand-secondary', label: 'Brand secondary' },
      { token: '--border-color-themeable-state-error', label: 'Error' },
      { token: '--border-color-themeable-state-warning', label: 'Warning' },
      { token: '--border-color-themeable-state-success', label: 'Success' },
      { token: '--border-color-themeable-state-information', label: 'Information' },
    ],
  },
  {
    title: 'Priority',
    description: 'Colors for task and issue priority indicators.',
    tokens: [
      { token: '--container-color-themeable-priority-urgent', label: 'Urgent' },
      { token: '--container-color-themeable-priority-high', label: 'High' },
      { token: '--container-color-themeable-priority-medium', label: 'Medium' },
      { token: '--container-color-themeable-priority-low', label: 'Low' },
    ],
  },
  {
    title: 'Status',
    description:
      'Extended palette for status chips and indicators — three shades per semantic category.',
    tokens: [
      { token: '--container-color-static-status-positive1', label: 'Positive 1' },
      { token: '--container-color-static-status-positive2', label: 'Positive 2' },
      { token: '--container-color-static-status-positive3', label: 'Positive 3' },
      { token: '--container-color-static-status-caution1', label: 'Caution 1' },
      { token: '--container-color-static-status-caution2', label: 'Caution 2' },
      { token: '--container-color-static-status-caution3', label: 'Caution 3' },
      { token: '--container-color-static-status-negative1', label: 'Negative 1' },
      { token: '--container-color-static-status-negative2', label: 'Negative 2' },
      { token: '--container-color-static-status-negative3', label: 'Negative 3' },
      { token: '--container-color-static-status-neutral1', label: 'Neutral 1' },
      { token: '--container-color-static-status-neutral2', label: 'Neutral 2' },
      { token: '--container-color-static-status-neutral3', label: 'Neutral 3' },
    ],
  },
  {
    title: 'Overlay & Gradient',
    description: 'Semi-transparent tokens for hover states, overlays, and gradients.',
    tokens: [
      { token: '--container-color-themeable-hover', label: 'Hover overlay' },
      { token: '--container-color-static-hover-darken', label: 'Hover darken' },
      { token: '--container-color-static-hover-lighten', label: 'Hover lighten' },
      { token: '--container-color-themeable-gradient-stop1', label: 'Gradient stop 1' },
      { token: '--container-color-themeable-gradient-stop2', label: 'Gradient stop 2' },
      { token: '--container-color-themeable-gradient-stop3', label: 'Gradient stop 3' },
    ],
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

const ColorTokensPage = () => (
  <div
    style={{
      background: 'var(--container-color-themeable-primary)',
      minHeight: '100vh',
      padding: '40px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 48,
    }}
  >
    {/* Page header */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, borderBottom: '1px solid var(--border-color-themeable-primary)', paddingBottom: 32 }}>
      <h1
        style={{
          margin: 0,
          fontFamily: 'var(--text-family-static-headline)',
          fontSize: 32,
          fontWeight: 400,
          color: 'var(--text-color-themeable-primary)',
          lineHeight: '1.2',
        }}
      >
        Color Tokens
      </h1>
      <p
        style={{
          margin: 0,
          fontFamily: 'var(--text-family-static-body)',
          fontSize: 14,
          color: 'var(--text-color-themeable-secondary)',
          lineHeight: '1.6',
          maxWidth: 560,
        }}
      >
        All color tokens are CSS custom properties defined in{' '}
        <code
          style={{
            fontFamily: 'var(--text-family-static-mono)',
            fontSize: 13,
            background: 'var(--container-color-themeable-secondary)',
            padding: '1px 5px',
            borderRadius: 4,
          }}
        >
          src/tokens/index.css
        </code>
        . Tokens marked <strong>themeable</strong> automatically switch between dark and light
        values when{' '}
        <code
          style={{
            fontFamily: 'var(--text-family-static-mono)',
            fontSize: 13,
            background: 'var(--container-color-themeable-secondary)',
            padding: '1px 5px',
            borderRadius: 4,
          }}
        >
          data-theme="light"
        </code>{' '}
        is set on the root element. Tokens marked <strong>static</strong> are fixed regardless of
        theme. Use the theme toggle in the Storybook toolbar to see live differences.
      </p>
    </div>

    {/* Token groups */}
    {COLOR_GROUPS.map(group => (
      <TokenSection key={group.title} {...group} />
    ))}
  </div>
)

export const ColorTokens: Story = {
  name: 'Color Tokens',
  render: () => <ColorTokensPage />,
}
