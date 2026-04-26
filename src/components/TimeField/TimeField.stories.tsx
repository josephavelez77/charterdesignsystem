import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TimeField } from './TimeField'

const meta: Meta<typeof TimeField> = {
  title: 'Inputs/TimeField',
  component: TimeField,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ maxWidth: 280 }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: 'Time' },
}

export const WithValue12h: Story = {
  args: { label: 'Meeting time', value: { hours: 14, minutes: 30 }, format: '12h' },
}

export const WithValue24h: Story = {
  args: { label: 'Start time', value: { hours: 14, minutes: 30 }, format: '24h' },
}

export const WithError: Story = {
  args: { label: 'Departure time', error: 'Please select a valid time' },
}

export const WithHint: Story = {
  args: { label: 'Reminder time', hint: 'Times are in your local timezone' },
}

export const Required: Story = {
  args: { label: 'Appointment time', required: true },
}

export const Disabled: Story = {
  args: { label: 'Time', value: { hours: 9, minutes: 0 }, disabled: true },
}
