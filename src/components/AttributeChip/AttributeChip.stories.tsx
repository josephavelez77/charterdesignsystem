import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { faHouse, faTag, faStar, faCircle } from '@fortawesome/free-solid-svg-icons'
import { AttributeChip } from './AttributeChip'

const meta: Meta<typeof AttributeChip> = {
  title: 'Chips/AttributeChip',
  component: AttributeChip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    label: 'Chip label',
    icon: faHouse,
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ── States ────────────────────────────────────────────────────────────────────

export const Rest: Story = {}

export const WithoutIcon: Story = {
  args: { icon: undefined },
}

export const Disabled: Story = {
  args: { disabled: true },
}

// ── All states ────────────────────────────────────────────────────────────────

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
      <AttributeChip label="Rest" icon={faHouse} />
      <AttributeChip label="No icon" />
      <AttributeChip label="Disabled" icon={faHouse} disabled />
    </div>
  ),
}

// ── Multiselect example ───────────────────────────────────────────────────────

const TAGS = [
  { id: 'home',    label: 'Home',    icon: faHouse },
  { id: 'tag',     label: 'Tags',    icon: faTag },
  { id: 'starred', label: 'Starred', icon: faStar },
  { id: 'other',   label: 'Other',   icon: faCircle },
]

export const MultiselectExample: Story = {
  render: () => {
    const [selected, setSelected] = useState(new Set(TAGS.map((t) => t.id)))
    const remove = (id: string) =>
      setSelected((prev) => {
        const next = new Set(prev)
        next.delete(id)
        return next
      })

    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {TAGS.filter((t) => selected.has(t.id)).map(({ id, label, icon }) => (
          <AttributeChip key={id} label={label} icon={icon} onDismiss={() => remove(id)} />
        ))}
      </div>
    )
  },
}
