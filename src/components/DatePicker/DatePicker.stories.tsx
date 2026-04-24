import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from './DatePicker'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '24px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

// ── States ────────────────────────────────────────────────────────────────────

export const Default: Story = {}

export const WithInitialDate: Story = {
  args: { value: new Date(2025, 10, 3) },
}

// ── Interactive ───────────────────────────────────────────────────────────────

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | null>(null)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <DatePicker
          value={selected}
          onConfirm={(d) => setSelected(d)}
          onCancel={() => setSelected(null)}
        />
        <p style={{ fontFamily: 'monospace', fontSize: 12, margin: 0, color: 'var(--text-color-themeable-tertiary)' }}>
          {selected ? `Selected: ${selected.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}` : '(none)'}
        </p>
      </div>
    )
  },
}
