import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    label: 'Checkbox label',
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ── States ────────────────────────────────────────────────────────────────────

export const Unchecked: Story = {
  args: { label: 'Checkbox label' },
}

export const Checked: Story = {
  args: { label: 'Checkbox label', defaultChecked: true },
}

export const WithoutLabel: Story = {
  args: { label: undefined },
}

export const Required: Story = {
  args: { label: 'Accept terms and conditions', required: true },
}

export const Disabled: Story = {
  args: { label: 'Checkbox label', disabled: true },
}

export const DisabledChecked: Story = {
  args: { label: 'Checkbox label', disabled: true, defaultChecked: true },
}

// ── Controlled ────────────────────────────────────────────────────────────────

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        label={checked ? 'Checked' : 'Unchecked'}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

// ── All states ────────────────────────────────────────────────────────────────

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="Required" required />
    </div>
  ),
}
