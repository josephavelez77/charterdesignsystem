import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 560 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Short: Story = {
  args: { width: '40%', height: 24 },
}

export const Tall: Story = {
  args: { height: 48 },
}

export const Circle: Story = {
  args: { shape: 'circle', height: 40 },
}

// ── Content placeholder examples ──────────────────────────────────────────────

export const TextBlock: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Skeleton width="60%" height={20} />
      <Skeleton width="100%" height={16} />
      <Skeleton width="100%" height={16} />
      <Skeleton width="80%" height={16} />
    </div>
  ),
}

export const CardPlaceholder: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px', border: '1px solid var(--border-color-themeable-primary)', borderRadius: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Skeleton shape="circle" height={40} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
          <Skeleton width="50%" height={16} />
          <Skeleton width="30%" height={14} />
        </div>
      </div>
      <Skeleton width="100%" height={16} />
      <Skeleton width="100%" height={16} />
      <Skeleton width="70%" height={16} />
    </div>
  ),
}
