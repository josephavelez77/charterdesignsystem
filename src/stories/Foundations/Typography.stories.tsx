import React, { useEffect, useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta = {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'fullscreen',
    docs: { canvas: { sourceState: 'none' } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ─── Shared ───────────────────────────────────────────────────────────────────

const page: React.CSSProperties = {
  background: 'var(--container-color-themeable-primary)',
  minHeight: '100vh',
  padding: '40px 48px',
  display: 'flex',
  flexDirection: 'column',
  gap: 56,
}

const SectionHeader = ({ title, description }: { title: string; description: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
    <h2 style={{ margin: 0, fontFamily: 'var(--text-family-static-headline)', fontSize: 20, fontWeight: 400, color: 'var(--text-color-themeable-primary)' }}>
      {title}
    </h2>
    <p style={{ margin: 0, fontFamily: 'var(--text-family-static-body)', fontSize: 13, color: 'var(--text-color-themeable-secondary)', lineHeight: '1.5', maxWidth: 560 }}>
      {description}
    </p>
  </div>
)

const TokenBadge = ({ token }: { token: string }) => (
  <code style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 11, color: 'var(--text-color-themeable-secondary)', background: 'var(--container-color-themeable-secondary)', padding: '2px 5px', borderRadius: 4, whiteSpace: 'nowrap' as const }}>
    {token}
  </code>
)

const useTokenValue = (token: string) => {
  const ref = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState('')
  useEffect(() => {
    if (!ref.current) return
    setValue(getComputedStyle(ref.current).getPropertyValue(token).trim())
  })
  return { ref, value }
}

// ─── 1. Font Families ─────────────────────────────────────────────────────────

const FAMILIES = [
  {
    token: '--text-family-static-body',
    name: 'DM Sans',
    label: 'Body',
    usage: 'All UI text — labels, descriptions, inputs, navigation.',
    specimen: 'The quick brown fox jumps over the lazy dog',
    role: 'Sans-serif',
  },
  {
    token: '--text-family-static-headline',
    name: 'DM Serif Display',
    label: 'Headline',
    usage: 'Page headings, card titles, display text, and marketing copy.',
    specimen: 'The quick brown fox jumps over the lazy dog',
    role: 'Serif display',
  },
  {
    token: '--text-family-static-mono',
    name: 'JetBrains Mono',
    label: 'Mono',
    usage: 'Code blocks, token names, keyboard shortcuts, and numeric data.',
    specimen: 'const value = tokens["--color-brand"]',
    role: 'Monospace',
  },
]

const FamilyCard = ({ token, name, label, usage, specimen, role }: typeof FAMILIES[0]) => {
  const { ref, value } = useTokenValue(token)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        padding: 24,
        background: 'var(--container-color-themeable-secondary)',
        border: '1px solid var(--border-color-themeable-primary)',
        borderRadius: 8,
      }}
    >
      {/* Specimen */}
      <p
        ref={ref}
        style={{
          margin: 0,
          fontFamily: `var(${token})`,
          fontSize: 22,
          fontWeight: 400,
          color: 'var(--text-color-themeable-primary)',
          lineHeight: '1.4',
        }}
      >
        {specimen}
      </p>

      {/* Meta */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, borderTop: '1px solid var(--border-color-themeable-primary)', paddingTop: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <span style={{ fontFamily: 'var(--text-family-static-body)', fontSize: 14, fontWeight: 600, color: 'var(--text-color-themeable-primary)' }}>
            {name}
          </span>
          <span style={{ fontFamily: 'var(--text-family-static-body)', fontSize: 12, color: 'var(--text-color-themeable-secondary)' }}>
            {role}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: 'var(--text-family-static-body)', fontSize: 12, fontWeight: 500, color: 'var(--text-color-themeable-secondary)' }}>
            {label}
          </span>
          <TokenBadge token={token} />
        </div>
        <code style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 11, color: 'var(--text-color-themeable-secondary)', opacity: 0.7 }}>
          {value || '—'}
        </code>
        <p style={{ margin: 0, fontFamily: 'var(--text-family-static-body)', fontSize: 13, color: 'var(--text-color-themeable-secondary)', lineHeight: '1.5' }}>
          {usage}
        </p>
      </div>
    </div>
  )
}

// ─── 2. Type Scale ────────────────────────────────────────────────────────────
//
// Each step shows rendered text at the correct size + line-height,
// with both tokens labelled inline.

interface TypeStep {
  name: string
  sizeToken: string
  lineToken: string
  family: 'headline' | 'body' | 'mono'
  weight: number
}

const TYPE_SCALE: TypeStep[] = [
  { name: 'Display 1',  sizeToken: '--text-size-static-display1',   lineToken: '--text-line-static-display1',   family: 'headline', weight: 400 },
  { name: 'Display 2',  sizeToken: '--text-size-static-display2',   lineToken: '--text-line-static-display2',   family: 'headline', weight: 400 },
  { name: 'Display 3',  sizeToken: '--text-size-static-display3',   lineToken: '--text-line-static-display3',   family: 'headline', weight: 400 },
  { name: 'Headline 1', sizeToken: '--text-size-static-headline1',  lineToken: '--text-line-static-headline1',  family: 'body',     weight: 600 },
  { name: 'Headline 2', sizeToken: '--text-size-static-headline2',  lineToken: '--text-line-static-headline2',  family: 'body',     weight: 600 },
  { name: 'Headline 3', sizeToken: '--text-size-static-headline3',  lineToken: '--text-line-static-headline3',  family: 'body',     weight: 600 },
  { name: 'Body 1',     sizeToken: '--text-size-static-body1',      lineToken: '--text-line-static-body1',      family: 'body',     weight: 400 },
  { name: 'Body 2',     sizeToken: '--text-size-static-body2',      lineToken: '--text-line-static-body2',      family: 'body',     weight: 400 },
  { name: 'Caption',    sizeToken: '--text-size-static-caption',    lineToken: '--text-line-static-caption',    family: 'body',     weight: 400 },
]

const FAMILY_VAR: Record<string, string> = {
  headline: 'var(--text-family-static-headline)',
  body:     'var(--text-family-static-body)',
  mono:     'var(--text-family-static-mono)',
}

const TypeScaleRow = ({ step }: { step: TypeStep }) => {
  const sizeRef = useRef<HTMLDivElement>(null)
  const [sizeVal, setSizeVal] = useState('')
  const [lineVal, setLineVal] = useState('')

  useEffect(() => {
    if (!sizeRef.current) return
    setSizeVal(getComputedStyle(sizeRef.current).getPropertyValue(step.sizeToken).trim())
    setLineVal(getComputedStyle(sizeRef.current).getPropertyValue(step.lineToken).trim())
  })

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '260px 1fr',
        gap: 24,
        alignItems: 'start',
        padding: '20px 0',
        borderBottom: '1px solid var(--border-color-themeable-primary)',
      }}
    >
      {/* Labels */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 4 }}>
        <span style={{ fontFamily: 'var(--text-family-static-body)', fontSize: 12, fontWeight: 600, color: 'var(--text-color-themeable-primary)' }}>
          {step.name}
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TokenBadge token={step.sizeToken} />
          <TokenBadge token={step.lineToken} />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <span style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 11, color: 'var(--text-color-themeable-secondary)' }}>{sizeVal}</span>
          <span style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 11, color: 'var(--text-color-themeable-secondary)', opacity: 0.5 }}>/</span>
          <span style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 11, color: 'var(--text-color-themeable-secondary)' }}>{lineVal}</span>
        </div>
      </div>

      {/* Specimen */}
      <div
        ref={sizeRef}
        style={{
          fontFamily: FAMILY_VAR[step.family],
          fontSize: `var(${step.sizeToken})`,
          lineHeight: `var(${step.lineToken})`,
          fontWeight: step.weight,
          color: 'var(--text-color-themeable-primary)',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        The quick brown fox
      </div>
    </div>
  )
}

// ─── 3. Font Weight ───────────────────────────────────────────────────────────

const WEIGHTS = [
  { token: '--text-weight-static-regular',  label: 'Regular',  value: 400 },
  { token: '--text-weight-static-medium',   label: 'Medium',   value: 500 },
  { token: '--text-weight-static-semibold', label: 'Semibold', value: 600 },
]

const WeightRow = ({ token, label, value }: typeof WEIGHTS[0]) => {
  const { ref, value: resolved } = useTokenValue(token)
  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: '260px 60px 1fr',
        alignItems: 'center',
        gap: 24,
        padding: '16px 0',
        borderBottom: '1px solid var(--border-color-themeable-primary)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontFamily: 'var(--text-family-static-body)', fontSize: 12, fontWeight: 600, color: 'var(--text-color-themeable-primary)' }}>
          {label}
        </span>
        <TokenBadge token={token} />
        <span style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 11, color: 'var(--text-color-themeable-secondary)' }}>
          {resolved || value}
        </span>
      </div>

      <span style={{ fontFamily: 'var(--text-family-static-mono)', fontSize: 12, color: 'var(--text-color-themeable-secondary)' }}>
        {value}
      </span>

      <span style={{
        fontFamily: 'var(--text-family-static-body)',
        fontSize: 18,
        fontWeight: value,
        color: 'var(--text-color-themeable-primary)',
        lineHeight: '1.3',
      }}>
        The quick brown fox jumps over the lazy dog
      </span>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const TypographyPage = () => (
  <div style={page}>
    {/* Header */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, borderBottom: '1px solid var(--border-color-themeable-primary)', paddingBottom: 32 }}>
      <h1 style={{ margin: 0, fontFamily: 'var(--text-family-static-headline)', fontSize: 32, fontWeight: 400, color: 'var(--text-color-themeable-primary)', lineHeight: '1.2' }}>
        Typography
      </h1>
      <p style={{ margin: 0, fontFamily: 'var(--text-family-static-body)', fontSize: 14, color: 'var(--text-color-themeable-secondary)', lineHeight: '1.6', maxWidth: 560 }}>
        Three font families, nine type scale steps, three weights. Fonts are not bundled — the
        consuming app must load DM Sans, DM Serif Display, and JetBrains Mono from Google Fonts.
      </p>
    </div>

    {/* Font families */}
    <section style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <SectionHeader
        title="Font Families"
        description="Each family covers a distinct role in the UI. Always reference the token — never hardcode a font-family string."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
        {FAMILIES.map(f => <FamilyCard key={f.token} {...f} />)}
      </div>
    </section>

    {/* Type scale */}
    <section style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <SectionHeader
        title="Type Scale"
        description="Nine steps from Display to Caption. Each step pairs a font-size token with a line-height token. Display steps use the headline (serif) family; all others use the body (sans) family."
      />
      {TYPE_SCALE.map(step => (
        <TypeScaleRow key={step.name} step={step} />
      ))}
    </section>

    {/* Font weight */}
    <section style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <SectionHeader
        title="Font Weight"
        description="Three weights. Regular for body copy, Medium for emphasis within body text, Semibold for headings and interactive labels."
      />
      {WEIGHTS.map(w => (
        <WeightRow key={w.token} {...w} />
      ))}
    </section>
  </div>
)

export const Typography: Story = {
  name: 'Typography',
  render: () => <TypographyPage />,
}
