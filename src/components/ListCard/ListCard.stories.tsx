import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ListCard } from './ListCard'

const meta: Meta<typeof ListCard> = {
  title: 'Data Display/ListCard',
  component: ListCard,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const shortList = [
  { title: 'Alice Johnson', subtitle: 'Engineering' },
  { title: 'Bob Martinez', subtitle: 'Design' },
  { title: 'Carol White', subtitle: 'Product' },
  { title: 'David Lee', subtitle: 'Marketing' },
  { title: 'Eva Brown', subtitle: 'Sales' },
]

const longList = Array.from({ length: 25 }, (_, i) => ({
  title: `User ${i + 1}`,
  subtitle: ['Engineering', 'Design', 'Product', 'Marketing', 'Sales'][i % 5],
}))

export const Default: Story = {
  args: {
    value: '5',
    description: 'Team members',
    items: shortList,
  },
}

export const WithPagination: Story = {
  args: {
    value: '25',
    description: 'Active accounts',
    items: longList,
  },
}

export const EmptyList: Story = {
  args: {
    value: '0',
    description: 'Pending items',
    items: [],
  },
}
