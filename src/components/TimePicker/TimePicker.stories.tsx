import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { TimePicker } from './TimePicker'
import { TimeField } from '../TimeField/TimeField'
import type { TimeValue } from './TimePicker'

const meta: Meta<typeof TimePicker> = {
  title: 'Inputs/TimePicker',
  component: TimePicker,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// ── 12-hour ───────────────────────────────────────────────────────────────────

export const TwelveHour: Story = {
  render: () => {
    const [value, setValue] = useState<TimeValue>({ hours: 14, minutes: 30 })
    return (
      <TimePicker
        value={value}
        format="12h"
        onConfirm={setValue}
        onCancel={() => {}}
      />
    )
  },
}

// ── 24-hour ───────────────────────────────────────────────────────────────────

export const TwentyFourHour: Story = {
  render: () => {
    const [value, setValue] = useState<TimeValue>({ hours: 14, minutes: 30 })
    return (
      <TimePicker
        value={value}
        format="24h"
        onConfirm={setValue}
        onCancel={() => {}}
      />
    )
  },
}

// ── Default (midnight) ────────────────────────────────────────────────────────

export const DefaultTime: Story = {
  render: () => (
    <TimePicker format="12h" onConfirm={() => {}} onCancel={() => {}} />
  ),
}

// ── TimeField + TimePicker integration ────────────────────────────────────────

export const WithTimeField: Story = {
  render: () => {
    const [value, setValue] = useState<TimeValue | null>(null)
    const [open, setOpen] = useState(false)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: 280 }}>
        <TimeField
          label="Meeting time"
          value={value}
          format="12h"
          placeholder="Select a time"
          onOpen={() => setOpen(true)}
        />
        {open && (
          <TimePicker
            value={value}
            format="12h"
            onConfirm={(t) => { setValue(t); setOpen(false) }}
            onCancel={() => setOpen(false)}
          />
        )}
      </div>
    )
  },
}

export const WithTimeField24h: Story = {
  render: () => {
    const [value, setValue] = useState<TimeValue | null>(null)
    const [open, setOpen] = useState(false)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: 280 }}>
        <TimeField
          label="Start time"
          value={value}
          format="24h"
          placeholder="Select a time"
          onOpen={() => setOpen(true)}
        />
        {open && (
          <TimePicker
            value={value}
            format="24h"
            onConfirm={(t) => { setValue(t); setOpen(false) }}
            onCancel={() => setOpen(false)}
          />
        )}
      </div>
    )
  },
}
