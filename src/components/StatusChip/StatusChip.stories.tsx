import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { StatusChip } from './StatusChip'

const meta: Meta<typeof StatusChip> = {
  title: 'Chips/StatusChip',
  component: StatusChip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    label: 'Status',
  },
  argTypes: {
    statusType: {
      control: 'select',
      options: ['positive', 'caution', 'negative', 'neutral'],
    },
    level: {
      control: 'select',
      options: [1, 2, 3],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ── Individual variants ───────────────────────────────────────────────────────

export const Positive1: Story = { args: { statusType: 'positive', level: 1, label: 'Active' } }
export const Positive2: Story = { args: { statusType: 'positive', level: 2, label: 'Approved' } }
export const Positive3: Story = { args: { statusType: 'positive', level: 3, label: 'Complete' } }

export const Caution1: Story = { args: { statusType: 'caution', level: 1, label: 'Overdue' } }
export const Caution2: Story = { args: { statusType: 'caution', level: 2, label: 'At Risk' } }
export const Caution3: Story = { args: { statusType: 'caution', level: 3, label: 'Pending' } }

export const Negative1: Story = { args: { statusType: 'negative', level: 1, label: 'Blocked' } }
export const Negative2: Story = { args: { statusType: 'negative', level: 2, label: 'Failed' } }
export const Negative3: Story = { args: { statusType: 'negative', level: 3, label: 'Cancelled' } }

export const Neutral1: Story = { args: { statusType: 'neutral', level: 1, label: 'Draft' } }
export const Neutral2: Story = { args: { statusType: 'neutral', level: 2, label: 'In Review' } }
export const Neutral3: Story = { args: { statusType: 'neutral', level: 3, label: 'On Hold' } }

// ── All variants ──────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <StatusChip statusType="positive" level={1} label="Active" />
        <StatusChip statusType="positive" level={2} label="Approved" />
        <StatusChip statusType="positive" level={3} label="Complete" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <StatusChip statusType="caution" level={1} label="Overdue" />
        <StatusChip statusType="caution" level={2} label="At Risk" />
        <StatusChip statusType="caution" level={3} label="Pending" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <StatusChip statusType="negative" level={1} label="Blocked" />
        <StatusChip statusType="negative" level={2} label="Failed" />
        <StatusChip statusType="negative" level={3} label="Cancelled" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <StatusChip statusType="neutral" level={1} label="Draft" />
        <StatusChip statusType="neutral" level={2} label="In Review" />
        <StatusChip statusType="neutral" level={3} label="On Hold" />
      </div>
    </div>
  ),
}
