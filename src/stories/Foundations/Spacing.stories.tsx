import React, { useEffect, useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta = {
  title: 'Foundations/Spacing',
  parameters: {
    layout: 'fullscreen',
    docs: { canvas: { sourceState: 'none' } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ─── Token definitions ────────────────────────────────────────────────────────

interface SpacingStep {
  token: string
  label: string
}

const STEPS: SpacingStep[] = [
  { token: 'none',    label: 'None'   },
  { token: 'xxs',    label: 'XXS'    },
  { token: 'xs',     label: 'XS'     },
  { token: 'small',  label: 'Small'  },
  { token: 'primary',label: 'Primary'},
  { token: 'large',  label: 'Large'  },
  { token: 'xl',     label: 'XL'     },
  { token: '2xl',    label: '2XL'    },
  { token: '3xl',    label: '3XL'    },
]

// ─── Shared styles ────────────────────────────────────────────────────────────

const page: React.CSSProperties = {
  background: 'var(--container-color-themeable-primary)',
  minHeight: '100vh',
  padding: '40px 48px',
  display: 'flex',
  flexDirection: 'column',
  gap: 56,
}

// ─── Row component ────────────────────────────────────────────────────────────

const SpacingRow = ({ prefix, step }: { prefix: 'gap' | 'padding'; step: SpacingStep }) => {
  const token = `--container-${prefix}-static-${step.token}`
  const ref = useRef<HTMLDivElement>(null)
  const [px, setPx] = useState('')

  useEffect(() => {
    if (!ref.current) return
    setPx(getComputedStyle(ref.current).getPropertyValue(token).trim())
  })

  const numericPx = parseInt(px || '0', 10)
  // Scale bars: 64px max value → 320px max bar width, so ×5
  const barWidth = numericPx * 5

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: '280px 56px 56px 1fr',
        alignItems: 'center',
        gap: 16,
        padding: '12px 0',
        borderBottom: '1px solid var(--border-color-themeable-primary)',
      }}
    >
      {/* Token name */}
      <code
        style={{
          fontFamily: 'var(--text-family-static-mono)',
          fontSize: 12,
          color: 'var(--text-color-themeable-secondary)',
        }}
      >
        {token}
      </code>

      {/* Step label */}
      <span
        style={{
          fontFamily: 'var(--text-family-static-body)',
          fontSize: 13,
          fontWeight: 500,
          color: 'var(--text-color-themeable-primary)',
        }}
      >
        {step.label}
      </span>

      {/* Resolved value */}
      <span
        style={{
          fontFamily: 'var(--text-family-static-mono)',
          fontSize: 12,
          color: 'var(--text-color-themeable-secondary)',
          textAlign: 'right',
        }}
      >
        {px || '—'}
      </span>

      {/* Visual bar */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {numericPx > 0 ? (
          <div
            style={{
              width: barWidth,
              height: 16,
              background: 'var(--container-color-static-brand-primary)',
              borderRadius: 3,
              opacity: 0.8,
            }}
          />
        ) : (
          <div
            style={{
              width: 2,
              height: 16,
              background: 'var(--border-color-themeable-secondary)',
              borderRadius: 1,
            }}
          />
        )}
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

const SpacingSection = ({
  prefix,
  title,
  description,
  usage,
}: {
  prefix: 'gap' | 'padding'
  title: string
  description: string
  usage: string
}) => (
  <section style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <h2
        style={{
          margin: 0,
          fontFamily: 'var(--text-family-static-headline)',
          fontSize: 20,
          fontWeight: 400,
          color: 'var(--text-color-themeable-primary)',
        }}
      >
        {title}
      </h2>
      <p
        style={{
          margin: 0,
          fontFamily: 'var(--text-family-static-body)',
          fontSize: 13,
          color: 'var(--text-color-themeable-secondary)',
          lineHeight: '1.5',
          maxWidth: 560,
        }}
      >
        {description}
      </p>
      <p
        style={{
          margin: 0,
          fontFamily: 'var(--text-family-static-mono)',
          fontSize: 12,
          color: 'var(--border-color-static-brand-primary)',
          lineHeight: '1.5',
        }}
      >
        {usage}
      </p>
    </div>

    {/* Column headers */}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '280px 56px 56px 1fr',
        gap: 16,
        paddingBottom: 8,
        borderBottom: '1px solid var(--border-color-themeable-secondary)',
      }}
    >
      {['Token', 'Step', 'Value', 'Scale'].map(h => (
        <span
          key={h}
          style={{
            fontFamily: 'var(--text-family-static-body)',
            fontSize: 11,
            fontWeight: 600,
            color: 'var(--text-color-themeable-secondary)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          {h}
        </span>
      ))}
    </div>

    {STEPS.map(step => (
      <SpacingRow key={step.token} prefix={prefix} step={step} />
    ))}
  </section>
)

// ─── Page ─────────────────────────────────────────────────────────────────────

const SpacingPage = () => (
  <div style={page}>
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
        Spacing
      </h1>
      <p
        style={{
          margin: 0,
          fontFamily: 'var(--text-family-static-body)',
          fontSize: 14,
          color: 'var(--text-color-themeable-secondary)',
          lineHeight: '1.6',
          maxWidth: 580,
        }}
      >
        Gap and padding share a single 9-step scale (0 → 64px). Both sets are static tokens. Use{' '}
        <code style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 13 }}>gap</code>{' '}
        for space between children;{' '}
        <code style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 13 }}>padding</code>{' '}
        for inset space within a container.
      </p>
    </div>

    <SpacingSection
      prefix="gap"
      title="Gap"
      description="Space between sibling elements in a flex or grid layout."
      usage="gap: var(--container-gap-static-primary)"
    />

    <SpacingSection
      prefix="padding"
      title="Padding"
      description="Internal inset space within a container element."
      usage="padding: var(--container-padding-static-primary)"
    />
  </div>
)

export const Spacing: Story = {
  name: 'Spacing',
  render: () => <SpacingPage />,
}
