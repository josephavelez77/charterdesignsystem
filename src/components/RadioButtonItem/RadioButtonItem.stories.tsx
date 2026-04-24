import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { RadioButtonItem } from './RadioButtonItem'

const meta: Meta<typeof RadioButtonItem> = {
  title: 'Components/RadioButtonItem',
  component: RadioButtonItem,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    label: 'Radio button label',
    checked: false,
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Unselected: Story = {
  args: { checked: false },
}

export const Selected: Story = {
  args: { checked: true },
}

export const WithoutLabel: Story = {
  args: { label: undefined, checked: false },
}

export const Required: Story = {
  args: { label: 'Accept terms and conditions', required: true, checked: false },
}

export const Disabled: Story = {
  args: { disabled: true, checked: false },
}

export const DisabledSelected: Story = {
  args: { disabled: true, checked: true },
}

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <RadioButtonItem
        label={checked ? 'Selected' : 'Unselected'}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <RadioButtonItem label="Unselected" checked={false} onChange={() => {}} />
      <RadioButtonItem label="Selected" checked={true} onChange={() => {}} />
      <RadioButtonItem label="Disabled" checked={false} disabled onChange={() => {}} />
      <RadioButtonItem label="Disabled selected" checked={true} disabled onChange={() => {}} />
      <RadioButtonItem label="Required" checked={false} required onChange={() => {}} />
    </div>
  ),
}
