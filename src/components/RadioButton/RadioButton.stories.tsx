import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { RadioButton } from './RadioButton'

const meta: Meta<typeof RadioButton> = {
  title: 'Inputs/RadioButton',
  component: RadioButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
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

export const Disabled: Story = {
  args: { checked: false, disabled: true },
}

export const DisabledSelected: Story = {
  args: { checked: true, disabled: true },
}

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <RadioButton
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <RadioButton checked={false} onChange={() => {}} />
      <RadioButton checked={true} onChange={() => {}} />
      <RadioButton checked={false} disabled onChange={() => {}} />
      <RadioButton checked={true} disabled onChange={() => {}} />
    </div>
  ),
}
