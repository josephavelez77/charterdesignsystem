import React, { useEffect, useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta = {
  title: 'Foundations/Border Radius',
  parameters: {
    layout: 'fullscreen',
    docs: { canvas: { sourceState: 'none' } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ─── Types ────────────────────────────────────────────────────────────────────

interface RadiusToken {
  token: string
  label: string
  description: string
}

// ─── Token definitions ────────────────────────────────────────────────────────

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

// ─── Swatch ───────────────────────────────────────────────────────────────────

const RadiusSwatch = ({ token, label, description }: RadiusToken) => {
  const ref = useRef<HTMLDivElement>(null)
  const [resolvedValue, setResolvedValue] = useState('')

  useEffect(() => {
    if (!ref.current) return
    setResolvedValue(getComputedStyle(ref.current).getPropertyValue(token).trim())
  })

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
      {/* Demo shape */}
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

      {/* Token info */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
          <span
            style={{
              fontFamily: 'var(--text-family-static-body)',
              fontSize: 14,
              fontWeight: 600,
              color: 'var(--text-color-themeable-primary)',
            }}
          >
            {label}
          </span>
          <span
            style={{
              fontFamily: 'var(--text-family-static-mono)',
              fontSize: 12,
              color: 'var(--text-color-themeable-secondary)',
              background: 'var(--container-color-themeable-primary)',
              padding: '2px 6px',
              borderRadius: 4,
              whiteSpace: 'nowrap',
            }}
          >
            {resolvedValue || '—'}
          </span>
        </div>

        <code
          style={{
            fontFamily: 'var(--text-family-static-mono)',
            fontSize: 11,
            color: 'var(--text-color-themeable-secondary)',
            wordBreak: 'break-all',
          }}
        >
          {token}
        </code>

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
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const BorderRadiusPage = () => (
  <div
    style={{
      background: 'var(--container-color-themeable-primary)',
      minHeight: '100vh',
      padding: '40px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 40,
    }}
  >
    {/* Page header */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        borderBottom: '1px solid var(--border-color-themeable-primary)',
        paddingBottom: 32,
      }}
    >
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
        Border Radius
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
        Four radius steps cover every use case — from sharp data tables to fully rounded avatars.
        All tokens are static (not theme-dependent). Always reference the token instead of
        hardcoding a pixel value so rounding stays consistent across the system.
      </p>
    </div>

    {/* Swatches grid */}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 16,
      }}
    >
      {RADIUS_TOKENS.map(t => (
        <RadiusSwatch key={t.token} {...t} />
      ))}
    </div>
  </div>
)

export const BorderRadius: Story = {
  name: 'Border Radius',
  render: () => <BorderRadiusPage />,
}
