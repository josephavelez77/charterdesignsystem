import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ChartCard } from './ChartCard'

const meta: Meta<typeof ChartCard> = {
  title: 'Data Display/ChartCard',
  component: ChartCard,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const weeklyData = [
  { label: 'Mon', value: 42 },
  { label: 'Tue', value: 67 },
  { label: 'Wed', value: 55 },
  { label: 'Thu', value: 80 },
  { label: 'Fri', value: 73 },
  { label: 'Sat', value: 30 },
  { label: 'Sun', value: 18 },
]

const monthlyData = Array.from({ length: 30 }, (_, i) => ({
  label: `${i + 1}`,
  value: Math.floor(Math.random() * 100) + 10,
}))

export const Default: Story = {
  args: {
    value: '48,200',
    description: 'Page views this week',
    data: weeklyData,
  },
}

export const ManyBars: Story = {
  args: {
    value: '1.2M',
    description: 'Events this month',
    data: monthlyData,
  },
}

export const SingleBar: Story = {
  args: {
    value: '99%',
    description: 'Uptime',
    data: [{ label: 'Uptime', value: 99 }],
  },
}

export const Grid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
      <ChartCard value="48,200" description="Page views this week" data={weeklyData} />
      <ChartCard
        value="1,340"
        description="Sign-ups this week"
        data={weeklyData.map((d) => ({ ...d, value: Math.floor(d.value / 3) }))}
      />
    </div>
  ),
}
