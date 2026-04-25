import type { Meta, StoryObj } from '@storybook/react'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { Badge } from './Badge'
import { IconButton } from '../IconButton/IconButton'

const meta: Meta<typeof Badge> = {
  title: 'Chips/Badge',
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

// ── In context ───────────────────────────────────────────────────────────────

export const OnIconButton: Story = {
  render: () => (
    <div style={{ position: 'relative', display: 'inline-flex' }}>
      <IconButton icon={faMessage} aria-label="Messages" variant="neutral" />
      <Badge
        variant="numeric"
        value={12}
        max={99}
        style={{ position: 'absolute', top: '-6px', right: '-6px' }}
      />
    </div>
  ),
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
