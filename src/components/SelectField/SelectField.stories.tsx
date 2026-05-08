import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { SelectField } from './SelectField'

const OPTIONS = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'durian', label: 'Durian', disabled: true },
  { value: 'elderberry', label: 'Elderberry' },
]

const meta = {
  title: 'Inputs/SelectField',
  component: SelectField,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '352px', paddingBottom: '200px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SelectField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Fruit',
    placeholder: 'Select a fruit',
    options: OPTIONS,
  },
}

export const WithValue: Story = {
  args: {
    label: 'Fruit',
    value: 'cherry',
    options: OPTIONS,
  },
}

export const WithLeadingIcon: Story = {
  args: {
    label: 'Fruit',
    placeholder: 'Select a fruit',
    leadingIcon: faHouse,
    options: OPTIONS,
  },
}

export const WithHint: Story = {
  args: {
    label: 'Fruit',
    placeholder: 'Select a fruit',
    hint: 'Choose your favourite fruit',
    options: OPTIONS,
  },
}

export const WithError: Story = {
  args: {
    label: 'Fruit',
    placeholder: 'Select a fruit',
    error: 'Please select a fruit',
    options: OPTIONS,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Fruit',
    placeholder: 'Select a fruit',
    disabled: true,
    options: OPTIONS,
  },
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 352, paddingBottom: 200 }}>
      <SelectField label="Fruit" placeholder="Select a fruit" options={OPTIONS} hint="Choose your favourite fruit" />
      <SelectField label="Fruit" placeholder="Select a fruit" options={OPTIONS} value="cherry" />
      <SelectField label="Fruit" placeholder="Select a fruit" options={OPTIONS} disabled />
      <SelectField label="Fruit" placeholder="Select a fruit" options={OPTIONS} error="Please select a fruit" />
    </div>
  ),
}
