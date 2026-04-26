import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { faArrowTrendUp, faArrowTrendDown, faUsers, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { KpiCard } from './KpiCard'

const meta: Meta<typeof KpiCard> = {
  title: 'Data Display/KpiCard',
  component: KpiCard,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: '12,450',
    description: 'Total Users',
  },
}

export const WithTrailingIcon: Story = {
  args: {
    value: '$48,200',
    description: 'Monthly Revenue',
    trailingIcon: faDollarSign,
  },
}

export const TrendUp: Story = {
  args: {
    value: '+24%',
    description: 'Growth this quarter',
    trailingIcon: faArrowTrendUp,
  },
}

export const TrendDown: Story = {
  args: {
    value: '-8%',
    description: 'Churn rate',
    trailingIcon: faArrowTrendDown,
  },
}

export const ActiveUsers: Story = {
  args: {
    value: '3,821',
    description: 'Active users today',
    trailingIcon: faUsers,
  },
}

export const Grid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      <KpiCard value="12,450" description="Total Users" trailingIcon={faUsers} />
      <KpiCard value="$48,200" description="Monthly Revenue" trailingIcon={faDollarSign} />
      <KpiCard value="+24%" description="Growth this quarter" trailingIcon={faArrowTrendUp} />
    </div>
  ),
}
