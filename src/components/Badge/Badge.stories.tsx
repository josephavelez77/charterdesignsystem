import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    variant: 'numeric',
    value: 5,
    max: 99,
  },
  argTypes: {
    variant: { control: 'select', options: ['numeric', 'dot'] },
    value: { control: 'number' },
    max: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ── Numeric ───────────────────────────────────────────────────────────────────

export const NumericDefault: Story = {
  args: { variant: 'numeric', value: 5 },
}

export const NumericWithMax: Story = {
  args: { variant: 'numeric', value: 999, max: 99 },
}

export const NumericUnderMax: Story = {
  args: { variant: 'numeric', value: 42, max: 99 },
}

// ── Dot ───────────────────────────────────────────────────────────────────────

export const Dot: Story = {
  args: { variant: 'dot' },
}

// ── All variants ──────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Badge variant="numeric" value={5} />
      <Badge variant="numeric" value={42} max={99} />
      <Badge variant="numeric" value={999} max={99} />
      <Badge variant="dot" />
    </div>
  ),
}
