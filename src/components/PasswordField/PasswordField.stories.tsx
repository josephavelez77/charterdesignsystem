import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PasswordField } from './PasswordField'

const meta = {
  title: 'Components/PasswordField',
  component: PasswordField,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '352px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PasswordField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
  },
}

export const WithHint: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    hint: 'Must be at least 8 characters',
  },
}

export const WithError: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    error: 'Password is incorrect',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    disabled: true,
  },
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 352 }}>
      <PasswordField label="Password" placeholder="Enter your password" hint="Must be at least 8 characters" />
      <PasswordField label="Password" placeholder="Enter your password" disabled />
      <PasswordField label="Password" placeholder="Enter your password" error="Password is incorrect" />
    </div>
  ),
}
