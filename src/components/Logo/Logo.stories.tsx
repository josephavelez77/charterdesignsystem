import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Brand/Logo',
  component: Logo,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['horizontal', 'vertical', 'icon'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  args: { variant: 'horizontal' },
}

export const Vertical: Story = {
  args: { variant: 'vertical' },
}

export const Icon: Story = {
  args: { variant: 'icon' },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <Logo variant="horizontal" />
      <Logo variant="vertical" />
      <Logo variant="icon" />
    </div>
  ),
}
