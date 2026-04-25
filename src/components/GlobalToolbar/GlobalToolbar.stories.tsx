import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { GlobalToolbar } from './GlobalToolbar'

const meta: Meta<typeof GlobalToolbar> = {
  title: 'Navigation/GlobalToolbar',
  component: GlobalToolbar,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithInitials: Story = {
  args: { avatarInitials: 'JV' },
}

export const WithImage: Story = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=12',
    avatarInitials: 'JV',
  },
}
