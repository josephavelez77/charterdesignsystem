import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { MultiSelectField } from './MultiSelectField'

const OPTIONS = [
  { value: 'design',      label: 'Design' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'product',     label: 'Product' },
  { value: 'marketing',   label: 'Marketing' },
  { value: 'sales',       label: 'Sales' },
  { value: 'support',     label: 'Customer Support', disabled: true },
]

const meta: Meta<typeof MultiSelectField> = {
  title: 'Components/MultiSelectField',
  component: MultiSelectField,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: {
    label: 'Teams',
    options: OPTIONS,
    placeholder: 'Select teams',
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

export const WithSelections: Story = {
  args: { defaultValue: ['design', 'engineering', 'product'] },
}

export const WithOverflow: Story = {
  args: { defaultValue: ['design', 'engineering', 'product', 'marketing', 'sales'] },
}

export const WithLeadingIcon: Story = {
  args: { leadingIcon: faTag, defaultValue: ['design', 'engineering'] },
}

export const WithHint: Story = {
  args: { hint: 'Select all that apply.' },
}

export const WithError: Story = {
  args: {
    defaultValue: [],
    error: 'At least one team is required.',
    required: true,
  },
}

export const Disabled: Story = {
  args: { defaultValue: ['design', 'engineering'], disabled: true },
}

// ── All states ────────────────────────────────────────────────────────────────

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 360 }}>
      <MultiSelectField label="Empty" options={OPTIONS} placeholder="Select teams" />
      <MultiSelectField label="With selections" options={OPTIONS} defaultValue={['design', 'engineering', 'product']} />
      <MultiSelectField label="Overflow" options={OPTIONS} defaultValue={['design', 'engineering', 'product', 'marketing', 'sales']} />
      <MultiSelectField label="With hint" options={OPTIONS} hint="Select all that apply." />
      <MultiSelectField label="Error" options={OPTIONS} error="At least one team is required." required />
      <MultiSelectField label="Disabled" options={OPTIONS} defaultValue={['design']} disabled />
    </div>
  ),
}

// ── Controlled ────────────────────────────────────────────────────────────────

export const Controlled: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>(['design'])
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <MultiSelectField
          label="Teams"
          options={OPTIONS}
          value={values}
          onChange={setValues}
        />
        <p style={{ fontFamily: 'monospace', fontSize: 12, margin: 0 }}>
          Selected: {values.join(', ') || '(none)'}
        </p>
      </div>
    )
  },
}
