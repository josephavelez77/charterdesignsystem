import React, { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from './ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  title: 'Feedback/ProgressBar',
  component: ProgressBar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

// ── Determinate ───────────────────────────────────────────────────────────────

export const Determinate: Story = {
  args: { value: 60 },
}

export const DeterminateEmpty: Story = {
  args: { value: 0 },
}

export const DeterminateFull: Story = {
  args: { value: 100 },
}

export const AllPercentages: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 360 }}>
      {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((v) => (
        <div key={v} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <ProgressBar value={v} />
          <span style={{ fontSize: 11, color: 'var(--text-color-themeable-tertiary)' }}>{v}%</span>
        </div>
      ))}
    </div>
  ),
}

// ── Indeterminate ─────────────────────────────────────────────────────────────

export const Indeterminate: Story = {
  args: {},
}

// ── Animated demo ─────────────────────────────────────────────────────────────

export const AnimatedDemo: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(() => {
      if (!running) return
      if (value >= 100) { setRunning(false); return }
      const t = setTimeout(() => setValue((v) => Math.min(100, v + 5)), 200)
      return () => clearTimeout(t)
    }, [running, value])

    const reset = () => { setValue(0); setRunning(false) }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 360 }}>
        <ProgressBar value={value} />
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            onClick={() => setRunning(true)}
            disabled={running || value === 100}
            style={{ padding: '6px 12px', cursor: 'pointer' }}
          >
            Start
          </button>
          <button onClick={reset} style={{ padding: '6px 12px', cursor: 'pointer' }}>
            Reset
          </button>
          <span style={{ fontSize: 13, color: 'var(--text-color-themeable-tertiary)', alignSelf: 'center' }}>
            {value}%
          </span>
        </div>
      </div>
    )
  },
}
