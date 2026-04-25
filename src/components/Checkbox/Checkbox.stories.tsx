import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Inputs/Checkbox',
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

// ── Indeterminate ─────────────────────────────────────────────────────────────

export const Indeterminate: Story = {
  args: { label: 'Checkbox label', indeterminate: true },
}

export const NestedGroup: Story = {
  render: () => {
    const [items, setItems] = useState([false, false, false])

    const allChecked = items.every(Boolean)
    const someChecked = items.some(Boolean) && !allChecked

    const toggleParent = () => {
      const next = !allChecked
      setItems([next, next, next])
    }

    const toggleItem = (i: number) => {
      setItems((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Checkbox
          label="Select all"
          checked={allChecked}
          indeterminate={someChecked}
          onChange={toggleParent}
        />
        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '16px' }}>
          {['Option one', 'Option two', 'Option three'].map((opt, i) => (
            <Checkbox
              key={opt}
              label={opt}
              checked={items[i]}
              onChange={() => toggleItem(i)}
            />
          ))}
        </div>
      </div>
    )
  },
}

// ── All states ────────────────────────────────────────────────────────────────

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="Required" required />
    </div>
  ),
}
