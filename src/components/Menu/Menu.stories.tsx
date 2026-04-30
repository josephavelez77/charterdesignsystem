import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { faHouse, faUser, faCog, faTrash, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Menu } from './Menu'
import { MenuItem } from '../MenuItem/MenuItem'

const meta: Meta<typeof Menu> = {
  title: 'Data Display/Menu',
  component: Menu,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// ── Default ───────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <Menu>
      <MenuItem label="Menu label" />
      <MenuItem label="Menu label" />
      <MenuItem label="Menu label" />
      <MenuItem label="Menu label" />
      <MenuItem label="Menu label" />
    </Menu>
  ),
}

// ── With icons ─────────────────────────────────────────────────────────────────

export const WithIcons: Story = {
  render: () => (
    <Menu>
      <MenuItem label="Home" leadingIcon={faHouse} />
      <MenuItem label="Profile" leadingIcon={faUser} />
      <MenuItem label="Settings" leadingIcon={faCog} trailingIcon={faChevronRight} />
      <MenuItem label="Delete" leadingIcon={faTrash} />
    </Menu>
  ),
}

// ── With selected item ─────────────────────────────────────────────────────────

export const WithSelectedItem: Story = {
  render: () => (
    <Menu>
      <MenuItem label="Home" leadingIcon={faHouse} />
      <MenuItem label="Profile" leadingIcon={faUser} selected />
      <MenuItem label="Settings" leadingIcon={faCog} />
      <MenuItem label="Delete" leadingIcon={faTrash} disabled />
    </Menu>
  ),
}

// ── Scrollable (many items) ───────────────────────────────────────────────────

export const Scrollable: Story = {
  render: () => (
    <Menu>
      {Array.from({ length: 14 }, (_, i) => (
        <MenuItem key={i} label={`Menu item ${i + 1}`} />
      ))}
    </Menu>
  ),
}

// ── Interactive (single-select) ────────────────────────────────────────────────

const ITEMS = [
  { id: 'home',     label: 'Home',     icon: faHouse },
  { id: 'profile',  label: 'Profile',  icon: faUser },
  { id: 'settings', label: 'Settings', icon: faCog },
  { id: 'delete',   label: 'Delete',   icon: faTrash },
]

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState<string | null>('profile')

    return (
      <Menu>
        {ITEMS.map(({ id, label, icon }) => (
          <MenuItem
            key={id}
            label={label}
            leadingIcon={icon}
            selected={selected === id}
            onClick={() => setSelected(id)}
          />
        ))}
      </Menu>
    )
  },
}
