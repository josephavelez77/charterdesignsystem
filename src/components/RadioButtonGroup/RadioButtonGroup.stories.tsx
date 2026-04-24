import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { RadioButtonGroup } from './RadioButtonGroup'
import { RadioButtonItem } from '../RadioButtonItem'

const meta: Meta<typeof RadioButtonGroup> = {
  title: 'Components/RadioButtonGroup',
  component: RadioButtonGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'radio', options: ['vertical', 'horizontal'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const OPTIONS = ['Option one', 'Option two', 'Option three', 'Option four', 'Option five']

export const Vertical: Story = {
  render: () => {
    const [value, setValue] = useState('Option one')
    return (
      <RadioButtonGroup
        label="Select an option"
        name="group-vertical"
        value={value}
        onChange={setValue}
      >
        {OPTIONS.map((opt) => (
          <RadioButtonItem key={opt} label={opt} value={opt} />
        ))}
      </RadioButtonGroup>
    )
  },
}

export const Horizontal: Story = {
  render: () => {
    const [value, setValue] = useState('Option one')
    return (
      <RadioButtonGroup
        label="Select an option"
        name="group-horizontal"
        orientation="horizontal"
        value={value}
        onChange={setValue}
      >
        {OPTIONS.map((opt) => (
          <RadioButtonItem key={opt} label={opt} value={opt} />
        ))}
      </RadioButtonGroup>
    )
  },
}

export const NoLabel: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <RadioButtonGroup name="group-nolabel" value={value} onChange={setValue}>
        {OPTIONS.slice(0, 3).map((opt) => (
          <RadioButtonItem key={opt} label={opt} value={opt} />
        ))}
      </RadioButtonGroup>
    )
  },
}

export const WithDisabledItems: Story = {
  render: () => {
    const [value, setValue] = useState('one')
    return (
      <RadioButtonGroup label="Select an option" name="group-disabled" value={value} onChange={setValue}>
        <RadioButtonItem label="Option one" value="one" />
        <RadioButtonItem label="Option two" value="two" />
        <RadioButtonItem label="Option three (disabled)" value="three" disabled />
        <RadioButtonItem label="Option four" value="four" />
      </RadioButtonGroup>
    )
  },
}
