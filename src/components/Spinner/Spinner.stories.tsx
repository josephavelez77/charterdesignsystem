import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Feedback/Spinner',
  component: Spinner,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    color: { control: 'select', options: ['brand', 'light', 'neutral'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = { args: { size: 'small' } }
export const Medium: Story = { args: { size: 'medium' } }
export const Large: Story = { args: { size: 'large' } }

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
    </div>
  ),
}

export const LightOnDark: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '24px', background: 'var(--container-color-static-brand-primary)', borderRadius: '8px' }}>
      <Spinner size="small" color="light" />
      <Spinner size="medium" color="light" />
      <Spinner size="large" color="light" />
    </div>
  ),
}
