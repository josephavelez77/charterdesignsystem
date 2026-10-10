import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Slider } from './Slider'

const percent = (v: number) => `${v}%`

const meta: Meta<typeof Slider> = {
  title: 'Inputs/Slider',
  component: Slider,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['discrete', 'continuous'] },
    label: { control: 'text' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    showSelection: { control: 'boolean' },
    showLowLabel: { control: 'boolean' },
    showHighLabel: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { label: 'Volume', formatValue: percent },
}

export default meta
type Story = StoryObj<typeof Slider>

// Single-slider stories render at the Figma instance width; grid stories size themselves
const fixedWidth: Story['decorators'] = [
  (Story) => (
    <div style={{ width: 277 }}>
      <Story />
    </div>
  ),
]

const Caption = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontSize: 12, fontFamily: 'var(--text-family-static-body)', color: 'var(--text-color-themeable-tertiary)' }}>{children}</span>
)

const Grid = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 277px)', gap: 32 }}>{children}</div>
)

const Cell = ({ caption, children }: { caption: string; children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    {children}
    <Caption>{caption}</Caption>
  </div>
)

// ── Variants ─────────────────────────────────────────────────────────────────

export const Discrete: Story = {
  decorators: fixedWidth,
  args: { variant: 'discrete', defaultValue: 50 },
}

export const Continuous: Story = {
  decorators: fixedWidth,
  args: { variant: 'continuous', defaultValue: 43 },
}

export const Disabled: Story = {
  decorators: fixedWidth,
  args: { variant: 'discrete', defaultValue: 50, disabled: true },
}

// ── Optional parts ───────────────────────────────────────────────────────────

export const OptionalParts: Story = {
  render: () => (
    <Grid>
      <Cell caption="All parts">
        <Slider label="Volume" defaultValue={50} formatValue={percent} />
      </Cell>
      <Cell caption="No label (aria-label instead)">
        <Slider aria-label="Volume" defaultValue={50} formatValue={percent} />
      </Cell>
      <Cell caption="showSelection = false">
        <Slider label="Volume" defaultValue={50} formatValue={percent} showSelection={false} />
      </Cell>
      <Cell caption="showLowLabel = false">
        <Slider label="Volume" defaultValue={50} formatValue={percent} showLowLabel={false} />
      </Cell>
      <Cell caption="showHighLabel = false">
        <Slider label="Volume" defaultValue={50} formatValue={percent} showHighLabel={false} />
      </Cell>
      <Cell caption="Custom end labels">
        <Slider label="Contrast" defaultValue={50} formatValue={percent} lowLabel="Low" highLabel="High" />
      </Cell>
    </Grid>
  ),
}

// ── Discrete step counts ─────────────────────────────────────────────────────

export const StepCounts: Story = {
  name: 'Discrete · step counts',
  render: () => (
    <Grid>
      {[12, 10, 8, 6, 5, 4, 3].map((n) => (
        <Cell key={n} caption={`min=1 max=${n} step=1`}>
          <Slider label="Intensity" min={1} max={n} step={1} defaultValue={1} formatValue={(v) => `${v} / ${n}`} lowLabel="1" highLabel={String(n)} />
        </Cell>
      ))}
    </Grid>
  ),
}

export const StepPositions: Story = {
  name: 'Discrete · positions',
  render: () => (
    <Grid>
      <Cell caption="First">
        <Slider label="Volume" defaultValue={0} formatValue={percent} />
      </Cell>
      <Cell caption="Middle">
        <Slider label="Volume" defaultValue={50} formatValue={percent} />
      </Cell>
      <Cell caption="Last">
        <Slider label="Volume" defaultValue={100} formatValue={percent} />
      </Cell>
    </Grid>
  ),
}

// ── Controlled ───────────────────────────────────────────────────────────────

export const Controlled: Story = {
  decorators: fixedWidth,
  render: () => {
    const [value, setValue] = useState(30)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Slider variant="continuous" label="Opacity" value={value} onChange={setValue} formatValue={percent} />
        <Caption>value = {value}</Caption>
      </div>
    )
  },
}
