import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { PriorityChip } from './PriorityChip'

const meta: Meta<typeof PriorityChip> = {
  title: 'Chips/PriorityChip',
  component: PriorityChip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    priority: {
      control: 'select',
      options: ['urgent', 'high', 'medium', 'low'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ── Variants ──────────────────────────────────────────────────────────────────

export const Urgent: Story = { args: { priority: 'urgent' } }
export const High: Story = { args: { priority: 'high' } }
export const Medium: Story = { args: { priority: 'medium' } }
export const Low: Story = { args: { priority: 'low' } }

// ── All variants ──────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
      <PriorityChip priority="urgent" />
      <PriorityChip priority="high" />
      <PriorityChip priority="medium" />
      <PriorityChip priority="low" />
    </div>
  ),
}
