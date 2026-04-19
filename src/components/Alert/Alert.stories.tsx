import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: {
    children: 'Alert content lorem ipsum dolor',
    severity: 'info',
    dismissible: false,
  },
  argTypes: {
    severity: {
      control: 'select',
      options: ['error', 'warning', 'success', 'info'],
    },
    dismissible: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Error: Story = {
  args: { severity: 'error' },
}

export const Warning: Story = {
  args: { severity: 'warning' },
}

export const Success: Story = {
  args: { severity: 'success' },
}

export const Info: Story = {
  args: { severity: 'info' },
}

export const Dismissible: Story = {
  args: { severity: 'error', dismissible: true },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '700px' }}>
      {(['error', 'warning', 'success', 'info'] as const).map((severity) => (
        <Alert key={severity} severity={severity} dismissible>
          Alert content lorem ipsum dolor
        </Alert>
      ))}
    </div>
  ),
}
