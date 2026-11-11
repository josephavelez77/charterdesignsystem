import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { SegmentedControl } from './SegmentedControl'
import type { SegmentedControlOption } from './SegmentedControl'

const LABELS = ['All', 'Recent', 'Starred', 'Shared', 'Archived']
const opts = (n: number): SegmentedControlOption[] =>
  LABELS.slice(0, n).map((label) => ({ value: label.toLowerCase(), label }))

const meta: Meta<typeof SegmentedControl> = {
  title: 'Inputs/SegmentedControl',
  component: SegmentedControl,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['brandPrimary', 'brandSecondary', 'neutral'] },
    disabled: { control: 'boolean' },
    value: { control: 'text' },
    defaultValue: { control: 'text' },
  },
  args: {
    'aria-label': 'Filter items',
    options: opts(3),
  },
}

export default meta
type Story = StoryObj<typeof SegmentedControl>

const Caption = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      width: 120,
      fontSize: 12,
      fontFamily: 'var(--text-family-static-body)',
      color: 'var(--text-color-themeable-tertiary)',
    }}
  >
    {children}
  </span>
)

const Rows = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>{children}</div>
)

const Row = ({ caption, children }: { caption: string; children: React.ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
    <Caption>{caption}</Caption>
    {children}
  </div>
)

// ── Variants ─────────────────────────────────────────────────────────────────

export const BrandPrimary: Story = {
  args: { variant: 'brandPrimary' },
}

export const BrandSecondary: Story = {
  args: { variant: 'brandSecondary' },
}

export const Neutral: Story = {
  args: { variant: 'neutral' },
}

export const Disabled: Story = {
  args: { variant: 'neutral', disabled: true },
}

// ── Examples ─────────────────────────────────────────────────────────────────

export const SegmentCounts: Story = {
  name: 'Segment counts',
  render: () => (
    <Rows>
      {[2, 3, 4, 5].map((n) => (
        <Row key={n} caption={`${n} options`}>
          <SegmentedControl aria-label="Filter items" options={opts(n)} />
        </Row>
      ))}
    </Rows>
  ),
}

export const ActivePositions: Story = {
  name: 'Active positions',
  render: () => (
    <Rows>
      {LABELS.map((label, i) => (
        <Row key={label} caption={`Position ${i + 1}`}>
          <SegmentedControl aria-label="Filter items" options={opts(5)} defaultValue={label.toLowerCase()} />
        </Row>
      ))}
    </Rows>
  ),
}

export const Styles: Story = {
  render: () => (
    <Rows>
      {(['brandPrimary', 'brandSecondary', 'neutral'] as const).map((variant) => (
        <Row key={variant} caption={variant}>
          <SegmentedControl aria-label="Filter items" options={opts(3)} variant={variant} />
        </Row>
      ))}
    </Rows>
  ),
}

export const DisabledStates: Story = {
  name: 'Disabled states',
  render: () => (
    <Rows>
      <Row caption="disabled = false">
        <SegmentedControl aria-label="Filter items" options={opts(3)} variant="neutral" />
      </Row>
      <Row caption="disabled = true">
        <SegmentedControl aria-label="Filter items" options={opts(3)} variant="neutral" disabled />
      </Row>
      <Row caption="One option disabled">
        <SegmentedControl
          aria-label="Filter items"
          options={opts(3).map((o) => (o.value === 'starred' ? { ...o, disabled: true } : o))}
        />
      </Row>
    </Rows>
  ),
}

export const WithIcons: Story = {
  name: 'With icons',
  render: () => {
    const withIcons = (leading: boolean, trailing: boolean) =>
      opts(3).map((o) => ({
        ...o,
        leadingIcon: leading ? faCircleUser : undefined,
        trailingIcon: trailing ? faCircleUser : undefined,
      }))
    return (
      <Rows>
        <Row caption="No icons">
          <SegmentedControl aria-label="Filter items" options={withIcons(false, false)} />
        </Row>
        <Row caption="Leading only">
          <SegmentedControl aria-label="Filter items" options={withIcons(true, false)} />
        </Row>
        <Row caption="Trailing only">
          <SegmentedControl aria-label="Filter items" options={withIcons(false, true)} />
        </Row>
        <Row caption="Leading + trailing">
          <SegmentedControl aria-label="Filter items" options={withIcons(true, true)} />
        </Row>
      </Rows>
    )
  },
}

export const Widths: Story = {
  render: () => (
    <Rows>
      <Row caption="equalWidth = true">
        <SegmentedControl aria-label="Filter items" options={opts(5)} />
      </Row>
      <Row caption="equalWidth = false">
        <SegmentedControl aria-label="Filter items" options={opts(5)} equalWidth={false} />
      </Row>
    </Rows>
  ),
}

// ── Controlled ───────────────────────────────────────────────────────────────

export const Controlled: Story = {
  render: () => {
    const [view, setView] = useState('week')
    return (
      <Rows>
        <SegmentedControl
          aria-label="Calendar view"
          options={[
            { value: 'day', label: 'Day' },
            { value: 'week', label: 'Week' },
            { value: 'month', label: 'Month' },
          ]}
          value={view}
          onChange={setView}
        />
        <Caption>value = {view}</Caption>
      </Rows>
    )
  },
}
