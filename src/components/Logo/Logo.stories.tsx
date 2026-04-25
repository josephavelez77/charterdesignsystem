import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Brand/Logo',
  component: Logo,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    size: { control: 'select', options: ['small', 'large'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const HorizontalLarge: Story = {
  args: { orientation: 'horizontal', size: 'large' },
}

export const HorizontalSmall: Story = {
  args: { orientation: 'horizontal', size: 'small' },
}

export const VerticalLarge: Story = {
  args: { orientation: 'vertical', size: 'large' },
}

export const VerticalSmall: Story = {
  args: { orientation: 'vertical', size: 'small' },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
        <Logo orientation="horizontal" size="large" />
        <Logo orientation="horizontal" size="small" />
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '48px' }}>
        <Logo orientation="vertical" size="large" />
        <Logo orientation="vertical" size="small" />
      </div>
    </div>
  ),
}
