import React, { useEffect, useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { DateField } from './DateField'
import { DatePicker } from '../DatePicker/DatePicker'

const meta: Meta<typeof DateField> = {
  title: 'Inputs/DateField',
  component: DateField,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: {
    label: 'Date',
    placeholder: 'Select a date',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 360 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

// ── States ────────────────────────────────────────────────────────────────────

export const Empty: Story = {}

export const WithValue: Story = {
  args: { value: new Date(2025, 10, 3) },
}

export const WithLeadingIcon: Story = {
  args: { value: new Date(2025, 10, 3), leadingIcon: faTag },
}

export const WithHint: Story = {
  args: { hint: 'Select your appointment date.' },
}

export const WithError: Story = {
  args: { error: 'A date is required.', required: true },
}

export const Disabled: Story = {
  args: { value: new Date(2025, 10, 3), disabled: true },
}

export const Required: Story = {
  args: { required: true },
}

// ── All states ────────────────────────────────────────────────────────────────

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 360 }}>
      <DateField label="Empty" />
      <DateField label="With value" value={new Date(2025, 10, 3)} />
      <DateField label="With hint" hint="Select your appointment date." />
      <DateField label="Error" error="A date is required." required />
      <DateField label="Disabled" value={new Date(2025, 10, 3)} disabled />
    </div>
  ),
}

// ── Interactive (simulates wiring to a picker) ────────────────────────────────

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState<Date | null>(null)
    const [open, setOpen] = useState(false)

    // Simulates what the DatePicker will do — pick today's date on open
    const handleOpen = () => {
      setOpen(true)
      setTimeout(() => {
        setValue(new Date())
        setOpen(false)
      }, 800)
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <DateField
          label="Date"
          value={value}
          onOpen={handleOpen}
        />
        <p style={{ fontFamily: 'monospace', fontSize: 12, margin: 0, color: 'var(--text-color-themeable-tertiary)' }}>
          {open ? 'Picker open…' : value ? `Selected: ${value.toISOString()}` : '(none)'}
        </p>
      </div>
    )
  },
}

// ── With DatePicker ───────────────────────────────────────────────────────────

export const WithDatePicker: Story = {
  render: () => {
    const [value, setValue] = useState<Date | null>(null)
    const [open, setOpen] = useState(false)
    const wrapperRef = useRef<HTMLDivElement>(null)

    // Close picker on outside click
    useEffect(() => {
      if (!open) return
      const handleOutside = (e: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
          setOpen(false)
        }
      }
      document.addEventListener('mousedown', handleOutside)
      return () => document.removeEventListener('mousedown', handleOutside)
    }, [open])

    // Close picker on Escape
    useEffect(() => {
      if (!open) return
      const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
      document.addEventListener('keydown', handleKey)
      return () => document.removeEventListener('keydown', handleKey)
    }, [open])

    return (
      <div ref={wrapperRef} style={{ position: 'relative', display: 'inline-block' }}>
        <DateField
          label="Appointment date"
          value={value}
          placeholder="Select a date"
          onOpen={() => setOpen((o) => !o)}
        />
        {open && (
          <div style={{ position: 'absolute', top: 'calc(100% + 4px)', left: 0, zIndex: 100 }}>
            <DatePicker
              value={value}
              onConfirm={(date) => { setValue(date); setOpen(false) }}
              onCancel={() => setOpen(false)}
            />
          </div>
        )}
      </div>
    )
  },
}
