import React, { useEffect, useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta = {
  title: 'Foundations/Sizing',
  parameters: {
    layout: 'fullscreen',
    docs: { canvas: { sourceState: 'none' } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ─── Shared styles ────────────────────────────────────────────────────────────

const page: React.CSSProperties = {
  background: 'var(--container-color-themeable-primary)',
  minHeight: '100vh',
  padding: '40px 48px',
  display: 'flex',
  flexDirection: 'column',
  gap: 56,
}

const columnHeaders = ['Token', 'Step', 'Value', 'Visual']

const ColHeaders = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '280px 60px 56px 1fr',
      gap: 16,
      paddingBottom: 8,
      borderBottom: '1px solid var(--border-color-themeable-secondary)',
    }}
  >
    {columnHeaders.map(h => (
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
)

// ─── Row ──────────────────────────────────────────────────────────────────────

interface SizeRowProps {
  token: string
  label: string
  /** visual shape: 'bar' draws a tall rect; 'square' draws a square */
  shape?: 'bar' | 'square'
}

const SizeRow = ({ token, label, shape = 'bar' }: SizeRowProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [px, setPx] = useState('')

  useEffect(() => {
    if (!ref.current) return
    setPx(getComputedStyle(ref.current).getPropertyValue(token).trim())
  })

  const numericPx = parseInt(px || '0', 10)

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: '280px 60px 56px 1fr',
        alignItems: 'center',
        gap: 16,
        padding: '10px 0',
        borderBottom: '1px solid var(--border-color-themeable-primary)',
      }}
    >
      <code style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 12, color: 'var(--text-color-themeable-secondary)' }}>
        {token}
      </code>

      <span style={{ fontFamily: 'var(--text-family-static-body)', fontSize: 13, fontWeight: 500, color: 'var(--text-color-themeable-primary)' }}>
        {label}
      </span>

      <span style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 12, color: 'var(--text-color-themeable-secondary)', textAlign: 'right' }}>
        {px || '—'}
      </span>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        {numericPx > 0 ? (
          shape === 'square' ? (
            <div
              style={{
                width: numericPx,
                height: numericPx,
                background: 'var(--container-color-static-brand-primary)',
                borderRadius: 2,
                opacity: 0.8,
              }}
            />
          ) : (
            <div
              style={{
                width: numericPx * 3,
                height: numericPx,
                background: 'var(--container-color-static-brand-primary)',
                borderRadius: 2,
                opacity: 0.8,
              }}
            />
          )
        ) : (
          <div style={{ width: 2, height: 8, background: 'var(--border-color-themeable-secondary)', borderRadius: 1 }} />
        )}
      </div>
    </div>
  )
}

// ─── Sections ─────────────────────────────────────────────────────────────────

const Section = ({ title, description, usage, children }: {
  title: string
  description: string
  usage?: string
  children: React.ReactNode
}) => (
  <section style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <h2 style={{ margin: 0, fontFamily: 'var(--text-family-static-headline)', fontSize: 20, fontWeight: 400, color: 'var(--text-color-themeable-primary)' }}>
        {title}
      </h2>
      <p style={{ margin: 0, fontFamily: 'var(--text-family-static-body)', fontSize: 13, color: 'var(--text-color-themeable-secondary)', lineHeight: '1.5', maxWidth: 560 }}>
        {description}
      </p>
      {usage && (
        <p style={{ margin: 0, fontFamily: 'var(--text-family-static-mono)', fontSize: 12, color: 'var(--border-color-static-brand-primary)', lineHeight: '1.5' }}>
          {usage}
        </p>
      )}
    </div>
    <ColHeaders />
    {children}
  </section>
)

// ─── Token sets ───────────────────────────────────────────────────────────────

const CONTAINER_STEPS = ['xxs', 'xs', 'small', 'primary', 'large', 'xl', '2xl', '3xl']
const STEP_LABELS: Record<string, string> = {
  xxs: 'XXS', xs: 'XS', small: 'Small', primary: 'Primary',
  large: 'Large', xl: 'XL', '2xl': '2XL', '3xl': '3XL',
}

const ICON_STEPS = [
  { step: 'xs',     label: 'XS'     },
  { step: 'small',  label: 'Small'  },
  { step: 'medium', label: 'Medium' },
  { step: 'large',  label: 'Large'  },
  { step: 'xl',     label: 'XL'     },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

const SizingPage = () => (
  <div style={page}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, borderBottom: '1px solid var(--border-color-themeable-primary)', paddingBottom: 32 }}>
      <h1 style={{ margin: 0, fontFamily: 'var(--text-family-static-headline)', fontSize: 32, fontWeight: 400, color: 'var(--text-color-themeable-primary)', lineHeight: '1.2' }}>
        Sizing
      </h1>
      <p style={{ margin: 0, fontFamily: 'var(--text-family-static-body)', fontSize: 14, color: 'var(--text-color-themeable-secondary)', lineHeight: '1.6', maxWidth: 560 }}>
        Explicit dimension tokens for container height, container width, and icon sizes. Use these
        when you need a fixed dimension rather than a spacing offset. The container scale runs 4–64px;
        icons have an independent 5-step scale.
      </p>
    </div>

    <Section
      title="Container Height"
      description="Fixed heights for UI elements like chips, rows, and control components."
      usage="height: var(--container-height-static-primary)"
    >
      {CONTAINER_STEPS.map(step => (
        <SizeRow
          key={step}
          token={`--container-height-static-${step}`}
          label={STEP_LABELS[step]}
          shape="bar"
        />
      ))}
    </Section>

    <Section
      title="Container Width"
      description="Fixed widths for constrained-width elements. Includes a max-content cap for readable text columns."
      usage="width: var(--container-width-static-primary)"
    >
      {CONTAINER_STEPS.map(step => (
        <SizeRow
          key={step}
          token={`--container-width-static-${step}`}
          label={STEP_LABELS[step]}
          shape="bar"
        />
      ))}
      <SizeRow
        token="--container-width-static-max-content"
        label="Max content"
        shape="bar"
      />
    </Section>

    <Section
      title="Icon Size"
      description="Square dimensions for icon elements. Always apply both width and height tokens together."
      usage="width: var(--icon-width-static-medium); height: var(--icon-height-static-medium)"
    >
      {ICON_STEPS.map(({ step, label }) => (
        <SizeRow
          key={step}
          token={`--icon-width-static-${step}`}
          label={label}
          shape="square"
        />
      ))}
    </Section>
  </div>
)

export const Sizing: Story = {
  name: 'Sizing',
  render: () => <SizingPage />,
}
