import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { NumberField } from './NumberField'

const meta = {
  title: 'Inputs/NumberField',
  component: NumberField,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '352px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NumberField>

export default meta
type Story = StoryObj<typeof meta>

// ── Base states ───────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    label: 'Quantity',
    placeholder: '0',
  },
}

export const WithValue: Story = {
  args: {
    label: 'Quantity',
    value: 42,
  },
}

export const WithHint: Story = {
  args: {
    label: 'Quantity',
    placeholder: '0',
    hint: 'Enter a number between 1 and 100',
  },
}

export const WithError: Story = {
  args: {
    label: 'Quantity',
    placeholder: '0',
    error: 'Value must be at least 1',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Quantity',
    value: 10,
    disabled: true,
  },
}

// ── Min / Max / Step ──────────────────────────────────────────────────────────

export const WithMinMax: Story = {
  args: {
    label: 'Quantity',
    defaultValue: 5,
    min: 1,
    max: 10,
    hint: 'Min 1, Max 10',
  },
}

export const WithStep: Story = {
  args: {
    label: 'Amount',
    defaultValue: 0,
    step: 5,
    hint: 'Increments by 5',
  },
}

// ── With leading icon ─────────────────────────────────────────────────────────

export const WithLeadingIcon: Story = {
  args: {
    label: 'Count',
    placeholder: '0',
    leadingIcon: faHashtag,
  },
}

// ── All states ────────────────────────────────────────────────────────────────

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 352 }}>
      <NumberField label="Label" placeholder="0" hint="Helper text" />
      <NumberField label="Label" defaultValue={10} min={1} max={20} hint="Helper text" />
      <NumberField label="Label" placeholder="0" disabled />
      <NumberField label="Label" placeholder="0" error="This field is required" />
    </div>
  ),
}
