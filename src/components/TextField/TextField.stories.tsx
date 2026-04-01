import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from './TextField'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '352px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username or email address',
  },
}

export const WithValue: Story = {
  args: {
    label: 'Username',
    value: 'joseph.velez',
    readOnly: true,
  },
}

export const WithError: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    error: 'Username is required',
  },
}

export const WithHint: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username or email address',
    hint: 'Use your company email address',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    disabled: true,
  },
}
