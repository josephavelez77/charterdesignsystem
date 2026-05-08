import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Breadcrumb } from './Breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const TwoLevels: Story = {
  args: {
    items: [
      { label: 'Home', onClick: () => {} },
      { label: 'Current page' },
    ],
  },
}

export const ThreeLevels: Story = {
  args: {
    items: [
      { label: 'Home', onClick: () => {} },
      { label: 'Section', onClick: () => {} },
      { label: 'Current page' },
    ],
  },
}

export const FiveLevels: Story = {
  args: {
    items: [
      { label: 'Home', onClick: () => {} },
      { label: 'Projects', onClick: () => {} },
      { label: 'Design System', onClick: () => {} },
      { label: 'Components', onClick: () => {} },
      { label: 'Breadcrumb' },
    ],
  },
}

export const WithHrefs: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Section', href: '/section' },
      { label: 'Current page' },
    ],
  },
}
