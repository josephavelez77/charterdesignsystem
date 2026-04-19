import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { faHouse, faTag, faStar, faCircle } from '@fortawesome/free-solid-svg-icons'
import { Chip } from './Chip'

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    label: 'Chip label',
  },
  argTypes: {
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ── States ────────────────────────────────────────────────────────────────────

export const Rest: Story = {
  args: { label: 'Chip label', icon: faHouse },
}

export const Selected: Story = {
  args: { label: 'Chip label', icon: faHouse, defaultSelected: true },
}

export const WithoutIcon: Story = {
  args: { label: 'Chip label' },
}

export const Disabled: Story = {
  args: { label: 'Chip label', icon: faHouse, disabled: true },
}

export const DisabledSelected: Story = {
  args: { label: 'Chip label', icon: faHouse, disabled: true, defaultSelected: true },
}

// ── All states ────────────────────────────────────────────────────────────────

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
      <Chip label="Rest" icon={faHouse} />
      <Chip label="Selected" icon={faHouse} defaultSelected />
      <Chip label="Disabled" icon={faHouse} disabled />
      <Chip label="Disabled selected" icon={faHouse} disabled defaultSelected />
      <Chip label="No icon" />
    </div>
  ),
}

// ── Filter group ──────────────────────────────────────────────────────────────

const FILTERS = [
  { id: 'home',     label: 'Home',      icon: faHouse },
  { id: 'tag',      label: 'Tags',      icon: faTag },
  { id: 'starred',  label: 'Starred',   icon: faStar },
  { id: 'other',    label: 'Other',     icon: faCircle },
]

export const FilterGroup: Story = {
  render: () => {
    const [active, setActive] = useState<Set<string>>(new Set())

    const toggle = (id: string) =>
      setActive((prev) => {
        const next = new Set(prev)
        next.has(id) ? next.delete(id) : next.add(id)
        return next
      })

    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {FILTERS.map(({ id, label, icon }) => (
          <Chip
            key={id}
            label={label}
            icon={icon}
            selected={active.has(id)}
            onChange={() => toggle(id)}
          />
        ))}
      </div>
    )
  },
}
